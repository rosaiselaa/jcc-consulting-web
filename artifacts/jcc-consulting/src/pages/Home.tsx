import { ArrowRight, BarChart3, Factory, Layers3 } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/sections/Navbar";

export default function Home() {
  return <div className="site-page">
    <Navbar />
    <main>
      <section className="home-hero">
        <div className="hero-image" />
        <div className="hero-content">
          <p className="eyebrow light">Consultoría estratégica minera</p>
          <h1>La ventaja competitiva empieza con una mejor decisión.</h1>
          <p className="hero-copy">Ayudamos a las operaciones mineras del Perú a convertir costos, datos y tecnología en resultados sostenibles.</p>
          <Link href="/servicios" className="button button-light">Conozca nuestro trabajo <ArrowRight size={17} /></Link>
        </div>
        <div className="hero-index">01 / 04</div>
      </section>
      <section className="intro-section">
        <div>
          <p className="eyebrow">JCC Consulting</p>
          <h2>Cerramos la brecha entre la operación y la estrategia.</h2>
        </div>
        <div className="intro-copy">
          <p>Las empresas mineras que toman mejores decisiones operativas y financieras tienen algo en común: una visión conectada del negocio.</p>
          <p>JCC Consulting integra experiencia de terreno, control de gestión y transformación tecnológica para que esa visión sea posible.</p>
          <Link href="/liderazgo" className="text-link">Conozca JCC Consulting <ArrowRight size={16} /></Link>
        </div>
      </section>
      <section className="feature-grid">
        <Link href="/servicios" className="feature-card">
          <Factory size={29} strokeWidth={1.4} /><span>01</span><h3>Excelencia operacional</h3><p>Costos, presupuestos y productividad que se pueden gestionar.</p><ArrowRight size={18} />
        </Link>
        <Link href="/tecnologia" className="feature-card orange">
          <Layers3 size={29} strokeWidth={1.4} /><span>02</span><h3>Transformación tecnológica</h3><p>SAP, automatización y dashboards para una operación conectada.</p><ArrowRight size={18} />
        </Link>
        <Link href="/contacto" className="feature-card dark">
          <BarChart3 size={29} strokeWidth={1.4} /><span>03</span><h3>Resultados sostenibles</h3><p>No entregamos informes. Implementamos soluciones que mejoran el EBITDA.</p><ArrowRight size={18} />
        </Link>
      </section>
    </main>
    <Footer />
  </div>;
}

export function Footer() {
  return <footer className="site-footer"><div className="footer-brand">JCC<span>.</span></div><p>Consultoría minera y transformación financiera</p><div><a href="mailto:jccente@jccconsulting.com.pe">jccente@jccconsulting.com.pe</a><br />Lima, Perú</div></footer>;
}