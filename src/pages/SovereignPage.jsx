import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Server, Shield, Lock, Globe, ArrowRight, Check, Database, Cloud } from 'lucide-react'

const features = [
  {
    icon: Lock,
    title: 'Post-Quantum Encryption',
    description: 'Future-proof security with encryption algorithms designed to withstand quantum computing attacks.',
  },
  {
    icon: Shield,
    title: 'Zero-Trust Architecture',
    description: 'Every access request is verified. No implicit trust, ever. Complete access logs and audit trails.',
  },
  {
    icon: Database,
    title: 'On-Premise Deployment',
    description: 'Run the entire IWEBai stack on your own infrastructure. Your data never leaves your walls.',
  },
  {
    icon: Cloud,
    title: 'Private Cloud Ready',
    description: 'Deploy on AWS, Azure, GCP, or your own private cloud with full sovereignty guarantees.',
  },
]

const specs = [
  { label: 'Base OS', value: 'Fedora Server' },
  { label: 'AI Runtime', value: 'Qwen 2.5 Optimized' },
  { label: 'Encryption', value: 'Post-Quantum Ready' },
  { label: 'Compliance', value: 'SOC 2, ISO 27001' },
]

export default function SovereignPage() {
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
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 text-sm font-medium mb-8">
              <Server className="w-4 h-4 text-emerald-400" />
              <span>Infrastructure</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
          >
            Your data. Your server.
            <br />
            <span className="bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">Total sovereignty.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12"
          >
            Most ERPs force your secrets onto their cloud. IWEBai is built for on-premise and 
            private cloud deployments. Run the entire stack on your own infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="mailto:contact@iwebai.com" className="btn-primary group flex items-center gap-2">
              <span>Request Demo</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link to="/compliance" className="btn-secondary">
              View Compliance
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {specs.map((spec, index) => (
              <div
                key={spec.label}
                className="p-6 rounded-2xl border border-white/[0.05] bg-white/[0.02] text-center"
              >
                <p className="text-zinc-500 text-sm mb-2">{spec.label}</p>
                <p className="text-white font-semibold">{spec.value}</p>
              </div>
            ))}
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
            <p className="text-emerald-400 font-medium text-sm tracking-widest uppercase mb-4">
              Security First
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Built for the paranoid
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

      {/* Architecture */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-12 md:p-16 rounded-3xl border border-white/[0.05] bg-gradient-to-br from-emerald-500/5 to-transparent"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Deployment options
              </h2>
              <p className="text-zinc-400">
                Choose the deployment model that fits your security requirements
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                <h3 className="font-semibold text-white mb-2">On-Premise</h3>
                <p className="text-zinc-500 text-sm">
                  Full deployment on your own hardware. Maximum control and isolation.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                <h3 className="font-semibold text-white mb-2">Private Cloud</h3>
                <p className="text-zinc-500 text-sm">
                  Your own VPC on AWS, Azure, or GCP. We deploy, you control.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                <h3 className="font-semibold text-white mb-2">Hybrid</h3>
                <p className="text-zinc-500 text-sm">
                  Sensitive data on-premise, compute in the cloud. Best of both worlds.
                </p>
              </div>
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
            Take control of your infrastructure
          </h2>
          <p className="text-xl text-zinc-400 mb-12">
            Schedule a demo to see the Sovereign Engine in action.
          </p>
          <a href="mailto:contact@iwebai.com" className="btn-primary group inline-flex items-center gap-2">
            <span>Schedule Demo</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </section>
    </motion.div>
  )
}
