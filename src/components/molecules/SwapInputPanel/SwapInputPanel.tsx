// SwapInputPanel.tsx
import React from 'react';
import { TokenSelector } from '../TokenSelector/TokenSelector';
import { Typography } from '../../atoms/Typography/Typography';
import { InputAmount } from '../../atoms/InputAmount/InputAmount';
import { Token } from '../../../types/token';
import { Card } from '@/components/atoms/Card/Card';

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
    <Card className='p-[16px] bg-[#FFFFFF] border-[#dadee2] mb-[2px] min-h-[80px]'>
      <Typography variant="label" className='text-[#131313a1]'>{label}</Typography>

      <div className="flex justify-between items-center">
        <InputAmount value={amount} onChange={onAmountChange} />
        <TokenSelector
          selected={token}
          tokenList={tokenList}
          onSelect={onTokenChange}
        />
      </div>

      {usdValue && (
        <Typography variant="subtle" className='text-[12px] text-gray-400 mt-1 text-[#131313A0]'>${usdValue}</Typography>
      )}
    </Card>
  );
};
