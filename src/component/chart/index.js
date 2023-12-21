import React from 'react'
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer} from 'recharts';
import {revenueData} from "../../data";

const Chart = (props) => {
  const {hideXAxis, hideYAxis, verticalDasharray, horizontalDasharray} = props;
  return (
    <div className="relative pb-[40%] h-0">
      <ResponsiveContainer width="100%" style={{position: "absolute", left: "0"}}>
        <AreaChart data={revenueData}
          margin={{ top: 10, right: 2, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis hide={hideXAxis} axisLine={false} tickLine={false} dataKey="name" />
          <YAxis hide={hideYAxis} axisLine={false} tickLine={false} />
          <CartesianGrid vertical={verticalDasharray} tickLine="false" horizontal={horizontalDasharray}  strokeDasharray="3 3"/>
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    
  )
}

export default Chart;