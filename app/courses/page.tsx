'use client'

import { useState } from 'react'
import CourseCard from '@/components/CourseCard'
import { FaFilter, FaGraduationCap, FaStar, FaTrophy, FaFire } from 'react-icons/fa'

const allCourses = [
  {
    id: 1,
    title: 'Bachata Fundamentals',
    description: 'Master the essential steps, timing, and basic movements of Bachata. Perfect for complete beginners.',
    level: 'Beginner',
    duration: '8 weeks',
    price: 149,
    image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&h=600&fit=crop',
    lessons: 24,
    rating: 4.9,
    students: 1250
  },
  {
    id: 2,
    title: 'Sensual Bachata Techniques',
    description: 'Learn elegant body movements, rolls, and connection techniques that define sensual bachata.',
    level: 'Intermediate',
    duration: '10 weeks',
    price: 199,
    image: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800&h=600&fit=crop',
    lessons: 30,
    rating: 5.0,
    students: 890
  },
  {
    id: 3,
    title: 'Advanced Partnering & Musicality',
    description: 'Perfect your connection, leading/following, and musical interpretation at an advanced level.',
    level: 'Advanced',
    duration: '12 weeks',
    price: 249,
    image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?w=800&h=600&fit=crop',
    lessons: 36,
    rating: 4.9,
    students: 645
  },
  {
    id: 4,
    title: 'Bachata Footwork Mastery',
    description: 'Enhance your footwork with intricate patterns, syncopations, and styling variations.',
    level: 'Intermediate',
    duration: '6 weeks',
    price: 129,
    image: 'https://images.unsplash.com/photo-1483412468200-72182dbbc544?w=800&h=600&fit=crop',
    lessons: 18,
    rating: 4.8,
    students: 720
  },
  {
    id: 5,
    title: 'Leading & Following Essentials',
    description: 'Build strong connection fundamentals and clear communication with your partner.',
    level: 'Beginner',
    duration: '6 weeks',
    price: 139,
    image: 'https://images.unsplash.com/photo-1496450681664-3df85efbd29f?w=800&h=600&fit=crop',
    lessons: 20,
    rating: 4.9,
    students: 980
  },
  {
    id: 6,
    title: 'Bachata Performance Choreography',
    description: 'Learn stunning choreographies and performance techniques to take your dancing to the stage.',
    level: 'Advanced',
    duration: '8 weeks',
    price: 199,
    image: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=800&h=600&fit=crop',
    lessons: 24,
    rating: 5.0,
    students: 450
  },
  {
    id: 7,
    title: 'Body Movement & Isolation',
    description: 'Develop fluid body movements, isolations, and styling that brings your bachata to life.',
    level: 'Intermediate',
    duration: '8 weeks',
    price: 169,
    image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&h=600&fit=crop',
    lessons: 26,
    rating: 4.8,
    students: 610
  },
  {
    id: 8,
    title: 'Turn Patterns & Combinations',
    description: 'Master a wide variety of turn patterns and combinations for both leaders and followers.',
    level: 'Intermediate',
    duration: '10 weeks',
    price: 179,
    image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&h=600&fit=crop',
    lessons: 28,
    rating: 4.9,
    students: 780
  },
  {
    id: 9,
    title: 'Complete Bachata Bundle',
    description: 'All courses included! The complete bachata journey from beginner to advanced performer.',
    level: 'All Levels',
    duration: '68 weeks',
    price: 999,
    image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?w=800&h=600&fit=crop',
    lessons: 206,
    rating: 5.0,
    students: 2100
  }
]

export default function CoursesPage() {
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [sortBy, setSortBy] = useState('popular')

  const filteredCourses = allCourses.filter(course => 
    selectedLevel === 'All' || course.level === selectedLevel || course.level === 'All Levels'
  )

  const sortedCourses = [...filteredCourses].sort((a, b) => {
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

  return (
    <div className="pt-20 bg-gradient-to-br from-gray-50 via-white to-primary-50/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-4">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-60 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-20 right-1/3 w-72 h-72 bg-gradient-to-br from-pink-400/20 to-primary-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-xl">
              <FaGraduationCap className="text-lg" />
              <span className="font-bold tracking-wide">9 Amazing Courses</span>
              <FaTrophy className="text-yellow-300" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-center mb-6 animate-fade-in font-display leading-normal">
            <span className="bg-gradient-to-r from-primary-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Transform Your
            </span>
            <br />
            <span className="text-gray-900">Bachata Journey</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 text-center max-w-3xl mx-auto mb-12 animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
            From fundamentals to advanced techniques, find the perfect course to elevate your dancing
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              { icon: FaGraduationCap, value: '2,100+', label: 'Students', color: 'from-blue-500 to-cyan-500' },
              { icon: FaStar, value: '4.9', label: 'Avg Rating', color: 'from-yellow-500 to-orange-500' },
              { icon: FaFire, value: '206', label: 'Lessons', color: 'from-orange-500 to-red-500' },
              { icon: FaTrophy, value: '68', label: 'Weeks Content', color: 'from-purple-500 to-pink-500' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2`}>
                  <stat.icon className="text-white text-lg" />
                </div>
                <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-16 z-40 py-6 px-4 backdrop-blur-xl bg-white/90 border-y border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Level Filter */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <div className="flex items-center gap-2 text-gray-700 font-bold">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-pink-600 flex items-center justify-center">
                  <FaFilter className="text-white text-sm" />
                </div>
                <span>Level:</span>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {[
                  { name: 'All', gradient: 'from-gray-600 to-gray-800' },
                  { name: 'Beginner', gradient: 'from-green-500 to-emerald-600' },
                  { name: 'Intermediate', gradient: 'from-blue-500 to-cyan-600' },
                  { name: 'Advanced', gradient: 'from-purple-500 to-pink-600' }
                ].map(level => (
                  <button
                    key={level.name}
                    onClick={() => setSelectedLevel(level.name)}
                    className={`px-5 py-2.5 rounded-xl font-bold tracking-wide transition-all duration-300 transform ${
                      selectedLevel === level.name
                        ? `bg-gradient-to-r ${level.gradient} text-white shadow-xl scale-105`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                    }`}
                  >
                    {level.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <span className="font-bold text-gray-700">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-5 py-2.5 rounded-xl border-2 border-gray-200 focus:border-primary-600 focus:outline-none bg-white font-bold text-gray-700 cursor-pointer transition-all duration-300 hover:border-primary-400"
              >
                <option value="popular">🔥 Most Popular</option>
                <option value="rating">⭐ Highest Rated</option>
                <option value="price-low">💰 Price: Low to High</option>
                <option value="price-high">💎 Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Results count */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-pink-600 flex items-center justify-center shadow-lg">
                <FaGraduationCap className="text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">Available Courses</div>
                <div className="text-2xl font-bold text-gray-900">
                  {sortedCourses.length} Course{sortedCourses.length !== 1 ? 's' : ''}
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedCourses.map((course, index) => (
              <div 
                key={course.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>

          {/* Empty state */}
          {sortedCourses.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center mx-auto mb-6">
                <FaGraduationCap className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No courses found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters to see more courses</p>
              <button
                onClick={() => setSelectedLevel('All')}
                className="bg-gradient-to-r from-primary-600 to-pink-600 text-white font-bold px-8 py-3 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View All Courses
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

