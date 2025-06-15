import React, { useState } from 'react';
import { TokenIcon } from '../../atoms/TokenIcon/TokenIcon';
import { Typography } from '../../atoms/Typography/Typography';
import clsx from 'clsx';
import { ChevronDownIcon, ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { TokenSelectorModal } from '@/components/organisms/TokenSelectorModal/TokenSelectorModal';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';

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

  const handleSelect = (token: Token) => {
    onSelect(token);
    setOpen(false);
  };

  return (
    <div className="relative w-max">
      <button
        onClick={() => {
          console.log('Opening modal');
          setOpen(true);
        }}
        className="flex items-center gap-2 bg-[white] text-[#ff007a] px-4 py-2 rounded-xl font-semibold hover:bg-[#fac7f0] rounded-[999999px] pt-[2px] pb-[2px] border border-[#dadee2]"
      >
        <TokenIcon symbol={selected.symbol} size={28} />
        <span className='ml-[6px] text-[16px] text-[#131313]'>
        <Typography variant="label">{selected.symbol}</Typography>
        </span>
        <ChevronDownIcon className="w-[20px] h-[20px] text-[gray] ml-[4px]" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white rounded-xl p-6 shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Select a token</h2>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>
            <div className="space-y-2">
              {tokenList.map((token) => (
                <button
                  key={token.symbol}
                  className="w-full text-left flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md"
                  onClick={() => handleSelect(token)}
                >
                  <TokenIcon symbol={token.symbol} size={20} />
                  <span>{token.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* <TokenSelectorModal
        isOpen={open}
        onClose={() => setOpen(false)}
        tokenList={tokenList}
        onSelect={handleSelect}
      /> */}

{/* <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50" static>
  <div className="fixed inset-0 bg-black/30" />
  <div className="fixed inset-0 flex items-center justify-center">
    <DialogPanel className="bg-white rounded-xl p-4 shadow-xl w-full max-w-md">
      <div className="bg-red-500 w-full h-20">Dialog content</div>
    </DialogPanel>
  </div>
</Dialog> */}
    </div>
  );
};
