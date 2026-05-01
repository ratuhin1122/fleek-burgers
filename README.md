<p align="center">
  <img src="public/images/hero-icon.svg" width="120" alt="Burgers On Fleek Logo" />
</p>

<h1 align="center">🍔 Burgers On Fleek</h1>

<p align="center">
  <strong>Premium Halal Gourmet Burger Restaurant — Web Application</strong>
</p>

<p align="center">
  A modern, full-stack restaurant web application built with <strong>Laravel 12</strong>, <strong>React 19</strong>, and <strong>Inertia.js</strong>.<br />
  Featuring a cinematic landing page, dynamic menu system, admin dashboard, and complete authentication — all 100% Halal.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Laravel-12-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel 12" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4" />
  <img src="https://img.shields.io/badge/Inertia.js-2.0-9553E9?style=for-the-badge&logo=inertiajs&logoColor=white" alt="Inertia.js" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge" alt="MIT License" />
</p>

---

## ✨ Overview

**Burgers On Fleek** is the official web platform for a premium halal burger restaurant located at **135 Harwood Ave N, Ajax, ON, Canada**. The application delivers an immersive, cinematic browsing experience with full-screen background videos, smooth animations, and a dark luxury aesthetic — all built on a powerful Laravel + React stack.

> 🕌 **100% Halal** — We exclusively serve hand-slaughtered halal meat sourced from **St. Helen's** and **Sargent Farms**.

---

## 🎯 Features

### 🏠 Customer-Facing

| Feature | Description |
|---|---|
| **Cinematic Landing Page** | Full-screen looping video background with parallax overlay, animated hero typography, and gradient transitions |
| **Dynamic Menu System** | Database-driven menu with category filtering (Beef, Chicken, Mutton, Vegetarian, Sides), animated card transitions via Framer Motion |
| **Halal Policy Page** | Dedicated page showcasing halal commitment, meat provider information, and contact details |
| **Top Sellers Showcase** | Interactive product cards with hover-tilt animations and glassmorphism effects |
| **Customer Reviews** | Testimonial section with avatar integration, star ratings, and hover micro-animations |
| **Online Ordering** | Pickup and delivery ordering integration |
| **Responsive Design** | Fully responsive across mobile, tablet, and desktop with mobile-first approach |
| **Dark Luxury Theme** | Premium dark mode UI with warm amber/orange accent palette (`#EFD9C3`, `#da8025`, `#A48E75`) |

### 🔐 Authentication System

| Feature | Description |
|---|---|
| **User Registration** | Full sign-up flow with email verification |
| **Login / Logout** | Secure session-based authentication via Laravel Fortify |
| **Two-Factor Authentication (2FA)** | TOTP-based 2FA with recovery codes, setup modal, and confirmation |
| **Password Reset** | Email-based forgot password and reset password flow |
| **Email Verification** | Email verification enforcement for authenticated users |
| **Rate Limiting** | Login and 2FA endpoints are rate-limited (5 requests/minute) |

### 🛡️ Admin Panel

| Feature | Description |
|---|---|
| **Admin Authentication** | Separate admin login system with dedicated `admins` table |
| **Menu Item CRUD** | Create, read, update, and delete menu items through a custom admin dashboard |
| **Image Upload** | Upload and manage menu item images with automatic storage handling |
| **Category Management** | Categorize items as Beef, Chicken, Vegetarian, Mutton, or Sides |
| **Route Protection** | Admin routes protected by custom `CheckAdmin` middleware |

### ⚙️ Settings Dashboard

| Feature | Description |
|---|---|
| **Profile Management** | Update name and email with validation |
| **Password Update** | Change password with current password confirmation |
| **Appearance Settings** | Theme/appearance customization |
| **Two-Factor Settings** | Enable, disable, and manage 2FA from the settings panel |
| **Account Deletion** | Self-service account deletion with confirmation |

---

## 🏗️ Tech Stack

### Backend

| Technology | Version | Purpose |
|---|---|---|
| **PHP** | ^8.2 | Runtime |
| **Laravel** | 12 | Backend framework |
| **Laravel Fortify** | ^1.30 | Authentication scaffolding |
| **Laravel Sanctum** | ^4.0 | API token & SPA authentication |
| **Laravel Wayfinder** | ^0.1.9 | Type-safe route generation |
| **Inertia.js (Server)** | ^2.0 | Server-side adapter for SPA routing |
| **SQLite** | — | Default database (configurable) |

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| **React** | 19 | UI library |
| **TypeScript** | 5.7 | Type-safe JavaScript |
| **Inertia.js (Client)** | ^2.3.7 | Client-side SPA routing without API |
| **Tailwind CSS** | 4.0 | Utility-first CSS framework |
| **Vite** | 7 | Build tool & dev server |
| **Framer Motion** | ^12.34.3 | Animation library |
| **Radix UI** | Various | Accessible headless UI primitives |
| **Lucide React** | ^0.475.0 | Icon library |
| **React Icons** | ^5.5.0 | Additional icon library |
| **class-variance-authority** | ^0.7.1 | Component variant management |

### DevOps & Tooling

