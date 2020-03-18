import React from 'react'
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from 'recharts'; 

const BarGraph = ( props ) => {

    return(
        <div >
            <ResponsiveContainer width={'60%'} height={300}>
            <BarChart
                width={500}
                height={300}
                data={props.data}
                margin={{
                top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="city" />
                <YAxis name='Accidents'/>
                <Tooltip />
                <Legend />
                <Bar dataKey="accidents" fill="#8884d8" />
            </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
export default BarGraph;