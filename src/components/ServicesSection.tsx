import { ArrowRight, Award, ClipboardCheck, Flame, HeartPulse, Siren, Stethoscope } from 'lucide-react'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Award,
    title: 'Capacitación y Certificación Internacional OSHA',
    text: 'Programas autorizados por UTA OSHA (10 y 30) y certificaciones oficiales ECSI en Primeros Auxilios Avanzados, RCP, DAE y BLS.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
  },
  {
    icon: Flame,
    title: 'Respuesta a Emergencias y Brigadas',
    text: 'Capacitación teórico-práctica para cumplir con normativas de protección civil en Primeros Auxilios, Prevención y Combate de Incendios, y Evacuación.',
    image: 'https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=1200&q=85',
  },
  {
    icon: HeartPulse,
    title: 'Medicina Táctica y Stop the Bleed',
    text: 'Cursos oficiales del Departamento de Defensa de EE. UU. en técnicas críticas para el control de hemorragias masivas ante situaciones de trauma.',
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1200&q=85',
  },
  {
    icon: ClipboardCheck,
    title: 'Programas Internos de Protección Civil',
    text: 'Consultoría experta en diseño, gestión y actualización de programas de protección civil y análisis de riesgos para garantizar la continuidad operativa.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85',
  },
  {
    icon: Siren,
    title: 'Simulacros de Emergencia',
    text: 'Planeación, ejecución y evaluación de simulacros a la medida (sismo, incendio, materiales peligrosos) optimizando los tiempos de reacción.',
    image: 'https://images.unsplash.com/photo-1541888009-41712211eef2?auto=format&fit=crop&w=1200&q=85',
  },
  {
    icon: Stethoscope,
    title: 'Atención Médica Prehospitalaria',
    text: 'Cobertura especializada de emergencias en campo, eventos masivos y complejos industriales, garantizando una respuesta profesional y oportuna.',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1200&q=85',
  },
]

export default function ServicesSection() {
  return (

    <section id="servicios-b2b" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-[#D32F2F]">
          Servicios especializados B2B
        </p>

        <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-[#1A237E] sm:text-5xl">
          Soluciones integrales para empresas.
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
          Integramos consultoría, práctica y atención especializada para
          fortalecer cada capa de prevención y respuesta.
        </p>

        <div className="mt-12 flex flex-col gap-6">
          {services.map(({ icon: Icon, title, text, image }, index) => (
            <article
              key={title}
              // 🚨 Tarjetas blancas con bordes grises
              className="grid overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white lg:grid-cols-2 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className={`min-h-[260px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={image}
                  alt={title}
                  className="size-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#1A237E]/10 text-[#1A237E]">
                  <Icon className="size-6" />
                </div>

                <h3 className="mt-6 text-3xl font-black text-[#1A237E]">
                  {title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {text}
                </p>

                <Link 
                  to="/contacto"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#D32F2F] hover:opacity-80 transition-opacity"
                >
                  Solicitar solución
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}