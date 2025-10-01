'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-800 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center space-x-2">
            <Shield className="h-6 w-6 text-yellow-400" />
            <h1 className="text-xl font-light tracking-widest text-white">
              OBSIDIAN<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">HOUSE</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:space-x-8">
            <Link href="/product" className="text-gray-300 hover:text-yellow-400 font-light tracking-wide transition-colors">
              Archive
            </Link>
            <Link href="/heritage" className="text-gray-300 hover:text-yellow-400 font-light tracking-wide transition-colors">
              Heritage
            </Link>
            <Link href="/#contact" className="text-gray-300 hover:text-yellow-400 font-light tracking-wide transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#pre-order">
              <Button size="sm" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500 font-semibold">
                Pre-Order
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
                  className="text-gray-300 hover:text-yellow-400 py-2 font-light tracking-wide transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Archive
                </Link>
                <Link 
                  href="/heritage" 
                  className="text-gray-300 hover:text-yellow-400 py-2 font-light tracking-wide transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Heritage
                </Link>
                <Link 
                  href="/#contact" 
                  className="text-gray-300 hover:text-yellow-400 py-2 font-light tracking-wide transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Actions */}
              <div className="pt-4 border-t border-gray-700">
                <Link href="#pre-order">
                  <Button size="sm" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500 font-semibold">
                    Pre-Order
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