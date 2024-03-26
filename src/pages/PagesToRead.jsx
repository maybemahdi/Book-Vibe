import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { getLocal } from "../utils/local";
import { useEffect, useState } from "react";

const PagesToRead = () => {
  const [read, setRead] = useState([]);
  useEffect(() => {
    const readData = getLocal();
    setRead(readData);
  }, []);

  const data = read.map((i) => ({
    name: i.bookName,
    uv: i.totalPages,
    pv: 2400,
    amt: 2400,
  }));

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  if(read.length < 1) return <div className="my-20 text-4xl font-work font-bold text-center">Please add read item to show the stats!</div>
  return (
    <div className="md:w-[80%] w-[100%] h-[500px] mx-auto my-10">
      <ResponsiveContainer className="-ml-5" width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="uv" shape={<TriangleBar />} label={{ position: "top" }}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
