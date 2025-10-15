'use client'

import { useCartStore } from '@/lib/store'
import Link from 'next/link'
import { FaTrash, FaShoppingCart, FaHeart, FaLock, FaCheckCircle } from 'react-icons/fa'

export default function CartPage() {
  const { items, removeItem, getTotal } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="pt-20 min-h-screen relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary-50"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl animate-scale-in">
            <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
              <FaShoppingCart className="text-4xl text-white" />
            </div>
            <h1 className="text-5xl font-extrabold mb-6 gradient-text font-display">Your Cart is Empty</h1>
            <p className="text-xl text-gray-600 mb-10 font-light">
              Start learning today by adding courses to your cart
            </p>
            <Link href="/courses" className="btn-primary inline-flex items-center justify-center gap-2 text-lg group">
              Browse Courses
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary-50"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <FaShoppingCart className="text-xl text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold gradient-text font-display">Shopping Cart</h1>
          </div>
          <p className="text-lg text-gray-600 font-light">{items.length} {items.length === 1 ? 'course' : 'courses'} in your cart</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-6 transition-all duration-300 group animate-fade-in border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="relative">
                    <div
                      className="w-full sm:w-40 h-40 rounded-xl bg-cover bg-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors font-display">
                          {item.title}
                        </h3>
                        <span className="text-sm font-semibold bg-gradient-to-r from-primary-100 to-pink-100 text-primary-600 px-4 py-1.5 rounded-full border border-primary-200">
                          {item.level}
                        </span>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-600 hover:bg-red-50 p-3 rounded-xl transition-all duration-200 group/btn"
                        aria-label="Remove item"
                      >
                        <FaTrash className="group-hover/btn:scale-110 transition-transform" />
                      </button>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-3xl font-extrabold gradient-text font-display">
                        ${item.price}
                      </span>
                      <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                        <FaCheckCircle />
                        <span>Lifetime Access</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 sticky top-24 border border-gray-100 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-2xl font-extrabold mb-6 gradient-text font-display">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700 text-lg">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-semibold">${getTotal()}</span>
                </div>
                <div className="flex justify-between text-gray-700 text-lg">
                  <span className="font-medium">Tax</span>
                  <span className="font-semibold">$0</span>
                </div>
                <div className="border-t-2 border-gray-200 pt-4">
                  <div className="flex justify-between text-2xl font-extrabold">
                    <span>Total</span>
                    <span className="gradient-text font-display">${getTotal()}</span>
                  </div>
                </div>
              </div>

              <Link
                href="/checkout"
                className="w-full bg-gradient-to-r from-primary-600 to-pink-600 hover:from-primary-700 hover:to-pink-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center mb-4 group"
              >
                Proceed to Checkout
                <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>

              <Link
                href="/courses"
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center border-2 border-gray-200 hover:border-gray-300"
              >
                Continue Shopping
              </Link>

              <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="text-white text-xs" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">30-day money-back guarantee</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaHeart className="text-white text-xs" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">Lifetime access to all courses</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaLock className="text-white text-xs" />
                  </div>
                  <span className="text-sm text-gray-700 font-medium">Secure payment processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

