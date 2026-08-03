import { FadeIn } from "@/components/animations";
import {
  BarChart3,
  Cloud,
  FileSpreadsheet,
  GanttChartSquare,
  Layers,
} from "lucide-react";
const ENTERPRISE_TOOLS = [
  {
    icon: Layers,
    name: "SAP ERP",
    desc: "Integración centralizada de los flujos de operaciones, logística y finanzas en una sola fuente de verdad corporativa.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: BarChart3,
    name: "Power BI & Business Intelligence",
    desc: "Dashboards ejecutivos con KPIs analíticos en tiempo real para la toma de decisiones gerenciales.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  {
    icon: FileSpreadsheet,
    name: "Excel Avanzado & Modelamiento",
    desc: "Estructuración de modelos financieros complejos, control presupuestario y proyecciones de Budget & Forecast.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: GanttChartSquare,
    name: "MS Project & Primavera P6",
    desc: "Construcción de cronogramas maestros, análisis de ruta crítica y control estricto de proyectos industriales.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    icon: Cloud,
    name: "Integración Cloud & Gobernanza",
    desc: "Sincronización segura de datos entre campo y oficina central, garantizando disponibilidad y cumplimiento.",
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
];
export function EnterpriseToolsSection() {
  return (
    <section
      id="stack-corporativo"
      className="py-28 bg-card relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <FadeIn className="mb-14 max-w-3xl">
          <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">
            Infraestructura Tecnológica
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight mb-6">
            Herramientas corporativas que sustentan la operación diaria
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Consolidamos el stack tecnológico que su equipo ya utiliza,
            optimizándolo y conectándolo directamente con nuestros modelos
            analíticos avanzados.
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENTERPRISE_TOOLS.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <FadeIn key={tool.name} transition={{ delay: 0.1 + i * 0.05 }}>
                <div className="bg-background border border-border rounded-2xl p-7 h-full hover:border-primary/50 transition-colors group">
                  <div
                    className={`w-12 h-12 ${tool.bg} ${tool.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-white font-display font-bold text-lg mb-2">
                    {tool.name}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tool.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
