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
}

interface CourseCardProps {
  course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
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
      <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col border-2 border-gray-100 hover:border-primary-200">
        {/* Decorative gradient accent */}
        <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${levelColor.gradient}`}></div>
        
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
          
          {/* Level badge */}
          <div className={`absolute top-5 left-5 ${levelColor.badge} text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl transform group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm`}>
            {course.level}
          </div>
          
          {/* Rating badge */}
          <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-xl flex items-center gap-1.5">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="font-bold text-gray-900 text-sm">{course.rating}</span>
          </div>
          
          {/* Students count */}
          <div className="absolute bottom-4 left-5 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
            <FaUsers className="text-primary-600 text-sm" />
            <span className="font-bold text-gray-900 text-sm">{course.students.toLocaleString()}</span>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors duration-300 leading-tight font-display line-clamp-2">
            {course.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 mb-5 line-clamp-2 leading-relaxed text-[15px] flex-grow">
            {course.description}
          </p>
          
          {/* Course info */}
          <div className="space-y-3 mt-auto">
            {/* Duration and Lessons */}
            <div className="grid grid-cols-2 gap-3">
              <div className={`bg-gradient-to-br ${levelColor.accent} rounded-xl p-3.5 border border-gray-100`}>
                <div className="flex items-center gap-2 mb-1">
                  <FaClock className={`text-sm bg-gradient-to-r ${levelColor.gradient} bg-clip-text text-transparent`} />
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Duration</span>
                </div>
                <div className="font-bold text-gray-900 text-sm">{course.duration}</div>
              </div>
              
              <div className={`bg-gradient-to-br ${levelColor.accent} rounded-xl p-3.5 border border-gray-100`}>
                <div className="flex items-center gap-2 mb-1">
                  <FaBook className={`text-sm bg-gradient-to-r ${levelColor.gradient} bg-clip-text text-transparent`} />
                  <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Lessons</span>
                </div>
                <div className="font-bold text-gray-900 text-sm">{course.lessons} Videos</div>
              </div>
            </div>
            
            {/* Lifetime access badge */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-3 border border-amber-200/50">
              <div className="flex items-center gap-2">
                <FaInfinity className="text-orange-600 text-lg" />
                <span className="text-sm font-bold text-gray-900">Lifetime Access Included</span>
              </div>
            </div>
            
            {/* Price and CTA */}
            <div className="flex items-end justify-between pt-4 border-t-2 border-gray-100">
              <div>
                <div className="text-xs text-gray-500 mb-1.5 font-bold uppercase tracking-widest">Price</div>
                <div className={`text-4xl font-extrabold bg-gradient-to-r ${levelColor.gradient} bg-clip-text text-transparent font-display`}>
                  ${course.price}
                </div>
              </div>
              
              <div className={`${levelColor.badge} text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl shadow-lg flex items-center gap-2 relative overflow-hidden`}>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <span className="relative z-10 tracking-wide">Enroll</span>
                <FaTrophy className="relative z-10 text-yellow-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

