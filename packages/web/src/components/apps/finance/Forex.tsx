import { formatCurrency } from '@editor/utils/number/format';
import { tryCatch } from '@editor/utils/try-catch';
import { useQuery } from '@tanstack/react-query';
import { FC, useState } from 'react';

type Frankfurter = {
  amount: number;
  base: string;
  date: string;
  rates: Record<string, number>;
};

export const Forex: FC = () => {
  const [{ amount: queryAmount = 1, base: queryBase = 'EUR' }, setState] = useState<{ amount: number; base: string }>({
    amount: 1,
    base: 'EUR',
  });
  const url: string = `https://api.frankfurter.dev/v1/latest?amount=${queryAmount}&base=${queryBase}`;
  const urlSearchParams: URLSearchParams = new URLSearchParams();
  urlSearchParams.set('url', url);
  const proxyUrl = `https://hieudoanm-reverse-proxy.vercel.app/api?${urlSearchParams.toString()}`;
  const { isPending, error, data } = useQuery<Frankfurter>({
    queryKey: [`forex-${queryAmount}-${queryBase}`],
    queryFn: async () => {
      const { error, data } = await tryCatch(fetch(proxyUrl).then((response) => response.json()));
      if (error) return {};
      return data;
    },
  });

  console.log(isPending, error, data);

  if (isPending) return <p className="text-center">Loading</p>;

  if (error) return <p className="text-center">{error.message}</p>;

  if (JSON.stringify(data) === '{}') return <p className="text-center">No Data</p>;

  const { amount = 1, base = '', rates = {} } = data ?? { amount: 1, base: '', rates: {} };

  return (
    <div className="flex h-full w-full max-w-md flex-col gap-2 overflow-hidden border-t border-neutral-800 p-4 md:p-8">
      <div className="flex h-full flex-col overflow-hidden">
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="Amount"
          className="w-full appearance-none rounded border border-neutral-800 px-3 py-1 text-sm focus:outline-none"
          value={queryAmount}
          onChange={(event) => {
            setState((previous) => ({ ...previous, amount: parseFloat(event.target.value ?? '0') ?? 0 }));
          }}
        />
        <div className="h-full grow divide-y divide-neutral-800 overflow-auto">
          {Object.entries(rates).map(([key, value]) => {
            return (
              <div key={key} className="flex items-center justify-between gap-2 py-2">
                <span className="text-sm">
                  {amount} {base} to {key}
                </span>
                <span className="text-sm">{formatCurrency(value, key)}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
