import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'They asked for my phone. I didn\'t know I could say no. I just unlocked it and handed it over.',
    author: 'Lagos Resident',
    context: '2024',
    type: 'Without OgaLaw',
    color: 'from-red-400/20 to-red-400/5 border-red-400/20',
  },
  {
    quote: 'I paid ₦5,000 at the checkpoint because I didn\'t know the law. I just wanted to go home.',
    author: 'Abuja Commuter',
    context: '2024',
    type: 'Without OgaLaw',
    color: 'from-orange-400/20 to-orange-400/5 border-orange-400/20',
  },
  {
    quote: 'I spent 3 days in detention. No one told me about bail. No one told me anything.',
    author: 'Benin Resident',
    context: '2024',
    type: 'Without OgaLaw',
    color: 'from-yellow-400/20 to-yellow-400/5 border-yellow-400/20',
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
          <span className="text-red-400 font-semibold text-sm uppercase tracking-widest">Real Stories</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-4 mb-6">
            This Happens Every Day
            <br />
            <span className="text-gray-400">To Real Nigerians</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            These are the stories of Nigerians who needed OgaLaw — before OgaLaw existed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`rounded-2xl p-6 bg-gradient-to-br ${testimonial.color} border`}
            >
              <div className="text-xs font-bold text-red-400 mb-4 uppercase tracking-wider">
                {testimonial.type}
              </div>
              <blockquote className="text-gray-300 mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-sm">{testimonial.author}</div>
                <div className="text-gray-500 text-xs">{testimonial.context}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-ogalaw-green/10 border border-ogalaw-green/20 rounded-full px-6 py-3">
            <span className="text-ogalaw-green text-sm font-semibold">
              Knowledge is the difference between victim and citizen.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;