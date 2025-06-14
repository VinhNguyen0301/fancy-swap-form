import React from 'react';
import clsx from 'clsx';

type Variant = 'heading1' | 'title' | 'label' | 'caption';

type TypographyProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

const baseStyles: Record<Variant, string> = {
  heading1: 'text-5xl font-bold text-black',
  title: 'text-2xl font-semibold text-black',
  label: 'text-sm font-medium text-gray-700',
  caption: 'text-xs text-gray-400',
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
