import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Brain, Server, Globe, Zap, Lock, Code, BarChart3 } from 'lucide-react'

const bentoItems = [
  {
    id: 1,
    title: 'Fixpoint Security',
    description: 'Code-level immunity for your CI/CD pipeline',
    icon: Shield,
    link: '/fixpoint',
    size: 'large',
    stats: 'Deterministic AST Fixes',
  },
  {
    id: 2,
    title: 'BanikAI Finance',
    description: 'Autonomous ledger with real-time auditing',
    icon: Brain,
    link: '/banik-ai',
    size: 'large',
    stats: 'Zero-touch Reconciliation',
  },
  {
    id: 3,
    title: 'Real-time Scanning',
    description: 'Every PR scanned in milliseconds',
    icon: Zap,
    link: '/fixpoint',
    size: 'small',
  },
  {
    id: 4,
    title: 'Financial Firewall',
    description: 'Block suspicious transactions instantly',
    icon: Lock,
    link: '/banik-ai',
    size: 'small',
  },
  {
    id: 5,
    title: 'Sovereign Engine',
    description: 'Your data, your infrastructure',
    icon: Server,
    link: '/sovereign',
    size: 'medium',
  },
  {
    id: 6,
    title: 'Global Compliance',
    description: 'IFRS, GAAP, and local regulations',
    icon: Globe,
    link: '/compliance',
    size: 'medium',
  },
  {
    id: 7,
    title: 'Auto-Fix PRs',
    description: 'Deterministic fixes applied automatically',
    icon: Code,
    link: '/fixpoint',
    size: 'small',
  },
  {
    id: 8,
    title: 'Treasury Analytics',
    description: 'Multi-currency real-time insights',
    icon: BarChart3,
    link: '/banik-ai',
    size: 'small',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function BentoGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gray-500 font-medium text-sm tracking-wider uppercase">
            Composable Architecture
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-bold text-white">
            Start Small. <span className="gradient-text">Scale Everything.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
            IWEBai is modular by design. Begin with one service and expand into a complete autonomous ERP.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[180px]"
        >
          {bentoItems.map((bentoItem) => (
            <motion.div
              key={bentoItem.id}
              variants={item}
              className={`
                ${bentoItem.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${bentoItem.size === 'medium' ? 'lg:col-span-2' : ''}
              `}
            >
              <Link
                to={bentoItem.link}
                className="group relative h-full block bg-white/[0.02] border border-white/5 rounded-2xl p-6 overflow-hidden hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
              >
                {/* Icon */}
                <div className="inline-flex p-3 rounded-xl bg-white/5 mb-4">
                  <bentoItem.icon className="w-6 h-6 text-white/70" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-white transition-colors">
                  {bentoItem.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {bentoItem.description}
                </p>

                {/* Stats for large items */}
                {bentoItem.stats && bentoItem.size === 'large' && (
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <span className="text-lg font-semibold text-gray-400">{bentoItem.stats}</span>
                  </div>
                )}

                {/* Arrow */}
                <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                  <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
