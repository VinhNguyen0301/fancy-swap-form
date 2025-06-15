import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "uniswap";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
};

const base =
  "flex font-bold border-0 cursor-pointer  transition-all duration-200 focus:outline-none rounded-[16px] width-full max-width-[465px]";

const sizes = {
  sm: "text-sm px-4 py-2", // padding similar to 10px 16px
  md: "text-base px-5 py-2.5", // 11px 20px
  lg: "text-lg py-[16px] px-[20px] width-full max-width-[465px]", // 12px 24px
};

const variants = {
  primary: "text-white bg-[#1ea7fd] hover:bg-[#1a95e0] rounded-full",
  secondary:
    "text-gray-800 bg-transparent shadow-inner border border-gray-300 hover:bg-gray-100 rounded-full",
  uniswap:
    "text-[#ff007a] bg-[#fdd6f4] hover:bg-[#fac7f0] rounded-[20px] flex flex-1 border-0 justify-center", // giữ như bạn custom
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <div className={`${base}`}>
      <button
        className={` ${sizes[size]} ${variants[variant]} ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={onClick}
        disabled={disabled}
      >
        <span className="text-lg text-[18px]">{children}</span>
      </button>
    </div>
  );
};
