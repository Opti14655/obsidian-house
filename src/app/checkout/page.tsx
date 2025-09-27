'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils'
import { CreditCard, MapPin, Package, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface ShippingInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  address2: string
  city: string
  state: string
  zipCode: string
  country: string
}

export default function CheckoutPage() {
  const [quantity, setQuantity] = useState(1)
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States'
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const itemPrice = 160
  const shippingCost = 15
  const tax = (itemPrice * quantity) * 0.08 // 8% tax
  const total = (itemPrice * quantity) + shippingCost + tax

  const handleShippingChange = (field: keyof ShippingInfo, value: string) => {
    setShippingInfo(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    try {
      // Here we'll integrate with Stripe
      console.log('Processing payment...', { shippingInfo, quantity, total })
      
      // For now, just simulate processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      alert('Order placed successfully! (This is a demo)')
    } catch (error) {
      console.error('Payment failed:', error)
      alert('Payment failed. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/product" className="inline-flex items-center text-slate-600 hover:text-slate-900">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Product
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-slate-900 tracking-wide">
            Checkout
          </h1>
          <p className="mt-4 text-slate-600 font-light">
            Complete your purchase of ARCHIVE No.001
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Shipping Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-amber-600" />
                  Shipping Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded border-slate-300 py-2 px-3 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
                      value={shippingInfo.firstName}
                      onChange={(e) => handleShippingChange('firstName', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded border-slate-300 py-2 px-3 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
                      value={shippingInfo.lastName}
                      onChange={(e) => handleShippingChange('lastName', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded border-slate-300 py-2 px-3 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
                      value={shippingInfo.email}
                      onChange={(e) => handleShippingChange('email', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full rounded border-slate-300 py-2 px-3 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
                      value={shippingInfo.phone}
                      onChange={(e) => handleShippingChange('phone', e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full rounded border-slate-300 py-2 px-3 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
                    value={shippingInfo.address}
                    onChange={(e) => handleShippingChange('address', e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Address 2 (Optional)
                  </label>
                  <input
                    type="text"
                    className="w-full rounded border-slate-300 py-2 px-3 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
                    value={shippingInfo.address2}
                    onChange={(e) => handleShippingChange('address2', e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded border-slate-300 py-2 px-3 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
                      value={shippingInfo.city}
                      onChange={(e) => handleShippingChange('city', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded border-slate-300 py-2 px-3 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
                      value={shippingInfo.state}
                      onChange={(e) => handleShippingChange('state', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded border-slate-300 py-2 px-3 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
                      value={shippingInfo.zipCode}
                      onChange={(e) => handleShippingChange('zipCode', e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Country *
                  </label>
                  <select
                    required
                    className="w-full rounded border-slate-300 py-2 px-3 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
                    value={shippingInfo.country}
                    onChange={(e) => handleShippingChange('country', e.target.value)}
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                  </select>
                </div>
              </div>

              {/* Payment Information */}
              <div>
                <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-amber-600" />
                  Payment Information
                </h2>
                
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="text-sm text-amber-800">
                      Secure payment processing with Stripe (integration coming soon)
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 1234 1234 1234"
                      className="w-full rounded border-slate-300 py-2 px-3 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full rounded border-slate-300 py-2 px-3 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        CVC
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full rounded border-slate-300 py-2 px-3 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:pl-8">
              <div className="sticky top-8">
                <h2 className="text-2xl font-light text-slate-900 mb-6 flex items-center">
                  <Package className="h-5 w-5 mr-2 text-amber-600" />
                  Order Summary
                </h2>

                <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-slate-100 rounded flex items-center justify-center">
                          <Package className="h-8 w-8 text-slate-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-slate-900">ARCHIVE No.001</h3>
                          <p className="text-sm text-slate-600">100ml - Obsidian House</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <select
                          value={quantity}
                          onChange={(e) => setQuantity(parseInt(e.target.value))}
                          className="rounded border-slate-300 py-1 px-2 text-sm"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                            <option key={num} value={num}>{num}</option>
                          ))}
                        </select>
                        <span className="text-slate-900 font-medium">
                          {formatPrice(itemPrice * quantity)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 mt-6 pt-6 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Subtotal</span>
                      <span className="text-slate-900">{formatPrice(itemPrice * quantity)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Shipping</span>
                      <span className="text-slate-900">{formatPrice(shippingCost)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Tax</span>
                      <span className="text-slate-900">{formatPrice(tax)}</span>
                    </div>
                    <div className="border-t border-slate-200 pt-3">
                      <div className="flex justify-between">
                        <span className="text-lg font-medium text-slate-900">Total</span>
                        <span className="text-lg font-medium text-slate-900">
                          {formatPrice(total)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isProcessing}
                    className="w-full mt-6 bg-slate-900 text-white hover:bg-slate-800 py-4 text-lg font-light"
                  >
                    {isProcessing ? 'Processing...' : `Complete Purchase - ${formatPrice(total)}`}
                  </Button>

                  <p className="text-xs text-slate-500 text-center mt-4">
                    By placing your order, you agree to our terms and conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}