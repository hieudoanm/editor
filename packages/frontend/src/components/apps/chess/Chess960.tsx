/* eslint-disable @typescript-eslint/no-explicit-any */
import { Chessboard } from '@editor/components/apps/chess/ChessBoard';
import { ChessClock } from '@editor/components/apps/chess/ChessClock';
import { Divider } from '@editor/components/shared/Divider';
import { Glass } from '@editor/components/shared/Glass';
import chess960 from '@editor/json/chess/chess960.json';
import { download } from '@editor/utils/canvas';
import { getHeaders, getMoves, simplifyPGN } from '@editor/utils/chess/pgn';
import openings from '@editor/json/chess/openings.json';
import { addZero, range } from '@editor/utils/number/format';
import { Chess } from 'chess.js';
import GIF from 'gif.js';
import html2canvas from 'html2canvas-pro';
import { ChangeEvent, FC, useRef, useState } from 'react';
import { DraggingPieceDataType } from 'react-chessboard';
import { PiArrowCounterClockwise, PiArrowUUpLeft, PiShuffle } from 'react-icons/pi';
import { copy } from '@editor/utils/copy';

const toFen = (position: string) => {
  return `${position.toLowerCase()}/pppppppp/8/8/8/8/PPPPPPPP/${position.toUpperCase()} w KQkq - 0 1`;
};

const downloadGIF = ({ base64s, pgn }: { base64s: string[]; pgn: string }): Promise<void> => {
  return new Promise((resolve) => {
    const gif = new GIF({
      workers: 1,
      quality: 10,
      workerScript: '/workers/gif.worker.js',
    });

    let loadedImages = 0;
    base64s.forEach((base64: string) => {
      const img = new Image();
      img.src = base64;
      img.onload = () => {
        gif.addFrame(img, { delay: 500 }); // 500ms delay per frame
        loadedImages++;

        if (loadedImages === base64s.length) {
          gif.render();
        }
      };
    });

    gif.on('start', () => {
      console.info('start');
    });

    gif.on('progress', (percentage) => {
      console.info('progressing', percentage);
    });

    gif.on('finished', (blob: any) => {
      const gifURL: string = URL.createObjectURL(blob);
      // Create a download link
      const link = document.createElement('a');
      link.href = gifURL;
      const headers = getHeaders(pgn);
      const name: string = `${headers['White'] ?? ''} vs ${headers['Black'] ?? ''}`.trim();
      link.download = `${name}.gif`;
      link.click();
      link.remove();
      resolve();
    });

    gif.on('abort', () => {
      resolve();
    });
  });
};

const INITIAL_ID: number = 518;
const INITIAL_POSITION: string = chess960.at(INITIAL_ID) ?? '';
const INITIAL_FEN: string = toFen(INITIAL_POSITION);
const INITIAL_GAME = new Chess(INITIAL_FEN);

