import { useEffect, useRef, useState } from 'react';
import { ArrowRight, FileText, Users, ShieldCheck, Flame } from 'lucide-react';

// Asegúrate de importar las imágenes correctamente
import imgProteccion from '../assets/proteccion_civil/protect.jpg'; 
import imgLogo from '../assets/inicio/PROTEC_LOGO_blanco.png';

export function ProteccionCivilPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 } // Se activa cuando el usuario ve el 20% de la sección
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section 
      id="proteccion-civil" 
      ref={sectionRef} 
      className="relative w-full min-h-[800px] flex items-center font-['Plus_Jakarta_Sans'] overflow-hidden"
    >
      
      {/* 1. IMAGEN DE FONDO */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imgProteccion} 
          alt="Expertos en Protección Civil" 
          className={`w-full h-full object-cover object-center lg:object-right transition-transform duration-[2000ms] ease-out ${
            isVisible ? 'scale-100' : 'scale-110'
          }`} 
        />
        {/* Degradados para oscurecer y dar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040b16] via-[#040b16]/80 to-transparent/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#040b16] via-[#040b16]/30 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-8 py-20 lg:py-24">
        
        {/* ========================================================
            CONTENEDOR SUPERIOR: Texto + LÍNEA + Logo 
        ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-center justify-start mb-16 lg:mb-24 w-full lg:max-w-[1100px]">
          
          {/* TEXTOS Y BOTÓN */}
          <div 
            className={`w-full lg:max-w-[600px] transition-all duration-[1000ms] ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-32'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-[#ff7414]"></div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#ff7414] uppercase">
                Cumplimiento Normativo y Seguridad
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white leading-[1.05] tracking-tight mb-6">
              Programas de <br className="hidden sm:block" />
              <span className="text-[#ff7414]">Protección Civil</span> <br className="hidden sm:block" />
              y STPS
            </h2>
            
            <p className="text-sm lg:text-base text-slate-300 leading-relaxed mb-10">
              Garantiza la seguridad de tus instalaciones y el cumplimiento legal. Desarrollamos Programas Internos de Protección Civil y capacitamos a tus brigadas bajo los más altos estándares nacionales e internacionales.
            </p>

            <button 
              onClick={() => window.location.href = '/servicios#ProteccionCivil'}
              className="inline-flex h-12 lg:h-14 items-center justify-center gap-3 bg-[#004a99] hover:bg-[#004185] px-8 text-[11px] font-bold uppercase tracking-widest text-white transition-colors rounded shadow-lg shadow-[#004a99]/30 group"
            >
              VER SERVICIO
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* LÍNEA DIVISORIA (Solo visible en desktop/tablet, con animación de crecimiento vertical) */}
          <div 
            className={`hidden md:block w-[1px] h-32 bg-white/90 shrink-0 mx-4 transition-all duration-[1000ms] delay-300 ease-out origin-top ${
              isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
            }`}
          ></div>

          {/* EL LOGO */}
          <div 
            className={`hidden md:flex w-40 lg:w-56 shrink-0 transition-all duration-[1200ms] delay-500 ease-out ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'
            }`}
          >
            <img 
              src={imgLogo} 
              alt="Logo Protección Civil" 
              className="w-full h-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            />
          </div>

        </div>

        {/* ========================================================
            TARJETAS
        ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-20">
          
          <div 
            className={`group relative bg-[#071522] border border-white/5 p-8 transition-all duration-[800ms] ease-out hover:bg-[#0c2033] hover:-translate-y-1 overflow-hidden delay-[100ms] ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff7414] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
            <FileText className="text-[#ff7414] w-8 h-8 mb-6 relative z-10" strokeWidth={1.5} />
            <h3 className="text-white font-bold text-[16px] mb-3 relative z-10">Elaboración de Programas</h3>
            <p className="text-slate-400 text-[13px] leading-relaxed relative z-10">
              Diseño de carpetas y programas internos alineados a Protección Civil.
            </p>
          </div>

          <div 
            className={`group relative bg-[#071522] border border-white/5 p-8 transition-all duration-[800ms] ease-out hover:bg-[#0c2033] hover:-translate-y-1 overflow-hidden delay-[250ms] ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff7414] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
            <Users className="text-[#ff7414] w-8 h-8 mb-6 relative z-10" strokeWidth={1.5} />
            <h3 className="text-white font-bold text-[16px] mb-3 relative z-10">Formación de Brigadas</h3>
            <p className="text-slate-400 text-[13px] leading-relaxed relative z-10">
              Capacitación DC-3 en evacuación, combate de incendios y primeros auxilios.
            </p>
          </div>

          <div 
            className={`group relative bg-[#071522] border border-white/5 p-8 transition-all duration-[800ms] ease-out hover:bg-[#0c2033] hover:-translate-y-1 overflow-hidden delay-[400ms] ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff7414] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
            <ShieldCheck className="text-[#ff7414] w-8 h-8 mb-6 relative z-10" strokeWidth={1.5} />
            <h3 className="text-white font-bold text-[16px] mb-3 relative z-10">Análisis de Riesgos</h3>
            <p className="text-slate-400 text-[13px] leading-relaxed relative z-10">
              Evaluaciones de vulnerabilidad y diseño de rutas de evacuación para instalaciones seguras.
            </p>
          </div>

          <div 
            className={`group relative bg-[#071522] border border-white/5 p-8 transition-all duration-[800ms] ease-out hover:bg-[#0c2033] hover:-translate-y-1 overflow-hidden delay-[550ms] ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff7414] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom"></div>
            <Flame className="text-[#ff7414] w-8 h-8 mb-6 relative z-10" strokeWidth={1.5} />
            <h3 className="text-white font-bold text-[16px] mb-3 relative z-10">Simulacros Oficiales</h3>
            <p className="text-slate-400 text-[13px] leading-relaxed relative z-10">
              Planeación, ejecución y evaluación de simulacros a gran escala.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}