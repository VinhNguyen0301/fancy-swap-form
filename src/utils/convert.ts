export const convertAmount = (
    amount: number,
    from: string,
    to: string,
    prices: Record<string, number>
  ): number => {
    const fromPrice = prices[from];
    const toPrice = prices[to];
  
    if (!fromPrice || !toPrice) return 0;
  
    const amountInUSD = amount * fromPrice;
    return amountInUSD / toPrice;
  };
  