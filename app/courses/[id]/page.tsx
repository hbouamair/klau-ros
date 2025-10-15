'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { FaClock, FaBook, FaStar, FaUsers, FaCheck, FaPlay, FaShoppingCart, FaGlobe, FaInfinity, FaCertificate, FaChevronRight, FaHeart, FaTrophy } from 'react-icons/fa'
import { useCartStore } from '@/lib/store'

const courses = [
  {
    id: 1,
    title: 'Bachata Fundamentals',
    description: 'Master the essential steps, timing, and basic movements of Bachata. Perfect for complete beginners who want to build a strong foundation.',
    level: 'Beginner',
    duration: '8 weeks',
    price: 149,
    image: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=1200&h=600&fit=crop',
    lessons: 24,
    rating: 4.9,
    students: 1250,
    instructor: 'Klau & Ros',
    language: 'English, Spanish',
    includes: [
      '24 video lessons',
      'Lifetime access',
      'Certificate of completion',
      'Student community access',
      'Practice music playlist',
      'Downloadable resources'
    ],
    curriculum: [
      { module: 'Introduction to Bachata', lessons: 3 },
      { module: 'Basic Steps & Timing', lessons: 4 },
      { module: 'Leading & Following Basics', lessons: 3 },
      { module: 'Essential Turn Patterns', lessons: 4 },
      { module: 'Body Movement Fundamentals', lessons: 4 },
      { module: 'Simple Combinations', lessons: 4 },
      { module: 'Musicality Basics', lessons: 2 }
    ]
  },
  {
    id: 2,
    title: 'Sensual Bachata Techniques',
    description: 'Learn elegant body movements, rolls, and connection techniques that define sensual bachata.',
    level: 'Intermediate',
    duration: '10 weeks',
    price: 199,
    image: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=1200&h=600&fit=crop',
    lessons: 30,
    rating: 5.0,
    students: 890,
    instructor: 'Klau & Ros',
    language: 'English, Spanish',
    includes: [
      '30 video lessons',
      'Lifetime access',
      'Certificate of completion',
      'Student community access',
      'Practice music playlist',
      'Downloadable resources',
      'Weekly live Q&A sessions'
    ],
    curriculum: [
      { module: 'Introduction to Sensual Bachata', lessons: 3 },
      { module: 'Body Rolls & Waves', lessons: 5 },
      { module: 'Close Connection Techniques', lessons: 4 },
      { module: 'Hip Movement & Styling', lessons: 5 },
      { module: 'Advanced Isolations', lessons: 4 },
      { module: 'Sensual Turn Patterns', lessons: 5 },
      { module: 'Musical Interpretation', lessons: 4 }
    ]
  }
]

