import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const SwapPageLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-[#fdfbfc] px-4 flex items-center justify-center">
      <div className="w-full max-w-md space-y-4">{children}</div>
    </div>
  );
};
