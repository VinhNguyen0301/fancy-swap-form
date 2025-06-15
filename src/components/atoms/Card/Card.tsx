// src/components/atoms/Card/Card.tsx
import React from 'react';
import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Card = ({ children, className = '' }: Props) => {
  return (
    <div
      className={clsx(
        ' rounded-[12px] border-red-50 border border-[#dadee2]  shadow-lg max-w-2xl mx-auto space-y-4',
        className
      )}
    >
      {children}
    </div>
  );
};
