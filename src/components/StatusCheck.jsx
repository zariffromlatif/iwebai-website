import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function StatusCheck() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 max-w-sm"
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <Check className="w-4 h-4 text-emerald-400" />
        </div>
        <div>
          <div className="text-sm font-medium text-white">fixpoint/compliance</div>
          <div className="text-xs text-emerald-400">All checks passed</div>
        </div>
      </div>
    </motion.div>
  )
}
