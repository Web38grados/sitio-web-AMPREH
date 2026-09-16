import { Award, Crosshair, ShieldAlert, ArrowRight } from 'lucide-react'

import indImg from '../assets/inicio/prevencion.png'
import emergImg from '../assets/inicio/emergencia.png'
import { useState, useEffect, useRef } from 'react'

const pillars = [
  { icon: Crosshair, title: 'EXCELENCIA OPERATIVA', text: 'Procesos medibles y consistentes en campo.' },
  { icon: ShieldAlert, title: 'RIGOR NORMATIVO', text: 'Protocolos alineados a STPS y Protección Civil.' },
  { icon: Award, title: 'RESPUESTA INMEDIATA', text: 'Decisiones precisas cuando los segundos cuentan.' },
]

export function AboutPreview() {
    const [cardsVisible, setCardsVisible] = useState(false)
    const cardsRef = useRef<HTMLDivElement>(null)
    
    useEffect(()=>{
        const observador = new IntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting)setCardsVisible(true)
            },{threshold : 0.4},
        )
        const currentRef = cardsRef.current
        if(currentRef) observador.observe(currentRef)
        
        return()=>{
            if(currentRef) observador.unobserve(currentRef)
        }
    },[])

  return (
    <section id="nosotros" className="relative bg-white text-slate-900 pb-20">
      
        {/* =========================================================
            TARJETAS DE IMAGEN (Intactas como pediste)
        ========================================================= */}
        <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 -mt-10 lg:-mt-10" ref={cardsRef}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          
          <div className={`group relative h-80 w-full overflow-hidden bg-slate-900 shadow-2xl transition-all duration-1000 ease-out ${
            cardsVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}>
            <div className="absolute inset-0 z-0">
              <img src={indImg} alt="Capacitación Industrial" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-end p-8">
              <h3 className="text-2xl font-black uppercase text-white">Capacitación y<br/>Normatividad</h3>
              <p className="mt-3 text-sm font-medium text-slate-300">
                Programas autorizados por UTA OSHA y STPS para blindar a tu personal
              </p>
              <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-[#F58220]">
                Ver programas <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          </div>

          <div className={`group relative h-80 w-full overflow-hidden bg-slate-900 shadow-2xl transition-all duration-1000 ease-out ${
            cardsVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
          }`}>
            <div className="absolute inset-0 z-0">
              <img src={emergImg} alt="Atención Prehospitalaria" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-end p-8">
              <h3 className="text-2xl font-black uppercase text-white">Atención<br/>Prehospitalaria</h3>
              <p className="mt-3 text-sm font-medium text-slate-300">
                Cobertura especializada con paramédicos y unidades en sitio para tu planta.
              </p>
              <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-[#F58220]">
                Ver servicios <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
           </div>

          </div>
         </div>

      {/* =========================================================
          CONTENIDO REDISEÑADO AL ESTILO B2B INDUSTRIAL
      ========================================================= */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          
          {/* BLOQUE IZQUIERDO: Mensaje Principal */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-4 w-4 bg-[#F58220]"></div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F58220]">
                ¿Quiénes somos?
              </p>
            </div>
            
            <h2 className="mt-6 max-w-xl text-4xl font-black uppercase leading-[0.9] tracking-tighter text-[#1A237E] sm:text-5xl lg:text-6xl">
              Transformamos la cultura de la seguridad y la respuesta ante <span className="text-[#F58220]">crisis.</span>
            </h2>
            
            <p className="mt-7 max-w-xl text-base font-medium leading-relaxed text-slate-600 sm:text-lg border-l-2 border-[#F58220] pl-4">
              Con más de 20 años de trayectoria (desde 2005), brindamos soluciones integrales en atención médica prehospitalaria, protección civil y reducción de riesgos. Nos rigen los más altos estándares globales para blindar tus operaciones cuando cada segundo cuenta.
            </p>
            
            <a href="#contacto" className="mt-10 inline-flex items-center bg-[#1A237E] px-8 py-4 text-xs font-black uppercase tracking-widest text-white transition-colors hover:bg-[#F58220] shadow-lg">
              Conoce nuestra historia <ArrowRight className="ml-3 h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* BLOQUE DERECHO: Panel de Expediente Institucional */}
          <div className="self-end bg-slate-50 p-8 lg:p-10 border-t-8 border-[#1A237E] shadow-xl lg:mt-16">
            <p className="text-[10px] font-black tracking-[0.2em] uppercase text-[#F58220] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#F58220] inline-block"></span>
              AMPREH / EXPEDIENTE INSTITUCIONAL
            </p>
            
            <p className="max-w-lg text-2xl font-black uppercase leading-[1.1] tracking-tight text-slate-900 sm:text-3xl">
              Prevención, atención y continuidad para operaciones que no pueden detenerse.
            </p>
            
            {/* Los pilares ahora parecen especificaciones técnicas en una tabla */}
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:divide-x sm:divide-slate-200 border-t border-slate-200 pt-8">
              {pillars.map(({ icon: Icon, title, text }) => (
                <div key={title} className="sm:px-4 first:sm:pl-0">
                  <Icon className="size-7 text-[#F58220] mb-3" strokeWidth={2} aria-hidden="true" />
                  <h3 className="text-[11px] font-black uppercase leading-tight tracking-wider text-[#1A237E]">{title}</h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default AboutPreview