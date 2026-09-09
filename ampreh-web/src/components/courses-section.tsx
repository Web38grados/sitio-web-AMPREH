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

// 🚨 CORREGIDO: Se agregó "default"
export default function CoursesSection() {
  return (
    <section id="cursos" className="bg-primary py-24 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-accent">
          Oferta académica y certificaciones
        </p>
        <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">
          Entrenamiento que se queda contigo.
        </h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {courses.map(({ icon: Icon, title, text }) => (
            <article key={title} className="flex flex-col rounded-2xl bg-card p-7 text-foreground shadow-lg">
              <div className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-7 text-2xl font-black text-primary">{title}</h3>
              <p className="mt-3 flex-1 leading-7 text-muted-foreground">{text}</p>
              <button
                type="button"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-accent-foreground"
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