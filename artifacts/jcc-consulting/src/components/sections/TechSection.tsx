import { FadeIn } from "@/components/animations";
import { Server, Zap, Compass } from "lucide-react";

export function TechSection() {
  return (
    <section
      id="tecnologia"
      className="py-32 bg-background border-y border-white/5 relative overflow-hidden"
    >
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <FadeIn className="mb-20">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">
            Transformación Digital
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white max-w-3xl mb-6">
            Cambiamos cómo funciona su operación, no solo qué herramienta usa
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            La transformación digital es la integración de tecnologías digitales
            en todas las áreas de una organización, para cambiar su
            funcionamiento, mejorar procesos y ofrecer más valor a sus clientes.
            En JCC Consulting la aplicamos a la operación minera de forma
            integral — mina, planta y finanzas trabajando con la misma
            información, en tiempo real.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8">
          <FadeIn transition={{ delay: 0.1 }}>
            <div className="bg-card border border-border p-10 rounded-3xl relative overflow-hidden h-full group hover:border-primary/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/20 to-transparent rounded-bl-full"></div>

              <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-8">
                <Compass className="w-7 h-7" />
              </div>

              <h4 className="text-2xl font-display font-bold text-white mb-3">
                Diagnóstico y Transformación Digital
              </h4>
              <p className="text-emerald-400 font-medium mb-8">
                "No implementamos tecnología sin antes entender su operación"
              </p>

              <ul className="space-y-5">
                {[
                  "Evaluamos el nivel real de madurez digital: qué procesos siguen en Excel y dónde se pierde tiempo conciliando datos entre mina y finanzas.",
                  "Hoja de ruta priorizada, separando quick wins de proyectos de mediano plazo, antes de tocar cualquier sistema.",
                  "Acompañamiento en la adopción por parte del equipo, no solo en la instalación de la herramienta.",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0"></div>
                    <span className="leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn transition={{ delay: 0.2 }}>
            <div className="bg-card border border-border p-10 rounded-3xl relative overflow-hidden h-full group hover:border-primary/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-full"></div>

              <div className="w-14 h-14 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-8">
                <Server className="w-7 h-7" />
              </div>

              <h4 className="text-2xl font-display font-bold text-white mb-3">
                Gestión de Implementación SAP
              </h4>
              <p className="text-blue-400 font-medium mb-8">
                "Somos el puente entre la operación minera y la tecnología"
              </p>

              <ul className="space-y-5">
                {[
                  "Actuamos como Coordinadores de Proyecto del lado de la mina, asegurando que el ERP responda a la realidad operativa.",
                  "Rediseño y estandarización de procesos end-to-end (mina-planta-finanzas) antes de la configuración.",
                  "Aseguramiento de modelo de costos, control CAPEX/OPEX y gestión del cambio para usuarios clave.",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0"></div>
                    <span className="leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn transition={{ delay: 0.3 }}>
            <div className="bg-card border border-border p-10 rounded-3xl relative overflow-hidden h-full group hover:border-primary/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full"></div>

              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-8">
                <Zap className="w-7 h-7" />
              </div>

              <h4 className="text-2xl font-display font-bold text-white mb-3">
                Automatización Inteligente
              </h4>
              <p className="text-primary font-medium mb-8">
                "Llevamos su planificación financiera al siguiente nivel"
              </p>

              <ul className="space-y-5">
                {[
                  <span key="1">
                    <strong>FP&A Automatizado</strong> — Implementación de
                    soluciones avanzadas para eliminar el trabajo manual en
                    Excel y acelerar el cierre financiero.
                  </span>,
                  <span key="2">
                    <strong>Dashboards Ejecutivos</strong> — Visualización de
                    KPIs en tiempo real para decisiones gerenciales inmediatas.
                  </span>,
                  <span key="3">
                    <strong>Tecnología de Clase Mundial</strong> — A través de
                    nuestra alianza con <em>Partner 247</em>, integramos
                    herramientas de Business Intelligence y automatización de
                    bases de datos que solo las grandes corporaciones suelen
                    poseer.
                  </span>,
                ].map((content, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                    <span className="leading-relaxed">{content}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Herramientas que dominamos */}
        <FadeIn
          transition={{ delay: 0.4 }}
          className="mt-16 pt-12 border-t border-white/5"
        >
          <p className="text-xs uppercase tracking-wider text-muted-foreground mb-6">
            Herramientas que dominamos
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {[
              "Excel Avanzado",
              "Power BI",
              "SAP ERP",
              "Automatización (Partner 247)",
            ].map((tool) => (
              <span key={tool} className="text-white/80 font-medium text-sm">
                {tool}
              </span>
            ))}
          </div>
        </FadeIn>

        {/* Cierre */}
        <FadeIn transition={{ delay: 0.5 }} className="mt-12">
          <p className="text-lg text-muted-foreground max-w-2xl">
            No entregamos informes que nadie vuelve a abrir. Implementamos
            sistemas que su equipo usa todos los días — y que mejoran el EBITDA
            de forma medible.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
