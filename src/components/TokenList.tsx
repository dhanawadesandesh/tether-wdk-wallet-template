const tokens = [
  {
    id: 1,
    icon: "🟠",
    name: "Bitcoin",
    symbol: "BTC",
    balance: "0.054 BTC",
    value: "$4,200",
    change: "+4.32%",
  },
  {
    id: 2,
    icon: "🔵",
    name: "Ethereum",
    symbol: "ETH",
    balance: "1.24 ETH",
    value: "$2,100",
    change: "+2.11%",
  },
  {
    id: 3,
    icon: "🟢",
    name: "Tether",
    symbol: "USDT",
    balance: "6,000 USDT",
    value: "$6,000",
    change: "+0.01%",
  },
];

export default function TokenList() {
  return (
    <div className="bg-[#111827] rounded-2xl p-6">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold">
            Portfolio Assets
          </h2>

          <p className="text-gray-400">
            Your active crypto holdings
          </p>
        </div>

      </div>

      <div className="space-y-4">

        {tokens.map((token) => (
          <div
            key={token.id}
            className="flex items-center justify-between bg-[#0B1220] hover:bg-[#131c2e] transition p-4 rounded-2xl"
          >

            <div className="flex items-center gap-4">

              <div className="text-3xl">
                {token.icon}
              </div>

              <div>

                <p className="font-semibold text-lg">
                  {token.name}
                </p>

                <p className="text-gray-400 text-sm">
                  {token.balance}
                </p>

              </div>

            </div>

            <div className="text-right">

              <p className="font-bold text-lg">
                {token.value}
              </p>

              <p className="text-green-400 text-sm">
                {token.change}
              </p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}