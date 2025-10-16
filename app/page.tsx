'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-6 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-headline font-bold text-crumbl-dark-pink">Crumbl</h1>
        </div>
      </header>

      {/* Hero Section - Above the Fold */}
      <section className="bg-gradient-to-b from-crumbl-light-pink to-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block bg-crumbl-dark-pink text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
              Limited Time Offer
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-headline font-black text-gray-900 mb-6 leading-tight">
            Get a <span className="text-crumbl-dark-pink">$100</span> Crumbl Gift Card
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-body">
            Complete a quick survey + offers and enjoy delicious cookies on us!
          </p>

          {/* Cookie Image Placeholder */}
          <div className="mb-8 mx-auto w-64 h-64 bg-gradient-to-br from-crumbl-pink to-crumbl-light-pink rounded-full flex items-center justify-center shadow-2xl">
            <div className="text-6xl">🍪</div>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-crumbl-dark-pink focus:outline-none text-lg"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white font-headline font-bold text-lg px-8 py-5 rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
              >
                {isSubmitting ? 'Processing...' : 'Claim My $100 Gift Card →'}
              </button>
              <p className="mt-4 text-sm text-gray-500">
                No credit card required • Instant access
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-headline font-bold text-gray-900 mb-2">
                You're In!
              </h3>
              <p className="text-gray-700 mb-4">
                Check your email for next steps to claim your $100 Crumbl gift card.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-headline font-bold text-center text-gray-900 mb-16">
            How It Works
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-crumbl-light-pink rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-headline font-bold text-crumbl-dark-pink">1</span>
              </div>
              <h4 className="text-xl font-headline font-bold text-gray-900 mb-3">
                Sign Up
              </h4>
              <p className="text-gray-600">
                Enter your email to get started. It only takes 30 seconds.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-crumbl-light-pink rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-headline font-bold text-crumbl-dark-pink">2</span>
              </div>
              <h4 className="text-xl font-headline font-bold text-gray-900 mb-3">
                Complete Survey & Offers
              </h4>
              <p className="text-gray-600">
                Answer a few questions and complete partner offers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-crumbl-light-pink rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-headline font-bold text-crumbl-dark-pink">3</span>
              </div>
              <h4 className="text-xl font-headline font-bold text-gray-900 mb-3">
                Get Your Gift Card
              </h4>
              <p className="text-gray-600">
                Receive your $100 Crumbl gift card and enjoy delicious cookies!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 bg-crumbl-light-pink">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-headline font-bold text-center text-gray-900 mb-4">
            Join Thousands of Cookie Lovers
          </h3>
          <p className="text-center text-gray-700 mb-12 text-lg">
            Over 10,000+ people have already claimed their gift cards
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-crumbl-pink rounded-full flex items-center justify-center mr-3">
                  <span className="text-2xl">😍</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Sarah M.</div>
                  <div className="text-sm text-gray-500">@sarahbakes</div>
                </div>
              </div>
              <p className="text-gray-700">
                "OMG I got my $100 card in like 20 minutes! Already ordered a dozen cookies 🍪"
              </p>
              <div className="mt-3 text-yellow-500">★★★★★</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-crumbl-pink rounded-full flex items-center justify-center mr-3">
                  <span className="text-2xl">🔥</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Jake T.</div>
                  <div className="text-sm text-gray-500">@jaketok</div>
                </div>
              </div>
              <p className="text-gray-700">
                "Survey was easy and totally worth it. Free Crumbl cookies? Yes please!"
              </p>
              <div className="mt-3 text-yellow-500">★★★★★</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-crumbl-pink rounded-full flex items-center justify-center mr-3">
                  <span className="text-2xl">💕</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Emma L.</div>
                  <div className="text-sm text-gray-500">@emmaloves</div>
                </div>
              </div>
              <p className="text-gray-700">
                "Best deal ever! Already planning my next Crumbl order with my gift card!"
              </p>
              <div className="mt-3 text-yellow-500">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-headline font-bold text-center text-gray-900 mb-16">
            Why Crumbl?
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="text-4xl mr-4">🍪</div>
              <div>
                <h4 className="text-xl font-headline font-bold text-gray-900 mb-2">
                  Weekly Rotating Menu
                </h4>
                <p className="text-gray-600">
                  New flavors every week. Never get bored with the same old cookies!
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-4xl mr-4">📦</div>
              <div>
                <h4 className="text-xl font-headline font-bold text-gray-900 mb-2">
                  Delivery & Pickup
                </h4>
                <p className="text-gray-600">
                  Get cookies delivered or pick them up fresh from your local store.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-4xl mr-4">⭐</div>
              <div>
                <h4 className="text-xl font-headline font-bold text-gray-900 mb-2">
                  Gourmet Quality
                </h4>
                <p className="text-gray-600">
                  Made fresh daily with premium ingredients. Each cookie is perfection.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-4xl mr-4">🎉</div>
              <div>
                <h4 className="text-xl font-headline font-bold text-gray-900 mb-2">
                  Perfect for Sharing
                </h4>
                <p className="text-gray-600">
                  Great for parties, gifts, or treating yourself. Everyone loves Crumbl!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-crumbl-dark-pink to-crumbl-pink text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-headline font-black mb-6">
            Don't Miss Out!
          </h3>
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            This offer won't last forever. Claim your $100 gift card now!
          </p>
          <div className="bg-white/20 backdrop-blur rounded-2xl p-8 mb-8">
            <div className="text-5xl mb-4">⏰</div>
            <p className="text-2xl font-headline font-bold">
              Limited Spots Available
            </p>
            <p className="text-lg mt-2 opacity-90">
              Join before this offer expires
            </p>
          </div>
          {!submitted && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-black text-white font-headline font-bold text-lg px-12 py-5 rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 shadow-2xl"
            >
              Claim Your Gift Card Now →
            </button>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-4xl font-headline font-bold text-center text-gray-900 mb-16">
            Frequently Asked Questions
          </h3>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-xl font-headline font-bold text-gray-900 mb-2">
                Is this really free?
              </h4>
              <p className="text-gray-600">
                Yes! You just need to complete a short survey and participate in a few partner offers to qualify for your $100 Crumbl gift card.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-xl font-headline font-bold text-gray-900 mb-2">
                How long does it take?
              </h4>
              <p className="text-gray-600">
                Most people complete the survey and offers in 15-20 minutes. You'll receive your gift card details shortly after completion.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-xl font-headline font-bold text-gray-900 mb-2">
                What kind of offers do I need to complete?
              </h4>
              <p className="text-gray-600">
                You'll choose from a variety of partner offers including free trials, subscriptions, and special deals. Pick the ones that interest you most!
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-xl font-headline font-bold text-gray-900 mb-2">
                Can I use my gift card at any Crumbl location?
              </h4>
              <p className="text-gray-600">
                Yes! Your $100 gift card works at any Crumbl Cookies location nationwide and for online orders.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h4 className="text-xl font-headline font-bold text-gray-900 mb-2">
                Is there a catch?
              </h4>
              <p className="text-gray-600">
                No catch! We partner with brands who want to reach new customers. By completing offers, you help them while earning your gift card.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-crumbl-light-pink">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-headline font-black text-gray-900 mb-6">
            Ready for Free Cookies?
          </h3>
          <p className="text-xl text-gray-700 mb-8">
            Claim your $100 Crumbl gift card in minutes
          </p>
          {!submitted && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-black text-white font-headline font-bold text-lg px-12 py-5 rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 shadow-xl"
            >
              Get Started Now →
            </button>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h4 className="text-2xl font-headline font-bold text-crumbl-pink mb-2">Crumbl</h4>
            <p className="text-gray-400">The sweetest gift card offer</p>
          </div>
          <div className="border-t border-gray-800 pt-6 text-sm text-gray-400">
            <p className="mb-2">
              © 2025 Crumbl Gift Card Offer. All rights reserved.
            </p>
            <p className="text-xs">
              This is a promotional landing page. Offer subject to terms and conditions. Must complete all required offers to qualify.
            </p>
            <div className="mt-4 space-x-4">
              <a href="#" className="hover:text-crumbl-pink transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-crumbl-pink transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#" className="hover:text-crumbl-pink transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
