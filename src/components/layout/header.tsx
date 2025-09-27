'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-light tracking-widest text-slate-900">
              OBSIDIAN<span className="font-bold">HOUSE</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8">
            <Link href="/product" className="text-slate-700 hover:text-slate-900 font-light tracking-wide">
              Archive
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-slate-900 font-light tracking-wide">
              Heritage
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-slate-900 font-light tracking-wide">
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/checkout">
              <Button variant="ghost" size="sm" className="relative flex items-center space-x-2 text-slate-700 hover:text-slate-900 font-light">
                <ShoppingCart className="h-4 w-4" />
                <span>Cart</span>
                {/* Cart count badge */}
                <span className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-amber-600 text-xs text-white flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <div className="space-y-4">
              {/* Mobile Navigation Links */}
              <div className="flex flex-col space-y-3">
                <Link 
                  href="/product" 
                  className="text-slate-700 hover:text-slate-900 py-2 font-light tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Archive
                </Link>
                <Link 
                  href="/about" 
                  className="text-slate-700 hover:text-slate-900 py-2 font-light tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Heritage
                </Link>
                <Link 
                  href="/contact" 
                  className="text-slate-700 hover:text-slate-900 py-2 font-light tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-slate-200">
                <Link href="/checkout">
                  <Button variant="ghost" size="sm" className="relative flex items-center space-x-2 text-slate-700">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Cart</span>
                    <span className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-amber-600 text-xs text-white flex items-center justify-center">
                      0
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}