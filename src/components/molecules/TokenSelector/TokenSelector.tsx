import React, { useState } from 'react';
import { TokenIcon } from '../../atoms/TokenIcon/TokenIcon';
import { Typography } from '../../atoms/Typography/Typography';
import clsx from 'clsx';

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
        className="flex items-center gap-2 bg-[#fdd6f4] text-[#ff007a] px-4 py-2 rounded-xl font-semibold hover:bg-[#fac7f0]"
      >
        <TokenIcon symbol={selected.symbol} size={20} />
        <Typography variant="label">{selected.symbol}</Typography>
        <svg className="w-4 h-4 text-[#ff007a]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M7 7l3 3 3-3" />
        </svg>
      </button>

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
      )}
    </div>
  );
};
