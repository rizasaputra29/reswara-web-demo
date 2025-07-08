# CV Reswara Praptama - Admin Dashboard

A modern, functional admin dashboard for CV Reswara Praptama website with PostgreSQL database and real-time content management.

## Features

- 🔐 **Secure Authentication** - JWT-based login system with bcrypt password hashing
- 📊 **Live Dashboard** - Real-time statistics and content management
- 🎨 **Hero Content Management** - Update homepage hero section instantly
- 👥 **Team Management** - Add, edit, and remove team members
- ⚙️ **Company Settings** - Manage company information across the site
- 💾 **Database Integration** - PostgreSQL with Prisma ORM
- 🔄 **Real-time Updates** - Changes reflect immediately on the live website
- 📱 **Responsive Design** - Works perfectly on all devices

## Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/rizasaputra29/reswara-web-demo.git
cd reswara-web-demo
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Database Setup

#### Option A: Local PostgreSQL
1. Install PostgreSQL on your system
2. Create a database named `reswara_praptama`
3. Update `.env` with your database credentials:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/reswara_praptama?schema=public"
```

#### Option B: Cloud Database (Recommended)
Use a cloud PostgreSQL service like:
- **Supabase** (Free tier available)
- **Railway** (Free tier available)
- **Neon** (Free tier available)
- **PlanetScale** (MySQL alternative)

For Supabase:
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Get your database URL from Settings > Database
4. Update `.env`:
```env
DATABASE_URL="postgresql://postgres:[password]@[host]:5432/postgres?schema=public"
```

### 4. Environment Variables
Create a `.env` file in the root directory:
```env
# Database
DATABASE_URL="your-postgresql-connection-string"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
JWT_SECRET="your-super-secret-jwt-key"

# Optional: Email & WhatsApp
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
WHATSAPP_API_URL=https://api.whatsapp.com
WHATSAPP_TOKEN=your-whatsapp-token
```

### 5. Database Migration & Seeding
```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed with default data
npm run db:seed
```

### 6. Run the Application
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Admin Access

### Default Credentials
- **Username:** `admin`
- **Password:** `admin123`

### Admin Dashboard URL
`http://localhost:3000/admin`

## Database Schema

The application uses the following main tables:
- `users` - Admin user accounts
- `hero_content` - Homepage hero section content
- `team_members` - Team member information
- `company_settings` - Company contact and general information
- `contacts` - Contact form submissions
- `portfolios` - Portfolio items
- `analytics` - Website analytics data

## Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server

# Database
npm run db:generate     # Generate Prisma client
npm run db:push         # Push schema to database
npm run db:seed         # Seed database with default data
npm run db:studio       # Open Prisma Studio (database GUI)
npm run db:reset        # Reset database (⚠️ Deletes all data)

# Other
npm run lint            # Run ESLint
```

## Admin Dashboard Features

### 1. Overview Tab
- Real-time statistics
- Recent activity
- System status

### 2. Hero Content Tab
- Update homepage title, description, and image
- Live preview of changes
- Instant website updates

### 3. Team Management Tab
- Add new team members
- Edit existing member information
- Delete team members
- Manage expertise tags

### 4. Settings Tab
- Update company information
- Contact details
- Social media links

### 5. Backup Tab
- Export all content as JSON
- Reset to default content

## Security Features

- 🔒 **Password Hashing** - bcrypt with salt rounds
- 🎫 **JWT Authentication** - Secure token-based auth
- 🍪 **HTTP-Only Cookies** - Secure token storage
- 🛡️ **Route Protection** - Admin-only API endpoints
- ✅ **Input Validation** - Server-side validation

## Technology Stack

- **Frontend:** Next.js 13, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** JWT with bcrypt
- **UI Components:** Radix UI + shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- **Netlify** - For static deployment
- **Railway** - Full-stack deployment with database
- **Heroku** - Traditional deployment

## Troubleshooting

### Database Connection Issues
1. Verify your `DATABASE_URL` is correct
2. Ensure your database server is running
3. Check firewall settings for cloud databases

### Authentication Issues
1. Verify `JWT_SECRET` is set in `.env`
2. Clear browser cookies and localStorage
3. Check if admin user exists in database

### Build Issues
1. Run `npm run db:generate` before building
2. Ensure all environment variables are set
3. Check TypeScript errors with `npm run lint`

## Support

For issues and questions:
1. Check the troubleshooting section above
2. Review the database logs in Prisma Studio
3. Check browser console for client-side errors
4. Verify API responses in Network tab

## License

This project is private and proprietary to CV Reswara Praptama.