import { ExternalLink, Github, Sparkles, Shield, TrendingDown, Repeat, ArrowUpRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Reveal from "@/components/Reveal";
import ProjectCover, { type CoverMotif } from "@/components/ProjectCover";

type Status = "live" | "building";

interface Project {
  id: number;
  title: string;
  status: Status;
  category: string;
  icon: typeof Sparkles;
  hue: number;
  hue2: number;
  motif: CoverMotif;
  blurb: string;
  description: string;
  metrics?: { value: string; label: string }[];
  tools: string[];
  highlights: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Layoff Radar",
    status: "live",
    category: "MLOps · Fintech",
    icon: TrendingDown,
    hue: 14,
    hue2: 36,
    motif: "risk",
    blurb: "A workforce-risk intelligence platform that predicts the likelihood of corporate layoffs before they're announced.",
    description:
      "An end-to-end platform that forecasts corporate layoff risk from financial performance, historical layoff events, and executive sentiment in earnings calls. A temporal labeling framework turns historical events into predictive training examples for early-warning detection.",
    metrics: [
      { value: "47K+", label: "financial records" },
      { value: "2,300+", label: "layoff events" },
      { value: "FinBERT", label: "sentiment NLP" },
    ],
    tools: ["XGBoost", "FinBERT", "FastAPI", "Docker", "MLflow", "SHAP", "Python"],
    highlights: [
      "Scalable ETL pipelines integrating 47K+ quarterly records from SimFin and 2,300+ layoff events",
      "FinBERT pipeline extracting CEO/CFO earnings-call sentiment as predictive features",
      "SMOTE, probability calibration, and business-driven evaluation metrics",
      "SHAP explainability with FastAPI + Docker + MLflow in production",
    ],
    github: "https://github.com/Yashwanth-Kumar-Kotla/layoff-radar",
    demo: "https://layoff-streamlit.onrender.com/",
  },
  {
    id: 2,
    title: "Retention ROI System",
    status: "building",
    category: "Causal ML · Decision Intelligence",
    icon: Repeat,
    hue: 158,
    hue2: 188,
    motif: "retention",
    blurb: "A multi-layer retention engine quantifying churn risk, intervention lift, and the dollar value of acting.",
    description:
      "A decision-support system that fuses predictive modeling, causal inference, explainable AI, and LLM-driven narratives to estimate churn risk and the expected ROI of each retention intervention, so teams know not just who will churn, but who's worth saving.",
    tools: ["Scikit-learn", "XGBoost", "LightGBM", "CausalML", "SHAP", "LLMs"],
    highlights: [
      "Uplift modeling to estimate treatment effects and find persuadable customer segments",
      "Calibrated probabilities, class-imbalance handling, and business threshold optimization",
      "SHAP + LLM narrative synthesis turns model output into human-readable retention plays",
      "Containerized REST APIs and dashboards with monitoring, drift detection & experiment tracking",
    ],
  },
  {
    id: 3,
    title: "Aura Dual Intelligence",
    status: "live",
    category: "Agentic AI · LLM",
    icon: Sparkles,
    hue: 258,
    hue2: 288,
    motif: "agents",
    blurb: "Two frontier models that critique each other: GPT-4 and Gemini collaborating for sharper reasoning.",
    description:
      "A dual-intelligence engine where GPT-4 and Gemini work through a four-stage pipeline (independent responses, cross-evaluation, critique, and unified synthesis), yielding higher accuracy and fewer hallucinations than either model alone.",
    tools: ["Next.js", "GPT-4 API", "Gemini API", "Multi-Agent AI", "Tailwind"],
    highlights: [
      "Four-stage pipeline: query → dual responses → cross-critique → unified answer",
      "Two LLMs reviewing each other's work to reduce hallucination",
      "Production-deployed with a live demo at auraduo.app",
      "Model routing, response aggregation, and error handling at scale",
    ],
    github: "https://github.com/Yashwanth-Kumar-Kotla/aura-dual-intelligence",
    demo: "https://www.auraduo.app/",
  },
  {
    id: 4,
    title: "Insurance Premium Predictor",
    status: "live",
    category: "Insurance ML",
    icon: Shield,
    hue: 212,
    hue2: 238,
    motif: "shield",
    blurb: "An insurance risk classifier that predicts premium tiers from lifestyle and demographic signals.",
    description:
      "An end-to-end platform that classifies policyholders into premium risk tiers from demographic, lifestyle, and behavioral factors, automating traditional underwriting with real-time, validated predictions.",
    tools: ["Scikit-learn", "FastAPI", "Streamlit", "Docker", "Pydantic"],
    highlights: [
      "Engineered features: BMI, age segmentation, lifestyle risk scoring, city-tier categorization",
      "Real-time underwriting via FastAPI + Pydantic schema validation and health checks",
      "Interactive Streamlit decision-support interface for instant predictions",
      "Containerized and published to Docker Hub for reproducible deployment",
    ],
    github: "https://github.com/Yashwanth-Kumar-Kotla/Insurance_Premium_category_predictor",
    demo: "https://insurance-cat.streamlit.app/",
  },
];

const StatusBadge = ({ status }: { status: Status }) => {
  if (status === "building") {
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-amber-400/10 border border-amber-400/25 text-amber-300">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse-dot" />
        In progress
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-emerald-400/10 border border-emerald-400/25 text-emerald-300">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
      Live
    </span>
  );
};

