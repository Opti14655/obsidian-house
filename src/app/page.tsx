import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { formatPrice } from '@/lib/utils'
import { Lock, Eye, Zap } from 'lucide-react'

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
              <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-2 text-sm font-semibold">
                <Lock className="w-3 h-3 mr-2" />
                VAULT ACCESS REQUIRED
              </Badge>
            </div>
            
            <h1 className="text-5xl font-light tracking-tight sm:text-7xl mb-4">
              <span className="font-extralight text-gray-300">OBSIDIAN</span>
              <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">HOUSE</span>
            </h1>
            
            <p className="text-xl text-gray-400 font-light mb-2">Ultra-Niche Fragrance House</p>
            <p className="text-lg text-yellow-500 font-medium mb-12">For Those Who Know</p>
            
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300 font-light">
              The fragrance that billionaires' sons wear to prep school. Not sold in stores. 
              Not advertised anywhere. Only available through whispers.
            </p>
            
            {/* Product Focus - MANUSCRIPT 001 */}
            <div className="mt-16 mb-12 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-3xl font-light text-yellow-400 mb-4">MANUSCRIPT 001</h2>
              <p className="text-gray-300 mb-6 font-light">Fresh pineapple meets smoky birch. Elegant musk wraps it all together.</p>
              
              <div className="flex items-center justify-center space-x-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-light text-white">{formatPrice(160)}</div>
                <div className="text-sm text-gray-400">Per Bottle</div>
              </div>
              <div className="h-12 w-px bg-gray-700"></div>
              <div className="text-center">
                <div className="text-3xl font-light text-yellow-400">9</div>
                <div className="text-sm text-gray-400">Available</div>
              </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-800 rounded-full h-2 mb-6">
                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2 rounded-full transition-all duration-500" style={{width: '10%'}}></div>
              </div>
            </div>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="#vault-access">
                <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500 font-semibold px-8">
                  Request Vault Access
                </Button>
              </Link>
              <Link href="#manuscript">
                <Button variant="outline" size="lg" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-medium">
                  Learn More
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
            <p className="text-gray-400 font-light">Exclusivity isn't about price. It's about access.</p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <Lock className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Ultra Exclusive</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Only 500 bottles exist globally. When everyone wears the same designer scents, how do you stand out?
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <Eye className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-light text-white mb-3">Insider Discovery</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Not sold in stores. Not advertised anywhere. Only available to those who know where to look.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
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

      {/* MANUSCRIPT 001 Profile */}
      <section id="manuscript" className="py-20 bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-white tracking-wide mb-4">
              MANUSCRIPT 001
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
                <p className="text-gray-300 font-light">Fresh Pineapple, Bergamot, Blackcurrant</p>
                <p className="text-gray-500 text-sm mt-2">Confident & Sophisticated</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-yellow-400 mb-3">Heart</h3>
                <p className="text-gray-300 font-light">Smoky Birch, Patchouli, Jasmine</p>
                <p className="text-gray-500 text-sm mt-2">Mysterious & Alluring</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-yellow-400 mb-3">Dry Down</h3>
                <p className="text-gray-300 font-light">Elegant Musk, Oakmoss, Ambergris</p>
                <p className="text-gray-500 text-sm mt-2">Lasting & Memorable</p>
              </div>
            </div>
          </div>
          
          {/* Performance Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-light text-white mb-1">8+ hrs</div>
              <div className="text-gray-400 text-sm">Longevity</div>
            </div>
            <div>
              <div className="text-2xl font-light text-white mb-1">Moderate</div>
              <div className="text-gray-400 text-sm">Projection</div>
            </div>
            <div>
              <div className="text-2xl font-light text-white mb-1">16-30</div>
              <div className="text-gray-400 text-sm">Age Range</div>
            </div>
            <div>
              <div className="text-2xl font-light text-white mb-1">All Season</div>
              <div className="text-gray-400 text-sm">Versatility</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vault Access Section */}
      <section id="vault-access" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-4">Request Vault Access</h2>
          <p className="text-gray-400 font-light mb-8">
            Join the exclusive circle of 500. Once they're gone, they're gone forever.
          </p>
          
          <div className="bg-black border border-gray-800 rounded-lg p-8">
            <div className="mb-6">
              <input 
                type="email" 
                placeholder="Enter your email for exclusive access" 
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500 font-semibold py-3">
              Request Access to MANUSCRIPT 001
            </Button>
            <p className="text-gray-500 text-xs mt-4">*Independent retailer. Limited quantities available.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
