import { Glass } from '@editor/components/shared/Glass';
import { tryCatch } from '@editor/utils/try-catch';
import { useQuery } from '@tanstack/react-query';

type CoinRanking = {
  data: {
    coins: {
      uuid: string;
      name: string;
      symbol: string;
      color: string;
      iconUrl: string;
      marketCap: string;
      price: string;
      rank: number;
      sparkline: string[];
      lowVolume: boolean;
      allTimeHigh: {
        price: number;
        timestamp: number;
      };
    }[];
  };
};

export const Crypto = () => {
  const url = `https://api.coinranking.com/v2/coins?limit=10`;
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.set('url', url);
  const proxyUrl = `https://hieudoanm-reverse-proxy.vercel.app/api?${urlSearchParams.toString()}`;
  const { isPending, error, data } = useQuery<CoinRanking>({
    queryKey: [`coin-ranking`],
    queryFn: async () => {
      const { error, data } = await tryCatch(fetch(proxyUrl).then((response) => response.json()));
      if (error) {
        console.error('Error fetching data:', error);
        return {};
      }
      return data;
    },
  });

  if (isPending) return <p className="text-center">Loading</p>;

  if (error) return <p className="text-center">{error.message}</p>;

  if (JSON.stringify(data) === '{}') return <p className="text-center">No Data</p>;

  const { data: responseData } = data ?? { data: { coins: [] } };
  const { coins = [] } = responseData ?? { coins: [] };

  return (
    <div className="h-full w-full max-w-md p-8">
      <Glass.Card className="h-full">
        <div className="scrollbar-none h-full divide-y divide-neutral-300 overflow-auto">
          {coins.map((coin) => {
            const { rank = 0, uuid = '', name = '', symbol = '', marketCap = '0', price = '0' } = coin;

            return (
              <div key={uuid} className="flex items-center justify-between gap-2 py-2">
                <div>
                  <p className="text-xs">
                    {rank}. {symbol}
                  </p>
                  <h3 title={name} className="w-32 truncate font-bold whitespace-nowrap">
                    {name}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="text-xs">${parseFloat(marketCap).toLocaleString('en-US')}</p>
                  <p title={price} className="font-bold whitespace-nowrap">
                    ${parseFloat(price).toLocaleString('en-US')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Glass.Card>
    </div>
  );
};