const DetailDialog = ({ project, trigger }: { project: Project; trigger: React.ReactNode }) => (
  <Dialog>
    <DialogTrigger asChild>{trigger}</DialogTrigger>
    <DialogContent className="max-w-2xl max-h-[82vh] overflow-y-auto bg-zinc-950 border-white/[0.1]">
      <ProjectCover icon={project.icon} hue={project.hue} hue2={project.hue2} motif={project.motif} large className="h-44 rounded-xl -mt-2" />
      <DialogHeader>
        <div className="flex items-center gap-3 flex-wrap">
          <DialogTitle className="font-display text-2xl text-zinc-50">{project.title}</DialogTitle>
          <StatusBadge status={project.status} />
        </div>
        <DialogDescription className="text-zinc-400 leading-relaxed pt-1">
          {project.description}
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-6 mt-2">
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-3">Highlights</h4>
          <ul className="space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wider text-zinc-500 mb-3">Built with</h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <span key={t} className="font-mono text-[11px] px-2 py-1 rounded-md bg-white/[0.04] text-zinc-400 border border-white/[0.08]">
                {t}
              </span>
            ))}
          </div>
        </div>
        {(project.github || project.demo) && (
          <div className="flex gap-3 pt-1">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-white/[0.04] border border-white/[0.1] hover:border-white/25 text-zinc-200 transition-colors">
                <Github className="h-4 w-4" /> View code
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary hover:bg-primary/90 text-white transition-colors">
                <ExternalLink className="h-4 w-4" /> Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </DialogContent>
  </Dialog>
);

const FeaturedProject = ({ project }: { project: Project }) => (
  <div className="group grid lg:grid-cols-2 gap-px rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.06] hover:border-white/[0.16] transition-colors">
    <ProjectCover icon={project.icon} hue={project.hue} hue2={project.hue2} motif={project.motif} large className="min-h-[280px] lg:min-h-full" />
    <div className="bg-zinc-950 p-8 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">{project.category}</span>
        <StatusBadge status={project.status} />
      </div>
      <h3 className="font-display text-2xl font-bold text-zinc-50 mb-3">{project.title}</h3>
      <p className="text-zinc-400 leading-relaxed mb-6">{project.blurb}</p>

      {project.metrics && (
        <div className="grid grid-cols-3 gap-3 mb-7">
          {project.metrics.map((m) => (
            <div key={m.label} className="rounded-lg bg-white/[0.03] border border-white/[0.06] px-3 py-3">
              <div className="font-display text-lg font-bold text-zinc-50 tabular-nums">{m.value}</div>
              <div className="text-[11px] text-zinc-500 leading-tight mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-1.5 mb-7">
        {project.tools.map((t) => (
          <span key={t} className="font-mono text-[11px] px-2 py-1 rounded-md bg-white/[0.03] text-zinc-500 border border-white/[0.06]">
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 mt-auto">
        <DetailDialog
          project={project}
          trigger={
            <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-white/[0.04] border border-white/[0.1] hover:border-white/25 text-zinc-200 transition-colors">
              Case study
            </button>
          }
        />
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            className="group/btn inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary hover:bg-primary/90 text-white transition-colors">
            Live demo
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.1] hover:border-white/25 text-zinc-300 transition-colors" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group flex flex-col rounded-2xl overflow-hidden border border-white/[0.08] bg-zinc-950 hover:border-white/[0.16] transition-colors">
    <ProjectCover icon={project.icon} hue={project.hue} hue2={project.hue2} motif={project.motif} className="h-40" />
    <div className="flex flex-col flex-1 p-6">
      <div className="flex items-center gap-2.5 mb-3">
        <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">{project.category}</span>
        <StatusBadge status={project.status} />
      </div>
      <h3 className="font-display text-lg font-bold text-zinc-50 mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-sm text-zinc-500 leading-relaxed flex-1 mb-5">{project.blurb}</p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tools.slice(0, 4).map((t) => (
          <span key={t} className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-white/[0.03] text-zinc-500 border border-white/[0.06]">
            {t}
          </span>
        ))}
        {project.tools.length > 4 && (
          <span className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-white/[0.03] text-zinc-600 border border-white/[0.06]">
            +{project.tools.length - 4}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 mt-auto">
        <DetailDialog
          project={project}
          trigger={
            <button className="flex-1 py-2 text-sm font-medium rounded-lg bg-white/[0.04] border border-white/[0.1] hover:border-white/25 text-zinc-200 transition-colors">
              Details
            </button>
          }
        />
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.1] hover:border-white/25 text-zinc-300 transition-colors" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.1] hover:border-white/25 text-zinc-300 transition-colors" aria-label="Live demo">
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="py-28 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="mb-12">
            <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">Work</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-50 mt-2 tracking-tight">
              Things I've built
            </h2>
            <p className="text-zinc-500 mt-3 max-w-lg">
              End-to-end ML systems and AI products, built, deployed, and used.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="mb-5">
            <FeaturedProject project={featured} />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <div className="h-full">
                <ProjectCard project={p} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-12 text-center">
            <a href="https://github.com/Yashwanth-Kumar-Kotla/" target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-white/[0.03] border border-white/[0.1] hover:border-white/25 text-zinc-300 transition-colors">
              <Github className="h-4 w-4" />
              More on GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
