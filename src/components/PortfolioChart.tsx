"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Mon", balance: 4000 },
  { name: "Tue", balance: 5200 },
  { name: "Wed", balance: 4800 },
  { name: "Thu", balance: 6100 },
  { name: "Fri", balance: 7200 },
  { name: "Sat", balance: 8600 },
  { name: "Sun", balance: 12450 },
];

export default function PortfolioChart() {
  return (
    <div className="bg-[#111827] rounded-2xl p-6">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold">
            Portfolio Overview
          </h2>

          <p className="text-gray-400">
            Weekly balance activity
          </p>
        </div>

        <div className="text-right">
          <p className="text-gray-400 text-sm">
            Current Balance
          </p>

          <h3 className="text-2xl font-bold text-green-400">
            $12,450
          </h3>
        </div>

      </div>

      <div className="h-72">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart data={data}>

            <XAxis
              dataKey="name"
              stroke="#9CA3AF"
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="balance"
              stroke="#22C55E"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}