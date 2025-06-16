// import React, { useMemo } from "react";
// import { useWalletBalances } from "@/hooks/useWalletBalances";
// import { usePrices } from "@/hooks/usePrices";
// import { WalletRow } from "@/components/WalletRow";
// import type { WalletBalance, FormattedWalletBalance } from "@/types/wallet";

// interface Props {
//   children?: React.ReactNode;
//   className?: string;
// }

// const PRIORITY_MAP: Record<string, number> = {
//   Osmosis: 100,
//   Ethereum: 50,
//   Arbitrum: 30,
//   Zilliqa: 20,
//   Neo: 20,
// };

// const getPriority = (blockchain: string): number =>
//   PRIORITY_MAP[blockchain] ?? -99;

// export const WalletPage: React.FC<Props> = ({ children, ...rest }) => {
//   const balances = useWalletBalances();
//   const prices = usePrices();

//   const formattedBalances: FormattedWalletBalance[] = useMemo(() => {
//     if (!balances || !prices) return [];

//     return balances
//       .filter((b) => getPriority(b.blockchain) > -99 && b.amount > 0)
//       .sort((a, b) => getPriority(b.blockchain) - getPriority(a.blockchain))
//       .map((b) => ({
//         ...b,
//         formatted: b.amount.toFixed(2),
//       }));
//   }, [balances, prices]);

//   return (
//     <div {...rest}>
//       {formattedBalances.map((balance, index) => {
//         const usdValue = (prices?.[balance.currency] ?? 0) * balance.amount;

//         return (
//           <WalletRow
//             key={`${balance.currency}-${index}`}
//             className="wallet-row"
//             amount={balance.amount}
//             formattedAmount={balance.formatted}
//             usdValue={usdValue.toFixed(2)}
//           />
//         );
//       })}
//     </div>
//   );
// };
