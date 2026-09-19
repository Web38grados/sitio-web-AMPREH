import { useState, useEffect } from 'react'
import { ArrowLeft, ArrowRight, Download, ShieldCheck,  Target, FileCheck2, Users, HeartPulse } from 'lucide-react'

import imgOsha from '../assets/certificaciones/osha.png'
import imgStopBleed from '../assets/certificaciones/stop-bleed.jpg'
import imgEcsi from '../assets/certificaciones/ecsi.jpg'
import imgChso from '../assets/certificaciones/CHSO_page-0001.jpg'

import img1 from '../assets/certificaciones/img1_osha.png'
import img2 from '../assets/certificaciones/img2_osha.png'
import img3 from '../assets/certificaciones/img3_blood.png'
import img4 from '../assets/certificaciones/img4_ecsi.png'

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
  ['Seguridad', 'Normas y prácticas.', FileCheck2],
  ['Prevención', 'Identificación y control.', ShieldCheck],
  ['FORMACIÓN', 'Estándares internacionales.', Users],
] as const

export function CertificationsShowcase() {
  const [active, setActive] = useState(0)
  const [displayIndex, setDisplayIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const [lastInteraction, setLastInteraction] = useState(Date.now())
  
  const triggerChange = (newIndex: number) => {
    if (isFading || newIndex === active) return
    setIsFading(true)
    setActive(newIndex) 
    setLastInteraction(Date.now())
    
    setTimeout(() => {
      setDisplayIndex(newIndex)
      setIsFading(false)
    }, 300)
  }

  const changeSlide = (step: number) => {
    const newIndex = (active + step + certifications.length) % certifications.length
    triggerChange(newIndex)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const newIndex = (active + 1) % certifications.length
      triggerChange(newIndex)
    }, 6000)
    return () => clearInterval(timer)
  }, [active, isFading, lastInteraction])

  const item = certifications[displayIndex]

  return (

    <section className="flex flex-col lg:flex-row w-full bg-[#F58220] border-t-8 border-[#F58220] font-sans text-white overflow-hidden">
      
      <style>{`
        .smooth-fade {
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        }
        .fade-out {
          opacity: 0;
          transform: translateY(8px);
        }
        .fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        .bg-fade {
          transition: opacity 0.3s ease-in-out;
        }
      `}</style>

      {/* =========================================================
          MITAD IZQUIERDA: ESTÁTICA Y SÓLIDA
      ========================================================= */}
      <div className="w-full lg:w-1/2 flex justify-end relative z-20 self-start">
        {/* Usamos h-full en escritorio para igualar alturas y p-4/p-8 para responsive */}
        <div className="w-full bg-[#004a99] h-full pb-12 lg:pb-16 flex flex-col justify-between">
          <div className="w-full max-w-[640px] ml-auto p-6 sm:p-8 lg:pt-16 lg:pl-8 lg:pr-12 flex flex-col">
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-4 w-4 bg-[#F58220] shrink-0"></div> 
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F58220]">
                  Expediente Institucional
                </p>
              </div>
              
              {/* ARREGLO DEL TÍTULO: break-words e hyphens-auto evitan que se salga */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-black uppercase leading-[0.9] tracking-tighter mb-8 break-words hyphens-auto">
                Avales &<br/>
                <span className="text-[#F58220]">Certificaciones</span>
              </h2>
              
              <p className="text-sm sm:text-base leading-relaxed text-blue-200 max-w-sm border-l-2 border-[#F58220] pl-4">
                Documentación oficial que respalda nuestra capacidad operativa y cumplimiento normativo bajo los más altos estándares globales.
              </p>
            </div>

            {/* Ajuste de grilla para pantallas muy chicas */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 border-t border-blue-400/30 pt-8">
              {benefits.map(([name, text, BenefitIcon]) => (
                <div key={name} className="flex flex-col items-start sm:items-start">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  <BenefitIcon className="mb-2 h-6 w-6 text-[#F58220]" />
                  <p className="text-[11px] font-bold uppercase text-white tracking-wider">{name}</p>
                  <p className="text-[9px] text-blue-300 mt-1 leading-tight">{text}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 lg:mt-16 flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="flex gap-2">
                    <button onClick={() => changeSlide(-1)} disabled={isFading} className="p-3 bg-white text-[#004a99] hover:bg-[#F58220] hover:text-white transition-colors disabled:opacity-50">
                        <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button onClick={() => changeSlide(1)} disabled={isFading} className="p-3 bg-white text-[#004a99] hover:bg-[#F58220] hover:text-white transition-colors disabled:opacity-50">
                        <ArrowRight className="h-5 w-5" />
                    </button>
                </div>
                <div className="flex gap-2">
                    {certifications.map((_, index) => (
                        <button 
                            key={index} 
                            onClick={() => triggerChange(index)} 
                            disabled={isFading}
                            className={`h-1.5 transition-all duration-300 ${index === active ? 'w-8 bg-[#F58220]' : 'w-4 bg-blue-800'} rounded-none`} 
                        />
                    ))}
                </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================
          MITAD DERECHA: DINÁMICA (Esta sí conserva la animación)
      ========================================================= */}
      {/* Ajustado min-h para que no baile */}
{/* =========================================================
          MITAD DERECHA: DINÁMICA (Esta sí conserva la animación)
      ========================================================= */}
      {/* 1. Quitamos el bg-slate-950 de este wrapper padre */}
      <div className="w-full lg:w-1/2 relative flex flex-col justify-end min-h-[500px] lg:min-h-[85vh]">
          
          {/* 2. El bg-slate-950 se queda ÚNICAMENTE aquí, encerrado con la foto */}
          <div className="absolute inset-0 h-full w-full z-0 bg-slate-950 overflow-hidden">
             <img 
                 src={item.contextImage} 
                 alt="Contexto operativo" 
                 className={`h-full w-full object-cover object-center mix-blend-luminosity bg-fade ${isFading ? 'opacity-0' : 'opacity-40'}`} 
             />
          </div>
          
          {/* Ajustado el padding y posición del certificado */}
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] sm:left-30 sm:bottom-23 md:left-50 lg:left-5 lg:top-20  md:max-w-[500px] md: lg:max-w-[640px] mr-auto flex-grow flex items-center justify-center lg:justify-start p-6 sm:p-8 lg:p-12 lg:pl-10  z-10 pb-48 lg:pb-40">
              <div 
                  className={`w-full max-w-xl bg-white p-2 shadow-2xl rotate-[-1deg] smooth-fade ${isFading ? 'fade-out' : 'fade-in'}`}
              >
                   <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-[250px] sm:h-[300px] lg:h-[350px] object-contain border border-slate-200" 
                  />
              </div>
          </div>


        <div className="absolute lg:relative bottom-0 left-0 w-full z-20 bg-[#F58220] shadow-[0_-15px_30px_rgba(0,0,0,0.2)]  before:absolute before:inset-y-0 before:-left-[2px] before:w-[4px] before:bg-[#F58220] before:-z-10">
                      
            <div className={`w-full max-w-[640px] mr-auto p-6 sm:p-8 lg:p-12 lg:pl-16 flex flex-col sm:flex-row sm:items-center xl:items-end justify-between gap-6 min-h-[220px] sm:min-h-[180px] smooth-fade ${isFading ? 'fade-out' : 'fade-in'}`}>
                <div className="flex-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#004a99] mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#004a99] inline-block shrink-0"></span>
                        {item.category}
                    </p>
                    <h3 className="text-xl sm:text-xl lg:text-2xl xl:text-3xl font-black leading-tight text-white uppercase tracking-tight">
                        {item.title}
                    </h3>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-medium text-white/90 max-w-md min-h-[40px]">
                        {item.description}
                    </p>
                </div>
                
                <button className="shrink-0 self-start sm:self-auto flex items-center justify-center gap-2 bg-[#004a99] px-4 sm:px-6 py-3 sm:py-4 text-[11px] sm:text-[12px] font-black uppercase tracking-wider text-white hover:bg-slate-900 transition-colors shadow-lg border border-[#004a99]/50">
                    <Download className="h-4 w-4" /> 
                    Obtener PDF
                </button>
            </div>
        </div>

      </div>
    </section>
  )
}

export default CertificationsShowcase