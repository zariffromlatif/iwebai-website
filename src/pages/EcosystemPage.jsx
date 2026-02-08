import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Shield, Brain, Server, Globe, FileText, ArrowRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Fixpoint',
    subtitle: 'Security Engine',
    description: 'Deterministic AST-based security fixes at PR time. SQLi, XSS, Secrets—no AI hallucinations.',
    icon: Shield,
    href: '/',
    external: false,
    status: 'Active',
  },
  {
    title: 'BanikAI',
    subtitle: 'Financial Intelligence',
    description: 'Agentic financial layer. Zero-touch reconciliation, fraud detection, compliance automation.',
    icon: Brain,
    href: '/banik-ai',
    external: false,
    status: 'In Development',
  },
  {
    title: 'Sovereign Engine',
    subtitle: 'Infrastructure',
    description: 'On-premise & private cloud. Post-quantum encryption, zero-trust access logs.',
    icon: Server,
    href: '/sovereign',
    external: false,
    status: 'In Development',
  },
  {
    title: 'Global Compliance',
    subtitle: 'Regulatory',
    description: 'IFRS, GAAP, multi-jurisdiction. Automated tax and compliance reporting.',
    icon: Globe,
    href: '/compliance',
    external: false,
    status: 'In Development',
  },
]

const otherLinks = [
  { title: 'Founder\'s Manifesto', href: '/manifesto', icon: FileText },
  { title: 'Blog', href: '/blog', icon: FileText, coming: true },
]

export default function EcosystemPage() {
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
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 text-sm font-medium mb-8">
              <span>Parent Organization</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            The IWEBai Ecosystem
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
          >
            Fixpoint is our flagship. We're building a family of tools for autonomous, secure enterprise.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6 lg:px-8 border-t border-white/[0.03]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-violet-400 font-medium text-sm tracking-widest uppercase mb-4">
              Projects
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              What we're building
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={project.href}
                  className="group block h-full p-8 rounded-2xl border border-white/[0.05] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/[0.1] transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-white/[0.05]">
                      <project.icon className="w-6 h-6 text-violet-400" />
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/[0.05] text-zinc-500">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-violet-400/80 mb-3">{project.subtitle}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">{project.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all">
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Links */}
      <section className="py-24 px-6 lg:px-8 border-t border-white/[0.03]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
              More from IWEBai
            </h2>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {otherLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.04] transition-all"
              >
                <link.icon className="w-5 h-5 text-zinc-500" />
                <span className="text-white font-medium">{link.title}</span>
                {link.coming && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/[0.05] text-zinc-500">
                    Soon
                  </span>
                )}
                <ExternalLink className="w-4 h-4 text-zinc-500" />
              </Link>
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
            Start with Fixpoint
          </h2>
          <a
            href="https://github.com/IWEBai/fixpoint"
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
