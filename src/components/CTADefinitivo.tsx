import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageCircle, Shield, ShieldCheck, Flame, PlusSquare, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// IMPORTA TU IMAGEN AQUÍ
import bgBomberosTeam from '../assets/bomberos-team.jpg'; 

export function CTADefinitivo() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Una vez que se ve, dejamos de observar para que la animación ocurra solo una vez
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { rootMargin: '0px', threshold: 0.2 } // Se activa cuando el 20% de la sección es visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full font-['Plus_Jakarta_Sans'] -mt-12 lg:-mt-20 z-40">
      
      {/* =========================================================
          ESTILOS CSS PARA EL "SHINE" DEL BOTÓN (Opción C)
      ========================================================= */}
      <style>{`
        .btn-shine {
          position: relative;
          overflow: hidden;
        }
        .btn-shine::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-20deg);
          animation: shine-effect 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          z-index: 10;
        }
        @keyframes shine-effect {
          0% { left: -100%; }
          15% { left: 200%; }
          100% { left: 200%; }
        }
      `}</style>

      {/* A) Capa Naranja de fondo */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#F58220] [clip-path:polygon(0_2.5vw,100%_0,100%_100%,0_100%)] z-0"></div>
      
      {/* B) Capa Oscura Principal */}
      <div className="relative w-full bg-[#070b14] mt-[6px] [clip-path:polygon(0_2.5vw,100%_0,100%_100%,0_100%)] z-10 pb-16 lg:pb-20">
        
        {/* IMAGEN DE FONDO (Fade-in suave) */}
        <div 
          className={`absolute top-0 right-0 w-full lg:w-[65%] h-[60vh] lg:h-full z-0 transition-opacity duration-[1500ms] ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/80 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/60 lg:via-[#070b14]/20 to-transparent z-10"></div>
          <img 
            src={bgBomberosTeam} 
            alt="Equipo de rescate y paramédicos" 
            className="w-full h-full object-cover object-[80%_top] lg:object-[80%_center] opacity-80 lg:opacity-100"
          />
        </div>

        {/* CONTENIDO PRINCIPAL (HERO) */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 lg:pt-28 pb-16">
          <div className="max-w-2xl lg:max-w-3xl">

            {/* Etiqueta Superior (Delay 200ms) */}
            <div 
              className={`flex items-center gap-3 mb-8 transition-all duration-1000 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <Shield className="w-5 h-5 text-[#FF4F00]" strokeWidth={2} />
              <span className="text-xs font-black tracking-[0.25em] text-slate-400 uppercase">
                Tu seguridad, nuestra misión
              </span>
            </div>

            {/* Título Principal (Delay 400ms) */}
            <h2 
              className={`text-4xl sm:text-5xl lg:text-[4rem] font-black uppercase leading-[1.05] tracking-tight mb-8 transition-all duration-1000 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <span className="text-white">Estamos listos para <br className="hidden sm:block"/> apoyar</span><br />
              <span className="text-[#FF4F00]">la seguridad y salud</span><br />
              <span className="text-white">de tu organización</span>
            </h2>

            {/* Descripción (Delay 600ms) */}
            <p 
              className={`text-slate-300 font-['IBM_Plex_Sans'] text-base lg:text-lg max-w-xl mb-12 leading-relaxed border-l-2 border-[#FF4F00] pl-4 transition-all duration-1000 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              Garantiza el cumplimiento normativo ante la STPS y OSHA. Protege a tu personal con instructores especializados y protocolos de élite internacional.
            </p>

            {/* Botones (Delay 800ms y 900ms) */}
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
              {/* Botón Principal (Con Scale-up y el Shine CSS) */}
              <Link 
                to="/cotizacion" 
                className={`w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FF4F00] text-white px-8 py-4 font-black uppercase tracking-wider text-xs sm:text-sm hover:bg-[#e64600] transition-all shadow-[0_10px_30px_rgba(255,79,0,0.25)] hover:shadow-[0_15px_40px_rgba(255,79,0,0.4)] hover:-translate-y-1 btn-shine duration-1000 ease-out transform ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                Solicitar cotización a la medida <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Botón Secundario */}
              <a 
                href="https://wa.me/5214692158327" // ¡Asegúrate de poner el número real con el código de país!
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 font-black uppercase tracking-wider text-xs sm:text-sm hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Directo
              </a>
            </div>

          </div>
        </div>

        {/* BENEFICIOS INFERIORES (Cascada: 1100ms, 1250ms, 1400ms, 1550ms) */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pt-12 border-t border-slate-800/80 overflow-hidden">

            <div 
              className={`flex flex-col items-start group transition-all duration-1000 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: '1100ms' }}
            >
              <ShieldCheck className="w-8 h-8 text-[#FF4F00] mb-5 transform group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <h4 className="text-white font-black uppercase tracking-wide text-sm mb-2">Capacitación<br/>Certificada</h4>
              <p className="text-slate-500 font-['IBM_Plex_Sans'] text-xs leading-relaxed max-w-[250px]">Avalada por estándares nacionales e internacionales.</p>
            </div>

            <div 
              className={`flex flex-col items-start group transition-all duration-1000 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: '1250ms' }}
            >
              <Flame className="w-8 h-8 text-[#FF4F00] mb-5 transform group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <h4 className="text-white font-black uppercase tracking-wide text-sm mb-2">Instructores<br/>Especializados</h4>
              <p className="text-slate-500 font-['IBM_Plex_Sans'] text-xs leading-relaxed max-w-[250px]">Profesionales con experiencia en campo.</p>
            </div>

            <div 
              className={`flex flex-col items-start group transition-all duration-1000 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: '1400ms' }}
            >
              <PlusSquare className="w-8 h-8 text-[#FF4F00] mb-5 transform group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <h4 className="text-white font-black uppercase tracking-wide text-sm mb-2">Práctica<br/>Real</h4>
              <p className="text-slate-500 font-['IBM_Plex_Sans'] text-xs leading-relaxed max-w-[250px]">Simulaciones y escenarios que te preparan para la vida real.</p>
            </div>

            <div 
              className={`flex flex-col items-start group transition-all duration-1000 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: '1550ms' }}
            >
              <Users className="w-8 h-8 text-[#FF4F00] mb-5 transform group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
              <h4 className="text-white font-black uppercase tracking-wide text-sm mb-2">Más<br/>Oportunidades</h4>
              <p className="text-slate-500 font-['IBM_Plex_Sans'] text-xs leading-relaxed max-w-[250px]">Potencia tu perfil profesional y abre nuevas puertas en el sector de emergencias.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}