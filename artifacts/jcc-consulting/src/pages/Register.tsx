import { useState } from "react";
import { ArrowRight, Check, LockKeyhole, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "./Home";

type Registration = {
  name: string;
  email: string;
  company: string;
  interest: string;
};

const defaultForm: Registration = { name: "", email: "", company: "", interest: "Diagnóstico ejecutivo de 30 días" };

export default function Register() {
  const [form, setForm] = useState(defaultForm);
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof Registration, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    localStorage.setItem("jcc-registration", JSON.stringify({ ...form, createdAt: new Date().toISOString() }));
    setSubmitted(true);
  }

  return (
    <div className="site-page">
      <Navbar />
      <main className="register-page">
        <section className="register-intro">
          <p className="eyebrow">Registro ejecutivo</p>
          <h1>Conectemos su próxima decisión con la experiencia adecuada.</h1>
          <p>Registre sus datos para recibir una conversación inicial enfocada en el desafío concreto de su operación.</p>
          <div className="register-signals">
            <span><Sparkles size={17} /> Orientación ejecutiva</span>
            <span><LockKeyhole size={17} /> Datos tratados con reserva</span>
          </div>
        </section>

        <section className="register-card" aria-live="polite">
          {submitted ? (
            <div className="register-success">
              <span className="register-success-icon"><Check size={22} /></span>
              <p className="eyebrow">Registro recibido</p>
              <h2>Gracias, {form.name.split(" ")[0] || "por registrarse"}.</h2>
              <p>Guardamos su solicitud en este dispositivo. Para coordinar directamente, puede escribirnos a jccente@jccconsulting.com.pe.</p>
              <div className="register-actions">
                <Link href="/contacto" className="button button-dark">Conversar con JCC <ArrowRight size={16} /></Link>
                <button className="text-link register-reset" onClick={() => { setForm(defaultForm); setSubmitted(false); }}>Registrar otra persona</button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit}>
              <p className="eyebrow">Cuéntenos sobre usted</p>
              <h2>Reserve un primer espacio de alineamiento.</h2>
              <label>Nombre completo<input required value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Ej. Juan Pérez" /></label>
              <label>Correo corporativo<input required type="email" value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="nombre@empresa.com" /></label>
              <label>Empresa<input required value={form.company} onChange={(event) => update("company", event.target.value)} placeholder="Compañía minera" /></label>
              <label>¿Qué desea explorar?<select value={form.interest} onChange={(event) => update("interest", event.target.value)}><option>Diagnóstico ejecutivo de 30 días</option><option>Excelencia operacional y costos</option><option>Transformación digital</option><option>Proyectos y finanzas</option><option>Otro desafío estratégico</option></select></label>
              <button type="submit" className="button button-dark register-submit">Crear registro ejecutivo <ArrowRight size={16} /></button>
            </form>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}