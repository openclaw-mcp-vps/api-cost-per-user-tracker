export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Cost Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know exactly which users are{' '}
          <span className="text-[#58a6ff]">costing you money</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Attribute every API call and dollar to individual customers. Spot your most expensive users, fix broken pricing tiers, and stop subsidizing heavy hitters.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $13/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">Per-user</div>
            <div className="text-sm text-[#8b949e]">Cost attribution down to individual customer IDs via webhook or SDK</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">Real-time</div>
            <div className="text-sm text-[#8b949e]">Live dashboard updates as API calls come in — no batch delays</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">Alerts</div>
            <div className="text-sm text-[#8b949e]">Get notified when a user exceeds your cost threshold automatically</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$13</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Unlimited users tracked</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Webhook + SDK ingestion</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Cost breakdown by user, endpoint, model</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Threshold alerts via email</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>90-day data retention</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>CSV export</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How do I send API usage data?</h3>
            <p className="text-sm text-[#8b949e]">You can push events via our HTTP webhook endpoint or use the lightweight JavaScript/Python SDK. Each event includes a user ID, cost, and optional metadata like model or endpoint name.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which AI APIs are supported?</h3>
            <p className="text-sm text-[#8b949e]">Any API with a cost you can measure — OpenAI, Anthropic, Cohere, Replicate, or your own internal services. You pass the cost value; we handle the attribution and analytics.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel from your billing portal at any time. Your data remains accessible until the end of your billing period, then is deleted after 30 days.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} API Cost Tracker. All rights reserved.
      </footer>
    </main>
  )
}
