import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'uniswap';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
};

const base = 'rounded-xl font-bold transition-all duration-200 focus:outline-none';
const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-5 py-2.5',
    lg: 'text-lg px-6 py-3',
  };
  

const variants = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    uniswap: 'bg-[#fdd6f4] text-[#ff007a] hover:bg-[#fac7f0]',
  };

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
