import { useState } from "react";
import { Mail, Send, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Reveal from "@/components/Reveal";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      toast({ title: "Please fill out all fields.", variant: "destructive" });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({ title: "Please enter a valid email address.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.send("service_oytre3a", "template_vdxa30o", {
        from_name: name, name, from_email: email, email, reply_to: email, subject, message,
      }, "BeDdJGGyyHzh4gEG5");
      toast({ title: "Message sent!", description: "I'll get back to you within 24 hours." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast({ title: "Failed to send.", description: "Please email me directly at yashwanthkumarkotla@gmail.com", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { icon: Mail, label: "Email", value: "yashwanthkumarkotla@gmail.com", href: "mailto:yashwanthkumarkotla@gmail.com" },
    { icon: Github, label: "GitHub", value: "Yashwanth-Kumar-Kotla", href: "https://github.com/Yashwanth-Kumar-Kotla/" },
    { icon: Linkedin, label: "LinkedIn", value: "yashwanthkumarkotla", href: "https://www.linkedin.com/in/yashwanthkumarkotla/" },
  ];

  const inputClass =
    "w-full px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/[0.1] text-zinc-100 placeholder:text-zinc-600 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors";
  const labelClass = "block font-mono text-[11px] uppercase tracking-wider text-zinc-500 mb-1.5";

  return (
    <section id="contact" className="py-28 border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="mb-12">
            <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">Contact</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-50 mt-2 tracking-tight">
              Let's build something
            </h2>
            <p className="text-zinc-500 mt-3 max-w-lg">
              Open to full-time roles and interesting collaborations.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-2" delay={60}>
            <div className="space-y-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href}
                  target={s.href.startsWith("mailto:") ? "_self" : "_blank"} rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.16] transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 group-hover:border-primary/25 transition-colors">
                    <s.icon className="h-4 w-4 text-zinc-300 group-hover:text-primary transition-colors" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">{s.label}</div>
                    <div className="text-sm text-zinc-300 group-hover:text-zinc-50 transition-colors truncate">{s.value}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-zinc-600 ml-auto group-hover:text-zinc-300 transition-colors" />
                </a>
              ))}
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.07]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-sm font-medium text-zinc-100">Currently available</span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Based in Austin, TX. I typically reply within 24 hours.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={120}>
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white/[0.02] border border-white/[0.07] p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className={labelClass}>Name</label>
                  <input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} placeholder="Your name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder="you@email.com" className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className={labelClass}>Subject</label>
                <input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleInputChange} placeholder="What's this about?" className={inputClass} />
              </div>
              <div>
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea id="message" name="message" required value={formData.message} onChange={handleInputChange} placeholder="Tell me about the role, project, or idea..." rows={5} className={`${inputClass} resize-none`} />
              </div>
              <button type="submit" disabled={isSubmitting}
                className="w-full py-3 text-sm font-medium rounded-lg bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-white transition-colors flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" /> Send message
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
