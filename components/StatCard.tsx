import React from 'react'
import { Card, CardContent } from './ui/card'
import { TrendingUp, TrendingDown } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  change: {
    value: string
    type: 'increase' | 'decrease'
  }
  icon: React.ReactNode
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon }) => {
  return (
    <Card className="shadow-sm border border-gray-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm text-gray-600 mb-1">{title}</p>
            <p className="text-3xl font-semibold text-gray-900">{value}</p>
            <div className="flex items-center mt-2">
              {change.type === 'increase' ? (
                <TrendingUp size={16} className="text-green-600 mr-1" />
              ) : (
                <TrendingDown size={16} className="text-red-600 mr-1" />
              )}
              <span 
                className={`text-sm ${
                  change.type === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {change.value}
              </span>
            </div>
          </div>
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
