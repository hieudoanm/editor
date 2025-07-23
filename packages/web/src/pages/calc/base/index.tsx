import { Divider } from '@editor/components/shared/Divider';
import { Glass } from '@editor/components/shared/Glass';
import { Linear } from '@editor/components/shared/Linear';
import { Navbar } from '@editor/components/shared/Navbar';
import { base } from '@editor/utils/number/base';
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
    <div className="h-screen w-screen">
      <Linear.Background />
      <div className="relative z-100 flex h-full flex-col">
        <Navbar />
        <Divider />
        <div className="container mx-auto flex w-full grow items-center justify-center p-4 md:p-8">
          <Glass.Card className="flex w-full max-w-sm flex-col gap-y-2 divide-y divide-white/10">
            {[
              { fromBase: 2, value: base2 },
              { fromBase: 8, value: base8 },
              { fromBase: 10, value: base10 },
              { fromBase: 16, value: base16 },
            ].map(({ fromBase, value }) => {
              return (
                <div key={fromBase} className="flex items-center justify-center gap-x-2 px-4 py-2">
                  <span className="whitespace-nowrap">Base {fromBase}</span>
                  <input
                    type="text"
                    id={`base${fromBase}`}
                    placeholder={`Base ${fromBase}`}
                    value={value}
                    className="grow text-right focus:outline-none"
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
                  />
                </div>
              );
            })}
          </Glass.Card>
        </div>
      </div>
    </div>
  );
};

export default BasePage;
