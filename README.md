# Klau & Ros - Endless Academy

A modern e-commerce platform for online Bachata classes taught by world-renowned instructors Klau & Ros.

## Features

✨ **Modern UI/UX**

- Beautiful, responsive design with Tailwind CSS
- Smooth animations and transitions
- Mobile-first approach

🎓 **Course Management**

- Browse comprehensive course catalog
- Filter by skill level (Beginner, Intermediate, Advanced)
- Sort by popularity, rating, or price
- Detailed course pages with curriculum and instructor info

🛒 **E-Commerce Functionality**

- Shopping cart with persistent storage
- Secure checkout flow
- Order summary and payment processing

🔐 **Authentication System**

- User signup and login
- Protected routes for dashboard
- Session management with Zustand

📊 **Student Dashboard**

- Track course progress
- View learning statistics
- Achievement system
- Quick access to enrolled courses

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Icons**: React Icons

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
endless-academy/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── cart/                # Shopping cart
│   ├── checkout/            # Checkout process
│   ├── contact/             # Contact page
│   ├── courses/             # Course listing & details
│   ├── dashboard/           # User dashboard
│   ├── login/               # Login page
│   ├── signup/              # Signup page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/              # Reusable components
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer
│   └── CourseCard.tsx      # Course card component
├── lib/                     # Utilities and stores
│   └── store.ts            # Zustand state management
├── public/                  # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## Key Pages

### Homepage (`/`)

- Hero section with call-to-action
- Feature highlights
- Featured courses
- About instructors
- Call-to-action sections

### Courses (`/courses`)

- Complete course catalog
- Filter by level
- Sort options
- Course cards with key information

### Course Details (`/courses/[id]`)

- Detailed course information
- Curriculum breakdown
- Instructor bio
- Purchase options
- Course includes section

### Shopping Cart (`/cart`)

- View cart items
- Remove items
- Order summary
- Proceed to checkout

### Checkout (`/checkout`)

- Billing information form
- Payment details
- Order summary
- Secure purchase process

### Dashboard (`/dashboard`)

- User statistics
- Enrolled courses with progress
- Achievement system
- Continue learning shortcuts

### Authentication

- Login page (`/login`)
- Signup page (`/signup`)
- Protected routes

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Course Data

Update course data in respective page files to add/modify courses.

### Images

Replace placeholder images with actual course and instructor photos.

## State Management

The app uses Zustand for state management:

- **Cart State**: Shopping cart items and operations
- **Auth State**: User authentication and session

## Future Enhancements

- Backend API integration
- Real payment processing (Stripe/PayPal)
- Video player for course content
- Progress tracking with backend
- Social features (comments, reviews)
- Email notifications
- Mobile app version
- Admin panel for content management

## Demo Accounts

For testing purposes:

- **Login**: Use any email and password to log in
- **Checkout**: Form validation only (no real payment processing)

## Support

For questions or support, visit the contact page or email:

- info@endlessacademy.com
- support@endlessacademy.com

## License

This project is created for Klau & Ros's Endless Academy.

---

Built with ❤️ using Next.js and TypeScript
