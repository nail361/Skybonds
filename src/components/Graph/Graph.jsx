import React from 'react';
import {
  LineChart,
  Line, XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import './Graph.css'

const Graph = (props) => {
  const width = props.data.length < 50 ? 500 : props.data.length * 10; 
  return (
    <div className="graph-wrapper">
      <LineChart
        style={{paddingTop:"10px"}}
        width={width}
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
          dataKey={props.param}
          legendType="none"
          stroke="#8884d8"
          label={{ dy: -10 }}
          activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  )
}

export default Graph;
