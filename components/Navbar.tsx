'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaCrown } from 'react-icons/fa'
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
          <nav 
            className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'}`}
            style={{ background: '#330F95' }}
          >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity duration-300">
            <Image 
              src="/images/klau-ros-logo.png" 
              alt="Klau & Ros - Endless Academy" 
              width={180}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-10">
                  <Link href="/" className="text-white hover:text-purple-300 font-medium transition-colors duration-200">
                    Home
                  </Link>

                  <Link href="/endless-academy" className="text-white hover:text-purple-300 font-medium transition-colors duration-200">
                    Endless Academy
                  </Link>

                  <Link href="/about" className="text-white hover:text-purple-300 font-medium transition-colors duration-200">
                    Profile
                  </Link>

                  <Link href="/courses" className="text-white hover:text-purple-300 font-medium transition-colors duration-200">
                    My Courses
                  </Link>

                  <Link href="/stores" className="text-white hover:text-purple-300 font-medium transition-colors duration-200">
                    Stores
                  </Link>

                  <Link href="/contact" className="text-white hover:text-purple-300 font-medium transition-colors duration-200">
                    Contact
                  </Link>
                </div>

          {/* Right side - Cart and Login */}
          <div className="hidden lg:flex items-center gap-8">
                    {/* Cart */}
                    <Link href="/cart" className="relative text-white hover:text-purple-300 transition-colors duration-200">
                      <FaShoppingCart className="text-xl" />
                      {cartItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-purple-400 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                          {cartItems}
                        </span>
                      )}
                    </Link>

                    {/* Login Button */}
                    <Link href="/login" className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-500 hover:via-purple-400 hover:to-pink-400 text-white font-semibold px-8 py-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center gap-2">
                        <FaUser className="text-sm group-hover:scale-105 transition-transform duration-300" />
                        <span className="group-hover:tracking-wider transition-all duration-300">Log In</span>
                        <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </Link>
          </div>

                {/* Mobile menu button */}
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden text-white hover:text-purple-300 transition-colors duration-200"
                >
                  {isMenuOpen ? (
                    <FaTimes className="text-2xl" />
                  ) : (
                    <FaBars className="text-2xl" />
                  )}
                </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
                ? 'max-h-screen opacity-100'
                : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
                    <div className="border-t border-white/10 shadow-lg" style={{ background: '#2a0d7a' }}>
                <div className="px-6 py-6 space-y-3 max-w-7xl mx-auto">
                  <Link
                    href="/"
                    className="block px-4 py-3 text-white hover:bg-white/10 hover:text-purple-200 rounded-md transition-all duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/endless-academy"
                    className="block px-4 py-3 text-white hover:bg-white/10 hover:text-purple-200 rounded-md transition-all duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Endless Academy
                  </Link>
                  <Link
                    href="/about"
                    className="block px-4 py-3 text-white hover:bg-white/10 hover:text-purple-200 rounded-md transition-all duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/courses"
                    className="block px-4 py-3 text-white hover:bg-white/10 hover:text-purple-200 rounded-md transition-all duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    My Courses
                  </Link>
                  <Link
                    href="/stores"
                    className="block px-4 py-3 text-white hover:bg-white/10 hover:text-purple-200 rounded-md transition-all duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Stores
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-4 py-3 text-white hover:bg-white/10 hover:text-purple-200 rounded-md transition-all duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
            
            <div className="pt-6 mt-6 border-t border-purple-800 space-y-3">
              <Link
                href="/cart"
                className="flex items-center justify-between px-4 py-3 text-white hover:bg-white/10 hover:text-purple-200 rounded-md transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center gap-2">
                  <FaShoppingCart />
                  Cart
                </span>
                {cartItems > 0 && (
                        <span className="bg-gradient-to-r from-purple-500 to-purple-400 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center shadow-lg">
                          {cartItems}
                        </span>
                )}
              </Link>
                    <Link
                      href="/login"
                      className="group relative overflow-hidden block px-6 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-500 hover:via-purple-400 hover:to-pink-400 text-white text-center rounded-2xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center justify-center gap-2">
                        <FaUser className="text-sm group-hover:scale-105 transition-transform duration-300" />
                        <span className="group-hover:tracking-wider transition-all duration-300">Log In</span>
                        <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

