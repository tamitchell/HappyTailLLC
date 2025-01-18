'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-darkBrown absolute w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden lg:block">
              <div className="flex items-center space-x-4 uppercase">
                <Link href="/" className="text-white tracking-wider opacity-75 font-semibold hover:text-white hover:opacity-100  px-3 py-2 rounded-sm">
                  Home
                </Link>
                <Link href="/services" className="text-white tracking-wider opacity-75 font-semibold hover:text-white hover:opacity-100  px-3 py-2 rounded-sm">
                  Services
                </Link>
                <Link href="/pricing" className="text-white tracking-wider opacity-75 font-semibold hover:text-white hover:opacity-100  px-3 py-2 rounded-sm">
                  Pricing
                </Link>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo/bignavlogo.png"
                alt="Happy Tail LLC logo"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-4 uppercase">
              <Link href="/blog" className="text-white tracking-wider opacity-75 font-semibold hover:text-white hover:opacity-100  px-3 py-2 rounded-sm">
                Blog
              </Link>
              <Link href="/about" className="text-white tracking-wider opacity-75 font-semibold hover:text-white hover:opacity-100  px-3 py-2 rounded-sm">
                About
              </Link>
              <Link href="/contact" className="text-white tracking-wider opacity-75 font-semibold hover:text-white hover:opacity-100  px-3 py-2 rounded-sm">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden bg-black/80`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="text-white block px-3 py-2 rounded-md hover:bg-gray-700">
            Home
          </Link>
          <Link href="/services" className="text-white block px-3 py-2 rounded-md hover:bg-gray-700">
            Services
          </Link>
          <Link href="/pricing" className="text-white block px-3 py-2 rounded-md hover:bg-gray-700">
            Pricing
          </Link>
          <Link href="/blog" className="text-white block px-3 py-2 rounded-md hover:bg-gray-700">
            Blog
          </Link>
          <Link href="/about" className="text-white block px-3 py-2 rounded-md hover:bg-gray-700">
            About
          </Link>
          <Link href="/contact" className="text-white block px-3 py-2 rounded-md hover:bg-gray-700">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
