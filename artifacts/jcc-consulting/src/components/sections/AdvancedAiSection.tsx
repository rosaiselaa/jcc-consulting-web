import { FadeIn } from "@/components/animations";
import {
  Brain,
  Cpu,
  Database,
  Code2,
  GitBranch,
  Bot,
  ArrowRight,
  Zap,
} from "lucide-react";

const AI_CAPABILITIES = [
  {
    icon: GitBranch,
    name: "Mapeo de Procesos (BPMN)",
    desc: "Levantamiento y documentación de procesos end-to-end mina-planta-finanzas bajo notación BPMN, identificando cuellos de botella antes de automatizar cualquier sistema.",
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    tag: "Process Mapping",
  },
  {
    icon: Bot,
    name: "Automatización Robótica (RPA)",
    desc: "Bots de software que ejecutan tareas repetitivas de conciliación, carga de datos y generación de reportes, eliminando el trabajo manual propenso a error.",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    tag: "RPA",
  },
  {
    icon: Brain,
    name: "Machine Learning & Modelos Predictivos",
    desc: "Desarrollo de algoritmos supervisados y no supervisados para la anticipación de fallas en maquinaria crítica, optimización de costos y estimación de variables operativas complejas.",
    color: "text-fuchsia-400",
    bg: "bg-fuchsia-500/10",
    tag: "Predictive AI",
  },
  {
    icon: Cpu,
    name: "Deep Learning & Computer Vision",
    desc: "Implementación de redes neuronales profundas para procesamiento de video e imágenes en tiempo real, control automatizado de leyes minerales y detección de anomalías industriales.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    tag: "Neural Networks",
  },
  {
    icon: Database,
    name: "Arquitectura de Datos: SQL & Big Data",
    desc: "SQL Server para el núcleo transaccional (costos, presupuestos, operaciones) y Data Lakes para el volumen masivo de sensores IoT, GPS de flota y sistemas de perforación — cada dato en la arquitectura que le corresponde.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    tag: "Data Architecture",
  },
  {
    icon: Code2,
    name: "Python Pipelines & Data Engineering",
    desc: "Construcción de tuberías ETL automatizadas para la limpieza, transformación y procesamiento masivo de datos provenientes de múltiples fuentes y sensores de campo.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    tag: "Backend & ETL",
  },
];

export function AdvancedAiSection() {
  return (
    <section
      id="tecnologia"
      className="py-28 bg-background relative overflow-hidden border-t border-b border-border/50"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <FadeIn className="mb-14 max-w-3xl">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">
            Transformación Digital
          </h2>
          <div className="inline-flex items-center gap-2 bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider text-fuchsia-400 uppercase">
              Procesos, Automatización & Inteligencia Artificial
            </span>
          </div>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
            Del mapeo del proceso al modelo que lo predice
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Empezamos entendiendo y ordenando cómo funciona hoy su operación
            (BPMN), la automatizamos donde hay trabajo repetitivo (RPA), y la
            elevamos con Machine Learning, Deep Learning y Big Data donde hace
            falta anticipar el futuro, no solo reportar el pasado.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {AI_CAPABILITIES.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.name} transition={{ delay: 0.1 + i * 0.05 }}>
                <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-7 h-full flex flex-col justify-between hover:border-fuchsia-500/50 transition-all duration-300 group hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest bg-secondary text-muted-foreground px-2.5 py-1 rounded-md border border-border">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-white font-display font-bold text-lg mb-3 group-hover:text-fuchsia-400 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Franja adicional de valor / cierre corporativo */}
        <FadeIn transition={{ delay: 0.4 }}>
          <div className="bg-card/40 border border-border rounded-3xl p-8 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-display font-bold text-xl mb-1">
                  ¿Listo para escalar la madurez digital de su organización?
                </h4>
                <p className="text-sm text-muted-foreground">
                  Integramos estrategia, ingeniería de datos y modelos
                  predictivos en una sola hoja de ruta sin fricciones.
                </p>
              </div>
            </div>
            <a
              href="#contacto"
              className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 group"
            >
              <span>Diseñar mi solución</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
