import {
  CheckCircle2,
  Landmark,
  ShieldCheck,
  Target,
} from 'lucide-react'

const values = [
  'Excelencia Operativa',
  'Rigor Normativo',
  'Integridad',
  'Vocación de Servicio',
]

// 🚨 CORREGIDO: Se agregó "default"
export default function AboutSection() {
  return (
    <section id="nosotros" className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.2em] text-accent">
            Quiénes somos
          </p>
          <h2 className="mt-5 text-balance text-4xl font-black tracking-tight text-primary sm:text-5xl">
            Preparación con propósito desde 2005.
          </h2>
          <div className="mt-6 flex flex-col gap-5 text-lg leading-8 text-muted-foreground">
            <p>
              AMPREH, LLC nace con una misión clara: llevar formación de
              seguridad y salud de alto nivel a las personas que deben actuar
              cuando más importa.
            </p>
            <p>
              Acompañamos a empresas, instituciones y comunidades con una
              metodología práctica, rigurosa y humana.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4 border-l-2 border-accent pl-5">
            <span className="text-4xl font-black text-primary">+20</span>
            <span className="max-w-xs font-semibold text-primary">
              años formando equipos preparados
            </span>
          </div>
        </div>

        <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] bg-secondary">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85"
            alt="Equipo de profesionales reunido durante una capacitación"
            className="absolute inset-0 size-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-primary/25" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[.2em] text-accent">
          Nuestro norte
        </p>
        <h3 className="mt-5 text-4xl font-black tracking-tight text-primary">
          Principios que guían cada entrenamiento.
        </h3>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-border bg-card p-7">
            <Target className="size-8 text-accent" />
            <h4 className="mt-6 text-2xl font-black text-primary">Misión</h4>
            <p className="mt-3 leading-7 text-muted-foreground">
              Preparar personas y organizaciones para prevenir, responder y
              recuperarse ante emergencias con confianza.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-7">
            <Landmark className="size-8 text-accent" />
            <h4 className="mt-6 text-2xl font-black text-primary">Visión al 2030</h4>
            <p className="mt-3 leading-7 text-muted-foreground">
              Ser el aliado de referencia en seguridad y salud para
              comunidades y empresas más resilientes.
            </p>
          </article>

          <article className="rounded-2xl border border-border bg-card p-7">
            <ShieldCheck className="size-8 text-accent" />
            <h4 className="mt-6 text-2xl font-black text-primary">Valores</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm font-semibold text-muted-foreground">
              {values.map((value) => (
                <li key={value} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-accent" />
                  {value}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}