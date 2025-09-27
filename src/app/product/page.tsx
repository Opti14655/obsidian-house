'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils'
import { ShoppingCart, Crown, Package, Shield, Truck } from 'lucide-react'

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1)
  const [stockCount] = useState(9)

  const handleAddToCart = () => {
    // This will be connected to cart context later
    console.log('Added to cart:', quantity)
  }

  const handleBuyNow = () => {
    // This will redirect to checkout
    window.location.href = '/checkout'
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <div className="space-y-8">
            <div className="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Crown className="h-24 w-24 text-amber-600 mx-auto mb-4" />
                  <p className="text-slate-500 font-light">Product Image</p>
                  <p className="text-sm text-slate-400">Professional photography coming soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <div className="mb-4">
                <span className="text-sm font-light text-slate-500 tracking-widest uppercase">Obsidian House</span>
              </div>
              <h1 className="text-4xl font-light text-slate-900 tracking-wide">
                ARCHIVE No.001
              </h1>
              <p className="mt-4 text-lg font-light text-slate-600 leading-relaxed">
                Our inaugural fragrance - a masterfully crafted Aventus-inspired blend that embodies luxury and exclusivity. 
                Opening with vibrant mango, bergamot, and blackcurrant, transitioning to smoky birch and jasmine,
                before settling into an elegant base of musk, oakmoss, and ambergris.
              </p>
            </div>

            {/* Price and Stock */}
            <div className="border-t border-b border-slate-200 py-6">
              <div className="flex items-center justify-between">
                <div className="text-3xl font-light text-slate-900">
                  {formatPrice(160)}
                </div>
                <div className="text-right">
                  <div className="text-lg font-medium text-slate-900">{stockCount} available</div>
                  <div className="text-sm text-slate-500">100ml Bottle</div>
                </div>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-light text-slate-700">Quantity:</label>
                <div className="flex items-center border border-slate-300 rounded">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 hover:bg-slate-100 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 border-l border-r border-slate-300">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(Math.min(stockCount, quantity + 1))}
                    className="px-3 py-2 hover:bg-slate-100 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={handleBuyNow}
                  size="lg" 
                  className="w-full bg-slate-900 text-white hover:bg-slate-800 py-4 text-lg font-light"
                >
                  Buy Now - {formatPrice(160 * quantity)}
                </Button>
                <Button 
                  onClick={handleAddToCart}
                  variant="outline" 
                  size="lg" 
                  className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 py-4 text-lg font-light"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-slate-200 pt-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center space-x-3">
                  <Package className="h-5 w-5 text-amber-600" />
                  <span className="text-sm font-light text-slate-600">Crystal glass bottle with premium packaging</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Crown className="h-5 w-5 text-amber-600" />
                  <span className="text-sm font-light text-slate-600">Black rigid box with gold foil interior</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-amber-600" />
                  <span className="text-sm font-light text-slate-600">Includes velvet pouch & authentication card</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-amber-600" />
                  <span className="text-sm font-light text-slate-600">Fast & insured shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fragrance Notes */}
        <div className="mt-16 border-t border-slate-200 pt-16">
          <h2 className="text-3xl font-light text-slate-800 tracking-wide text-center mb-12">
            Fragrance Profile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-medium text-slate-800 mb-4">Top Notes</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Fresh Mango, Bergamot, Blackcurrant
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-slate-800 mb-4">Heart Notes</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Birch, Patchouli, Jasmine
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-medium text-slate-800 mb-4">Base Notes</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Musk, Oakmoss, Ambergris, Vanilla
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}