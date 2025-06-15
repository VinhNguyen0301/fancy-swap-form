// hooks/usePrices.ts
import useSWR from 'swr';

type Price = {
  currency: string;
  date: string;
  price: number;
};

export const usePrices = () => {
  const fetcher = (url: string) => fetch(url).then(res => res.json());

  const { data, error, isLoading } = useSWR<Price[]>('https://interview.switcheo.com/prices.json', fetcher);

  const prices: Record<string, number> = {};
  data?.forEach(p => {
    if (!prices[p.currency]) {
      prices[p.currency] = p.price;
    }
  });

  return { prices, isLoading, error };
};
