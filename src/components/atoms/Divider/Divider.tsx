import React from 'react';
import clsx from 'clsx';

type DividerProps = {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
};

export const Divider = ({ orientation = 'horizontal', className = '' }: DividerProps) => {
  return (
    <div
      className={clsx(
        orientation === 'horizontal' ? 'w-full h-px' : 'h-full w-px',
        'bg-gray-200',
        className
      )}
    />
  );
};
