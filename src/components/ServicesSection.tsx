'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Ambulance, ArrowRight, Flame, GraduationCap, Plus, Shield, ShieldCheck, Users, LucideIcon } from 'lucide-react'

// =========================================================
// DATOS Y CONFIGURACIÓN
// =========================================================
const sourceImage = 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&q=80&w=1200'

const services = [
  {
    number: '01',
    eyebrow: 'SEGURIDAD INDUSTRIAL',
    title: 'PREVENCIÓN\nDE RIESGOS LABORALES',
    description: 'Implementamos sistemas de gestión y programas de seguridad industrial para minimizar riesgos, proteger al personal y garantizar la continuidad operativa de tu empresa.',
    icon: Flame,
    side: 'left', 
  },
  {
    number: '02',
    eyebrow: 'PROTECCIÓN CIVIL',
    title: 'PLANES DE EMERGENCIA\nY EVACUACIÓN',
    description: 'Diseñamos e implementamos planes de emergencia y evacuación para que tu empresa esté preparada ante cualquier contingencia.',
    icon: Shield,
    side: 'right', 
  },
  {
    number: '03',
    eyebrow: 'ATENCIÓN PREHOSPITALARIA',
    title: 'ATENCIÓN MÉDICA\nDE EMERGENCIAS',
    description: 'Contamos con personal altamente capacitado y equipos de última generación para brindar atención prehospitalaria oportuna y de calidad en situaciones críticas.',
    icon: Plus,
    side: 'left', 
  },
  {
    number: '04',
    eyebrow: 'CAPACITACIÓN Y CERTIFICACIÓN',
    title: 'PROGRAMAS DE FORMACIÓN\nESPECIALIZADA',
    description: 'Capacitamos a tu equipo con cursos teóricos y prácticos en seguridad, rescate, primeros auxilios y más, con certificación avalada y enfoque en la práctica real.',
    icon: Users,
    side: 'right', 
  },
]

// =========================================================
// COMPONENTE: PAGE HERO (Reutilizable y Split Layout)
// =========================================================
interface Feature {
  icon: LucideIcon;
  text: string;
}

interface SplitHeroProps {
  breadcrumbs: string;
  eyebrow: string;
  titleWhite: string;
  titleOrange: string;
  description: string;
  features?: Feature[];
  bgImage: string;
}

