import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { TechSection } from "@/components/sections/TechSection";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden dark">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionsSection />
        <TechSection />
        <LeadershipSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display font-bold text-xl tracking-tight text-white">
            JCC <span className="text-primary">Consulting</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} JCC Consulting. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
