import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
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

  return (
    <div className="w-[80%] h-[80%] mx-auto my-10 flex flex-col items-center">
      <BarChart
        width={800}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" shape={<TriangleBar />} label={{ position: "top" }}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default PagesToRead;
