# 🚀 Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 15 and TypeScript, showcasing my skills, projects, and experience as a full-stack developer.

## ✨ Features

- **🌓 Dark/Light Mode Toggle** - Seamless theme switching with `next-themes`
- **📱 Fully Responsive Design** - Optimized for all device sizes
- **⚡ Modern Tech Stack** - Built with Next.js 15, TypeScript, and Tailwind CSS
- **🎨 Beautiful UI Components** - Leveraging shadcn/ui and Radix UI primitives
- **🖥️ Interactive Terminal** - Custom terminal component with ASCII art and system info
- **📂 Project Showcase** - Detailed project cards with live previews and source code links
- **💼 Skills Section** - Tech stack visualization with icons and badges
- **📝 Blog Integration** - Ready for content management
- **🔗 Social Links** - Direct links to GitHub, LinkedIn, and other profiles

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **Framer Motion** - Smooth animations

### Development Tools

- **pnpm** - Fast, disk space efficient package manager
- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

### UI Components

- Form handling with `react-hook-form` and `zod` validation
- Interactive components like carousels, dialogs, and tooltips
- Responsive layout components
- Custom themed components

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build the application
pnpm build

# Start production server
pnpm start

# Or preview the build
pnpm preview
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (home)/            # Home page group
│   │   ├── _components/   # Page-specific components
│   │   │   ├── about.tsx       # About section
│   │   │   ├── skills.tsx      # Skills showcase
│   │   │   ├── proof-of-work.tsx # Projects gallery
│   │   │   ├── blogs.tsx       # Blog section
│   │   │   └── terminal.tsx    # Interactive terminal
│   │   └── page.tsx       # Home page
│   ├── blog/              # Blog pages
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/                # shadcn/ui components
│   ├── header.tsx         # Site header
│   ├── footer.tsx         # Site footer
│   └── theme-provider.tsx # Theme context
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and constants
│   ├── constants.ts       # ASCII art and system info
│   ├── utils.ts          # Helper functions
│   └── types.ts          # TypeScript types
└── styles/
    └── globals.css        # Global styles
```

## 🌟 Featured Projects

### 1. **Shafei** - Vehicle Management Platform

- **Description**: Full-stack vehicle management application for car registration and service tracking
- **Tech Stack**: Modern monorepo architecture with scalable technologies
- **Live Demo**: [shafei-web.vercel.app](https://shafei-web.vercel.app)

### 2. **Sputnik** - Learning Management System

- **Description**: Comprehensive online learning platform with video streaming, quizzes, and progress tracking
- **Tech Stack**: React, TypeScript, Hono, Prisma, PostgreSQL
- **Features**: Payment integration, course management, student progress tracking
- **Source Code**: [GitHub](https://github.com/abdalrahmanf2/sputnik)

### 3. **Casecobra** - Custom Phone Cases E-commerce

- **Description**: Modern e-commerce platform for custom phone case creation and purchase
- **Tech Stack**: Next.js, Tailwind CSS, PostgreSQL, Stripe
- **Features**: Product customization, payment processing, responsive design
- **Live Demo**: [casecobra-lake-iota.vercel.app](https://casecobra-lake-iota.vercel.app)
- **Source Code**: [GitHub](https://github.com/abdalrahmanf2/casecobra)

### 4. **PingPanda** - SaaS Landing Page

- **Description**: Modern SaaS landing page for real-time Discord notifications
- **Tech Stack**: Next.js, Tailwind CSS, PostgreSQL
- **Live Demo**: [ping-panda-beta-one.vercel.app](https://ping-panda-beta-one.vercel.app)
- **Source Code**: [GitHub](https://github.com/abdalrahmanf2/pingpanda)

## 🎨 Customization

### Themes

The site supports both dark and light themes. Theme switching is handled by `next-themes` with system preference detection.

### Colors and Styling

Customize the color scheme by modifying the CSS custom properties in `src/styles/globals.css`.

### Content

- Update personal information in `src/app/(home)/_components/about.tsx`
- Modify skills in `src/app/(home)/_components/skills.tsx`
- Add/edit projects in `src/app/(home)/_components/proof-of-work.tsx`
- Customize terminal info in `src/lib/constants.ts`

## 📜 Available Scripts

```bash
# Development
pnpm dev          # Start development server with Turbo
pnpm build        # Build for production
pnpm start        # Start production server
pnpm preview      # Build and start production server

# Code Quality
pnpm lint         # Run ESLint
pnpm lint:fix     # Fix ESLint issues
pnpm check        # Run linting and type checking
pnpm typecheck    # Type checking only

# Formatting
pnpm format:check # Check code formatting
pnpm format:write # Format code with Prettier
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

Feel free to reach out if you have any questions or suggestions!

- **Email**: [abdalrahman.vim@gmail.com]
- **LinkedIn**: [https://www.linkedin.com/in/abdalrahmanf2]
- **GitHub**: [https://github.com/abdalrahmanf2]

---

Built with ❤️ using Next.js and TypeScript
