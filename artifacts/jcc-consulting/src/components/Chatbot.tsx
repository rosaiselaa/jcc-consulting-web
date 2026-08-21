import { useState } from "react";
import type { FormEvent } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { Link } from "wouter";

type Message = { from: "bot" | "user"; text: string };

const answers = [
  { keys: ["servicio", "servicios", "ayuda", "ofrecen", "hacen", "consultoria", "consultoría"], text: "Trabajamos en estrategia y finanzas, excelencia operacional y costos, proyectos y gestión comercial, rentabilidad, SAP PMO y transformación digital." },
  { keys: ["diagnóstico", "diagnostico", "30 días", "30 dias", "fugas", "brecha", "quick win"], text: "El diagnóstico ejecutivo de 30 días identifica fugas de valor, cuantifica el impacto en operación, costos, NSR, EBITDA y caja, y entrega una ruta priorizada con responsables y quick wins." },
  { keys: ["sap", "erp", "implementación", "implementacion", "sistema"], text: "Acompañamos SAP como PMO del lado de la mina: rediseño de procesos, modelo de costos, control CAPEX/OPEX, coordinación del proyecto y gestión del cambio." },
  { keys: ["costo", "costos", "presupuesto", "forecast", "opex", "capex", "desviación", "desviacion"], text: "Conectamos cada desviación con su driver y responsable para pasar de una lectura contable tardía a decisiones sobre volumen, precio, rendimiento, consumo e imputación." },
  { keys: ["proyecto", "proyectos", "inversión", "inversion", "van", "tir", "wacc", "comercial", "concentrado", "nsr"], text: "Evaluamos proyectos y decisiones comerciales con riesgo, VAN, TIR, WACC, CAPEX, NSR, penalidades, logística, EBITDA y caja en una sola lectura." },
  { keys: ["digital", "automatización", "automatizacion", "rpa", "dashboard", "power bi", "datos", "machine learning", "predictivo", "bpmn", "mapeo"], text: "Mapeamos, conectamos, automatizamos y anticipamos: BPMN, SQL, ETL, RPA, Power BI, Machine Learning, Computer Vision y Data Engineering." },
  { keys: ["precio", "precio", "cuánto", "cuanto", "tarifa", "cotización", "cotizacion", "costo del servicio"], text: "Cada intervención se dimensiona según la operación, el alcance y el impacto esperado. Podemos empezar con una sesión ejecutiva de alineamiento para definir el diagnóstico adecuado." },
  { keys: ["contacto", "reunión", "reunion", "hablar", "correo", "teléfono", "telefono", "ubicación", "ubicacion", "donde", "dónde", "lima"], text: "Puede escribir a jccente@jccconsulting.com.pe o llamar al +51 984 607 523. JCC Consulting atiende desde Lima, Perú; también puede usar la página de contacto." },
  { keys: ["ebitda", "margen", "resultado", "rentabilidad", "utilidad"], text: "Conectamos la operación con EBITDA y caja: identificamos qué drivers explican el resultado, quién puede actuar sobre ellos y cómo medir el valor capturado." },
  { keys: ["caja", "flujo", "working capital", "capital de trabajo", "liquidez"], text: "Ayudamos a ordenar el capital de trabajo, las cuentas por cobrar, inventarios, pagos y flujos de caja para mejorar liquidez sin perder continuidad operativa." },
  { keys: ["capex", "inversiones", "inversión", "retorno", "payback"], text: "Evaluamos CAPEX con caso base, escenarios, riesgo, VAN, TIR, WACC, payback y sensibilidad, conectando el proyecto con EBITDA y caja." },
  { keys: ["productividad", "producción", "produccion", "rendimiento", "eficiencia"], text: "Analizamos volumen, rendimiento, disponibilidad, consumo y restricciones para encontrar oportunidades concretas de productividad y acompañar su implementación." },
  { keys: ["presupuesto", "budget", "forecast", "planificación", "planificacion", "control financiero"], text: "Diseñamos presupuestos y forecast trazables, con responsables y drivers claros para explicar desviaciones y actualizar el plan con rapidez." },
  { keys: ["liderazgo", "gerente", "experiencia", "equipo", "jcc consulting"], text: "JCC Consulting combina experiencia en terreno, gestión financiera y transformación digital para trabajar junto a los equipos que toman decisiones en la operación." },
  { keys: ["automatizar", "automatización financiera", "cierre", "conciliación", "conciliaciones", "excel manual"], text: "Automatizamos conciliaciones, cargas, cierres y reportes repetitivos con RPA, ETL y modelos de control para liberar tiempo para el análisis." },
  { keys: ["minería", "mineria", "mina", "operación minera", "operacion minera"], text: "Trabajamos con una lectura integral de la operación minera: producción, costos, comercial, proyectos, finanzas, datos y tecnología conectados en una sola agenda." },
];

