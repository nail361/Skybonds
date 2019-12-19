import React from './node_modules/react';
import {
  LineChart,
  Line, XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from './node_modules/recharts';

const Graph = (props) => {
  return (
    <LineChart
      width={500}
      height={300}
      data={props.data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="price"
        legendType="none"
        stroke="#8884d8"
        label={{ dy: -10 }}
        activeDot={{ r: 8 }} />
    </LineChart>
  )
}

export default Graph;
