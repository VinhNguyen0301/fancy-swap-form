import React, { useState, useEffect } from "react";
import { SwapInputPanel } from "../../molecules/SwapInputPanel/SwapInputPanel";
import { Button } from "../../atoms/Button/Button";
import { Divider } from "../../atoms/Divider/Divider";
import type { Token } from "../../../types/token";
import { Card } from "@/components/atoms/Card/Card";
import { usePrices } from "@/hooks/usePrices";
import { calculateBuyAmount } from "@/utils/calculate";

const dummyTokens: Token[] = [
  { symbol: "ETH", name: "Ethereum" },
  { symbol: "USDC", name: "USD Coin" },
];

export const SwapForm = () => {
  const [sellToken, setSellToken] = useState<Token>(dummyTokens[0]);
  const [buyToken, setBuyToken] = useState<Token>(dummyTokens[1]);
  const [sellAmount, setSellAmount] = useState("1");
  const [buyAmount, setBuyAmount] = useState("");
  const { prices, isLoading } = usePrices();

  useEffect(() => {
    if (sellToken && buyToken && prices) {
      const calculated = calculateBuyAmount(
        sellToken.symbol,
        buyToken.symbol,
        sellAmount,
        prices
      );
      setBuyAmount(calculated);
    }
  }, [sellToken, buyToken, sellAmount, prices]);

  const usdValue = prices?.[sellToken.symbol]
    ? (parseFloat(sellAmount) * prices[sellToken.symbol]).toFixed(2)
    : "0.00";

  return (
    <Card className="p-[8px] border-0">
      <SwapInputPanel
        label="Sell"
        token={sellToken}
        tokenList={dummyTokens}
        amount={sellAmount}
        onTokenChange={setSellToken}
        onAmountChange={setSellAmount}
        usdValue={usdValue}
      />
      <Divider />
      <SwapInputPanel
        label="Buy"
        token={buyToken}
        tokenList={dummyTokens}
        amount={buyAmount}
        onTokenChange={setBuyToken}
        onAmountChange={setBuyAmount}
        usdValue={usdValue}
      />
      <Button variant="uniswap" size="lg">
        {isLoading ? "Loading..." : "Get started"}
      </Button>
    </Card>
  );
};
