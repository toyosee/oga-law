import { motion } from 'framer-motion';
import { 
  MessageCircle, BookOpen, Zap, Shield, Smartphone, 
  Users, ArrowRight, CheckCircle, Wifi, Globe,
  FileText, AlertTriangle, Home
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Describe Your Situation',
    description: 'Type or speak what\'s happening — in English or Pidgin. No legal jargon needed. Just tell OgaLaw what\'s going on, the way you\'d tell a friend.',
    details: [
      'Works with voice input or text',
      'Understands English and Nigerian Pidgin',
      'No account required for basic queries',
      'Suggested scenarios if you\'re not sure how to start'
    ],
    color: 'from-ogalaw-green to-emerald-500',
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Get Your Rights — Instantly',
    description: 'OgaLaw\'s AI, trained exclusively on Nigerian law, responds with the specific statutes that apply, your exact rights in that situation, and a practical script of what to say.',
    details: [
      'Responses cite specific Nigerian laws and sections',
      'Scripts are respectful but firm — designed for real encounters',
      'Pidgin responses available with one tap',
      'Every response validated by Nigerian legal professionals'
    ],
    color: 'from-ogalaw-green to-ogalaw-gold',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Take Action',
    description: 'Knowledge is power. Use the provided script right there. Generate a formal complaint letter if your rights were violated. Or escalate to a verified lawyer for professional help.',
    details: [
      'One-tap complaint letter generation with statute citations',
      'Evidence preservation mode — record, timestamp, geo-tag',
      'Connect to NBA-verified lawyers via in-app consultation',
      'SOS emergency dispatch in critical situations'
    ],
    color: 'from-ogalaw-gold to-yellow-500',
  },
];

const useCases = [
  {
    icon: AlertTriangle,
    title: 'Police Checkpoints',
    description: 'Know what officers can and cannot demand. Phone search? Vehicle search? Learn your rights before you reach the checkpoint.',
  },
  {
    icon: Shield,
    title: 'Arrest & Detention',
    description: 'Understand bail rights, detention time limits, and what to do if you\'re being held unlawfully.',
  },
  {
    icon: FileText,
    title: 'FRSC & LASTMA Stops',
    description: 'Traffic stops have specific rules. Know what documents you must provide and what you can refuse.',
  },
  {
    icon: Smartphone,
    title: 'Digital Privacy',
    description: 'Can they search your phone? Demand your passwords? Know your digital rights under Nigerian law.',
  },
  {
    icon: Globe,
    title: 'Tenant & Landlord',
    description: 'Eviction rules, rent control, security deposits. Lagos Tenancy Law explained simply.',
  },
  {
    icon: Users,
    title: 'Consumer Rights',
    description: 'Defective products, false advertising, refund refusals. The FCCPA protects you — we explain how.',
  },
];

const offlineFeatures = [
  'Core AI assistant works without internet',
  'Top 50 most common scenarios available offline',
  'Complaint letter templates always accessible',
  'Emergency contacts saved locally',
  'Syncs when connection returns',
];

const HowItWorksPage = () => {
  const navigate = useNavigate();

  const handleHomeNavigation = (hash) => {
    navigate('/');
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ogalaw-darker pt-24">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 pattern-overlay" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-ogalaw-green/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-ogalaw-green font-semibold text-sm uppercase tracking-widest">
              How It Works
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mt-4 mb-6">
              From Confusion to Clarity
              <br />
              <span className="gradient-text">in Under 30 Seconds</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              OgaLaw is designed for real moments — at the checkpoint, during an arrest, 
              when you need answers now. Here's exactly how it works.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center shadow-2xl`}>
                    <step.icon className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="text-ogalaw-green font-black text-sm mb-2">Step {step.number}</div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{step.title}</h2>
                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckCircle className="w-5 h-5 text-ogalaw-green flex-shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-16 relative bg-ogalaw-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              When You'll Need <span className="gradient-text">OgaLaw</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real situations where knowing your rights makes all the difference.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-6 hover:border-ogalaw-green/20 transition-all"
              >
                <useCase.icon className="w-8 h-8 text-ogalaw-green mb-4" />
                <h3 className="font-semibold text-lg mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offline Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-3xl p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Wifi className="w-6 h-6 text-ogalaw-green" />
                  <span className="text-ogalaw-green font-semibold text-sm uppercase tracking-widest">
                    Works Offline
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black mb-4">
                  No Internet?
                  <br />
                  <span className="text-gray-400">No Problem.</span>
                </h2>
                <p className="text-gray-400 mb-6">
                  The moment you need your rights most — at a checkpoint, during an arrest — 
                  is exactly when you might not have data. OgaLaw's core features work completely offline.
                </p>
                <ul className="space-y-3">
                  {offlineFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle className="w-5 h-5 text-ogalaw-green flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-ogalaw-green/20 rounded-full blur-3xl" />
                  <div className="relative w-48 h-48 bg-ogalaw-gray rounded-full flex items-center justify-center border-2 border-ogalaw-green/30">
                    <Wifi className="w-16 h-16 text-ogalaw-green" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black mb-6">
              Ready to Try It?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Early access is free. Download OgaLaw and walk into your next encounter 
              knowing exactly where you stand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-ogalaw-green hover:bg-ogalaw-green-dark text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-ogalaw-green/20 group"
              >
                Get Early Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleHomeNavigation('features')}
                className="border border-gray-700 hover:border-ogalaw-green/50 text-white px-8 py-4 rounded-xl font-semibold transition-all"
              >
                Explore Features
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleHomeNavigation()}
                className="border border-gray-700 hover:border-ogalaw-green/50 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Back to Home
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;