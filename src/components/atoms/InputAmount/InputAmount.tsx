import React from 'react';

type InputAmountProps = {
  value: string;
  onChange?: (val: string) => void;
  placeholder?: string;
  disabled?: boolean;
  usdValue?: string; // "$0.00"
};

export const InputAmount = ({
  value,
  onChange,
  placeholder = '0',
  disabled = false,
  usdValue = '',
}: InputAmountProps) => {
  return (
    <div className="flex flex-col items-end w-full pt-[6px] pb-[6px]">
      <input
        // type="number"
        inputMode="decimal"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        className="w-full text-left text-[27px] font-medium bg-transparent placeholder-gray-400 text-black outline-none disabled:opacity-50 border-0"
      />
      {usdValue && (
        <span className="text-[12px] text-gray-400 mt-1 text-[#131313A0]">{usdValue}</span>
      )}
    </div>
  );
};
