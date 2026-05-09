import { Eye, ShieldCheck, Zap, Headset, FlaskConical, LineChart } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  { icon: Eye, title: "Virtually Invisible Aligners", body: "Ultra-clear, BPA-free thermoplastic engineered to German technology standards — a product your patients will love and recommend." },
  { icon: ShieldCheck, title: "FDA Cleared & Clinically Backed", body: "Every aligner is FDA cleared and backed by clinical studies — giving you and your patients total confidence in the treatment." },
  { icon: Zap, title: "Fast Turnaround", body: "Cases are processed and delivered within days, not weeks — keeping your treatment schedule on track and your patients satisfied." },
  { icon: Headset, title: "Dedicated Clinical Support", body: "Your clinic gets a dedicated Orthova account manager and clinical team for case planning, troubleshooting, and refinements." },
  { icon: FlaskConical, title: "German Technology", body: "Aligners produced with German-standard technology — guaranteeing superior clarity, biocompatibility, and precision for every case." },
  { icon: LineChart, title: "Grow Your Revenue", body: "Add a premium aligner offering to your clinic without the overhead. Orthova handles production — you focus on patients." },
];

export function WhyOrthova() {
  return (
    <section id="why" className="relative bg-navy-deep text-ivory py-24 lg:py-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full opacity-60"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-slate-accent">Why Orthova</p>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] mt-3">
            Built for <span className="italic text-slate-accent font-light">clinicians.</span>
          </h2>
          <p className="mt-5 text-ivory/65 max-w-xl leading-relaxed">
            Every aspect of the Orthova system is designed to make your clinic more efficient,
            profitable, and respected.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="group bg-navy-deep p-8 lg:p-10 hover:bg-navy transition-colors duration-500"
            >
              <div className="grid place-items-center h-12 w-12 rounded-xl border border-white/15 text-slate-accent transition-all duration-500 group-hover:border-ivory/40 group-hover:text-ivory">
                <b.icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="mt-8 font-display text-2xl leading-tight">{b.title}</h3>
              <p className="mt-3 text-sm text-ivory/60 leading-relaxed">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
