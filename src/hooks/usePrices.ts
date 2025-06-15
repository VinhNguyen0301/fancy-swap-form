import useSWR from 'swr';

type Price = {
  currency: string;
  price: number;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const usePrices = () => {
  const { data, error, isLoading } = useSWR<Price[]>('https://interview.switcheo.com/prices.json', fetcher);

  const getPrice = (symbol: string) => {
    if (!data) return undefined;
    const found = data.find((p) => p.currency === symbol);
    return found?.price;
  };

  return {
    prices: data,
    getPrice,
    isLoading,
    error,
  };
};
