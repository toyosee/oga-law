import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Users, CheckCircle } from 'lucide-react';

const verifiedVoices = [
  { name: 'VeryDarkMan', followers: '2.3M', platform: 'IG' },
  { name: 'Omoyele Sowore', followers: '1.7M', platform: 'X' },
  { name: 'Aisha Yesufu', followers: '1.2M', platform: 'X' },
  { name: 'Rinu Oduala', followers: '890K', platform: 'X' },
];

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
              Works offline. Document violations and escalate to voices that fight for you.
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
              <div className="relative w-72 h-[640px] bg-ogalaw-gray rounded-[2.5rem] border-2 border-gray-700 overflow-hidden shadow-2xl">
                {/* Status Bar */}
                <div className="h-8 bg-black/50 flex items-center justify-between px-6">
                  <span className="text-xs text-gray-400">9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full border border-gray-400" />
                    <div className="w-3 h-3 rounded-full border border-gray-400" />
                  </div>
                </div>

                {/* App Content */}
                <div className="p-4 space-y-3">
                  {/* App Header */}
                  <div className="flex items-center gap-2 pb-2 border-b border-gray-700/50">
                    <Shield className="w-5 h-5 text-ogalaw-green" />
                    <span className="font-bold text-sm">OgaLaw</span>
                    <span className="ml-auto text-[10px] text-gray-500">Escalation Hub</span>
                  </div>

                  {/* Escalation Banner */}
                  <div className="bg-ogalaw-green/10 rounded-xl p-2.5 border border-ogalaw-green/20">
                    <div className="flex items-center gap-2 mb-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-ogalaw-green" />
                      <span className="text-[10px] font-semibold text-ogalaw-green">CASE READY TO ESCALATE</span>
                    </div>
                    <p className="text-[10px] text-gray-300 leading-relaxed">
                      Your documented incident has been packaged with evidence and legal citations.
                    </p>
                  </div>

                  {/* Voice Selection Header */}
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-ogalaw-green" />
                    <span className="text-xs font-semibold">Select Voice to Escalate</span>
                  </div>

                  {/* Verified Voices List */}
                  <div className="space-y-1.5">
                    {verifiedVoices.map((voice, index) => (
                      <div
                        key={voice.name}
                        className={`flex items-center gap-2.5 p-2 rounded-lg transition-all ${
                          index === 0
                            ? 'bg-ogalaw-green/15 border border-ogalaw-green/30'
                            : 'bg-ogalaw-gray/50 border border-gray-700/30 hover:border-ogalaw-green/20'
                        }`}
                      >
                        {/* Avatar Circle */}
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                          index === 0
                            ? 'bg-ogalaw-green text-white'
                            : 'bg-ogalaw-gray text-ogalaw-green'
                        }`}>
                          <span className="text-[9px] font-bold">
                            {voice.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        
                        {/* Voice Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className={`text-[10px] font-semibold truncate ${
                              index === 0 ? 'text-ogalaw-green' : 'text-gray-200'
                            }`}>
                              {voice.name}
                            </span>
                            {/* Verification Badge */}
                            <Shield className={`w-2.5 h-2.5 flex-shrink-0 ${
                              index === 0 ? 'text-ogalaw-green' : 'text-gray-500'
                            }`} />
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-[9px] text-gray-500">{voice.followers}</span>
                            <span className="text-[9px] text-gray-600">{voice.platform}</span>
                          </div>
                        </div>

                        {/* Radio Indicator */}
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          index === 0
                            ? 'border-ogalaw-green'
                            : 'border-gray-600'
                        }`}>
                          {index === 0 && (
                            <div className="w-2 h-2 rounded-full bg-ogalaw-green" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Submit Button */}
                  <div className="bg-ogalaw-green rounded-xl p-2.5 flex items-center justify-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-white" />
                    <span className="text-[10px] font-semibold text-white">Submit for Amplification</span>
                  </div>

                  {/* Footer Note */}
                  <p className="text-[9px] text-gray-500 text-center">
                    Your identity is protected. You control anonymity.
                  </p>
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