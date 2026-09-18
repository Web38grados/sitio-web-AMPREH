import { useState, useEffect } from 'react'
import { ArrowRight, BellRing, ClipboardCheck, Flame, HeartPulse, ShieldCheck, Siren, X } from 'lucide-react'

// Asegúrate de reemplazar esto con tus importaciones locales si prefieres
const sourceImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0ACE56yQBcdR9okYSoWxunUXudris3.png'

const services = [
  { icon: ShieldCheck, title: 'CAPACITACIÓN Y\nCERTIFICACIÓN\nINTERNACIONAL OSHA', text: 'Programas autorizados por la OSHA (10 y 30) y certificaciones oficiales, EC1 en Primeros Auxilios Avanzados, RCP, DEA y BLS.', crop: 'left top' },
  { icon: Flame, title: 'RESPUESTA A\nEMERGENCIAS Y\nBRIGADAS', text: 'Capacitación teórico-práctica para cumplir con normativas de protección civil en Primeros Auxilios, Prevención y Combate de Incendios, Evacuación.', crop: 'right top' },
  { icon: HeartPulse, title: 'MEDICINA TÁCTICA Y\nSTOP THE BLEED', text: 'Cursos oficiales del Departamento de Defensa de EE. UU. enfocados en trauma y control de hemorragias masivas ante situaciones de trauma.', crop: 'left center' },
  { icon: ClipboardCheck, title: 'PROGRAMAS INTERNOS\nDE PROTECCIÓN CIVIL', text: 'Consultoría experta en diseño, actualización y programas de protección civil y análisis de riesgos para garantizar la continuidad operativa.', crop: 'right center' },
  { icon: Siren, title: 'SIMULACROS DE\nEMERGENCIA', text: 'Planeación, ejecución y evaluación de simulacros a la medida (sismo, incendio, materiales peligrosos), optimizando los tiempos de reacción.', crop: 'left bottom' },
  { icon: BellRing, title: 'ATENCIÓN MÉDICA\nPREHOSPITALARIA', text: 'Cobertura especializada de emergencias en campo, eventos masivos y complejos industriales, garantizando una respuesta profesional y oportuna.', crop: 'right bottom' },
]

