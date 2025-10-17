import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaGraduationCap, FaHeart, FaEnvelope, FaQuestionCircle, FaLifeRing, FaShieldAlt, FaFileAlt, FaUndo, FaPaperPlane, FaCrown, FaStar, FaFire } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* About - Responsive */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo with Icon */}
            <div className="mb-4">
              <Link href="/" className="inline-block hover:opacity-80 transition-opacity duration-300">
                <Image
                  src="/images/klau-ros-logo.png"
                  alt="Klau & Ros - Endless Academy"
                  width={160}
                  height={53}
                  className="h-10 sm:h-12 w-auto"
                  priority
                />
              </Link>
              <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase flex items-center gap-1 mt-2">
                <FaStar className="text-yellow-400 text-xs" />
                Endless Academy
              </p>
            </div>
            <p className="text-gray-400 mb-5 sm:mb-6 leading-relaxed font-light text-sm sm:text-base">
              Learn Bachata with world-renowned instructors. 24/7 access to premium dance courses.
            </p>
            <div className="flex flex-wrap gap-2.5 sm:space-x-3 sm:gap-0">
              <a href="https://web.facebook.com/adrianrosbachataspain/?_rdc=1&_rdr#" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg">
                  <FaFacebook className="text-lg sm:text-xl text-white" />
                </div>
              </a>
              <a href="https://www.instagram.com/klauyros" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg">
                  <FaInstagram className="text-lg sm:text-xl text-white" />
                </div>
              </a>
              <a href="https://www.youtube.com/@klauyros" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg">
                  <FaYoutube className="text-lg sm:text-xl text-white" />
                </div>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg">
                  <FaTiktok className="text-lg sm:text-xl text-white" />
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links - Responsive */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-primary-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaFire className="text-xs sm:text-sm text-white" />
              </div>
              Quick Links
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <Link href="/courses" className="flex items-center gap-2.5 sm:gap-3 text-gray-400 hover:text-white transition-all duration-300 group text-sm sm:text-base">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-primary-600 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md flex-shrink-0">
                    <FaGraduationCap className="text-xs text-white" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">All Courses</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center gap-2.5 sm:gap-3 text-gray-400 hover:text-white transition-all duration-300 group text-sm sm:text-base">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-pink-600 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md flex-shrink-0">
                    <FaHeart className="text-xs text-white" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center gap-2.5 sm:gap-3 text-gray-400 hover:text-white transition-all duration-300 group text-sm sm:text-base">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md flex-shrink-0">
                    <FaEnvelope className="text-xs text-white" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="flex items-center gap-2.5 sm:gap-3 text-gray-400 hover:text-white transition-all duration-300 group text-sm sm:text-base">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md flex-shrink-0">
                    <FaQuestionCircle className="text-xs text-white" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">FAQ</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Support - Responsive */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaLifeRing className="text-xs sm:text-sm text-white" />
              </div>
              Support
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <Link href="/help" className="flex items-center gap-2.5 sm:gap-3 text-gray-400 hover:text-white transition-all duration-300 group text-sm sm:text-base">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md flex-shrink-0">
                    <FaLifeRing className="text-xs text-white" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Help Center</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="flex items-center gap-2.5 sm:gap-3 text-gray-400 hover:text-white transition-all duration-300 group text-sm sm:text-base">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md flex-shrink-0">
                    <FaShieldAlt className="text-xs text-white" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="flex items-center gap-2.5 sm:gap-3 text-gray-400 hover:text-white transition-all duration-300 group text-sm sm:text-base">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md flex-shrink-0">
                    <FaFileAlt className="text-xs text-white" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Terms of Service</span>
                </Link>
              </li>
              <li>
                <Link href="/refunds" className="flex items-center gap-2.5 sm:gap-3 text-gray-400 hover:text-white transition-all duration-300 group text-sm sm:text-base">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md flex-shrink-0">
                    <FaUndo className="text-xs text-white" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Refund Policy</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter - Responsive */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaPaperPlane className="text-xs sm:text-sm text-white" />
              </div>
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed font-light text-sm sm:text-base">
              Get the latest news and exclusive offers delivered to your inbox
            </p>
            <form className="space-y-2.5 sm:space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-gray-800/50 backdrop-blur-sm text-white text-sm sm:text-base border-2 border-gray-700 focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-900/30 transition-all duration-200 placeholder:text-gray-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 via-red-600 to-pink-600 hover:from-primary-700 hover:via-red-700 hover:to-pink-700 text-white px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl transition-all duration-300 font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 flex items-center justify-center gap-2 group text-sm sm:text-base"
              >
                <FaPaperPlane className="text-sm group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                <span>Subscribe Now</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar - Responsive */}
        <div className="border-t-2 border-gray-800 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
              <span>&copy; {new Date().getFullYear()}</span>
              <span className="font-bold bg-gradient-to-r from-primary-400 to-pink-400 bg-clip-text text-transparent">Klau & Ros Endless Academy</span>
              <span className="hidden sm:inline">-</span>
              <span>All rights reserved</span>
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse text-sm" />
              <span>for dancers worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

