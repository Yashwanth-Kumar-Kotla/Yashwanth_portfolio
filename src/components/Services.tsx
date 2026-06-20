import { Database, BarChart3, Brain, TrendingUp, Sparkles, Lightbulb, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const services = [
  {
    icon: Sparkles,
    title: "Agentic AI & LLM Apps",
    description: "Multi-agent systems, RAG pipelines, and LLM products built with LangChain and LangGraph.",
    features: ["Agent orchestration & tool use", "RAG & retrieval pipelines", "Prompt & evaluation workflows", "GPT-4 / Gemini integration"],
  },
  {
    icon: Brain,
    title: "ML Model Development",
    description: "Production-ready models tuned and validated for your specific business problem.",
    features: ["Classification & regression", "Hyperparameter tuning & CV", "Interpretability (SHAP, LIME)", "End-to-end pipeline design"],
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecasting and risk models that anticipate trends and outcomes with rigor.",
    features: ["Time-series (ARIMA, Prophet, LSTM)", "Churn & retention modeling", "Demand & revenue forecasting", "Uncertainty quantification"],
  },
  {
    icon: Database,
    title: "Data & Feature Engineering",
    description: "Solid data foundations and high-signal features that lift model performance.",
    features: ["ETL pipeline design", "Feature selection & reduction", "Reproducible ML workflows", "pandas & SQL at scale"],
  },
  {
    icon: BarChart3,
    title: "Causal & Statistical Analysis",
    description: "Rigorous methods to validate assumptions and quantify real effects.",
    features: ["A/B testing & experiments", "Causal inference & uplift", "Regression & multivariate", "Bayesian inference"],
  },
  {
    icon: Lightbulb,
    title: "AI-Powered Insights",
    description: "Model output translated into clear, executive-ready narratives that drive decisions.",
    features: ["Dashboards & automated reports", "Data storytelling", "ROI & KPI tracking", "Evidence-based recommendations"],
  },
];

const Services = () => {
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="services" className="py-28 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="mb-12">
            <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">Services</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-50 mt-2 tracking-tight">
              How I can help
            </h2>
            <p className="text-zinc-500 mt-3 max-w-lg">
              From raw data to deployed models and AI products that move the needle.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 60}>
              <div className="group h-full rounded-2xl bg-white/[0.02] border border-white/[0.07] p-6 hover:border-white/[0.14] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:bg-primary/10 group-hover:border-primary/25 transition-colors">
                  <service.icon className="h-5 w-5 text-zinc-300 group-hover:text-primary transition-colors" strokeWidth={1.75} />
                </div>
                <h3 className="font-display font-semibold text-zinc-50 mb-2">{service.title}</h3>
                <p className="text-sm text-zinc-500 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-1.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-xs text-zinc-500">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-600 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] p-10 md:p-12 text-center">
            <div
              className="absolute inset-0 opacity-50"
              style={{ background: "radial-gradient(60% 100% at 50% 0%, hsl(255 70% 64% / 0.18), transparent 70%)" }}
            />
            <div className="relative">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-zinc-50 mb-3">
                Have a problem worth modeling?
              </h3>
              <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                I'm open to full-time roles and meaningful collaborations. Let's build something intelligent with your data.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button onClick={() => scrollToSection("contact")}
                  className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors">
                  Start a conversation
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium bg-white/[0.04] border border-white/[0.1] hover:border-white/25 text-zinc-200 rounded-lg transition-colors">
                  Download résumé
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
