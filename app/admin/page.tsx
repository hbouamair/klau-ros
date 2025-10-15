'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore, useAdminStore } from '@/lib/store'
import Link from 'next/link'
import { FaUsers, FaGraduationCap, FaShoppingBag, FaDollarSign, FaChartLine, FaTrophy, FaCrown, FaArrowRight } from 'react-icons/fa'

export default function AdminDashboard() {
  const router = useRouter()
  const { user, isAuthenticated } = useAuthStore()
  const { courses, clients, orders } = useAdminStore()

  useEffect(() => {
    if (!isAuthenticated || !user?.isAdmin) {
      router.push('/login')
    }
  }, [isAuthenticated, user, router])

  if (!user?.isAdmin) {
    return null
  }

  // Calculate statistics
  const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0)
  const completedOrders = orders.filter(o => o.status === 'completed').length
  const pendingOrders = orders.filter(o => o.status === 'pending').length
  const totalStudents = courses.reduce((sum, course) => sum + course.students, 0)

  const stats = [
    { 
      label: 'Total Revenue', 
      value: `$${totalRevenue.toLocaleString()}`, 
      icon: FaDollarSign, 
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
      change: '+12.5%'
    },
    { 
      label: 'Active Courses', 
      value: courses.length, 
      icon: FaGraduationCap, 
      gradient: 'from-blue-500 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-50',
      change: '+3'
    },
    { 
      label: 'Total Clients', 
      value: clients.length, 
      icon: FaUsers, 
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50',
      change: '+24%'
    },
    { 
      label: 'Total Orders', 
      value: orders.length, 
      icon: FaShoppingBag, 
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-50 to-red-50',
      change: `${pendingOrders} pending`
    }
  ]

  const quickActions = [
    { title: 'Manage Courses', href: '/admin/courses', icon: FaGraduationCap, color: 'from-blue-500 to-cyan-600' },
    { title: 'View Clients', href: '/admin/clients', icon: FaUsers, color: 'from-purple-500 to-pink-600' },
    { title: 'Orders', href: '/admin/orders', icon: FaShoppingBag, color: 'from-orange-500 to-red-600' }
  ]

  const recentOrders = orders.slice(0, 5).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Modern Header with better contrast */}
      <div className="relative overflow-hidden bg-white border-b-4 border-primary-600 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50 via-pink-50 to-orange-50 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4 animate-fade-in">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-600 to-pink-600 flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300">
                <FaCrown className="text-4xl text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold font-display text-gray-900 mb-1">
                  Admin Dashboard
                </h1>
                <p className="text-lg text-gray-600 font-semibold">
                  Welcome back, <span className="text-primary-600">{user.name}</span>! 👋
                </p>
              </div>
            </div>

            {/* Quick Stats Summary */}
            <div className="flex gap-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl px-6 py-4 text-white shadow-lg">
                <div className="text-sm font-semibold opacity-90">Revenue</div>
                <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl px-6 py-4 text-white shadow-lg">
                <div className="text-sm font-semibold opacity-90">Orders</div>
                <div className="text-2xl font-bold">{orders.length}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Modern Stats Grid with better contrast */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:border-primary-300 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="text-3xl text-white" />
                </div>
                <div className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1.5 rounded-full border border-green-200">
                  {stat.change}
                </div>
              </div>
              <div className="text-4xl font-extrabold mb-2 text-gray-900 font-display">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-bold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Actions with modern card design */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold flex items-center gap-3 font-display text-gray-900">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-600 to-pink-600 flex items-center justify-center">
                <FaChartLine className="text-white" />
              </div>
              Quick Actions
            </h2>
            <div className="text-sm text-gray-500 font-medium">
              Manage your platform efficiently
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                href={action.href}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-gray-200 hover:border-primary-400 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <action.icon className="text-4xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors font-display">
                    {action.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary-600 font-bold">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Open</span>
                    <FaArrowRight className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Orders - Responsive Design */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold flex items-center gap-3 font-display text-gray-900">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <FaTrophy className="text-white" />
              </div>
              Recent Orders
            </h2>
            <Link 
              href="/admin/orders" 
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold px-4 sm:px-6 py-3 rounded-xl flex items-center justify-center gap-2 group transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
            >
              View All Orders
              <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b-2 border-gray-200">
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Order ID</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Client</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Courses</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-bold text-gray-900 bg-gray-100 px-3 py-1 rounded-lg">#{order.id}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-bold text-gray-900">{order.clientName}</div>
                          <div className="text-xs text-gray-500">{order.clientEmail}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-semibold text-gray-700 bg-blue-50 px-3 py-1 rounded-lg inline-block">
                          {order.courses.length} course{order.courses.length > 1 ? 's' : ''}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-bold text-2xl text-green-600">${order.totalAmount}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-600">
                        {new Date(order.date).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-4 py-2 rounded-xl text-xs font-bold shadow-sm ${
                          order.status === 'completed' 
                            ? 'bg-green-100 text-green-700 border border-green-200' 
                            : order.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                            : 'bg-red-100 text-red-700 border border-red-200'
                        }`}>
                          {order.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-4">
            {recentOrders.map((order, index) => (
              <div 
                key={order.id} 
                className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-4 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Order Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-gray-100">
                  <span className="font-bold text-gray-900 bg-gray-100 px-3 py-1.5 rounded-lg text-sm">
                    Order #{order.id}
                  </span>
                  <span className={`px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm ${
                    order.status === 'completed' 
                      ? 'bg-green-100 text-green-700 border border-green-200' 
                      : order.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                      : 'bg-red-100 text-red-700 border border-red-200'
                  }`}>
                    {order.status.toUpperCase()}
                  </span>
                </div>

                {/* Client Info */}
                <div className="mb-4">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Client</div>
                  <div className="font-bold text-gray-900 text-base">{order.clientName}</div>
                  <div className="text-xs text-gray-500">{order.clientEmail}</div>
                </div>

                {/* Order Details Grid */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-blue-50 rounded-xl p-3">
                    <div className="text-xs font-bold text-gray-500 uppercase mb-1">Courses</div>
                    <div className="font-bold text-lg text-blue-600">
                      {order.courses.length}
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-3">
                    <div className="text-xs font-bold text-gray-500 uppercase mb-1">Amount</div>
                    <div className="font-bold text-lg text-green-600">
                      ${order.totalAmount}
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <div className="text-xs font-bold text-gray-500 uppercase mb-1">Date</div>
                    <div className="font-bold text-sm text-gray-700">
                      {new Date(order.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

