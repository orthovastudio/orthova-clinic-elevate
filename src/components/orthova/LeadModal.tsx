import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  clinic: z.string().trim().min(1, "Clinic name is required").max(120),
  doctor: z.string().trim().min(1, "Doctor's name is required").max(120),
  volume: z.enum(["0-5", "5-15", "15+"]),
  city: z.string().trim().min(1, "City is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
});

type Form = {
  clinic: string;
  doctor: string;
  volume: "0-5" | "5-15" | "15+" | "";
  city: string;
  email: string;
};

const initial: Form = { clinic: "", doctor: "", volume: "", city: "", email: "" };

const steps = [
  { key: "clinic", label: "Clinic Name", placeholder: "e.g. Lumière Dental" },
  { key: "doctor", label: "Doctor's Name", placeholder: "Dr. Eva Marin" },
  { key: "volume", label: "Monthly Aligner Volume" },
  { key: "city", label: "City", placeholder: "Berlin" },
  { key: "email", label: "Email Address", placeholder: "you@clinic.com" },
] as const;

export function LeadModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>(initial);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (open) {
      setStep(0);
      setForm(initial);
      setError(null);
      setDone(false);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const total = steps.length;
  const cur = steps[step];

  function validateStep(): boolean {
    setError(null);
    const key = cur.key;
    const partial: Record<string, unknown> = { ...form };
    const fieldSchema = schema.shape[key as keyof typeof schema.shape];
    const result = fieldSchema.safeParse(partial[key]);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Invalid input");
      return false;
    }
    return true;
  }

  function next() {
    if (!validateStep()) return;
    if (step < total - 1) setStep(step + 1);
    else submit();
  }

  function submit() {
    const result = schema.safeParse(form);
    if (!result.success) {
      setError(result.error.issues[0]?.message ?? "Please review your details");
      return;
    }
    setDone(true);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-navy-deep/80 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative w-full max-w-xl bg-ivory rounded-3xl shadow-elegant overflow-hidden"
          >
            <button
              aria-label="Close"
              onClick={onClose}
              className="absolute top-5 right-5 z-10 grid place-items-center h-10 w-10 rounded-full border border-border text-navy-deep hover:bg-stone transition"
            >
              <X size={16} />
            </button>

            {/* Progress */}
            <div className="h-1 bg-stone">
              <motion.div
                className="h-full bg-navy-deep"
                animate={{ width: `${((done ? total : step) + (done ? 0 : 1)) / total * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="p-8 lg:p-12">
              {!done ? (
                <>
                  <div className="text-[0.7rem] uppercase tracking-[0.32em] text-muted-foreground">
                    Clinic Assessment · Step {step + 1} / {total}
                  </div>
                  <h3 className="mt-3 font-display text-3xl lg:text-4xl text-navy-deep leading-tight">
                    <span className="italic">{cur.label}</span>
                  </h3>

                  <div className="mt-8 min-h-[120px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={cur.key}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        {cur.key === "volume" ? (
                          <div className="grid grid-cols-3 gap-3">
                            {(["0-5", "5-15", "15+"] as const).map((v) => (
                              <button
                                key={v}
                                onClick={() => setForm({ ...form, volume: v })}
                                className={`rounded-xl border px-4 py-5 text-center transition-all ${
                                  form.volume === v
                                    ? "border-navy-deep bg-navy-deep text-ivory"
                                    : "border-border hover:border-navy-deep/40"
                                }`}
                              >
                                <div className="font-display text-2xl">{v}</div>
                                <div className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] opacity-70">
                                  cases / mo
                                </div>
                              </button>
                            ))}
                          </div>
                        ) : (
                          <input
                            autoFocus
                            type={cur.key === "email" ? "email" : "text"}
                            value={form[cur.key]}
                            placeholder={"placeholder" in cur ? cur.placeholder : ""}
                            onChange={(e) => setForm({ ...form, [cur.key]: e.target.value })}
                            onKeyDown={(e) => { if (e.key === "Enter") next(); }}
                            className="w-full bg-transparent border-b border-border focus:border-navy-deep outline-none py-3 text-xl font-display text-navy-deep transition-colors placeholder:text-muted-foreground/60"
                          />
                        )}
                        {error && (
                          <p className="mt-3 text-sm text-destructive">{error}</p>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="mt-10 flex items-center justify-between">
                    <button
                      onClick={() => step > 0 && setStep(step - 1)}
                      disabled={step === 0}
                      className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-muted-foreground disabled:opacity-30 hover:text-navy-deep transition"
                    >
                      <ArrowLeft size={14} /> Back
                    </button>
                    <button
                      onClick={next}
                      className="cta-glow inline-flex items-center gap-3 rounded-full bg-navy-deep text-ivory pl-6 pr-2 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em]"
                    >
                      {step === total - 1 ? "Submit" : "Continue"}
                      <span className="grid place-items-center h-9 w-9 rounded-full bg-ivory text-navy-deep">
                        <ArrowRight size={14} />
                      </span>
                    </button>
                  </div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-6"
                >
                  <div className="mx-auto grid place-items-center h-14 w-14 rounded-full bg-navy-deep text-ivory">
                    <Check size={22} />
                  </div>
                  <h3 className="mt-6 font-display text-3xl text-navy-deep">
                    Thank you, <span className="italic">{form.doctor}.</span>
                  </h3>
                  <p className="mt-3 text-muted-foreground max-w-sm mx-auto">
                    Your clinic assessment has been received. An Orthova partnership specialist
                    will reach out to {form.email} within 48 hours.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-8 cta-glow inline-flex items-center gap-2 rounded-full bg-navy-deep text-ivory px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em]"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
