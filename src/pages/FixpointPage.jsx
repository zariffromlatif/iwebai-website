import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Code, Zap, GitBranch, Lock, ArrowRight, Check, Terminal } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Deterministic AST Transforms',
    description: 'Abstract Syntax Tree analysis ensures precise, consistent fixes every time—no false positives.',
  },
  {
    icon: Zap,
    title: 'Sub-Second Detection',
    description: 'Real-time scanning catches vulnerabilities the moment code is written, not after deployment.',
  },
  {
    icon: GitBranch,
    title: 'CI/CD Native',
    description: 'Seamlessly integrates into your existing pipeline. GitHub, GitLab, Bitbucket—we support them all.',
  },
  {
    icon: Lock,
    title: 'Auto-Fix PRs',
    description: 'Automatically generates secure code patches. Review and merge with confidence.',
  },
]

const vulnerabilities = [
  'SQL Injection',
  'Cross-Site Scripting (XSS)',
  'Secrets & API Keys',
  'Insecure Dependencies',
  'Authentication Flaws',
  'CSRF Vulnerabilities',
]

export default function FixpointPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 bg-[#0a0a0a]"
    >
      {/* Noise overlay */}
      <div className="noise" />

      {/* Hero */}
      <section className="relative py-32 px-6 lg:px-8 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 text-sm font-medium mb-8">
              <Shield className="w-4 h-4 text-violet-400" />
              <span>Security Engine</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6"
          >
            Kill vulnerabilities
            <br />
            <span className="gradient-text-hero">in minutes, not days</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12"
          >
            Fixpoint is the immune system of your codebase. Deterministic AST transformations 
            fix security vulnerabilities before they ever reach production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://github.com/IWEBai/fixpoint"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group flex items-center gap-2"
            >
              <span>Get Started on GitHub</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://github.com/marketplace"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View on Marketplace
            </a>
          </motion.div>
        </div>
      </section>

      {/* Code Demo */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl border border-white/[0.05] bg-white/[0.02] overflow-hidden"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05] bg-white/[0.02]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs text-zinc-500 font-mono ml-2">fixpoint scan --fix</span>
            </div>

            {/* Code content */}
            <div className="p-6 font-mono text-sm">
              <div className="text-zinc-500 mb-4"># Scanning repository...</div>
              <div className="text-zinc-400 mb-2">
                <span className="text-red-400">✗</span> Found: SQL Injection in <span className="text-white">auth/login.py:42</span>
              </div>
              <div className="pl-4 mb-4 border-l-2 border-red-500/50">
                <div className="text-red-400/80">- query = f"SELECT * FROM users WHERE email='{`{email}`}'"</div>
                <div className="text-emerald-400/80">+ query = "SELECT * FROM users WHERE email=?"</div>
                <div className="text-emerald-400/80">+ cursor.execute(query, (email,))</div>
              </div>
              <div className="text-emerald-400">
                <span className="text-emerald-400">✓</span> Auto-fixed: Parameterized query applied
              </div>
              <div className="text-zinc-500 mt-4"># PR created: fix/sql-injection-auth-login</div>
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
            <p className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-4">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Security at the speed of development
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

      {/* Vulnerabilities */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-12 md:p-16 rounded-3xl border border-white/[0.05] bg-gradient-to-br from-violet-500/5 to-transparent"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                What we catch
              </h2>
              <p className="text-zinc-400">
                Comprehensive coverage for modern security threats
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {vulnerabilities.map((vuln, index) => (
                <motion.div
                  key={vuln}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]"
                >
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm text-white font-medium">{vuln}</span>
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
            Secure your codebase today
          </h2>
          <p className="text-xl text-zinc-400 mb-12">
            Join engineering teams building secure software from day one.
          </p>
          <a
            href="https://github.com/iwebai/fixpoint"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group inline-flex items-center gap-2"
          >
            <span>Get Started on GitHub</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </section>
    </motion.div>
  )
}
