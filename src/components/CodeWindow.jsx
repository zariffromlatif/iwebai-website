import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const vulnerableCode = `// Vulnerable PR - SQL Injection Risk
const getUser = async (userId) => {
  const query = \`SELECT * FROM users 
    WHERE id = '\${userId}'\`;
  return db.execute(query);
};

// XSS Vulnerability
app.get('/search', (req, res) => {
  res.send('<h1>' + req.query.term + '</h1>');
});`

const secureCode = `// IWEBai-Secure Code ✓
const getUser = async (userId) => {
  const query = 'SELECT * FROM users WHERE id = ?';
  return db.execute(query, [userId]);
};

// XSS Protected
app.get('/search', (req, res) => {
  const safeTerm = sanitize(req.query.term);
  res.send(\`<h1>\${escape(safeTerm)}</h1>\`);
});`

const highlightCode = (code) => {
  return code
    .replace(/(\/\/.*)/g, '<span class="text-dark-500">$1</span>')
    .replace(/('.*?'|`.*?`)/g, '<span class="text-green-400">$1</span>')
    .replace(/\b(const|async|await|return|app)\b/g, '<span class="text-accent-400">$1</span>')
    .replace(/\b(getUser|execute|get|send|sanitize|escape)\b/g, '<span class="text-primary-400">$1</span>')
}

export default function CodeWindow({ showSecure = false, animated = true }) {
  const [isSecure, setIsSecure] = useState(showSecure)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (animated) {
      const interval = setInterval(() => {
        setIsTransitioning(true)
        setTimeout(() => {
          setIsSecure(prev => !prev)
          setIsTransitioning(false)
        }, 500)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [animated])

  const code = isSecure ? secureCode : vulnerableCode

  return (
    <div className="relative">
      <motion.div
        className="rounded-2xl overflow-hidden border border-white/10 bg-dark-900"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Window Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-dark-800/50 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-xs px-2 py-1 rounded-full ${
              isSecure 
                ? 'bg-green-500/20 text-green-400' 
                : 'bg-red-500/20 text-red-400'
            }`}>
              {isSecure ? '✓ Secured by Fixpoint' : '⚠ Vulnerabilities Detected'}
            </span>
          </div>
        </div>

        {/* Code Content */}
        <div className="relative">
          <motion.div
            className="p-6 font-mono text-sm overflow-x-auto"
            animate={{ opacity: isTransitioning ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <pre 
              className="leading-relaxed"
              dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
            />
          </motion.div>

          {/* Scan line animation */}
          {isTransitioning && (
            <motion.div
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent"
              initial={{ top: 0 }}
              animate={{ top: '100%' }}
              transition={{ duration: 0.5, ease: 'linear' }}
            />
          )}
        </div>

        {/* Status Bar */}
        <div className="px-4 py-2 bg-dark-800/50 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-dark-500">auth-controller.js</span>
          <div className="flex items-center gap-4 text-xs text-dark-500">
            <span>Lines: 12</span>
            <span>UTF-8</span>
          </div>
        </div>
      </motion.div>

      {/* Glow effect */}
      <div className={`absolute -inset-4 rounded-3xl blur-3xl -z-10 transition-colors duration-500 ${
        isSecure ? 'bg-green-500/10' : 'bg-red-500/10'
      }`} />
    </div>
  )
}
