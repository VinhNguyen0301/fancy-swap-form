import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React from 'react';

type InputAmountProps = {
  value: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  disabled?: boolean;
  usdValue?: string; // "$0.00"
};

export const SearchToken = ({
  value,
  onChange,
  placeholder = '0',
  disabled = false,
  usdValue = '',
}: InputAmountProps) => {
  return (
    <div className="flex w-full pt-[6px] pb-[6px]">
        <MagnifyingGlassIcon className="absolute w-[12px] h-[12px] text-gray-400 pt-[6px] pl-[4px]" />
      <input
            type="text"
            placeholder="Search tokens"
            className="w-full rounded-full border border-gray-300 pt-[4px] pb-[4px] pl-[20px] text-sm outline-none focus:ring-2 focus:ring-pink-300 "
          />
    </div>
  );
};
