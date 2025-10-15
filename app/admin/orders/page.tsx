'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore, useAdminStore } from '@/lib/store'
import { FaShoppingBag, FaUser, FaEnvelope, FaCalendar, FaDollarSign, FaGraduationCap, FaCheck, FaClock, FaTimes, FaFilter } from 'react-icons/fa'

export default function AdminOrdersPage() {
  const router = useRouter()
  const { user, isAuthenticated } = useAuthStore()
  const { orders, updateOrderStatus } = useAdminStore()
  const [statusFilter, setStatusFilter] = useState<'all' | 'completed' | 'pending' | 'cancelled'>('all')

  useEffect(() => {
    if (!isAuthenticated || !user?.isAdmin) {
      router.push('/login')
    }
  }, [isAuthenticated, user, router])

  if (!user?.isAdmin) {
    return null
  }

  const filteredOrders = statusFilter === 'all' 
    ? orders 
    : orders.filter(order => order.status === statusFilter)

  const sortedOrders = [...filteredOrders].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const totalRevenue = orders.filter(o => o.status === 'completed').reduce((sum, order) => sum + order.totalAmount, 0)
  const completedOrders = orders.filter(o => o.status === 'completed').length
  const pendingOrders = orders.filter(o => o.status === 'pending').length

  const handleStatusChange = (orderId: number, newStatus: 'completed' | 'pending' | 'cancelled') => {
    updateOrderStatus(orderId, newStatus)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return { bg: 'bg-green-100', text: 'text-green-700', badge: 'bg-green-500' }
      case 'pending':
        return { bg: 'bg-yellow-100', text: 'text-yellow-700', badge: 'bg-yellow-500' }
      case 'cancelled':
        return { bg: 'bg-red-100', text: 'text-red-700', badge: 'bg-red-500' }
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-700', badge: 'bg-gray-500' }
    }
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Modern Header with better contrast */}
      <div className="relative overflow-hidden bg-white border-b-4 border-orange-600 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-red-50 to-orange-50 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300">
              <FaShoppingBag className="text-4xl text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold font-display text-gray-900 mb-1">
                Order Management
              </h1>
              <p className="text-lg text-gray-600 font-semibold">
                {orders.length} total orders placed
              </p>
            </div>
          </div>

          {/* Modern Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md">
                  <FaDollarSign className="text-2xl text-white" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold font-display text-gray-900">${totalRevenue.toLocaleString()}</div>
                  <div className="text-sm text-gray-600 font-bold uppercase tracking-wider">Total Revenue</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md">
                  <FaCheck className="text-2xl text-white" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold font-display text-gray-900">{completedOrders}</div>
                  <div className="text-sm text-gray-600 font-bold uppercase tracking-wider">Completed</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center shadow-md">
                  <FaClock className="text-2xl text-white" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold font-display text-gray-900">{pendingOrders}</div>
                  <div className="text-sm text-gray-600 font-bold uppercase tracking-wider">Pending</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12">
        {/* Filter Buttons - Responsive */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 text-gray-700 font-bold mb-3 sm:mb-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <FaFilter className="text-white text-sm" />
            </div>
            <span className="text-sm sm:text-base">Filter:</span>
          </div>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 mt-3">
            {[
              { label: 'All', value: 'all' as const, gradient: 'from-gray-600 to-gray-800' },
              { label: 'Completed', value: 'completed' as const, gradient: 'from-green-500 to-emerald-600' },
              { label: 'Pending', value: 'pending' as const, gradient: 'from-yellow-500 to-orange-600' },
              { label: 'Cancelled', value: 'cancelled' as const, gradient: 'from-red-500 to-red-600' }
            ].map((filter) => (
              <button
                key={filter.value}
                onClick={() => setStatusFilter(filter.value)}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold tracking-wide transition-all duration-300 transform text-sm sm:text-base ${
                  statusFilter === filter.value
                    ? `bg-gradient-to-r ${filter.gradient} text-white shadow-xl scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Orders List - Responsive */}
        <div className="space-y-4 sm:space-y-6">
          {sortedOrders.map((order, index) => {
            const statusColor = getStatusColor(order.status)
            return (
              <div 
                key={order.id} 
                className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 border-2 border-gray-100 hover:border-primary-200 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 sm:gap-6">
                  {/* Order Info */}
                  <div className="flex-1">
                    {/* Order Header - Mobile Optimized */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg flex-shrink-0">
                          #{order.id}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-bold text-gray-900 truncate">{order.clientName}</h3>
                          <span className={`inline-block px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold mt-1 ${statusColor.bg} ${statusColor.text}`}>
                            {order.status.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Contact Info - Mobile Stack */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1.5">
                        <FaEnvelope className="text-xs flex-shrink-0" />
                        <span className="truncate">{order.clientEmail}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaCalendar className="text-xs flex-shrink-0" />
                        <span>{new Date(order.date).toLocaleDateString()}</span>
                      </div>
                    </div>

                    {/* Courses - Responsive */}
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4">
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 sm:mb-3 flex items-center gap-2">
                        <FaGraduationCap />
                        Courses Ordered:
                      </div>
                      <div className="space-y-2">
                        {order.courses.map((course, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-white rounded-lg p-2.5 sm:p-3 gap-2">
                            <span className="font-semibold text-gray-900 text-sm sm:text-base truncate flex-1">{course.title}</span>
                            <span className="font-bold text-primary-600 text-sm sm:text-base flex-shrink-0">${course.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions & Total - Responsive */}
                  <div className="lg:text-right space-y-4 lg:min-w-[200px]">
                    <div className="bg-green-50 rounded-xl p-4 lg:bg-transparent lg:p-0">
                      <div className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">Total Amount</div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-green-600 font-display">${order.totalAmount}</div>
                    </div>

                    {/* Status Actions - Mobile Grid */}
                    <div className="space-y-2">
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-2">Change Status:</div>
                      <div className="grid grid-cols-3 lg:grid-cols-1 gap-2">
                        <button
                          onClick={() => handleStatusChange(order.id, 'completed')}
                          disabled={order.status === 'completed'}
                          className={`flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-2 px-2 sm:px-4 py-2 rounded-xl font-bold transition-all duration-300 text-xs sm:text-sm ${
                            order.status === 'completed'
                              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                              : 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                          }`}
                        >
                          <FaCheck className="text-sm" />
                          <span className="hidden sm:inline">Complete</span>
                          <span className="sm:hidden">Done</span>
                        </button>
                        <button
                          onClick={() => handleStatusChange(order.id, 'pending')}
                          disabled={order.status === 'pending'}
                          className={`flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-2 px-2 sm:px-4 py-2 rounded-xl font-bold transition-all duration-300 text-xs sm:text-sm ${
                            order.status === 'pending'
                              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                              : 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                          }`}
                        >
                          <FaClock className="text-sm" />
                          <span>Pending</span>
                        </button>
                        <button
                          onClick={() => handleStatusChange(order.id, 'cancelled')}
                          disabled={order.status === 'cancelled'}
                          className={`flex flex-col lg:flex-row items-center justify-center gap-1 lg:gap-2 px-2 sm:px-4 py-2 rounded-xl font-bold transition-all duration-300 text-xs sm:text-sm ${
                            order.status === 'cancelled'
                              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                              : 'bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                          }`}
                        >
                          <FaTimes className="text-sm" />
                          <span>Cancel</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State */}
        {sortedOrders.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center mx-auto mb-6">
              <FaShoppingBag className="text-3xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No orders found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters</p>
            <button
              onClick={() => setStatusFilter('all')}
              className="bg-gradient-to-r from-primary-600 to-pink-600 text-white font-bold px-8 py-3 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View All Orders
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

