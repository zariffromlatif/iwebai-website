import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  ArrowRight,
  Check,
  Shield,
  Github,
  ExternalLink,
  Terminal,
  Zap,
} from 'lucide-react'

const vulnerabilityTable = [
  { vuln: 'SQL Injection', detection: 'f-strings, concatenation, .format(), % formatting', fix: 'Parameterized queries' },
  { vuln: 'Hardcoded Secrets', detection: 'Passwords, API keys, tokens, database URIs', fix: 'os.environ.get()' },
  { vuln: 'XSS (Templates)', detection: '|safe filter, autoescape off', fix: 'Removes unsafe patterns' },
  { vuln: 'XSS (Python)', detection: 'mark_safe(), SafeString()', fix: 'Replaces with escape()' },
  { vuln: 'Command Injection', detection: 'os.system(), subprocess with shell=True', fix: 'List-based subprocess' },
  { vuln: 'Path Traversal', detection: 'os.path.join with user input', fix: 'Path validation' },
  { vuln: 'SSRF', detection: 'requests.get(), urlopen with dynamic URL', fix: 'Detection + guidance' },
  { vuln: 'JS/TS eval', detection: 'eval() with user input', fix: 'Detection + guidance' },
  { vuln: 'JS/TS secrets', detection: 'apiKey = "xxx"', fix: 'process.env.API_KEY' },
  { vuln: 'JS/TS DOM XSS', detection: 'innerHTML = with user input', fix: 'textContent =' },
]

const philosophyItems = [
  'Deterministic-first: Same input → same output. No AI hallucinations.',
  'No AI/LLM for fixes: All fixes are rule-based and auditable.',
  'Trust through transparency: Start in warn mode, graduate to enforce when ready.',
  'Safety over speed: Max-diff limits, optional test run, CWE/OWASP tags in every finding.',
]

const workflowYaml = `name: Fixpoint

on:
  pull_request:
    types: [opened, synchronize, reopened]

permissions:
  contents: write
  pull-requests: write
  statuses: write

jobs:
  fixpoint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          ref: \${{ github.head_ref }}
          fetch-depth: 0

      - name: Fixpoint
        uses: IWEBai/fixpoint@v1
        with:
          mode: warn
          base_branch: \${{ github.base_ref }}
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}`

