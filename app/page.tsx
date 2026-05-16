"use client";

import Header from "../src/components/Header";
import Sidebar from "../src/components/Sidebar";
import Dashboard from "../src/components/Dashboard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F19] text-white flex">

      <Sidebar />

      <div className="flex-1">
        <div className="max-w-7xl mx-auto p-6">

          <Header />

          <Dashboard />

        </div>
      </div>

    </main>
  );
}