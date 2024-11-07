import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Statistic() {
  const data = useLoaderData();

  return (
    <div className="w-11/12 mx-auto mt-10">
      <h1 className="text-2xl font-bold">statistic</h1>
      <div className="bg-white p-8 flex justify-center mt-10 rounded-lg">
        <div style={{ width: "100%", height: 350 }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product_title" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="price" fill="#8884d8" />
              <Bar dataKey="rating" fill="red" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
