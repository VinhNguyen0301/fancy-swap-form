import React from 'react';
import clsx from 'clsx';

type Variant = 'heading1' | 'title' | 'label' | 'caption' | 'subtle';

type TypographyProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

const baseStyles: Record<Variant, string> = {
  heading1: 'h1 font-bold text-black mb-[10px] text-[50px]',
  title: 'text-2xl font-semibold text-black',
  label: 'text-sm font-medium text-gray-700',
  caption: 'text-xs text-gray-400',
  subtle: 'text-sm text-gray-400',
};

export const Typography = ({
  children,
  variant = 'label',
  className = '',
}: TypographyProps) => {
  return (
    <span className={clsx(baseStyles[variant], className)}>
      {children}
    </span>
  );
};
