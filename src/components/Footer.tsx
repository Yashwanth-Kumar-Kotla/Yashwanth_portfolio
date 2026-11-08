import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const links = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Work", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Contact", id: "contact" },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="font-display text-lg font-bold text-zinc-50 mb-3">
              yash<span className="text-primary">.</span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Data Scientist & AI Engineer building intelligent ML systems and agentic AI products.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-zinc-600 mb-4">Navigate</h4>
            <ul className="space-y-2.5">
              {links.map((item) => (
                <li key={item.id}>
                  <button onClick={() => scrollToSection(item.id)} className="text-sm text-zinc-500 hover:text-zinc-100 transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-wider text-zinc-600 mb-4">Elsewhere</h4>
            <div className="flex items-center gap-2.5">
              <a href="mailto:yashwanthkumarkotla@gmail.com" className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-zinc-50 hover:border-white/25 transition-colors" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
              <a href="https://github.com/Yashwanth-Kumar-Kotla/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-zinc-50 hover:border-white/25 transition-colors" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/yashwanthkumarkotla/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-zinc-400 hover:text-zinc-50 hover:border-white/25 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <p className="font-mono text-xs text-zinc-600">
              © {new Date().getFullYear()} Yashwanth Kumar Kotla
            </p>
            <a href="/autoshorts" className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors">
              AutoShorts
            </a>
          </div>
          <button onClick={scrollToTop} className="group inline-flex items-center gap-1.5 text-xs text-zinc-600 hover:text-zinc-300 transition-colors">
            Back to top
            <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
