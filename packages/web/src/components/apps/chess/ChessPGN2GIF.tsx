/* eslint-disable @typescript-eslint/no-explicit-any */
import { INITIAL_PGN } from '@editor/constants/initial';
import { getHeaders, getMoves } from '@editor/utils/chess/pgn';
import { Chess } from 'chess.js';
import GIF from 'gif.js';
import html2canvas from 'html2canvas-pro';
import { FC, useRef, useState } from 'react';
import { FaDownload, FaSpinner } from 'react-icons/fa6';
import { Chessboard } from './ChessBoard';

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

export const PGN2GIF: FC = () => {
  const [{ game = new Chess(), pgn = INITIAL_PGN, loading = false }, setState] = useState<{
    game: Chess;
    pgn: string;
    loading: boolean;
  }>({ pgn: INITIAL_PGN, game: new Chess(), loading: false });
  const divRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex w-full max-w-sm flex-col gap-y-4 overflow-x-hidden">
      <textarea
        rows={2}
        name="pgn"
        placeholder="PGN"
        value={pgn}
        onChange={(event) => setState((previous) => ({ ...previous, pgn: event.target.value }))}
        className="w-full rounded border border-neutral-800 px-4 py-2"
      />
      <div id="board" ref={divRef} className="relative aspect-square">
        {!loading ? (
          <div className="absolute top-0 right-0 bottom-0 left-0 z-10 flex items-center justify-center px-4">
            <button
              type="button"
              disabled={loading}
              className="cursor-pointer rounded-full bg-red-500 p-4 text-center text-neutral-100"
              onClick={async () => {
                // Start Loading
                setState((previous) => ({ ...previous, loading: true }));
                const moves = getMoves(pgn);
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

                await downloadGIF({ base64s, pgn });
                setState((previous) => ({ ...previous, loading: false }));
              }}>
              {loading ? <FaSpinner className="mx-auto animate-spin" /> : <FaDownload className="mx-auto" />}
            </button>
          </div>
        ) : (
          <div className="absolute top-0 right-0 bottom-0 left-0 z-10 flex items-center justify-center px-4">
            <FaSpinner className="animate-spin" />
          </div>
        )}
        <div id="board" ref={divRef} className="aspect-square w-full overflow-hidden rounded border border-neutral-800">
          <Chessboard position={game.fen()} />
        </div>
      </div>
    </div>
  );
};
