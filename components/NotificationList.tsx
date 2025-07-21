import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { 
  Bell, 
  UserPlus, 
  DollarSign, 
  AlertTriangle, 
  CheckCircle 
} from 'lucide-react'

const notifications = [
  {
    id: 1,
    icon: <UserPlus size={16} />,
    message: 'New user registered',
    time: '2 min ago',
    type: 'info'
  },
  {
    id: 2,
    icon: <DollarSign size={16} />,
    message: 'Payment received $250',
    time: '15 min ago',
    type: 'success'
  },
  {
    id: 3,
    icon: <AlertTriangle size={16} />,
    message: 'Server load high',
    time: '1 hour ago',
    type: 'warning'
  },
  {
    id: 4,
    icon: <CheckCircle size={16} />,
    message: 'Backup completed',
    time: '2 hours ago',
    type: 'success'
  },
  {
    id: 5,
    icon: <Bell size={16} />,
    message: 'System update available',
    time: '3 hours ago',
    type: 'info'
  },
]

interface NotificationItemProps {
  icon: React.ReactNode
  message: string
  time: string
  type: string
}

const NotificationItem: React.FC<NotificationItemProps> = ({ icon, message, time, type }) => {
  const getIconColor = (type: string) => {
    switch (type) {
      case 'success':
        return 'text-green-600 bg-green-50'
      case 'warning':
        return 'text-yellow-600 bg-yellow-50'
      case 'error':
        return 'text-red-600 bg-red-50'
      default:
        return 'text-blue-600 bg-blue-50'
    }
  }

  return (
    <div className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getIconColor(type)}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-900 mb-1">{message}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  )
}

export const NotificationList: React.FC = () => {
  return (
    <Card className="shadow-sm border border-gray-200">
      <CardHeader>
        <CardTitle className="text-lg text-gray-900">Recent Notifications</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-1">
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              icon={notification.icon}
              message={notification.message}
              time={notification.time}
              type={notification.type}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
