import { writeFileSync } from 'node:fs';

export const main = async () => {
  const url = 'https://api.coinranking.com/v2/coins?limit=100';
  const response = await fetch(url);
  if (!response.ok) {
    return;
  }
  const data = await response.json();
  writeFileSync('./src/json/coinranking.json', JSON.stringify(data, null, 2));
};

main();
