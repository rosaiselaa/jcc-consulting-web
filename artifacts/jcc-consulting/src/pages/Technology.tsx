import { useEffect, useState } from "react";
import { ArrowRight, BarChart3, Calculator, Cloud, Database, FileSpreadsheet, Gauge, X } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "./Home";
import sapToolImage from "@assets/generated_images/jcc-tool-sap-erp.jpg";
import powerBiToolImage from "@assets/generated_images/jcc-tool-power-bi.jpg";
import excelToolImage from "@assets/generated_images/jcc-tool-excel.jpg";
import projectToolImage from "@assets/generated_images/jcc-tool-project.jpg";
import cloudToolImage from "@assets/generated_images/jcc-tool-cloud.jpg";
import processMappingImage from "@assets/generated_images/jcc-mapeo-procesos.jpg";
import rpaImage from "@assets/generated_images/jcc-rpa.jpg";
import predictiveImage from "@assets/generated_images/jcc-modelos-predictivos.jpg";
import computerVisionImage from "@assets/generated_images/jcc-computer-vision.jpg";
import dataArchitectureImage from "@assets/generated_images/jcc-arquitectura-datos.jpg";
import dataEngineeringImage from "@assets/generated_images/jcc-data-engineering.jpg";

const corporateTools = [
  { icon: Database, accent: "blue", image: sapToolImage, slug: "sap-pmo", title: "SAP ERP", text: "Integración centralizada de los flujos de operaciones, logística y finanzas en una sola fuente de verdad corporativa." },
  { icon: BarChart3, accent: "gold", image: powerBiToolImage, slug: "power-bi", title: "Power BI & Business Intelligence", text: "Dashboards ejecutivos con KPIs analíticos en tiempo real para la toma de decisiones gerenciales." },
  { icon: FileSpreadsheet, accent: "green", image: excelToolImage, slug: "excel-modelamiento", title: "Excel Avanzado & Modelamiento", text: "Modelos financieros complejos, control presupuestario y proyecciones de Budget & Forecast." },
  { icon: Calculator, accent: "orange", image: projectToolImage, slug: "project-primavera", title: "MS Project & Primavera P6", text: "Cronogramas maestros, análisis de ruta crítica y control estricto de proyectos industriales." },
  { icon: Cloud, accent: "cyan", image: cloudToolImage, slug: "cloud-gobernanza", title: "Integración Cloud & Gobernanza", text: "Sincronización segura de datos entre campo y oficina central, garantizando disponibilidad y cumplimiento." },
];

const transformationSteps = [
  { image: processMappingImage, label: "Mapeo de procesos", tag: "PROCESS MAPPING", text: "Levantamos y documentamos los procesos end-to-end de mina, planta y finanzas para entender cómo fluye realmente el trabajo.", detail: "Antes de automatizar, hacemos visible el proceso. Identificamos responsables, decisiones, entradas, salidas y puntos donde se pierde tiempo o información. Con esa línea base, priorizamos mejoras que el equipo puede implementar y medir." },
  { image: rpaImage, label: "Automatización robótica", tag: "RPA", text: "Bots de software que ejecutan tareas repetitivas de conciliación, carga de datos y generación de reportes.", detail: "Diseñamos automatizaciones alrededor de procesos concretos, con control de excepciones y trazabilidad. El objetivo es reducir trabajo manual y errores sin perder la supervisión del equipo financiero u operativo." },
  { image: predictiveImage, label: "Machine Learning & modelos predictivos", tag: "PREDICTIVE AI", text: "Algoritmos para anticipar fallas en maquinaria crítica, desviaciones de costos y variables operativas.", detail: "Conectamos datos históricos y operativos para detectar patrones que una revisión manual no alcanza a ver. Los modelos ayudan a anticipar escenarios, priorizar alertas y tomar decisiones con mayor tiempo de reacción." },
  { image: computerVisionImage, label: "Deep Learning & Computer Vision", tag: "NEURAL NETWORKS", text: "Redes neuronales profundas para video e imágenes en tiempo real, control automatizado y detección de anomalías.", detail: "Convertimos imágenes y video en señales útiles para la operación. La solución puede apoyar controles de calidad, monitoreo de condiciones y detección temprana de eventos que requieren atención." },
  { image: dataArchitectureImage, label: "Arquitectura de datos: SQL & Big Data", tag: "DATA ARCHITECTURE", text: "SQL Server para el núcleo transaccional y Data Lakes para el volumen masivo de sensores y sistemas.", detail: "Ordenamos dónde vive cada dato, cómo se conecta y quién puede usarlo. Así la información de ERP, campo, laboratorio, sensores y planeamiento queda disponible con calidad, seguridad y contexto." },
  { image: dataEngineeringImage, label: "Python Pipelines & Data Engineering", tag: "BACKEND & ETL", text: "Tuberías ETL automatizadas para limpieza, transformación y procesamiento masivo de múltiples fuentes.", detail: "Construimos pipelines confiables para que los datos lleguen limpios y listos para dashboards, modelos y análisis. La ingeniería se enfoca en reducir reprocesos y sostener una lectura consistente del negocio." },
];

