import { useState } from "react";
import { Plus, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    q: "How do I become an Orthova partner clinic?",
    a: "Submit a clinic profile through our partnership page. Our clinical team reviews each application individually — most decisions are made within 48 hours, and approved clinics are onboarded with a dedicated account manager."
  },
  {
    q: "What case types does Orthova support?",
    a: "Orthova supports the full spectrum of clear aligner cases — from mild crowding and spacing to complex Class II/III corrections. Each treatment plan is reviewed by our in-house orthodontic team before production."
  },
  {
    q: "Why does Orthova use German technology?",
    a: "German-engineered manufacturing delivers unmatched clarity, biocompatibility, and dimensional precision. It allows us to guarantee a consistent premium product your patients can feel and see."
  },
  {
    q: "How fast is the turnaround from case submission to delivery?",
    a: "Most approved cases are produced and shipped within 5 to 7 business days, packaged in our signature clinic-ready presentation."
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faqs" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.32em] text-muted-foreground">FAQs</p>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] mt-3 text-navy-deep">
            Common <span className="italic">questions.</span>
          </h2>
        </div>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                >
                  <span className="font-display text-xl lg:text-2xl text-navy-deep group-hover:italic transition-all">
                    {f.q}
                  </span>
                  <span className="grid place-items-center h-10 w-10 rounded-full border border-border text-navy-deep flex-shrink-0 transition-all duration-500 group-hover:border-navy-deep">
                    <AnimatePresence mode="wait" initial={false}>
                      {isOpen ? (
                        <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                          <X size={16} />
                        </motion.span>
                      ) : (
                        <motion.span key="p" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                          <Plus size={16} />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 pr-14 text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
