'use client'

import Link from 'next/link'
import { FaCheckCircle, FaCertificate, FaRocket, FaBook } from 'react-icons/fa'

export default function EndlessAcademyPage() {
  return (
    <div className="pt-20 min-h-screen" style={{ background: 'linear-gradient(180deg, #330F95 0%, #1a0a4e 50%, #000000 100%)' }}>
      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        {/* Smooth gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20"></div>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display text-white mb-6">
            Easy <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Steps</span> to Smarter Learning.
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Start your learning journey with Endless Academy in just 4 simple steps
          </p>
        </div>
      </section>

      {/* 4 Steps Section */}
      <section className="py-20 px-4 relative">
        {/* Smooth gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/20"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl font-display shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border-2 border-purple-400">
                01
              </div>
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-purple-400/50 rounded-2xl p-8 pt-12 h-full shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3 font-display">Sign Up for Free</h3>
              <p className="text-gray-300 leading-relaxed">
                  Create your account in seconds – no hidden fees or setup required.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-2xl flex items-center justify-center text-white font-bold text-2xl font-display shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border-2 border-purple-300">
                02
              </div>
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-purple-400/50 rounded-2xl p-8 pt-12 h-full shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3 font-display">Pick Your Course</h3>
              <p className="text-gray-300 leading-relaxed">
                  Browse top-quality courses in various categories tailored to your goals.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-2xl flex items-center justify-center text-white font-bold text-2xl font-display shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border-2 border-purple-300">
                03
              </div>
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-purple-400/50 rounded-2xl p-8 pt-12 h-full shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3 font-display">Learn at Your Own Pace</h3>
              <p className="text-gray-300 leading-relaxed">
                  Access lessons anytime, anywhere. Enjoy flexible learning with videos, quizzes, and assignments.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-300 rounded-2xl flex items-center justify-center text-white font-bold text-2xl font-display shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 border-2 border-purple-200">
                04
              </div>
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 hover:border-purple-400/50 rounded-2xl p-8 pt-12 h-full shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3 font-display">Earn Your Certificate</h3>
              <p className="text-gray-300 leading-relaxed">
                  Complete the course and receive an official digital certificate to boost your resume and career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        {/* Smooth gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Endless Academy</span>?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Learn from world-renowned instructors with flexible, 24/7 access to premium content
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white/20 hover:border-purple-400/50">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl flex items-center justify-center mb-6 transform hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg">
                <FaBook className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-4">24/7 Access</h3>
              <p className="text-gray-300 leading-relaxed">
                Learn anytime, anywhere. Access all course materials and video lessons whenever it suits you.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white/20 hover:border-purple-400/50">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-400 rounded-xl flex items-center justify-center mb-6 transform hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg">
                <FaRocket className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-4">Expert Instructors</h3>
              <p className="text-gray-300 leading-relaxed">
                Learn directly from Klau & Ros, internationally recognized Bachata dancers and instructors.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-white/20 hover:border-purple-400/50">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-300 rounded-xl flex items-center justify-center mb-6 transform hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg">
                <FaCertificate className="text-3xl text-white" />
              </div>
              <h3 className="text-2xl font-bold font-display text-white mb-4">All Skill Levels</h3>
              <p className="text-gray-300 leading-relaxed">
                From complete beginners to advanced dancers, we have courses designed for every level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-white relative">
        {/* Smooth gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold font-display mb-6">
            Ready to Start Your Dance Journey?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Join thousands of students learning Bachata with Klau & Ros
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl">
              Browse Courses
            </Link>
            <Link href="/signup" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
              Sign Up Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

