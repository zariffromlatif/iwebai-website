import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Code, Cpu, Zap, GitBranch, ArrowRight, Check, X } from 'lucide-react'

const astVsLlm = [
  { aspect: 'Input', ast: 'Source code (parse tree)', llm: 'Natural language prompt + context' },
  { aspect: 'Processing', ast: 'Rule-based pattern matching on syntax nodes', llm: 'Probabilistic token generation' },
  { aspect: 'Output', ast: 'Deterministic code transformation', llm: 'Variable, may introduce new bugs' },
  { aspect: 'Reproducibility', ast: 'Same input → same output, always', llm: 'Same input → different outputs' },
  { aspect: 'Auditability', ast: 'Every rule is traceable and testable', llm: 'Black box, no explainability' },
]

const astFlow = [
  'Parse source code into Abstract Syntax Tree',
  'Match known vulnerability patterns (SQLi, XSS, Secrets)',
  'Apply deterministic transformation rules',
  'Emit secure, parameterized code',
]

export default function HowItWorksPage() {
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
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 text-sm font-medium mb-8">
              <Code className="w-4 h-4 text-violet-400" />
              <span>Technical Deep Dive</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            AST transformations vs.
            <br />
            <span className="gradient-text-hero">LLM guesswork</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Why Fixpoint uses deterministic, rule-based code transformations instead of generative AI.
          </motion.p>
        </div>
      </section>

      {/* AST Flow */}
      <section className="py-24 px-6 lg:px-8 border-t border-white/[0.03]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-4">
              The Fixpoint Pipeline
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              How AST transforms work
            </h2>
          </motion.div>

          <div className="space-y-4">
            {astFlow.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center text-violet-400 font-mono text-sm">
                  {index + 1}
                </div>
                <span className="text-zinc-300">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AST vs LLM Comparison */}
      <section className="py-24 px-6 lg:px-8 border-t border-white/[0.03]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-4">
              Side by Side
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              AST-based vs. LLM-based security tools
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl border border-white/[0.05]"
          >
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/[0.05]">
                  <th className="text-left py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-zinc-400">Aspect</th>
                  <th className="text-left py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-violet-400">Fixpoint (AST)</th>
                  <th className="text-left py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-semibold text-zinc-400">LLM-Based Tools</th>
                </tr>
              </thead>
              <tbody>
                {astVsLlm.map((row) => (
                  <tr key={row.aspect} className="border-b border-white/[0.03] last:border-0">
                    <td className="py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm font-medium text-white">{row.aspect}</td>
                    <td className="py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm text-emerald-400">
                      <span className="inline-flex items-center gap-2">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>{row.ast}</span>
                      </span>
                    </td>
                    <td className="py-3 sm:py-4 px-4 sm:px-6 text-xs sm:text-sm text-zinc-500">
                      <span className="inline-flex items-center gap-2">
                        <X className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 text-red-400/80" />
                        <span>{row.llm}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 px-6 lg:px-8 border-t border-white/[0.03]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              Why deterministic wins
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: 'Instant', desc: 'No LLM latency. Python core runs in milliseconds.' },
              { icon: Cpu, title: 'Predictable', desc: 'Same vulnerable code always produces the same secure fix.' },
              { icon: GitBranch, title: 'CI/CD Native', desc: 'Runs in your pipeline. No external API calls.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border border-white/[0.05] bg-white/[0.01]"
              >
                <div className="p-3 rounded-xl bg-white/[0.05] w-fit mb-6">
                  <item.icon className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8 border-t border-white/[0.03]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Ready to try Fixpoint?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/IWEBai/fixpoint"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group flex items-center gap-2"
            >
              <span>Get Started on GitHub</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link to="/ecosystem" className="btn-secondary">
              Explore IWEBai Ecosystem
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  )
}
