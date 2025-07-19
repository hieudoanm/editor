import { Navbar } from '@editor/components/shared/Navbar';
import { base } from '@editor/utils/base';
import { NextPage } from 'next';
import { useState } from 'react';

const INITIAL_NUMBER: number = 10;

const BasePage: NextPage = () => {
  const [
    {
      base2 = base(INITIAL_NUMBER).from(10).to(2),
      base8 = base(INITIAL_NUMBER).from(10).to(8),
      base10 = INITIAL_NUMBER.toString(),
      base16 = base(INITIAL_NUMBER).from(10).to(16),
    },
    setState,
  ] = useState<{
    base2: string;
    base8: string;
    base10: string;
    base16: string;
  }>({
    base2: base(INITIAL_NUMBER).from(10).to(2),
    base8: base(INITIAL_NUMBER).from(10).to(8),
    base10: INITIAL_NUMBER.toString(),
    base16: base(INITIAL_NUMBER).from(10).to(16),
  });
  return (
    <div className="flex h-screen w-screen flex-col">
      <Navbar />
      <div className="w-full border-t border-neutral-800" />
      <div className="flex w-full grow items-center justify-center">
        <div className="flex w-full max-w-sm flex-col gap-y-2 divide-y divide-neutral-800 rounded-xl border border-neutral-800">
          {[
            { fromBase: 2, value: base2 },
            { fromBase: 8, value: base8 },
            { fromBase: 10, value: base10 },
            { fromBase: 16, value: base16 },
          ].map(({ fromBase, value }) => {
            return (
              <div key={fromBase} className="flex items-center justify-center gap-x-2 px-4 py-2">
                <span>Base {fromBase}</span>
                <input
                  type="text"
                  id={`base${fromBase}`}
                  placeholder={`Base ${fromBase}`}
                  value={value}
                  onChange={(event) => {
                    const newValue = event.target.value;
                    const newNumber: number = parseInt(newValue);
                    setState((previous) => ({
                      ...previous,
                      base2: base(newNumber).from(fromBase).to(2),
                      base8: base(newNumber).from(fromBase).to(8),
                      base10: base(newNumber).from(fromBase).to(10),
                      base16: base(newNumber).from(fromBase).to(16),
                    }));
                  }}
                  className="grow text-right focus:outline-none"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BasePage;
