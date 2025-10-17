'use client'

import { useState, useMemo } from 'react'
import CourseCard from '@/components/CourseCard'
import { FaTrophy, FaGraduationCap, FaFilter, FaBookOpen } from 'react-icons/fa'

export default function CoursesPage() {
  // Same featured courses from home page
  const featuredCourses = [
    {
      id: 1,
      title: 'Men Style',
      description: 'Master masculine styling, body isolation, and musical expression with Adrian Ros',
      level: 'All Levels',
      duration: '24/7 Access',
      price: 29.99,
      image: '/images/men-style-course.jpg',
      lessons: 20,
      rating: 5.0,
      students: 850,
      instructor: 'Adrian Ros',
      category: 'ONLINE CLASSES'
    },
    {
      id: 2,
      title: 'Partnerwork',
      description: 'Learn connection, leading/following techniques and partner dynamics with Klau y Ros',
      level: 'All Levels',
      duration: '24/7 Access',
      price: 29.99,
      image: '/images/partnerwork-course.jpg',
      lessons: 25,
      rating: 5.0,
      students: 1200,
      instructor: 'Klau y Ros',
      category: 'ONLINE CLASSES'
    },
    {
      id: 3,
      title: 'Lady Style',
      description: 'Develop feminine styling, body control, and elegance with Klaudia Perdek',
      level: 'All Levels',
      duration: '24/7 Access',
      price: 29.99,
      image: '/images/lady-style-course.jpg',
      lessons: 22,
      rating: 5.0,
      students: 980,
      instructor: 'Klaudia Perdek',
      category: 'ONLINE CLASSES'
    },
    {
      id: 4,
      title: 'Vuela Teams',
      description: 'Join the exclusive Vuela Bootcamp Teams program with Klau y Ros and represent your city on the global stage',
      level: 'Advanced',
      duration: 'Bootcamp Program',
      price: 650,
      originalPrice: 800,
      image: '/images/vuela-teams-course.jpg',
      lessons: 50,
      rating: 5.0,
      students: 120,
      instructor: 'Klau y Ros',
      category: 'KR TEAMS',
      badge: 'NEW TEAMS'
    },
    {
      id: 5,
      title: "Viejo Oeste Lady's Team",
      description: 'Exclusive ladies team choreography program with Klaudia Perdek focusing on powerful feminine expression',
      level: 'Intermediate',
      duration: 'Team Program',
      price: 500,
      image: '/images/viejo-oeste-course.jpg',
      lessons: 35,
      rating: 5.0,
      students: 85,
      instructor: 'Klaudia Perdek',
      category: 'KR TEAMS'
    },
    {
      id: 6,
      title: 'Niveles Choreo',
      description: 'Master the complete Niveles choreography with Klau y Ros, featuring dynamic moves and musicality',
      level: 'All Levels',
      duration: 'Full Choreography',
      price: 350,
      originalPrice: 800,
      image: '/images/niveles-course.jpg',
      lessons: 30,
      rating: 5.0,
      students: 450,
      instructor: 'Klau y Ros',
      category: 'CHOREOGRAPHY'
    }
  ]

  const [selectedLevel, setSelectedLevel] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('popular')

  const filteredCourses = useMemo(() => {
    let filtered = [...featuredCourses]

    // Filter by level
    if (selectedLevel !== 'all') {
      filtered = filtered.filter(course => course.level.toLowerCase() === selectedLevel.toLowerCase())
    }

    // Sort courses
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'rating':
          return b.rating - a.rating
        default: // popular
          return b.students - a.students
      }
    })

    return sorted
  }, [selectedLevel, sortBy])

  return (
    <div className="pt-20 min-h-screen scroll-smooth" style={{ background: 'linear-gradient(180deg, #330F95 0%, #1a0a4e 50%, #000000 100%)' }}>
      {/* Hero Section */}
      <section className="relative py-12 px-4 overflow-hidden">
        {/* Smooth gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            {/* Title */}
            <p className="text-purple-400 font-bold text-sm tracking-widest uppercase mb-4">OUR COURSES</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display text-white mb-6 leading-normal">
              Explore our <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Best Courses</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Master Bachata from basics to advanced techniques with Klau & Ros
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">{featuredCourses.length}+</div>
              <div className="text-gray-300 font-medium">Courses</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">500+</div>
              <div className="text-gray-300 font-medium">Lessons</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">24/7</div>
              <div className="text-gray-300 font-medium">Access</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">1000+</div>
              <div className="text-gray-300 font-medium">Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Filter Section */}
      <section className="sticky top-20 z-40 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            
            {/* Level Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">Filter:</span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedLevel('all')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                    selectedLevel === 'all'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  All Levels
                </button>
                <button
                  onClick={() => setSelectedLevel('beginner')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                    selectedLevel === 'beginner'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  Beginner
                </button>
                <button
                  onClick={() => setSelectedLevel('intermediate')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                    selectedLevel === 'intermediate'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  Intermediate
                </button>
                <button
                  onClick={() => setSelectedLevel('advanced')}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                    selectedLevel === 'advanced'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  Advanced
                </button>
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm font-medium cursor-pointer hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
              >
                <option value="popular" className="bg-gray-800">Most Popular</option>
                <option value="rating" className="bg-gray-800">Highest Rated</option>
                <option value="price-low" className="bg-gray-800">Price: Low to High</option>
                <option value="price-high" className="bg-gray-800">Price: High to Low</option>
              </select>
            </div>

          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 px-4 relative">
        {/* Smooth gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent"></div>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Blobs */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-blue-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
          <div className="absolute bottom-10 right-1/3 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '6s' }}></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/3 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-30 animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {filteredCourses.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {filteredCourses.map((course, index) => (
                <div 
                  key={course.id} 
                  className="flex flex-col h-full animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CourseCard course={course} originalPrice={course.originalPrice} badge={course.badge} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              {/* Enhanced Empty State */}
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                  <FaBookOpen className="text-5xl text-white/80" />
                </div>
                {/* Decorative rings */}
                <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full border-2 border-purple-400/30 animate-ping"></div>
                <div className="absolute inset-2 w-28 h-28 mx-auto rounded-full border border-pink-400/20 animate-pulse"></div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4 font-display">No Courses Found</h3>
              <p className="text-gray-300 mb-8 text-lg">Try adjusting your filters to find more courses</p>
              <button
                onClick={() => {
                  setSelectedLevel('all')
                  setSortBy('popular')
                }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                <FaFilter className="text-lg" />
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
