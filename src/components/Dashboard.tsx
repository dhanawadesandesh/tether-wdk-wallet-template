"use client";

import BalanceCard from "./BalanceCard";
import TransactionList from "./TransactionList";
import PortfolioChart from "./PortfolioChart";
import TokenList from "./TokenList";
import { useWalletStore } from "../store/walletStore";

export default function Dashboard() {
  const {
  connected,
  network,
  balance,
  address,
} = useWalletStore();

  return (
    <div className="space-y-8">

      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

        <BalanceCard
          title="Total Balance"
          value={balance}
        />

        <BalanceCard
          title="Active Network"
          value={network}
        />

        <BalanceCard
          title="Wallet Address"
value={connected ? address : "Not Connected"}
        />

      </div>

      {/* Transactions */}
      <TransactionList />

      {/* Portfolio */}
      <PortfolioChart />

      {/* Tokens */}
      <TokenList />

    </div>
  );
}