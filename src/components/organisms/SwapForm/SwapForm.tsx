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
  const [sellAmount, setSellAmount] = useState("");
  const [buyAmount, setBuyAmount] = useState("");
  const [usdValue, setUsdValue] = useState("$0.00");

  return (
    // <div className="bg-white rounded-3xl p-6 shadow-lg w-[60%] max-w-2xl mx-auto space-y-4">
    <Card>
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
