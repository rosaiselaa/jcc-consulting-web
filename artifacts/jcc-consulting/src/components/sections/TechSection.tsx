import { FadeIn } from "@/components/animations";
import { Server, Zap } from "lucide-react";

export function TechSection() {
  return (
    <section id="tecnologia" className="py-32 bg-background border-y border-white/5 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <FadeIn className="mb-20">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">Tecnología de Clase Mundial</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white max-w-3xl">
            Modernización Tecnológica y Automatización Financiera
          </h3>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12">
          
          <FadeIn transition={{ delay: 0.1 }}>
            <div className="bg-card border border-border p-10 rounded-3xl relative overflow-hidden h-full group hover:border-primary/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-full"></div>
              
              <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-8">
                <Server className="w-7 h-7" />
              </div>
              
              <h4 className="text-2xl font-display font-bold text-white mb-3">Gestión de Implementación SAP</h4>
              <p className="text-blue-400 font-medium mb-8">"Somos el puente entre la operación minera y la tecnología"</p>
              
              <ul className="space-y-5">
                {[
                  "Actuamos como Coordinadores de Proyecto del lado de la mina, asegurando que el ERP responda a la realidad operativa.",
                  "Rediseño y estandarización de procesos end-to-end (mina-planta-finanzas) antes de la configuración.",
                  "Aseguramiento de modelo de costos, control CAPEX/OPEX y gestión del cambio para usuarios clave."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0"></div>
                    <span className="leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn transition={{ delay: 0.2 }}>
            <div className="bg-card border border-border p-10 rounded-3xl relative overflow-hidden h-full group hover:border-primary/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full"></div>
              
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8">
                <Zap className="w-7 h-7" />
              </div>
              
              <h4 className="text-2xl font-display font-bold text-white mb-3">Automatización Inteligente</h4>
              <p className="text-primary font-medium mb-8">"Llevamos su planificación financiera al siguiente nivel"</p>
              
              <ul className="space-y-5">
                {[
                  <span key="1"><strong>FP&A Automatizado</strong> — Implementación de soluciones avanzadas para eliminar el trabajo manual en Excel y acelerar el cierre financiero.</span>,
                  <span key="2"><strong>Dashboards Ejecutivos</strong> — Visualización de KPIs en tiempo real para decisiones gerenciales inmediatas.</span>,
                  <span key="3"><strong>Tecnología de Clase Mundial</strong> — A través de nuestra alianza con <em>Partner 247</em>, integramos herramientas de Business Intelligence y automatización de bases de datos que solo las grandes corporaciones suelen poseer.</span>
                ].map((content, i) => (
                  <li key={i} className="flex items-start gap-4 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                    <span className="leading-relaxed">{content}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
