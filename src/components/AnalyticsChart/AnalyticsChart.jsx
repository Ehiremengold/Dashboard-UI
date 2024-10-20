import "./AnalyticsChart.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", income: 30000, outcome: 20000 },
  { name: "Feb", income: 25000, outcome: 15000 },
  { name: "Mar", income: 28000, outcome: 18000 },
  { name: "Apr", income: 35000, outcome: 25000 },
  { name: "May", income: 40000, outcome: 30000 },
  { name: "Jun", income: 37000, outcome: 22000 },
  { name: "Jul", income: 32000, outcome: 19000 },
  { name: "Aug", income: 29000, outcome: 17000 },
];

const AnalyticsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 10, right: 30, left: 5, bottom: 5 }}
        barSize={10}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip formatter={(value) => `$${value.toFixed(1)}`} />
        <Legend
          verticalAlign="top"
          align="right"
          wrapperStyle={{ paddingTop: "10px" }}
        />
        <Bar dataKey="income" fill="#64cff6" name="Income" />
        <Bar dataKey="outcome" fill="#6359e9" name="Outcome" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AnalyticsChart;