export const Chess960: FC = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [
    { id = INITIAL_ID, game = INITIAL_GAME, gamePGN = simplifyPGN(INITIAL_GAME.pgn()), loading = false },
    setState,
  ] = useState<{
    id: number;
    game: Chess;
    gamePGN: string;
    loading: boolean;
  }>({
    id: INITIAL_ID,
    game: INITIAL_GAME,
    gamePGN: simplifyPGN(INITIAL_GAME.pgn()),
    loading: false,
  });

  const reset = () => {
    const position: string = chess960[id];
    const fen = toFen(position);
    const game = new Chess(fen);
    setState((previous) => ({
      ...previous,
      game,
      gamePGN: simplifyPGN(game.pgn()),
    }));
  };

  const randomise = () => {
    const randomId = Math.floor(Math.random() * 960);
    const position: string = chess960[randomId];
    const fen = toFen(position);
    const game = new Chess(fen);
    setState((previous) => ({
      ...previous,
      id: randomId,
      game,
      gamePGN: simplifyPGN(game.pgn()),
    }));
  };

  const makeMove = (move: { from: string; to: string; promotion: string }) => {
    try {
      const result = game.move(move);
      if (move !== null) {
        setState((previous) => ({
          ...previous,
          game,
          gamePGN: simplifyPGN(game.pgn()),
        }));
      }
      return result; // null if the move was illegal, the move object if the move was legal
    } catch (error) {
      console.error(error);
    }
  };

  const onPieceDrop = ({
    piece,
    sourceSquare,
    targetSquare,
  }: {
    piece: DraggingPieceDataType;
    sourceSquare: string;
    targetSquare: string | null;
  }) => {
    console.info(piece);
    const move = makeMove({
      from: sourceSquare,
      to: targetSquare!,
      promotion: 'q', // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return false;
    return true;
  };

  const openingIndex: number = openings.findIndex(({ pgn }) => pgn === gamePGN || pgn.includes(gamePGN));

  const filterOpenings = openings.filter(({ pgn }) => {
    const allMoves = pgn.split(' ');
    const currentMove = gamePGN.split(' ');
    const currentMoveIndex = currentMove.length;
    const restMoves = allMoves.splice(currentMoveIndex);
    return pgn.length === 0 ? true : pgn === gamePGN || (pgn.includes(gamePGN) && restMoves.length > 0);
  });

  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
      <div className="col-span-1">
        <div className="mx-auto flex w-full max-w-md flex-col gap-y-4 md:gap-y-8">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:gap-4">
            <h2 className="text-center text-3xl font-black md:text-4xl">
              <span>Chess</span>
              <select
                id="id"
                name="id"
                value={id}
                className="appearance-none"
                onChange={(event: ChangeEvent<HTMLSelectElement>) => {
                  const newId: number = parseInt(event.target.value, 10) ?? 0;
                  const newPosition: string = chess960.at(newId) ?? '';
                  const newFEN = toFen(newPosition);
                  const newGame = new Chess(newFEN);
                  setState((previous) => ({
                    ...previous,
                    id: newId,
                    game: newGame,
                    gamePGN: simplifyPGN(game.pgn()),
                  }));
                }}>
                {range(0, 959).map((positionIndex: number) => {
                  return (
                    <option key={positionIndex} value={positionIndex}>
                      {addZero(positionIndex, 3)}
                    </option>
                  );
                })}
              </select>
            </h2>
            <div className="flex w-full items-center gap-x-2 md:w-auto md:gap-x-4">
              {gamePGN !== '' && (
                <Glass.Button
                  type="button"
                  className="w-full md:w-auto"
                  onClick={() => {
                    game.undo();
                    const newGamePGN: string = simplifyPGN(game.pgn());
                    setState((previous) => ({ ...previous, game, gamePGN: newGamePGN }));
                  }}>
                  <PiArrowUUpLeft />
                </Glass.Button>
              )}
              {gamePGN !== '' && (
                <Glass.Button type="button" className="w-full md:w-auto" onClick={reset}>
                  <PiArrowCounterClockwise />
                </Glass.Button>
              )}
              <Glass.Button type="button" className="w-full md:w-auto" onClick={randomise}>
                <PiShuffle />
              </Glass.Button>
            </div>
          </div>
          <div id="board" ref={divRef} className="aspect-square w-full overflow-hidden border border-neutral-800">
            <Chessboard allowDragging canDragPiece={() => true} position={game.fen()} onPieceDrop={onPieceDrop} />
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col gap-y-4 md:gap-y-8">
          {id === INITIAL_ID && (
            <>
              <details className="flex flex-col gap-y-4 md:gap-y-8">
                <summary className="cursor-pointer list-none">
                  <h3 className="truncate text-center text-2xl font-black whitespace-nowrap md:text-3xl">
                    {filterOpenings.length < openings.length ? (
                      <strong>{openings.at(openingIndex)?.name ?? 'Opening'}</strong>
                    ) : (
                      <strong>Openings ({filterOpenings.length})</strong>
                    )}
                  </h3>
                </summary>
                <div className="mt-4 flex flex-col gap-y-2 md:mt-8 md:gap-y-4">
                  {filterOpenings.slice(0, 5).map(({ eco, name, pgn }) => {
                    const allMoves: string[] = pgn.split(' ');
                    const currentMoves: string[] = gamePGN.split(' ');
                    const currentMoveIndex = currentMoves.length;
                    const currentMoveNumber = Math.floor(currentMoveIndex / 3);
                    const restMoves = allMoves.splice(currentMoveIndex);

                    return (
                      <div key={pgn} className="flex flex-col gap-y-2 md:gap-y-4">
                        <Divider />
                        <button
                          title={`${eco}. ${name}`}
                          type="button"
                          className="flex w-full cursor-pointer flex-col gap-y-1 text-left"
                          onClick={async () => {
                            copy(pgn);
                          }}>
                          <p className="max-w-sm truncate md:max-w-full">
                            {eco}. <span className="font-bold">{name}</span>
                          </p>
                          <p className="max-w-sm truncate md:max-w-full">
                            <span className="text-red-500">
                              {restMoves.length > 0 ? (
                                <>
                                  {currentMoveIndex === 1 && '1.'}
                                  {currentMoveIndex === 2 && '1. ...'}
                                  {currentMoveIndex > 2 && currentMoveIndex % 3 === 1 && `${currentMoveNumber}.`}
                                  {currentMoveIndex > 2 &&
                                    currentMoveIndex % 3 === 2 &&
                                    `${currentMoveNumber + 1}. ...`}
                                  {restMoves.join(' ')}
                                </>
                              ) : (
                                <>{pgn}</>
                              )}
                            </span>
                          </p>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </details>
              <Divider />
            </>
          )}
          <details className="flex flex-col gap-y-4 md:gap-y-8">
            <summary className="cursor-pointer list-none">
              <h3 className="text-center text-2xl font-black md:text-3xl">FEN to PNG</h3>
            </summary>
            <div className="mt-4 flex flex-col gap-y-4 md:mt-8 md:gap-y-8">
              <Glass.Input
                type="text"
                name="fen"
                placeholder="FEN"
                value={game.fen()}
                onChange={(event) => {
                  const newFEN = event.target.value;
                  const newGame = new Chess(newFEN);
                  setState((previous) => ({ ...previous, game: newGame, gamePGN: simplifyPGN(game.pgn()) }));
                }}
              />
              <Glass.Button
                type="button"
                onClick={() => {
                  download({ ref: divRef, output: 'fen' });
                }}>
                Download PNG
              </Glass.Button>
            </div>
          </details>
          <Divider />
          <details className="flex flex-col gap-y-4 md:gap-y-8">
            <summary className="cursor-pointer list-none">
              <h3 className="text-center text-2xl font-black md:text-3xl">PGN to GIF</h3>
            </summary>
            <div className="mt-4 flex flex-col gap-y-4 md:mt-8 md:gap-y-8">
              <Glass.TextArea
                rows={4}
                name="pgn"
                placeholder="PGN"
                value={gamePGN}
                onChange={(event) => {
                  const newPGN = event.target.value;
                  const newGame = new Chess();
                  newGame.loadPgn(newPGN);
                  setState((previous) => ({ ...previous, game: newGame, gamePGN: newGame.pgn() }));
                }}
                className="w-full rounded border border-neutral-800 px-4 py-2"
              />
              <Glass.Button
                type="button"
                disabled={loading}
                className="w-full"
                onClick={async () => {
                  // Start Loading
                  setState((previous) => ({ ...previous, loading: true }));
                  if (gamePGN === '') {
                    setState((previous) => ({ ...previous, loading: false }));
                    return;
                  }

                  const moves = getMoves(gamePGN);
                  const newGame = new Chess();
                  setState((previous) => ({ ...previous, game: newGame }));

                  const base64s: string[] = [];
                  for (const move of moves) {
                    setState((previous) => {
                      console.info(previous.game.fen());
                      const newGame = new Chess(previous.game.fen());
                      newGame.move(move);

                      return { ...previous, game: new Chess(newGame.fen()) };
                    });

                    if (divRef.current) {
                      const canvas = await html2canvas(divRef.current);
                      const base64 = canvas.toDataURL('image/png');
                      base64s.push(base64);
                    }
                  }

                  await downloadGIF({ base64s, pgn: gamePGN });
                  setState((previous) => ({ ...previous, loading: false }));
                }}>
                {loading ? 'Loading' : 'Download GIF'}
              </Glass.Button>
            </div>
          </details>
          <Divider />
          <details className="flex flex-col gap-y-4 md:gap-y-8">
            <summary className="cursor-pointer list-none">
              <h3 className="text-center text-2xl font-black md:text-3xl">Clock</h3>
            </summary>
            <div className="mt-4 md:mt-8">
              <ChessClock />
            </div>
          </details>
          <Divider />
        </div>
      </div>
    </div>
  );
};
