import React from "react";
import clsx from "clsx";

type TokenIconProps = {
  symbol: string; // ví dụ: 'ETH', 'USDC'
  size?: number;
  className?: string;
};

export const TokenIcon = ({
  symbol,
  size = 24,
  className = "",
}: TokenIconProps) => {
  return (
    <img
      src={`/assets/tokens/ETH.svg`}
      alt={symbol}
      width={size}
      height={size}
      className={clsx("rounded-full", className)}
      style={{ width: size, height: size }}
      onError={(e) => {
        (e.target as HTMLImageElement).src = "/assets/tokens/unknown.svg";
      }}
    />
  );
};
