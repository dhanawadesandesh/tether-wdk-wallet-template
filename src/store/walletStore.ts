import { create } from "zustand";

type WalletState = {
  connected: boolean;
  network: string;
  balance: string;
  address: string;

  connectWallet: () => void;
};

export const useWalletStore =
  create<WalletState>((set) => ({

    connected: false,

    network: "Ethereum",

    balance: "$12,450.00",

    address: "",

    connectWallet: () =>
      set({

        connected: true,

        network: "Ethereum",

        balance: "$12,450.00",

        address: "0x71C4...92Ae",

      }),

  }));