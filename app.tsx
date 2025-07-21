import React, { useState } from 'react'
import { DashboardLayout } from './components/DashboardLayout'
import { StatCard } from './components/StatCard'
import { ChartCard } from './components/ChartCard'
import { TableSection } from './components/TableSection'
import { NotificationList } from './components/NotificationList'
import { AnalyticsScreen } from './components/AnalyticsScreen'
import { UsersScreen } from './components/UsersScreen'
import { SettingsScreen } from './components/SettingsScreen'
import { NotificationsScreen } from './components/NotificationsScreen'
import { HelpScreen } from './components/HelpScreen'
import { 
  Users, 
  Activity, 
  DollarSign, 
  UserPlus 
} from 'lucide-react'

const DashboardHome: React.FC = () => (
  <div className="space-y-6">
    {/* Welcome Message */}
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">Welcome back, John!</h2>
      <p className="text-gray-600">Here's what's happening with your organization today.</p>
    </div>

    {/* Stats Cards Row */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Total Users"
        value="24,573"
        change={{ value: "+12.5%", type: "increase" }}
        icon={<Users size={24} />}
      />
      <StatCard
        title="Active Sessions"
        value="1,847"
        change={{ value: "+8.2%", type: "increase" }}
        icon={<Activity size={24} />}
      />
      <StatCard
        title="Revenue"
        value="$48,392"
        change={{ value: "+15.3%", type: "increase" }}
        icon={<DollarSign size={24} />}
      />
      <StatCard
        title="New Sign-ups"
        value="892"
        change={{ value: "-2.1%", type: "decrease" }}
        icon={<UserPlus size={24} />}
      />
    </div>

    {/* Chart and Notifications Row */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <ChartCard />
      </div>
      <div>
        <NotificationList />
      </div>
    </div>

    {/* Table Section */}
    <div>
      <TableSection />
    </div>
  </div>
)

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('dashboard')

  const renderScreen = () => {
    switch (currentScreen) {
      case 'analytics':
        return <AnalyticsScreen />
      case 'users':
        return <UsersScreen />
      case 'settings':
        return <SettingsScreen />
      case 'notifications':
        return <NotificationsScreen />
      case 'help':
        return <HelpScreen />
      default:
        return <DashboardHome />
    }
  }

  return (
    <DashboardLayout 
      currentScreen={currentScreen} 
      onScreenChange={setCurrentScreen}
    >
      {renderScreen()}
    </DashboardLayout>
  )
}