export default function Technology() {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [activeTransformation, setActiveTransformation] = useState<string | null>(null);
  const selectedTransformation = transformationSteps.find(step => step.label === activeTransformation);

  useEffect(() => {
    if (!activeTransformation) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveTransformation(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeTransformation]);

  return <div className="site-page"><Navbar /><main className="inner-page"><header className="page-header"><p className="eyebrow">Modernización tecnológica</p><h1>La tecnología debe responder a la operación, no al revés.</h1><p>Consolidamos el stack tecnológico que su equipo ya utiliza, lo optimizamos y lo conectamos directamente con modelos analíticos avanzados.</p></header><section className="tech-panels"><article><Database size={33} /><p className="eyebrow">01 / SAP PMO minero</p><h2>Un ERP que entiende la realidad de su mina.</h2><p>Coordinamos el proyecto desde el lado de la operación, rediseñando procesos end-to-end antes de configurar la tecnología.</p><ul><li>Modelo de costos y control CAPEX/OPEX</li><li>Estandarización mina–planta–finanzas</li><li>Gestión del cambio para usuarios clave</li></ul><Link href="/detalle/sap-pmo" className="detail-link">Ver detalle <ArrowRight size={16} /></Link></article><article className="orange-panel"><Gauge size={33} /><p className="eyebrow text-ring">02 / Automatización inteligente</p><h2>Menos Excel manual. Más tiempo para decidir.</h2><p>Llevamos su planificación financiera al siguiente nivel con FP&A automatizado, dashboards ejecutivos y Business Intelligence.</p><ul><li>Cierre financiero más rápido</li><li>KPIs visibles en tiempo real</li><li>Alianza tecnológica con Partner 247</li></ul><Link href="/detalle/automatizacion" className="detail-link">Ver detalle <ArrowRight size={16} /></Link></article></section><section className="premium-tech-section tools-section"><div className="premium-section-heading"><div><p className="eyebrow">El stack que conecta la operación</p><h2>Herramientas corporativas que sostienen la operación diaria.</h2></div><p>Una arquitectura práctica para que los datos pasen del campo a la decisión sin perder contexto, velocidad ni control.</p></div><div className="tool-grid">{corporateTools.map(({ image, title, text }) => { const isActive = activeTool === title; return <button type="button" className={`tool-card ${isActive ? "is-active" : ""}`} key={title} aria-expanded={isActive} onClick={() => setActiveTool(isActive ? null : title)}><div className="tool-image" style={{ backgroundImage: `url(${image})` }} /><div className="tool-card-content"><h3>{title}</h3>{isActive && <p className="tool-description">{text}</p>}</div></button>; })}</div></section><section className="premium-tech-section tools-section transformation-section"><div className="premium-section-heading"><div><p className="eyebrow">De la operación al modelo</p><h2>Del mapeo del proceso al modelo que lo predice.</h2></div><p>Empezamos entendiendo y ordenando cómo funciona hoy su operación, automatizamos donde hay trabajo repetitivo y elevamos el análisis donde hace falta anticipar el futuro.</p></div><div className="transformation-grid">{transformationSteps.map(({ image, label, tag }) => <button type="button" className="transformation-card" key={label} onClick={() => setActiveTransformation(label)} aria-label={`Ver explicación de ${label}`}><div className="transformation-image" style={{ backgroundImage: `url(${image})` }} /><div className="transformation-content"><div className="transformation-top"><span>{tag}</span></div><h3>{label}</h3><span className="card-more">Ver solución <ArrowRight size={14} /></span></div></button>)}</div></section><section className="quote-block"><span>“</span><p>No implementamos tecnología sin antes entender cómo funciona su operación.</p></section><div className="page-cta"><h2>Conectemos su operación.</h2><Link href="/contacto" className="button button-dark">Agendar diagnóstico <ArrowRight size={17} /></Link></div></main>{selectedTransformation && <div className="solution-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveTransformation(null); }}><section className="solution-modal" role="dialog" aria-modal="true" aria-labelledby="solution-modal-title"><button type="button" className="solution-modal-close" onClick={() => setActiveTransformation(null)} aria-label="Cerrar explicación"><X size={20} /></button><div className="solution-modal-image" style={{ backgroundImage: `url(${selectedTransformation.image})` }} /><div className="solution-modal-copy"><p className="eyebrow">{selectedTransformation.tag}</p><h2 id="solution-modal-title">{selectedTransformation.label}</h2><p className="solution-modal-lead">{selectedTransformation.text}</p><p className="solution-modal-detail">{selectedTransformation.detail}</p><button type="button" className="solution-modal-action" onClick={() => setActiveTransformation(null)}>Entendido <ArrowRight size={16} /></button></div></section></div>}<Footer /></div>;
}