'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, Menu, Search, ShoppingCart, User, X } from 'lucide-react';

interface NavLinksProps {
  mobile?: boolean;
  onLinkClick?: () => void; // Optional function type
}

function NavLinks({ mobile = false, onLinkClick }: NavLinksProps) {
  const linkClass = mobile ? 'block py-2' : 'text-black hover:text-gray-600';

  return (
    <>
      <div className="flex items-start flex-none align-center">
        <h2 className="title-font font-extrabold text-blue-960 tracking-widest text-3xl bg-origin-padding mb-4">
          Hekto
        </h2>
      </div>

      <Link href="/home" className={linkClass} onClick={onLinkClick}>
        Home
      </Link>
      <Link href="/about" className={linkClass} onClick={onLinkClick}>
        About
      </Link>
      <Link href="/services" className={linkClass} onClick={onLinkClick}>
        Services
      </Link>
      <Link href="/contact" className={linkClass} onClick={onLinkClick}>
        Contact
      </Link>
    </>
  );
}

function NavIcons() {
  return (
    <>
      <Heart className="h-6 w-6 text-black hover:text-gray-600" />
      <Search className="h-6 w-6 text-black hover:text-gray-600" />
      <ShoppingCart className="h-6 w-6 text-black hover:text-gray-600" />
      <User className="h-6 w-6 text-black hover:text-gray-600" />
    </>
  );
}

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#fffffd] px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Center Section (Navigation Links) */}
        <div className="hidden md:flex space-x-14 ml-20 items-center justify-center w-full">
          <NavLinks />
        </div>

        {/* Right Section (Icons) */}
        <div className="flex mr-3 items-center space-x-5">
          <NavIcons />
          {/* Hamburger Menu - Visible only on mobile */}
          <button className="md:hidden p-2" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="pt-4 pb-2 space-y-2 text-center">
          <NavLinks mobile onLinkClick={() => setIsOpen(false)} />
        </div>
      </div>
    </nav>
  );
}
