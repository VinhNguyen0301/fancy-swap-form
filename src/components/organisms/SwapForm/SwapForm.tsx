import React, { useState, useEffect } from "react";
import { SwapInputPanel } from "../../molecules/SwapInputPanel/SwapInputPanel";
import { Button } from "../../atoms/Button/Button";
import { Divider } from "../../atoms/Divider/Divider";
import type { Token } from "../../../types/token";
import { Card } from "@/components/atoms/Card/Card";
import { usePrices } from "@/hooks/usePrices";
import { calculateBuyAmount } from "@/utils/calculate";
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import { useTokenList } from '@/hooks/useTokenList';

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
  const { prices, isLoading } = usePrices();

  const [error, setError] = useState("");
  const [isSwapping, setIsSwapping] = useState(false);
  const [message, setMessage] = useState("");

  const usdValue = prices?.[sellToken.symbol]
    ? (parseFloat(sellAmount) * prices[sellToken.symbol]).toFixed(2)
    : "0.00";

  const handleReverse = () => {
    setSellToken(buyToken);
    setBuyToken(sellToken);
    setSellAmount(buyAmount);
    setBuyAmount(sellAmount);
  };

  const isSameToken = sellToken?.symbol === buyToken?.symbol;
  const isAmountInvalid =
    !sellAmount || isNaN(Number(sellAmount)) || Number(sellAmount) <= 0;

  const isDisabled =
    isLoading || isLoadingTokenList || isSwapping || !sellToken || !buyToken || isSameToken || isAmountInvalid;

  // 👉 Update Buy Amount
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

  // 👉 Reset buy amount + message khi đổi token
  useEffect(() => {
    setBuyAmount("");
    setMessage("");
  }, [sellToken, buyToken]);

  // 👉 Reset message khi user nhập lại amount
  useEffect(() => {
    setMessage("");
  }, [sellAmount]);

  // 👉 Validate input
  useEffect(() => {
    if (isSameToken) {
      setError("Sell and Buy tokens must be different.");
    } else if (isAmountInvalid) {
      setError("Sell amount must be greater than 0.");
    } else {
      setError("");
    }
  }, [sellToken, buyToken, sellAmount]);

  // 👉 Mock submit
  const handleSubmit = () => {
    setIsSwapping(true);
    setMessage("");
    setTimeout(() => {
      setIsSwapping(false);
      setMessage("✅ Swap completed!");
    }, 2000);
  };

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

      {message && (
        <p className="text-green-600 text-sm text-center mb-2 ">{message}</p>
      )}

      <Button
        variant="uniswap"
        size="lg"
        disabled={isDisabled}
        onClick={handleSubmit}
      >
        {isSwapping ? "Swapping..." : isLoading ? "Loading..." : "Get started"}
      </Button>
    </Card>
  );
};
