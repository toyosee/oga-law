import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-ogalaw-green/5 to-transparent" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-20 h-20 mx-auto bg-ogalaw-green/10 rounded-3xl flex items-center justify-center mb-8">
            <Shield className="w-10 h-10 text-ogalaw-green" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Ready to Become the{' '}
            <span className="gradient-text">Oga</span>
            <br />
            of Your Rights?
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Join thousands of Nigerians who are taking control of their encounters with 
            law enforcement. Early access is free. Knowledge is power.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-ogalaw-green hover:bg-ogalaw-green-dark text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-ogalaw-green/20 group"
            >
              Get Early Access — Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-gray-700 hover:border-ogalaw-green/50 text-white px-10 py-5 rounded-2xl font-bold text-lg"
            >
              I'm a Lawyer — Join the Network
            </motion.button>
          </div>

          <p className="text-gray-600 text-sm mt-6">
            No credit card required. Free core tier. Premium starts at ₦500/month.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;