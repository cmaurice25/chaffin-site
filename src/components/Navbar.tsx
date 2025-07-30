'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { navItems } from '@/config/navItems';
import MobileMenu from './MobileMenu';
import { getLinkClasses } from '@/utils/navHelpers';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  // --- Path & Previous Path ---
  const pathname = usePathname();
  const previousPath = useRef(pathname);

  // --- State ---
  const [isOpen, setIsOpen] = useState(false);
  const [scrollFactor, setScrollFactor] = useState(0);
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
      if (storedTheme) return storedTheme;
      return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    }
    return "dark";
  });

  // --- Effects ---
  // Scroll to top only when navigating to home
  useEffect(() => {
    const wasHome = previousPath.current === "/";
    previousPath.current = pathname;
    if (pathname === "/" && !wasHome) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname]);

  // Theme management
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll factor for opacity/blur
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 200;
      setScrollFactor(Math.min(window.scrollY / maxScroll, 1));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Helpers ---
  const opacity = 0.2 + scrollFactor * 0.8;
  const blur = 2 + scrollFactor * 4;
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      style={{
        backgroundColor: `rgba(var(--navbar-bg), ${opacity})`
      }}
      className={`fixed top-0 left-0 w-full border-b border-white/10 z-50 transition-all duration-300 rounded-b-xl ${
        scrollFactor > 0.5 ? "shadow-[0_2px_10px_rgba(0,0,0,0.6)]" : "shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between py-7 md:py-7 px-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-400">
          LOGO
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={getLinkClasses(link.href, pathname)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Menu */}
        <div className="flex items-center space-x-4">
          <Link
            href="/contact"
            className="hidden md:inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition"
          >
            Book a Call
          </Link>

          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-green-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} pathname={pathname} />
    </header>
  );
}