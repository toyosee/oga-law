import { motion } from 'framer-motion';
import { Star, Shield, Users, CreditCard, Zap } from 'lucide-react';

const lawyerFeatures = [
  {
    icon: Shield,
    title: 'NBA-Verified Profiles',
    description: 'Every lawyer verified through the Nigerian Bar Association. Trust built in.',
  },
  {
    icon: Zap,
    title: 'Smart Client Routing',
    description: 'AI matches your case to the right lawyer based on specialization, location, and availability.',
  },
  {
    icon: CreditCard,
    title: 'Escrow Payments',
    description: 'Payments held securely until consultation complete. Fair fixed fees. No surprises.',
  },
  {
    icon: Users,
    title: '100,000+ Lawyers',
    description: 'Access Nigeria\'s largest verified legal professional network from your phone.',
  },
];

const tiers = [
  {
    name: 'Bronze',
    price: 'Free',
    features: ['Basic profile listing', '5 lead credits/month', 'Standard support'],
    highlighted: false,
  },
  {
    name: 'Silver',
    price: '₦15K/mo',
    features: ['30 lead credits/month', 'Priority search placement', 'Client rating display', 'Incident document access'],
    highlighted: false,
  },
  {
    name: 'Gold',
    price: '₦50K/mo',
    features: ['Unlimited leads', 'Top search placement', 'Verified Trusted badge', 'Emergency SOS dispatch', 'Analytics dashboard'],
    highlighted: true,
  },
];

const Marketplace = () => {
  return (
    <section id="marketplace" className="py-24 relative bg-ogalaw-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-ogalaw-gold font-semibold text-sm uppercase tracking-widest">For Legal Professionals</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-4 mb-6">
            The Marketplace
            <br />
            <span className="text-gray-400">Where Lawyers Meet Clients</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            OgaLaw isn't just an AI assistant. It's a two-sided platform connecting 
            verified lawyers with citizens who need them — on fair terms.
          </p>
        </motion.div>

        {/* Lawyer Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {lawyerFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <feature.icon className="w-8 h-8 text-ogalaw-gold mb-4" />
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`rounded-2xl p-8 ${
                tier.highlighted
                  ? 'bg-ogalaw-green border-2 border-ogalaw-green glow-green scale-105'
                  : 'glass border border-gray-700'
              }`}
            >
              {tier.highlighted && (
                <div className="text-center mb-4">
                  <span className="bg-white text-ogalaw-green text-xs font-bold px-3 py-1 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <h3 className={`text-xl font-bold mb-2 ${tier.highlighted ? 'text-white' : ''}`}>
                {tier.name}
              </h3>
              <div className={`text-3xl font-black mb-6 ${tier.highlighted ? 'text-white' : ''}`}>
                {tier.price}
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Star className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.highlighted ? 'text-white' : 'text-ogalaw-green'}`} />
                    <span className={tier.highlighted ? 'text-white/90' : 'text-gray-400'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  tier.highlighted
                    ? 'bg-white text-ogalaw-green hover:bg-gray-100'
                    : 'border border-gray-600 hover:border-ogalaw-green text-white'
                }`}
              >
                {tier.name === 'Bronze' ? 'Get Started' : 'Subscribe'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marketplace;