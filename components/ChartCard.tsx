import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

const chartData = [
  { day: 'Mon', sessions: 2400, visitors: 1800 },
  { day: 'Tue', sessions: 1398, visitors: 1200 },
  { day: 'Wed', sessions: 9800, visitors: 7200 },
  { day: 'Thu', sessions: 3908, visitors: 2800 },
  { day: 'Fri', sessions: 4800, visitors: 3600 },
  { day: 'Sat', sessions: 3800, visitors: 2900 },
  { day: 'Sun', sessions: 4300, visitors: 3200 },
]

export const ChartCard: React.FC = () => {
  return (
    <Card className="shadow-sm border border-gray-200">
      <CardHeader>
        <CardTitle className="text-lg text-gray-900">Weekly Traffic</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="day" 
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis 
                stroke="#6b7280"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Line 
                type="monotone" 
                dataKey="sessions" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={{ fill: '#3b82f6', strokeWidth: 0, r: 4 }}
                activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="visitors" 
                stroke="#10b981" 
                strokeWidth={2}
                dot={{ fill: '#10b981', strokeWidth: 0, r: 4 }}
                activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-sm text-gray-600">Sessions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <span className="text-sm text-gray-600">Visitors</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