| Tool | Purpose |
|---|---|
| **Pest PHP** | Testing framework (feature + unit tests) |
| **Laravel Pint** | PHP code style fixer (PSR-12) |
| **ESLint** | JavaScript/TypeScript linting |
| **Prettier** | Code formatting (with Tailwind plugin) |
| **GitHub Actions** | CI/CD for linting and tests |
| **Laravel Sail** | Docker development environment |
| **React Compiler** | Babel plugin for automatic React optimizations |

---

## 📂 Project Structure

```
fleek/
├── app/
│   ├── Actions/               # Fortify actions (CreateNewUser, ResetPassword)
│   ├── Concerns/              # Shared traits
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── AdminAuthController.php      # Admin login/logout
│   │   │   ├── AdminMenuController.php      # Menu CRUD operations
│   │   │   └── Settings/                    # User settings controllers
│   │   ├── Middleware/
│   │   │   ├── CheckAdmin.php               # Admin route protection
│   │   │   ├── HandleAppearance.php         # Theme handling
│   │   │   └── HandleInertiaRequests.php    # Inertia shared data
│   │   └── Requests/          # Form request validation
│   ├── Models/
│   │   └── User.php           # User Eloquent model
│   ├── Providers/
│   │   └── FortifyServiceProvider.php  # Auth views & rate limiting
│   └── Repositories/         # Repository pattern layer
├── database/
│   ├── migrations/
│   │   ├── create_users_table.php
│   │   ├── create_cache_table.php
│   │   ├── create_jobs_table.php
│   │   ├── add_two_factor_columns_to_users_table.php
│   │   ├── create_admins_table.php
│   │   ├── create_menu_items_table.php
│   │   └── create_personal_access_tokens_table.php
│   ├── factories/             # Model factories for testing
│   └── seeders/               # Database seeders
├── resources/
│   ├── css/                   # Global styles & Tailwind entry
│   └── js/
│       ├── app.tsx            # Inertia app bootstrap
│       ├── ssr.tsx            # Server-side rendering entry
│       ├── pages/
│       │   ├── welcome.tsx          # Landing page (cinematic hero)
│       │   ├── menu.tsx             # Dynamic menu with category filter
│       │   ├── Halal.tsx            # Halal policy page
│       │   ├── dashboard.tsx        # User dashboard
│       │   ├── auth/                # Login, Register, 2FA, Reset, etc.
│       │   ├── settings/            # Profile, Password, Appearance, 2FA
│       │   └── Admin/
│       │       ├── Dashboard.tsx     # Admin menu management
│       │       ├── ItemForm.tsx      # Create/edit menu items
│       │       └── Login.tsx         # Admin login page
│       ├── components/
│       │   ├── Header.tsx           # Public navigation header
│       │   ├── Footer.tsx           # Public footer
│       │   └── ui/                  # 25+ Radix-based UI components
│       ├── layouts/
│       │   ├── home/                # Public-facing layout
│       │   ├── app/                 # Authenticated user layout
│       │   ├── auth/                # Auth pages layout
│       │   └── settings/            # Settings layout
│       ├── hooks/                   # Custom React hooks
│       ├── lib/                     # Utility functions
│       ├── types/                   # TypeScript type definitions
│       └── wayfinder/               # Auto-generated route helpers
├── routes/
│   ├── web.php                # Web routes (public + admin)
│   ├── api.php                # API routes (Sanctum protected)
│   ├── settings.php           # Settings routes
│   └── console.php            # Artisan commands
├── public/
│   └── images/                # Static assets (videos, burger images)
├── tests/
│   ├── Feature/               # Feature/integration tests
│   └── Unit/                  # Unit tests
├── .github/workflows/
│   ├── lint.yml               # Automated linting CI
│   └── tests.yml              # Automated test CI
└── config/                    # Laravel configuration files
```

---

## 🗄️ Database Schema

### `users`
Standard Laravel users table with two-factor authentication columns.

### `admins`
| Column | Type | Description |
|---|---|---|
| `id` | `bigint` | Primary key |
| `email` | `string` | Unique admin email |
| `password` | `string` | Hashed password |
| `timestamps` | — | `created_at` / `updated_at` |

### `menu_items`
| Column | Type | Description |
|---|---|---|
| `id` | `bigint` | Primary key |
| `name` | `string` | Item name |
| `description` | `text` (nullable) | Item description |
| `price` | `decimal(8,2)` | Price in CAD |
| `image` | `string` (nullable) | Image file path |
| `category` | `string` | One of: `beef`, `chicken`, `vegetarian`, `mutton`, `sides` |
| `timestamps` | — | `created_at` / `updated_at` |

### `personal_access_tokens`
Laravel Sanctum API tokens table.

---

## 🚀 Getting Started

### Prerequisites

- **PHP** >= 8.2
- **Composer** >= 2.x
- **Node.js** >= 18.x
- **npm** >= 9.x

### Quick Setup

```bash
# 1. Clone the repository
git clone https://github.com/ratuhin1122/fleek-burgers.git
cd fleek-burgers

# 2. Run the automated setup (installs deps, generates key, runs migrations, builds assets)
composer setup
```

### Manual Setup

