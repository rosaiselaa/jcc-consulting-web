import { FadeIn } from "@/components/animations";
import { Award, Briefcase, TrendingUp } from "lucide-react";

export function LeadershipSection() {
  return (
    <section id="liderazgo" className="py-32 bg-card relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">Nuestro Equipo</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Liderazgo con Experiencia en Terreno
          </h3>
          <p className="text-lg text-muted-foreground">
            Contamos con un equipo de profesionales con experiencia en: Gestión de Costos, Finanzas Corporativas, Transformación Digital, SAP, Gestión de Proyectos.
          </p>
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="bg-background border border-border rounded-3xl overflow-hidden flex flex-col md:flex-row">
              {/* Image/Avatar Placeholder side */}
              <div className="md:w-2/5 bg-secondary relative flex items-center justify-center p-12 overflow-hidden border-b md:border-b-0 md:border-r border-border">
                {/* Abstract graphic representing leadership/expertise */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/40 via-background to-background"></div>
                <div className="relative z-10 w-48 h-48 rounded-full border-4 border-background shadow-2xl flex items-center justify-center bg-card">
                  <span className="text-6xl font-display font-bold text-muted-foreground">JC</span>
                </div>
              </div>

              {/* Content side */}
              <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center">
                <h4 className="text-3xl font-display font-bold text-white mb-2">Julio Cesar Ccente</h4>
                <p className="text-primary font-medium text-lg mb-8 uppercase tracking-wide">Gerente General</p>

                <ul className="space-y-6 mb-10">
                  <li className="flex gap-4 items-start">
                    <Briefcase className="w-6 h-6 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-white/80 leading-relaxed">Consultor experto con sólida trayectoria en las principales unidades mineras del Perú.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <TrendingUp className="w-6 h-6 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-white/80 leading-relaxed">Especialista en la integración de la visión operativa con la estrategia financiera.</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <Award className="w-6 h-6 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-white/80 leading-relaxed">Historial comprobado en la dirección de proyectos de optimización de costos y transformación digital en entornos complejos.</span>
                  </li>
                </ul>

                <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-lg text-muted-foreground relative">
                  <span className="absolute -top-4 -left-2 text-6xl text-primary/20 font-serif">"</span>
                  No solo entregamos informes; implementamos soluciones que mejoran el EBITDA y aseguran la sostenibilidad del negocio.
                </blockquote>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
