# 💱 Fancy Swap Form – React + TypeScript + Vite

A beautiful and interactive currency swap form built with modern frontend technologies. Inspired by [Uniswap](https://uniswap.org/), this project demonstrates clean UI design, token swapping logic, and animation effects – all within a professional frontend architecture.

### 🚀 Live Demo

🔗 [https://fancy-swap-form-nicl.vercel.app/](https://fancy-swap-form-nicl.vercel.app/)

---

## ⚙️ Tech Stack

* **React 18** + **TypeScript**
* **Vite** – lightning-fast build tool
* **Tailwind CSS** – utility-first styling
* **Headless UI** – accessible UI components
* **Heroicons** – SVG icon system
* **SWR** – data fetching library
* **Storybook** – component explorer
* **Vercel** – deployment platform

---

## 📦 Installation & Development

### 1. Clone the project

```bash
git clone https://github.com/VinhNguyen0301/fancy-swap-form.git
cd fancy-swap-form
```

### 2. Install dependencies

```bash
yarn
```

### 3. Start the development server

```bash
yarn dev
```

Visit: `http://localhost:5173`

---

## 📕 Storybook – Component Explorer

```bash
yarn storybook
```

Opens Storybook at `http://localhost:6006`

---

## 🏗 Build for Production

```bash
yarn build
```

Output will be generated in the `dist/` directory.

To preview the production build locally:

```bash
yarn preview
```

---

## 📁 Folder Structure Overview

```
fancy-swap-form/
├── public/                         # Static assets (includes token icons)
│   └── assets/tokens/             # Local token SVG logos
├── src/
│   ├── components/
│   │   ├── atoms/                 # Basic UI elements
│   │   ├── molecules/             # Combined smaller components
│   │   ├── organisms/             # Logical sections like SwapForm
│   │   ├── templates/             # Page layout
│   ├── hooks/                     # Custom React hooks
│   ├── utils/                     # Utility functions (e.g., price calculator)
│   ├── types/                     # TypeScript type definitions
│   └── index.tsx                  # Entry point
├── .storybook/                    # Storybook configuration
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## ✅ Features

* 🔁 Swap between any two tokens (with validation)
* ⬆️ Reverse Buy/Sell tokens instantly
* 💵 Live price conversion from JSON API
* 🔍 Modal with search and scrollable token list
* 🧪 Integrated Storybook component system
* 🌌 Animated particle background (Uniswap-style)
* ✅ Clean design & responsive layout

---

## 📝 Notes

* Token price API: [`https://interview.switcheo.com/prices.json`](https://interview.switcheo.com/prices.json)
* Token logos are served from local folder `/public/assets/tokens`
* Project deployed on Vercel with Vite as framework

---

## 📜 License

This project is open-source and created for educational & technical evaluation purposes only.
