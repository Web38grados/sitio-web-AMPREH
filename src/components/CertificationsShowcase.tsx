import { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, Download, ShieldCheck, Award, Target, FileCheck2, Users, HeartPulse } from 'lucide-react'


import imgOsha from '../assets/certificaciones/osha.png'
import imgStopBleed from '../assets/certificaciones/stop-bleed.jpg'
import imgEcsi from '../assets/certificaciones/ecsi.jpg'
import imgChso from '../assets/certificaciones/CHSO_page-0001.jpg'


const contextImg1 = 'https://images.unsplash.com/photo-1587370560942-124b610c144e?q=80&w=800&auto=format&fit=crop' 
const contextImg2 = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop' 

const certifications = [
  { 
    category: 'SEGURIDAD INDUSTRIAL', 
    title: 'OSHA Authorized Trainer', 
    description: 'Certificación oficial de OSHA que acredita la capacidad para impartir cursos de seguridad y salud en el trabajo en entornos industriales.', 
    icon: ShieldCheck,
    image: imgOsha,
    contextImage: contextImg1
  },
  { 
    category: 'SALUD Y PRIMEROS AUXILIOS', 
    title: 'Stop The Bleed Instructor', 
    description: 'Acreditación oficial para impartir el curso Essentials of Stop The Bleed, capacitando en el control de hemorragias severas.', 
    icon: HeartPulse,
    image: imgStopBleed,
    contextImage: contextImg2
  },
  { 
    category: 'ENTRENAMIENTO MÉDICO', 
    title: 'ECSI Education Center', 
    description: 'Autorización oficial como Centro de Entrenamiento para impartir protocolos de soporte vital y primeros auxilios.', 
    icon: FileCheck2,
    image: imgEcsi,
    contextImage: contextImg1
  },
  { 
    category: 'SEGURIDAD INSTITUCIONAL', 
    title: 'Certified Safety Official - UTA', 
    description: 'Certificación expedida por The University of Texas at Arlington para oficiales de seguridad y salud en la industria.', 
    icon: Target,
    image: imgChso,
    contextImage: contextImg2
  },
]

const benefits = [
  ['Seguridad en el trabajo', 'Normas y buenas prácticas.', FileCheck2],
  ['Prevención de riesgos', 'Identificación y control.', ShieldCheck],
  ['Formación continua', 'Estándares internacionales.', Users],
] as const

