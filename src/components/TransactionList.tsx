const transactions = [
  {
    id: 1,
    type: "Received",
    amount: "+250 USDT",
    time: "2 mins ago",
  },
  {
    id: 2,
    type: "Sent",
    amount: "-120 USDT",
    time: "1 hour ago",
  },
  {
    id: 3,
    type: "Received",
    amount: "+980 USDT",
    time: "Yesterday",
  },
];

export default function TransactionList() {
  return (
    <div className="bg-[#111827] rounded-2xl p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Recent Transactions
      </h2>

      <div className="space-y-4">

        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between border-b border-gray-800 pb-4"
          >

            <div>
              <p className="font-semibold">
                {tx.type}
              </p>

              <p className="text-gray-400 text-sm">
                {tx.time}
              </p>
            </div>

            <p
              className={
                tx.type === "Received"
                  ? "text-green-400 font-bold"
                  : "text-red-400 font-bold"
              }
            >
              {tx.amount}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}