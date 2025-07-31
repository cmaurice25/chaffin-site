

import Link from 'next/link';
import { navItems } from '@/config/navItems';
import { getMobileLinkClasses } from '@/utils/navHelpers';

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  pathname: string;
}

export default function MobileMenu({ isOpen, setIsOpen, pathname }: MobileMenuProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`absolute top-full right-4 w-48 md:hidden border-8 border-gray-600 rounded-xl overflow-hidden shadow-lg transition-all duration-300 z-[10000] ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
        }`}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <div className="flex flex-col p-2 space-y-6 bg-[rgba(var(--navbar-bg),1)]">
          {navItems.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={`${getMobileLinkClasses(link.href, pathname)} px-4 py-3 rounded-lg`}
              style={{ transitionDelay: isOpen ? `${index * 75}ms` : '0ms' }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}