import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/orthova/Header";
import { Hero } from "@/components/orthova/Hero";
import { PartnerMetrics } from "@/components/orthova/PartnerMetrics";
import { Process } from "@/components/orthova/Process";
import { WhyOrthova } from "@/components/orthova/WhyOrthova";
import { FAQ } from "@/components/orthova/FAQ";
import { Footer } from "@/components/orthova/Footer";
import { LeadModal } from "@/components/orthova/LeadModal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [open, setOpen] = useState(false);
  const openCta = () => setOpen(true);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onCta={openCta} />
      <main>
        <Hero onCta={openCta} />
        <PartnerMetrics />
        <Process />
        <WhyOrthova />
        <FAQ />
      </main>
      <Footer onCta={openCta} />
      <LeadModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
