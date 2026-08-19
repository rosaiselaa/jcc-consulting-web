import React from "react";

export const HeroSection = () => {
  return (
    <section className="relative bg-gray-950 text-white py-28 px-6 overflow-hidden border-b border-gray-800">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Etiqueta de Autoridad */}
        <div className="inline-block mb-6 px-4 py-1.5 bg-blue-950/80 border border-blue-500/30 text-blue-400 text-xs font-mono tracking-widest uppercase rounded-full">
          Consultoría Estratégica Minera de Alta Performance
        </div>

        {/* Título Principal de Impacto */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
          Conectamos la operación minera <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-amber-500">
            con el EBITDA y la caja.
          </span>
        </h1>

        {/* Subtítulo con la propuesta de valor real */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Llevamos los estándares de gestión, control de costos y automatización
          financiera de clase mundial a las operaciones mineras medianas y
          grandes del Perú[cite: 1].
        </p>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contacto"
            className="bg-amber-600 hover:bg-amber-500 text-white font-medium px-8 py-4 transition-colors shadow-lg text-center"
          >
            Agendar Diagnóstico Inicial (30 días)
          </a>
          <a
            href="#soluciones"
            className="border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium px-8 py-4 transition-colors text-center"
          >
            Ver Modelo de Gestión
          </a>
        </div>
      </div>
    </section>
  );
};
