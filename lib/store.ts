import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface Course {
  id: number
  title: string
  price: number
  image: string
  level: string
}

interface CartState {
  items: Course[]
  addItem: (course: Course) => void
  removeItem: (id: number) => void
  clearCart: () => void
  getTotal: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (course) => {
        const items = get().items
        if (!items.find(item => item.id === course.id)) {
          set({ items: [...items, course] })
        }
      },
      removeItem: (id) => {
        set({ items: get().items.filter(item => item.id !== id) })
      },
      clearCart: () => set({ items: [] }),
      getTotal: () => {
        return get().items.reduce((total, item) => total + item.price, 0)
      },
    }),
    {
      name: 'cart-storage',
    }
  )
)

interface User {
  id: number
  name: string
  email: string
  purchasedCourses: number[]
  isAdmin?: boolean
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<boolean>
  signup: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
}

// Admin Store
interface AdminCourse {
  id: number
  title: string
  description: string
  level: string
  duration: string
  price: number
  image: string
  videoUrl?: string
  lessons: number
  rating: number
  students: number
  originalPrice?: number
  badge?: string
  instructor?: string
  category?: string
}

interface AdminClient {
  id: number
  name: string
  email: string
  joinDate: string
  purchasedCourses: number[]
  totalSpent: number
}

interface AdminOrder {
  id: number
  clientId: number
  clientName: string
  clientEmail: string
  courses: { id: number; title: string; price: number }[]
  totalAmount: number
  date: string
  status: 'completed' | 'pending' | 'cancelled'
}

interface AdminState {
  courses: AdminCourse[]
  clients: AdminClient[]
  orders: AdminOrder[]
  addCourse: (course: Omit<AdminCourse, 'id' | 'rating' | 'students'>) => void
  updateCourse: (id: number, course: Partial<AdminCourse>) => void
  deleteCourse: (id: number) => void
  deleteClient: (id: number) => void
  updateOrderStatus: (id: number, status: 'completed' | 'pending' | 'cancelled') => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email, password) => {
        // Mock login - in real app, this would call an API
        // Admin login: admin@klauros.com / admin123
        if (email === 'admin@klauros.com' && password === 'admin123') {
          const user = {
            id: 0,
            name: 'Admin',
            email,
            purchasedCourses: [],
            isAdmin: true
          }
          set({ user, isAuthenticated: true })
          return true
        }
        
        if (email && password) {
          const user = {
            id: Date.now(),
            name: 'Demo User',
            email,
            purchasedCourses: []
          }
          set({ user, isAuthenticated: true })
          return true
        }
        return false
      },
      signup: async (name, email, password) => {
        // Mock signup - in real app, this would call an API
        if (name && email && password) {
          const user = {
            id: 1,
            name,
            email,
            purchasedCourses: []
          }
          set({ user, isAuthenticated: true })
          return true
        }
        return false
      },
      logout: () => {
        set({ user: null, isAuthenticated: false })
      },
    }),
    {
      name: 'auth-storage',
    }
  )
)

