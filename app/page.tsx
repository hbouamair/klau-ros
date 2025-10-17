'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { FaClock, FaGraduationCap, FaPlay, FaStar, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import CourseCard from '@/components/CourseCard'

export default function Home() {
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)

  const faqs = [
    {
      id: 1,
      question: "What is Endless Academy?",
      answer: "Endless Academy is the official online learning platform by Klau & Ros, offering 24/7 access to Bachata classes for all levels. You can train at your own pace, from anywhere in the world."
    },
    {
      id: 2,
      question: "Who can join Endless Academy?",
      answer: "Anyone! Whether you are a complete beginner or an advanced dancer, our structured programs will help you improve your technique, style, and connection."
    },
    {
      id: 3,
      question: "What types of classes are available?",
      answer: "We offer Partnerwork, Lady Style, Men Style, Musicality, Technique drills, and full choreographies. New lessons and routines are added regularly."
    },
    {
      id: 4,
      question: "Are classes beginner-friendly?",
      answer: "Yes! We have a complete fundamentals section perfect for beginners, plus progressive lessons so you can advance at your own pace."
    },
    {
      id: 5,
      question: "Can I access from mobile or tablet?",
      answer: "Absolutely. Our platform works perfectly on mobile, tablet, and desktop, so you can learn from any device, anywhere."
    },
    {
      id: 6,
      question: "Do I need to download anything?",
      answer: "No downloads are required. All lessons stream directly from our website, so you just log in and start learning instantly."
    }
  ]

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

  // Get slides per view based on screen size
  const getSlidesPerView = () => {
    if (typeof window === 'undefined') return 1
    if (window.innerWidth >= 1024) return 3 // lg: 3 cards
    if (window.innerWidth >= 768) return 2 // md: 2 cards
    return 1 // mobile: 1 card
  }

  const [slidesPerView, setSlidesPerView] = useState(1)
  const maxSlide = Math.max(0, featuredCourses.length - slidesPerView)

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView())
    }
    
    // Set initial value
    handleResize()
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Carousel auto-play
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, maxSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1))
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxSlide : prev - 1))
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(Math.min(index, maxSlide))
    setIsAutoPlaying(false)
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(180deg, #330F95 0%, #1a0a4e 50%, #000000 100%)' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left animate-slide-in-left">
              <div className="mb-6 sm:mb-8">
                <p className="text-xs sm:text-sm md:text-base font-bold tracking-[0.3em] uppercase text-purple-400 mb-4">
                  ELEARNING PLATFORM
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-300 mb-2">
                  Welcome to,
                </h1>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-display leading-none mb-6">
                  <span className="inline-block bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                    Endless Academy
                  </span>
                </h2>
                <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto lg:mx-0"></div>
              </div>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
                At Endless Academy, our passion is to share the art of Bachata with the world. 
                We believe online classes should be <strong className="text-white">flexible, inspiring, and easy to follow</strong>, so they fit perfectly into your busy life. 
                Our lessons take you from fundamentals to advanced moves, helping you improve your style, connection, and confidence on the dance floor, <strong className="text-white">anytime, anywhere</strong>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
                <Link href="/courses" className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-bold py-3 px-6 sm:px-8 rounded-xl inline-flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl group shadow-xl">
                  <FaGraduationCap className="group-hover:rotate-12 transition-transform duration-300" />
                  Explore Courses
                </Link>
                <button 
                  onClick={() => setShowVideoModal(true)}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-white/30 hover:border-purple-400 text-white font-bold py-3 px-6 sm:px-8 rounded-xl inline-flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl group"
                >
                  <FaPlay className="group-hover:scale-125 transition-transform duration-300" />
                  Watch Intro
                </button>
              </div>

              {/* Stats - Simple & Clean */}
              <div className="mt-10 sm:mt-12">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 md:gap-12">
                  {/* Stat 1 */}
                  <div className="text-center lg:text-left">
                    <div className="text-3xl sm:text-4xl font-bold text-white font-display">
                      50+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 font-medium mt-1">Amazing Classes</div>
                  </div>
                  
                  {/* Stat 2 */}
                  <div className="text-center lg:text-left">
                    <div className="text-3xl sm:text-4xl font-bold text-white font-display">
                      300+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 font-medium mt-1">Active Students</div>
                  </div>
                  
                  {/* Stat 3 */}
                  <div className="text-center lg:text-left">
                    <div className="text-3xl sm:text-4xl font-bold text-white font-display">
                      10+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 font-medium mt-1">Years</div>
                  </div>
                  
                  {/* Stat 4 */}
                  <div className="text-center lg:text-left">
                    <div className="text-3xl sm:text-4xl font-bold text-white font-display">
                      30+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 font-medium mt-1">Teams</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative animate-slide-in-right mt-8 lg:mt-0">
              <div className="relative group">
                {/* Decorative background elements */}
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 rounded-2xl sm:rounded-3xl opacity-30 blur-2xl group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Main image container */}
                <div className="relative">
                  <div 
                    className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500 bg-white"
                    style={{
                      aspectRatio: '3/4',
                      backgroundImage: "url('/images/klau-ros-hero.jpg')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      minHeight: '400px',
                      maxHeight: '600px'
                    }}
                  >
                    {/* Gradient overlay at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Floating badge - Years of Experience */}
                  <div className="absolute -top-3 -right-3 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 sm:p-5 animate-float border-2 border-purple-400">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent font-display">15+</div>
                    <div className="text-xs sm:text-sm text-purple-900 font-semibold">Years</div>
                  </div>
                  
                  {/* Floating badge - Award */}
                  <div className="absolute -bottom-3 -left-3 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 rounded-2xl shadow-2xl p-4 sm:p-5 animate-float text-white border-2 border-purple-300" style={{ animationDelay: '1s' }}>
                    <FaStar className="text-2xl sm:text-3xl mb-2" />
                    <div className="text-xs font-semibold">Award Winners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 relative overflow-hidden">
        {/* Smooth gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-purple-400 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">WHY CHOOSE US</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 font-display leading-relaxed animate-fade-in px-4">Why Endless Academy Works for You</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in px-4" style={{ animationDelay: '0.2s' }}>
              Learn from world-renowned instructors at your own pace
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="group bg-gradient-to-br from-white/10 via-white/5 to-purple-500/20 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl border border-purple-400/40 hover:border-purple-300 p-8 text-center relative overflow-hidden transition-all duration-300" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
              <div className="text-6xl text-purple-400 mb-6 flex justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <FaClock />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white font-display">Learn Anywhere, Anytime</h3>
              <p className="text-gray-300 leading-relaxed">
                Access our full library of Endless Bachata classes 24/7 from any device. Train at your own pace, whether you're at home, in the studio, or on the go.
              </p>
              <div className="mt-6 w-16 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
            
            <div className="group bg-gradient-to-br from-white/10 via-white/5 to-purple-500/20 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl border border-purple-400/40 hover:border-purple-300 p-8 text-center relative overflow-hidden transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
              <div className="text-6xl text-purple-400 mb-6 flex justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <FaGraduationCap />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white font-display">Guided by Klau & Ros</h3>
              <p className="text-gray-300 leading-relaxed">
                Learn directly from international artists Klau & Ros with step-by-step explanations, technique breakdowns, and tips to improve your style and connection.
              </p>
              <div className="mt-6 w-16 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
            
            <div className="group bg-gradient-to-br from-white/10 via-white/5 to-purple-500/20 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl border border-purple-400/40 hover:border-purple-300 p-8 text-center relative overflow-hidden transition-all duration-300" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 opacity-0 group-hover:opacity-15 transition-opacity duration-500"></div>
              <div className="text-6xl text-purple-400 mb-6 flex justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <FaStar />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white font-display">Specialized Courses for Every Level</h3>
              <p className="text-gray-300 leading-relaxed">
                From fundamentals to advanced combos, partnerwork, and lady and men style, our structured programs are designed to help you progress and shine on the dance floor.
              </p>
              <div className="mt-6 w-16 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section - Carousel */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <p className="text-purple-400 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">OUR COURSES</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 font-display leading-relaxed px-4">Explore our Best <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Courses</span></h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
              Start your Bachata journey with our most popular courses
            </p>
          </div>
          
          {/* Carousel Container */}
          <div className="relative">
            {/* Carousel Wrapper */}
            <div 
              ref={carouselRef}
              className="overflow-hidden px-8 sm:px-10 md:px-12 lg:px-16"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div 
                className="flex transition-transform duration-700 ease-in-out gap-6"
                style={{ 
                  transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
                }}
              >
                {featuredCourses.map((course, index) => (
                  <div 
                    key={course.id} 
                    className="flex-shrink-0"
                    style={{ 
                      width: `calc(${100 / slidesPerView}% - ${(6 * (slidesPerView - 1)) / slidesPerView}px)` 
                    }}
                  >
                    <CourseCard course={course} originalPrice={course.originalPrice} badge={course.badge} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group z-10 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous courses"
            >
              <FaChevronLeft className="text-base sm:text-lg md:text-xl group-hover:scale-125 transition-transform duration-300" />
            </button>

            <button
              onClick={nextSlide}
              disabled={currentSlide >= maxSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group z-10 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next courses"
            >
              <FaChevronRight className="text-base sm:text-lg md:text-xl group-hover:scale-125 transition-transform duration-300" />
            </button>
          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10 md:mt-12">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? 'w-12 h-3 bg-gradient-to-r from-purple-600 to-purple-500'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Course Counter */}
          <div className="text-center mt-4 sm:mt-6">
            <p className="text-gray-300 font-semibold text-sm sm:text-base">
              <span className="text-purple-400 text-lg sm:text-xl font-bold">{currentSlide + 1}</span>
              <span className="text-white mx-1 sm:mx-2">/</span>
              <span className="text-gray-400">{maxSlide + 1}</span>
            </p>
          </div>
          
          {/* View All Courses Button */}
          <div className="text-center mt-8 sm:mt-10 md:mt-12 animate-fade-in px-4">
            <Link 
              href="/courses" 
              className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-base sm:text-lg"
            >
              View All Courses
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 relative overflow-hidden">
        {/* Smooth gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/20"></div>
        
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-purple-400 font-bold text-sm tracking-widest uppercase mb-4">HOW IT WORKS</p>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-display leading-relaxed">Easy Steps to Smarter Learning</h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Start your learning journey in just 4 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative group animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl font-display shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border-2 border-purple-400">
                01
              </div>
              <div className="bg-gradient-to-br from-white/15 via-white/10 to-purple-500/25 backdrop-blur-lg rounded-2xl shadow-xl border-2 border-purple-400/50 hover:border-purple-300 p-8 pt-12 h-full transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-3 text-white font-display">Sign Up for Free</h3>
                <p className="text-gray-200 leading-relaxed">
                  Create your account in seconds – no hidden fees or setup required.
                </p>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-2xl flex items-center justify-center text-white font-bold text-2xl font-display shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border-2 border-purple-300">
                02
              </div>
              <div className="bg-gradient-to-br from-white/15 via-white/10 to-purple-500/25 backdrop-blur-lg rounded-2xl shadow-xl border-2 border-purple-400/50 hover:border-purple-300 p-8 pt-12 h-full transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-3 text-white font-display">Pick Your Course</h3>
                <p className="text-gray-200 leading-relaxed">
                  Browse top-quality courses in various categories tailored to your goals.
                </p>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-2xl flex items-center justify-center text-white font-bold text-2xl font-display shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border-2 border-purple-300">
                03
              </div>
              <div className="bg-gradient-to-br from-white/15 via-white/10 to-purple-500/25 backdrop-blur-lg rounded-2xl shadow-xl border-2 border-purple-400/50 hover:border-purple-300 p-8 pt-12 h-full transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-3 text-white font-display">Learn at Your Own Pace</h3>
                <p className="text-gray-200 leading-relaxed">
                  Access lessons anytime, anywhere. Enjoy flexible learning with videos and practice materials.
                </p>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative group animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-300 rounded-2xl flex items-center justify-center text-white font-bold text-2xl font-display shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border-2 border-purple-200">
                04
              </div>
              <div className="bg-gradient-to-br from-white/15 via-white/10 to-purple-500/25 backdrop-blur-lg rounded-2xl shadow-xl border-2 border-purple-400/50 hover:border-purple-300 p-8 pt-12 h-full transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-xl font-bold mb-3 text-white font-display">Master Your Skills</h3>
                <p className="text-gray-200 leading-relaxed">
                  Complete the course and elevate your dancing to professional levels with expert guidance.
                </p>
                <div className="mt-4 w-12 h-1 bg-gradient-to-r from-purple-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Instructors Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 relative overflow-hidden">
        {/* Smooth gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40"></div>
        
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="order-2 md:order-1 animate-slide-in-left">
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg border-2 border-purple-400">
                  World-Class Instructors
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-white font-display leading-normal">
                Meet Klau & Ros
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-200 leading-relaxed">
                  Klau & Ros are internationally renowned Bachata dancers, instructors, and performers. 
                  With years of experience teaching thousands of students worldwide, they bring passion, 
                  expertise, and authentic Latin dance culture to every lesson.
                </p>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Their unique teaching style combines technical precision with emotional expression, 
                  helping students not just learn the steps, but truly feel the music and connect with their partner.
                </p>
              </div>
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                <div className="bg-gradient-to-br from-white/15 via-white/10 to-purple-500/25 backdrop-blur-lg rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-xl border-2 border-purple-400/50 hover:border-purple-300 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-white">15+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-white/15 via-white/10 to-purple-500/25 backdrop-blur-lg rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-xl border-2 border-purple-400/50 hover:border-purple-300 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-white">50+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Countries</div>
                </div>
                <div className="bg-gradient-to-br from-white/15 via-white/10 to-purple-500/25 backdrop-blur-lg rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-xl border-2 border-purple-400/50 hover:border-purple-300 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-bold text-white">10K+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Students</div>
                </div>
              </div>
              <Link href="/about" className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-2 mt-8 group">
                Learn More About Us
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>
            <div className="relative h-[500px] md:h-[600px] order-1 md:order-2 animate-slide-in-right">
              {/* Decorative background frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 rounded-3xl transform rotate-3 opacity-50"></div>
              
              {/* Image container with white background fallback */}
              <div className="absolute inset-4 rounded-3xl shadow-2xl overflow-hidden bg-white transform hover:rotate-0 transition-transform duration-700">
                <img 
                  src="/images/klau-ros.jpg" 
                  alt="Klau & Ros" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.style.backgroundImage = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
                  }}
                />
                {/* Stronger gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 z-10 bg-black/50 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-2" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.8), 0 2px 4px rgba(0,0,0,0.6)' }}>
                    Klau & Ros
                  </h3>
                  <p className="text-sm md:text-base text-gray-100 font-medium" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}>
                    World-Class Bachata Instructors
                  </p>
                </div>
              </div>
              
              {/* Decorative floating badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-600 to-purple-500 backdrop-blur-md rounded-2xl shadow-2xl p-4 animate-float border-2 border-white/20 z-20">
                <FaStar className="text-yellow-300 text-3xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-purple-600 to-purple-500 backdrop-blur-md rounded-2xl shadow-2xl p-4 animate-float border-2 border-white/20 z-20" style={{ animationDelay: '1s' }}>
                <FaGraduationCap className="text-white text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 relative overflow-hidden">
        {/* Smooth gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>
        
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
            {/* Icon badge */}
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl mb-4 sm:mb-6 shadow-xl transform hover:scale-110 hover:rotate-12 transition-all duration-300">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <p className="text-purple-400 font-bold text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">GOT QUESTIONS?</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 font-display leading-relaxed px-4">
              Frequently Asked <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto px-4">
              Everything you need to know about Endless Academy. Can't find the answer? <a href="/contact" className="text-purple-400 hover:text-purple-300 underline font-semibold">Contact us</a>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {faqs.map((faq, index) => (
              <div 
                key={faq.id}
                className="group bg-gradient-to-br from-white/15 via-white/10 to-purple-500/25 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl border-2 border-purple-400/50 hover:border-purple-300 p-6 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full text-left"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${
                      index === 0 ? 'from-purple-600 to-purple-500' :
                      index === 1 ? 'from-purple-500 to-purple-400' :
                      index === 2 ? 'from-purple-500 to-purple-400' :
                      index === 3 ? 'from-purple-400 to-purple-300' :
                      index === 4 ? 'from-purple-400 to-purple-300' :
                      'from-purple-300 to-purple-200'
                    } rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {`0${index + 1}`}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-between cursor-pointer">
                        <span>{faq.question}</span>
                        <span className={`text-2xl text-purple-300 transform transition-transform duration-300 ${openFaq === faq.id ? 'rotate-180' : ''} ml-2`}>
                          {openFaq === faq.id ? '−' : '+'}
                        </span>
                      </h3>
                    </div>
                  </div>
                </button>
                {openFaq === faq.id && (
                  <div className="mt-4 pt-4 ml-14 border-t border-purple-400/30 animate-fade-in">
                    <p className="text-gray-200 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions? CTA */}
          <div className="mt-8 sm:mt-12 md:mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="bg-gradient-to-br from-white/15 via-white/10 to-purple-500/25 backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl border-2 border-purple-400/50">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 font-display">
                Still have questions?
              </h3>
              <p className="text-sm sm:text-base text-gray-200 mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
                Our support team is here to help you! Get in touch and we'll answer all your questions.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-bold py-3 px-6 sm:px-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-sm sm:text-base"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 text-white relative overflow-hidden">
        {/* Smooth gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-purple-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 right-1/3 w-3 h-3 bg-purple-300 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        {/* Decorative background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 px-4">
          <p className="text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 font-bold text-purple-400">GET STARTED</p>
          <div className="animate-scale-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg font-display leading-normal text-white">
              Turn Your Passion for Bachata into <span className="italic bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Your Superpower</span>?
            </h2>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12 text-gray-200 font-light max-w-3xl mx-auto">
              Join a global community of dancers learning directly from Klau & Ros. Wherever you are, start your journey today and feel the difference in your dance.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link href="/courses" className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white font-bold py-3 sm:py-4 md:py-5 px-8 sm:px-10 rounded-xl text-base sm:text-lg transition-all transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl shadow-xl group inline-flex items-center justify-center gap-2 sm:gap-3">
              Start Learning Now
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
            <Link href="/signup" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border-2 border-purple-400 hover:border-purple-300 text-white font-bold py-3 sm:py-4 md:py-5 px-8 sm:px-10 rounded-xl text-base sm:text-lg transition-all transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl group inline-flex items-center justify-center gap-2 sm:gap-3">
              Sign Up Free
              <span className="group-hover:rotate-12 transition-transform duration-300">✨</span>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto">
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-white">10K+</div>
              <div className="text-xs sm:text-sm text-gray-300">Happy Students</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-white">4.9★</div>
              <div className="text-xs sm:text-sm text-gray-300">Average Rating</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-white">50+</div>
              <div className="text-xs sm:text-sm text-gray-300">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal - Fully Responsive */}
      {showVideoModal && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 animate-fade-in"
          onClick={() => setShowVideoModal(false)}
        >
          <div 
            className="relative w-full max-w-6xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button - responsive positioning */}
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-8 sm:-top-12 right-0 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:rotate-90 z-10"
            >
              <FaTimes className="text-base sm:text-xl" />
            </button>

            {/* Video container with gradient border */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-primary-600 via-red-600 to-pink-600 rounded-xl sm:rounded-2xl blur-sm"></div>
              
              {/* Video iframe */}
              <div className="relative bg-black rounded-xl sm:rounded-2xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/grsjYXMMl44?start=426&autoplay=1"
                  title="Klau & Ros - Endless Academy Intro"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Video title - responsive text */}
            <div className="mt-4 sm:mt-6 text-center px-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-1 sm:mb-2">
                Welcome to Endless Academy
              </h3>
              <p className="text-sm sm:text-base text-white/80">
                Discover the art of Bachata with Klau & Ros
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

