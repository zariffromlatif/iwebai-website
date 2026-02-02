import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BookOpen, ArrowRight } from 'lucide-react'

export default function DocsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 bg-[#0a0a0a] min-h-screen flex items-center justify-center"
    >
      <div className="noise" />
      <div className="relative max-w-2xl mx-auto px-6 text-center">
        <div className="inline-flex p-4 rounded-2xl bg-white/[0.05] mb-8">
          <BookOpen className="w-12 h-12 text-violet-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
          Documentation
        </h1>
        <p className="text-xl text-zinc-400 mb-8">
          Docs will live at <span className="text-violet-400 font-mono">docs.iwebai.space/fixpoint</span> or as an embedded GitBook/Mintlify.
        </p>
        <p className="text-zinc-500 mb-12">
          Coming soon. In the meantime, check out the GitHub repo for setup instructions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://github.com/IWEBai/fixpoint"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group inline-flex items-center gap-2"
          >
            <span>View on GitHub</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link to="/how-it-works" className="btn-secondary">
            How it Works
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
