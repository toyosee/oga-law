import { motion } from 'framer-motion';

const stats = [
  { number: '110M+', label: 'Nigerian Adults', sublabel: 'Total Addressable Market' },
  { number: '70%', label: 'Can\'t Name 3 Rights', sublabel: 'Knowledge Gap' },
  { number: '100K+', label: 'Licensed Lawyers', sublabel: 'Ready to Serve' },
  { number: '<30s', label: 'Response Time', sublabel: 'From Question to Answer' },
];

const Stats = () => {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-black gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;