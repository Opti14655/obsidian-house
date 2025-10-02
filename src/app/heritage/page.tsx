import { Shield } from 'lucide-react'

// Heritage page - Brand story and founding principles
export default function HeritagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section with Crest */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1),transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Header with Crest */}
          <div className="text-center mb-16">
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center border-2 border-yellow-300 shadow-lg">
                <Shield className="h-12 w-12 text-black" />
              </div>
            </div>
            
            <div className="mb-8">
              <div className="text-6xl font-light tracking-tight mb-4">
                <span className="font-extralight text-gray-300">OBSIDIAN</span>
                <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">HOUSE</span>
              </div>
            </div>
          </div>

          {/* Heritage Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-700 rounded-lg p-8 text-center">
              <p className="text-yellow-400 text-lg font-medium mb-4">Heritage Story Coming Soon</p>
              <p className="text-gray-300 font-light">The complete story of Obsidian House will be revealed here.</p>
            </div>
          </div>

          {/* Brand Story */}
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl leading-relaxed mb-8 font-light">
              What began as a personal pursuit—searching for a fragrance that didn&apos;t exist—became a two-year journey with private perfumers.
            </p>
            
            <p className="text-xl leading-relaxed mb-8 font-light">
              The result: something rare. Fresh. Sophisticated. Distinct.
            </p>
            
            <p className="text-xl leading-relaxed mb-8 font-light">
              The response was undeniable. Friends asked where to buy it. Family requested bottles as gifts. Demand grew impossible to ignore.
            </p>
            
            <p className="text-xl leading-relaxed mb-8 font-light">
              But instead of mass production, we chose intention. Restraint. Authenticity. Exclusivity.
            </p>
            
            {/* Product Introduction */}
            <div className="my-16 p-8 bg-gradient-to-r from-gray-900 to-black border border-gray-700 rounded-lg">
              <p className="text-2xl font-light text-yellow-400 mb-6">
                Our first release: ARCHIVE No.001
              </p>
              <p className="text-lg leading-relaxed mb-4 font-light">
                Limited to 300 bottles only.
              </p>
              <p className="text-lg leading-relaxed mb-4 font-light">
                No celebrity endorsements.
              </p>
              <p className="text-lg leading-relaxed mb-4 font-light">
                No department store counters.
              </p>
              <p className="text-lg leading-relaxed font-light">
                No gimmicks.
              </p>
            </div>
            
            <p className="text-xl leading-relaxed mb-8 font-light">
              Just a fragrance of uncompromising quality, made for those with taste.
            </p>
            
            <p className="text-xl leading-relaxed mb-8 font-light">
              Obsidian House is not about chasing trends. It&apos;s about creating something rare, refined, and lasting.
            </p>
            
            <p className="text-2xl font-light text-yellow-400 text-center mt-16">
              ARCHIVE No.001 is only the beginning.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white tracking-wide mb-4">
              Our Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center border-2 border-yellow-300 shadow-lg">
                <span className="text-xl font-bold text-black">I</span>
              </div>
              <h3 className="text-xl font-light text-white mb-3">Intention</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Every decision made with purpose. Every bottle crafted with care.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center border-2 border-yellow-300 shadow-lg">
                <span className="text-xl font-bold text-black">R</span>
              </div>
              <h3 className="text-xl font-light text-white mb-3">Restraint</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Quality over quantity. Exclusivity over availability.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-6 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center border-2 border-yellow-300 shadow-lg">
                <span className="text-xl font-bold text-black">A</span>
              </div>
              <h3 className="text-xl font-light text-white mb-3">Authenticity</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                No trends. No gimmicks. Just uncompromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}