export function ServicesSection() {
  const [showForm, setShowForm] = useState(false)

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (showForm) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [showForm])

  return (
    <main className="w-full font-['Plus_Jakarta_Sans'] bg-slate-50 relative">
      
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative w-full bg-[#070b14] pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden border-t-8 border-[#F58220]">
        
        {/* Imagen de fondo difuminada */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/90 to-[#070b14]/40 z-10"></div>
          <div className="absolute inset-0 bg-[#004a99]/20 mix-blend-multiply z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-center opacity-40 grayscale" 
            style={{ backgroundImage: `url(${sourceImage})` }} 
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-[#F58220]"></span>
              <span className="text-[10px] font-black tracking-[0.3em] text-[#F58220] uppercase">
                Portafolio Operativo
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-black uppercase leading-[1.05] tracking-tight text-white mb-8">
              Soluciones Integrales<br />
              <span className="text-[#F58220]">Para Empresas</span>
            </h1>
            
            <p className="text-slate-300 font-['IBM_Plex_Sans'] text-base lg:text-lg border-l-2 border-[#F58220] pl-4 max-w-xl leading-relaxed">
              Brindamos servicios especializados en seguridad industrial, protección civil y atención prehospitalaria, diseñados para prevenir riesgos, salvar vidas y garantizar la continuidad operativa de tu empresa.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          GRID DE SERVICIOS
      ========================================================= */}
      <section className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {services.map(({ icon: Icon, title, text, crop }, index) => (
            <article 
              key={title} 
              className="group bg-white flex flex-col border-t-4 border-[#004a99] shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(26,35,126,0.1)] hover:border-[#F58220] transition-all duration-300 relative overflow-hidden"
            >
              {/* Imagen con recorte específico de v0 */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-[#004a99]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <div 
                  className="w-full h-full bg-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${sourceImage})`, backgroundPosition: crop }} 
                  aria-hidden="true" 
                />
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-8 flex flex-col flex-grow relative z-20 bg-white">
                {/* Número de fondo tipo marca de agua */}
                <span className="absolute top-4 right-6 text-7xl font-black text-slate-50 select-none z-0">
                  0{index + 1}
                </span>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 flex items-center justify-center text-[#F58220] mb-6 group-hover:bg-[#F58220] group-hover:text-white transition-colors duration-300">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  
                  <h2 className="text-xl font-black uppercase text-[#004a99] leading-tight tracking-tight mb-4 min-h-[4rem]">
                    {title.split('\n').map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                  </h2>
                  
                  <p className="text-sm font-['IBM_Plex_Sans'] text-slate-600 leading-relaxed mb-8 flex-grow">
                    {text}
                  </p>
                  
                  <button 
                    onClick={() => setShowForm(true)} 
                    className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#F58220] mt-auto"
                  >
                    Solicitar solución 
                    <ArrowRight size={16} strokeWidth={2.5} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </article>
          ))}

        </div>
      </section>

      {/* =========================================================
          CLOSING CTA
      ========================================================= */}
      <section className="bg-[#004a99] py-20 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex items-start gap-6 max-w-2xl">
            <div className="w-1.5 h-full bg-[#F58220] min-h-[80px]"></div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F58220] mb-3">
                Tu seguridad es nuestra misión
              </p>
              <h2 className="text-4xl sm:text-5xl font-black uppercase text-white mb-4 tracking-tight">
                Contáctanos hoy
              </h2>
              <p className="text-slate-300 font-['IBM_Plex_Sans'] text-sm sm:text-base">
                Diseñamos soluciones a la medida de tu empresa. Nuestro equipo de expertos está listo para ayudarte a construir un entorno más seguro.
              </p>
            </div>
          </div>
          
          <button 
            onClick={() => setShowForm(true)}
            className="flex items-center justify-center gap-3 bg-[#F58220] text-white px-8 py-5 font-black uppercase tracking-wider text-sm hover:bg-[#e67515] transition-colors shadow-xl w-full sm:w-auto shrink-0"
          >
            Solicitar una cotización <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* =========================================================
          MODAL FORMULARIO (Estilo B2B)
      ========================================================= */}
      {showForm && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
          role="presentation" 
          onClick={() => setShowForm(false)}
        >
          <div 
            className="bg-white w-full max-w-lg p-8 shadow-2xl relative border-t-8 border-[#F58220] animate-in fade-in zoom-in duration-300"
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="modal-title" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-6 right-6 text-slate-400 hover:text-[#004a99] transition-colors"
              onClick={() => setShowForm(false)} 
              aria-label="Cerrar"
            >
              <X size={24} strokeWidth={2} />
            </button>
            
            <p className="text-[10px] font-black tracking-[0.2em] text-[#004a99] uppercase mb-2">
              Hablemos de seguridad
            </p>
            <h2 id="modal-title" className="text-3xl font-black uppercase text-slate-900 mb-2">
              Solicita una cotización
            </h2>
            <p className="text-sm font-['IBM_Plex_Sans'] text-slate-600 mb-8 border-l-2 border-[#F58220] pl-3">
              Cuéntanos qué necesita tu empresa y un especialista se pondrá en contacto contigo.
            </p>
            
            <form onSubmit={(e) => { e.preventDefault(); setShowForm(false) }} className="flex flex-col gap-4">
              <input 
                required 
                placeholder="Nombre completo" 
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm font-['IBM_Plex_Sans'] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] transition-all"
              />
              <input 
                required 
                type="email" 
                placeholder="Correo corporativo" 
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm font-['IBM_Plex_Sans'] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] transition-all"
              />
              <textarea 
                required 
                placeholder="¿Cómo podemos ayudarte?" 
                rows={4}
                className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-sm font-['IBM_Plex_Sans'] text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] transition-all resize-none"
              />
              <button 
                className="mt-4 flex items-center justify-center gap-2 bg-[#004a99] text-white px-6 py-4 font-black uppercase tracking-wider text-xs hover:bg-slate-900 transition-colors w-full" 
                type="submit"
              >
                Enviar solicitud <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}