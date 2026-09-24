import { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, Download, ShieldCheck, Award, Target, FileCheck2, Users, HeartPulse } from 'lucide-react'

import imgOsha from '../assets/certificaciones/osha.png'
import imgStopBleed from '../assets/certificaciones/stop-bleed.jpg'
import imgEcsi from '../assets/certificaciones/ecsi.jpg'
import imgChso from '../assets/certificaciones/CHSO_page-0001.jpg'

import img1 from '../assets/certificaciones/img1_osha.jpg'
import img2 from '../assets/certificaciones/img2_osha.jpg'
import img3 from '../assets/certificaciones/img3_blood.jpg'
import img4 from '../assets/certificaciones/img4_ecsi.jpg'

//const contextImg1 = 'https://images.unsplash.com/photo-1587370560942-124b610c144e?q=80&w=800&auto=format&fit=crop' 
//const contextImg2 = 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop' 

const certifications = [
  { 
    category: 'SEGURIDAD INDUSTRIAL', 
    title: 'OSHA Authorized Trainer', 
    description: 'Certificación oficial de OSHA que acredita la capacidad para impartir cursos de seguridad y salud en el trabajo en entornos industriales.', 
    icon: ShieldCheck,
    image: imgOsha,
    contextImage: img2
  },
  { 
    category: 'SALUD Y PRIMEROS AUXILIOS', 
    title: 'Stop The Bleed Instructor', 
    description: 'Acreditación oficial para impartir el curso Essentials of Stop The Bleed, capacitando en el control de hemorragias severas.', 
    icon: HeartPulse,
    image: imgStopBleed,
    contextImage: img3
  },
  { 
    category: 'ENTRENAMIENTO MÉDICO', 
    title: 'ECSI Education Center', 
    description: 'Autorización oficial como Centro de Entrenamiento para impartir protocolos de soporte vital y primeros auxilios.', 
    icon: FileCheck2,
    image: imgEcsi,
    contextImage: img4
  },
  { 
    category: 'SEGURIDAD INSTITUCIONAL', 
    title: 'Certified Safety Official - UTA', 
    description: 'Certificación expedida por The University of Texas at Arlington para oficiales de seguridad y salud en la industria.', 
    icon: Target,
    image: imgChso,
    contextImage: img1
  },
]

const benefits = [
  ['Seguridad en el trabajo', 'Normas y buenas prácticas.', FileCheck2],
  ['Prevención de riesgos', 'Identificación y control.', ShieldCheck],
  ['Formación continua', 'Estándares internacionales.', Users],
] as const

