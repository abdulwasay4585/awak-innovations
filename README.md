# AWAK Innovations

Premium, modern, and conversion-focused web application for **Awak Innovations** — a digital agency and software house specializing in AI, web, mobile, cloud solutions, and enterprise software.

## Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org) (App Router) with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components built on top of [Base UI](https://base-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: Lucide React

### Backend
- **Framework**: Node.js & Express.js
- **Language**: TypeScript
- **Database ORM**: Prisma (Ready for PostgreSQL/Neon/Supabase)
- **Features**: API routing, Form Validation, CORS, and Data Persistence logic.

---

## Architecture & Code Organization

This repository uses a monorepo structure separating the frontend and backend to allow distinct deployments while maintaining a unified codebase.

- `/frontend`
  - `/src/app`: Next.js App Router layout and all application pages.
  - `/src/components/ui`: Custom accessible primitive components.
  - `/src/components/layout`: Global layout sections (Navbar, Footer).
  - `/src/components/home`: Sections specific to the home page (Hero, Services, Portfolio, etc.).
  - `/public`: Static assets including brand logos.

- `/backend`
  - `/src/index.ts`: The main Express server entry point handling API routes.
  - `/prisma/schema.prisma`: Database schema definitions.

---

## Design System

The application strictly adheres to the Awak Innovations brand identity using a modern, professional **Light Theme**.
We intentionally avoid dark modes to maintain a crisp, enterprise-focused, B2B aesthetic.

- **Primary Color**: Awak Sky Blue (`#2096D5`)
- **Background**: Clean White (`#FFFFFF`) / Light Gray (`#F8FAFC`)
- **Typography**: Inter (via `next/font`)

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### 1. Running the Backend

The Express API is located in the `backend` directory.

```bash
cd backend
npm install

# Set up your environment variables
# Note: Never commit your actual .env file. Use .env.example as a template.
cp .env.example .env

# Generate Prisma client
npx prisma generate

# Start the development server (runs on port 5000)
npm run dev
```

**Environment Variables Needed:**
- `DATABASE_URL`: Your PostgreSQL connection string.
- `PORT`: 5000

### 2. Running the Frontend

The Next.js application is located in the `frontend` directory.

```bash
cd frontend
npm install

# Start the development server with Turbopack (runs on port 3000)
npm run dev
```

**Environment Variables Needed:**
Create a `.env.local` file in the `frontend` directory.
- `NEXT_PUBLIC_API_URL`: `http://localhost:5000/api` (for local development)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The frontend will automatically route form submissions (Contact, Newsletter) to your local backend.

---

## Deployment

The application is designed to be deployed as two separate web services:

1. **Backend**: Deploy the `/backend` directory to a Node.js environment (like Render, Heroku, or AWS). Ensure `DATABASE_URL` is set in the production environment.
2. **Frontend**: Deploy the `/frontend` directory to Vercel, Netlify, or Render. Set the `NEXT_PUBLIC_API_URL` environment variable to point to your live backend URL.
