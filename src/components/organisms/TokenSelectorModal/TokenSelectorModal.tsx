// src/components/organisms/TokenSelectorModal/TokenSelectorModal.tsx
import React from "react";
import { XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { TokenIcon } from "../../atoms/TokenIcon/TokenIcon";
import { Typography } from "../../atoms/Typography/Typography";
import clsx from "clsx";
import { Card } from "@/components/atoms/Card/Card";
import { SearchToken } from "@/components/atoms/SearchToken/SearchToken";

type Token = {
  symbol: string;
  name: string;
  address?: string;
};

type TokenSelectorModalProps = {
  isOpen: boolean;
  onClose: () => void;
  tokenList: Token[];
  onSelect: (token: Token) => void;
};

export const TokenSelectorModal = ({
  isOpen,
  onClose,
  tokenList,
  onSelect,
}: TokenSelectorModalProps) => {
  if (!isOpen) return null;

  return (
    <Card className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 pt-[10px] pl-[10px] pr-[10px]">
      <div className="bg-white rounded-2xl w-[400px] max-h-[90vh] overflow-y-auto p-4 relative shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <Typography variant="title">Select a token</Typography>
          <XMarkIcon className="w-[20px] h-[20px]" onClick={onClose} />
        </div>

        <div className="flex  mb-4">
          <SearchToken value="Search Tokens" />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
          {tokenList.slice(0, 5).map((token) => (
            <div
              key={token.symbol}
              className="flex flex-col items-center justify-center px-3 py-2 bg-gray-100 rounded-xl min-w-[64px]"
            >
              <TokenIcon symbol={token.symbol} size={28} />
              <Typography variant="caption">{token.symbol}</Typography>
            </div>
          ))}
        </div>

        <div>
          <Typography variant="label" className="text-gray-500 mb-2">
            Tokens by 24H volume
          </Typography>

          <div className="space-y-2">
            {tokenList.map((token) => (
              <div
                key={token.symbol}
                className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-100"
              >
                <TokenIcon symbol={token.symbol} size={32} />
                <div>
                  <p className="font-medium text-sm">{token.name}</p>
                  <p className="text-xs text-gray-400">
                    {token.symbol}{" "}
                    {token.address && (
                      <span className="ml-1">{token.address}</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