export function CertificationsShowcase() {
  const [active, setActive] = useState(0)
  const = Date.now();
  const [lastInteraction, setLastInteraction] = useState("")
  
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % certifications.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [lastInteraction])

  const handleManualChange = (newIndex: number) => {
    setActive(newIndex)
    setLastInteraction(Date.now())
  }

  const changeSlide = (step: number) => {
    const newIndex = (active + step + certifications.length) % certifications.length
    handleManualChange(newIndex)
  }

  const item = certifications[active]

  return (
    <section className="bg-white text-[#0A0F3D] py-16 font-sans">
      
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

      {/* Contenedor maestro amplio para que el slider ocupe todo el espacio */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        

        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-end mb-12">
          <div className="max-w-[500px]">
            <span className="mb-4 block h-1 w-14 bg-[#D32F2F]" />
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#D32F2F]">
              Nuestra experiencia
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black leading-[1.05] tracking-tight text-brand-blue">
              Certificaciones y<br />acreditaciones
            </h2>
            <p className="mt-5 text-[14px] leading-relaxed text-slate-600">
              Contamos con certificaciones y acreditaciones que respaldan nuestro compromiso con la calidad, la seguridad y la formación continua de nuestro equipo.
            </p>
          </div>
          
          <div className="grid gap-5 sm:grid-cols-3 sm:divide-x sm:divide-slate-200">
            {[
              [ShieldCheck, 'Profesionales capacitados', 'Formación especializada y certificada.'],
              [Award, 'Estándares internacionales', 'Normativas reconocidas a nivel global.'],
              [Target, 'Compromiso con la calidad', 'Mejora continua organizacional.'],
            ].map(([FeatureIcon, title, text]) => (
              <div key={title as string} className="sm:px-5 first:sm:pl-0">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <FeatureIcon className="mb-3 h-7 w-7 text-[#D32F2F]" />
                <h3 className="text-[13.5px] font-bold leading-snug text-[#0A0F3D]">{title as string}</h3>
                <p className="mt-1.5 text-[12px] leading-relaxed text-slate-500">{text as string}</p>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================
            SLIDER PRINCIPAL: Vuelve a ser ancho (ocupa todo el max-w-7xl)
        ========================================================= */}
        <div className="relative overflow-hidden rounded-[20px] border border-slate-200 bg-white shadow-xl">
          
          <div className="grid min-h-[400px] lg:grid-cols-[0.8fr_1fr_1.1fr]">
            
            {/* COLUMNA 1: Imagen de Contexto */}
            <div className="relative min-h-[220px] overflow-hidden lg:min-h-0">
              <img 
                key={`bg-${active}`} 
                src={item.contextImage} 
                alt="Capacitación" 
                className="absolute inset-0 h-full w-full object-cover object-center animate-fade-scale" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/90 lg:to-white" />
            </div>
            
            {/* COLUMNA 2: El Certificado Flotante */}
            <div className="flex items-center justify-center bg-[#F8F9FB]/50 p-6 lg:p-8 relative z-10 -ml-10 lg:ml-0">
              <div 
                key={`cert-box-${active}`} 
                className="relative w-full max-w-[340px] bg-white p-2.5 shadow-xl rounded-lg animate-fade-slide"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full object-contain bg-slate-50 p-1.5 border border-slate-100" 
                />
              </div>
            </div>
            
            {/* COLUMNA 3: Detalles y Botón */}
            <div key={`info-${active}`} className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 bg-white animate-fade-slide relative z-10">
              <p className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-[#D32F2F]">
                <span className="h-[2px] w-5 bg-[#D32F2F]" />
                {item.category}
              </p>
              <h3 className="text-2xl lg:text-[28px] font-black leading-[1.1] text-[#0A0F3D]">
                {item.title}
              </h3>
              <p className="mt-4 text-[13px] leading-relaxed text-slate-600">
                {item.description}
              </p>
              
              <div className="mt-6 grid grid-cols-3 divide-x divide-slate-200">
                {benefits.map(([name,, BenefitIcon]) => (
                  <div key={name} className="px-3 first:pl-0">
                    <BenefitIcon className="mb-2 h-5 w-5 text-[#D32F2F]" />
                    <p className="text-[10px] font-bold leading-tight text-[#0A0F3D]">{name}</p>
                  </div>
                ))}
              </div>
              
              <button className="mt-8 flex w-fit items-center gap-2 bg-[#0A0F3D] px-5 py-3 text-[12px] font-bold text-white rounded-md transition-colors hover:bg-[#D32F2F]">
                <Download className="h-4 w-4" /> Descargar Certificado
              </button>
            </div>
            
          </div>

          <button 
            aria-label="Certificación anterior" 
            onClick={() => changeSlide(-1)} 
            className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0A0F3D] shadow-md transition-transform hover:scale-110 z-20 border border-slate-100"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          
          <button 
            aria-label="Siguiente certificación" 
            onClick={() => changeSlide(1)} 
            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0A0F3D] shadow-md transition-transform hover:scale-110 z-20 border border-slate-100"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2.5">
          {certifications.map((_, index) => (
            <button 
              key={index} 
              aria-label={`Mostrar slide ${index + 1}`} 
              onClick={() => handleManualChange(index)} 
              className={`h-2 rounded-full transition-all duration-300 ${index === active ? 'w-6 bg-[#0A0F3D]' : 'w-2 bg-slate-300 hover:bg-slate-400'}`} 
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default CertificationsShowcase