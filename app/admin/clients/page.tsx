'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore, useAdminStore } from '@/lib/store'
import { FaUsers, FaEnvelope, FaCalendar, FaDollarSign, FaGraduationCap, FaTrash, FaSearch, FaUserCircle } from 'react-icons/fa'

export default function AdminClientsPage() {
  const router = useRouter()
  const { user, isAuthenticated } = useAuthStore()
  const { clients, courses, deleteClient } = useAdminStore()
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (!isAuthenticated || !user?.isAdmin) {
      router.push('/login')
    }
  }, [isAuthenticated, user, router])

  if (!user?.isAdmin) {
    return null
  }

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this client?')) {
      deleteClient(id)
    }
  }

  const getCourseTitles = (courseIds: number[]) => {
    return courseIds.map(id => {
      const course = courses.find(c => c.id === id)
      return course?.title || 'Unknown'
    })
  }

  const totalRevenue = clients.reduce((sum, client) => sum + client.totalSpent, 0)

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Modern Header with better contrast */}
      <div className="relative overflow-hidden bg-white border-b-4 border-purple-600 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300">
              <FaUsers className="text-4xl text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold font-display text-gray-900 mb-1">
                Client Management
              </h1>
              <p className="text-lg text-gray-600 font-semibold">
                {clients.length} total clients registered
              </p>
            </div>
          </div>

          {/* Modern Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-md">
                  <FaUsers className="text-2xl text-white" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold font-display text-gray-900">{clients.length}</div>
                  <div className="text-sm text-gray-600 font-bold uppercase tracking-wider">Total Clients</div>
                </div>
              </div>
            </div>

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
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shadow-md">
                  <FaGraduationCap className="text-2xl text-white" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold font-display text-gray-900">
                    {(clients.reduce((sum, c) => sum + c.purchasedCourses.length, 0) / clients.length || 0).toFixed(1)}
                  </div>
                  <div className="text-sm text-gray-600 font-bold uppercase tracking-wider">Avg Courses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search clients by name or email..."
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 transition-all text-gray-900 font-semibold"
            />
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client, index) => (
            <div 
              key={client.id} 
              className="bg-white rounded-2xl shadow-xl p-6 border-2 border-gray-100 hover:border-primary-200 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white shadow-lg">
                    <FaUserCircle className="text-3xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">{client.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <FaEnvelope className="text-xs" />
                      <span className="line-clamp-1">{client.email}</span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => handleDelete(client.id)}
                  className="w-10 h-10 bg-red-500 hover:bg-red-600 rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                >
                  <FaTrash />
                </button>
              </div>

              {/* Stats */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaCalendar className="text-purple-600" />
                    <span className="font-semibold">Joined</span>
                  </div>
                  <span className="font-bold text-gray-900">
                    {new Date(client.joinDate).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaDollarSign className="text-green-600" />
                    <span className="font-semibold">Total Spent</span>
                  </div>
                  <span className="text-2xl font-extrabold text-green-600">
                    ${client.totalSpent}
                  </span>
                </div>

                <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <FaGraduationCap className="text-blue-600" />
                    <span className="font-semibold">Courses Enrolled</span>
                  </div>
                  <span className="text-2xl font-extrabold text-blue-600">
                    {client.purchasedCourses.length}
                  </span>
                </div>
              </div>

              {/* Purchased Courses */}
              {client.purchasedCourses.length > 0 && (
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Enrolled Courses:</div>
                  <div className="space-y-2">
                    {getCourseTitles(client.purchasedCourses).map((title, idx) => (
                      <div 
                        key={idx} 
                        className="bg-gray-50 rounded-lg p-2 text-sm font-semibold text-gray-700 flex items-center gap-2"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                        <span className="line-clamp-1">{title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredClients.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center mx-auto mb-6">
              <FaUsers className="text-3xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">No clients found</h3>
            <p className="text-gray-600">Try adjusting your search term</p>
          </div>
        )}
      </div>
    </div>
  )
}

