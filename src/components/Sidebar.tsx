import {
  LayoutDashboard,
  Wallet,
  ArrowLeftRight,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-20 md:w-60 min-h-screen bg-[#081028] border-r border-gray-800 p-6">

      <h1 className="text-3xl font-bold text-green-400 mb-10">
        Tether Wallet
      </h1>

      <div className="space-y-4">

        <div className="flex items-center gap-3 bg-green-500 text-black px-4 py-3 rounded-2xl font-semibold cursor-pointer hover:scale-[1.02] transition">

          <LayoutDashboard size={20} />

          <span className="hidden md:inline">
  Dashboard
</span>

        </div>

        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer hover:bg-[#111827] transition">

          <Wallet size={20} />

          <span className="hidden md:block">
  Tether Wallets
</span>
        </div>

        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer hover:bg-[#111827] transition">

          <ArrowLeftRight size={20} />

          <span className="hidden md:block">
  Transactions
</span>

        </div>

        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer hover:bg-[#111827] transition">

          <Settings size={20} />

          <span className="hidden md:block">
  Settings
</span>

        </div>

      </div>

    </div>
  );
}