# 🚀 Smart City Dashboard

A modular, responsive React application built with Vite and Tailwind CSS. Features include reusable components, task management, API integration, theme switching, and sponsor-ready layout architecture.

## 🧱 Tech Stack

- ⚛️ React + Vite
- 🎨 Tailwind CSS
- 🧭 React Router
- 🧠 React Hooks (`useState`, `useEffect`, `useContext`)
- 💾 Custom Hook: `useLocalStorage`
- 🌗 Theme Context (Light/Dark Mode)
- 🔄 JSONPlaceholder API Integration

---

## 📦 Features

- ✅ Reusable UI components: `Button`, `Card`, `Navbar`, `Footer`, `Layout`
- 🧠 Task Manager with add, complete, delete, filter, and persistent storage
- 🔍 API data grid with search, pagination, and error/loading states
- 🌗 Theme switcher using Tailwind's dark mode
- 📱 Responsive design for mobile, tablet, and desktop
- ✨ Custom transitions and animations

---

## 📁 Project Structure


src/ ├── assets/           # Static files ├── components/       # Reusable UI components ├── context/          # Theme context ├── pages/            # Route-based views ├── utils/            # Custom hooks and helpers ├── App.jsx           # Main app component ├── main.jsx          # Entry point └── index.css         # Tailwind styles


---

## 🚦 Getting Started

```bash
# Create project
npm create vite@latest my-app -- --template react
cd my-app

# Install dependencies
npm install

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Start dev server
npm run dev

🔌 API Integration

Uses JSONPlaceholder to fetch and display posts with search and pagination.

🧪 Development Notes

Tailwind dark mode is configured using class strategy

Theme context wraps the app in main.jsx

All components are customizable via props

Pagination is client-side for simplicity
