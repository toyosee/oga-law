import { motion } from 'framer-motion';
import { Megaphone, Shield, Zap, Users } from 'lucide-react';

const voices = [
  {
    name: 'Police Reform Voices',
    description: 'Activists focused on law enforcement accountability, checkpoint abuses, and police reform.',
    icon: Shield,
    examples: 'VeryDarkMan, Segalink, Rinu Oduala',
  },
  {
    name: 'Human Rights Voices',
    description: 'Civic leaders fighting unlawful detention, fundamental rights violations, and systemic injustice.',
    icon: Users,
    examples: 'Sowore, Aisha Yesufu, Falana & Falana',
  },
  {
    name: 'Digital Rights Voices',
    description: 'Advocates defending privacy, data protection, and freedom from unlawful digital searches.',
    icon: Zap,
    examples: 'FK Abudu, Paradigm Initiative, Gbenga Sesan',
  },
  {
    name: 'Gender Justice Voices',
    description: 'Champions fighting gender-based violence, VAPP Act enforcement, and women\'s rights.',
    icon: Megaphone,
    examples: 'Kiki Mordi, FIDA Nigeria, women\'s rights groups',
  },
];

const howItWorks = [
  'You document a rights violation with OgaLaw',
  'AI generates legal summary with laws violated',
  'You choose to escalate (anonymously or publicly)',
  'Case is routed to the best-matched Verified Voice',
  'Voice reviews evidence and posts to their audience',
  'Millions see it. Accountability follows. OgaLaw grows.',
];

const VoicesSection = () => {
  return (
    <section id="voices" className="py-24 relative bg-ogalaw-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-ogalaw-green font-semibold text-sm uppercase tracking-widest">The Voices Network</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-4 mb-6">
            Your Evidence.
            <br />
            <span className="gradient-text">Their Amplification.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            OgaLaw connects your documented case to Nigeria's most trusted activists and civic voices — 
            turning individual complaints into public accountability moments.
          </p>
        </motion.div>

        {/* Voice Categories */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {voices.map((voice, index) => (
            <motion.div
              key={voice.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-8 hover:border-ogalaw-green/20 transition-all"
            >
              <div className="w-12 h-12 bg-ogalaw-green/10 rounded-xl flex items-center justify-center mb-4">
                <voice.icon className="w-6 h-6 text-ogalaw-green" />
              </div>
              <h3 className="font-semibold text-xl mb-2">{voice.name}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{voice.description}</p>
              <div className="text-xs text-ogalaw-gold font-medium">
                Voices include: {voice.examples}
              </div>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            From Incident to <span className="gradient-text">Impact</span>
          </h3>
          <div className="space-y-4">
            {howItWorks.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-ogalaw-green/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-ogalaw-green font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-300 text-sm pt-1">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VoicesSection;