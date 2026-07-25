import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";
import { Target, TrendingDown, Briefcase, Database } from "lucide-react";

const PILLARS = [
  {
    title: "Estrategia y Finanzas Corporativas",
    icon: Target,
    items: [
      { name: "Planeamiento Estratégico y Balanced Scorecard", desc: "Alineamiento de objetivos operativos y financieros" },
      { name: "Planeamiento y Control Financiero", desc: "Gestión de Working Capital, CAPEX y Flujos de Caja" },
      { name: "Valorización de Empresas y M&A", desc: "Análisis para fusiones, adquisiciones y decisiones de inversión" },
    ]
  },
  {
    title: "Excelencia Operacional y Costos",
    icon: TrendingDown,
    items: [
      { name: "Gestión de Costos y Presupuestos", desc: "Presupuesto Base Cero y control de Budget y Forecast" },
      { name: "Productividad y Control de Gestión", desc: "KPIs operativos-estratégicos y análisis de causas raíz de desviaciones" },
    ]
  },
  {
    title: "Proyectos y Gestión Comercial",
    icon: Briefcase,
    items: [
      { name: "Evaluación de Proyectos de Inversión", desc: "Análisis de riesgo, VAN, TIR y WACC para expansiones o nuevos proyectos" },
      { name: "Valorización de concentrados", desc: "Maximización del valor comercial" },
      { name: "Gestión Comercial y Compra de Mineral", desc: "Modelamiento económico para maximizar rentabilidad en acopio" },
    ]
  },
  {
    title: "Modernización Tecnológica",
    icon: Database,
    items: [
      { name: "PMO Minero SAP", desc: "El puente entre la operación minera y la tecnología" },
      { name: "Automatización Financiera", desc: "Aceleración del cierre y dashboards en tiempo real" },
    ]
  }
];

export function SolutionsSection() {
  return (
    <section id="soluciones" className="py-32 bg-card relative">
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">Nuestros Servicios</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Soluciones Integrales para la Cadena de Valor Minera
          </h3>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {PILLARS.map((pillar, idx) => (
            <StaggerItem key={idx}>
              <div className="h-full bg-background border border-border p-8 rounded-2xl hover:border-primary/40 transition-colors group">
                <div className="flex items-center gap-4 mb-8 border-b border-border pb-6">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <pillar.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-display font-bold text-white">{pillar.title}</h4>
                </div>
                <ul className="space-y-6">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex flex-col gap-1">
                      <span className="font-semibold text-white/90 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {item.name}
                      </span>
                      <span className="text-sm text-muted-foreground ml-4 leading-relaxed">
                        {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
