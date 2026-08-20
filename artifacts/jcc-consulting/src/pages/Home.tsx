import { ArrowRight, BarChart3, Factory, Layers3 } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/sections/Navbar";
import controlRoomImage from "@assets/generated_images/jcc-control-room.jpg";
import brightHeroImage from "@assets/generated_images/jcc-bright-mine-hero.jpg";

const valueStages = [
  { number: "01", title: "Excelencia operacional", text: "Proteger la producción y la productividad." },
  { number: "02", title: "Costos", text: "Explicar cada desviación con su driver." },
  { number: "03", title: "Valor comercial", text: "Maximizar NSR, contratos y ventas." },
  { number: "04", title: "Proyectos", text: "Priorizar capital, riesgo y retorno." },
  { number: "05", title: "Finanzas & FP&A", text: "Convertir el plan en caja." },
];

export default function Home() {
  return <div className="site-page">
    <Navbar />
    <main>
      <section className="home-hero">
        <div className="hero-image" style={{ backgroundImage: `linear-gradient(180deg, rgba(13,34,25,.18), rgba(13,34,25,.68)), url(${brightHeroImage})` }} />
        <video className="hero-video" autoPlay muted loop playsInline poster={brightHeroImage} aria-hidden="true">
          <source src={`${import.meta.env.BASE_URL}videos/jcc-consulting-hero-loop.mp4`} type="video/mp4" />
        </video>
        <div className="hero-content">
          <p className="eyebrow light">Bienvenidos a JCC Consulting</p>
          <h1>Bienvenidos.</h1>
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
      <section className="value-model-section">
        <div className="value-model-heading">
          <div>
            <p className="eyebrow">Modelo integral</p>
            <h2>Una brecha, un driver, un responsable y un impacto en dólares.</h2>
          </div>
          <p>Conectamos producción, costos, valor comercial, proyectos, EBITDA y caja para actuar antes y capturar valor.</p>
        </div>
        <div className="value-chain" aria-label="Cadena de valor JCC Consulting">
          {valueStages.map((stage, index) => <div className="value-stage" key={stage.number}>
            <span className="value-stage-number">{stage.number}</span>
            <h3>{stage.title}</h3>
            <p>{stage.text}</p>
            {index < valueStages.length - 1 && <ArrowRight className="value-stage-arrow" size={18} />}
          </div>)}
        </div>
        <div className="value-model-footer"><span>Datos</span><span>Brecha</span><span>Driver</span><span>Decisión</span><span>Acción</span><strong>Valor capturado</strong></div>
      </section>
      <section className="editorial-image-section">
        <div className="editorial-image" style={{ backgroundImage: `url(${controlRoomImage})` }} />
        <div className="editorial-overlay">
          <p className="eyebrow light">De los datos a la decisión</p>
          <h2>Una lectura conectada de la operación.</h2>
          <p>Integramos procesos, datos y automatización para que la dirección vea antes lo que está cambiando en el negocio.</p>
          <Link href="/tecnologia" className="button button-light">Ver transformación digital <ArrowRight size={17} /></Link>
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