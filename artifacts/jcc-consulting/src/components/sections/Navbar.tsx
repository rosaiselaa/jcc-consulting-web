import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-[#f7f6f2]/95 shadow-sm backdrop-blur-md" : "bg-[#f7f6f2]"
    }`}>
      <div className="mx-auto flex h-[76px] max-w-[1380px] items-center justify-between px-6 lg:px-10">
        <Link href="/">
          <div className="cursor-pointer whitespace-nowrap text-[25px] font-bold tracking-[-0.055em] text-[#171717]">
            JCC Consulting<span className="text-[#c85a31]">.</span>
          </div>
        </Link>
        <div className="hidden items-center gap-9 md:flex">
          <Link href="/" className={`nav-link ${location === "/" ? "active" : ""}`}>Inicio</Link>
          <div className="group relative">
            <Link href="/servicios" className={`nav-link inline-flex items-center gap-1 ${location.startsWith("/servicios") ? "active" : ""}`}>
              Servicios <ChevronDown size={14} />
            </Link>
            <div className="invisible absolute left-0 top-8 w-64 translate-y-2 border border-[#ddd9d0] bg-[#f7f6f2] p-3 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link href="/detalle/estrategia-finanzas" className="menu-link">Estrategia y finanzas</Link>
              <Link href="/detalle/excelencia-costos" className="menu-link">Costos y operación</Link>
              <Link href="/detalle/proyectos-comercial" className="menu-link">Proyectos y gestión comercial</Link>
              <Link href="/detalle/rentabilidad" className="menu-link">Rentabilidad sostenible</Link>
            </div>
          </div>
          <Link href="/tecnologia" className={`nav-link ${location === "/tecnologia" ? "active" : ""}`}>Tecnología</Link>
          <Link href="/liderazgo" className={`nav-link ${location === "/liderazgo" ? "active" : ""}`}>Liderazgo</Link>
          <Link href="/contacto" className="nav-cta">Hablemos</Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-[#171717] md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-[#ddd9d0] bg-[#f7f6f2] md:hidden">
          <div className="flex flex-col gap-1 px-6 py-5">
            {[
              ["/", "Inicio"],
              ["/servicios", "Todos los servicios"],
              ["/detalle/estrategia-finanzas", "Estrategia y finanzas"],
              ["/detalle/excelencia-costos", "Costos y operación"],
              ["/detalle/proyectos-comercial", "Proyectos y gestión comercial"],
              ["/detalle/rentabilidad", "Rentabilidad sostenible"],
              ["/tecnologia", "Tecnología"],
              ["/liderazgo", "Liderazgo"],
              ["/contacto", "Contacto"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>{label}</Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
