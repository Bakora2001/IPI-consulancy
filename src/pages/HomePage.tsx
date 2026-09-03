import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/landing/Hero";
import { StatsBar } from "../components/landing/StatsBar";
import { VideoSection } from "../components/landing/VideoSection";
import { ApproachSteps } from "../components/landing/ApproachSteps";
import { EcosystemShowcase } from "../components/landing/EcosystemShowcase";
import { ImpactBanner } from "../components/landing/ImpactBanner";
import { PartnersSection } from "../components/landing/PartnersSection";
import { InitiativesPanel } from "../components/landing/InitiativesPanel";
import { NewsSection } from "../components/landing/NewsSection";
import { MapSection } from "../components/landing/MapSection";

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Header />
      <main className="flex-grow">
        {/* 1. Hero with typewriter, 10-person unity illustration, and 2 interactive circular showcases */}
        <Hero />

        {/* 2. Stats Bar — Core strategic indicators */}
        <StatsBar />

        {/* 3. Consultancy Mission & Video / Overview Showcase */}
        <VideoSection />

        {/* 4. 5-Stage Performance Framework (Diagnose to Measure) */}
        <ApproachSteps />

        {/* 5. Core 5 Service Portfolios Showcase */}
        <EcosystemShowcase />

        {/* 6. Five-Year Strategic Direction Banner (2026–2030) */}
        <ImpactBanner />

        {/* 7. High-Priority Organizations & Target Sectors in South Sudan */}
        <PartnersSection />

        {/* 8. 5-Year Implementation Roadmap Timeline */}
        <InitiativesPanel />

        {/* 9. Business Performance Briefs & Knowledge */}
        <NewsSection />

        {/* 10. Juba Headquarters Interactive Map & Office Location */}
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
