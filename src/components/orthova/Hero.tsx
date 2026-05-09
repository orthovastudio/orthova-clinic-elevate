import { ArrowRight, Check, Award, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function Hero({ onCta }: { onCta: () => void }) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-ivory pt-36 pb-28 lg:pt-44 lg:pb-36">
      {/* Decorative curves */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full opacity-[0.18] pointer-events-none"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="line" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M -100 600 C 300 200, 900 900, 1600 300" stroke="url(#line)" strokeWidth="1" fill="none" />
        <path d="M -100 700 C 400 350, 1000 1000, 1600 400" stroke="url(#line)" strokeWidth="1" fill="none" />
        <path d="M -100 500 C 200 100, 800 800, 1600 200" stroke="url(#line)" strokeWidth="1" fill="none" />
      </svg>
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[0.7rem] uppercase tracking-[0.4em] text-slate-accent mb-8"
        >
          ◆ Exclusive Clinical Partnership Program
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="font-display text-[clamp(2.5rem,6vw,5.25rem)] leading-[1.02] tracking-tight max-w-5xl"
        >
          Elevate Your Clinic With{" "}
          <span className="italic text-slate-accent font-light">Precision Aligners.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 max-w-2xl text-base lg:text-lg text-ivory/70 leading-relaxed"
        >
          Orthova partners with dental clinics and orthodontists to deliver premium clear aligner
          solutions powered by German technology — so your patients get exceptional results and
          your practice stands out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-12"
        >
          <button
            onClick={onCta}
            className="cta-glow group inline-flex items-center gap-4 rounded-full bg-ivory text-navy-deep pl-7 pr-3 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.22em]"
          >
            Start Clinic Assessment
            <span className="grid place-items-center h-10 w-10 rounded-full bg-navy-deep text-ivory transition-transform duration-500 group-hover:translate-x-1">
              <ArrowRight size={16} />
            </span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-[0.78rem] uppercase tracking-[0.22em] text-ivory/65"
        >
          <Badge icon={<Check size={14} />} label="FDA Cleared" />
          <Badge icon={<Award size={14} />} label="German Technology" />
          <Badge icon={<MapPin size={14} />} label="Selective Clinic Partnerships" />
        </motion.div>
      </div>
    </section>
  );
}

function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="grid place-items-center h-7 w-7 rounded-full border border-ivory/20 text-slate-accent">
        {icon}
      </span>
      {label}
    </div>
  );
}
