import Link from 'next/link'
import { FaHeart, FaGlobe, FaUsers, FaTrophy, FaStar, FaAward, FaFire } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[500px] overflow-hidden hero-gradient">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
          <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold mb-6 shadow-lg animate-scale-in">
              <FaStar className="text-yellow-300" />
              World-Class Instructors
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 font-display leading-normal animate-fade-in drop-shadow-2xl">
              About Klau & Ros
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-100 max-w-4xl mx-auto font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Passionate Bachata dancers dedicated to sharing the joy of dance with the world
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-primary-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Our Journey
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 gradient-text font-display">Our Story</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Klau & Ros began their Bachata journey over 15 years ago, falling in love with both the dance 
                  and each other. What started as a passion quickly transformed into a mission to share the beauty 
                  and emotion of Bachata with dancers around the world.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With backgrounds in multiple dance styles and extensive training in the Dominican Republic, 
                  they developed their unique teaching methodology that combines technical precision with emotional 
                  expression and authentic Latin culture.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, they have taught thousands of students across 50+ countries, performed at major festivals 
                  worldwide, and created Endless Academy to make high-quality Bachata education accessible to everyone, 
                  everywhere.
                </p>
              </div>

              {/* Mission badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="bg-gradient-to-r from-primary-50 to-pink-50 px-4 py-2 rounded-xl border border-primary-100">
                  <div className="flex items-center gap-2">
                    <FaHeart className="text-primary-600" />
                    <span className="font-semibold text-gray-800">Passion-Driven</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-2">
                    <FaFire className="text-blue-600" />
                    <span className="font-semibold text-gray-800">Authentic</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-4 py-2 rounded-xl border border-green-100">
                  <div className="flex items-center gap-2">
                    <FaAward className="text-green-600" />
                    <span className="font-semibold text-gray-800">Excellence</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] md:h-[600px] animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-pink-600 rounded-3xl transform rotate-3"></div>
              <div 
                className="absolute inset-4 rounded-3xl shadow-2xl bg-cover bg-center transform hover:rotate-0 transition-transform duration-700"
                style={{
                  backgroundImage: "url('/images/klau-ros.jpg')"
                }}
              ></div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-2xl p-4 animate-float">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text font-display">15+</div>
                  <div className="text-xs text-gray-600 font-semibold">Years</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-primary-600 to-pink-600 rounded-2xl shadow-2xl p-4 animate-float text-white" style={{ animationDelay: '1s' }}>
                <FaStar className="text-3xl mb-1" />
                <div className="text-xs font-semibold">Award Winners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600 rounded-full filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white font-display mb-6">Our Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 font-light">Making a difference in the dance world</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative group animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-red-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary-500/50 transition-all duration-300">
                <div className="text-7xl font-extrabold font-display bg-gradient-to-r from-primary-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  10K+
                </div>
                <div className="text-gray-300 text-lg font-medium">Students Worldwide</div>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-primary-500 to-pink-500 rounded-full"></div>
              </div>
            </div>

            <div className="relative group animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-red-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary-500/50 transition-all duration-300">
                <div className="text-7xl font-extrabold font-display bg-gradient-to-r from-primary-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  50+
                </div>
                <div className="text-gray-300 text-lg font-medium">Countries Reached</div>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-primary-500 to-pink-500 rounded-full"></div>
              </div>
            </div>

            <div className="relative group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-red-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary-500/50 transition-all duration-300">
                <div className="text-7xl font-extrabold font-display bg-gradient-to-r from-primary-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  25+
                </div>
                <div className="text-gray-300 text-lg font-medium">International Awards</div>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-primary-500 to-pink-500 rounded-full"></div>
              </div>
            </div>

            <div className="relative group animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-red-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary-500/50 transition-all duration-300">
                <div className="text-7xl font-extrabold font-display bg-gradient-to-r from-primary-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  15
                </div>
                <div className="text-gray-300 text-lg font-medium">Years of Excellence</div>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-primary-500 to-pink-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold gradient-text font-display mb-4">Our Teaching Philosophy</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-pink-600 mx-auto"></div>
          </div>
          <div className="bg-gradient-to-br from-primary-50 via-pink-50 to-purple-50 rounded-3xl p-10 md:p-12 shadow-xl border-2 border-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-200 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-200 rounded-full filter blur-3xl opacity-30"></div>
            
            <div className="relative z-10 space-y-8 text-center">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                We believe that Bachata is more than just steps and patterns. It's about <span className="font-bold gradient-text">connection</span>, 
                <span className="font-bold gradient-text"> emotion</span>, and <span className="font-bold gradient-text">expressing yourself</span> through movement.
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-pink-600 mx-auto"></div>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                Our teaching approach focuses on building strong fundamentals while encouraging personal 
                style and creativity. We create a supportive learning environment where students feel 
                comfortable exploring, making mistakes, and growing as dancers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 hero-gradient text-white relative overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-20 right-20 w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 right-1/3 w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="animate-scale-in">
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 font-display drop-shadow-lg">
              Ready to Start Your Journey?
            </h2>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light">
              Join our community and learn Bachata from world-class instructors
            </p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link href="/courses" className="bg-white text-primary-600 hover:bg-gray-100 font-bold py-5 px-10 rounded-xl text-lg transition-all transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-2 group">
              Explore Our Courses
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

