import React from 'react'
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer  } from 'recharts';
    
const data = [
  {
    "name": "Jan",
    "Total": 100,
  },
  {
    "name": "Feb",
    "Total": 380,
  },
  {
    "name": "Mar",
    "Total": 200,
  },
  {
    "name": "Apr",
    "Total": 500,
  },
  {
    "name": "May",
    "Total": 450,
  },
  {
    "name": "Jun",
    "Total": 750,
  },
  {
    "name": "Jul",
    "Total": 400,
  },
  {
    "name": "Aug",
    "Total": 300,
  },
  {
    "name": "Sep",
    "Total": 700,
  },
  {
    "name": "Oct",
    "Total": 290,
  }
]
const Chart = (props) => {
  const {hideXAxis, hideYAxis, verticalDasharray, horizontalDasharray} = props;
  return (
    <div className="relative pb-[40%] h-0">
      
      <ResponsiveContainer width="100%" style={{position: "absolute", left: "0"}}>
        <AreaChart data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis hide={hideXAxis} axisLine={false} tickLine={false} dataKey="name" />
          <YAxis hide={hideYAxis} axisLine={false} tickLine={false} />
          <CartesianGrid vertical={verticalDasharray} tickLine="false" horizontal={horizontalDasharray}  strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    
  )
}

export default Chart;