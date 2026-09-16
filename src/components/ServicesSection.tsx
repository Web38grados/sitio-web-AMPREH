import { ArrowRight, Award, ClipboardCheck, Flame, HeartPulse, Siren, Stethoscope } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Award,
    title: 'Capacitación y Certificación Internacional OSHA',
    text: 'Programas autorizados por UTA OSHA (10 y 30) y certificaciones oficiales ECSI en Primeros Auxilios Avanzados, RCP, DAE y BLS.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Flame,
    title: 'Respuesta a Emergencias y Brigadas',
    text: 'Capacitación teórico-práctica para cumplir con normativas de protección civil en Primeros Auxilios, Prevención y Combate de Incendios, y Evacuación.',
    image: 'https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: HeartPulse,
    title: 'Medicina Táctica y Stop the Bleed',
    text: 'Cursos oficiales del Departamento de Defensa de EE. UU. en técnicas críticas para el control de hemorragias masivas ante situaciones de trauma.',
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: ClipboardCheck,
    title: 'Programas Internos de Protección Civil',
    text: 'Consultoría experta en diseño, gestión y actualización de programas de protección civil y análisis de riesgos para garantizar la continuidad operativa.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Siren,
    title: 'Simulacros de Emergencia',
    text: 'Planeación, ejecución y evaluación de simulacros a la medida (sismo, incendio, materiales peligrosos) optimizando los tiempos de reacción.',
    image: 'https://images.unsplash.com/photo-1541888009-41712211eef2?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Stethoscope,
    title: 'Atención Médica Prehospitalaria',
    text: 'Cobertura especializada de emergencias en campo, eventos masivos y complejos industriales, garantizando una respuesta profesional y oportuna.',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80',
  },
]

export default function ServicesSection() {
  return (
    <section id="servicios-b2b" className="bg-[#F8F9FB] py-24 border-t-8 border-[#F58220] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Cabecera de la Sección */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-4 w-4 bg-[#F58220]"></div>
            <span className="text-[11px] font-black tracking-[0.3em] text-[#F58220] uppercase">
              Portafolio Operativo
            </span>
          </div>
          
          <h2 className="max-w-3xl text-4xl lg:text-6xl font-black uppercase leading-[0.95] tracking-tighter text-[#1A237E]">
            Soluciones integrales para <span className="text-[#F58220]">empresas</span>
          </h2>
          
          <p className="mt-8 max-w-2xl text-lg font-semibold text-slate-600 border-l-2 border-[#F58220] pl-4">
            Integramos consultoría, práctica y atención especializada para fortalecer cada capa de prevención y respuesta.
          </p>
        </div>

        {/* Grid Industrial */}
        <div className="mt-12 flex flex-col gap-10">
          {services.map(({ icon: Icon, title, text, image }, index) => (
            <article
              key={title}
              className="group flex flex-col lg:flex-row bg-white shadow-xl border-t-4 border-[#1A237E] transition-all hover:border-[#F58220] hover:-translate-y-1 rounded-none"
            >
              {/* Contenedor de Imagen (Alternando lados) */}
              <div className={`w-full lg:w-5/12 overflow-hidden relative bg-slate-900 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={image}
                  alt={title}
                  loading="lazy" 
                  className="h-full w-full object-cover min-h-[300px] mix-blend-luminosity opacity-60 group-hover:opacity-100 group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>

              {/* Contenido de Texto */}
              <div className="w-full lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center relative">
                {/* Marca de agua numérica */}
                <div className="absolute top-8 right-8 text-7xl font-black text-slate-100 opacity-50 z-0 pointer-events-none select-none">
                  0{index + 1}
                </div>

                <div className="relative z-10">
                  <Icon className="size-10 text-[#F58220] mb-6 transition-transform group-hover:scale-110 duration-300" strokeWidth={1.5} />
                  
                  <h3 className="text-2xl lg:text-3xl font-black uppercase tracking-tight text-slate-900 mb-4 leading-none">
                    {title}
                  </h3>
                  
                  <p className="text-sm font-medium leading-relaxed text-slate-600 mb-8 max-w-lg">
                    {text}
                  </p>
                  
                  <Link 
                    to="/contacto"
                    className="inline-flex items-center gap-3 bg-[#1A237E] px-6 py-4 text-[11px] font-black uppercase tracking-widest text-white hover:bg-[#F58220] transition-colors rounded-none shadow-md"
                  >
                    Solicitar solución <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
      </div>
    </section>
  )
}