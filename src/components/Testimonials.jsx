import { motion } from 'framer-motion';
import { Shield, Megaphone } from 'lucide-react';

const testimonials = [
  {
    before: {
      quote: 'They asked for my phone. I didn\'t know I could say no. I just unlocked it and handed it over.',
      type: 'Without OgaLaw',
      color: 'from-red-400/20 to-red-400/5 border-red-400/20',
      badge: 'text-red-400',
    },
    after: {
      quote: 'OgaLaw told me Section 37 protects my privacy. I asked for a warrant. The officer backed down.',
      type: 'With OgaLaw',
      color: 'from-ogalaw-green/20 to-ogalaw-green/5 border-ogalaw-green/20',
      badge: 'text-ogalaw-green',
      icon: Shield,
    },
    author: 'Lagos Driver',
    context: 'Checkpoint Encounter',
  },
  {
    before: {
      quote: 'I paid ₦5,000 at the checkpoint because I didn\'t know the law. I just wanted to go home.',
      type: 'Without OgaLaw',
      color: 'from-orange-400/20 to-orange-400/5 border-orange-400/20',
      badge: 'text-orange-400',
    },
    after: {
      quote: 'I documented everything with OgaLaw, escalated to a Verified Voice, and the story went viral. The officers were investigated.',
      type: 'With OgaLaw',
      color: 'from-ogalaw-green/20 to-ogalaw-green/5 border-ogalaw-green/20',
      badge: 'text-ogalaw-green',
      icon: Megaphone,
    },
    author: 'Abuja Commuter',
    context: 'Extortion Attempt',
  },
  {
    before: {
      quote: 'I spent 3 days in detention. No one told me about bail. No one told me anything.',
      type: 'Without OgaLaw',
      color: 'from-yellow-400/20 to-yellow-400/5 border-yellow-400/20',
      badge: 'text-yellow-400',
    },
    after: {
      quote: 'OgaLaw explained my bail rights under the ACJA. I knew exactly what to say and how long they could hold me.',
      type: 'With OgaLaw',
      color: 'from-ogalaw-green/20 to-ogalaw-green/5 border-ogalaw-green/20',
      badge: 'text-ogalaw-green',
      icon: Shield,
    },
    author: 'Benin Resident',
    context: 'Unlawful Detention',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-ogalaw-green font-semibold text-sm uppercase tracking-widest">Real Impact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-4 mb-6">
            The OgaLaw
            <br />
            <span className="gradient-text">Difference</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            The same encounters. The same citizens. One difference — knowing your rights and having the power to escalate.
          </p>
        </motion.div>

        <div className="space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="grid md:grid-cols-2 gap-4"
            >
              {/* Before Card */}
              <div className={`rounded-2xl p-6 bg-gradient-to-br ${testimonial.before.color} border relative overflow-hidden`}>
                {/* Label */}
                <div className={`text-xs font-bold ${testimonial.before.badge} mb-4 uppercase tracking-wider flex items-center gap-2`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  {testimonial.before.type}
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-300 mb-4 leading-relaxed text-sm">
                  "{testimonial.before.quote}"
                </blockquote>

                {/* Watermark */}
                <div className="absolute -bottom-3 -right-3 text-6xl font-black opacity-5 select-none">
                  ✕
                </div>
              </div>

              {/* After Card */}
              <div className={`rounded-2xl p-6 bg-gradient-to-br ${testimonial.after.color} border relative overflow-hidden`}>
                {/* Label */}
                <div className={`text-xs font-bold ${testimonial.after.badge} mb-4 uppercase tracking-wider flex items-center gap-2`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  {testimonial.after.type}
                </div>
                
                {/* Quote */}
                <blockquote className="text-gray-200 mb-4 leading-relaxed text-sm">
                  "{testimonial.after.quote}"
                </blockquote>

                {/* Icon Watermark */}
                {testimonial.after.icon && (
                  <div className="absolute -bottom-2 -right-2 opacity-10">
                    <testimonial.after.icon className="w-16 h-16 text-ogalaw-green" />
                  </div>
                )}
              </div>

              {/* Author Info (spanning both cards) */}
              <div className="md:col-span-2 flex items-center justify-between px-2">
                <div>
                  <div className="font-semibold text-sm text-white">{testimonial.author}</div>
                  <div className="text-gray-500 text-xs">{testimonial.context}</div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-red-400/30 to-ogalaw-green/30 rounded-full" />
                  <span className="text-[10px] text-gray-600 uppercase tracking-wider">transformation</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-ogalaw-green/10 border border-ogalaw-green/20 rounded-full px-6 py-3">
            <Megaphone className="w-4 h-4 text-ogalaw-green" />
            <span className="text-ogalaw-green text-sm font-semibold">
              Same encounter. Different outcome. That's the OgaLaw difference.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;