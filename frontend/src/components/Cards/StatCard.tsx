interface StatCardProps {
  label: string;
  count: number;
  status: "In Progress" | "Completed" | string;
}

const StatCard: React.FC<StatCardProps> = ({ label, count, status }) => {
  const getStatusTagColor = () => {
    switch (status) {
      case "In Progress":
        return "text-cyan-500 bg-gray-50";

      case "Completed":
        return "text-indigo-500 bg-gray-50";

      default:
        return "text-violet-500 bg-gray-50";
    }
  };

  return (
    <div
      className={`flex-1 text-[10px] font-medium ${getStatusTagColor()} px-4 py-0.5 rounded`}
    >
      <span className="text-[12px] font-semibold">{count}</span> <br /> {label}
    </div>
  );
};

export default StatCard;
