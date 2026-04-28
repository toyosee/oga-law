import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center pt-30 pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-overlay" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-ogalaw-green/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-ogalaw-gold/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-ogalaw-green/10 border border-ogalaw-green/20 rounded-full px-4 py-2"
            >
              <span className="w-2 h-2 bg-ogalaw-green rounded-full animate-pulse" />
              <span className="text-ogalaw-green text-sm font-medium">Coming Soon to Android & iOS</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight">
              Know Law.
              <br />
              <span className="gradient-text">No Shaking.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-400 max-w-lg leading-relaxed">
              Your AI-powered legal rights assistant. Trained on Nigerian law. 
              Works offline. Connects you to verified lawyers when you need more than answers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
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
                onClick={() => {
                  navigate('/how-it-works');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="border border-gray-700 hover:border-ogalaw-green/50 text-white px-8 py-4 rounded-xl font-semibold transition-all"
              >
                How It Works
              </motion.button>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-ogalaw-gray border-2 border-ogalaw-darker flex items-center justify-center text-xs font-bold">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400">
                <span className="text-white font-semibold">500+</span> early access signups
              </p>
            </div>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-gradient-to-br from-ogalaw-green/30 to-ogalaw-gold/20 rounded-[3rem] blur-2xl scale-90" />
              
              {/* Phone Frame */}
              <div className="relative w-72 h-[580px] bg-ogalaw-gray rounded-[2.5rem] border-2 border-gray-700 overflow-hidden shadow-2xl">
                {/* Status Bar */}
                <div className="h-8 bg-black/50 flex items-center justify-between px-6">
                  <span className="text-xs text-gray-400">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full border border-gray-400" />
                    <div className="w-3 h-3 rounded-full border border-gray-400" />
                  </div>
                </div>

                {/* App Content */}
                <div className="p-4 space-y-4">
                  {/* App Header */}
                  <div className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-ogalaw-green" />
                    <span className="font-bold text-sm">OgaLaw</span>
                  </div>

                  {/* Chat Messages */}
                  <div className="space-y-3">
                    <div className="bg-ogalaw-green/10 rounded-2xl rounded-tl-sm p-3 max-w-[90%]">
                      <p className="text-xs text-gray-300">
                        Police stop me for road, say make I open my phone. Wetin I fit do?
                      </p>
                    </div>
                    <div className="bg-ogalaw-green rounded-2xl rounded-tr-sm p-3 ml-auto max-w-[90%]">
                      <p className="text-xs text-white">
                        Under Section 37 of the Constitution, you have the right to privacy. 
                        Officers need a warrant to search your phone. Ask: "Officer, do you have a warrant?"
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <div className="bg-ogalaw-gray/50 rounded-xl p-2 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-ogalaw-gold" />
                      <span className="text-xs">Generate Complaint Letter</span>
                    </div>
                    <div className="bg-ogalaw-gray/50 rounded-xl p-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-ogalaw-green" />
                      <span className="text-xs">Connect to Verified Lawyer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;