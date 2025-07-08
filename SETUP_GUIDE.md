# PostgreSQL Integration Guide

## 🗄️ Database Setup Options

### Option 1: Cloud PostgreSQL (Recommended)

#### **Supabase (Free Tier Available)**
1. Go to [supabase.com](https://supabase.com)
2. Create a new account and project
3. Go to Settings > Database
4. Copy the connection string
5. Update your `.env` file:

```env
DATABASE_URL="postgresql://postgres:[YOUR-PASSWORD]@[YOUR-HOST]:5432/postgres?schema=public"
```

#### **Railway (Free Tier Available)**
1. Go to [railway.app](https://railway.app)
2. Create a new project
3. Add PostgreSQL service
4. Copy the connection string from Variables tab
5. Update your `.env` file

#### **Neon (Free Tier Available)**
1. Go to [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Update your `.env` file

### Option 2: Local PostgreSQL

#### **Install PostgreSQL Locally**

**Windows:**
1. Download from [postgresql.org](https://www.postgresql.org/download/windows/)
2. Run installer and set password for `postgres` user
3. Create database: `createdb reswara_praptama`

**macOS:**
```bash
# Using Homebrew
brew install postgresql
brew services start postgresql
createdb reswara_praptama
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo -u postgres createdb reswara_praptama
```

## 🔧 Environment Configuration

Create a `.env` file in your project root:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/reswara_praptama?schema=public"

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here-make-it-long-and-random"
JWT_SECRET="your-super-secret-jwt-key-also-long-and-random"

# Optional: Email Configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Optional: WhatsApp API
WHATSAPP_API_URL=https://api.whatsapp.com
WHATSAPP_TOKEN=your-whatsapp-token
```

## 🚀 Database Setup Commands

Run these commands in order:

```bash
# 1. Install dependencies (if not already done)
npm install

# 2. Generate Prisma client
npm run db:generate

# 3. Push schema to database (creates tables)
npm run db:push

# 4. Seed database with default data
npm run db:seed

# 5. (Optional) Open Prisma Studio to view data
npm run db:studio
```

## 🔍 Verify Setup

1. **Check database connection:**
```bash
npm run db:studio
```
This opens a web interface to view your database.

2. **Start the application:**
```bash
npm run dev
```

3. **Test admin login:**
   - Go to `http://localhost:3000/admin`
   - Username: `admin`
   - Password: `admin123`

## 🛠️ Troubleshooting

### Connection Issues

**Error: "Can't reach database server"**
- Check if PostgreSQL is running
- Verify DATABASE_URL is correct
- Check firewall settings for cloud databases

**Error: "Database does not exist"**
- Create the database manually
- For local: `createdb reswara_praptama`
- For cloud: Usually auto-created

**Error: "Authentication failed"**
- Check username/password in DATABASE_URL
- For cloud databases, verify credentials in dashboard

### Schema Issues

**Error: "Table doesn't exist"**
```bash
npm run db:push
```

**Error: "Prisma client not generated"**
```bash
npm run db:generate
```

**Reset everything:**
```bash
npm run db:reset
npm run db:seed
```

## 📊 Database Schema Overview

Your database will have these tables:
- `users` - Admin accounts
- `hero_content` - Homepage hero section
- `team_members` - Team member information
- `company_settings` - Company details
- `contacts` - Contact form submissions
- `portfolios` - Portfolio items
- `analytics` - Website analytics

## 🔐 Security Notes

1. **Never commit `.env` file** - It's in `.gitignore`
2. **Use strong passwords** for database
3. **Use HTTPS in production**
4. **Regularly backup your database**

## 🌐 Production Deployment

### Vercel + Supabase (Recommended)
1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables for Production
```env
DATABASE_URL="your-production-database-url"
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="production-secret-key"
JWT_SECRET="production-jwt-secret"
```

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Verify all environment variables are set
3. Check database logs in your cloud provider
4. Use `npm run db:studio` to inspect data