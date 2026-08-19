import { Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "./Home";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Contact() {
  return <div className="site-page"><Navbar /><main className="contact-page"><header className="page-header"><p className="eyebrow">Hablemos de rentabilidad</p><h1>¿Listo para optimizar su gestión minera?</h1><p>Agendemos una reunión de diagnóstico inicial para entender los desafíos específicos de su operación.</p></header><div className="contact-details"><a href="mailto:jccente@jccconsulting.com.pe"><Mail size={20} /> jccente@jccconsulting.com.pe</a><a href="tel:+51984607523"><Phone size={20} /> +51 984 607 523</a><span><MapPin size={20} /> Lima, Perú</span></div><ContactSection /></main><Footer /></div>;
}