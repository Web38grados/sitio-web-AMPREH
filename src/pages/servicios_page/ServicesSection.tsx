'use client'

import { useEffect, useRef, useState } from 'react'
import { Ambulance, ArrowRight, Flame, GraduationCap, Plus, Shield, ShieldCheck, Users} from 'lucide-react'
import service1 from '../../assets//servicios/service1.jpg'
import service2 from '../../assets//servicios/service2.png'
import service3 from '../../assets//servicios/service3.png'
import service4 from '../../assets//servicios/service4.png'
import hero from '../../assets/servicios/hero.png'
import { PageHero } from '../../components/PageHero'
// =========================================================
// DATOS Y CONFIGURACIÓN
// =========================================================

const services = [
  {
    number: '', 
    eyebrow: 'OPERACIONES EN SITIO',
    title: 'RESPUESTA A EMERGENCIAS Y BRIGADAS',
    description: 'Proveemos personal operativo especializado, unidades de rescate y administración integral de brigadas en tus instalaciones. Actuamos en primera línea para contener crisis y garantizar la continuidad de tu empresa.',
    icon: Flame,
    side: 'left',
    image: service1,
  },
  {
    number: '',
    eyebrow: 'PROTECCIÓN CIVIL',
    title: 'PLANES DE EMERGENCIA\nY EVACUACIÓN',
    description: 'Diseñamos e implementamos planes de emergencia y evacuación para que tu empresa esté preparada ante cualquier contingencia.',
    icon: Shield,
    side: 'right',
    image: service2, 
  },
  {
    number: '',
    eyebrow: 'ATENCIÓN PREHOSPITALARIA',
    title: 'ATENCIÓN MÉDICA\nDE EMERGENCIAS',
    description: 'Contamos con personal altamente capacitado y equipos de última generación para brindar atención prehospitalaria oportuna y de calidad en situaciones críticas.',
    icon: Plus,
    side: 'left',
    image: service3, 
  },
  {
    number: '',
    eyebrow: 'CAPACITACIÓN Y CERTIFICACIÓN',
    title: 'PROGRAMAS DE FORMACIÓN\nESPECIALIZADA',
    description: 'Capacitamos a tu equipo con cursos teóricos y prácticos en seguridad, rescate, primeros auxilios y más, con certificación avalada y enfoque en la práctica real.',
    icon: Users,
    side: 'right',
    image: service4, 
  },
]





// =========================================================
// SUB-COMPONENTE: Fila de Servicio (Animación Desenfunde)
// =========================================================
function ServiceRow({ service}: { service: any, index: number }) {
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
        className={`w-full lg:w-1/2 relative h-[300px] lg:h-auto group overflow-hidden transition-all duration-1000 ease-out will-change-[transform,opacity] transform-gpu ${
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
          // AQUÍ ES DONDE ESTABA EL ERROR. AHORA LLAMA A LA IMAGEN ÚNICA DE CADA SERVICIO.
          style={{ backgroundImage: `url(${service.image})` }} 
          aria-hidden="true" 
        />
      </div>

      {/* CONTENIDO DEL SERVICIO */}
      <div className={`w-full lg:w-1/2 relative flex flex-col justify-center p-10 lg:p-24 transition-all duration-1000 delay-300 ease-out will-change-[transform,opacity] transform-gpu ${
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
            {service.title.split('\n').map((line: string, i: number) => (
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
        bgImage={hero}
        features={[
          { icon: ShieldCheck, text: "PREVENCIÓN\nDE RIESGOS" },
          { icon: GraduationCap, text: "CAPACITACIÓN\nESPECIALIZADA" },
          { icon: Ambulance, text: "RESPUESTA\nA EMERGENCIAS" }
        ]}
      />

      <section className="w-full flex flex-col relative z-20">
        {services.map((service, index) => (
          <ServiceRow key={service.number || index} service={service} index={index} />
        ))}
      </section>

    </main>
  )
}