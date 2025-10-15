'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaHome, FaGraduationCap, FaHeart, FaEnvelope, FaStar, FaCrown } from 'react-icons/fa'
import { useCartStore, useAuthStore } from '@/lib/store'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { items } = useCartStore()
  const { user } = useAuthStore()
  const cartItems = items.length

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-2xl shadow-2xl' 
        : 'bg-gradient-to-b from-white to-gray-50/90 backdrop-blur-xl shadow-xl'
    }`}>
      {/* Decorative gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
            {/* Animated Badge */}
            <div className="relative">
              <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-500 ${
                scrolled 
                  ? 'bg-gradient-to-br from-primary-600 to-pink-600 rotate-0' 
                  : 'bg-gradient-to-br from-primary-500 to-pink-500 -rotate-6'
              } group-hover:rotate-12 group-hover:scale-110`}>
                <FaStar className="text-white text-base sm:text-lg animate-pulse" />
              </div>
            </div>
            
            <div className="relative">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold font-display tracking-tight bg-gradient-to-r from-primary-600 via-red-600 to-pink-600 bg-clip-text text-transparent group-hover:from-primary-700 group-hover:via-red-700 group-hover:to-pink-700 transition-all duration-300">
                Klau <span className="text-xl sm:text-2xl md:text-3xl font-light">&</span> Ros
              </span>
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link href="/" className="group relative px-6 py-2.5 rounded-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-[15px] font-bold tracking-wide text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
                Home
              </span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-4/5 transition-all duration-300"></div>
            </Link>
            
            <Link href="/courses" className="group relative px-6 py-2.5 rounded-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-pink-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-[15px] font-bold tracking-wide text-gray-700 group-hover:text-primary-600 transition-colors duration-300">
                Courses
              </span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-pink-500 group-hover:w-4/5 transition-all duration-300"></div>
            </Link>
            
            <Link href="/about" className="group relative px-6 py-2.5 rounded-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-red-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-[15px] font-bold tracking-wide text-gray-700 group-hover:text-pink-600 transition-colors duration-300">
                About
              </span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-red-500 group-hover:w-4/5 transition-all duration-300"></div>
            </Link>
            
            <Link href="/contact" className="group relative px-6 py-2.5 rounded-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-[15px] font-bold tracking-wide text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                Contact
              </span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 group-hover:w-4/5 transition-all duration-300"></div>
            </Link>

            {/* Admin Dashboard - Only shown when logged in as admin */}
            {user?.isAdmin && (
              <Link href="/admin" className="group relative px-6 py-2.5 rounded-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-[15px] font-bold tracking-wide text-gray-700 group-hover:text-orange-600 transition-colors duration-300 flex items-center gap-2">
                  <FaCrown className="text-yellow-500" />
                  Admin
                </span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 group-hover:w-4/5 transition-all duration-300"></div>
              </Link>
            )}
          </div>

          {/* Right side - Cart and User */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            {/* Cart */}
            <Link href="/cart" className="relative group">
              <div className="w-10 h-10 xl:w-11 xl:h-11 bg-gradient-to-br from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-xl">
                <FaShoppingCart className="text-base xl:text-lg text-white" />
              </div>
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-br from-green-400 to-emerald-500 text-white text-xs font-extrabold rounded-full h-5 w-5 xl:h-6 xl:w-6 flex items-center justify-center shadow-xl border-2 border-white animate-bounce">
                  {cartItems}
                </span>
              )}
            </Link>
            
            {/* Login */}
            <Link href="/login" className="group">
              <div className="w-10 h-10 xl:w-11 xl:h-11 bg-gradient-to-br from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-6 shadow-lg hover:shadow-xl">
                <FaUser className="text-base xl:text-lg text-white" />
              </div>
            </Link>
            
            {/* Sign Up Button */}
            <Link href="/signup" className="relative group ml-1">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-red-600 to-pink-600 rounded-xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              {/* Button */}
              <div className="relative bg-gradient-to-r from-primary-600 via-red-600 to-pink-600 hover:from-primary-700 hover:via-red-700 hover:to-pink-700 text-white font-bold px-5 xl:px-7 py-2.5 xl:py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center gap-2 text-sm xl:text-base">
                <span>Sign Up</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative group"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-primary-600 to-pink-600 hover:from-primary-700 hover:to-pink-700 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-lg">
              {isMenuOpen ? (
                <FaTimes className="text-xl text-white" />
              ) : (
                <FaBars className="text-xl text-white" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? 'max-h-screen opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-gradient-to-b from-white via-gray-50 to-white backdrop-blur-xl border-t-2 border-gradient-to-r from-primary-200 to-pink-200 shadow-2xl">
          <div className="px-4 py-6 space-y-2 max-w-7xl mx-auto">
            <Link
              href="/"
              className="block px-5 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-blue-600 rounded-xl transition-all duration-300 text-base font-bold tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/courses"
              className="block px-5 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-pink-50 hover:text-primary-600 rounded-xl transition-all duration-300 text-base font-bold tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/about"
              className="block px-5 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-pink-50 hover:to-red-50 hover:text-pink-600 rounded-xl transition-all duration-300 text-base font-bold tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-5 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 hover:text-purple-600 rounded-xl transition-all duration-300 text-base font-bold tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Admin Dashboard - Only shown when logged in as admin */}
            {user?.isAdmin && (
              <Link
                href="/admin"
                className="flex items-center gap-3 px-5 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 hover:text-orange-600 rounded-xl transition-all duration-300 text-base font-bold tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaCrown className="text-yellow-500 text-lg" />
                Admin Dashboard
              </Link>
            )}
            
            <div className="pt-4 mt-4 border-t-2 border-gray-200 space-y-2">
              <Link
                href="/cart"
                className="flex items-center justify-between px-5 py-4 text-gray-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-orange-600 rounded-xl transition-all duration-300 text-base font-bold tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center gap-3">
                  <FaShoppingCart className="text-lg" />
                  Shopping Cart
                </span>
                {cartItems > 0 && (
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold rounded-full h-7 w-7 flex items-center justify-center shadow-lg">
                    {cartItems}
                  </span>
                )}
              </Link>
              <Link
                href="/login"
                className="flex items-center gap-3 px-5 py-4 text-gray-700 hover:bg-gray-100 hover:text-gray-800 rounded-xl transition-all duration-300 text-base font-bold tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaUser className="text-lg" />
                Login
              </Link>
              <Link
                href="/signup"
                className="block px-5 py-4 bg-gradient-to-r from-primary-600 via-red-600 to-pink-600 text-white hover:from-primary-700 hover:via-red-700 hover:to-pink-700 rounded-xl transition-all duration-300 font-bold text-center shadow-xl hover:shadow-2xl transform hover:scale-105 tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

