'use client'

import { useEffect, useState } from 'react'
import { useAuthStore } from '@/lib/store'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { FaBook, FaClock, FaPlay, FaCheckCircle, FaAward } from 'react-icons/fa'

export default function DashboardPage() {
  const { user, isAuthenticated, logout } = useAuthStore()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
    if (searchParams.get('purchase') === 'success') {
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 5000)
    }
  }, [isAuthenticated, router, searchParams])

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  // Mock data - in real app, this would come from an API
  const purchasedCourses = [
    {
      id: 1,
      title: 'Bachata Fundamentals',
      progress: 45,
      totalLessons: 24,
      completedLessons: 11,
      image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=400&h=300&fit=crop',
      lastAccessed: '2 days ago'
    },
    {
      id: 2,
      title: 'Sensual Bachata Techniques',
      progress: 20,
      totalLessons: 30,
      completedLessons: 6,
      image: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=400&h=300&fit=crop',
      lastAccessed: '1 week ago'
    }
  ]

  const achievements = [
    { title: 'First Course Started', icon: FaPlay, earned: true },
    { title: 'Week Streak', icon: FaClock, earned: true },
    { title: 'Course Completed', icon: FaCheckCircle, earned: false },
    { title: 'Master Student', icon: FaAward, earned: false }
  ]

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="pt-20 min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary-50"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {showSuccess && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-2xl shadow-2xl animate-scale-in border-2 border-white">
          <div className="flex items-center gap-3">
            <FaCheckCircle className="text-2xl" />
            <p className="font-bold text-lg">Purchase successful! Your courses are now available.</p>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 animate-fade-in">
          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-3 gradient-text font-display">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-xl text-gray-600 font-light">Continue your Bachata learning journey</p>
          </div>
          <button
            onClick={handleLogout}
            className="mt-4 md:mt-0 px-6 py-3 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-primary-600 text-gray-700 hover:text-primary-600 font-bold rounded-xl transition-all duration-200 shadow-md"
          >
            Logout
          </button>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <FaBook className="text-3xl text-white" />
            </div>
            <div className="text-4xl font-extrabold mb-2 gradient-text font-display">{purchasedCourses.length}</div>
            <div className="text-gray-600 font-semibold">Active Courses</div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <FaCheckCircle className="text-3xl text-white" />
            </div>
            <div className="text-4xl font-extrabold mb-2 gradient-text font-display">17</div>
            <div className="text-gray-600 font-semibold">Lessons Completed</div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <FaClock className="text-3xl text-white" />
            </div>
            <div className="text-4xl font-extrabold mb-2 gradient-text font-display">12.5h</div>
            <div className="text-gray-600 font-semibold">Learning Time</div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
              <FaAward className="text-3xl text-white" />
            </div>
            <div className="text-4xl font-extrabold mb-2 gradient-text font-display">2</div>
            <div className="text-gray-600 font-semibold">Achievements</div>
          </div>
        </div>

        {/* My Courses */}
        <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-extrabold gradient-text font-display">My Courses</h2>
            <Link href="/courses" className="text-primary-600 hover:text-primary-700 font-bold flex items-center gap-2 group">
              Browse More Courses
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>

          {purchasedCourses.length === 0 ? (
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-16 text-center border border-gray-100">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <FaBook className="text-4xl text-white" />
              </div>
              <h3 className="text-3xl font-extrabold mb-3 gradient-text font-display">No courses yet</h3>
              <p className="text-xl text-gray-600 mb-8 font-light">Start your Bachata journey by enrolling in a course</p>
              <Link href="/courses" className="btn-primary inline-flex items-center justify-center gap-2">
                Explore Courses →
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {purchasedCourses.map((course, index) => (
                <div key={course.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                  <div className="relative">
                    <div
                      className="h-56 bg-cover bg-center"
                      style={{ backgroundImage: `url(${course.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-white text-sm font-semibold bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                        Last accessed {course.lastAccessed}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-extrabold mb-4 font-display">{course.title}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-5 font-medium">
                      <span className="flex items-center gap-2">
                        <FaBook className="text-primary-600" />
                        {course.completedLessons} / {course.totalLessons} lessons
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600 font-semibold">Progress</span>
                        <span className="font-bold gradient-text">{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-primary-600 to-pink-600 h-3 rounded-full transition-all duration-500 shadow-lg"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>

                    <Link
                      href={`/learn/${course.id}`}
                      className="w-full bg-gradient-to-r from-primary-600 to-pink-600 hover:from-primary-700 hover:to-pink-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                    >
                      <FaPlay className="group-hover:scale-110 transition-transform" />
                      Continue Learning
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Achievements */}
        <section className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h2 className="text-4xl font-extrabold mb-8 gradient-text font-display">Achievements</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center transition-all duration-300 border border-gray-100 ${
                  achievement.earned 
                    ? 'hover:shadow-2xl hover:-translate-y-2' 
                    : 'opacity-60 grayscale'
                }`}
              >
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-lg ${
                  achievement.earned
                    ? 'bg-gradient-to-br from-primary-600 to-pink-600'
                    : 'bg-gray-200'
                }`}>
                  <achievement.icon
                    className={`text-4xl ${
                      achievement.earned ? 'text-white' : 'text-gray-400'
                    }`}
                  />
                </div>
                <h3 className="font-bold mb-3 text-gray-800">{achievement.title}</h3>
                {achievement.earned ? (
                  <div className="flex items-center justify-center gap-2 text-green-600 font-bold text-sm">
                    <FaCheckCircle />
                    <span>Earned!</span>
                  </div>
                ) : (
                  <span className="text-gray-400 font-semibold text-sm">🔒 Locked</span>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

