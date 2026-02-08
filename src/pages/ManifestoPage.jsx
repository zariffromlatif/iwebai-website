import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Quote } from 'lucide-react'

export default function ManifestoPage() {
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
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-6">
              The IWEBai Manifesto
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              From Code to Capital
            </h1>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              A vision for the future of autonomous enterprise systems
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            {/* Section 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
                The Collision of Two Worlds
              </h2>
              <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
                <p>
                  Every great breakthrough starts with a problem that most people are too busy to notice.
                </p>
                <p>
                  For me, that problem was the <span className="text-white font-medium">"Invisible Gap"</span> between 
                  the code we write and the capital it represents.
                </p>
                <p>
                  As a Computer Science student at BRAC University, specializing in Causal Reinforcement 
                  Learning and Cybersecurity, I spent my days analyzing how small errors in a system's 
                  logic could lead to catastrophic failures.
                </p>
                <p>
                  I saw the same pattern in business: thousands of dollars lost not to one big "hack," 
                  but to a million tiny "leaks"—unverified invoices, manual bookkeeping errors, and 
                  overlooked security vulnerabilities in the very software meant to manage the company.
                </p>
                <div className="my-12 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <Quote className="w-8 h-8 text-violet-400/50 mb-4" />
                  <p className="text-2xl text-white font-display leading-relaxed mb-0">
                    In the modern world, Business Integrity is a technical problem.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
                The Birth of IWEBai
              </h2>
              <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
                <p>
                  IWEBai was founded on a single, radical premise:
                </p>
                <div className="my-8 p-8 rounded-2xl bg-gradient-to-br from-violet-500/10 to-transparent border border-white/[0.05]">
                  <p className="text-xl text-white font-medium mb-0">
                    A business is only as secure as the code it runs on and the ledger that tracks its wealth.
                  </p>
                </div>
                <p>
                  The traditional ERP giants—SAP, Oracle—were built for a world that no longer exists. 
                  They are bloated, reactive, and insecure. I wanted to build an <span className="text-white font-medium">"Autonomous 
                  Immune System"</span> for the modern enterprise.
                </p>
                <p>
                  That vision led to the two pillars of IWEBai:
                </p>
              </div>

              {/* Two pillars */}
              <div className="grid md:grid-cols-2 gap-6 my-12">
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <h3 className="text-xl font-display font-bold text-white mb-3">Fixpoint</h3>
                  <p className="text-zinc-400 text-base mb-0">
                    Born from frustration with slow security reviews. Why should a developer wait 
                    3 days for a security team to find a SQL injection? Fixpoint uses Deterministic 
                    AST Transformations to fix vulnerabilities instantly.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <h3 className="text-xl font-display font-bold text-white mb-3">BanikAI</h3>
                  <p className="text-zinc-400 text-base mb-0">
                    Born from the failure of generic bookkeeping. "Recording" data isn't enough—you 
                    must "defend" it. BanikAI is an Agentic Financial Layer that treats every 
                    transaction as a security event.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
                The Sovereign Mission
              </h2>
              <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
                <p>
                  We aren't just building another SaaS company. We are building <span className="text-white font-medium">Sovereign 
                  Infrastructure</span>.
                </p>
                <p>
                  In an era of massive data leaks, IWEBai is committed to the principle that your 
                  financial and technical secrets should stay yours. That is why our Agentic AI—optimized 
                  through research on Qwen 2.5 and hosted on Sovereign Fedora Servers—is designed to 
                  run within your own walls.
                </p>
                <div className="my-12 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                  <Quote className="w-8 h-8 text-violet-400/50 mb-4" />
                  <p className="text-2xl text-white font-display leading-relaxed mb-0">
                    We are moving the world from "Systems of Record" to "Systems of Integrity."
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.article>
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
          <p className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-6">
            From the Founder
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Stop managing your risks.
            <br />
            Start securing your integrity.
          </h2>
          <p className="text-xl text-zinc-400 mb-12">
            Let's build the future of resilient enterprise together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/fixpoint" className="btn-primary group flex items-center gap-2">
              <span>Start Building</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="mailto:contact@iwebai.com" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </section>
    </motion.div>
  )
}
