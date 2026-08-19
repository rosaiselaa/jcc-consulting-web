import React from "react";

const painPoints = [
  {
    title: "Gestión en Silos",
    desc: "Desconexión crítica entre la operación minera y los estados financieros.",
  },
  {
    title: "Procesos Manuales",
    desc: "Excesiva dependencia de hojas de cálculo propensas a error.",
  },
  {
    title: "Visibilidad Limitada",
    desc: "Falta de herramientas predictivas para anticipar precios y costos.",
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-bold text-blue-700 tracking-widest uppercase mb-4">
            ¿Por qué el negocio pierde valor?
          </h2>
          <h3 className="text-4xl font-bold leading-tight">
            El problema no es la falta de datos, es decidir tarde.
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {painPoints.map((point, index) => (
            <div key={index} className="border-l-2 border-amber-600 pl-6">
              <h4 className="text-xl font-bold mb-3">{point.title}</h4>
              <p className="text-gray-600 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
