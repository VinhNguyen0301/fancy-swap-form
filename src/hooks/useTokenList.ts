// src/hooks/useTokenList.ts
import { useMemo } from 'react';
import { usePrices } from './usePrices';
import type { Token } from '../types/token';

export const useTokenList = () => {
  const { prices } = usePrices();

  const tokens: Token[] = useMemo(() => {
    if (!prices) return [];

    const symbols = Object.keys(prices);

    return symbols.map(symbol => ({
      symbol: String(symbol),
      name: symbol, // Nếu có thể lấy metadata riêng thì cập nhật tên thật
      logo: `/assets/tokens/${symbol}.svg`,
    }));
  }, [prices]);

  return {
    tokens,
    isLoading: !prices,
  };
};