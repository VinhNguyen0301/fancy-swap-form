import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const SwapPageLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-[#FFFFFF] px-4 flex items-center justify-center ">
      <div>{children}</div>
    </div>
  );
};
