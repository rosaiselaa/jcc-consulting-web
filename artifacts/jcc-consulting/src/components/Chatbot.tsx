import { useState } from "react";
import type { FormEvent } from "react";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { Link } from "wouter";

type Message = { from: "bot" | "user"; text: string };

const answers = [
  { keys: ["servicio", "servicios", "ayuda", "ofrecen"], text: "Trabajamos en excelencia operacional, costos y control de gestión, valor comercial, evaluación de proyectos, finanzas & FP&A y transformación digital." },
  { keys: ["diagnóstico", "diagnostico", "30 días", "30 dias"], text: "El diagnóstico ejecutivo de 30 días identifica fugas de valor, cuantifica el impacto y entrega una ruta priorizada con responsables, quick wins y business cases." },
  { keys: ["sap", "erp"], text: "Acompañamos la implementación SAP como PMO del lado de la mina: procesos end-to-end, modelo de costos, CAPEX/OPEX y gestión del cambio." },
  { keys: ["costo", "costos", "presupuesto", "forecast"], text: "Conectamos cada desviación con su driver y responsable para pasar de una lectura contable tardía a una decisión accionable." },
  { keys: ["digital", "automatización", "automatizacion", "dashboard", "datos"], text: "Mapeamos, conectamos, automatizamos y anticipamos: ERP, sistemas de mina, archivos, SQL, ETL, RPA, forecast y tableros ejecutivos." },
  { keys: ["contacto", "reunión", "reunion", "hablar", "correo"], text: "Puede escribir a jccente@jccconsulting.com.pe o llamar al +51 984 607 523. También puede usar la página de contacto." },
];

function getAnswer(value: string) {
  const normalized = value.toLowerCase();
  return answers.find((item) => item.keys.some((key) => normalized.includes(key)))?.text ??
    "Puedo orientarle sobre nuestros servicios, el diagnóstico de 30 días, SAP, costos, transformación digital o cómo contactarnos.";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hola. Soy el asistente de JCC Consulting. ¿Qué aspecto de su operación desea mejorar?" },
  ]);

  function submit(event: FormEvent) {
    event.preventDefault();
    const question = value.trim();
    if (!question) return;
    setMessages((current) => [...current, { from: "user", text: question }, { from: "bot", text: getAnswer(question) }]);
    setValue("");
  }

  return <div className="chatbot">
    {open && <div className="chat-window">
      <div className="chat-header"><div><Bot size={18} /><span>Asistente JCC</span></div><button onClick={() => setOpen(false)} aria-label="Cerrar chat"><X size={17} /></button></div>
      <div className="chat-messages">{messages.map((message, index) => <div className={`chat-message ${message.from}`} key={`${message.text}-${index}`}>{message.text}</div>)}</div>
      <div className="chat-suggestion"><button onClick={() => setValue("¿Qué incluye el diagnóstico de 30 días?")}>Diagnóstico de 30 días</button><button onClick={() => setValue("¿Qué servicios ofrecen?")}>Servicios</button></div>
      <form onSubmit={submit} className="chat-form"><input value={value} onChange={(event) => setValue(event.target.value)} placeholder="Escriba su consulta..." aria-label="Escriba su consulta" /><button type="submit" aria-label="Enviar"><Send size={16} /></button></form>
      <Link href="/contacto" className="chat-contact" onClick={() => setOpen(false)}>Agendar una conversación <span>→</span></Link>
    </div>}
    <button className="chat-toggle" onClick={() => setOpen((current) => !current)} aria-label={open ? "Cerrar asistente" : "Abrir asistente"}>{open ? <X size={22} /> : <MessageCircle size={22} />}<span>{open ? "" : "¿En qué podemos ayudar?"}</span></button>
  </div>;
}