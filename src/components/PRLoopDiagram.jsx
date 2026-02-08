import { motion } from 'framer-motion'

const steps = [
  { id: 1, label: 'Code Push', desc: 'Developer pushes to branch' },
  { id: 2, label: 'Fixpoint Scan', desc: 'AST analysis runs in CI' },
  { id: 3, label: 'Auto-Commit', desc: 'Secure patch applied' },
  { id: 4, label: 'Secure Merge', desc: 'PR ready to merge' },
]

export default function PRLoopDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-2 py-8"
    >
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group px-4 sm:px-6 py-3 sm:py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] w-full sm:w-auto sm:min-w-[140px] text-center hover:bg-white/[0.06] hover:border-white/[0.12] transition-all"
          >
            <div className="text-2xl text-violet-400 mb-2 font-mono">
              {index < steps.length - 1 ? '→' : '✓'}
            </div>
            <div className="text-xs sm:text-sm font-medium text-white">{step.label}</div>
            <div className="text-[10px] sm:text-xs text-zinc-500 mt-1">{step.desc}</div>
          </motion.div>
          {index < steps.length - 1 && (
            <div className="hidden sm:flex w-6 h-0.5 bg-white/20 mx-1 flex-shrink-0" aria-hidden />
          )}
        </div>
      ))}
    </motion.div>
  )
}
