import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Github, Store, Check, AlertTriangle, Zap } from "lucide-react";
import PRLoopDiagram from "../components/PRLoopDiagram";
import StatusCheck from "../components/StatusCheck";

const GITHUB_URL = "https://github.com/IWEBai/fixpoint";
const MARKETPLACE_URL =
  "https://github.com/marketplace/actions/fixpoint-auto-fix-security-vulnerabilities";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#0a0a0a]"
    >
      <div className="noise" />

      {/* Section 2: Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 text-white"
          >
            Security fixes shouldn't be a manual chore.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Detect and remediate vulnerabilities at pull-request time. Fixpoint
            applies deterministic, rule-based patches to your Python
            code—eliminating security debt before it ever hits your main branch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              <span>Get Started on GitHub</span>
            </a>
            <Link to="/how-it-works" className="btn-secondary">
              Explore the Demo
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
            >
              <motion.div className="w-1 h-1.5 rounded-full bg-white/60" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: The Pain Point */}
      <section className="py-16 sm:py-20 md:py-24 px-6 lg:px-8 border-t border-white/[0.03]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Stop chasing the same vulnerabilities.
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8">
              Security scans find issues; developers fix them. It's a repetitive
              cycle that stretches merge times from hours to days.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "SQL Injections stall releases.",
                "Hardcoded Secrets put infrastructure at risk.",
                "XSS Vulnerabilities slip through manual reviews.",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-base sm:text-lg text-white font-medium">
              Fixpoint moves security inside the workflow, turning detection
              into immediate remediation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Fix Visual + Section 4: The Core Advantage */}
      <section className="py-16 sm:py-20 md:py-24 px-6 lg:px-8 border-t border-white/[0.03]">
        <div className="max-w-5xl mx-auto">
          {/* The Fix Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-display font-bold text-white mb-6">
              The Fix
            </h2>
            <div className="rounded-2xl border border-white/[0.05] bg-white/[0.02] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05] bg-white/[0.02]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-zinc-500 font-mono ml-2">
                  auth/login.py
                </span>
              </div>
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <div className="text-red-400/80 text-xs font-semibold mb-3 uppercase">
                      Unsafe (f-string)
                    </div>
                    <div className="p-3 sm:p-4 rounded-lg bg-red-500/5 border border-red-500/20 overflow-x-auto">
                      <div className="text-red-400 break-words">
                        query = f"SELECT * FROM users WHERE email='{`{email}`}'"
                      </div>
                      <div className="text-zinc-400 mt-1 break-words">
                        cursor.execute(query)
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-emerald-400/80 text-xs font-semibold mb-3 uppercase">
                      Fixpoint (parameterized)
                    </div>
                    <div className="p-3 sm:p-4 rounded-lg bg-emerald-500/5 border border-emerald-500/20 overflow-x-auto">
                      <div className="text-emerald-400 break-words">
                        query = "SELECT * FROM users WHERE email=?"
                      </div>
                      <div className="text-emerald-400 mt-1 break-words">
                        cursor.execute(query, (email,))
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The Status Check - placeholder for GitHub PR screenshot */}
          <div className="mb-16 sm:mb-24 flex justify-center sm:justify-end">
            <StatusCheck />
          </div>

          {/* Section 4: The Core Advantage */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Deterministic by Design. No AI Hallucinations.
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8 sm:mb-10">
              While other tools rely on probabilistic LLM guesswork, Fixpoint
              uses Abstract Syntax Tree (AST) transformations.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Predictable",
                  desc: "Same input, same output. Every time.",
                },
                {
                  icon: Shield,
                  title: "Safe",
                  desc: "Rule-based logic ensures fixes are syntactically correct and semantically sound.",
                },
                {
                  icon: Check,
                  title: "Auditable",
                  desc: "Every change is transparent and follows established security best practices.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-white/[0.05] bg-white/[0.01]"
                >
                  <item.icon className="w-6 h-6 text-violet-400 mb-4" />
                  <h3 className="font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Features */}
      <section className="py-16 sm:py-20 md:py-24 px-6 lg:px-8 border-t border-white/[0.03]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-8 sm:mb-10">
              Built for Modern DevSecOps.
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Warn or Enforce",
                  desc: "Start in Warn Mode to post PR comments for review. Switch to Enforce Mode to automatically commit fixes to the branch.",
                },
                {
                  title: "Vulnerability Coverage",
                  desc: "Robust support for SQL Injection (parameterization), Hardcoded Secrets (env var injection), and XSS (template escaping).",
                },
                {
                  title: "PR-Diff Scanning",
                  desc: "Fixpoint only scans what you changed, keeping CI/CD pipelines fast and focused.",
                },
                {
                  title: "Safety First",
                  desc: "Built-in idempotency and loop prevention ensure your GitHub Actions never spiral out of control.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-white/[0.05] bg-white/[0.01]"
                >
                  <h3 className="font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Integration */}
      <section className="py-16 sm:py-20 md:py-24 px-6 lg:px-8 border-t border-white/[0.03]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Plugs into your existing stack in seconds.
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 mb-6 sm:mb-8">
              Whether you use our GitHub Action, a self-hosted webhook server,
              or the CLI, Fixpoint fits your infrastructure.
            </p>
            <div className="rounded-2xl border border-white/[0.05] bg-white/[0.02] overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.05] bg-white/[0.02]">
                <span className="text-xs text-zinc-500 font-mono">
                  .github/workflows/security.yml
                </span>
              </div>
              <pre className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-zinc-300 overflow-x-auto">
                {`# .github/workflows/security.yml
- name: Fixpoint Security Auto-Fix
  uses: IWEBai/fixpoint@v1
  with:
    mode: 'enforce'
  env:
    GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}`}
              </pre>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Diagram */}
      <section className="py-16 sm:py-20 md:py-24 px-6 lg:px-8 border-t border-white/[0.03]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white px-4">
              Push → Fixpoint Scan → Auto-Commit → Secure Merge
            </h2>
          </motion.div>
          <PRLoopDiagram />
        </div>
      </section>

      {/* Section 7: About IWEBai */}
      <section className="py-16 sm:py-20 md:py-24 px-6 lg:px-8 border-t border-white/[0.03]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-6">
              From the IWEBai Ecosystem.
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              Fixpoint is maintained by IWEB, a specialized lab focused on AI,
              software engineering, and high-integrity systems. We build tools
              that bridge the gap between complex security requirements and
              developer velocity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 8: Footer / Final CTA */}
      <section className="py-16 sm:py-20 md:py-24 px-6 lg:px-8 border-t border-white/[0.03]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white mb-6 px-4">
            Ready to automate your security compliance?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl mx-auto px-4">
            Join the developers using Fixpoint to secure their Python
            applications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={MARKETPLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group flex items-center gap-2"
            >
              <Store className="w-5 h-5" />
              <span>View on GitHub Marketplace</span>
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>Star on GitHub</span>
            </a>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
