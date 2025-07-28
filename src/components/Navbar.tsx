'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-600">Christopher Chaffin</span>
        <div className="space-x-6">
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname === href ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}