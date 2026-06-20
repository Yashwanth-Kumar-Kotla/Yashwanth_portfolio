import { GraduationCap, Briefcase, Target } from "lucide-react";
import Reveal from "@/components/Reveal";

const education = [
  { degree: "M.S. Data Science", school: "Webster University", meta: "Aug 2024 – Dec 2026 · GPA 3.8" },
  { degree: "B.Tech, Information Technology", school: "Jawaharlal Institute of Tech & Science", meta: "2024 · GPA 7.48/10" },
];

const experience = [
  { role: "Founder / AI Engineer", org: "Aura Duo", meta: "Sep 2025 – Mar 2026 · Austin, TX" },
  { role: "Data Scientist", org: "Freelance", meta: "Apr 2025 – Sep 2025 · Austin, TX" },
];

const focus = [
  "Agentic AI · LangChain & LangGraph",
  "MLOps & end-to-end deployment",
  "LLMs, NLP & Transformer fine-tuning",
  "Causal inference & uplift modeling",
  "Explainable AI (SHAP) & risk modeling",
];

const SectionLabel = ({ n, title }: { n: string; title: string }) => (
  <div className="mb-10">
    <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">{n}</span>
    <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-50 mt-2 tracking-tight">{title}</h2>
  </div>
);

const Card = ({ icon: Icon, title, children }: { icon: typeof GraduationCap; title: string; children: React.ReactNode }) => (
  <div className="rounded-2xl bg-white/[0.02] border border-white/[0.07] p-6 hover:border-white/[0.14] transition-colors">
    <div className="flex items-center gap-3 mb-5">
      <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
        <Icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
      </div>
      <h3 className="font-display font-semibold text-zinc-50">{title}</h3>
    </div>
    {children}
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel n="About" title="From raw data to shipped intelligence" />
            </Reveal>
            <Reveal delay={80}>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  I'm a Data Scientist and AI Engineer who likes the whole stack of a
                  problem: engineering the pipeline, building the model, and shipping
                  the API that puts it in front of real users.
                </p>
                <p>
                  I founded <span className="text-zinc-100">Aura Duo</span>, a dual-intelligence
                  platform where GPT-4 and Gemini critique each other to produce sharper,
                  better-grounded answers. Lately I work a lot in{" "}
                  <span className="text-zinc-100">agentic AI</span>, orchestrating LLMs with
                  LangChain and LangGraph, alongside classical ML for prediction and risk.
                </p>
                <p>
                  Right now I'm building a{" "}
                  <span className="text-primary">Retention ROI System</span> that blends
                  uplift modeling, causal inference, and LLM-driven decision support to
                  quantify churn risk and the dollar value of intervening.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-5">
            <Reveal delay={120}>
              <Card icon={Briefcase} title="Experience">
                <div className="space-y-5">
                  {experience.map((e) => (
                    <div key={e.role} className="pl-4 border-l border-white/[0.1]">
                      <div className="text-sm font-medium text-zinc-100">{e.role}</div>
                      <div className="text-sm text-zinc-400">{e.org}</div>
                      <div className="font-mono text-[11px] text-zinc-600 mt-0.5">{e.meta}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-5">
              <Reveal delay={160}>
                <Card icon={GraduationCap} title="Education">
                  <div className="space-y-5">
                    {education.map((e) => (
                      <div key={e.degree} className="pl-4 border-l border-white/[0.1]">
                        <div className="text-sm font-medium text-zinc-100">{e.degree}</div>
                        <div className="text-sm text-zinc-400">{e.school}</div>
                        <div className="font-mono text-[11px] text-zinc-600 mt-0.5">{e.meta}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </Reveal>

              <Reveal delay={200}>
                <Card icon={Target} title="Focus">
                  <ul className="space-y-2.5">
                    {focus.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-zinc-400">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
