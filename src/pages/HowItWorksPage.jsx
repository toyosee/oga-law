import { motion } from 'framer-motion';
import { 
  MessageCircle, BookOpen, Camera, Megaphone, Shield, Smartphone, 
  Users, ArrowRight, CheckCircle, Wifi, Globe,
  FileText, AlertTriangle, Home, Zap, Eye, Lock, Bell
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Describe Your Situation',
    subtitle: 'Speak or type — English or Pidgin',
    description: 'Tell OgaLaw what\'s happening, the way you\'d tell a friend. No legal jargon needed. The AI understands natural language and Nigerian Pidgin.',
    details: [
      'Voice input or text — whatever works in the moment',
      'English and Nigerian Pidgin supported',
      'No account required for basic queries',
      'Suggested scenarios for common encounters'
    ],
    color: 'from-ogalaw-green to-emerald-500',
    gradient: 'from-ogalaw-green/20 to-emerald-500/5',
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Get Your Rights — Instantly',
    subtitle: 'Specific laws. Clear scripts.',
    description: 'OgaLaw\'s AI, trained exclusively on Nigerian law, responds with the exact statutes that apply, your rights in that situation, and a practical script of exactly what to say.',
    details: [
      'Responses cite specific Nigerian laws and sections',
      'Scripts are respectful but firm — designed for real encounters',
      'Pidgin responses available with one tap',
      'Every response validated by Nigerian legal professionals'
    ],
    color: 'from-ogalaw-green to-ogalaw-gold',
    gradient: 'from-ogalaw-green/20 to-ogalaw-gold/5',
  },
  {
    number: '03',
    icon: Camera,
    title: 'Preserve Evidence',
    subtitle: 'Document everything. Automatically.',
    description: 'One tap activates Evidence Mode — recording audio, capturing photos, geo-tagging your location, and timestamping everything. Creates a contemporaneous record that holds weight.',
    details: [
      'One-tap audio recording with auto-transcription',
      'Photo capture with automatic geo-tagging',
      'Timestamped, verifiable incident log',
      'All evidence encrypted and stored securely'
    ],
    color: 'from-ogalaw-gold to-orange-500',
    gradient: 'from-ogalaw-gold/20 to-orange-500/5',
  },
  {
    number: '04',
    icon: Megaphone,
    title: 'Escalate for Accountability',
    subtitle: 'Your evidence. Their amplification.',
    description: 'Submit your documented case to the OgaLaw Verified Voices Network. Trusted Nigerian activists and civic leaders review your packaged evidence and amplify it to millions.',
    details: [
      'Choose to escalate any documented incident',
      'Control your anonymity — stay private or go public',
      'Case routed to best-matched Verified Voice',
      'Get notified when your case is accepted and amplified'
    ],
    color: 'from-ogalaw-green to-ogalaw-green-dark',
    gradient: 'from-ogalaw-green/20 to-ogalaw-green-dark/5',
  },
];

