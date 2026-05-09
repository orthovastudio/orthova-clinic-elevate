import { ClipboardCheck, UserPlus, Package, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    icon: ClipboardCheck,
    title: "Clinic Onboarding",
    body: "Submit your clinic profile and get approved as an Orthova partner. The process takes less than 48 hours.",
  },
  {
    n: "02",
    icon: UserPlus,
    title: "Patient Case Submission",
    body: "Submit patient records and 3D scans through our clinic portal. Our team reviews and plans the case with you.",
  },
  {
    n: "03",
    icon: Package,
    title: "Aligners Delivered to Your Clinic",
    body: "Custom-made aligners, engineered with German technology, are delivered directly to your clinic in premium packaging.",
  },
  {
    n: "04",
    icon: TrendingUp,
    title: "Grow Your Practice",
    body: "Offer your patients a premium aligner experience that sets your clinic apart — with full clinical support from Orthova.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-stone py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-muted-foreground">
            The Process
          </p>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] mt-3 text-navy-deep">
            How the partnership <span className="italic">works.</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl leading-relaxed">
            From onboarding to case delivery — we make it seamless for your clinic at every step.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="hover-lift group bg-card rounded-2xl border border-border p-7 hover:border-navy-deep/30 hover:shadow-elegant"
            >
              <div className="flex items-center justify-between">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-navy-deep text-ivory transition-transform duration-500 group-hover:scale-105">
                  <s.icon size={20} strokeWidth={1.6} />
                </div>
                <span className="font-display italic text-3xl text-navy-deep/15 group-hover:text-navy-deep/30 transition-colors">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-7 font-display text-xl text-navy-deep leading-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