function getAnswer(value: string) {
  const normalized = value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const matches = answers
    .filter((item) => item.keys.some((key) => normalized.includes(key.normalize("NFD").replace(/[\u0300-\u036f]/g, ""))))
    .map((item) => item.text)
    .filter((text, index, list) => list.indexOf(text) === index)
    .slice(0, 2);
  return matches.length > 0 ? matches.join("\n\n") :
    "Puedo ayudarle con servicios, diagnóstico de 30 días, SAP PMO, costos, proyectos, automatización, datos, precios o contacto. ¿Qué tema desea conocer?";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hola. Soy el asistente de JCC Consulting. ¿Qué aspecto de su operación desea mejorar?" },
  ]);

  function ask(question: string) {
    const cleanQuestion = question.trim();
    if (!cleanQuestion) return;
    setMessages((current) => [...current, { from: "user", text: cleanQuestion }, { from: "bot", text: getAnswer(cleanQuestion) }]);
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const question = value.trim();
    if (!question) return;
    ask(question);
    setValue("");
  }

  return <div className="chatbot">
    {open && <div className="chat-window">
      <div className="chat-header">
        <div className="chat-agent">
          <span className="chat-agent-icon"><Bot size={18} /></span>
          <span><strong>Asistente JCC</strong><small><i /> Disponible para orientarle</small></span>
        </div>
        <button onClick={() => setOpen(false)} aria-label="Cerrar chat"><X size={18} /></button>
      </div>
      <div className="chat-welcome">
        <p className="chat-eyebrow">JCC CONSULTING / ORIENTACIÓN INICIAL</p>
        <h3>Conversemos sobre su operación.</h3>
      </div>
      <div className="chat-messages">{messages.map((message, index) => <div className={`chat-message ${message.from}`} key={`${message.text}-${index}`}>{message.text}</div>)}</div>
      <p className="chat-prompt">Preguntas frecuentes</p>
      <div className="chat-suggestion"><button onClick={() => ask("¿Qué incluye el diagnóstico de 30 días?")}>Diagnóstico 30 días</button><button onClick={() => ask("¿Qué servicios ofrecen?")}>Servicios</button><button onClick={() => ask("¿Cómo ayudan con SAP?")}>SAP PMO</button><button onClick={() => ask("¿Cómo mejoran EBITDA y caja?")}>EBITDA y caja</button><button onClick={() => ask("¿Qué automatizan?")}>Automatización</button></div>
      <form onSubmit={submit} className="chat-form"><input value={value} onChange={(event) => setValue(event.target.value)} placeholder="Escriba su consulta..." aria-label="Escriba su consulta" /><button type="submit" aria-label="Enviar"><Send size={16} /></button></form>
      <Link href="/contacto" className="chat-contact" onClick={() => setOpen(false)}><span>¿Prefiere hablar con un especialista?</span><strong>Agendar conversación <b>→</b></strong></Link>
    </div>}
    <button className={`chat-toggle ${open ? "is-open" : ""}`} onClick={() => setOpen((current) => !current)} aria-label={open ? "Cerrar asistente" : "Abrir asistente"}>{open ? <X size={20} /> : <MessageCircle size={20} />}<span>{open ? "Cerrar asistente" : "¿En qué podemos ayudar?"}</span></button>
  </div>;
}