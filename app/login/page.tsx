'use client'

import { useState } from 'react'
import { useAuthStore } from '@/lib/store'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FaEnvelope, FaLock, FaSignInAlt, FaCheckCircle, FaGraduationCap, FaVideo, FaClock } from 'react-icons/fa'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [focusedField, setFocusedField] = useState('')
  const { login } = useAuthStore()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const success = await login(email, password)
    if (success) {
      router.push('/dashboard')
    } else {
      setError('Invalid email or password')
    }
  }

  const features = [
    { icon: FaGraduationCap, text: 'Your enrolled courses', color: 'from-blue-500 to-blue-600' },
    { icon: FaVideo, text: 'Continue learning', color: 'from-purple-500 to-purple-600' },
    { icon: FaClock, text: 'Track your progress', color: 'from-green-500 to-emerald-600' },
  ]

  return (
    <div className="pt-20 min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #330F95 0%, #1a0a4e 50%, #000000 100%)' }}></div>
      
      {/* Floating blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Welcome & Features */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-display leading-none mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                  Welcome Back
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light mb-2">
                Continue Your Bachata Journey
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto lg:mx-0"></div>
            </div>

            <p className="text-lg text-gray-300 mb-8 max-w-md mx-auto lg:mx-0">
              Log in to access your courses, track your progress, and continue learning with Klau & Ros.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-8 max-w-md mx-auto lg:mx-0">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                    <feature.icon className="text-2xl" />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-md mx-auto lg:mx-0">
              <p className="text-gray-700 italic mb-3">
                "Dance is the hidden language of the soul"
              </p>
              <div className="flex items-center gap-3">
                <div className="text-2xl">💃🕺</div>
                <div>
                  <div className="font-bold text-sm gradient-text">Klau & Ros</div>
                  <div className="text-xs text-gray-500">Your Instructors</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Login Form */}
          <div className="animate-slide-in-right">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20">
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-gradient-to-br from-purple-600 to-purple-400 rounded-2xl shadow-lg mb-4 animate-float">
                  <FaSignInAlt className="text-4xl text-white" />
                </div>
                <h2 className="text-3xl font-bold font-display mb-2">Login to Your Account</h2>
                <p className="text-gray-600">Enter your credentials to continue</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 text-red-700 p-4 rounded-xl animate-scale-in">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">⚠️</span>
                      <span className="font-semibold">{error}</span>
                    </div>
                  </div>
                )}

                <div className="group">
                  <label className="block text-sm font-bold mb-2 text-gray-700 group-focus-within:text-blue-600 transition-colors">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className={`absolute left-4 top-4 transition-colors ${focusedField === 'email' ? 'text-blue-600' : 'text-gray-400'}`} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white text-gray-900 placeholder:text-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-bold mb-2 text-gray-700 group-focus-within:text-blue-600 transition-colors">
                    Password
                  </label>
                  <div className="relative">
                    <FaLock className={`absolute left-4 top-4 transition-colors ${focusedField === 'password' ? 'text-blue-600' : 'text-gray-400'}`} />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField('')}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-200 bg-white text-gray-900 placeholder:text-gray-400"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center cursor-pointer group">
                    <input type="checkbox" className="mr-2 w-4 h-4 accent-blue-600" />
                    <span className="text-gray-600 group-hover:text-gray-800 transition-colors">Remember me</span>
                  </label>
                  <Link href="/forgot-password" className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-all">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 group"
                >
                  <span>Log In</span>
                  <FaSignInAlt className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Don't have an account?{' '}
                  <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-bold">
                    Sign up for free →
                  </Link>
                </p>
              </div>

              {/* Trust & Demo Info */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <FaCheckCircle className="text-green-500" />
                    <span>Secure Login</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCheckCircle className="text-green-500" />
                    <span>SSL Encrypted</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 text-center">
                    <p className="text-xs text-gray-600 font-medium">
                      🎯 <strong>Demo Mode:</strong> Use any email and password to explore
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 text-center border-2 border-yellow-200">
                    <p className="text-xs text-gray-700 font-bold mb-2">
                      👑 <strong>Admin Access:</strong>
                    </p>
                    <p className="text-xs text-gray-600 font-mono">
                      Email: admin@klauros.com<br />
                      Password: admin123
                    </p>
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

