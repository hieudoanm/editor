import { Glass } from '@editor/components/shared/Glass';
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

const ForexQuery: FC<{ amount: number; base: string }> = ({ amount: queryAmount = 1, base: queryBase = 'EUR' }) => {
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
    <Glass.Card className="h-full">
      <div className="scrollbar-none h-full divide-y divide-neutral-100 overflow-auto">
        {Object.entries(rates).map(([key, value]) => {
          return (
            <div key={key} className="flex items-center justify-between gap-2 py-2">
              <span className="">
                {amount} {base} to {key}
              </span>
              <span className="font-bold whitespace-nowrap">{formatCurrency(value, key)}</span>
            </div>
          );
        })}
      </div>
    </Glass.Card>
  );
};

export const Forex: FC = () => {
  const [{ amount = 1, base = 'EUR' }, setState] = useState<{ amount: number; base: string }>({
    amount: 1,
    base: 'EUR',
  });

  return (
    <div className="flex h-full w-full max-w-md flex-col gap-y-4 p-8">
      <Glass.Input
        type="number"
        id="amount"
        name="amount"
        placeholder="Amount"
        className="appearance-none"
        value={amount}
        onChange={(event) => {
          setState((previous) => ({ ...previous, amount: parseFloat(event.target.value ?? '0') ?? 0 }));
        }}
      />
      <ForexQuery amount={amount} base={base} />
    </div>
  );
};
