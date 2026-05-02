import { motion } from 'framer-motion';
import { MessageCircle, BookOpen, Zap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Describe Your Situation',
    description: 'Type or speak what\'s happening — in English or Pidgin. "Police say make I open my phone." It\'s that simple.',
    color: 'from-ogalaw-green to-emerald-500',
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Get Your Rights',
    description: 'OgaLaw responds with the specific law, your exact rights, and a script of what to say — all in plain language.',
    color: 'from-ogalaw-green to-ogalaw-gold',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Escalate For Accountability',
    description: 'Submit your documented case to OgaLaw Verified Voices — trusted activists who amplify your fight to millions.',
    color: 'from-ogalaw-gold to-yellow-500',
  },
];

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-ogalaw-green font-semibold text-sm uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-4 mb-6">
            From Confusion to Clarity
            <br />
            <span className="text-gray-400">in Under 30 Seconds</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Connecting Line (Desktop) */}
              {index < 2 && (
                <div className="hidden lg:block absolute top-20 left-full w-12 h-0.5 bg-gradient-to-r from-ogalaw-green/50 to-transparent" />
              )}
              
              <div className="glass rounded-2xl p-8 text-center hover:border-ogalaw-green/20 transition-all">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-ogalaw-green font-black text-sm mb-3">Step {step.number}</div>
                <h3 className="font-semibold text-xl mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to Full How It Works Page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              navigate('/how-it-works');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-ogalaw-green/10 border border-ogalaw-green/20 hover:border-ogalaw-green/40 text-ogalaw-green px-6 py-3 rounded-xl font-semibold transition-all group"
          >
            See Full Guide
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;