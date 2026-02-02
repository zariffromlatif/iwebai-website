import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Globe, Shield, FileCheck, Scale, ArrowRight, Check, MapPin } from 'lucide-react'

const features = [
  {
    icon: FileCheck,
    title: 'Automated Reporting',
    description: 'Generate compliance reports automatically. IFRS, GAAP, and local standards covered.',
  },
  {
    icon: Scale,
    title: 'Multi-Jurisdiction',
    description: 'Handle compliance across multiple countries from a single dashboard.',
  },
  {
    icon: Shield,
    title: 'Real-Time Monitoring',
    description: 'Continuous compliance checks. Get alerted before violations occur.',
  },
  {
    icon: Globe,
    title: 'Tax Automation',
    description: 'Automated tax calculations and filings for international operations.',
  },
]

const regions = [
  { name: 'European Union', standards: ['GDPR', 'IFRS', 'VAT Directive'] },
  { name: 'United States', standards: ['SOX', 'GAAP', 'SEC Filing'] },
  { name: 'United Kingdom', standards: ['UK GAAP', 'FCA Regulations', 'MTD'] },
  { name: 'Australia', standards: ['AASB', 'ATO Compliance', 'ASIC'] },
  { name: 'Singapore', standards: ['SFRS', 'IRAS', 'MAS Guidelines'] },
  { name: 'Bangladesh', standards: ['BAS', 'NBR Compliance', 'BSEC'] },
]

export default function CompliancePage() {
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
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 text-sm font-medium mb-8">
              <Globe className="w-4 h-4 text-amber-400" />
              <span>Global Compliance</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
          >
            Scalability without
            <br />
            <span className="bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">complexity</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12"
          >
            From high-growth startups to multi-national enterprises. IWEBai automates global compliance, 
            multi-currency treasury, and cross-border security standards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="mailto:contact@iwebai.com" className="btn-primary group flex items-center gap-2">
              <span>Get Compliance Audit</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link to="/sovereign" className="btn-secondary">
              View Infrastructure
            </Link>
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
            <p className="text-amber-400 font-medium text-sm tracking-widest uppercase mb-4">
              Automated Compliance
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Always audit-ready
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

      {/* Regions */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-amber-400 font-medium text-sm tracking-widest uppercase mb-4">
              Global Coverage
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Compliance across borders
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              IWEBai automates compliance for major jurisdictions. Click a region to see supported standards.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="p-6 rounded-2xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-white/[0.05]">
                    <MapPin className="w-4 h-4 text-zinc-400" />
                  </div>
                  <h3 className="font-semibold text-white">{region.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {region.standards.map((standard) => (
                    <span
                      key={standard}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.05] text-zinc-400 text-xs font-medium"
                    >
                      {standard}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
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
            Ready for global compliance?
          </h2>
          <p className="text-xl text-zinc-400 mb-12">
            Get a compliance assessment for your international operations.
          </p>
          <a href="mailto:contact@iwebai.com" className="btn-primary group inline-flex items-center gap-2">
            <span>Request Assessment</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </section>
    </motion.div>
  )
}
