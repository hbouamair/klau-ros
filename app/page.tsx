'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaClock, FaGraduationCap, FaPlay, FaStar, FaTimes } from 'react-icons/fa'
import CourseCard from '@/components/CourseCard'

export default function Home() {
  const [showVideoModal, setShowVideoModal] = useState(false)
  const featuredCourses = [
    {
      id: 1,
      title: 'Bachata Fundamentals',
      description: 'Master the essential steps, timing, and basic movements of Bachata',
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
      description: 'Learn elegant body movements and connection techniques',
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
      description: 'Perfect your connection, leading/following, and musical interpretation',
      level: 'Advanced',
      duration: '12 weeks',
      price: 249,
      image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?w=800&h=600&fit=crop',
      lessons: 36,
      rating: 4.9,
      students: 645
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary-50"></div>
        
        {/* Animated decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-center lg:text-left animate-slide-in-left">
              <div className="mb-6 sm:mb-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-display leading-none mb-4">
                  <span className="inline-block bg-gradient-to-r from-primary-600 via-red-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                    Klau
                  </span>
                  {' '}
                  <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-400">&</span>
                  {' '}
                  <span className="inline-block bg-gradient-to-r from-primary-600 via-red-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                    Ros
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase text-gray-500 mb-4 sm:mb-6">
                  Endless Academy
                </p>
                <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary-600 to-pink-600 mx-auto lg:mx-0"></div>
              </div>
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-700 mb-3 sm:mb-4">
                World-Class Bachata Education
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed px-4 sm:px-0">
                24/7 online classes from fundamentals to advanced. 
                Master the art of Bachata with flexible learning at your own pace.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
                <Link href="/courses" className="btn-primary inline-flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg group">
                  <FaGraduationCap className="group-hover:rotate-12 transition-transform duration-300" />
                  Explore Courses
                </Link>
                <button 
                  onClick={() => setShowVideoModal(true)}
                  className="bg-white hover:bg-gray-50 border-2 border-primary-600 text-primary-600 font-bold py-3 px-6 sm:px-8 rounded-xl inline-flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group"
                >
                  <FaPlay className="group-hover:scale-125 transition-transform duration-300" />
                  Watch Intro
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-lg mx-auto lg:mx-0 px-4 sm:px-0">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text font-display">10K+</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">Students</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text font-display">4.9★</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">Rating</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text font-display">50+</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">Countries</div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative animate-slide-in-right mt-8 lg:mt-0">
              <div className="relative group">
                {/* Decorative background elements */}
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-primary-600 via-red-500 to-pink-600 rounded-2xl sm:rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
                
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
                  <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 animate-float">
                    <div className="text-4xl font-bold gradient-text font-display">15+</div>
                    <div className="text-sm text-gray-600 font-semibold">Years</div>
                  </div>
                  
                  {/* Floating badge - Award */}
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-primary-600 to-pink-600 rounded-2xl shadow-2xl p-5 animate-float text-white" style={{ animationDelay: '1s' }}>
                    <FaStar className="text-3xl mb-2" />
                    <div className="text-xs font-semibold">Award Winners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title animate-fade-in">Why Choose Endless Academy?</h2>
            <p className="section-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Learn from world-renowned instructors at your own pace
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group card-gradient p-8 text-center relative overflow-hidden" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="text-6xl text-primary-600 mb-6 flex justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <FaClock />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text font-display">24/7 Access</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn anytime, anywhere. Access all course materials and video lessons whenever it suits you.
              </p>
              <div className="mt-6 w-16 h-1 bg-gradient-to-r from-primary-600 to-primary-700 mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
            
            <div className="group card-gradient p-8 text-center relative overflow-hidden" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="text-6xl text-primary-600 mb-6 flex justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <FaGraduationCap />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text font-display">Expert Instructors</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn directly from Klau & Ros, internationally recognized Bachata dancers and instructors.
              </p>
              <div className="mt-6 w-16 h-1 bg-gradient-to-r from-primary-600 to-primary-700 mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
            
            <div className="group card-gradient p-8 text-center relative overflow-hidden" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="text-6xl text-primary-600 mb-6 flex justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                <FaStar />
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text font-display">All Skill Levels</h3>
              <p className="text-gray-600 leading-relaxed">
                From complete beginners to advanced dancers, we have courses designed for every level.
              </p>
              <div className="mt-6 w-16 h-1 bg-gradient-to-r from-primary-600 to-primary-700 mx-auto transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Courses</h2>
            <p className="section-subtitle">
              Start your Bachata journey with our most popular courses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {featuredCourses.map((course, index) => (
              <div key={course.id} className="animate-fade-in flex" style={{ animationDelay: `${index * 0.1}s` }}>
                <CourseCard course={course} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Link href="/courses" className="btn-primary inline-flex items-center gap-2 group">
              View All Courses
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Instructors Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-50 via-pink-50 to-purple-50 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 animate-slide-in-left">
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-primary-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  World-Class Instructors
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-extrabold mb-6 gradient-text font-display leading-normal">
                Meet Klau & Ros
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Klau & Ros are internationally renowned Bachata dancers, instructors, and performers. 
                  With years of experience teaching thousands of students worldwide, they bring passion, 
                  expertise, and authentic Latin dance culture to every lesson.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Their unique teaching style combines technical precision with emotional expression, 
                  helping students not just learn the steps, but truly feel the music and connect with their partner.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg">
                  <div className="text-3xl font-bold text-primary-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg">
                  <div className="text-3xl font-bold text-primary-600">50+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-xl px-6 py-4 shadow-lg">
                  <div className="text-3xl font-bold text-primary-600">10K+</div>
                  <div className="text-sm text-gray-600">Students</div>
                </div>
              </div>
              <Link href="/about" className="btn-primary inline-flex items-center gap-2 mt-8 group">
                Learn More About Us
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>
            <div className="relative h-[500px] md:h-[600px] order-1 md:order-2 animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-pink-600 rounded-3xl transform rotate-3"></div>
              <div 
                className="absolute inset-4 rounded-3xl shadow-2xl bg-cover bg-center transform hover:rotate-0 transition-transform duration-700"
                style={{
                  backgroundImage: "url('/images/klau-ros.jpg')"
                }}
              ></div>
              {/* Decorative floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-2xl p-4 animate-float">
                <FaStar className="text-yellow-400 text-3xl" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-2xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                <FaGraduationCap className="text-primary-600 text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 hero-gradient text-white relative overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 right-1/3 w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="animate-scale-in">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 drop-shadow-lg font-display leading-normal">
              Ready to Start Your Bachata Journey?
            </h2>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl mb-12 text-gray-100 font-light">
              Join thousands of students learning Bachata with Endless Academy
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link href="/courses" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-5 px-10 rounded-xl text-lg transition-all transform hover:scale-105 hover:shadow-2xl group inline-flex items-center justify-center gap-3">
              Browse Courses
              <span className="group-hover:rotate-90 transition-transform duration-300">✨</span>
            </Link>
            <Link href="/signup" className="glass border-2 border-white hover:bg-white/20 font-bold py-5 px-10 rounded-xl text-lg transition-all transform hover:scale-105 hover:shadow-2xl group inline-flex items-center justify-center gap-3">
              Sign Up Free
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-sm text-gray-200">Happy Students</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <div className="text-4xl font-bold mb-2">4.9★</div>
              <div className="text-sm text-gray-200">Average Rating</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm text-gray-200">Countries</div>
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
    </>
  )
}

