import React, { useState, useEffect } from "react";
import { SwapInputPanel } from "../../molecules/SwapInputPanel/SwapInputPanel";
import { Button } from "../../atoms/Button/Button";
import { Divider } from "../../atoms/Divider/Divider";
import type { Token } from "../../../types/token";
import { Card } from "@/components/atoms/Card/Card";
import { usePrices } from "@/hooks/usePrices";
import { calculateBuyAmount } from "@/utils/calculate";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { useTokenList } from "@/hooks/useTokenList";

const dummyTokens: Token[] = [
  { symbol: "ETH", name: "Ethereum" },
  { symbol: "USDC", name: "USD Coin" },
];

export const SwapForm = () => {
  const { tokens: tokenList, isLoading: isLoadingTokenList } = useTokenList();
  const [sellToken, setSellToken] = useState<Token>(dummyTokens[0]);
  const [buyToken, setBuyToken] = useState<Token>(dummyTokens[1]);
  const [sellAmount, setSellAmount] = useState("1");
  const [buyAmount, setBuyAmount] = useState("");
  const [error, setError] = useState("");
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

  const handleReverse = () => {
    setSellToken(buyToken);
    setBuyToken(sellToken);
    setSellAmount(buyAmount);
    setBuyAmount(sellAmount);
  };

  // Validation logic
  const isSameToken = sellToken?.symbol === buyToken?.symbol;
  const isAmountInvalid =
    !sellAmount || isNaN(Number(sellAmount)) || Number(sellAmount) <= 0;

  const isDisabled =
    isLoading || isLoadingTokenList || !sellToken || !buyToken || isSameToken || isAmountInvalid;

  useEffect(() => {
    if (isSameToken) {
      setError("Sell and Buy tokens must be different.");
    } else if (isAmountInvalid) {
      setError("Sell amount must be greater than 0.");
    } else {
      setError("");
    }
  }, [sellToken, buyToken, sellAmount]);

  return (
    <Card className="p-[8px] border-0">
      <SwapInputPanel
        label="Sell"
        token={sellToken}
        tokenList={tokenList}
        amount={sellAmount}
        onTokenChange={setSellToken}
        onAmountChange={setSellAmount}
        usdValue={usdValue}
      />

      <div className="flex justify-center my-3 relative z-10 -mt-4">
        <button
          onClick={handleReverse}
          className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition bg-white shadow"
          aria-label="Reverse swap direction"
        >
          <ArrowDownIcon className="w-[20px] h-[20px]" />
        </button>
      </div>

      <SwapInputPanel
        label="Buy"
        token={buyToken}
        tokenList={tokenList}
        amount={buyAmount}
        onTokenChange={setBuyToken}
        onAmountChange={setBuyAmount}
        usdValue={usdValue}
      />

      {error && (
        <p className="text-red-500 text-sm text-center my-2 text-[red]">{error}</p>
      )}

      <Button
        variant="uniswap"
        size="lg"
        disabled={isDisabled}
      >
        {isLoading ? "Loading..." : "Get started"}
      </Button>
    </Card>
  );
};
