import React, { useState } from 'react';
import { TokenIcon } from '../../atoms/TokenIcon/TokenIcon';
import { Typography } from '../../atoms/Typography/Typography';
import clsx from 'clsx';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export type Token = {
  symbol: string;
  name: string;
};

type TokenSelectorProps = {
  selected: Token;
  tokenList: Token[];
  onSelect: (token: Token) => void;
};

export const TokenSelector = ({ selected, tokenList, onSelect }: TokenSelectorProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-max">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-[white] text-[#ff007a] px-4 py-2 rounded-xl font-semibold hover:bg-[#fac7f0] border-0 rounded-[999999px] pt-[2px] pb-[2px]"
      >
        <TokenIcon symbol={selected.symbol} size={28} />
        <span className='ml-[6px] text-[16px] text-[#131313]'>
        <Typography variant="label">{selected.symbol}</Typography>
        </span>
        <ChevronDownIcon className="w-[20px] h-[20px] text-[gray] ml-[4px]" />
      </button>
{/* 
      {open && (
        <div className="absolute top-full mt-2 z-10 w-48 bg-white rounded-lg shadow-lg border">
          {tokenList.map((token) => (
            <button
              key={token.symbol}
              className={clsx(
                'flex items-center gap-3 px-4 py-2 w-full hover:bg-gray-50 text-left'
              )}
              onClick={() => {
                onSelect(token);
                setOpen(false);
              }}
            >
              <TokenIcon symbol={token.symbol} size={20} />
              <span className="text-sm font-medium text-gray-800">{token.symbol}</span>
            </button>
          ))}
        </div>
      )} */}
    </div>
  );
};
