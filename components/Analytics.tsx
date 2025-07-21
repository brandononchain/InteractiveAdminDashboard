import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { StatCard } from './StatCard'
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts'
import { 
  TrendingUp, 
  Eye, 
  Clock, 
  MousePointer,
  Calendar,
  Filter
} from 'lucide-react'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const pageViewsData = [
  { date: 'Jan 1', views: 4000, sessions: 2400, bounceRate: 35 },
  { date: 'Jan 8', views: 3000, sessions: 1398, bounceRate: 42 },
  { date: 'Jan 15', views: 5000, sessions: 3800, bounceRate: 28 },
  { date: 'Jan 22', views: 2780, sessions: 3908, bounceRate: 38 },
  { date: 'Jan 29', views: 1890, sessions: 4800, bounceRate: 31 },
  { date: 'Feb 5', views: 2390, sessions: 3800, bounceRate: 45 },
  { date: 'Feb 12', views: 3490, sessions: 4300, bounceRate: 33 },
]

const deviceData = [
  { name: 'Desktop', value: 68, color: '#3b82f6' },
  { name: 'Mobile', value: 24, color: '#10b981' },
  { name: 'Tablet', value: 8, color: '#f59e0b' },
]

const topPagesData = [
  { page: '/dashboard', views: 12450, time: '3:24' },
  { page: '/analytics', views: 8930, time: '2:15' },
  { page: '/users', views: 6720, time: '1:48' },
  { page: '/settings', views: 4560, time: '2:05' },
  { page: '/help', views: 3240, time: '4:12' },
]

const conversionData = [
  { stage: 'Visitors', value: 10000, rate: 100 },
  { stage: 'Sign-ups', value: 2400, rate: 24 },
  { stage: 'Trials', value: 1200, rate: 12 },
  { stage: 'Conversions', value: 480, rate: 4.8 },
]

export const AnalyticsScreen: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Analytics Overview</h2>
          <p className="text-gray-600 mt-1">Track your website performance and user behavior</p>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="30d">
            <SelectTrigger className="w-32">
              <Calendar className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Page Views"
          value="142.8K"
          change={{ value: "+12.3%", type: "increase" }}
          icon={<Eye size={24} />}
        />
        <StatCard
          title="Unique Visitors"
          value="28.4K"
          change={{ value: "+8.7%", type: "increase" }}
          icon={<TrendingUp size={24} />}
        />
        <StatCard
          title="Avg. Session Duration"
          value="3m 24s"
          change={{ value: "+5.2%", type: "increase" }}
          icon={<Clock size={24} />}
        />
        <StatCard
          title="Bounce Rate"
          value="34.2%"
          change={{ value: "-2.1%", type: "decrease" }}
          icon={<MousePointer size={24} />}
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Page Views Trend */}
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900">Page Views & Sessions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={pageViewsData}>
                  <defs>
                    <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="date" stroke="#6b7280" fontSize={12} />
                  <YAxis stroke="#6b7280" fontSize={12} />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="views"
                    stroke="#3b82f6"
                    fillOpacity={1}
                    fill="url(#colorViews)"
                  />
                  <Area
                    type="monotone"
                    dataKey="sessions"
                    stroke="#10b981"
                    fillOpacity={1}
                    fill="url(#colorSessions)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Device Breakdown */}
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900">Traffic by Device</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 flex items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={deviceData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {deviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Traffic']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              {deviceData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-600">{item.name}</span>
                  <span className="text-sm font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900">Top Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPagesData.map((page, index) => (
                <div key={page.page} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                    <span className="text-sm font-medium text-gray-900">{page.page}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>{page.views.toLocaleString()} views</span>
                    <span>{page.time} avg time</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Conversion Funnel */}
        <Card className="shadow-sm border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg text-gray-900">Conversion Funnel</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {conversionData.map((stage, index) => (
                <div key={stage.stage} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">{stage.stage}</span>
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-900">{stage.value.toLocaleString()}</span>
                      <span className="text-xs text-gray-500 ml-2">({stage.rate}%)</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${stage.rate * 4}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
