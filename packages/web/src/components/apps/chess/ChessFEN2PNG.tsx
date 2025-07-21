import { INTITAL_FEN } from '@editor/constants/initial';
import { download } from '@editor/utils/canvas';
import { useRef, useState } from 'react';
import { PiDownload } from 'react-icons/pi';
import { Chessboard } from './ChessBoard';

export const ChessFEN2PNG = () => {
  const [{ fen }, setState] = useState({ fen: INTITAL_FEN });
  const divRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex w-full max-w-sm flex-col gap-y-4">
      <div id="board" ref={divRef} className="overflow-hidden rounded border border-neutral-800">
        <Chessboard position={fen} />
      </div>
      <div className="flex items-center justify-center gap-x-4">
        <input
          type="text"
          name="fen"
          placeholder="FEN"
          value={fen}
          onChange={(event) => setState((previous) => ({ ...previous, fen: event.target.value }))}
          className="w-full grow rounded border border-neutral-800 px-4 py-2 text-xs"
        />
        <button
          type="button"
          className="cursor-pointer rounded border border-neutral-800 bg-neutral-900 px-4 py-2 text-neutral-100"
          onClick={() => {
            download({ ref: divRef, output: 'fen' });
          }}>
          <PiDownload />
        </button>
      </div>
    </div>
  );
};
