type BalanceCardProps = {
  title: string;
  value: string;
};

export default function BalanceCard({
  title,
  value,
}: BalanceCardProps) {
  return (
    <div className="bg-[#111827] rounded-2xl p-6">
      <h2 className="text-gray-400 mb-2">
        {title}
      </h2>

      <p className="text-3xl font-bold">
        {value}
      </p>
    </div>
  );
}