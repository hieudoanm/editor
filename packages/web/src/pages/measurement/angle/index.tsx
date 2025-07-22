import { Divider } from '@editor/components/shared/Divider';
import { Glass } from '@editor/components/shared/Glass';
import { Linear } from '@editor/components/shared/Linear';
import { Navbar } from '@editor/components/shared/Navbar';
import { NextPage } from 'next';
import { useState } from 'react';

type AngleUnit = 'degrees' | 'radians';

const convertAngle = (fromAmount: number, fromUnit: AngleUnit, toUnit: AngleUnit): number => {
  let degreesValue: number;

  // Convert the 'from' amount to degrees as the base
  if (fromUnit === 'degrees') {
    degreesValue = fromAmount;
  } else if (fromUnit === 'radians') {
    degreesValue = fromAmount * (180 / Math.PI);
  } else {
    degreesValue = fromAmount; // Default or error case
  }

  // Convert from degrees to the 'to' unit
  if (toUnit === 'degrees') {
    return parseFloat(degreesValue.toFixed(5));
  } else if (toUnit === 'radians') {
    return parseFloat((degreesValue * (Math.PI / 180)).toFixed(5));
  } else {
    return parseFloat(degreesValue.toFixed(5)); // Default to degrees
  }
};

const AnglePage: NextPage = () => {
  const [{ degrees, radians }, setState] = useState<{
    degrees: number;
    radians: number;
  }>({
    degrees: 0,
    radians: 0,
  });

  return (
    <div className="h-screen w-screen">
      <Linear.Background />
      <div className="relative z-10 flex h-full flex-col">
        <Navbar />
        <Divider />
        <div className="flex w-full grow items-center justify-center">
          <Glass.Card className="flex w-full max-w-sm flex-col gap-y-2 divide-y divide-white/10">
            {[
              { type: 'degrees' as AngleUnit, value: degrees },
              { type: 'radians' as AngleUnit, value: radians },
            ].map(({ type, value }) => {
              return (
                <div key={type} className="flex items-center justify-center gap-x-2 px-4 py-2">
                  <span className="capitalize">{type}</span>
                  <input
                    type="text" // Use type="number" for numerical inputs
                    id={type}
                    placeholder={type}
                    value={value}
                    onChange={(event) => {
                      const newValue: string = event.target.value;
                      const newAmount: number = parseFloat(newValue);

                      // If the input is empty or not a valid number, set all to 0
                      if (isNaN(newAmount)) {
                        setState({
                          degrees: 0,
                          radians: 0,
                        });
                        return;
                      }

                      setState((previous) => ({
                        ...previous,
                        degrees: convertAngle(newAmount, type, 'degrees'),
                        radians: convertAngle(newAmount, type, 'radians'),
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

export default AnglePage;
