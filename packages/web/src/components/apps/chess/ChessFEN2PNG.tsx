import { INTITAL_FEN } from '@editor/constants/initial';
import { download } from '@editor/utils/canvas';
import { useRef, useState } from 'react';
import { PiDownload } from 'react-icons/pi';
import { Chessboard } from './ChessBoard';
import { Glass } from '@editor/components/shared/Glass';

export const ChessFEN2PNG = () => {
  const [{ fen }, setState] = useState({ fen: INTITAL_FEN });
  const divRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="flex w-full max-w-md flex-col gap-y-4">
      <div id="board" ref={divRef} className="overflow-hidden rounded border border-neutral-800">
        <Chessboard position={fen} />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <Glass.Input
          type="text"
          name="fen"
          placeholder="FEN"
          value={fen}
          onChange={(event) => setState((previous) => ({ ...previous, fen: event.target.value }))}
          className="w-full grow rounded border border-neutral-800 px-4 py-2 text-xs"
        />
        <Glass.Button
          type="button"
          className="w-full cursor-pointer md:w-auto"
          onClick={() => {
            download({ ref: divRef, output: 'fen' });
          }}>
          <PiDownload />
        </Glass.Button>
      </div>
    </div>
  );
};
