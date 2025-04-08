import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  TooltipProps,
} from "recharts";

interface DataEntry {
  priority: string;
  count: number;
}

const CustomBarChart = ({ data }: { data: DataEntry[] }) => {
  const getBarColor = (entry: DataEntry): string => {
    switch (entry?.priority) {
      case "Low":
        return "#00BC7D";

      case "Medium":
        return "#FE9900";

      case "High":
        return "#FF1F57";

      default:
        return "#00BC7D";
    }
  };

  const CustomToolTip = ({ active, payload }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white shadow-md rounded-lg p-2 border border-gray-300">
          <p className="text-sx font-semibold text-purple-800 mb-1">
            {payload[0]?.payload?.priority}
          </p>
          <p className="text-sm text-gray-600">
            Count:{" "}
            <span className="text-sm font-medium text-gray-900">
              {payload[0]?.payload?.count}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="bg-white mt-6">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="none" />

          <XAxis
            dataKey="priority"
            tick={{ fontSize: 12, fill: "#555" }}
            stroke="none"
          />

          <YAxis tick={{ fontSize: 12, fill: "#555" }} stroke="none" />

          <Tooltip content={CustomToolTip} cursor={{ fill: "transparent" }} />

          <Bar dataKey="count" fill="#FF8042" radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={index} fill={getBarColor(entry)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
