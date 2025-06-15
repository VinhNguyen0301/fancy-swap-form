// SwapForm.tsx
import React, { useState } from "react";
import { SwapInputPanel } from "../../molecules/SwapInputPanel/SwapInputPanel";
import { Button } from "../../atoms/Button/Button";
import { Divider } from "../../atoms/Divider/Divider";
import type { Token } from "../../../types/token";
import { Card } from "@/components/atoms/Card/Card";
import { usePrices } from "@/hooks/usePrices";

const dummyTokens: Token[] = [
  { symbol: "ETH", name: "Ethereum" },
  { symbol: "USDC", name: "USD Coin" },
];

export const SwapForm = () => {
  const { getPrice, isLoading } = usePrices();

  const [sellToken, setSellToken] = useState<Token>(dummyTokens[0]);
  const [buyToken, setBuyToken] = useState<Token | null>(dummyTokens[1]);
  const [sellAmount, setSellAmount] = useState("1");
  const [buyAmount, setBuyAmount] = useState("20");

  const usdPrice = getPrice(sellToken.symbol);
  const usdValue = usdPrice ? (parseFloat(sellAmount) * usdPrice).toFixed(2) : "";

  return (
    <Card className="p-[8px] border-0">
      <SwapInputPanel
        label="Sell"
        token={sellToken}
        tokenList={dummyTokens}
        amount={sellAmount}
        onTokenChange={setSellToken}
        onAmountChange={setSellAmount}
        usdValue={isLoading ? "Loading..." : `${usdValue}`}
      />
      <Divider />
      <SwapInputPanel
        label="Buy"
        token={buyToken || { symbol: "", name: "" }}
        tokenList={dummyTokens}
        amount={buyAmount}
        onTokenChange={setBuyToken}
        onAmountChange={setBuyAmount}
        usdValue=""
      />
      <Button variant="uniswap" size="lg">
        Get started
      </Button>
    </Card>
  );
};
