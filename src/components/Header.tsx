"use client";

import { useWalletStore } from "../store/walletStore";

export default function Header() {
  const connectWallet = useWalletStore(
    (state) => state.connectWallet
  );

  return (
    <div className="flex items-center justify-between mb-10">
      <h1 className="text-2xl md:text-3xl font-bold">
        Tether WDK Wallet
      </h1>

      <button
        onClick={connectWallet}
        className="bg-green-500 hover:bg-green-400 text-black font-semibold px-4 py-2 rounded-xl"
      >
        Connect Wallet
      </button>
    </div>
  );
}