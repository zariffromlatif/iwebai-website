import { Link } from 'react-router-dom'
import { Github, ArrowUpRight } from 'lucide-react'

const footerLinks = {
  product: [
    { label: 'Fixpoint', href: '/' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Blog', href: '/blog', coming: true },
  ],
  resources: [
    { label: 'GitHub', href: 'https://github.com/IWEBai/fixpoint', external: true },
    { label: 'How it Works', href: '/how-it-works' },
    { label: 'Ecosystem', href: '/ecosystem' },
  ],
}

// Helper to render link
function FooterLink({ link }) {
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm inline-flex items-center gap-1">
        {link.label}
        <ArrowUpRight size={12} />
      </a>
    )
  }
  return (
    <Link to={link.href} className="text-zinc-500 hover:text-white transition-colors text-sm inline-flex items-center gap-2">
      {link.label}
      {link.coming && <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/[0.05] text-zinc-500">Soon</span>}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src="/logo.png" alt="IWEBai" className="h-8 w-auto object-contain" />
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Fixpoint: Deterministic security fixes at PR time. By IWEB.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}><FooterLink link={link} /></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}><FooterLink link={link} /></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.03] text-center">
          <p className="text-zinc-600 text-sm">
            © 2026 IWEB. MIT Licensed.
          </p>
        </div>
      </div>
    </footer>
  )
}
