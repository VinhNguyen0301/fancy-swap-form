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
        'bg-white rounded-3xl border-red-50 border p-6 shadow-lg w-[36rem] max-w-2xl mx-auto space-y-4',
        className
      )}
    >
      {children}
    </div>
  );
};
