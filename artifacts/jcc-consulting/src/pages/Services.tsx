import { ArrowRight, BriefcaseBusiness, Calculator, Crosshair, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "./Home";

const groups = [
  { id: "estrategia", icon: Crosshair, number: "01", title: "Estrategia y finanzas corporativas", intro: "Alineamos las decisiones financieras con lo que realmente ocurre en la operación.", items: ["Planeamiento estratégico y Balanced Scorecard", "Planeamiento y control financiero", "Gestión de Working Capital, CAPEX y flujos de caja", "Valorización de empresas y M&A"] },
  { id: "costos", icon: Calculator, number: "02", title: "Excelencia operacional y costos", intro: "Convertimos el control de costos en una herramienta para crecer, no solo para reportar.", items: ["Gestión de costos y presupuestos (Budget & Forecast)", "Presupuesto Base Cero", "Productividad y control de gestión", "KPIs operativos y análisis de causas raíz"] },
  { id: "proyectos", icon: BriefcaseBusiness, number: "03", title: "Proyectos y gestión comercial", intro: "Evaluamos oportunidades con la rigurosidad que exige una inversión minera.", items: ["Evaluación de proyectos de inversión", "Análisis de riesgo, VAN, TIR y WACC", "Valorización de concentrados", "Gestión comercial y compra de mineral"] },
  { id: "rentabilidad", icon: TrendingUp, number: "04", title: "Rentabilidad que se sostiene", intro: "La consultoría termina cuando las capacidades quedan instaladas en su equipo.", items: ["Modelos de gestión adaptados al negocio", "Transferencia de conocimiento", "Acompañamiento a usuarios clave", "Medición de impacto y mejora continua"] },
];

export default function Services() {
  return <div className="site-page"><Navbar /><main className="inner-page"><header className="page-header"><p className="eyebrow">Lo que hacemos</p><h1>Soluciones para cada decisión crítica de su operación.</h1><p>Desde el presupuesto hasta la valorización de un proyecto, ayudamos a que la cadena de valor minera funcione como una sola empresa.</p></header><section className="service-list">{groups.map(({id, icon: Icon, number, title, intro, items}) => <article id={id} className="service-row" key={id}><div className="service-number">{number}</div><Icon size={34} strokeWidth={1.3} /><div><h2>{title}</h2><p className="service-intro">{intro}</p><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></div><ArrowRight className="service-arrow" /></article>)}</section><div className="page-cta"><h2>¿Tiene un desafío específico?</h2><Link href="/contacto" className="button button-dark">Conversemos <ArrowRight size={17} /></Link></div></main><Footer /></div>;
}