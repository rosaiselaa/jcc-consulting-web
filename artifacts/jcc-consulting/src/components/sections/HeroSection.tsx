import { FadeIn } from "@/components/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@assets/generated_images/hero-bg.jpg";

export function HeroSection() {
  const scrollToNext = () => {
    document.getElementById("problema")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Peruvian Mine at dusk"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
        {/* subtle radial gradient for center focus */}
        <div className="absolute inset-0 bg-radial from-transparent to-background/90"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-5xl mt-20 text-center">
        <FadeIn>
          <div className="inline-block border border-primary/30 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase mb-8">
            Consultoría Estratégica Minera
          </div>
        </FadeIn>

        <FadeIn transition={{ delay: 0.1 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-[1.1] mb-8 text-white">
            Expertos en Optimización de Costos, Implementación SAP y{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">
              Automatización Financiera
            </span>
          </h1>
        </FadeIn>

        <FadeIn transition={{ delay: 0.2 }}>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Llevamos los estándares de gestión, control y tecnología de clase mundial a las operaciones mineras medianas y grandes del Perú.
          </p>
        </FadeIn>

        <FadeIn transition={{ delay: 0.3 }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={scrollToContact} className="w-full sm:w-auto text-base group px-8">
              Agendar Diagnóstico Inicial
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToNext} className="w-full sm:w-auto text-base text-white border-white/20 hover:bg-white/5">
              Conocer Más
            </Button>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer" onClick={scrollToNext}>
        <ChevronDown className="text-white/50 w-8 h-8" />
      </div>
    </section>
  );
}
