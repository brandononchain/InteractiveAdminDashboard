import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Badge } from './ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal,
  Mail,
  Phone,
  Calendar,
  UserCheck,
  UserX,
  Users as UsersIcon
} from 'lucide-react'
import { StatCard } from './StatCard'

const usersData = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    avatar: '',
    role: 'Admin',
    status: 'Active',
    lastLogin: '2 hours ago',
    signupDate: 'Jan 15, 2024',
    phone: '+1 (555) 123-4567'
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    avatar: '',
    role: 'User',
    status: 'Active',
    lastLogin: '1 day ago',
    signupDate: 'Jan 10, 2024',
    phone: '+1 (555) 234-5678'
  },
  {
    id: 3,
    name: 'Carol Davis',
    email: 'carol.davis@example.com',
    avatar: '',
    role: 'Editor',
    status: 'Inactive',
    lastLogin: '1 week ago',
    signupDate: 'Dec 22, 2023',
    phone: '+1 (555) 345-6789'
  },
  {
    id: 4,
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    avatar: '',
    role: 'User',
    status: 'Blocked',
    lastLogin: '2 weeks ago',
    signupDate: 'Dec 18, 2023',
    phone: '+1 (555) 456-7890'
  },
  {
    id: 5,
    name: 'Eva Brown',
    email: 'eva.brown@example.com',
    avatar: '',
    role: 'User',
    status: 'Active',
    lastLogin: '3 hours ago',
    signupDate: 'Jan 20, 2024',
    phone: '+1 (555) 567-8901'
  },
]

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case 'Active':
      return 'bg-green-100 text-green-800 hover:bg-green-100'
    case 'Inactive':
      return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
    case 'Blocked':
      return 'bg-red-100 text-red-800 hover:bg-red-100'
    default:
      return 'bg-gray-100 text-gray-800 hover:bg-gray-100'
  }
}

const getRoleBadgeColor = (role: string) => {
  switch (role) {
    case 'Admin':
      return 'bg-purple-100 text-purple-800 hover:bg-purple-100'
    case 'Editor':
      return 'bg-blue-100 text-blue-800 hover:bg-blue-100'
    case 'User':
      return 'bg-gray-100 text-gray-800 hover:bg-gray-100'
    default:
      return 'bg-gray-100 text-gray-800 hover:bg-gray-100'
  }
}

export const UsersScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedUsers, setSelectedUsers] = useState<number[]>([])

  const filteredUsers = usersData.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const activeUsers = usersData.filter(user => user.status === 'Active').length
  const blockedUsers = usersData.filter(user => user.status === 'Blocked').length
  const newUsersThisMonth = usersData.filter(user => 
    user.signupDate.includes('Jan 2024')
  ).length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">User Management</h2>
          <p className="text-gray-600 mt-1">Manage your users and their permissions</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Users"
          value={usersData.length.toString()}
          change={{ value: "+12%", type: "increase" }}
          icon={<UsersIcon size={24} />}
        />
        <StatCard
          title="Active Users"
          value={activeUsers.toString()}
          change={{ value: "+8%", type: "increase" }}
          icon={<UserCheck size={24} />}
        />
        <StatCard
          title="Blocked Users"
          value={blockedUsers.toString()}
          change={{ value: "-3%", type: "decrease" }}
          icon={<UserX size={24} />}
        />
        <StatCard
          title="New This Month"
          value={newUsersThisMonth.toString()}
          change={{ value: "+25%", type: "increase" }}
          icon={<Calendar size={24} />}
        />
      </div>

      {/* Search and Filters */}
      <Card className="shadow-sm border border-gray-200">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <Input
                placeholder="Search users by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card className="shadow-sm border border-gray-200">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg text-gray-900">
              Users ({filteredUsers.length})
            </CardTitle>
            {selectedUsers.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  {selectedUsers.length} selected
                </span>
                <Button variant="outline" size="sm">
                  Bulk Actions
                </Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-600">User</TableHead>
                <TableHead className="text-gray-600">Role</TableHead>
                <TableHead className="text-gray-600">Status</TableHead>
                <TableHead className="text-gray-600">Last Login</TableHead>
                <TableHead className="text-gray-600">Signup Date</TableHead>
                <TableHead className="text-gray-600">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id} className="hover:bg-gray-50">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback className="bg-blue-100 text-blue-600">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                          <Mail size={12} />
                          {user.email}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                          <Phone size={12} />
                          {user.phone}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getRoleBadgeColor(user.role)}>
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusBadgeColor(user.status)}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-600">{user.lastLogin}</TableCell>
                  <TableCell className="text-gray-600">{user.signupDate}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit User</DropdownMenuItem>
                        <DropdownMenuItem>Reset Password</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                          {user.status === 'Blocked' ? 'Unblock User' : 'Block User'}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