export function CertificationsShowcase() {
  const [active, setActive] = useState(0)
  
  // Efecto Auto-Play cada 6 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % certifications.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const item = certifications[active]
  const changeSlide = (step: number) => setActive((active + step + certifications.length) % certifications.length)

  return (
    <section className="min-h-screen bg-[#F8F9FB] text-[#0A0F3D] py-16 lg:py-24 font-sans">
      

      <style>{`
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeScale {
          0% { opacity: 0.5; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fade-slide {
          animation: fadeSlide 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-scale {
          animation: fadeScale 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="mx-auto max-w-[1536px] px-6 lg:px-12">
        

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-end mb-16">
          <div className="max-w-[600px]">
            <span className="mb-4 block h-1 w-14 bg-[#D32F2F]" />
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D32F2F]">
              Nuestra experiencia
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-[#0A0F3D]">
              Certificaciones y<br />acreditaciones
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-600 max-w-[520px]">
              Contamos con certificaciones y acreditaciones que respaldan nuestro compromiso con la calidad, la seguridad y la formación continua de nuestro equipo.
            </p>
          </div>
          
          <div className="grid gap-7 sm:grid-cols-3 sm:divide-x sm:divide-slate-200">
            {/* Beneficios superiores (código intacto) */}
            {[
              [ShieldCheck, 'Profesionales capacitados', 'Nuestro equipo cuenta con formación especializada y certificada.'],
              [Award, 'Estándares internacionales', 'Trabajamos bajo normativas y estándares reconocidos a nivel global.'],
              [Target, 'Compromiso con la calidad', 'La mejora continua es parte de nuestra cultura organizacional.'],
            ].map(([FeatureIcon, title, text]) => (
              <div key={title as string} className="sm:px-7 first:sm:pl-0">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <FeatureIcon className="mb-4 h-8 w-8 text-[#D32F2F]" />
                <h3 className="text-[15px] font-bold leading-snug text-[#0A0F3D]">{title as string}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-500">{text as string}</p>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            SLIDER PRINCIPAL CON ANIMACIÓN SUAVE
        ========================================================= */}
        <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-2xl">
          
          <div className="grid min-h-[450px] lg:grid-cols-[0.8fr_1fr_1fr]">
            
            {/* COLUMNA 1: Imagen de Contexto (Animación de escala suave) */}
            <div className="relative min-h-[260px] overflow-hidden lg:min-h-0">
              <img 
                key={`bg-${active}`} 
                src={item.contextImage} 
                alt="Capacitación" 
                className="absolute inset-0 h-full w-full object-cover object-center animate-fade-scale" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/90 lg:to-white" />
            </div>
            
            {/* COLUMNA 2: El Certificado Flotante (Animación de deslizamiento suave) */}
            <div className="flex items-center justify-center bg-[#F8F9FB]/50 p-8 lg:p-12 relative z-10 -ml-10 lg:ml-0">
              <div 
                key={`cert-box-${active}`} // La llave asegura que se re-renderice suavemente
                className="relative w-full max-w-[400px] bg-white p-3 shadow-xl rounded-lg animate-fade-slide"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full object-contain bg-slate-50 p-2" 
                />
              </div>
            </div>
            
            {/* COLUMNA 3: Detalles y Botón (Animación de deslizamiento sutil) */}
            <div key={`info-${active}`} className="flex flex-col justify-center p-8 sm:p-10 lg:p-12 bg-white animate-fade-slide relative z-10">
              <p className="mb-4 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#D32F2F]">
                <span className="h-[2px] w-6 bg-[#D32F2F]" />
                {item.category}
              </p>
              <h3 className="text-3xl lg:text-4xl font-black leading-[1.1] text-[#0A0F3D]">
                {item.title}
              </h3>
              <p className="mt-5 text-[14px] leading-relaxed text-slate-600">
                {item.description}
              </p>
              
              <div className="mt-8 grid grid-cols-3 divide-x divide-slate-200">
                {benefits.map(([name, text, BenefitIcon]) => (
                  <div key={name} className="px-4 first:pl-0">
                    <BenefitIcon className="mb-3 h-6 w-6 text-[#D32F2F]" />
                    <p className="text-[11px] font-bold leading-tight text-[#0A0F3D]">{name}</p>
                    <p className="mt-1.5 hidden text-[10px] leading-snug text-slate-500 sm:block">{text}</p>
                  </div>
                ))}
              </div>
              
              <button className="mt-10 flex w-fit items-center gap-3 bg-[#0A0F3D] px-6 py-3.5 text-[13px] font-bold text-white rounded-lg transition-colors hover:bg-[#D32F2F]">
                <Download className="h-4 w-4" /> Descargar Certificado
              </button>
            </div>
            
          </div>

          {/* Flechas de Navegación Flotantes */}
          <button 
            aria-label="Certificación anterior" 
            onClick={() => changeSlide(-1)} 
            className="absolute left-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0A0F3D] shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-transform hover:scale-110 z-20"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          
          <button 
            aria-label="Siguiente certificación" 
            onClick={() => changeSlide(1)} 
            className="absolute right-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0A0F3D] shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-transform hover:scale-110 z-20"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Indicadores de Puntos (Dots) */}
        <div className="mt-8 flex justify-center gap-3">
          {certifications.map((_, index) => (
            <button 
              key={index} 
              aria-label={`Mostrar slide ${index + 1}`} 
              onClick={() => setActive(index)} 
              className={`h-2.5 rounded-full transition-all duration-300 ${index === active ? 'w-8 bg-[#0A0F3D]' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`} 
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default CertificationsShowcase