// Admin Store
export const useAdminStore = create<AdminState>()(
  persist(
    (set, get) => ({
      courses: [
        {
          id: 1,
          title: 'Men Style',
          description: 'Master masculine styling, body isolation, and musical expression with Adrian Ros',
          level: 'All Levels',
          duration: '24/7 Access',
          price: 29.99,
          image: '/images/men-style-course.jpg',
          lessons: 20,
          rating: 5.0,
          students: 850,
          instructor: 'Adrian Ros',
          category: 'ONLINE CLASSES'
        },
        {
          id: 2,
          title: 'Partnerwork',
          description: 'Learn connection, leading/following techniques and partner dynamics with Klau y Ros',
          level: 'All Levels',
          duration: '24/7 Access',
          price: 29.99,
          image: '/images/partnerwork-course.jpg',
          lessons: 25,
          rating: 5.0,
          students: 1200,
          instructor: 'Klau y Ros',
          category: 'ONLINE CLASSES'
        },
        {
          id: 3,
          title: 'Lady Style',
          description: 'Develop feminine styling, body control, and elegance with Klaudia Perdek',
          level: 'All Levels',
          duration: '24/7 Access',
          price: 29.99,
          image: '/images/lady-style-course.jpg',
          lessons: 22,
          rating: 5.0,
          students: 980,
          instructor: 'Klaudia Perdek',
          category: 'ONLINE CLASSES'
        },
        {
          id: 4,
          title: 'Vuela Teams',
          description: 'Join the exclusive Vuela Bootcamp Teams program with Klau y Ros and represent your city on the global stage',
          level: 'Advanced',
          duration: 'Bootcamp Program',
          price: 650,
          originalPrice: 800,
          image: '/images/vuela-teams-course.jpg',
          lessons: 50,
          rating: 5.0,
          students: 120,
          instructor: 'Klau y Ros',
          category: 'KR TEAMS',
          badge: 'NEW TEAMS'
        },
        {
          id: 5,
          title: "Viejo Oeste Lady's Team",
          description: 'Exclusive ladies team choreography program with Klaudia Perdek focusing on powerful feminine expression',
          level: 'Intermediate',
          duration: 'Team Program',
          price: 500,
          image: '/images/viejo-oeste-course.jpg',
          lessons: 35,
          rating: 5.0,
          students: 85,
          instructor: 'Klaudia Perdek',
          category: 'KR TEAMS'
        },
        {
          id: 6,
          title: 'Niveles Choreo',
          description: 'Master the complete Niveles choreography with Klau y Ros, featuring dynamic moves and musicality',
          level: 'All Levels',
          duration: 'Full Choreography',
          price: 350,
          originalPrice: 800,
          image: '/images/niveles-course.jpg',
          lessons: 30,
          rating: 5.0,
          students: 450,
          instructor: 'Klau y Ros',
          category: 'CHOREOGRAPHY'
        }
      ],
      clients: [
        {
          id: 1,
          name: 'Maria Garcia',
          email: 'maria@example.com',
          joinDate: '2024-01-15',
          purchasedCourses: [1, 2],
          totalSpent: 348
        },
        {
          id: 2,
          name: 'John Smith',
          email: 'john@example.com',
          joinDate: '2024-02-20',
          purchasedCourses: [1],
          totalSpent: 149
        },
        {
          id: 3,
          name: 'Sofia Rodriguez',
          email: 'sofia@example.com',
          joinDate: '2024-03-10',
          purchasedCourses: [1, 2, 3],
          totalSpent: 597
        }
      ],
      orders: [
        {
          id: 1,
          clientId: 1,
          clientName: 'Maria Garcia',
          clientEmail: 'maria@example.com',
          courses: [
            { id: 1, title: 'Bachata Fundamentals', price: 149 },
            { id: 2, title: 'Sensual Bachata Techniques', price: 199 }
          ],
          totalAmount: 348,
          date: '2024-01-15',
          status: 'completed'
        },
        {
          id: 2,
          clientId: 2,
          clientName: 'John Smith',
          clientEmail: 'john@example.com',
          courses: [
            { id: 1, title: 'Bachata Fundamentals', price: 149 }
          ],
          totalAmount: 149,
          date: '2024-02-20',
          status: 'completed'
        },
        {
          id: 3,
          clientId: 3,
          clientName: 'Sofia Rodriguez',
          clientEmail: 'sofia@example.com',
          courses: [
            { id: 3, title: 'Advanced Partnering & Musicality', price: 249 }
          ],
          totalAmount: 249,
          date: '2024-03-10',
          status: 'pending'
        }
      ],
      addCourse: (course) => {
        const courses = get().courses
        const newId = Math.max(...courses.map(c => c.id), 0) + 1
        const newCourse = {
          ...course,
          id: newId,
          rating: 0,
          students: 0
        }
        set({ courses: [...courses, newCourse] })
      },
      updateCourse: (id, updatedData) => {
        const courses = get().courses
        set({
          courses: courses.map(course =>
            course.id === id ? { ...course, ...updatedData } : course
          )
        })
      },
      deleteCourse: (id) => {
        set({ courses: get().courses.filter(course => course.id !== id) })
      },
      deleteClient: (id) => {
        set({ clients: get().clients.filter(client => client.id !== id) })
      },
      updateOrderStatus: (id, status) => {
        const orders = get().orders
        set({
          orders: orders.map(order =>
            order.id === id ? { ...order, status } : order
          )
        })
      }
    }),
    {
      name: 'admin-storage',
    }
  )
)

