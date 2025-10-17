'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FaHome, FaBook, FaUser, FaPhone, FaShoppingCart } from 'react-icons/fa'

export default function MobileBottomNav() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', icon: FaHome, label: 'Home' },
    { href: '/courses', icon: FaBook, label: 'Courses' },
    { href: '/about', icon: FaUser, label: 'About' },
    { href: '/contact', icon: FaPhone, label: 'Contact' },
    { href: '/cart', icon: FaShoppingCart, label: 'Cart' },
  ]

  return (
    <>
      {/* Spacer to prevent content from being hidden behind the nav */}
      <div className="h-20 md:hidden"></div>
      
      {/* Mobile Bottom Navigation - Only visible on mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-gradient-to-t from-[#330F95] to-[#2a0d7a] border-t border-purple-400/30 backdrop-blur-lg shadow-2xl">
        <div className="flex justify-around items-center h-16 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center flex-1 h-full relative transition-all duration-300 ${
                  isActive ? 'text-white' : 'text-gray-400'
                }`}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-b-full"></div>
                )}
                
                {/* Icon with background when active */}
                <div className={`relative transition-all duration-300 ${
                  isActive ? 'scale-110' : 'scale-100'
                }`}>
                  {isActive && (
                    <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-lg"></div>
                  )}
                  <div className={`relative p-2 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'bg-purple-600/30 backdrop-blur-sm' 
                      : 'hover:bg-white/10'
                  }`}>
                    <Icon className={`text-xl transition-all duration-300 ${
                      isActive ? 'text-white' : 'text-gray-400'
                    }`} />
                  </div>
                </div>
                
                {/* Label */}
                <span className={`text-[10px] font-medium mt-1 transition-all duration-300 ${
                  isActive ? 'text-white font-semibold' : 'text-gray-400'
                }`}>
                  {item.label}
                </span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}