export default function DocsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20 bg-[#0a0a0a]"
    >
      <div className="noise" />

      {/* Hero */}
      <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
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
              <BookOpen className="w-4 h-4 text-violet-400" />
              <span>Documentation</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            Fixpoint by IWEB
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto mb-6"
          >
            Auto-fix security vulnerabilities in your PRs. A deterministic security
            patch bot that enforces compliance at merge time—so security findings
            become merged fixes, not backlog.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-sm text-zinc-500 max-w-xl mx-auto mb-8 italic"
          >
            The fixed point in your workflow where security issues are detected and
            corrected before merge—no AI, no wait, no backlog.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <a
              href="https://github.com/IWEBai/fixpoint"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium"
            >
              133 tests passed
            </a>
            <span className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-zinc-400 text-xs font-medium">
              Python 3.12+
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/[0.08] text-zinc-400 text-xs font-medium">
              MIT License
            </span>
            <a
              href="https://github.com/marketplace/actions/fixpoint-auto-fix-security-vulnerabilities"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-medium hover:bg-violet-500/20 transition-colors"
            >
              GitHub Marketplace
            </a>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://github.com/apps/fixpoint-security/installations/new"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group inline-flex items-center gap-2"
            >
              <Shield className="w-5 h-5" />
              <span>Install GitHub App (free beta)</span>
            </a>
            <a
              href="https://github.com/IWEBai/fixpoint-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <span>Try Demo Repo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* What It Fixes */}
      <section className="py-16 sm:py-20 px-6 lg:px-8 border-t border-white/[0.03]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              What It Fixes
            </h2>
            <p className="text-zinc-400">
              Deterministic, rule-based fixes for common security vulnerabilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl border border-white/[0.05]"
          >
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-white/[0.05]">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-zinc-400">Vulnerability</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-zinc-400">Detection</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-zinc-400">Auto-Fix</th>
                </tr>
              </thead>
              <tbody>
                {vulnerabilityTable.map((row, i) => (
                  <tr key={row.vuln} className="border-b border-white/[0.03] last:border-0">
                    <td className="py-4 px-6 text-sm font-medium text-white">{row.vuln}</td>
                    <td className="py-4 px-6 text-sm text-zinc-400">{row.detection}</td>
                    <td className="py-4 px-6 text-sm text-emerald-400">{row.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 sm:py-20 px-6 lg:px-8 border-t border-white/[0.03]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
              Philosophy
            </h2>
            <ul className="space-y-4">
              {philosophyItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-400">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 sm:py-20 px-6 lg:px-8 border-t border-white/[0.03]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Quick Start
            </h2>
            <p className="text-zinc-400 mb-6">
              Add to <code className="text-violet-400 font-mono text-sm">.github/workflows/fixpoint.yml</code>:
            </p>
            <div className="rounded-2xl border border-white/[0.05] bg-white/[0.02] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05] bg-white/[0.02]">
                <span className="text-xs text-zinc-500 font-mono">.github/workflows/fixpoint.yml</span>
              </div>
              <pre className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-zinc-300 overflow-x-auto">
                {workflowYaml}
              </pre>
            </div>
            <p className="text-zinc-500 text-sm mt-4">
              That&apos;s it. Fixpoint will scan every PR for vulnerabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Example Fixes */}
      <section className="py-16 sm:py-20 px-6 lg:px-8 border-t border-white/[0.03]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
              Example Fixes
            </h2>
            <div className="space-y-8">
              <div className="rounded-2xl border border-white/[0.05] bg-white/[0.02] overflow-hidden">
                <div className="px-4 py-2 border-b border-white/[0.05] text-xs font-medium text-zinc-400">SQL Injection</div>
                <div className="p-4 font-mono text-xs sm:text-sm grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-red-400/80 text-xs mb-2">Before</div>
                    <div className="text-zinc-400">
                      query = f&quot;SELECT * FROM users WHERE email = &apos;{'{email}'}&apos;&quot;<br />
                      cursor.execute(query)
                    </div>
                  </div>
                  <div>
                    <div className="text-emerald-400/80 text-xs mb-2">After</div>
                    <div className="text-emerald-400">
                      query = &quot;SELECT * FROM users WHERE email = %s&quot;<br />
                      cursor.execute(query, {'(email,)'})
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/[0.05] bg-white/[0.02] overflow-hidden">
                <div className="px-4 py-2 border-b border-white/[0.05] text-xs font-medium text-zinc-400">Hardcoded Secrets</div>
                <div className="p-4 font-mono text-xs sm:text-sm grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-red-400/80 text-xs mb-2">Before</div>
                    <div className="text-zinc-400">api_key = &quot;sk_live_abc123def456&quot;</div>
                  </div>
                  <div>
                    <div className="text-emerald-400/80 text-xs mb-2">After</div>
                    <div className="text-emerald-400">api_key = os.environ.get(&quot;API_KEY&quot;)</div>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/[0.05] bg-white/[0.02] overflow-hidden">
                <div className="px-4 py-2 border-b border-white/[0.05] text-xs font-medium text-zinc-400">JS/TS DOM XSS</div>
                <div className="p-4 font-mono text-xs sm:text-sm grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-red-400/80 text-xs mb-2">Before</div>
                    <div className="text-zinc-400">el.innerHTML = userInput;</div>
                  </div>
                  <div>
                    <div className="text-emerald-400/80 text-xs mb-2">After</div>
                    <div className="text-emerald-400">el.textContent = userInput;</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modes */}
      <section className="py-16 sm:py-20 px-6 lg:px-8 border-t border-white/[0.03]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
              Modes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-white/[0.05] bg-white/[0.02]">
                <h3 className="font-semibold text-white mb-2">Warn Mode (default)</h3>
                <code className="text-violet-400 font-mono text-sm">mode: warn</code>
                <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                  <li>• Posts PR comments with proposed fixes</li>
                  <li>• Sets status check to FAIL</li>
                  <li>• No commits made</li>
                  <li>• Perfect for building trust</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl border border-white/[0.05] bg-white/[0.02]">
                <h3 className="font-semibold text-white mb-2">Enforce Mode</h3>
                <code className="text-violet-400 font-mono text-sm">mode: enforce</code>
                <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                  <li>• Applies fixes automatically</li>
                  <li>• Commits to PR branch</li>
                  <li>• Sets status check to PASS</li>
                  <li>• For trusted, production use</li>
                </ul>
              </div>
            </div>
            <p className="text-zinc-500 text-sm mt-6">
              Recommended: Start with <code className="text-violet-400 font-mono">warn</code>, review fixes, then graduate to <code className="text-violet-400 font-mono">enforce</code>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Status Checks */}
      <section className="py-16 sm:py-20 px-6 lg:px-8 border-t border-white/[0.03]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Status Checks
            </h2>
            <p className="text-zinc-400 mb-6">
              Fixpoint sets <code className="text-violet-400 font-mono text-sm">fixpoint/compliance</code>:
            </p>
            <div className="overflow-x-auto rounded-2xl border border-white/[0.05]">
              <table className="w-full min-w-[400px]">
                <thead>
                  <tr className="border-b border-white/[0.05]">
                    <th className="text-left py-3 px-6 text-sm font-semibold text-zinc-400">Status</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-zinc-400">Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/[0.03]">
                    <td className="py-3 px-6 text-sm text-emerald-400">PASS</td>
                    <td className="py-3 px-6 text-sm text-zinc-400">No vulnerabilities found</td>
                  </tr>
                  <tr className="border-b border-white/[0.03]">
                    <td className="py-3 px-6 text-sm text-red-400">FAIL</td>
                    <td className="py-3 px-6 text-sm text-zinc-400">Vulnerabilities found (warn mode)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-6 text-sm text-emerald-400">PASS</td>
                    <td className="py-3 px-6 text-sm text-zinc-400">Vulnerabilities fixed (enforce mode)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-zinc-500 text-sm mt-4">
              Enable in <strong>Settings → Branches → Branch protection rules</strong> to block merges until fixed.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What It Does NOT Do */}
      <section className="py-16 sm:py-20 px-6 lg:px-8 border-t border-white/[0.03]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
              What It Does NOT Do
            </h2>
            <ul className="flex flex-wrap gap-3">
              {['Fix arbitrary bugs', 'Refactor code', 'Auto-merge PRs', 'Generate creative fixes', 'Use AI/LLMs'].map((item) => (
                <li key={item} className="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/[0.05] text-zinc-400 text-sm">
                  ✗ {item}
                </li>
              ))}
            </ul>
            <p className="text-zinc-500 text-sm mt-6">
              Only deterministic, verifiable, compliance-safe changes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources & Support */}
      <section className="py-16 sm:py-20 px-6 lg:px-8 border-t border-white/[0.03]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-8">
              Resources & Support
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://github.com/IWEBai/fixpoint"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <Github className="w-5 h-5 text-violet-400" />
                <span className="text-white font-medium">GitHub Repo</span>
              </a>
              <a
                href="https://github.com/IWEBai/fixpoint-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <Zap className="w-5 h-5 text-violet-400" />
                <span className="text-white font-medium">Demo Repo</span>
              </a>
              <a
                href="https://github.com/IWEBai/fixpoint/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <Terminal className="w-5 h-5 text-violet-400" />
                <span className="text-white font-medium">GitHub Discussions</span>
              </a>
              <a
                href="mailto:support@fixpoint.dev"
                className="flex items-center gap-3 p-4 rounded-xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
              >
                <Shield className="w-5 h-5 text-violet-400" />
                <span className="text-white font-medium">support@fixpoint.dev</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-6 lg:px-8 border-t border-white/[0.03]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/IWEBai/fixpoint"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group inline-flex items-center gap-2"
            >
              <span>View on GitHub</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <Link to="/how-it-works" className="btn-secondary">
              How it Works
            </Link>
          </div>
        </motion.div>
      </section>
    </motion.div>
  )
}
