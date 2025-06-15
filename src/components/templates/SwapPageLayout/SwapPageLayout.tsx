import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const SwapPageLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-[#E6EFFA] px-4 flex items-center justify-center ">
      <div className="w-50% max-w-md space-y-4 rounded-3xl ">{children}</div>
    </div>
  );
};
