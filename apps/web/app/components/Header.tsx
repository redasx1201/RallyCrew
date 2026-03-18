"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-green-600 tracking-tight">
          RallyCrew
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
            Home
          </Link>
          <Link href="/friends" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
            Friends
          </Link>
          <Link href="/menu" className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
            Menu
          </Link>
          <Link
            href="/login"
            className="bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-green-700 transition-colors"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current mb-1" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          <Link href="/" className="text-sm font-medium text-gray-700 hover:text-green-600" onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <Link href="/friends" className="text-sm font-medium text-gray-700 hover:text-green-600" onClick={() => setMobileOpen(false)}>
            Friends
          </Link>
          <Link href="/menu" className="text-sm font-medium text-gray-700 hover:text-green-600" onClick={() => setMobileOpen(false)}>
            Menu
          </Link>
          <Link
            href="/login"
            className="bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full text-center hover:bg-green-700"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
