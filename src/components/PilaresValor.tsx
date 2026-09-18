import { ShieldCheck, TrendingUp, Clock } from 'lucide-react'

const pilares = [
  {
    icon: ShieldCheck,
    title: 'Cumplimiento Legal STPS',
    description: 'Evita multas y clausuras. Emitimos constancias DC-3 y programas internos con validez oficial.',
  },
  {
    icon: TrendingUp,
    title: 'Reducción de Primas',
    description: 'Baja tu grado de riesgo ante el IMSS implementando protocolos preventivos de estándar internacional.',
  },
  {
    icon: Clock,
    title: 'Respuesta 24/7',
    description: 'Cobertura prehospitalaria ininterrumpida para garantizar la continuidad de tus operaciones.',
  },
]

export function PilaresValor() {
  return (
    // El margen negativo (-mt-24) es el truco para que invada el bloque azul de arriba
    <section className="relative z-20 bg-white/0 -mt-24 pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Cuadrícula de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pilares.map((pilar, index) => (
            <div 
              key={index}
              // Las tarjetas tendrán el borde y la sombra para resaltar sobre ambos fondos
              className="bg-white p-8 shadow-2xl border-t-4 border-[#FF4F00] flex flex-col items-start transform transition-transform hover:-translate-y-2"
            >
              <div className="bg-[#1A237E]/10 p-4 rounded-full mb-6">
                <pilar.icon className="h-8 w-8 text-[#1A237E]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-['Plus_Jakarta_Sans']">
                {pilar.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-['IBM_Plex_Sans']">
                {pilar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}