import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navItems = [
  { label: "About",    id: "about" },
  { label: "Skills",   id: "skills" },
  { label: "Work",     id: "projects" },
  { label: "Services", id: "services" },
  { label: "Contact",  id: "contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useScrollSpy(["hero", ...navItems.map((n) => n.id)]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="font-display text-lg font-bold text-zinc-50 tracking-tight hover:opacity-80 transition-opacity"
          >
            yash<span className="text-primary">.</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3.5 py-2 text-sm rounded-md transition-colors ${
                    active ? "text-zinc-50" : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-3.5 -bottom-px h-px bg-primary" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="group inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-zinc-50 text-zinc-950 rounded-md hover:bg-white transition-colors"
            >
              Let's talk
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <button
            className="md:hidden text-zinc-300 hover:text-zinc-50 transition-colors p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-5 pt-1 border-t border-white/[0.06]">
            <div className="flex flex-col gap-1 mt-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm px-3 py-2.5 rounded-md transition-colors ${
                    activeId === item.id ? "text-zinc-50 bg-white/[0.04]" : "text-zinc-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-2 px-4 py-2.5 text-sm font-medium bg-zinc-50 text-zinc-950 rounded-md w-full"
              >
                Let's talk
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
