import Link from 'next/link'
import { FaClock, FaBook, FaStar, FaUsers, FaPlay, FaTrophy, FaInfinity } from 'react-icons/fa'

interface Course {
  id: number
  title: string
  description: string
  level: string
  duration: string
  price: number
  image: string
  lessons: number
  rating: number
  students: number
  originalPrice?: number
  badge?: string
}

interface CourseCardProps {
  course: Course
  originalPrice?: number
  badge?: string
}

export default function CourseCard({ course, originalPrice, badge }: CourseCardProps) {
  // Determine level color
  const levelColors: { [key: string]: { gradient: string; badge: string; accent: string } } = {
    'Beginner': { 
      gradient: 'from-green-500 to-emerald-600', 
      badge: 'bg-gradient-to-r from-green-500 to-emerald-600',
      accent: 'from-green-400/20 to-emerald-400/20'
    },
    'Intermediate': { 
      gradient: 'from-blue-500 to-cyan-600', 
      badge: 'bg-gradient-to-r from-blue-500 to-cyan-600',
      accent: 'from-blue-400/20 to-cyan-400/20'
    },
    'Advanced': { 
      gradient: 'from-purple-500 to-pink-600', 
      badge: 'bg-gradient-to-r from-purple-500 to-pink-600',
      accent: 'from-purple-400/20 to-pink-400/20'
    },
    'All Levels': { 
      gradient: 'from-orange-500 to-red-600', 
      badge: 'bg-gradient-to-r from-orange-500 to-red-600',
      accent: 'from-orange-400/20 to-red-400/20'
    }
  }
  
  const levelColor = levelColors[course.level] || levelColors['Beginner']

  return (
    <Link href={`/courses/${course.id}`} className="block group h-full">
      <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-purple-500/20 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col border-2 border-purple-400/40 hover:border-purple-300">
        {/* Image Section */}
        <div className="relative h-52 overflow-hidden flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-200">
          <div
            className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-all duration-700"
            style={{ backgroundImage: `url(${course.image})` }}
          />
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transform scale-75 group-hover:scale-100 transition-all duration-500 shadow-2xl">
              <FaPlay className="text-2xl text-primary-600 ml-1" />
            </div>
          </div>

          {/* Special badge (NEW TEAMS, etc.) */}
          {(badge || course.badge) && (
            <div className="absolute top-5 right-5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl animate-pulse">
              {badge || course.badge}
            </div>
          )}
        </div>
        
        {/* Content Section */}
        <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white group-hover:text-purple-300 transition-colors duration-300 leading-tight font-display line-clamp-2">
            {course.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-300 mb-4 sm:mb-5 line-clamp-2 leading-relaxed text-sm sm:text-[15px] flex-grow">
            {course.description}
          </p>
          
          {/* Course info */}
          <div className="space-y-2 sm:space-y-3 mt-auto">
            {/* Duration and Lessons */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className={`bg-gradient-to-br ${levelColor.accent} backdrop-blur-sm rounded-xl p-2.5 sm:p-3.5 border border-purple-300/30`}>
                <div className="flex items-center gap-1 sm:gap-2 mb-1">
                  <FaClock className={`text-xs sm:text-sm bg-gradient-to-r ${levelColor.gradient} bg-clip-text text-transparent`} />
                  <span className="text-[10px] sm:text-xs text-gray-400 font-semibold uppercase tracking-wide">Duration</span>
                </div>
                <div className="font-bold text-white text-xs sm:text-sm">{course.duration}</div>
              </div>
              
              <div className={`bg-gradient-to-br ${levelColor.accent} backdrop-blur-sm rounded-xl p-2.5 sm:p-3.5 border border-purple-300/30`}>
                <div className="flex items-center gap-1 sm:gap-2 mb-1">
                  <FaBook className={`text-xs sm:text-sm bg-gradient-to-r ${levelColor.gradient} bg-clip-text text-transparent`} />
                  <span className="text-[10px] sm:text-xs text-gray-400 font-semibold uppercase tracking-wide">Lessons</span>
                </div>
                <div className="font-bold text-white text-xs sm:text-sm">{course.lessons} Videos</div>
              </div>
            </div>
            
            {/* Lifetime access badge */}
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 border border-purple-400/30">
              <div className="flex items-center gap-2">
                <FaInfinity className="text-purple-300 text-base sm:text-lg" />
                <span className="text-xs sm:text-sm font-bold text-white">Lifetime Access Included</span>
              </div>
            </div>
            
            {/* Price and CTA */}
            <div className="flex items-end justify-between pt-3 sm:pt-4 border-t-2 border-purple-400/30">
              <div>
                <div className="text-[10px] sm:text-xs text-gray-400 mb-1 sm:mb-1.5 font-bold uppercase tracking-widest">Price</div>
                <div className="flex items-center gap-2 sm:gap-3">
                  {(originalPrice || course.originalPrice) && (
                    <div className="text-base sm:text-xl font-bold text-gray-500 line-through">
                      ${originalPrice || course.originalPrice}
                    </div>
                  )}
                  <div className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${levelColor.gradient} bg-clip-text text-transparent font-display`}>
                    ${course.price}
                  </div>
                </div>
                {(originalPrice || course.originalPrice) && (
                  <div className="text-[10px] sm:text-xs text-green-400 font-bold mt-1">
                    Save ${((originalPrice || course.originalPrice!) - course.price).toFixed(0)}!
                  </div>
                )}
              </div>
              
              <div className={`${levelColor.badge} text-white font-bold px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl shadow-lg flex items-center gap-1.5 sm:gap-2 relative overflow-hidden text-sm sm:text-base`}>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="relative z-10 tracking-wide">Enroll</span>
                <FaTrophy className="relative z-10 text-yellow-200 text-sm sm:text-base" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