function PageHero({ 
  breadcrumbs, 
  eyebrow, 
  titleWhite, 
  titleOrange, 
  description, 
  features,
  bgImage 
}: SplitHeroProps) {
  return (
    <section className="relative w-full bg-[#0a1122] flex flex-col lg:flex-row min-h-[60vh] overflow-hidden border-b-[12px] border-[#F58220]">
      
      <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 py-20 lg:pl-16 xl:pl-24 relative z-20 bg-[#0a1122]">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-1 h-4 bg-[#F58220]"></div>
            <p className="text-slate-300 text-[10px] font-black uppercase tracking-[0.2em]">
              {breadcrumbs}
            </p>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <p className="text-[#F58220] text-xs font-black uppercase tracking-[0.2em]">
              {eyebrow}
            </p>
            <div className="h-[1px] w-12 bg-slate-700"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tight mb-6">
            <span className="text-white block">{titleWhite}</span>
            <span className="text-[#F58220] block">{titleOrange}</span>
          </h1>

          <p className="text-slate-300 font-['IBM_Plex_Sans'] text-base md:text-lg leading-relaxed max-w-xl mb-12">
            {description}
          </p>

          {features && (
            <div className="flex flex-wrap items-center gap-6 lg:gap-10 border-t border-slate-800 pt-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 border border-[#F58220] rounded-full text-[#F58220]">
                    <feature.icon size={18} strokeWidth={2} />
                  </div>
                  <span className="text-white text-xs font-bold uppercase tracking-wider leading-tight max-w-[120px]">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="w-full lg:w-[45%] relative min-h-[400px] lg:min-h-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0 z-10">
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-l from-transparent to-[#0a1122]/50 z-20 [clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%,15%_50%)]"></div>
        <div className="absolute inset-0 lg:[clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%,15%_50%)]">
          <div className="absolute inset-0 bg-[#1A237E]/40 mix-blend-multiply z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center grayscale" 
            style={{ backgroundImage: `url(${bgImage})` }} 
            aria-hidden="true"
          />
        </div>
        <div className="hidden lg:block absolute top-0 left-[14.8%] w-[2px] h-[50%] bg-[#F58220] z-30 transform -rotate-[22deg] origin-bottom-left opacity-80"></div>
        <div className="hidden lg:block absolute bottom-0 left-0 w-[2px] h-[50%] bg-[#F58220] z-30 transform rotate-[22deg] origin-top-left opacity-80"></div>
      </div>
    </section>
  )
}

// =========================================================
// SUB-COMPONENTE: Fila de Servicio (Animación Desenfunde)
// =========================================================
function ServiceRow({ service, index }: { service: any, index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);
  const isLeft = service.side === 'left';
  const bgClass = isLeft ? 'bg-white' : 'bg-slate-50';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (rowRef.current) observer.unobserve(rowRef.current);
        }
      },
      { threshold: 0.2 } 
    );

    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <article 
      ref={rowRef}
      className={`w-full flex flex-col lg:flex-row min-h-[450px] overflow-hidden ${bgClass} ${isLeft ? '' : 'lg:flex-row-reverse'}`}
    >
      
      {/* IMAGEN: Contenedor con clip-path animado */}
      <div 
        className={`w-full lg:w-1/2 relative h-[300px] lg:h-auto group overflow-hidden transition-all duration-1000 ease-out will-change-transform ${
          isLeft 
            ? 'lg:[clip-path:polygon(0_0,100%_0,90%_100%,0_100%)]' 
            : 'lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)]'
        } ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : `opacity-0 ${isLeft ? '-translate-x-32' : 'translate-x-32'}`
        }`}
      >
        <div className="absolute inset-0 bg-[#1A237E]/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
          style={{ backgroundImage: `url(${sourceImage})` }} 
          aria-hidden="true" 
        />
      </div>

      {/* CONTENIDO DEL SERVICIO */}
      <div className={`w-full lg:w-1/2 relative flex flex-col justify-center p-10 lg:p-24 transition-all duration-1000 delay-300 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        <span className={`absolute top-1/2 -translate-y-1/2 ${isLeft ? 'right-10' : 'left-10'} text-[12rem] lg:text-[18rem] font-black text-slate-200/50 select-none z-0 leading-none tracking-tighter pointer-events-none`}>
          {service.number}
        </span>

        <div className="relative z-10 max-w-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 border border-[#F58220] rounded-none flex items-center justify-center bg-white shadow-sm">
              <service.icon className="text-[#F58220] size-5" strokeWidth={2} />
            </div>
            <span className="text-[#1A237E] text-[10px] font-black uppercase tracking-[0.2em]">
              {service.eyebrow}
            </span>
          </div>

          <h2 className="text-3xl lg:text-4xl font-black uppercase text-[#1A237E] leading-[1.1] tracking-tight mb-6">
            {service.title.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
          
          <p className="text-base font-['IBM_Plex_Sans'] text-slate-600 leading-relaxed mb-8 border-l-2 border-[#F58220] pl-4">
            {service.description}
          </p>
          
          <a href="#contacto" className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#F58220] transition-colors hover:text-[#1A237E]">
            Conoce más 
            <ArrowRight size={14} strokeWidth={3} className="transform group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
}

// =========================================================
// COMPONENTE PRINCIPAL
// =========================================================
export default function ServicesSection() {
  return (
    <main className="w-full font-['Plus_Jakarta_Sans'] relative">
      
      <PageHero 
        breadcrumbs="INICIO / SERVICIOS"
        eyebrow="SERVICIOS"
        titleWhite="SOLUCIONES QUE"
        titleOrange="PROTEGEN TU OPERACIÓN"
        description="Brindamos formación, asesoría y acompañamiento en seguridad industrial, respuesta a emergencias y cumplimiento normativo, adaptados a las necesidades de cada empresa."
        bgImage={sourceImage}
        features={[
          { icon: ShieldCheck, text: "PREVENCIÓN\nDE RIESGOS" },
          { icon: GraduationCap, text: "CAPACITACIÓN\nESPECIALIZADA" },
          { icon: Ambulance, text: "RESPUESTA\nA EMERGENCIAS" }
        ]}
      />

      <section className="w-full flex flex-col relative z-20">
        {services.map((service, index) => (
          <ServiceRow key={service.number} service={service} index={index} />
        ))}
      </section>

    </main>
  )
}