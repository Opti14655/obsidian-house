import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { formatPrice } from '@/lib/utils'
import { Lock, Zap, Shield, Crown } from 'lucide-react'
import { DiscountStatus } from '@/components/discount-status'
import { PreOrderForm } from '@/components/preorder-form'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Ultra Niche */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1),transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Exclusive Badge */}
            <div className="mb-8 flex justify-center">
              <Badge className="bg-gradient-to-r from-green-700 to-green-800 text-white px-4 py-2 text-sm font-semibold">
                <Lock className="w-3 h-3 mr-2" />
                COMING SOON
              </Badge>
            </div>
            
            <div className="mb-6 flex justify-center">
              <Shield className="w-8 h-8 text-yellow-400" />
            </div>
            
            <h1 className="text-5xl font-light tracking-tight sm:text-7xl mb-4">
              <span className="font-extralight text-gray-300">OBSIDIAN</span>
              <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">HOUSE</span>
            </h1>
            
            <p className="text-xl text-gray-400 font-light mb-2">Ultra-Niche Fragrance House</p>
            <p className="text-lg text-yellow-500 font-medium mb-6">Launching Soon - For Those Who Know</p>
            
            {/* Early Bird Discount Status */}
            <DiscountStatus className="mb-12" />
            
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300 font-light">
              The fragrance that billionaires&apos; sons will wear to prep school. Not sold in stores.
              Not advertised anywhere. Launching soon for those who know where to look.
            </p>
            
            {/* Product Focus - MANUSCRIPT 001 */}
            <div className="mt-16 mb-12 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-lg p-8 max-w-4xl mx-auto">
              <div className="mb-4 flex justify-center">
                <Badge className="bg-gradient-to-r from-green-700 to-green-800 text-white px-3 py-1 text-xs font-semibold">
                  COMING SOON
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Product Image */}
                <div className="flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-lg blur-xl transform rotate-3"></div>
                    <div className="relative bg-gradient-to-br from-gray-100 to-white rounded-lg overflow-hidden">
                      <div className="w-64 h-80 mx-auto relative">
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
                
                {/* Product Info */}
                <div className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start items-center mb-4">
                    <Shield className="w-5 h-5 text-yellow-400 mr-2" />
                    <h2 className="text-3xl font-light text-yellow-400">ARCHIVE No.001</h2>
                  </div>
                  <p className="text-gray-300 mb-6 font-light">Fresh mango meets smoky birch. Elegant musk wraps it all together.</p>
                  
                  <div className="flex items-center justify-center md:justify-start space-x-8 mb-6">
                    <div className="text-center md:text-left">
                      <div className="text-3xl font-light text-white">{formatPrice(160)}</div>
                      <div className="text-sm text-gray-400">Launch Price</div>
                    </div>
                    <div className="h-12 w-px bg-gray-700"></div>
                    <div className="text-center md:text-left">
                      <div className="text-3xl font-light text-yellow-400">300</div>
                      <div className="text-sm text-gray-400">Limited Edition</div>
                    </div>
                  </div>
                  
                  {/* Progress Bar - Full since it's coming soon */}
                  <div className="w-full bg-gray-800 rounded-full h-2 mb-6">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2 rounded-full transition-all duration-500" style={{width: '100%'}}></div>
                  </div>
                  <p className="text-center md:text-left text-sm text-gray-400">Launching Soon - Full Limited Run of 300 Bottles</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="#pre-order">
                <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500 font-semibold px-8">
                  Pre-Order Now
                </Button>
              </Link>
              <Link href="#contact">
                <Button variant="outline" size="lg" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-medium">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Obsidian House Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white tracking-wide mb-4">
              Why The Elite Choose Obsidian House
            </h2>
            <p className="text-gray-400 font-light">Exclusivity is not about price. It is about access.</p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center border-2 border-yellow-300 shadow-lg">
                <Crown className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Ultra Exclusive</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Only 300 bottles in our first limited release. When everyone wears the same designer scents, how do you stand out?
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center border-2 border-yellow-300 shadow-lg">
                <Shield className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Insider Discovery</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Not sold in stores. Not advertised anywhere. Only available to those who know where to look.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center border-2 border-yellow-300 shadow-lg">
                <Zap className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Instant Recognition</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                The scent that makes people turn. The fragrance that gets compliments from strangers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHIVE No.001 Profile */}
      <section id="archive" className="py-20 bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-white tracking-wide mb-4">
              ARCHIVE No.001
            </h2>
            <p className="text-yellow-400 text-lg font-medium mb-2">The Signature Scent</p>
            <p className="text-gray-400 font-light max-w-2xl mx-auto">
              A sophisticated blend that captures the essence of old money sophistication. 
              Crafted for those who understand that true luxury is whispered, never shouted.
            </p>
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
      
      {/* Pre-Order Section */}
      <section id="pre-order" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-4">Pre-Order ARCHIVE No.001</h2>
            <p className="text-gray-400 font-light mb-2">
              Secure your bottle from the exclusive limited run of 300.
            </p>
            <p className="text-yellow-500 font-medium mb-4">
              Launch Price: $160 • No payment required now
            </p>
            
            {/* Discount Status for Pre-order Section */}
            <DiscountStatus className="mb-8" />
          
          <PreOrderForm />
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-4">Contact Us</h2>
          <p className="text-gray-400 font-light mb-8">
            Questions about ARCHIVE No.001? Get in touch with our team.
          </p>
          
          <form action="https://formsubmit.co/marcusdurlach5@icloud.com" method="POST" className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <input type="hidden" name="_subject" value="Contact Form - Obsidian House" />
            <input type="hidden" name="_next" value="https://cologne-store-b44i0fvar-marcus-projects-d5696120.vercel.app?success=contact" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input 
                type="text" 
                name="contact_name"
                placeholder="Your Name" 
                className="bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                required
              />
              <input 
                type="email" 
                name="contact_email"
                placeholder="Your Email" 
                className="bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                required
              />
            </div>
            
            <div className="mb-4">
              <input 
                type="text" 
                name="subject"
                placeholder="Subject" 
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                required
              />
            </div>
            
            <div className="mb-6">
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows={4}
                className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 resize-none"
                required
              ></textarea>
            </div>
            
            <Button type="submit" className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500 font-semibold py-3">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