export default function CourseDetailPage() {
  const params = useParams()
  const courseId = parseInt(params.id as string)
  const course = courses.find(c => c.id === courseId) || courses[0]
  const { addItem } = useCartStore()

  const handleAddToCart = () => {
    addItem({
      id: course.id,
      title: course.title,
      price: course.price,
      image: course.image,
      level: course.level
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[500px] overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${course.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-pink-600 px-4 py-2 rounded-full text-white text-sm font-bold mb-6 shadow-lg animate-scale-in">
              <FaTrophy className="text-yellow-300" />
              {course.level}
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 font-display leading-normal animate-fade-in">
              {course.title}
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {course.description}
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6 text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                <FaStar className="text-yellow-400 text-xl" />
                <span className="font-bold text-lg">{course.rating}</span>
                <span className="text-gray-300 text-sm">Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                <FaUsers className="text-blue-400 text-xl" />
                <span className="font-bold text-lg">{course.students.toLocaleString()}</span>
                <span className="text-gray-300 text-sm">Students</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                <FaClock className="text-green-400 text-xl" />
                <span className="font-bold text-lg">{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                <FaBook className="text-purple-400 text-xl" />
                <span className="font-bold text-lg">{course.lessons}</span>
                <span className="text-gray-300 text-sm">Lessons</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* What You'll Learn */}
            <section className="mb-12 animate-slide-in-left">
              <h2 className="text-4xl font-extrabold mb-8 gradient-text font-display">What You'll Learn</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {course.includes.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 bg-gradient-to-br from-white to-gray-50 p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary-600 to-pink-600 rounded-full flex items-center justify-center">
                      <FaCheck className="text-white text-xs" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Course Curriculum */}
            <section className="mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-4xl font-extrabold mb-8 gradient-text font-display">Course Curriculum</h2>
              <div className="space-y-3">
                {course.curriculum.map((item, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-primary-200"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-5">
                        <div className="bg-gradient-to-br from-primary-600 to-pink-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1 text-gray-900 group-hover:text-primary-600 transition-colors">
                            {item.module}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <FaBook className="text-primary-600" />
                            <span>{item.lessons} lessons</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-primary-50 p-3 rounded-xl group-hover:bg-primary-100 transition-colors">
                        <FaPlay className="text-primary-600 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* About Instructor */}
            <section className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-4xl font-extrabold mb-8 gradient-text font-display">Your Instructors</h2>
              <div className="bg-gradient-to-br from-primary-50 via-pink-50 to-purple-50 rounded-3xl border-2 border-white shadow-xl p-8 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200 rounded-full filter blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-pink-200 rounded-full filter blur-3xl opacity-30"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-pink-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg">
                      💃🕺
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold font-display gradient-text">{course.instructor}</h3>
                      <p className="text-sm text-gray-600 font-medium">World-Class Bachata Instructors</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Klau & Ros are internationally renowned Bachata dancers and instructors with over 15 years of teaching experience. 
                    They have performed and taught in over 50 countries and have trained thousands of students worldwide.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Their passion for Bachata and commitment to excellence in teaching has made them one of the most sought-after 
                    instructors in the Latin dance community.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center shadow-md">
                      <div className="text-2xl font-bold gradient-text font-display">15+</div>
                      <div className="text-xs text-gray-600 font-medium">Years</div>
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center shadow-md">
                      <div className="text-2xl font-bold gradient-text font-display">50+</div>
                      <div className="text-xs text-gray-600 font-medium">Countries</div>
                    </div>
                    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 text-center shadow-md">
                      <div className="text-2xl font-bold gradient-text font-display">10K+</div>
                      <div className="text-xs text-gray-600 font-medium">Students</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - Purchase Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 animate-slide-in-right">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 border-2 border-gray-100 overflow-hidden relative">
                {/* Decorative corner element */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary-600 to-pink-600 rounded-full opacity-10"></div>
                
                <div className="relative z-10">
                  {/* Price */}
                  <div className="mb-6 text-center">
                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-2">Course Price</div>
                    <div className="text-5xl font-extrabold gradient-text font-display mb-2">
                      ${course.price}
                    </div>
                    <div className="text-sm text-gray-600">One-time payment • Lifetime access</div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="space-y-3 mb-6">
                    <button 
                      onClick={handleAddToCart}
                      className="w-full bg-gradient-to-r from-primary-600 to-pink-600 hover:from-primary-700 hover:to-pink-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group"
                    >
                      <FaShoppingCart className="group-hover:scale-110 transition-transform" />
                      Add to Cart
                    </button>
                    
                    <Link 
                      href="/checkout"
                      className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <span>Buy Now</span>
                      <FaChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Course Includes */}
                  <div className="bg-gradient-to-br from-primary-50 to-pink-50 rounded-2xl p-6 mb-6">
                    <h4 className="font-bold text-lg mb-4 text-gray-900">This course includes:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-gray-700">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FaBook className="text-white text-sm" />
                        </div>
                        <span className="font-medium">{course.lessons} video lessons</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FaClock className="text-white text-sm" />
                        </div>
                        <span className="font-medium">{course.duration} of content</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FaInfinity className="text-white text-sm" />
                        </div>
                        <span className="font-medium">Lifetime access</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FaCertificate className="text-white text-sm" />
                        </div>
                        <span className="font-medium">Certificate of completion</span>
                      </li>
                      <li className="flex items-center gap-3 text-gray-700">
                        <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FaGlobe className="text-white text-sm" />
                        </div>
                        <span className="font-medium">Access from anywhere</span>
                      </li>
                    </ul>
                  </div>

                  {/* Guarantee Badge */}
                  <div className="text-center bg-green-50 border-2 border-green-200 rounded-2xl p-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <FaCheck className="text-green-600 text-xl" />
                      <span className="font-bold text-green-900">30-Day Money-Back Guarantee</span>
                    </div>
                    <p className="text-xs text-green-700">Full refund if you're not satisfied</p>
                  </div>

                  {/* Trust Indicators */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <FaHeart className="text-red-500" />
                        <span>{course.students.toLocaleString()} enrolled</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-500" />
                        <span>{course.rating} rating</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