```bash
# 1. Clone the repository
git clone https://github.com/ratuhin1122/fleek-burgers.git
cd fleek-burgers

# 2. Install PHP dependencies
composer install

# 3. Install Node.js dependencies
npm install

# 4. Configure environment
cp .env.example .env
php artisan key:generate

# 5. Run database migrations
php artisan migrate

# 6. Create storage symlink (for uploaded images)
php artisan storage:link

# 7. Build frontend assets
npm run build
```

### Development Server

```bash
# Start all services concurrently (Laravel server + Queue worker + Vite dev server)
composer dev
```

This starts:
- 🌐 **Laravel Server** at `http://localhost:8000`
- 📦 **Queue Worker** for background jobs
- ⚡ **Vite Dev Server** with HMR at `http://localhost:5173`

### SSR Mode (Server-Side Rendering)

```bash
composer dev:ssr
```

---

## 🧪 Testing

```bash
# Run all tests (lint + Pest)
composer test

# Run only Pest tests
php artisan test

# Run only lint checks
composer test:lint

# Fix code style
composer lint
```

### Frontend Linting & Formatting

```bash
# ESLint
npm run lint

# Prettier check
npm run format:check

# Prettier fix
npm run format

# TypeScript type checking
npm run types
```

---

## 🔑 API Endpoints

### Public Routes

| Method | URI | Description |
|---|---|---|
| `GET` | `/` | Landing page |
| `GET` | `/menu` | Menu page (rate limited: 60/min) |
| `GET` | `/halal` | Halal policy page |

### Authentication Routes (Fortify)

| Method | URI | Description |
|---|---|---|
| `GET/POST` | `/login` | User login |
| `GET/POST` | `/register` | User registration |
| `POST` | `/logout` | User logout |
| `GET/POST` | `/forgot-password` | Request password reset |
| `GET/POST` | `/reset-password` | Reset password |
| `GET/POST` | `/email/verify` | Email verification |
| `GET/POST` | `/two-factor-challenge` | 2FA challenge |

### Admin Routes (`/admin`)

| Method | URI | Description |
|---|---|---|
| `GET` | `/admin/login` | Admin login page |
| `POST` | `/admin/login` | Admin login (rate limited: 5/min) |
| `POST` | `/admin/logout` | Admin logout |
| `GET` | `/admin/dashboard` | Admin dashboard (menu list) |
| `GET` | `/admin/items/create` | Create menu item form |
| `POST` | `/admin/items` | Store new menu item |
| `GET` | `/admin/items/{id}/edit` | Edit menu item form |
| `PUT` | `/admin/items/{id}` | Update menu item |
| `DELETE` | `/admin/items/{id}` | Delete menu item |

### API Routes (Sanctum Protected)

| Method | URI | Description |
|---|---|---|
| `GET` | `/api/user` | Get authenticated user |

---

## 🎨 Design System

The application follows a **dark luxury** aesthetic with a warm amber/orange palette:

| Token | Hex | Usage |
|---|---|---|
| **Cream** | `#EFD9C3` | Primary text, headings |
| **Amber** | `#da8025` | Accent, CTAs, active states |
| **Orange** | `#E4B381` | Secondary accent |
| **Muted Gold** | `#A48E75` | Body text, descriptions |
| **Warm Gray** | `#927E68` | Subtle text, dividers |
| **Dark Base** | `#1b1b18` | Background |
| **Deep Black** | `#0a0a0a` | Alternate background |

### UI Component Library

25+ reusable components built on **Radix UI** primitives:

`Alert` · `Avatar` · `Badge` · `Breadcrumb` · `Button` · `Card` · `Checkbox` · `Collapsible` · `Dialog` · `Dropdown Menu` · `Icon` · `Input` · `Input OTP` · `Label` · `Navigation Menu` · `Select` · `Separator` · `Sheet` · `Sidebar` · `Skeleton` · `Spinner` · `Toggle` · `Toggle Group` · `Tooltip`

---

## 🔒 Security

- **CSRF Protection** — All forms are CSRF-protected via Laravel middleware
- **Rate Limiting** — Login (5/min), 2FA (5/min), and menu page (60/min) are rate-limited
- **Admin Isolation** — Separate admin authentication system with dedicated middleware
- **Sanctum SPA Auth** — Stateful cookie-based authentication for the SPA
- **Password Hashing** — Bcrypt with 12 rounds
- **Input Validation** — Server-side validation on all form submissions
- **Image Validation** — Upload size limit (2MB) with mime-type checking

---

## 📜 CI/CD

GitHub Actions workflows are configured for:

- **`lint.yml`** — Runs PHP Pint and ESLint on every push/PR
- **`tests.yml`** — Runs Pest PHP tests on every push/PR

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code passes all linting and testing checks before submitting.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

- **Restaurant**: Burgers On Fleek
- **Address**: 135 Harwood Ave N, Ajax, ON, Canada
- **Phone**: +1 (905) 427-4377
- **Email**: [eat@burgersonfleek.ca](mailto:eat@burgersonfleek.ca)

---

<p align="center">
  <sub>Built with ❤️ and 🍔 — est. 2019</sub>
</p>
