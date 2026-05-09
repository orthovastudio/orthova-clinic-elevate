import { Logo } from "./Logo";

export function Footer({ onCta }: { onCta: () => void }) {
  return (
    <footer className="bg-navy-deep text-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-end pb-14 border-b border-white/10">
          <h3 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] max-w-xl">
            Ready to bring Orthova <span className="italic text-slate-accent">to your clinic?</span>
          </h3>
          <div className="lg:justify-self-end">
            <button
              onClick={onCta}
              className="cta-glow inline-flex items-center gap-3 rounded-full bg-ivory text-navy-deep px-7 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.22em]"
            >
              Start Clinic Assessment →
            </button>
          </div>
        </div>
        <div className="pt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm text-ivory/60">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-5 max-w-sm leading-relaxed">
              A premium clear aligner partnership program for elite dental clinics, powered by
              German technology.
            </p>
          </div>
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.25em] text-ivory/80 mb-4">Explore</div>
            <ul className="space-y-2.5">
              <li><a href="#technology" className="hover:text-ivory">Our Technology</a></li>
              <li><a href="#process" className="hover:text-ivory">Process</a></li>
              <li><a href="#why" className="hover:text-ivory">Why Orthova</a></li>
              <li><a href="#faqs" className="hover:text-ivory">FAQs</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.25em] text-ivory/80 mb-4">Contact</div>
            <ul className="space-y-2.5">
              <li>partners@orthova.com</li>
              <li>Mon — Fri, 9:00 — 18:00 CET</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-wrap justify-between gap-4 text-xs text-ivory/40">
          <span>© {new Date().getFullYear()} Orthova. All rights reserved.</span>
          <span className="italic font-display">The Art Of Alignment</span>
        </div>
      </div>
    </footer>
  );
}
