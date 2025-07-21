import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'

const recentSignups = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    date: 'Jan 15, 2025',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    date: 'Jan 14, 2025',
    status: 'Pending'
  },
  {
    id: 3,
    name: 'Carol Davis',
    email: 'carol.davis@example.com',
    date: 'Jan 13, 2025',
    status: 'Active'
  },
  {
    id: 4,
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    date: 'Jan 12, 2025',
    status: 'Blocked'
  },
  {
    id: 5,
    name: 'Eva Brown',
    email: 'eva.brown@example.com',
    date: 'Jan 11, 2025',
    status: 'Active'
  },
]

const getStatusBadgeVariant = (status: string) => {
  switch (status) {
    case 'Active':
      return 'default'
    case 'Pending':
      return 'secondary'
    case 'Blocked':
      return 'destructive'
    default:
      return 'default'
  }
}

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case 'Active':
      return 'bg-green-100 text-green-800 hover:bg-green-100'
    case 'Pending':
      return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
    case 'Blocked':
      return 'bg-red-100 text-red-800 hover:bg-red-100'
    default:
      return 'bg-gray-100 text-gray-800 hover:bg-gray-100'
  }
}

export const TableSection: React.FC = () => {
  return (
    <Card className="shadow-sm border border-gray-200">
      <CardHeader>
        <CardTitle className="text-lg text-gray-900">Recent Sign-ups</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-600">Name</TableHead>
              <TableHead className="text-gray-600">Email</TableHead>
              <TableHead className="text-gray-600">Date</TableHead>
              <TableHead className="text-gray-600">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentSignups.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium text-gray-900">{user.name}</TableCell>
                <TableCell className="text-gray-600">{user.email}</TableCell>
                <TableCell className="text-gray-600">{user.date}</TableCell>
                <TableCell>
                  <Badge 
                    variant={getStatusBadgeVariant(user.status)}
                    className={getStatusBadgeColor(user.status)}
                  >
                    {user.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
