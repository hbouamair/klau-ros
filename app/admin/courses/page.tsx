'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore, useAdminStore } from '@/lib/store'
import { FaPlus, FaEdit, FaTrash, FaGraduationCap, FaStar, FaUsers, FaBook, FaClock, FaSave, FaTimes } from 'react-icons/fa'

export default function AdminCoursesPage() {
  const router = useRouter()
  const { user, isAuthenticated } = useAuthStore()
  const { courses, addCourse, updateCourse, deleteCourse } = useAdminStore()
  
  const [showModal, setShowModal] = useState(false)
  const [editingCourse, setEditingCourse] = useState<any>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    level: 'Beginner',
    duration: '',
    price: 0,
    image: '',
    imageFile: null as File | null,
    videoUrl: '',
    videoFile: null as File | null,
    lessons: 0
  })

  useEffect(() => {
    if (!isAuthenticated || !user?.isAdmin) {
      router.push('/login')
    }
  }, [isAuthenticated, user, router])

  if (!user?.isAdmin) {
    return null
  }

  const handleAddNew = () => {
    setEditingCourse(null)
    setFormData({
      title: '',
      description: '',
      level: 'Beginner',
      duration: '',
      price: 0,
      image: '',
      imageFile: null,
      videoUrl: '',
      videoFile: null,
      lessons: 0
    })
    setShowModal(true)
  }

  const handleEdit = (course: any) => {
    setEditingCourse(course)
    setFormData({
      title: course.title,
      description: course.description,
      level: course.level,
      duration: course.duration,
      price: course.price,
      image: course.image,
      imageFile: null,
      videoUrl: course.videoUrl || '',
      videoFile: null,
      lessons: course.lessons
    })
    setShowModal(true)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Create a local URL for the image file
      const imageUrl = URL.createObjectURL(file)
      setFormData({ ...formData, imageFile: file, image: imageUrl })
    }
  }

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // Create a local URL for the video file
      const videoUrl = URL.createObjectURL(file)
      setFormData({ ...formData, videoFile: file, videoUrl })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, you would upload both image and video files to a server here
    // For now, we'll use the local URLs
    const courseData = {
      title: formData.title,
      description: formData.description,
      level: formData.level,
      duration: formData.duration,
      price: formData.price,
      image: formData.image,
      videoUrl: formData.videoUrl,
      lessons: formData.lessons
    }
    
    if (editingCourse) {
      updateCourse(editingCourse.id, courseData)
    } else {
      addCourse(courseData)
    }
    setShowModal(false)
  }

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this course?')) {
      deleteCourse(id)
    }
  }

  const levelColors: { [key: string]: { gradient: string; badge: string } } = {
    'Beginner': { gradient: 'from-green-500 to-emerald-600', badge: 'bg-green-100 text-green-700' },
    'Intermediate': { gradient: 'from-blue-500 to-cyan-600', badge: 'bg-blue-100 text-blue-700' },
    'Advanced': { gradient: 'from-purple-500 to-pink-600', badge: 'bg-purple-100 text-purple-700' },
    'All Levels': { gradient: 'from-orange-500 to-red-600', badge: 'bg-orange-100 text-orange-700' }
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Modern Header with better contrast */}
      <div className="relative overflow-hidden bg-white border-b-4 border-blue-600 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4 animate-fade-in">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300">
                <FaGraduationCap className="text-4xl text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold font-display text-gray-900 mb-1">
                  Manage Courses
                </h1>
                <p className="text-lg text-gray-600 font-semibold">
                  {courses.length} total courses available
                </p>
              </div>
            </div>

            <button
              onClick={handleAddNew}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
            >
              <FaPlus className="text-xl" />
              Add New Course
            </button>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => {
            const levelColor = levelColors[course.level] || levelColors['Beginner']
            return (
              <div 
                key={course.id} 
                className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-primary-200 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${course.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-bold ${levelColor.badge}`}>
                    {course.level}
                  </div>

                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={() => handleEdit(course)}
                      className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 transform hover:scale-110"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(course.id)}
                      className="w-10 h-10 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 transform hover:scale-110"
                    >
                      <FaTrash />
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-4 flex gap-4">
                    <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <FaStar className="text-yellow-400 text-sm" />
                      <span className="font-bold text-gray-900 text-sm">{course.rating}</span>
                    </div>
                    <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <FaUsers className="text-blue-600 text-sm" />
                      <span className="font-bold text-gray-900 text-sm">{course.students}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 font-display">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                    {course.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <FaClock className="text-primary-600" />
                      <span className="font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <FaBook className="text-primary-600" />
                      <span className="font-semibold">{course.lessons} lessons</span>
                    </div>
                  </div>

                  <div className={`text-3xl font-extrabold bg-gradient-to-r ${levelColor.gradient} bg-clip-text text-transparent font-display`}>
                    ${course.price}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="sticky top-0 bg-gradient-to-r from-primary-600 to-pink-600 text-white p-6 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold font-display">
                  {editingCourse ? 'Edit Course' : 'Add New Course'}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Course Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 transition-all text-gray-900"
                  placeholder="e.g., Bachata Fundamentals"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 transition-all text-gray-900"
                  placeholder="Course description..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">Level</label>
                  <select
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 transition-all text-gray-900"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="All Levels">All Levels</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">Duration</label>
                  <input
                    type="text"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 transition-all text-gray-900"
                    placeholder="e.g., 8 weeks"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">Price ($)</label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                    required
                    min="0"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 transition-all text-gray-900"
                    placeholder="149"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">Number of Lessons</label>
                  <input
                    type="number"
                    value={formData.lessons}
                    onChange={(e) => setFormData({ ...formData, lessons: Number(e.target.value) })}
                    required
                    min="0"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-600 transition-all text-gray-900"
                    placeholder="24"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  🖼️ Course Thumbnail Image
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-600 transition-all duration-300 bg-gradient-to-br from-blue-50/50 to-cyan-50/50">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                    required={!editingCourse && !formData.image}
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    {formData.image ? (
                      <div className="flex flex-col items-center gap-3">
                        <img 
                          src={formData.image} 
                          alt="Preview" 
                          className="w-full h-48 object-cover rounded-xl shadow-lg"
                        />
                        <div>
                          <p className="text-sm font-bold text-gray-700">
                            {formData.imageFile ? formData.imageFile.name : 'Current image'}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Click to change image
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-700">
                            Click to upload course image
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            PNG, JPG, WEBP up to 10MB
                          </p>
                        </div>
                      </div>
                    )}
                  </label>
                </div>
                {formData.image && (
                  <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-semibold text-green-700">Image uploaded successfully!</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 text-gray-700">
                  📹 Course Video Upload
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary-600 transition-all duration-300">
                  <input
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    className="hidden"
                    id="video-upload"
                  />
                  <label htmlFor="video-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-700">
                          {formData.videoFile ? formData.videoFile.name : 'Click to upload video'}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          MP4, MOV, AVI up to 500MB
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
                {formData.videoUrl && (
                  <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm font-semibold text-green-700">Video uploaded successfully!</span>
                  </div>
                )}
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-primary-600 to-pink-600 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <FaSave />
                  {editingCourse ? 'Update Course' : 'Create Course'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-4 bg-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-300 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

