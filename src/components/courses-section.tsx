import {
  ArrowRight,
  HardHat,
  HeartPulse,
  LifeBuoy,
  Siren,
} from 'lucide-react'

const courses = [
  {
    icon: HardHat,
    title: 'Certificación Internacional OSHA 10 y 30',
    text: 'Formación esencial para reconocer riesgos y fortalecer la cultura preventiva.',
  },
  {
    icon: HeartPulse,
    title: 'Primeros Auxilios Avanzados y RCP (ECSI)',
    text: 'Entrenamiento práctico para responder ante lesiones, paros cardíacos y emergencias médicas.',
  },
  {
    icon: LifeBuoy,
    title: 'Medicina Táctica y Control de Hemorragias',
    text: 'Técnicas críticas Stop the Bleed para actuar durante los primeros minutos de alto riesgo.',
  },
  {
    icon: Siren,
    title: 'Respuesta a Emergencias para Brigadas',
    text: 'Prepara brigadas capaces de organizar, comunicar y ejecutar una respuesta coordinada.',
  },
]

export default function CoursesSection() {
  return (
    <section id="cursos" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-[#D32F2F]">
          Oferta académica y certificaciones
        </p>
        
        <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-[#1A237E] sm:text-5xl">
          Entrenamiento que se queda contigo.
        </h2>
        
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {courses.map(({ icon: Icon, title, text }) => (
            <article 
              key={title} 
              className="flex flex-col rounded-2xl border border-gray-200 bg-slate-50 p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-[#1A237E]/10 text-[#1A237E]">
                <Icon className="size-6" />
              </div>
              
              <h3 className="mt-7 text-2xl font-black text-[#1A237E]">
                {title}
              </h3>
              
              <p className="mt-3 flex-1 leading-7 text-gray-600">
                {text}
              </p>
              
              <button
                type="button"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-[#D32F2F] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#D32F2F]/90"
              >
                Ver temario
                <ArrowRight className="size-4" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}