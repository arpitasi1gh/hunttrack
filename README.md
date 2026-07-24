# 🎯 HuntTrack – Smart Job Application Tracker

> A production-grade full-stack application that helps students and job seekers manage their job hunt pipeline with real-time analytics, secure authentication, and a responsive dark-mode interface.

🔗 **Live Demo:** [https://hunttrack-five.vercel.app](https://hunttrack-five.vercel.app)  
📊 **Backend API:** [https://hunttrack.onrender.com](https://hunttrack.onrender.com)

![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=for-the-badge)
![Deployment](https://img.shields.io/badge/Deployment-Vercel-000000?style=for-the-badge&logo=vercel)
![Backend](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)
![Database](https://img.shields.io/badge/Database-Neon-316192?style=for-the-badge&logo=postgresql&logoColor=white)

---

## 📌 Table of Contents

<table width="100%" border="0">
  <tr>
    <td width="33%">
      <ul>
        <li><a href="#-the-problem-i-solved">💡 The Problem I Solved</a></li>
        <li><a href="#-key-features">🚀 Key Features</a></li>
        <li><a href="#-tech-stack">🧑‍💻 Tech Stack</a></li>
        <li><a href="#-project-structure">📂 Project Structure</a></li>
        <li><a href="#-quick-start-local-development">⚙️ Quick Start</a></li>
      </ul>
    </td>
    <td width="33%">
      <ul>
        <li><a href="#-api-endpoints">📡 API Endpoints</a></li>
        <li><a href="#-testing-the-api-postman-collection">🧪 Testing the API</a></li>
        <li><a href="#%EF%B8%8F-system-design">🏗️ System Design</a></li>
        <li><a href="#-database-schema">📊 Database Schema</a></li>
        <li><a href="#-deployment">🚀 Deployment</a></li>
      </ul>
    </td>
    <td width="33%">
      <ul>
        <li><a href="#-environment-variables">🔐 Environment Variables</a></li>
        <li><a href="#-what-i-learned">📈 What I Learned</a></li>
        <li><a href="#%EF%B8%8F-future-improvements">🗺️ Future Improvements</a></li>
        <li><a href="#-connect-with-me">🤝 Connect With Me</a></li>
        <li><a href="#-license">📝 License</a></li>
      </ul>
    </td>
  </tr>
</table>

---

## 💡 The Problem I Solved

As a student navigating the job market, I found myself drowning in:

- 📊 **Multiple spreadsheets** tracking applications across different platforms.
- 📝 **Scattered notes** on company contacts, salaries, and next actions.
- ❌ **No clear visibility** into my application pipeline (Applied → Interview → Offer → Rejected).
- ⏰ **Wasted time** manually sorting and filtering to figure out what to do next.

**HuntTrack is my solution.** A single, unified dashboard to log, track, and analyze every job application—so I can focus on preparing for interviews instead of managing data.

> This is the **MVP (Minimum Viable Product)** for the "Track" phase. The upcoming **"Hunt" phase** will introduce AI-powered job discovery, auto-apply capabilities, and resume tailoring.

---

## 🚀 Key Features

| Feature | Description |
| :--- | :--- |
| **🔐 Secure Authentication** | JWT-based login/signup with password hashing (bcrypt) and protected routes. |
| **📋 Full CRUD Operations** | Create, Read, Update, and Delete job applications with all relevant fields. |
| **📊 Real-time Stats Dashboard** | Visual breakdown of application statuses (Total, Applied, Interviewing, Offer, Rejected). |
| **🔍 Dynamic Filter & Sort** | Filter by status and sort by date, company name, or salary. |
| **🌙 Dark Mode** | Toggle between light and dark themes (persisted in browser localStorage). |
| **📱 Fully Responsive** | Works seamlessly on desktop, tablet, and mobile devices. |
| **🎯 User-Friendly UI** | Clean, intuitive interface with Tailwind CSS and consistent design patterns. |
| **⚡ Optimized Performance** | Vite for fast builds, React 19 for efficient rendering, and Prisma for optimized queries. |

---

## 🧑‍💻 Tech Stack

### **Frontend**

| Technology | Badge | Purpose |
| :--- | :--- | :--- |
| **[React 19](https://react.dev/) + [Vite](https://vitejs.dev/)** | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) | Fast, modern component-based UI development with hot module replacement. |
| **[Redux Toolkit](https://redux-toolkit.js.org/)** | ![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white) | Global state management for theme preferences and authentication state. |
| **[React Router DOM](https://reactrouter.com/)** | ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) | Client-side routing with protected routes (Login, Dashboard, Add, Edit). |
| **[Tailwind CSS](https://tailwindcss.com/)** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) | Utility-first styling with dark mode support and responsive design. |
| **[Vercel](https://vercel.com/)** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) | Hosting and continuous deployment with automatic preview deployments. |

### **Backend**

| Technology | Badge | Purpose |
| :--- | :--- | :--- |
| **[Node.js](https://nodejs.org/) + [Express](https://expressjs.com/)** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) | REST API server with middleware support for CORS, Helmet, and JSON parsing. |
| **[PostgreSQL](https://www.postgresql.org/) ([Neon.tech](https://neon.tech/))** | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white) | Cloud relational database with automatic backups and branching. |
| **[Prisma ORM](https://www.prisma.io/)** | ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white) | Database modeling, migrations, and type-safe queries with auto-completion. |
| **[JWT](https://jwt.io/) + [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)** | ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white) | Secure authentication (stateless JWT) and password hashing (10 rounds). |
| **[Render](https://render.com/)** | ![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white) | Backend hosting with auto-deploy from GitHub and environment variable management. |

### **DevOps & Tooling**

| Technology | Badge | Purpose |
| :--- | :--- | :--- |
| **[Git](https://git-scm.com/) & [GitHub](https://github.com/)** | ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white) | Version control, code hosting, and CI/CD triggers. |
| **[Postman](https://www.postman.com/)** | ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) | API testing and documentation during development. |
| **[Vite Proxy](https://vitejs.dev/config/server-options.html#server-proxy)** | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) | Seamless local development API forwarding to avoid CORS issues. |
| **[Environment Variables](https://www.dotenv.org/)** | ![Env](https://img.shields.io/badge/Env-ECD53F?style=for-the-badge&logo=.env&logoColor=black) | Secure management of secrets (DATABASE_URL, JWT_SECRET, VITE_API_URL). |

---

## 📂 Project Structure

```text
hunttrack/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma          # Database schema definition
│   │   └── seed.js                # Seed script for sample data
│   ├── routes/
│   │   ├── auth.js                # Authentication endpoints (register, login)
│   │   └── applications.js        # CRUD endpoints for applications
│   ├── middleware/
│   │   └── verifyToken.js         # JWT verification middleware
│   ├── index.js                   # Server entry point (CORS, Helmet, Routes)
│   └── .env                       # Environment variables (DATABASE_URL, JWT_SECRET)
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx         # Navigation with Track/Hunt toggle
│   │   │   ├── UserMenu.jsx       # Profile dropdown with logout
│   │   │   ├── StatsBar.jsx       # Statistics cards with status filters
│   │   │   └── EmptyState.jsx     # Empty state for no applications
│   │   ├── redux/
│   │   │   ├── store.js           # Redux store configuration
│   │   │   ├── themeSlice.js      # Dark mode state management
│   │   │   └── authSlice.js       # Authentication state management
│   │   ├── pages/
│   │   │   ├── Login.jsx          # Login page
│   │   │   ├── Signup.jsx         # Signup page
│   │   │   ├── Dashboard.jsx      # Main dashboard with table view
│   │   │   ├── AddApplication.jsx # Add application form
│   │   │   └── EditApplication.jsx# Edit application form
│   │   ├── App.jsx                # Routing setup (React Router)
│   │   └── main.jsx               # Entry point with Redux Provider
│   ├── vercel.json                # SPA routing fix for Vercel
│   └── vite.config.js             # Vite configuration with proxy
└── README.md                      # Project documentation
```

---

## ⚙️ Quick Start (Local Development)

### 0. Prerequisites
- Node.js v18+ and npm
- PostgreSQL (local) or [Neon.tech](https://neon.com) account

### 1. Clone & Install
```bash
git clone https://github.com/arpitasi1gh/hunttrack.git
cd hunttrack
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file
cp .env.example .env
# Add DATABASE_URL and JWT_SECRET to .env

# Run migrations and seed sample data
npx prisma migrate dev --name init
npx prisma seed

# Start the server
node index.js
# Server runs at http://localhost:3000
```

### 2. Frontend Setup
```bash
cd frontend
npm install

# Create environment file for local development
cp .env.example .env.production.local
# Set VITE_API_URL=http://localhost:3000

# Start the dev server
npm run dev
# App runs at http://localhost:5173
```

### 3. Open Your Browser
Navigate to [http://localhost:5173](http://localhost:5173) to view the app.

---

## 📡 API Endpoints

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/v1/auth/register` | Create a new user | ❌ |
| **POST** | `/api/v1/auth/login` | Login and receive a JWT token | ❌ |
| **GET** | `/api/v1/applications` | Fetch all applications for logged-in user | ✅ (Bearer Token) |
| **GET** | `/api/v1/applications/:id` | Fetch a specific application | ✅ |
| **POST** | `/api/v1/applications` | Create a new application | ✅ |
| **PUT** | `/api/v1/applications/:id` | Update an existing application | ✅ |
| **DELETE** | `/api/v1/applications/:id` | Delete an application | ✅ |

---

## 🧪 Testing the API (Postman collection)

### 1. Register a user

```http
POST /api/v1/auth/register
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password123"
}
```

### 2. Login (get token)

```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "test@example.com",
  "password": "password123"
}
```

#### Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "cmr...",
    "email": "test@example.com"
  }
}
```

### 3. Authorize all subsequent requests

Add header: `Authorization: Bearer <your-token>`

### 4. Test CRUD operations

| Operation | Method | Endpoint | Body |
| :--- | :--- | :--- | :--- |
| **Create** | POST | `/api/v1/applications` | `{"companyName":"Google","position":"SDE","status":"Applied"}` |
| **Read All** | GET | `/api/v1/applications` | — |
| **Read One** | GET | `/api/v1/applications/:id` | — |
| **Update** | PUT | `/api/v1/applications/:id` | `{"status":"Interviewed"}` |
| **Delete** | DELETE | `/api/v1/applications/:id` | — |

---

## 🏗️ System Design

### High-level Architecture

```text
┌─────────────────────────────────┐       ┌──────────────────────────────────┐
│        Frontend (React)         │       │     Backend (Node/Express)       │
│                                 │       │                                  │
│  ┌───────────────────────────┐  │ HTTPS │  ┌────────────────────────────┐  │
│  │       Vercel (CDN)        │◄─┼───────┼─►│       Render (Cloud)       │  │
│  │       (Static Host)       │  │       │  │                            │  │
│  └───────────────────────────┘  │       │  │  ┌──────────────────────┐  │  │
│                                 │       │  │  │    Express Server    │  │  │
│  • Login/Signup UI              │       │  │  │      (REST API)      │  │  │
│  • Dashboard Table              │       │  │  └──────────┬───────────┘  │  │
│  • Add/Edit Forms               │       │  │             ▼              │  │
│  • Dark Mode Toggle             │       │  │  ┌──────────────────────┐  │  │
│  • Filter/Sort                  │       │  │  │     Prisma ORM       │  │  │
│  • User Menu/Logout             │       │  │  └──────────┬───────────┘  │  │
│                                 │       │  └─────────────┼──────────────┘  │
└─────────────────────────────────┘       │                ▼                 │
                                          │  ┌────────────────────────────┐  │
                                          │  │      Neon PostgreSQL       │  │
                                          │  │         (Cloud DB)         │  │
                                          │  └────────────────────────────┘  │
                                          └──────────────────────────────────┘
```

### Request Flow (Protected Route)

1. **User** $\rightarrow$ **Login** $\rightarrow$ Receives JWT Token
2. **User** $\rightarrow$ **Dashboard** $\rightarrow$ `GET /api/v1/applications`
3. **Request** $\rightarrow$ `verifyToken` Middleware $\rightarrow$ Validate JWT
4. **If Valid** $\rightarrow$ Route Handler $\rightarrow$ Prisma Query $\rightarrow$ Database
5. **Data** $\rightarrow$ JSON Response $\rightarrow$ Frontend Renders Table

---

## 📊 Database Schema

### Entity Relationship Diagram

```text
┌───────┐         ┌─────────────────┐
│ User  │ 1 ─── * │   Application   │
│       │         │                 │
│ id    │─────────│ userId (FK)     │
│ email │         │ companyName     │
│password│        │ position        │
│created│         │ status          │
│updated│         │ applicationDate │
└───────┘         │ salary          │
                  │ nextAction      │
                  │ website         │
                  │ contactName     │
                  │ notes           │
                  │ created/updated │
                  └─────────────────┘
```

### User Table

| Field | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | String | `@id @default(cuid())` | Primary key |
| `email` | String | `@unique` | User's email address |
| `passwordHash` | String | — | Bcrypt-hashed password |
| `createdAt` | DateTime | `@default(now())` | Account creation timestamp |
| `updatedAt` | DateTime | `@updatedAt` | Last update timestamp |

### Application Table

| Field | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | String | `@id @default(cuid())` | Primary key |
| `companyName` | String | — | Company name |
| `position` | String | — | Job position |
| `status` | String | — | Applied, Interviewed, Offer, Rejected |
| `applicationDate` | DateTime | `@default(now())` | Date of application |
| `salary` | String? | Optional | Salary information |
| `nextAction` | String? | Optional | Next step to take |
| `website` | String? | Optional | Company website URL |
| `contactName` | String? | Optional | Recruiter/contact name |
| `notes` | String? | Optional | Additional notes |
| `createdAt` | DateTime | `@default(now())` | Record creation timestamp |
| `updatedAt` | DateTime | `@updatedAt` | Last update timestamp |
| `userId` | String | Foreign Key | References User.id |

**Indexes**: `@@index([userId])` for faster queries on user applications.

**Relationships**:
* **One User** $\rightarrow$ **Many Applications**
* **Cascade Delete**: Deleting a user deletes all their applications

---

## 🚀 Deployment

- **Frontend**: [Vercel](https://vercel.com)   – Connected to GitHub, auto-deploys on `main` push.
- **Backend**: [Render](https://render.com)   – Connected to GitHub, auto-deploys on `main` push.
- **Database**: [Neon.tech](https://neon.com)   – PostgreSQL with automatic backups, branching, and connection pooling.

---

## 🔐 Environment variables

### Development (`.env`)

#### Backend (`backend/.env`)
```env
DATABASE_URL="postgresql://..."
JWT_SECRET="your-secret-key"
```

#### Frontend (`.env.production.local`)
```env
VITE_API_URL="http://localhost:3000"
```

### Production

| Variable | Value | Where to Set |
| :--- | :--- | :--- |
| `VITE_API_URL` | `https://onrender.com` | Vercel (Frontend) |
| `DATABASE_URL` | Your Neon PostgreSQL URL | Render (Backend) |
| `JWT_SECRET` | Your secret key | Render (Backend) |


---

## 📈 What I learned

Building **HuntTrack** taught me:

1. **Full-stack integration is harder than it looks**: Connecting a **React** frontend with a **Node.js** backend, managing **CORS**, and deploying two separate services took more effort than expected. The **Vite** proxy saved me during development, but production required environment variables and proper **CORS** configuration.
2. **Authentication is non-negotiable**: **JWT** + **bcrypt** + middleware taught me the importance of securing routes and managing sessions statelessly. I learned to never trust the client and always validate on the server.
3. **Dark mode is deceptively simple**: **Tailwind's** `dark:` classes made it easy, but managing the toggle across **Redux** and `localStorage` was a great lesson in state persistence. The `@custom-variant dark` directive in **Tailwind v4** was a game-changer.
4. **Deployment is where the real challenges begin**: **CORS**, environment variables, and **SPA** routing (**Vercel**) required debugging that I didn't anticipate during development. I learned to always test in a production-like environment early.
5. **Documentation matters**: Writing this **README** helped me reflect on the architecture, identify gaps, and communicate my decisions clearly. It also made me realize how much I actually learned.
6. **State management complexity**: **Redux Toolkit** simplified global state, but I learned to think carefully about what belongs in **Redux** (auth, theme) vs local state (form inputs, UI toggles).
7. **Database design**: Planning the schema upfront (`User` $\rightarrow$ `Applications` relationship) saved me from major refactoring later. Indexing `userId` was a simple but impactful optimization.
8. **Error handling**: I learned to never expose raw database errors to the client. Instead, I use `try/catch` blocks with user-friendly messages and detailed server-side logging.

---

## 🤝 Connect With Me

I built this to solve a real problem in my job search journey. If you're also navigating the job market or interested in collaborating on the "Hunt" phase, let's connect!

- **LinkedIn**: [Arpita Singh](https://linkedin.com/in/arpitasi1gh)
- **GitHub**: [arpitasi1gh](https://github.com)
- **Email**: arpitasi1gh@gmail.com

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## ⭐ Show Your Support

If you found this project helpful, learned something new, or just like the idea, please consider giving it a ⭐ on GitHub — it means a lot and helps others discover it!

---

**Built with ❤️ by Arpita Singh**  
*"Track your hunt. Hunt your track."*
