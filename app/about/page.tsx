import Link from 'next/link'
import { FaHeart, FaGlobe, FaUsers, FaTrophy, FaStar, FaAward, FaFire } from 'react-icons/fa'

export default function AboutPage() {
  return (
    <div className="pt-20 min-h-screen" style={{ background: 'linear-gradient(180deg, #330F95 0%, #1a0a4e 50%, #000000 100%)' }}>
      {/* Hero Section */}
      <section className="relative min-h-[500px] overflow-hidden">
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
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Smooth gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Our Journey
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white font-display">Our Story</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Klau & Ros began their Bachata journey over 15 years ago, falling in love with both the dance 
                  and each other. What started as a passion quickly transformed into a mission to share the beauty 
                  and emotion of Bachata with dancers around the world.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  With backgrounds in multiple dance styles and extensive training in the Dominican Republic, 
                  they developed their unique teaching methodology that combines technical precision with emotional 
                  expression and authentic Latin culture.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Today, they have taught thousands of students across 50+ countries, performed at major festivals 
                  worldwide, and created Endless Academy to make high-quality Bachata education accessible to everyone, 
                  everywhere.
                </p>
              </div>

              {/* Mission badges */}
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="bg-gradient-to-r from-white/10 to-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-xl border border-purple-400/40 hover:border-purple-300 transition-colors duration-300 shadow-lg">
                  <div className="flex items-center gap-2">
                    <FaHeart className="text-purple-400" />
                    <span className="font-semibold text-white">Passion-Driven</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-white/10 to-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-xl border border-purple-400/40 hover:border-purple-300 transition-colors duration-300 shadow-lg">
                  <div className="flex items-center gap-2">
                    <FaFire className="text-purple-400" />
                    <span className="font-semibold text-white">Authentic</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-white/10 to-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-xl border border-purple-400/40 hover:border-purple-300 transition-colors duration-300 shadow-lg">
                  <div className="flex items-center gap-2">
                    <FaAward className="text-purple-400" />
                    <span className="font-semibold text-white">Excellence</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] md:h-[600px] animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-500 rounded-3xl transform rotate-3"></div>
              <div 
                className="absolute inset-4 rounded-3xl shadow-2xl bg-cover bg-center transform hover:rotate-0 transition-transform duration-700"
                style={{
                  backgroundImage: "url('/images/klau-ros.jpg')"
                }}
              ></div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-purple-600/90 to-purple-500/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 animate-float border border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white font-display">15+</div>
                  <div className="text-xs text-purple-200 font-semibold">Years</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl shadow-2xl p-4 animate-float text-white border border-white/20" style={{ animationDelay: '1s' }}>
                <FaStar className="text-3xl mb-1" />
                <div className="text-xs font-semibold">Award Winners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Smooth gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/20"></div>
        
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white font-display mb-6">Our Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 font-light">Making a difference in the dance world</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative group animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-7xl font-extrabold font-display bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent mb-4">
                  10K+
                </div>
                <div className="text-gray-300 text-lg font-medium">Students Worldwide</div>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"></div>
              </div>
            </div>

            <div className="relative group animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-7xl font-extrabold font-display bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent mb-4">
                  50+
                </div>
                <div className="text-gray-300 text-lg font-medium">Countries Reached</div>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"></div>
              </div>
            </div>

            <div className="relative group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-7xl font-extrabold font-display bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent mb-4">
                  25+
                </div>
                <div className="text-gray-300 text-lg font-medium">International Awards</div>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"></div>
              </div>
            </div>

            <div className="relative group animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-7xl font-extrabold font-display bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent mb-4">
                  15
                </div>
                <div className="text-gray-300 text-lg font-medium">Years of Excellence</div>
                <div className="mt-4 h-1 w-16 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Instructor Profiles */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Smooth gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            {/* Icon badge */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-purple-500 rounded-3xl mb-8 shadow-2xl transform hover:scale-110 hover:rotate-12 transition-all duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            
            <p className="text-purple-400 font-bold text-sm tracking-widest uppercase mb-6">MEET THE TEAM</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 font-display leading-relaxed">
              The Artists Behind <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Endless Academy</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              World-class instructors dedicated to your success and dance journey
            </p>
          </div>

          {/* Klaudia Perdek Profile */}
          <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-32 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
              <div className="relative group order-2 lg:order-1">
                {/* Decorative background */}
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-purple-400/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl group-hover:blur-2xl sm:group-hover:blur-3xl transition-all duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-purple-500/20 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 h-full">
                  {/* Profile image container */}
                  <div className="relative">
                    <div 
                      className="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-700"
                      style={{
                        aspectRatio: '4/5',
                        backgroundImage: "url('/images/klaudia-profile.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '300px',
                        '@media (min-width: 640px)': {
                          minHeight: '400px'
                        },
                        '@media (min-width: 1024px)': {
                          minHeight: '500px'
                        }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Floating stats */}
                      <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-gradient-to-br from-purple-600/90 to-purple-500/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-white/20 shadow-lg sm:shadow-xl">
                        <div className="text-center">
                          <div className="text-lg sm:text-2xl font-bold text-white font-display">15+</div>
                          <div className="text-xs text-purple-200 font-semibold">Years</div>
                        </div>
                      </div>
                      
                      {/* Name overlay */}
                      <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
                        <div className="bg-gradient-to-r from-purple-600/95 to-purple-500/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20 shadow-lg sm:shadow-xl">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-white mb-1 sm:mb-2">Klaudia Perdek</h3>
                          <p className="text-purple-200 font-semibold text-sm sm:text-base lg:text-lg">Lady Style Specialist</p>
                          <div className="flex items-center gap-2 mt-2 sm:mt-3">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-400 rounded-full animate-pulse"></div>
                            <span className="text-purple-200 text-xs sm:text-sm">Poland</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-white/10 via-white/5 to-purple-500/20 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 h-full">
                  <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                    <div className="bg-gradient-to-br from-white/10 via-white/5 to-purple-500/20 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 font-display flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-pink-600 to-purple-600 rounded-md sm:rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs sm:text-sm font-bold">1</span>
                        </div>
                        Objective
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                        Klaudia is known for her <strong className="text-white">precision, elegance, and powerful technique</strong>. With over 15 years of dance experience, 
                        she's trained in ballet, salsa, cheerleading, and of course, bachata. Her goal has always been to bring out the 
                        <strong className="text-white"> best version</strong> of each dancer by focusing on body control, musicality, and feminine expression. 
                        Today, she's not only a reference in lady style, but also a coach to hundreds of students around the world.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-white/10 via-white/5 to-purple-500/20 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 font-display flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-pink-600 to-purple-600 rounded-md sm:rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs sm:text-sm font-bold">2</span>
                        </div>
                        Biography
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                        Klau was born in 2000 in Poland and began her dance journey at the age of 8. She trained in styles such as 
                        cheerleading, ballet, and salsa solo, quickly standing out and competing nationally and internationally by the age of 10. 
                        In 2017, she fell in love with bachata and has since built a strong presence in the international dance scene. 
                        Klau has achieved <strong className="text-white">podium finishes in major international competitions</strong>, including the World Latin Cup and 
                        BachatArt World Championship, and has taught at renowned festivals across Europe, Asia, and the Americas.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-white/10 via-white/5 to-purple-500/20 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 font-display flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-pink-600 to-purple-600 rounded-md sm:rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs sm:text-sm font-bold">3</span>
                        </div>
                        Goals & Philosophy
                      </h4>
                      <ul className="space-y-3 sm:space-y-4">
                        <li className="flex items-start gap-3 sm:gap-4">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-pink-600 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                            <span className="text-white text-xs sm:text-sm font-bold">1</span>
                          </div>
                          <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Inspire female dancers to explore their confidence and femininity through movement.</p>
                        </li>
                        <li className="flex items-start gap-3 sm:gap-4">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-pink-600 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                            <span className="text-white text-xs sm:text-sm font-bold">2</span>
                          </div>
                          <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Share clear, structured guidance that empowers students to grow consistently.</p>
                        </li>
                        <li className="flex items-start gap-3 sm:gap-4">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-pink-600 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                            <span className="text-white text-xs sm:text-sm font-bold">3</span>
                          </div>
                          <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Create authentic online and offline content to build a loyal dance community.</p>
                        </li>
                        <li className="flex items-start gap-3 sm:gap-4">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-pink-600 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                            <span className="text-white text-xs sm:text-sm font-bold">4</span>
                          </div>
                          <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Combine discipline and fun to transform each class into a learning experience.</p>
                        </li>
                        <li className="flex items-start gap-3 sm:gap-4">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-pink-600 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                            <span className="text-white text-xs sm:text-sm font-bold">5</span>
                          </div>
                          <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Represent passion, power, and vulnerability on every stage.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Adrian Ros Profile */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
              <div className="order-1 lg:order-1">
                <div className="bg-gradient-to-br from-white/10 via-white/5 to-blue-500/20 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 h-full">
                  <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                    <div className="bg-gradient-to-br from-white/10 via-white/5 to-blue-500/20 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 font-display flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md sm:rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs sm:text-sm font-bold">1</span>
                        </div>
                        Objective
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                        Adrián is recognized for his <strong className="text-white">creativity, connection, and musical storytelling</strong>. With a background in sports 
                        and dance, he developed a unique approach to bachata that blends <strong className="text-white">urban flavor, emotional dynamics, and musical interpretation</strong>. 
                        His goal is to guide dancers to connect deeply with the music and their partner — both technically and emotionally. 
                        Adrián is not only a choreographer, but a motivator who helps students unlock their potential.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-white/10 via-white/5 to-blue-500/20 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 font-display flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md sm:rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs sm:text-sm font-bold">2</span>
                        </div>
                        Biography
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                        Ros was born in 1993 in Galicia, Spain, and began dancing in 2005 with a background in sport dance and later Cuban salsa. 
                        In 2014, he became certified in the Island Touch methodology by Ataca & La Alemana. In 2020, he moved to Madrid to refine 
                        his stage presence and technique under top professionals such as Marco & Sara. Over the years, Ros developed a distinctive 
                        identity as a dancer and choreographer, founding a signature style known as <strong className="text-white">Endless Bachata</strong> – characterized by 
                        smooth transitions, musical connection, and emotional storytelling.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-white/10 via-white/5 to-blue-500/20 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                      <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 sm:mb-4 font-display flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md sm:rounded-lg flex items-center justify-center">
                          <span className="text-white text-xs sm:text-sm font-bold">3</span>
                        </div>
                        Goals & Philosophy
                      </h4>
                      <ul className="space-y-3 sm:space-y-4">
                        <li className="flex items-start gap-3 sm:gap-4">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                            <span className="text-white text-xs sm:text-sm font-bold">1</span>
                          </div>
                          <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Teach dancers how to connect beyond the steps, through energy and intention.</p>
                        </li>
                        <li className="flex items-start gap-3 sm:gap-4">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                            <span className="text-white text-xs sm:text-sm font-bold">2</span>
                          </div>
                          <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Offer tools to develop musicality, fluidity, and movement freedom.</p>
                        </li>
                        <li className="flex items-start gap-3 sm:gap-4">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                            <span className="text-white text-xs sm:text-sm font-bold">3</span>
                          </div>
                          <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Build choreographies that are emotionally powerful and technically sharp.</p>
                        </li>
                        <li className="flex items-start gap-3 sm:gap-4">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                            <span className="text-white text-xs sm:text-sm font-bold">4</span>
                          </div>
                          <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Support both beginners and professionals in their artistic journey.</p>
                        </li>
                        <li className="flex items-start gap-3 sm:gap-4">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                            <span className="text-white text-xs sm:text-sm font-bold">5</span>
                          </div>
                          <p className="text-gray-300 text-sm sm:text-base lg:text-lg">Use humor, empathy, and challenge to create unforgettable classes.</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-2 lg:order-2 relative group">
                {/* Decorative background */}
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-400/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl group-hover:blur-2xl sm:group-hover:blur-3xl transition-all duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-blue-500/20 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-xl sm:shadow-2xl hover:shadow-2xl sm:hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 h-full">
                  {/* Profile image container */}
                  <div className="relative">
                    <div 
                      className="rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden transform group-hover:scale-105 transition-all duration-700"
                      style={{
                        aspectRatio: '4/5',
                        backgroundImage: "url('/images/adrian-profile.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '300px',
                        '@media (min-width: 640px)': {
                          minHeight: '400px'
                        },
                        '@media (min-width: 1024px)': {
                          minHeight: '500px'
                        }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Floating stats */}
                      <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-gradient-to-br from-blue-600/90 to-purple-500/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-white/20 shadow-lg sm:shadow-xl">
                        <div className="text-center">
                          <div className="text-lg sm:text-2xl font-bold text-white font-display">12+</div>
                          <div className="text-xs text-blue-200 font-semibold">Years</div>
                        </div>
                      </div>
                      
                      {/* Name overlay */}
                      <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
                        <div className="bg-gradient-to-r from-blue-600/95 to-purple-500/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20 shadow-lg sm:shadow-xl">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-white mb-1 sm:mb-2">Adrian Ros</h3>
                          <p className="text-blue-200 font-semibold text-sm sm:text-base lg:text-lg">Endless Bachata Founder</p>
                          <div className="flex items-center gap-2 mt-2 sm:mt-3">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
                            <span className="text-blue-200 text-xs sm:text-sm">Spain</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-4 relative overflow-hidden">
        {/* Smooth gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-4">Our Teaching Philosophy</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto"></div>
          </div>
          <div className="bg-gradient-to-br from-white/10 via-white/5 to-purple-500/20 backdrop-blur-lg rounded-3xl p-10 md:p-12 shadow-xl border-2 border-purple-400/40 hover:border-purple-300 relative overflow-hidden transition-all duration-300">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-200 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-200 rounded-full filter blur-3xl opacity-30"></div>
            
            <div className="relative z-10 space-y-8 text-center">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                We believe that Bachata is more than just steps and patterns. It's about <span className="font-bold gradient-text">connection</span>, 
                <span className="font-bold gradient-text"> emotion</span>, and <span className="font-bold gradient-text">expressing yourself</span> through movement.
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-pink-600 mx-auto"></div>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                Our teaching approach focuses on building strong fundamentals while encouraging personal 
                style and creativity. We create a supportive learning environment where students feel 
                comfortable exploring, making mistakes, and growing as dancers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-white relative overflow-hidden">
        {/* Smooth gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
        
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