const useCases = [
  {
    icon: AlertTriangle,
    title: 'Police Checkpoints',
    description: 'Know what officers can and cannot demand. Phone search? Vehicle search? Get clear answers before you reach the checkpoint.',
  },
  {
    icon: Shield,
    title: 'Arrest & Detention',
    description: 'Understand bail rights, detention time limits, and exactly what to do if you\'re being held unlawfully.',
  },
  {
    icon: FileText,
    title: 'FRSC & LASTMA Stops',
    description: 'Traffic stops have specific rules. Know what documents you must provide and what you can legally refuse.',
  },
  {
    icon: Smartphone,
    title: 'Digital Privacy',
    description: 'Can they search your phone? Demand your passwords? Know your digital rights under Nigerian law.',
  },
  {
    icon: Globe,
    title: 'Tenant & Landlord',
    description: 'Eviction rules, rent control, security deposits. Lagos Tenancy Law explained in plain language.',
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
  'Evidence mode records locally — syncs later',
  'Complaint letter templates always accessible',
  'Emergency contacts saved on device',
];

const escalationFeatures = [
  { icon: Eye, title: 'You Choose Visibility', description: 'Stay anonymous or go public — you control how your story is shared.' },
  { icon: Zap, title: 'Smart Routing', description: 'Your case is matched to the Verified Voice best positioned to amplify it.' },
  { icon: Bell, title: 'Real-Time Updates', description: 'Get notified when your case is accepted, reviewed, and amplified.' },
  { icon: Lock, title: 'Privacy Protected', description: 'All evidence encrypted. You can delete your data anytime.' },
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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-overlay" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ogalaw-green/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ogalaw-gold/5 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-ogalaw-green font-semibold text-sm uppercase tracking-widest">
              How It Works
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mt-4 mb-6 leading-[1.05]">
              Four Steps to
              <br />
              <span className="gradient-text">Full Protection</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              OgaLaw transforms you from a vulnerable citizen into a documented, protected, 
              and amplified rights defender. Here's the complete journey — from encounter to accountability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section — Enhanced UX */}
      <section className="py-16 relative">
        {/* Timeline Line (Desktop) */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-ogalaw-green/30 via-ogalaw-gold/20 to-ogalaw-green/10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center relative`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-ogalaw-darker border-4 border-ogalaw-green z-10 shadow-lg shadow-ogalaw-green/20" />
                
                {/* Step Icon */}
                <div className={`flex-shrink-0 lg:w-1/2 flex ${index % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl blur-xl opacity-30`} />
                    <div className={`relative w-28 h-28 lg:w-36 lg:h-36 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center shadow-2xl`}>
                      <step.icon className="w-14 h-14 lg:w-18 lg:h-18 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 lg:w-1/2 ${index % 2 === 1 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 1 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.2 }}
                    className={`glass rounded-2xl p-6 sm:p-8 bg-gradient-to-br ${step.gradient} border border-gray-700/50 hover:border-ogalaw-green/30 transition-all`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-ogalaw-green font-black text-xs bg-ogalaw-green/10 px-2.5 py-1 rounded-full">
                        Step {step.number}
                      </span>
                      <span className="text-gray-500 text-xs">{step.subtitle}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-3">{step.title}</h2>
                    <p className="text-gray-400 text-sm sm:text-base mb-5 leading-relaxed">{step.description}</p>
                    <ul className={`space-y-2.5 ${index % 2 === 1 ? 'lg:pr-4' : 'lg:pl-2'}`}>
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-ogalaw-green flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-16 relative bg-ogalaw-dark/30">
        <div className="absolute inset-0 pattern-overlay opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="text-ogalaw-green font-semibold text-sm uppercase tracking-widest">Use Cases</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-3 mb-4">
              When You'll Need <span className="gradient-text">OgaLaw</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Real situations where knowing your rights — and having the power to escalate — changes everything.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group glass rounded-2xl p-6 hover:border-ogalaw-green/30 transition-all"
              >
                <div className="w-10 h-10 bg-ogalaw-green/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-ogalaw-green/20 transition-colors">
                  <useCase.icon className="w-5 h-5 text-ogalaw-green" />
                </div>
                <h3 className="font-semibold text-base mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Section: Offline + Escalation */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Offline Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-ogalaw-green/5 to-transparent border border-gray-700/50"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-ogalaw-green/10 rounded-2xl flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-ogalaw-green" />
                </div>
                <div>
                  <span className="text-ogalaw-green font-semibold text-xs uppercase tracking-widest">Offline First</span>
                  <h3 className="text-xl font-bold">No Internet? No Problem.</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                The moment you need your rights most — at a checkpoint, during an arrest — is exactly when you might not have data. OgaLaw's core features work completely offline.
              </p>
              <ul className="space-y-2.5">
                {offlineFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-ogalaw-green flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Escalation Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-ogalaw-gold/5 to-transparent border border-gray-700/50"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-ogalaw-gold/10 rounded-2xl flex items-center justify-center">
                  <Megaphone className="w-6 h-6 text-ogalaw-gold" />
                </div>
                <div>
                  <span className="text-ogalaw-gold font-semibold text-xs uppercase tracking-widest">Escalation Layer</span>
                  <h3 className="text-xl font-bold">Amplify Your Voice</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                When documenting isn't enough, submit your case to Nigeria's most trusted activist voices. They review your evidence and amplify it to millions.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {escalationFeatures.map((feature, i) => (
                  <div key={i} className="bg-ogalaw-gray/50 rounded-xl p-3">
                    <feature.icon className="w-4 h-4 text-ogalaw-green mb-1.5" />
                    <h4 className="text-xs font-semibold text-white mb-0.5">{feature.title}</h4>
                    <p className="text-[10px] text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-ogalaw-green/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 mx-auto bg-ogalaw-green/10 rounded-3xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-ogalaw-green" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Ready to Become the{' '}
              <span className="gradient-text">Oga</span>
              <br />
              of Your Rights?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Early access is free. Walk into your next encounter knowing exactly where you stand — 
              and who's ready to amplify your voice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-ogalaw-green hover:bg-ogalaw-green-dark text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-ogalaw-green/20 group"
              >
                Get Early Access — Free
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