import { Sparkles, Brain, Code2, Cpu, Database, BarChart3 } from "lucide-react";
import Reveal from "@/components/Reveal";

const categories = [
  {
    icon: Sparkles,
    title: "AI & LLMs",
    tag: "core",
    skills: ["LangChain", "LangGraph", "Agentic AI", "RAG", "OpenAI GPT-4", "Google Gemini", "Multi-Agent Systems", "Prompt Engineering"],
  },
  {
    icon: Brain,
    title: "Machine Learning",
    tag: "core",
    skills: ["XGBoost", "LightGBM", "Scikit-learn", "SHAP", "Uplift Modeling", "Causal Inference", "Calibration", "Feature Engineering"],
  },
  {
    icon: Code2,
    title: "Languages & Frameworks",
    skills: ["Python", "SQL", "FastAPI", "PyTorch", "TensorFlow", "Transformers", "FinBERT", "Streamlit"],
  },
  {
    icon: Cpu,
    title: "MLOps & Cloud",
    skills: ["Docker", "MLflow", "GitHub Actions", "CI/CD", "AWS", "GCP", "Model Monitoring", "Drift Detection"],
  },
  {
    icon: Database,
    title: "Data Engineering",
    skills: ["PostgreSQL", "MySQL", "ETL Pipelines", "Pandas", "NumPy", "Data Modeling", "Feature Stores"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Viz",
    skills: ["Tableau", "Power BI", "Plotly", "A/B Testing", "Hypothesis Testing", "EDA", "Statistical Modeling"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="mb-12">
            <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">Stack</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-50 mt-2 tracking-tight">
              The toolkit
            </h2>
            <p className="text-zinc-500 mt-3 max-w-lg">
              A full-stack ML practice, from model training to agentic AI in production.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 70}>
              <div className="group h-full rounded-2xl bg-white/[0.02] border border-white/[0.07] p-6 hover:border-white/[0.14] transition-colors">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/25 transition-colors">
                      <cat.icon className="h-4 w-4 text-zinc-300 group-hover:text-primary transition-colors" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-display font-semibold text-zinc-50 text-sm">{cat.title}</h3>
                  </div>
                  {cat.tag && (
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary/80 px-1.5 py-0.5 rounded border border-primary/20 bg-primary/5">
                      {cat.tag}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] px-2 py-1 rounded-md bg-white/[0.03] text-zinc-400 border border-white/[0.06]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
