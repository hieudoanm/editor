import { Divider } from '@editor/components/shared/Divider';
import { Glass } from '@editor/components/shared/Glass';
import { Linear } from '@editor/components/shared/Linear';
import { Navbar } from '@editor/components/shared/Navbar';
import { arabic2roman, roman2arabic } from '@editor/utils/number/roman';
import { NextPage } from 'next';
import { useState } from 'react';

const INITIAL_NUMBER: number = 10;

const RomanPage: NextPage = () => {
  const [{ arabicNumber = INITIAL_NUMBER.toString(), romanNumber = arabic2roman(INITIAL_NUMBER) }, setState] =
    useState<{
      arabicNumber: string;
      romanNumber: string;
    }>({
      arabicNumber: INITIAL_NUMBER.toString(),
      romanNumber: arabic2roman(INITIAL_NUMBER),
    });

  return (
    <div className="h-screen w-screen">
      <Linear.Background />
      <div className="relative z-10 flex h-full flex-col">
        <Navbar />
        <Divider />
        <div className="container mx-auto flex w-full grow items-center justify-center p-4 md:p-8">
          <Glass.Card className="flex w-full max-w-sm flex-col gap-y-2 divide-y divide-white/10">
            {[
              { type: 'arabic', value: arabicNumber },
              { type: 'roman', value: romanNumber },
            ].map(({ type, value }) => {
              return (
                <div key={type} className="flex items-center justify-center gap-x-2 px-4 py-2">
                  <span className="capitalize">{type}</span>
                  <input
                    type="text"
                    id={type}
                    placeholder={type}
                    value={value}
                    onChange={(event) => {
                      const newValue = event.target.value;
                      const newArabicNumber: string = type === 'arabic' ? newValue : roman2arabic(newValue);
                      const newRomanNumber: string = type === 'roman' ? newValue : arabic2roman(parseInt(newValue, 10));
                      setState((previous) => ({
                        ...previous,
                        arabicNumber: newArabicNumber,
                        romanNumber: newRomanNumber,
                      }));
                    }}
                    className="grow text-right focus:outline-none"
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

export default RomanPage;
