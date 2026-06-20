import { useEffect, useRef } from "react";
import { ArrowUpRight, Github, Linkedin, FileText, MapPin } from "lucide-react";

const stats = [
  { value: "8+", label: "Projects shipped" },
  { value: "4",  label: "Live ML apps" },
  { value: "2+", label: "Yrs hands-on" },
];

const tools = [
  "Python", "PyTorch", "XGBoost", "LangChain", "LangGraph", "FastAPI",
  "Docker", "MLflow", "FinBERT", "SHAP", "Scikit-learn", "AWS",
];

const Hero = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  // Mouse-tracking spotlight (transform/opacity only; skipped under reduced-motion)
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const el = spotlightRef.current;
    if (!el) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, hsl(255 70% 64% / 0.10), transparent 70%)`;
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden grain"
    >
      {/* layered backdrop */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-vignette" />
      <div ref={spotlightRef} className="pointer-events-none absolute inset-0 hidden md:block" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-28 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* status */}
          <div className="animate-fade-in inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-zinc-400 mb-8 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Available for full-time roles
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.02] mb-6">
            <span className="text-gradient">Yashwanth</span>
            <br />
            <span className="text-gradient">Kumar Kotla</span>
          </h1>

          <p className="font-mono text-sm text-primary/90 mb-5 tracking-wide">
            Data Scientist &nbsp;/&nbsp; AI Engineer
          </p>

          <p className="text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-9">
            I build end-to-end machine learning systems, from data pipelines and
            predictive models to <span className="text-zinc-200">agentic AI</span> applications
            deployed in production. Turning raw data into intelligent products that ship.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-lg transition-colors"
            >
              View my work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/[0.04] border border-white/[0.1] hover:border-white/25 text-zinc-200 text-sm font-medium rounded-lg transition-colors backdrop-blur-sm"
            >
              <FileText className="h-4 w-4" />
              Résumé
            </a>
          </div>

          <div className="flex items-center gap-5 text-zinc-500 mb-14">
            <a href="https://github.com/Yashwanth-Kumar-Kotla/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-200 transition-colors" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/yashwanthkumarkotla/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-200 transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <span className="h-4 w-px bg-zinc-700" />
            <span className="inline-flex items-center gap-1.5 text-xs">
              <MapPin className="h-3.5 w-3.5" />
              Austin, Texas
            </span>
          </div>

          {/* stats */}
          <div className="grid grid-cols-3 gap-px bg-white/[0.06] rounded-xl overflow-hidden border border-white/[0.06] max-w-lg w-full mb-14">
            {stats.map((s) => (
              <div key={s.label} className="bg-zinc-950/60 px-4 py-5 text-center backdrop-blur-sm">
                <div className="font-display text-2xl md:text-3xl font-bold text-zinc-50 tabular-nums">{s.value}</div>
                <div className="text-[11px] text-zinc-500 mt-1 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* tools marquee */}
        <div className="marquee-mask overflow-hidden">
          <div className="flex w-max gap-3 animate-marquee">
            {[...tools, ...tools].map((tool, i) => (
              <span
                key={i}
                className="flex-shrink-0 font-mono text-xs px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-zinc-500"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
