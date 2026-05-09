import alignerImg from "@/assets/aligner-hero.jpg";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const tiers = [
  { kicker: "Elite", label: "Partner Clinics Only" },
  { kicker: "FDA", label: "Cleared Device" },
  { kicker: "German", label: "Technology" },
  { kicker: "100%", label: "Custom-Made Cases" },
];

export function PartnerMetrics() {
  return (
    <section id="technology" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
            <img
              src={alignerImg}
              alt="Premium Orthova clear aligner held by a clinician"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="absolute -bottom-8 -right-4 lg:right-8 bg-card rounded-2xl shadow-elegant p-5 pr-7 max-w-[280px] border border-border"
          >
            <div className="flex items-center gap-3">
              <div className="grid place-items-center h-11 w-11 rounded-full bg-navy-deep text-ivory">
                <Star size={18} fill="currentColor" />
              </div>
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                  Satisfaction
                </div>
                <div className="font-display text-xl text-navy-deep mt-0.5">
                  98% <span className="italic text-muted-foreground text-base">of partner doctors</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-muted-foreground">
            Our Partners
          </p>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] mt-3 text-navy-deep">
            <span className="italic">Elite.</span>
            <br />
            Selective, high-calibre <br /> clinic partners only.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
            We work with a curated network of practices that share our standard for clinical
            excellence, patient experience, and aesthetic precision.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {tiers.map((t) => (
              <div key={t.kicker} className="bg-ivory p-6">
                <div className="font-display text-3xl text-navy-deep">{t.kicker}</div>
                <div className="mt-2 text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
