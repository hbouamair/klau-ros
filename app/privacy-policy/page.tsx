'use client'

import { FaShieldAlt, FaLock, FaEye, FaTrash, FaEdit, FaEnvelope, FaCookie, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa'

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20 min-h-screen" style={{ background: 'linear-gradient(180deg, #330F95 0%, #1a0a4e 50%, #000000 100%)' }}>
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-20 right-20 w-24 h-24 bg-pink-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-blue-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20 shadow-lg mb-8">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
              <FaShieldAlt className="text-white text-lg" />
            </div>
            <h1 className="text-white font-bold text-lg font-display">Privacy Policy</h1>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 font-display leading-normal">
            Your Privacy <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Matters</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            At Klau and Ros, we are committed to protecting your privacy and ensuring that your personal information is handled safely and responsibly.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-black/40">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-gray-200 leading-relaxed text-lg">
                At <strong className="text-white">Klau and Ros</strong> (www.klauyros.com), we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your personal data when you visit our website, sign up for our services, or engage with us in any way.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <FaEdit className="text-white text-lg" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">1. Information We Collect</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Personal identification information</h4>
                  <p className="text-gray-300">Such as your name, email address, phone number, or any other details you provide when you register for our online classes, subscribe to our newsletter, or contact us.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Payment information</h4>
                  <p className="text-gray-300">Such as credit card details or other payment methods if you purchase classes or services through our website.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Usage data</h4>
                  <p className="text-gray-300">Including your IP address, browser type, device information, pages visited, and other browsing activities on our site. This helps us understand how you use our website and improve your experience.</p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                  <FaCheckCircle className="text-white text-lg" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">2. How We Use Your Information</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">To provide services</h4>
                  <p className="text-gray-300">Including processing registrations for online classes, events, or Bootcamp Teams.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">To communicate with you</h4>
                  <p className="text-gray-300">Sending important updates about your account, course information, and upcoming events.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">To improve our services</h4>
                  <p className="text-gray-300">Analyzing data to enhance our website's performance and your overall user experience.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Marketing and promotions</h4>
                  <p className="text-gray-300">With your explicit consent, we may send you promotional emails about new classes, discounts, or events. You can opt-out at any time.</p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <FaLock className="text-white text-lg" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">3. How We Protect Your Information</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Encryption</h4>
                  <p className="text-gray-300">All sensitive data, such as payment details, are encrypted using SSL (Secure Socket Layer) technology during transmission.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Data minimization</h4>
                  <p className="text-gray-300">We only collect the information necessary for the specific purpose and limit access to authorized personnel.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Secure storage</h4>
                  <p className="text-gray-300">Personal information is stored securely on our servers, and we take reasonable measures to protect against unauthorized access, alteration, or destruction of your data.</p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-lg">
                  <FaEye className="text-white text-lg" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">4. Data Sharing</h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-gray-300 mb-4">
                  We do not sell, rent, or trade your personal information with third parties. However, we may share your information in the following limited situations:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">Service providers:</strong> We may share your information with trusted third-party service providers, such as payment processors, email marketing platforms, or event management tools, to help us deliver our services.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong className="text-white">Legal requirements:</strong> We may disclose your personal information if required to do so by law or in response to valid requests from public authorities.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <FaCookie className="text-white text-lg" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">5. Use of Cookies</h3>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-gray-300 mb-4">
                  Our website uses cookies to improve your experience and provide customized content. Cookies are small text files placed on your device that help us:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Remember your preferences during your current visit or future visits.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Analyze site performance and gather insights on how visitors interact with our site.</span>
                  </li>
                </ul>
                <p className="text-gray-300 mt-4">
                  You can choose to disable cookies through your browser settings, but this may affect the functionality of certain features on our website.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                  <FaTrash className="text-white text-lg" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">6. Your Rights</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Right to access</h4>
                  <p className="text-gray-300">You can request a copy of the personal data we hold about you.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Right to correct</h4>
                  <p className="text-gray-300">If any information is incorrect or outdated, you can ask us to correct it.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Right to deletion</h4>
                  <p className="text-gray-300">You can request the deletion of your personal data if it is no longer needed.</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Right to withdraw consent</h4>
                  <p className="text-gray-300">You can withdraw your consent for us to process your personal data at any time.</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">Contact Us</h3>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-8 border border-purple-400/30">
                <p className="text-gray-200 mb-4">
                  If you have any questions or concerns about this Privacy Policy or how we handle your personal data, feel free to contact us at:
                </p>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-purple-400 text-xl" />
                  <a href="mailto:klauyros@gmail.com" className="text-purple-300 hover:text-purple-200 font-semibold text-lg transition-colors">
                    klauyros@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-xl px-6 py-3 border border-white/20">
                <FaShieldAlt className="text-purple-400" />
                <span className="text-gray-300 font-medium">Last updated: October 1st, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
