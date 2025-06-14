// SwapInputPanel.tsx
import React from 'react';
import { TokenSelector } from '../TokenSelector/TokenSelector';
import { Typography } from '../../atoms/Typography/Typography';
import { InputAmount } from '../../atoms/InputAmount/InputAmount';
import { Token } from '../../../types/token';

type Props = {
  label: string; // "Sell" | "Buy"
  amount: string;
  token: Token;
  tokenList: Token[];
  onAmountChange: (val: string) => void;
  onTokenChange: (token: Token) => void;
  usdValue?: string;
};

export const SwapInputPanel = ({
  label,
  amount,
  token,
  tokenList,
  usdValue,
  onAmountChange,
  onTokenChange,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 p-4 bg-white rounded-2xl shadow-sm">
      <Typography variant="label">{label}</Typography>

      <div className="flex justify-between items-center">
        <InputAmount value={amount} onChange={onAmountChange} />
        <TokenSelector
          selected={token}
          tokenList={tokenList}
          onSelect={onTokenChange}
        />
      </div>

      {usdValue && (
        <Typography variant="subtle">${usdValue}</Typography>
      )}
    </div>
  );
};
