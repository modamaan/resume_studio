# ResumeStudio



**Build ATS-Friendly Resumes in Minutes**

ResumeStudio is a modern SaaS platform that helps job seekers create professional, ATS-optimized resumes effortlessly. Import data from LinkedIn and GitHub, choose from beautiful templates, and land your dream job faster.

🌐 **Live Demo**: [resumestudio.vercel.app](https://resumestudio.vercel.app)

---

## ✨ Features

### Core Features

- 📝 **Smart Resume Builder** - Real-time preview with drag-and-drop sections
- 🎨 **4 ATS-Friendly Templates** - Default, Modern, GitHub Profile, and Google Search styles
- 🔗 **LinkedIn Integration** - Import your professional profile automatically
- 💻 **GitHub Integration** - Showcase your repositories and contributions
- 📊 **Resume Score** - Get instant feedback on your resume quality
- 🌓 **Theme Explorer** - Browse and preview all templates before choosing

### User Experience

- 🔐 **Secure Authentication** - Powered by Clerk (Google OAuth, Email, etc.)
- ⚡ **Auto-Save** - Never lose your work with automatic saving
- 📱 **Fully Responsive** - Works beautifully on desktop, tablet, and mobile
- 🎯 **Rich Text Editor** - Format your content with TipTap editor
- 🖼️ **PDF Export** - Download your resume as a professional PDF

### Admin & Support

- 👨‍💼 **Admin Dashboard** - Manage users, feedback, and bug reports
- 💬 **Feedback System** - Users can submit feedback directly
- 🐛 **Bug Reporting** - Built-in bug tracking with screenshots
- ☕ **Buy Me a Coffee** - Support the developer with integrated donations

---

## 🏗️ Tech Stack

### Frontend

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI, shadcn/ui
- **Animations**: Framer Motion
- **Rich Text**: TipTap Editor
- **Drag & Drop**: dnd-kit

### Backend & Services

- **Authentication**: Clerk
- **Database**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage
- **Deployment**: Vercel
- **Analytics**: Google Analytics

### Development

- **Validation**: Zod
- **API Docs**: Swagger UI
- **Code Quality**: ESLint, TypeScript Strict Mode

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Clerk account ([clerk.com](https://clerk.com))
- Supabase project ([supabase.com](https://supabase.com))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/modamaan/resume_studio.git
   cd resume_studio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Fill in your credentials:

   - **Clerk**: `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`
   - **Supabase**: `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
   - **App URL**: `NEXT_PUBLIC_APP_URL`

4. **Set up the database**

   Run these SQL files in your Supabase SQL Editor:

   - `supabase-full-migration.sql` - Main tables (users, resumes)
   - `supabase-feedback-bug-tables.sql` - Feedback and bug reports
   - `supabase-admin-setup.sql` - Admin authentication

5. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
resume_studio/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   ├── feedback/             # Feedback endpoints
│   │   ├── bug-report/           # Bug reporting
│   │   ├── admin/                # Admin APIs
│   │   └── users/                # User management
│   ├── resume-builder/           # Main resume builder
│   ├── themes/                   # Theme explorer page
│   ├── admin/                    # Admin dashboard
│   └── layout.tsx                # Root layout
├── components/                   # React components
│   ├── resume-templates/         # Resume templates
│   ├── resume-sections/          # Section components
│   ├── ui/                       # shadcn/ui components
│   └── buy-me-coffee-button.tsx  # Donation widget
├── lib/                          # Utilities
│   ├── template-config.ts        # Template metadata
│   ├── supabase.ts               # Supabase client
│   └── email-templates.ts        # Email templates
├── data/                         # Initial data
│   └── initial-user-data.ts      # Default resume data
└── types/                        # TypeScript types
```

---

## 🎨 Templates

ResumeStudio offers 4 professionally designed, ATS-friendly templates:

1. **Default** - Clean, traditional layout perfect for any industry
2. **Modern** - Contemporary design with subtle accents
3. **GitHub Profile** - Developer-focused with project highlights
4. **Google Search** - Unique search-result inspired layout

All templates are:

- ✅ ATS-compatible
- ✅ Fully customizable
- ✅ Mobile responsive
- ✅ Print-optimized

---

## 🗄️ Database Schema

### Core Tables

#### `users`

- User profiles synced with Clerk
- Email preferences
- Created/updated timestamps

#### `resumes`

- Complete resume data (JSONB)
- Template selection
- Configuration settings
- Soft delete support

#### `feedback`

- User feedback with ratings
- Mood indicators
- Admin replies

#### `bug_reports`

- Bug descriptions
- Screenshot uploads
- Status tracking

#### `admins`

- Admin authentication
- Dashboard access control

---

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub**

   ```bash
   git push origin main
   ```

2. **Import to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Add environment variables

3. **Configure Environment**

   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
   CLERK_SECRET_KEY
   NEXT_PUBLIC_SUPABASE_URL
   SUPABASE_SERVICE_ROLE_KEY
   NEXT_PUBLIC_APP_URL
   ```

4. **Deploy**
   - Vercel auto-deploys on every push to `main`

---

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # Run ESLint
npm run analyze      # Bundle analysis
```

### Admin Access

1. Run `supabase-admin-setup.sql` in Supabase
2. Default credentials:
   - Username: `admin`
   - Password: `admin123`
3. Access: `/admin/login`
4. **Change password immediately after first login!**

---

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m "Add amazing feature"`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- **Next.js** - React Framework
- **Clerk** - Authentication
- **Supabase** - Backend Platform
- **Vercel** - Hosting
- **shadcn/ui** - UI Components
- **Radix UI** - Accessible Primitives
- **TailwindCSS** - Styling

---

## 📧 Support

- **GitHub Issues**: [Report bugs](https://github.com/modamaan/resume_studio/issues)
- **Buy Me a Coffee**: Support development ☕
- **Email**: amaanprogramming@gmail.com

---

## 🗺️ Roadmap

- [x] Multiple resume templates
- [x] LinkedIn integration
- [x] GitHub integration
- [x] Theme explorer
- [x] Feedback system
- [x] Bug reporting
- [x] Admin dashboard
- [ ] AI-powered resume suggestions
- [ ] Cover letter generator
- [ ] Resume analytics
- [ ] Email sharing
- [ ] Template marketplace
- [ ] Interview prep tools

---

**Made with ❤️ by Mohamed Amaan**

⭐ Star this repo if you find it helpful!
