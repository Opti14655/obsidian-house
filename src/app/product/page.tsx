'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { formatPrice } from '@/lib/utils'
import { Shield, Lock, Crown, Zap } from 'lucide-react'

export default function ProductPage() {

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Product Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-lg blur-xl transform rotate-3"></div>
                <div className="relative bg-gradient-to-br from-gray-100 to-white rounded-lg overflow-hidden">
                  <div className="w-96 h-[32rem] mx-auto relative">
                    <Image
                      src="/images/hero-bottle.jpg"
                      alt="ARCHIVE No.001 - Luxury Fragrance Bottle"
                      fill
                      className="object-contain rounded-lg"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div className="mb-8 flex justify-start">
                <Badge className="bg-gradient-to-r from-green-700 to-green-800 text-white px-4 py-2 text-sm font-semibold">
                  <Lock className="w-3 h-3 mr-2" />
                  COMING SOON
                </Badge>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-yellow-400 mr-3" />
                  <span className="text-sm font-light text-gray-400 tracking-widest uppercase">Obsidian House</span>
                </div>
                <h1 className="text-5xl font-light text-white tracking-tight mb-6">
                  ARCHIVE No.001
                </h1>
                <p className="text-lg text-gray-300 font-light leading-relaxed mb-8">
                  Fresh mango meets smoky birch. Elegant musk wraps it all together.
                  A sophisticated blend that captures the essence of old money sophistication.
                </p>
              </div>

              {/* Price and Stock */}
              <div className="border-t border-b border-gray-700 py-8">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-4xl font-light text-white mb-2">{formatPrice(160)}</div>
                    <div className="text-sm text-gray-400">Launch Price</div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-light text-yellow-400 mb-2">300</div>
                    <div className="text-sm text-gray-400">Limited Edition</div>
                  </div>
                </div>
              </div>

              {/* Pre-Order Section */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-700 rounded-lg p-6">
                  <h3 className="text-xl font-light text-white mb-4">Secure Your Bottle</h3>
                  <p className="text-gray-300 font-light mb-6">
                    Join the exclusive circle of 300. No payment required now.
                  </p>
                  
                  <Button 
                    onClick={() => document.getElementById('pre-order')?.scrollIntoView({ behavior: 'smooth' })}
                    size="lg" 
                    className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500 font-semibold py-4 text-lg"
                  >
                    Pre-Order Now
                  </Button>
                  <p className="text-gray-500 text-xs mt-4 text-center">*No payment required • Commitment to purchase upon release</p>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-3">
                  <Crown className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-light text-gray-300">Ultra-exclusive limited run</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-light text-gray-300">Not sold in stores</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-5 w-5 text-yellow-400" />
                  <span className="text-sm font-light text-gray-300">8+ hours longevity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fragrance Profile */}
      <section className="py-20 bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-white tracking-wide mb-4">
              Fragrance Profile
            </h2>
            <p className="text-gray-400 font-light">A masterfully crafted composition</p>
          </div>
          
          <div className="bg-gradient-to-r from-black to-gray-800 rounded-lg border border-gray-700 p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-lg font-medium text-yellow-400 mb-3">Opening</h3>
                <p className="text-gray-300 font-light">Fresh Mango, Bergamot, Blackcurrant</p>
                <p className="text-gray-500 text-sm mt-2">Confident and Sophisticated</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-yellow-400 mb-3">Heart</h3>
                <p className="text-gray-300 font-light">Smoky Birch, Patchouli, Jasmine</p>
                <p className="text-gray-500 text-sm mt-2">Mysterious and Alluring</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-yellow-400 mb-3">Dry Down</h3>
                <p className="text-gray-300 font-light">Elegant Musk, Oakmoss, Ambergris</p>
                <p className="text-gray-500 text-sm mt-2">Lasting and Memorable</p>
              </div>
            </div>
          </div>
          
          {/* Performance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-light text-white mb-1">8+ hrs</div>
              <div className="text-gray-400 text-sm">Longevity</div>
            </div>
            <div>
              <div className="text-2xl font-light text-white mb-1">Moderate</div>
              <div className="text-gray-400 text-sm">Projection</div>
            </div>
            <div>
              <div className="text-2xl font-light text-white mb-1">All Season</div>
              <div className="text-gray-400 text-sm">Versatility</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pre-Order Form */}
      <section id="pre-order" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-4">Pre-Order ARCHIVE No.001</h2>
          <p className="text-gray-400 font-light mb-2">
            Secure your bottle from the exclusive limited run of 300.
          </p>
          <p className="text-yellow-500 font-medium mb-8">
            Launch Price: $160 • No payment required now
          </p>
          
          <form action="https://formsubmit.co/marcusdurlach5@icloud.com" method="POST" className="bg-black border border-gray-800 rounded-lg p-8">
            <input type="hidden" name="_subject" value="New Pre-Order - ARCHIVE No.001 - Obsidian House" />
            <input type="hidden" name="_next" value="https://cologne-store-b44i0fvar-marcus-projects-d5696120.vercel.app?success=preorder" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input 
                type="text" 
                name="first_name"
                placeholder="First Name" 
                className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                required
              />
              <input 
                type="text" 
                name="last_name"
                placeholder="Last Name" 
                className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number" 
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input 
                type="text" 
                name="city"
                placeholder="City" 
                className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                required
              />
              <input 
                type="text" 
                name="state"
                placeholder="State/Province" 
                className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="flex items-start text-left text-gray-300 text-sm">
                <input 
                  type="checkbox" 
                  name="agreement"
                  className="mt-1 mr-3 rounded" 
                  required
                />
                <span>
                  By submitting this pre-order, I understand that I am committing to purchase ARCHIVE No.001 
                  for $160 upon release. I will be contacted with payment details when the fragrance launches.
                </span>
              </label>
            </div>
            
            <Button type="submit" className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500 font-semibold py-3">
              Secure My Pre-Order
            </Button>
            <p className="text-gray-500 text-xs mt-4">*Limited to 300 bottles worldwide • No payment required now</p>
          </form>
        </div>
      </section>
    </div>
  )
}