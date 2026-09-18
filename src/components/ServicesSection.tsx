import { useState, useEffect } from 'react'
import { ArrowRight, BellRing, ClipboardCheck, Flame, HeartPulse, ShieldCheck, Siren, X } from 'lucide-react'

// Imágenes temporales (Luego las cambias por fotos reales de AMPREH)
const sourceImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0ACE56yQBcdR9okYSoWxunUXudris3.png'

const services = [
  { icon: ShieldCheck, title: 'Capacitación y\nCertificación OSHA', text: 'Programas autorizados por la OSHA (10 y 30) y certificaciones oficiales, EC1 en Primeros Auxilios Avanzados, RCP, DEA y BLS. Garantizamos que tu personal esté preparado bajo los más altos estándares globales.', image: sourceImage },
  { icon: Flame, title: 'Respuesta a\nEmergencias y Brigadas', text: 'Capacitación teórico-práctica para cumplir con normativas de protección civil en Primeros Auxilios, Prevención y Combate de Incendios, Evacuación y Rescate Industrial.', image: sourceImage },
  { icon: HeartPulse, title: 'Medicina Táctica y\nStop The Bleed', text: 'Cursos oficiales del Departamento de Defensa de EE. UU. enfocados en trauma y control de hemorragias masivas ante situaciones de alto riesgo en campo.', image: sourceImage },
  { icon: ClipboardCheck, title: 'Programas Internos\nde Protección Civil', text: 'Consultoría experta en diseño, actualización y programas de protección civil y análisis de riesgos para garantizar la continuidad operativa ante cualquier eventualidad.', image: sourceImage },
  { icon: Siren, title: 'Simulacros de\nEmergencia', text: 'Planeación, ejecución y evaluación de simulacros a la medida (sismo, incendio, materiales peligrosos), optimizando los tiempos de reacción de tus brigadas.', image: sourceImage },
  { icon: BellRing, title: 'Atención Médica\nPrehospitalaria', text: 'Cobertura especializada de emergencias en campo, eventos masivos y complejos industriales, con paramédicos certificados y unidades en sitio.', image: sourceImage },
]

export default function ServicesSection() {
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    if (showForm) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [showForm])

  return (
    <main className="w-full font-['Plus_Jakarta_Sans'] bg-white relative">
      
      {/* =========================================================
          HERO SECTION (Con corte diagonal industrial)
      ========================================================= */}
      <section className="relative w-full bg-[#070b14] pt-32 pb-40 lg:pt-48 lg:pb-56 overflow-hidden [clip-path:polygon(0_0,100%_0,100%_100%,0_calc(100%-4vw))]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/90 to-transparent z-10"></div>
          <div 
            className="w-full h-full bg-cover bg-right opacity-30 grayscale mix-blend-luminosity" 
            style={{ backgroundImage: `url(${sourceImage})` }} 
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-1 bg-[#F58220]"></span>
              <span className="text-[10px] font-black tracking-[0.3em] text-[#F58220] uppercase">
                Portafolio Operativo
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-[5rem] font-black uppercase leading-[0.95] tracking-tight text-white mb-8 drop-shadow-2xl">
              Soluciones Integrales<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F58220] to-[#ff9b44]">
                Para Empresas
              </span>
            </h1>
            
            <p className="text-slate-300 font-['IBM_Plex_Sans'] text-base lg:text-lg border-l-2 border-[#1A237E] pl-4 max-w-xl leading-relaxed">
              Servicios especializados en seguridad industrial, protección civil y atención prehospitalaria. Diseñados para prevenir riesgos, salvar vidas y garantizar la continuidad operativa de tu planta.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICIOS ZIG-ZAG (El verdadero nivel agencia)
      ========================================================= */}
      <section className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-32 -mt-10">
        <div className="flex flex-col gap-24 lg:gap-32">
          
          {services.map(({ icon: Icon, title, text, image }, index) => {
            const isEven = index % 2 === 0; // Alterna entre izquierda y derecha

            return (
              <article 
                key={title} 
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-20 group ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                
                {/* IMAGEN DEL SERVICIO (Gigante y con Hover effect) */}
                <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px] overflow-hidden shadow-2xl border-t-4 border-[#1A237E]">
                  {/* Overlay oscuro que desaparece al hacer hover */}
                  <div className="absolute inset-0 bg-[#070b14]/40 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    style={{ backgroundImage: `url(${image})` }} 
                    aria-hidden="true" 
                  />
                  {/* Icono flotante en la esquina */}
                  <div className={`absolute bottom-0 ${isEven ? 'right-0' : 'left-0'} bg-[#F58220] p-5 z-20`}>
                    <Icon size={32} strokeWidth={1.5} className="text-white" />
                  </div>
                </div>

                {/* CONTENIDO DEL SERVICIO (Texto y CTA) */}
                <div className="w-full lg:w-1/2 relative flex flex-col justify-center">
                  {/* Número Gigante (Marca de Agua) */}
                  <span className={`absolute -top-16 ${isEven ? '-left-10' : '-right-10'} text-[8rem] lg:text-[12rem] font-black text-slate-100 select-none z-0 opacity-60 leading-none`}>
                    0{index + 1}
                  </span>

                  <div className="relative z-10">
                    <h2 className="text-3xl lg:text-5xl font-black uppercase text-[#1A237E] leading-[1.05] tracking-tight mb-6">
                      {title.split('\n').map((line, i) => (
                        <span key={i} className="block">{line}</span>
                      ))}
                    </h2>
                    
                    <p className="text-base lg:text-lg font-['IBM_Plex_Sans'] text-slate-600 leading-relaxed mb-10 border-l-2 border-[#F58220] pl-5 max-w-lg">
                      {text}
                    </p>
                    
                    <button 
                      onClick={() => setShowForm(true)} 
                      className="group/btn flex items-center gap-3 bg-transparent border border-[#1A237E] text-[#1A237E] px-8 py-4 font-black uppercase tracking-wider text-xs hover:bg-[#1A237E] hover:text-white transition-all duration-300 w-fit"
                    >
                      Solicitar solución 
                      <ArrowRight size={16} strokeWidth={2.5} className="transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

              </article>
            )
          })}

        </div>
      </section>

      {/* =========================================================
          MODAL FORMULARIO (Mismo estilo B2B que ya tenías)
      ========================================================= */}
      {showForm && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
          role="presentation" 
          onClick={() => setShowForm(false)}
        >
          {/* El contenido del modal se mantiene igual que en mi versión anterior */}
           <div 
            className="bg-white w-full max-w-lg p-8 shadow-2xl relative border-t-8 border-[#F58220] animate-in fade-in zoom-in duration-300"
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="modal-title" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-6 right-6 text-slate-400 hover:text-[#1A237E] transition-colors"
              onClick={() => setShowForm(false)} 
              aria-label="Cerrar"
            >
              <X size={24} strokeWidth={2} />
            </button>
            
            <p className="text-[10px] font-black tracking-[0.2em] text-[#1A237E] uppercase mb-2">
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
                className="mt-4 flex items-center justify-center gap-2 bg-[#1A237E] text-white px-6 py-4 font-black uppercase tracking-wider text-xs hover:bg-slate-900 transition-colors w-full" 
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