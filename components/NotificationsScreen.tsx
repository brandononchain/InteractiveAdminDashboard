import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { 
  Bell, 
  Check, 
  Trash2, 
  Filter,
  MoreHorizontal,
  AlertCircle,
  CheckCircle,
  Info,
  AlertTriangle,
  DollarSign,
  UserPlus,
  Settings
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

interface Notification {
  id: number
  type: 'success' | 'warning' | 'error' | 'info'
  title: string
  message: string
  timestamp: string
  isRead: boolean
  category: 'system' | 'security' | 'billing' | 'users'
}

const notificationsData: Notification[] = [
  {
    id: 1,
    type: 'success',
    title: 'Payment Received',
    message: 'Payment of $299.00 received from Acme Corp',
    timestamp: '2 minutes ago',
    isRead: false,
    category: 'billing'
  },
  {
    id: 2,
    type: 'info',
    title: 'New User Registration',
    message: 'Alice Johnson has joined your organization',
    timestamp: '15 minutes ago',
    isRead: false,
    category: 'users'
  },
  {
    id: 3,
    type: 'warning',
    title: 'High Server Load',
    message: 'Server CPU usage is at 85%. Consider scaling up.',
    timestamp: '1 hour ago',
    isRead: true,
    category: 'system'
  },
  {
    id: 4,
    type: 'error',
    title: 'Failed Login Attempt',
    message: 'Multiple failed login attempts detected from IP 192.168.1.1',
    timestamp: '2 hours ago',
    isRead: false,
    category: 'security'
  },
  {
    id: 5,
    type: 'success',
    title: 'Backup Completed',
    message: 'Daily backup completed successfully (2.4 GB)',
    timestamp: '3 hours ago',
    isRead: true,
    category: 'system'
  },
  {
    id: 6,
    type: 'info',
    title: 'System Update Available',
    message: 'Version 2.1.0 is now available for installation',
    timestamp: '1 day ago',
    isRead: true,
    category: 'system'
  },
]

const getNotificationIcon = (type: string) => {
  switch (type) {
    case 'success':
      return <CheckCircle size={16} className="text-green-600" />
    case 'warning':
      return <AlertTriangle size={16} className="text-yellow-600" />
    case 'error':
      return <AlertCircle size={16} className="text-red-600" />
    default:
      return <Info size={16} className="text-blue-600" />
  }
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'billing':
      return <DollarSign size={16} />
    case 'users':
      return <UserPlus size={16} />
    case 'security':
      return <AlertCircle size={16} />
    default:
      return <Settings size={16} />
  }
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'billing':
      return 'bg-green-100 text-green-800'
    case 'users':
      return 'bg-blue-100 text-blue-800'
    case 'security':
      return 'bg-red-100 text-red-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

export const NotificationsScreen: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(notificationsData)
  const [selectedTab, setSelectedTab] = useState('all')

  const unreadCount = notifications.filter(n => !n.isRead).length

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, isRead: true } : n)
    )
  }

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(n => ({ ...n, isRead: true }))
    )
  }

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  const filterNotifications = (category: string) => {
    if (category === 'all') return notifications
    if (category === 'unread') return notifications.filter(n => !n.isRead)
    return notifications.filter(n => n.category === category)
  }

  const filteredNotifications = filterNotifications(selectedTab)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <Bell size={24} className="text-gray-600" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Notifications</h2>
            <p className="text-gray-600 mt-1">
              Stay updated with important alerts and messages
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {unreadCount > 0 && (
            <Button variant="outline" onClick={markAllAsRead}>
              <Check className="w-4 h-4 mr-2" />
              Mark all as read
            </Button>
          )}
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card className="shadow-sm border border-gray-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total</p>
                <p className="text-2xl font-semibold text-gray-900">{notifications.length}</p>
              </div>
              <Bell className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border border-gray-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Unread</p>
                <p className="text-2xl font-semibold text-red-600">{unreadCount}</p>
              </div>
              <AlertCircle className="w-8 h-8 text-red-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border border-gray-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Security</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {notifications.filter(n => n.category === 'security').length}
                </p>
              </div>
              <AlertTriangle className="w-8 h-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-sm border border-gray-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">System</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {notifications.filter(n => n.category === 'system').length}
                </p>
              </div>
              <Settings className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notifications List */}
      <Card className="shadow-sm border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg text-gray-900">Recent Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="grid grid-cols-6 w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="unread">
                Unread {unreadCount > 0 && `(${unreadCount})`}
              </TabsTrigger>
              <TabsTrigger value="system">System</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
            </TabsList>

            <TabsContent value={selectedTab} className="mt-6">
              <div className="space-y-3">
                {filteredNotifications.length === 0 ? (
                  <div className="text-center py-8">
                    <Bell className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">No notifications found</p>
                  </div>
                ) : (
                  filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 border rounded-lg transition-colors hover:bg-gray-50 ${
                        !notification.isRead ? 'bg-blue-50 border-blue-200' : 'bg-white'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3 flex-1">
                          <div className={`p-2 rounded-full ${
                            notification.type === 'success' ? 'bg-green-100' :
                            notification.type === 'warning' ? 'bg-yellow-100' :
                            notification.type === 'error' ? 'bg-red-100' :
                            'bg-blue-100'
                          }`}>
                            {getNotificationIcon(notification.type)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className={`font-medium ${
                                !notification.isRead ? 'text-gray-900' : 'text-gray-700'
                              }`}>
                                {notification.title}
                              </h4>
                              <Badge className={getCategoryColor(notification.category)}>
                                <span className="flex items-center gap-1">
                                  {getCategoryIcon(notification.category)}
                                  {notification.category}
                                </span>
                              </Badge>
                              {!notification.isRead && (
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mb-2">
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-500">
                              {notification.timestamp}
                            </p>
                          </div>
                        </div>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal size={16} />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {!notification.isRead && (
                              <DropdownMenuItem onClick={() => markAsRead(notification.id)}>
                                <Check className="w-4 h-4 mr-2" />
                                Mark as read
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem 
                              onClick={() => deleteNotification(notification.id)}
                              className="text-red-600"
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
