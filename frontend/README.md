# Awak Innovations Website

Premium, modern, and conversion-focused website for Awak Innovations, a digital agency specializing in cuttingedge web development, creative design, and intelligent data-driven solutions.

## Tech Stack

### Frontend
- **Framework**: [Next.js 14](https://nextjs.org) (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: Lucide React

### Backend
- **Framework**: Node.js & Express
- **Language**: TypeScript
- **Database**: PostgreSQL (via Prisma ORM)

## Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm
- PostgreSQL (for backend services)

### Running the Frontend

The Next.js application is located in the `frontend` directory.

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Running the Backend

The Express API is located in the `backend` directory.

```bash
cd backend
npm install

# Set up your environment variables
cp .env.example .env

# Generate Prisma client and push schema
npx prisma generate
npx prisma db push

# Start the development server
npm run dev
```

## Design System

The application uses global CSS variables defined in `src/app/globals.css` to enforce the Awak Innovations brand identity.

- **Primary Color**: Awak Sky Blue (`#2096D5`)
- **Background**: Deep Navy / Dark Slate (`#0E1A21`)
- **Typography**: Inter (Google Fonts via `next/font`)

Dark Mode is the default and only supported theme for this premium corporate aesthetic.

## Architecture & Code Organization

- `/src/app`: Next.js App Router layout and pages.
- `/src/components/ui`: Shadcn reusable primitive components.
- `/src/components/layout`: Global layout sections (Navbar, Footer, Mega Menu).
- `/src/components/home`: Sections specific to the home page (Hero, Statistics, etc).
- `/public`: Static assets including the brand logo.
