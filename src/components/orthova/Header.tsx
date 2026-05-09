import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "Our Technology", href: "#technology" },
  { label: "Partnership Process", href: "#process" },
  { label: "Why Orthova", href: "#why" },
  { label: "FAQs", href: "#faqs" },
];

export function Header({ onCta }: { onCta: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-navy-deep/80 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Logo variant="light" compact />
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.78rem] uppercase tracking-[0.22em] text-ivory/75 hover:text-ivory transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={onCta}
            className="hidden md:inline-flex cta-glow items-center gap-2 rounded-full bg-ivory text-navy-deep px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.2em]"
          >
            Become a Partner <ArrowRight size={14} />
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden h-10 w-10 grid place-items-center rounded-full border border-ivory/20 text-ivory"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-navy-deep border-t border-white/5">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[0.85rem] uppercase tracking-[0.22em] text-ivory/80"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                onCta();
              }}
              className="mt-2 cta-glow inline-flex items-center justify-center gap-2 rounded-full bg-ivory text-navy-deep px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em]"
            >
              Become a Partner <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
