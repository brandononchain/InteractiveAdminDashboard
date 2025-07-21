import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { 
  Menu, 
  Search, 
  Home, 
  BarChart3, 
  Users, 
  Settings, 
  Bell, 
  HelpCircle,
  ChevronLeft,
  ChevronDown
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  isActive?: boolean
  onClick?: () => void
  collapsed?: boolean
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, isActive, onClick, collapsed }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 relative group focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:ring-offset-1 ${
      isActive 
        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
        : 'text-gray-700 hover:bg-white hover:text-gray-900 hover:shadow-sm'
    } ${collapsed ? 'justify-center' : ''}`}
    title={collapsed ? label : undefined}
    aria-current={isActive ? 'page' : undefined}
  >
    <span className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
      isActive ? 'scale-110' : 'group-hover:scale-105'
    }`}>
      {icon}
    </span>
    {!collapsed && (
      <span className={`text-sm font-medium transition-all duration-200 ${
        isActive ? 'text-white' : ''
      }`}>
        {label}
      </span>
    )}
    {/* Active indicator dot for collapsed mode */}
    {collapsed && isActive && (
      <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full shadow-sm border-2 border-white"></div>
    )}
  </button>
)

interface DashboardLayoutProps {
  children: React.ReactNode
  currentScreen: string
  onScreenChange: (screen: string) => void
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  currentScreen, 
  onScreenChange 
}) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const sidebarItems = [
    { icon: <Home size={20} />, label: 'Dashboard', key: 'dashboard' },
    { icon: <BarChart3 size={20} />, label: 'Analytics', key: 'analytics' },
    { icon: <Users size={20} />, label: 'Users', key: 'users' },
    { icon: <Settings size={20} />, label: 'Settings', key: 'settings' },
    { icon: <Bell size={20} />, label: 'Notifications', key: 'notifications' },
    { icon: <HelpCircle size={20} />, label: 'Help', key: 'help' },
  ]

  const getPageTitle = () => {
    const item = sidebarItems.find(item => item.key === currentScreen)
    return item ? item.label : 'Dashboard'
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside 
        className={`bg-gray-50/50 backdrop-blur-sm border-r border-gray-200/80 transition-all duration-300 shadow-sm ${
          sidebarCollapsed ? 'w-16' : 'w-64'
        } ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } fixed md:static z-30 h-full overflow-hidden`}
      >
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-3 ${sidebarCollapsed ? 'justify-center' : ''}`}>
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white font-semibold">A</span>
              </div>
              {!sidebarCollapsed && (
                <div>
                  <span className="text-lg font-semibold text-gray-900">Admin</span>
                  <div className="text-xs text-gray-500 mt-0.5">Dashboard</div>
                </div>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="hidden md:flex h-8 w-8 p-0 hover:bg-gray-100 rounded-lg"
            >
              <ChevronLeft 
                size={16} 
                className={`transition-transform duration-200 ${sidebarCollapsed ? 'rotate-180' : ''}`} 
              />
            </Button>
          </div>
        </div>
        
        <nav className="p-4 space-y-1">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.key}
              icon={item.icon}
              label={item.label}
              isActive={currentScreen === item.key}
              onClick={() => {
                onScreenChange(item.key)
                setMobileMenuOpen(false)
              }}
              collapsed={sidebarCollapsed}
            />
          ))}
        </nav>
      </aside>

      {/* Mobile backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 shadow-sm h-16 flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              <Menu size={20} />
            </Button>
            <h1 className="text-xl font-semibold text-gray-900">{getPageTitle()}</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <Input 
                placeholder="Search..." 
                className="pl-10 w-64 bg-gray-50 border-gray-200"
              />
            </div>
            
            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 p-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/avatar.jpg" />
                    <AvatarFallback className="bg-blue-600 text-white">JD</AvatarFallback>
                  </Avatar>
                  <ChevronDown size={16} className="text-gray-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
