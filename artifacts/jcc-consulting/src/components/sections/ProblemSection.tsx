import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Activity, LayoutDashboard, Layers, ArrowRight } from "lucide-react";

const PAIN_POINTS = [
  {
    icon: Layers,
    title: "Información en Silos",
    desc: "Desconexión crítica entre lo que sucede en las operaciones mineras y lo que reflejan los estados financieros.",
  },
  {
    icon: Activity,
    title: "Procesos Manuales y Lentos",
    desc: "Excesiva dependencia de hojas de cálculo propensas a error que retrasan la toma de decisiones estratégicas.",
  },
  {
    icon: LayoutDashboard,
    title: "Visibilidad Limitada",
    desc: "Falta de herramientas predictivas que permitan anticipar escenarios de precios y costos.",
  },
];

export function ProblemSection() {
  return (
    <section id="problema" className="py-32 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <FadeIn>
            <div className="max-w-xl">
              <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">La Brecha de Eficiencia</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 leading-tight">
                ¿Su operación cuenta con la misma agilidad financiera que las minas Tier-1?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                En JCC Consulting cerramos esa brecha, llevando a operaciones medianas y grandes los estándares de gestión, control y tecnología de clase mundial.
              </p>
              <div className="h-px w-32 bg-primary/30 mb-8"></div>
              <p className="text-sm text-muted-foreground italic border-l-2 border-primary pl-4">
                "Las decisiones en minería no pueden esperar al cierre contable de fin de mes."
              </p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid gap-6">
            {PAIN_POINTS.map((point, idx) => (
              <StaggerItem key={idx}>
                <div className="group flex gap-6 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:bg-card/80">
                  <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <point.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">{point.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </div>
    </section>
  );
}
