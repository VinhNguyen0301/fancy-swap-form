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
        'bg-white rounded-3xl shadow-lg p-4 w-full max-w-md mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};
