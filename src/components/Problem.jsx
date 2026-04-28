import { motion } from 'framer-motion';
import { AlertTriangle, Phone, Search, DollarSign } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: 'No Access to Legal Knowledge',
    description: '70% of Nigerians cannot name 3 fundamental rights guaranteed by the Constitution.',
    color: 'text-red-400',
    bg: 'bg-red-400/10',
  },
  {
    icon: Phone,
    title: 'Lawyers Are Out of Reach',
    description: 'Legal consultation is expensive and inaccessible when you need it most — at the checkpoint, during an arrest.',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
  },
  {
    icon: Search,
    title: 'Google Gives Wrong Answers',
    description: 'Search engines return generic, foreign legal information that does not apply to Nigerian law.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
  },
  {
    icon: DollarSign,
    title: 'Extortion Is Normalized',
    description: 'Without knowing your rights, "settlement" and unlawful payments become the default response.',
    color: 'text-ogalaw-gold',
    bg: 'bg-ogalaw-gold/10',
  },
];

const Problem = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 pattern-overlay opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-ogalaw-green font-semibold text-sm uppercase tracking-widest">The Problem</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-4 mb-6">
            Rights Exist on Paper.
            <br />
            <span className="text-gray-400">Not in Practice.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Nigeria has strong laws. But for most citizens, they might as well not exist. 
            Here's what happens when you need your rights and can't access them.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 hover:border-ogalaw-green/20 transition-all"
            >
              <div className={`w-12 h-12 ${problem.bg} rounded-xl flex items-center justify-center mb-4`}>
                <problem.icon className={`w-6 h-6 ${problem.color}`} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;