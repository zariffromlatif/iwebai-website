import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, ArrowRight } from 'lucide-react'

export default function BlogPage() {
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
          <FileText className="w-12 h-12 text-violet-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
          Blog
        </h1>
        <p className="text-xl text-zinc-400 mb-8">
          Technical build-logs to drive SEO for terms like <span className="text-violet-400">"SQL Injection Auto-fix"</span>.
        </p>
        <p className="text-zinc-500 mb-12">
          Coming soon. We'll share architecture decisions, security research, and integration guides.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/how-it-works" className="btn-primary group inline-flex items-center gap-2">
            <span>How it Works</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
