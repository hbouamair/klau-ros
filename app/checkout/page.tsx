'use client'

import { useState } from 'react'
import { useCartStore, useAuthStore } from '@/lib/store'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FaCreditCard, FaLock, FaShieldAlt, FaCheckCircle } from 'react-icons/fa'

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCartStore()
  const { isAuthenticated } = useAuthStore()
  const router = useRouter()
  const [processing, setProcessing] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      clearCart()
      router.push('/dashboard?purchase=success')
    }, 2000)
  }

  if (!isAuthenticated) {
    return (
      <div className="pt-20 min-h-screen relative overflow-hidden bg-gradient-to-b from-purple-900 via-purple-950 to-black">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl animate-scale-in">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <FaLock className="text-3xl text-white" />
            </div>
            <h1 className="text-4xl font-extrabold mb-4 gradient-text font-display">Please Log In</h1>
            <p className="text-xl text-gray-300 mb-8 font-light">
              You need to be logged in to complete your purchase
            </p>
            <Link href="/login" className="btn-primary inline-flex items-center justify-center gap-2 text-lg">
              Log In →
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="pt-20 min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #330F95 0%, #1a0a4e 50%, #000000 100%)' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl animate-scale-in">
            <h1 className="text-4xl font-extrabold mb-4 text-white font-display">Your Cart is Empty</h1>
            <Link href="/courses" className="btn-primary inline-flex items-center justify-center gap-2 text-lg">
              Browse Courses →
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #330F95 0%, #1a0a4e 50%, #000000 100%)' }}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
              <FaLock className="text-xl text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white font-display">Secure Checkout</h1>
          </div>
          <p className="text-lg text-gray-300 font-light flex items-center gap-2">
            <FaShieldAlt className="text-green-600" />
            Your payment information is secure and encrypted
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2 animate-slide-in-left">
            <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center gap-2 mb-8 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                <FaShieldAlt className="text-green-600 text-xl" />
                <span className="text-sm text-green-700 font-semibold">256-bit SSL Secure Checkout</span>
              </div>

              {/* Billing Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-extrabold mb-6 gradient-text font-display">Billing Information</h2>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">First Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition-all duration-200 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Last Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition-all duration-200 text-gray-900"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold mb-2 text-gray-700">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition-all duration-200 text-gray-900"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold mb-2 text-gray-700">Address</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition-all duration-200 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">City</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition-all duration-200 text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Postal Code</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition-all duration-200 text-gray-900"
                    />
                  </div>
                </div>
              </section>

              {/* Payment Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-extrabold mb-6 flex items-center gap-3 gradient-text font-display">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-pink-600 rounded-xl flex items-center justify-center">
                    <FaCreditCard className="text-white" />
                  </div>
                  Payment Information
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Card Number</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2 text-gray-700">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 focus:ring-4 focus:ring-primary-100 transition-all duration-200 text-gray-900 placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <button
                type="submit"
                disabled={processing}
                className="w-full bg-gradient-to-r from-primary-600 to-pink-600 hover:from-primary-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-bold py-5 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:hover:scale-100 disabled:hover:shadow-none text-lg"
              >
                {processing ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </span>
                ) : (
                  `Complete Purchase - $${getTotal()}`
                )}
              </button>

              <p className="text-sm text-gray-300 text-center mt-5 leading-relaxed">
                By completing your purchase, you agree to our <span className="text-primary-600 font-semibold">Terms of Service</span> and <span className="text-primary-600 font-semibold">Privacy Policy</span>
              </p>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1 animate-slide-in-right">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 sticky top-24 border border-gray-100">
              <h2 className="text-2xl font-extrabold mb-6 gradient-text font-display">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm pb-4 border-b border-gray-100">
                    <span className="text-gray-700 font-medium pr-2">{item.title}</span>
                    <span className="font-bold text-gray-900">${item.price}</span>
                  </div>
                ))}
              </div>

              <div className="border-t-2 border-gray-200 pt-5 space-y-3">
                <div className="flex justify-between text-gray-700 text-lg">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-semibold">${getTotal()}</span>
                </div>
                <div className="flex justify-between text-gray-700 text-lg">
                  <span className="font-medium">Tax</span>
                  <span className="font-semibold">$0</span>
                </div>
                <div className="flex justify-between text-2xl font-extrabold pt-3 border-t-2 border-gray-200">
                  <span>Total</span>
                  <span className="gradient-text font-display">${getTotal()}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-2 text-sm text-green-700">
                  <FaCheckCircle className="flex-shrink-0" />
                  <span className="font-medium">30-day money-back guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-700">
                  <FaCheckCircle className="flex-shrink-0" />
                  <span className="font-medium">Lifetime course access</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-green-700">
                  <FaCheckCircle className="flex-shrink-0" />
                  <span className="font-medium">Certificate of completion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

