// SwapForm.tsx
import React, { useState } from "react";
import { SwapInputPanel } from "../../molecules/SwapInputPanel/SwapInputPanel";
import { Button } from "../../atoms/Button/Button";
import { Divider } from "../../atoms/Divider/Divider";
import type { Token } from "../../../types/token";
import { Card } from "@/components/atoms/Card/Card";

const dummyTokens: Token[] = [
  { symbol: "ETH", name: "Ethereum" },
  { symbol: "USDC", name: "USD Coin" },
];

export const SwapForm = () => {
  const [sellToken, setSellToken] = useState<Token>(dummyTokens[0]);
  const [buyToken, setBuyToken] = useState<Token | null>(null);
  const [sellAmount, setSellAmount] = useState("11.25");
  const [buyAmount, setBuyAmount] = useState("20");
  const [usdValue, setUsdValue] = useState("1000.00");

  return (
    <Card className="p-[8px]">
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
