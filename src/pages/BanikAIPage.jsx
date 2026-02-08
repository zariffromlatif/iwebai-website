import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Brain, BarChart3, Shield, Zap, ArrowRight, Check, AlertTriangle, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Zero-Touch Reconciliation',
    description: 'Automatically match transactions across bank feeds, invoices, and internal records without manual intervention.',
  },
  {
    icon: Shield,
    title: 'Financial Firewall',
    description: 'Every transaction is treated as a security event. Anomalies trigger instant blocks until verified.',
  },
  {
    icon: Zap,
    title: 'Real-Time Compliance',
    description: 'Automated adherence to IFRS, GAAP, and local regulations. Always audit-ready.',
  },
  {
    icon: TrendingUp,
    title: 'Treasury Intelligence',
    description: 'Multi-currency analytics and cash flow forecasting powered by agentic AI.',
  },
]

const capabilities = [
  'Bank Feed Integration',
  'Invoice Verification',
  'Fraud Detection',
  'Multi-Currency Support',
  'Tax Compliance',
  'Audit Trail',
]

export default function BanikAIPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 bg-[#0a0a0a]"
    >
      <div className="noise" />

      {/* Hero */}
      <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 text-sm font-medium mb-8">
              <Brain className="w-4 h-4 text-blue-400" />
              <span>Financial Intelligence</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
          >
            The ledger that
            <br />
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">audits itself</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12"
          >
            BanikAI is an agentic financial layer that treats every transaction as a security event. 
            Powered by Qwen 2.5, it hunts for data, reconciles feeds, and ensures 100% compliance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="mailto:contact@iwebai.com" className="btn-primary group flex items-center gap-2">
              <span>Request Access</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link to="/fixpoint" className="btn-secondary">
              Explore Fixpoint
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Financial Firewall Demo */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl border border-white/[0.05] bg-white/[0.02] overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05] bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-zinc-500 font-mono ml-2">BanikAI Financial Monitor</span>
            </div>

            <div className="p-6 font-mono text-sm">
              <div className="text-zinc-500 mb-4"># Monitoring transactions...</div>
              <div className="text-zinc-400 mb-2">
                <span className="text-emerald-400">✓</span> INV-2024-001: $12,450.00 — Verified supplier match
              </div>
              <div className="text-zinc-400 mb-2">
                <span className="text-emerald-400">✓</span> INV-2024-002: $8,200.00 — Bank feed reconciled
              </div>
              <div className="text-amber-400 mb-2 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>INV-2024-003: $45,000.00 — <span className="text-white">BLOCKED</span></span>
              </div>
              <div className="pl-6 mb-4 text-zinc-500 text-xs">
                Reason: Amount exceeds historical pattern by 340%. Awaiting verification.
              </div>
              <div className="text-zinc-500"># Alert sent to treasury team</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/[0.03]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-blue-400 font-medium text-sm tracking-widest uppercase mb-4">
              Capabilities
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Finance that defends itself
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/[0.1] transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-white/[0.05] w-fit mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities List */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-12 md:p-16 rounded-3xl border border-white/[0.05] bg-gradient-to-br from-blue-500/5 to-transparent"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Complete financial coverage
              </h2>
              <p className="text-zinc-400">
                Everything you need for autonomous financial operations
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {capabilities.map((cap, index) => (
                <motion.div
                  key={cap}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]"
                >
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm text-white font-medium">{cap}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 lg:px-8 border-t border-white/[0.03]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to automate your finance?
          </h2>
          <p className="text-xl text-zinc-400 mb-12">
            Join companies building autonomous financial operations.
          </p>
          <a href="mailto:contact@iwebai.com" className="btn-primary group inline-flex items-center gap-2">
            <span>Request Early Access</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </section>
    </motion.div>
  )
}
