import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight,  FileText, Search, Users, Handshake, 
  ChevronDown, ChevronUp, Check, ShieldAlert, ShieldCheck, AlertTriangle, Settings
} from 'lucide-react';

// Imagen temporal (Úsala para todo por ahora)
import img2 from '../../assets/proteccion_civil/123.png';
import img3 from '../../assets/proteccion_civil/SAM_5783.png';
import img4 from '../../assets/proteccion_civil/SAM_5788.png';
import img5 from '../../assets/proteccion_civil/DSC00714.png';
import img6 from '../../assets/proteccion_civil/11.jpg';
import hero from '../../assets/proteccion_civil/111.png'


export function ProteccionCivilServicios() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  
  // ESTADO PARA LA ANIMACIÓN DEL HERO (Aparece de derecha a izquierda)
  const [isHeroVisible, setIsHeroVisible] = useState(false);

  const [areIconsVisible, setAreIconsVisible] = useState(false);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAreIconsVisible(true);
          if (iconsRef.current) observer.unobserve(iconsRef.current);
        }
      },
      { threshold: 0.98 } 
    );

    if (iconsRef.current) observer.observe(iconsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Activa la animación casi de inmediato al cargar la página
    const timer = setTimeout(() => setIsHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Manejador del WhatsApp
  const handleWhatsAppGeneral = (e: React.MouseEvent, serviceName?: string) => {
    e.preventDefault();
    const phone = "14692158327"; // ¡CAMBIA ESTO POR TU NÚMERO!
    const message = serviceName 
      ? `Hola AMPREH, estoy muy interesado en su servicio de: *${serviceName}*. ¿Podrían brindarme información?`
      : `Hola AMPREH, deseo cotizar el desarrollo de nuestros Programas de Protección Civil y Gestión de Riesgos.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // DATOS: EL ACORDEÓN INFERIOR (Detallando 100% lo que dice el DOC oficial)
  const subServicios = [
    {
      id: "programas",
      title: "Programas Internos",
      description: "Aplicamos programas internos de protección civil, orientados a la prevención, preparación y respuesta ante emergencias, alineados a la normativa vigente y a las características de cada organización.",
      features: [
        "Identificación de riesgos y análisis de necesidades.",
        "Elaboración de planes y procedimientos internos.",
        "Capacitación y simulacros.",
        "Seguimiento y mejora continua."
      ],
      icon: FileText,
      image: img3,
    },
    {
      id: "vulnerabilidad",
      title: "Análisis General de Vulnerabilidad",
      description: "Evaluamos los riesgos de tu entorno para identificar vulnerabilidades y proponer medidas de control efectivas ante fenómenos naturales y agentes perturbadores.",
      features: [
        "Evaluación y análisis del riesgo interno/externo.",
        "Determinación de zonas de riesgo y menor riesgo.",
        "Diseño estratégico de rutas de evacuación.",
        "Planos de distribución de equipos contra incendio."
      ],
      icon: Search,
      image: img6,
    },
    {
      id: "brigadas",
      title: "Formación de Brigadas",
      description: "Curso integral teórico y práctico para la correcta función de una Unidad Interna de Protección Civil y la integración de la Comisión de Seguridad e Higiene.",
      features: [
        "Evacuación de inmuebles y simulacros.",
        "Prevención y Combate de Incendios.",
        "Comunicación y Primeros Auxilios.",
        "Responsabilidades legales STPS."
      ],
      icon: Users,
      image: img4,
    },
    {
      id: "pamis",
      title: "Programas de Ayuda Mutua (PAMIS)",
      description: "Contamos con sistemas para integrar Programas de Ayuda Mutua Industrial, sumando recursos para atención de emergencias con respuesta inmediata y eficaz.",
      features: [
        "Coordinación interempresarial.",
        "Respuesta externa facilitada.",
        "Entrenamiento periódico.",
        "Filosofía de Prevenir y Cero Accidentes."
      ],
      icon: Handshake,
      image: img5,
    }
  ];

  return (
    <div className="w-full bg-white font-['Plus_Jakarta_Sans']">
      
      {/* =======================================================
          1. EL HERO (Ahora abarca TODO el ancho del monitor y tiene animación)
      ======================================================= */}
      <section id='ProteccionCivil' className="relative w-full bg-white border-b border-slate-200 overflow-hidden shadow-sm">
        <div className="w-full flex flex-col lg:flex-row lg:min-h-[360px]">
          
          {/* LADO IZQUIERDO Y CENTRO (Textos e Iconos) */}
          <div className="w-full lg:w-[70%] flex justify-end z-10 py-12 lg:py-16 px-6 lg:px-12 xl:px-16">
            {/* Este max-w interno asegura que los textos no se estiren al infinito, pero sigan a la izquierda */}
            <div className="w-full max-w-[1000px] flex flex-col xl:flex-row items-center gap-10 lg:gap-16 mr-auto">
              
              {/* Textos Principales */}
              <div className="w-full xl:w-[45%]">

                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#071522] leading-[1.1] mb-5 tracking-tight">
                  Protección Civil y <br className="hidden sm:block" />
                  Gestión de Riesgos
                </h1>
                <p className="text-slate-500 text-[13px] lg:text-[14px] leading-relaxed">
                  Soluciones especializadas para prevenir riesgos, fortalecer la preparación y garantizar una respuesta efectiva ante situaciones de emergencia.
                </p>
              </div>
                {/* Los 4 Iconos Centrales (Animados en cascada) */}
            <div ref={iconsRef} className="w-full xl:w-[55%] grid grid-cols-2 sm:grid-cols-4 gap-6 xl:gap-4 mt-4 xl:mt-0">
              
              <div className={`flex flex-col items-center text-center gap-3 transition-all duration-700 ease-out transform-gpu delay-[100ms] ${
                areIconsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'
              }`}>
                <ShieldCheck className="text-[#071522] w-8 h-8" strokeWidth={1.5} />
                <span className="text-slate-500 text-[11px] font-semibold leading-snug">Prevención <br/> de riesgos</span>
              </div>
              
              <div className={`flex flex-col items-center text-center gap-3 transition-all duration-700 ease-out transform-gpu delay-[250ms] ${
                areIconsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'
              }`}>
                <Users className="text-[#071522] w-8 h-8" strokeWidth={1.5} />
                <span className="text-slate-500 text-[11px] font-semibold leading-snug">Preparación <br/> y capacitación</span>
              </div>
              
              <div className={`flex flex-col items-center text-center gap-3 transition-all duration-700 ease-out transform-gpu delay-[400ms] ${
                areIconsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'
              }`}>
                <AlertTriangle className="text-[#071522] w-8 h-8" strokeWidth={1.5} />
                <span className="text-slate-500 text-[11px] font-semibold leading-snug">Respuesta <br/> ante emergencias</span>
              </div>
              
              <div className={`flex flex-col items-center text-center gap-3 transition-all duration-700 ease-out transform-gpu delay-[550ms] ${
                areIconsVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'
              }`}>
                <Settings className="text-[#071522] w-8 h-8" strokeWidth={1.5} />
                <span className="text-slate-500 text-[11px] font-semibold leading-snug">Continuidad <br/> operativa</span>
              </div>

            </div>

            </div>
          </div>

          {/* LADO DERECHO (Imagen que Entra desde la derecha) */}
          <div 
            className={`w-full lg:w-[30%] lg:absolute lg:right-0 lg:top-0 lg:bottom-0 relative h-[250px] lg:h-auto bg-[#071522] lg:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)] transition-all duration-[1500ms] ease-out transform-gpu z-0
              ${isHeroVisible ? 'translate-x-0 opacity-100' : 'translate-x-[50%] opacity-0'}
            `}
          >
            <img 
              src={hero} 
              alt="Protección Civil en Acción" 
              className="w-full h-full object-cover opacity-90" 
            />
            {/* Adorno naranja decorativo */}
          </div>

        </div>
      </section>


      {/* =======================================================
          2. EL ACORDEÓN TÉCNICO (Intacto)
      ======================================================= */}
      <section className="w-full bg-white py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            
            {/* LADO IZQUIERDO: Textos fijos y Botón */}
            <div className="w-full lg:w-[40%] flex flex-col">
              <span className="text-[#ff7414] text-[11px] font-bold tracking-[0.15em] uppercase mb-4">
                EXPLORA EL CONCEPTO
              </span>
              <h2 className="text-3xl lg:text-[40px] font-black text-[#071522] leading-[1.1] mb-6">
                Gestión Integral de <br/> Protección Civil
              </h2>
              <p className="text-slate-500 text-[14px] leading-relaxed mb-8">
                Desarrollamos e implementamos tu Programa Interno de Protección Civil adaptado a las necesidades de tu organización, asegurando la prevención de riesgos y el cumplimiento estricto de la normativa vigente.
              </p>
              
              <button 
                onClick={(e) => handleWhatsAppGeneral(e)}
                className="w-fit bg-[#ff7414] hover:bg-[#e66a0c] text-white px-8 py-3.5 rounded font-bold text-[12px] uppercase tracking-widest transition-colors shadow-lg shadow-[#ff7414]/20 inline-flex items-center gap-2 mb-10"
              >
                COTIZAR PROYECTO <ArrowRight size={16} />
              </button>

              <div className="w-full h-[280px] rounded-2xl overflow-hidden shadow-lg relative group">
                <img 
                  src={img2} 
                  alt="Personal de seguridad" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 bg-[#071522]/95 backdrop-blur-sm rounded-xl p-4 flex items-center gap-4 max-w-[85%] border border-white/10 shadow-2xl">
                  <div className="bg-[#ff7414] p-2.5 rounded-lg shrink-0">
                    <ShieldAlert className="text-white w-5 h-5" />
                  </div>
                  <p className="text-white/90 text-xs font-medium leading-relaxed">
                    Preparación, análisis y acción para un entorno más seguro.
                  </p>
                </div>
              </div>
            </div>

            {/* LADO DERECHO: El Acordeón */}
            <div className="w-full lg:w-[60%] flex flex-col gap-3">
              {subServicios.map((servicio, index) => {
                const isOpen = openIndex === index;

                return (
                  <div 
                    key={`accordion-${index}`} 
                    className={`bg-white rounded-2xl transition-all duration-300 overflow-hidden border ${
                      isOpen ? 'border-slate-200 shadow-xl shadow-slate-200/50' : 'border-slate-100 hover:border-[#ff7414]/30'
                    }`}
                  >
                    <div 
                      onClick={() => setOpenIndex(isOpen ? -1 : index)} 
                      className="flex items-center justify-between p-5 lg:p-6 cursor-pointer select-none"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl transition-colors ${
                          isOpen ? 'bg-[#071522] text-white' : 'bg-slate-100 text-[#071522]'
                        }`}>
                          <servicio.icon className="w-5 h-5" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-bold text-[#071522] text-[16px] sm:text-[17px] lg:text-lg">
                          {servicio.title}
                        </h3>
                      </div>
                      
                      {isOpen ? (
                        <div className="hidden sm:flex items-center gap-2 text-[#ff7414] text-[11px] font-bold bg-[#ff7414]/10 px-3 py-1.5 rounded-full shrink-0">
                          Ver detalles <ChevronUp className="w-4 h-4" />
                        </div>
                      ) : (
                        <ChevronDown className="text-slate-400 w-5 h-5 shrink-0" />
                      )}
                    </div>

                    <div 
                      className={`transition-all duration-500 ease-in-out ${
                        isOpen ? 'max-h-[800px] opacity-100 pb-6 lg:pb-8' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-5 lg:px-6 flex flex-col-reverse sm:flex-row gap-6 pt-2">
                        <div className="w-full sm:w-[65%] flex flex-col">
                          <p className="text-slate-500 text-[13px] leading-relaxed mb-5">
                            {servicio.description}
                          </p>
                          
                          <ul className="flex flex-col gap-2.5 mb-6">
                            {servicio.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <Check className="text-[#ff7414] w-[14px] h-[14px] shrink-0 mt-[3px]" strokeWidth={3} />
                                <span className="text-slate-600 text-[13px] font-medium leading-snug">{feature}</span>
                              </li>
                            ))}
                          </ul>

                          <button 
                            onClick={(e) => handleWhatsAppGeneral(e, servicio.title)}
                            className="w-fit text-[#071522] hover:text-[#ff7414] font-bold text-[11px] uppercase tracking-widest transition-colors flex items-center gap-2 mt-auto"
                          >
                            SOLICITAR INFORMACIÓN <ArrowRight size={14} />
                          </button>
                        </div>

                        <div className="w-full sm:w-[35%] shrink-0">
                          <div className="w-full h-[140px] sm:h-full min-h-[140px] rounded-xl overflow-hidden bg-slate-100 shadow-sm border border-slate-100">
                            <img 
                              src={servicio.image} 
                              alt={servicio.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}