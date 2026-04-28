import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Wifi, MessageSquare, FileText } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Nigerian Law Expert',
    description: 'AI trained exclusively on the Constitution, Police Act 2020, ACJA, and all relevant Nigerian statutes.',
  },
  {
    icon: Zap,
    title: 'Instant Answers',
    description: 'Get specific, actionable legal information in under 30 seconds — at the checkpoint or in the station.',
  },
  {
    icon: MessageSquare,
    title: 'Speaks Pidgin & English',
    description: 'Ask questions in English or Pidgin. Get responses you understand. Yoruba, Hausa, Igbo coming soon.',
  },
  {
    icon: Wifi,
    title: 'Works Offline',
    description: 'No internet? No problem. Core functions work without data — exactly when you need them most.',
  },
  {
    icon: FileText,
    title: 'Complaint Letters, Instantly',
    description: 'Auto-generate formal legal complaint letters with all relevant statutes cited. Ready to file.',
  },
  {
    icon: Globe,
    title: 'Verified Lawyer Network',
    description: 'AI not enough? Connect instantly to NBA-verified lawyers via in-app consultation with escrow payments.',
  },
];

const Solution = () => {
  return (
    <section id="features" className="py-24 relative bg-ogalaw-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-ogalaw-green font-semibold text-sm uppercase tracking-widest">Our Solution</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-4 mb-6">
            The <span className="gradient-text">Law Boss</span>
            <br />
            In Your Pocket
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            OgaLaw puts Nigerian legal rights in every pocket — instant, accurate, 
            and always available. Here's what that looks like.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group glass rounded-2xl p-8 hover:border-ogalaw-green/30 transition-all cursor-default"
            >
              <div className="w-14 h-14 bg-ogalaw-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ogalaw-green/20 transition-colors">
                <feature.icon className="w-7 h-7 text-ogalaw-green" />
              </div>
              <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;