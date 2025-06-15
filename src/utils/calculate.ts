export const calculateBuyAmount = (
    sellSymbol: string,
    buySymbol: string,
    sellAmount: string,
    prices: Record<string, number>
  ): string => {
    const sellPrice = prices[sellSymbol];
    const buyPrice = prices[buySymbol];
    const sellAmt = parseFloat(sellAmount || '0');
  
    if (!sellPrice || !buyPrice || isNaN(sellAmt)) return '';
  
    const buyAmt = (sellAmt * sellPrice) / buyPrice;
    return buyAmt.toFixed(6);
  };
  