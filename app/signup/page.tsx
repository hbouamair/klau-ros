'use client'

import { useState } from 'react'
import { useAuthStore } from '@/lib/store'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FaUser, FaEnvelope, FaLock, FaCheckCircle, FaStar, FaGraduationCap, FaHeart } from 'react-icons/fa'

export default function SignupPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [focusedField, setFocusedField] = useState('')
  const { signup } = useAuthStore()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    const success = await signup(name, email, password)
    if (success) {
      router.push('/dashboard')
    } else {
      setError('Failed to create account')
    }
  }

  const benefits = [
    { icon: FaGraduationCap, text: 'Access to all courses', color: 'from-blue-500 to-blue-600' },
    { icon: FaStar, text: 'Learn from experts', color: 'from-yellow-500 to-orange-500' },
    { icon: FaHeart, text: 'Join our community', color: 'from-pink-500 to-red-500' },
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
          {/* Left side - Benefits & Branding */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-display leading-none mb-4">
                <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                  Join Klau & Ros
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light mb-2">
                Start Your Bachata Journey
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto lg:mx-0"></div>
            </div>

            {/* Benefits */}
            <div className="space-y-6 mb-8 max-w-md mx-auto lg:mx-0">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${benefit.color} text-white shadow-lg`}>
                    <benefit.icon className="text-2xl" />
                  </div>
                  <span className="text-lg font-semibold text-gray-800">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-3xl font-bold gradient-text font-display">10K+</div>
                <div className="text-xs text-gray-600 font-medium">Students</div>
              </div>
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-3xl font-bold gradient-text font-display">4.9★</div>
                <div className="text-xs text-gray-600 font-medium">Rating</div>
              </div>
              <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-3xl font-bold gradient-text font-display">50+</div>
                <div className="text-xs text-gray-600 font-medium">Countries</div>
              </div>
            </div>
          </div>

          {/* Right side - Signup Form */}
          <div className="animate-slide-in-right">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20">
              <div className="text-center mb-8">
                <div className="inline-block p-4 bg-gradient-to-br from-purple-600 to-purple-400 rounded-2xl shadow-lg mb-4 animate-float">
                  <FaUser className="text-4xl text-white" />
                </div>
                <h2 className="text-3xl font-bold font-display mb-2">Create Account</h2>
                <p className="text-gray-600">Fill in your details to get started</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 text-red-700 p-4 rounded-xl animate-scale-in">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">⚠️</span>
                      <span className="font-semibold">{error}</span>
                    </div>
                  </div>
                )}

                <div className="group">
                  <label className="block text-sm font-bold mb-2 text-gray-700 group-focus-within:text-primary-600 transition-colors">
                    Full Name
                  </label>
                  <div className="relative">
                    <FaUser className={`absolute left-4 top-4 transition-colors ${focusedField === 'name' ? 'text-primary-600' : 'text-gray-400'}`} />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField('')}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition-all duration-200 bg-white text-gray-900 placeholder:text-gray-400"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-bold mb-2 text-gray-700 group-focus-within:text-primary-600 transition-colors">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className={`absolute left-4 top-4 transition-colors ${focusedField === 'email' ? 'text-primary-600' : 'text-gray-400'}`} />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField('')}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition-all duration-200 bg-white text-gray-900 placeholder:text-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-bold mb-2 text-gray-700 group-focus-within:text-primary-600 transition-colors">
                    Password
                  </label>
                  <div className="relative">
                    <FaLock className={`absolute left-4 top-4 transition-colors ${focusedField === 'password' ? 'text-primary-600' : 'text-gray-400'}`} />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField('')}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition-all duration-200 bg-white text-gray-900 placeholder:text-gray-400"
                      placeholder="••••••••"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1 ml-1">Must be at least 6 characters</p>
                </div>

                <div className="group">
                  <label className="block text-sm font-bold mb-2 text-gray-700 group-focus-within:text-primary-600 transition-colors">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <FaLock className={`absolute left-4 top-4 transition-colors ${focusedField === 'confirm' ? 'text-primary-600' : 'text-gray-400'}`} />
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      onFocus={() => setFocusedField('confirm')}
                      onBlur={() => setFocusedField('')}
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition-all duration-200 bg-white text-gray-900 placeholder:text-gray-400"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary-50 to-pink-50 rounded-xl p-4">
                  <label className="flex items-start cursor-pointer">
                    <input type="checkbox" required className="mt-1 mr-3 w-4 h-4 accent-primary-600" />
                    <span className="text-sm text-gray-700">
                      I agree to the{' '}
                      <Link href="/terms" className="text-primary-600 hover:text-primary-700 font-semibold underline">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="/privacy-policy" className="text-primary-600 hover:text-primary-700 font-semibold underline">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-pink-600 hover:from-primary-700 hover:to-pink-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 group"
                >
                  <span>Create Account</span>
                  <FaCheckCircle className="group-hover:scale-110 transition-transform" />
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <Link href="/login" className="text-primary-600 hover:text-primary-700 font-bold">
                    Log in →
                  </Link>
                </p>
              </div>

              {/* Trust badges */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <FaCheckCircle className="text-green-500" />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCheckCircle className="text-green-500" />
                    <span>Encrypted</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCheckCircle className="text-green-500" />
                    <span>Private</span>
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

