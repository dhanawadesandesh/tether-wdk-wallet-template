# Tether WDK Wallet Template

A modern, responsive crypto wallet dashboard built with Next.js, Zustand, Tailwind CSS, and Recharts.

This project was created as a modular frontend foundation for a Tether WDK-compatible wallet experience, focused on scalability, responsive UI architecture, and portfolio visualization.

---

# Live Demo

Live Application:
[https://tether-wdk-wallet-template-i7pc7yno6.vercel.app/](https://tether-wdk-wallet-template-i7pc7yno6.vercel.app/)

GitHub Repository:
[https://github.com/dhanawadesandesh/tether-wdk-wallet-template](https://github.com/dhanawadesandesh/tether-wdk-wallet-template)

---

# Features

## Wallet Dashboard

* Responsive crypto wallet interface
* Modern dark-theme fintech UI
* Wallet connection simulation
* Wallet address state handling

## Portfolio Analytics

* Portfolio overview chart
* Asset performance visualization
* Responsive analytics layout

## Asset Management

* Bitcoin, Ethereum, and Tether asset cards
* Portfolio balance tracking UI
* Token performance indicators
* Animated asset cards

## Transaction Section

* Recent transaction activity UI
* Transaction history layout
* Reusable transaction components

## UI/UX

* Responsive sidebar navigation
* Mobile-friendly layout
* Hover animations
* Modern dashboard structure
* Reusable component architecture

---

# Tech Stack

## Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

## State Management

* Zustand

## Charts & Animations

* Recharts
* Framer Motion
* Lucide React

## Deployment

* Vercel

---

# Project Structure

```bash
src/
 ├── components/
 │    ├── AssetCard.tsx
 │    ├── BalanceCard.tsx
 │    ├── Dashboard.tsx
 │    ├── PortfolioChart.tsx
 │    ├── Sidebar.tsx
 │    ├── TokenList.tsx
 │    └── TransactionList.tsx
 │
 ├── store/
 │    └── walletStore.ts
 │
 └── app/
      └── page.tsx
```

---

# Getting Started

## Clone Repository

```bash
git clone https://github.com/dhanawadesandesh/tether-wdk-wallet-template.git
```

## Install Dependencies

```bash
npm install
```

## Run Development Server

```bash
npm run dev
```

Application runs on:

```bash
http://localhost:3000
```

---

# Current Milestone (M1)

This milestone focuses on building the frontend architecture and wallet dashboard foundation.

## Completed

* Responsive wallet dashboard
* Portfolio analytics chart
* Wallet state management
* Asset portfolio UI
* Transaction activity section
* Reusable component structure
* GitHub repository setup
* Live deployment on Vercel

---

# Future Roadmap

## Phase 2

* MetaMask integration
* WalletConnect integration
* Real blockchain balance fetching
* Network switching
* Live token pricing

## Phase 3

* Tether WDK integration
* Authentication system
* Backend API integration
* Portfolio tracking database
* Push notifications
* Multi-chain support

---

# Screenshots


Example:

```md
![Dashboard Screenshot](./public/dashboard-preview.png)
```

---

# Goals

The goal of this project is to provide a scalable wallet dashboard template that can evolve into a fully integrated Tether WDK-compatible crypto wallet experience.

The architecture is designed to support future blockchain integrations while maintaining a clean and reusable frontend component system.

---

# Author

GitHub:
[https://github.com/dhanawadesandesh](https://github.com/dhanawadesandesh)

---

# License

This project is currently provided for educational and grant demonstration purposes.
