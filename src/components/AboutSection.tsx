import {
  CheckCircle2,
  Landmark,
  ShieldCheck,
  Target,
} from 'lucide-react'

// Los valores corporativos de AMPREH
const values = [
  'Excelencia Operativa',
  'Rigor Normativo y Técnico',
  'Integridad y Ética',
  'Vocación de Servicio',
  'Innovación y Mejora Continua',
]

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
              AMPREH (Atención Médica Prehospitalaria y Reducción de Riesgos) es
              una empresa especializada en servicios de atención médica
              prehospitalaria, protección civil, seguridad industrial y
              prevención y control de accidentes.
            </p>
            <p>
              Destacamos por integrar en nuestros programas las acreditaciones
              oficiales de OSHA, los cursos avanzados de ECSI en primeros auxilios
              y la certificación especializada en técnicas críticas de control
              de hemorragias de Stop the Bleed.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4 border-l-2 border-accent pl-5">
            <span className="text-4xl font-black text-primary">+20</span>
            <span className="max-w-xs font-semibold text-primary">
              años salvaguardando la operación de empresas
            </span>
          </div>
        </div>

        <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] bg-secondary">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85"
            alt="Equipo de profesionales AMPREH durante una capacitación"
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
          {/* Misión */}
          <article className="rounded-2xl border border-border bg-card p-7">
            <Target className="size-8 text-accent" />
            <h4 className="mt-6 text-2xl font-black text-primary">Misión</h4>
            <p className="mt-3 leading-7 text-muted-foreground">
              Transformar la cultura de la seguridad y la respuesta ante crisis
              mediante servicios de élite. Convertimos la preparación en tu
              ventaja para blindar operaciones y salvar vidas.
            </p>
          </article>

          {/* Visión */}
          <article className="rounded-2xl border border-border bg-card p-7">
            <Landmark className="size-8 text-accent" />
            <h4 className="mt-6 text-2xl font-black text-primary">Visión al 2030</h4>
            <p className="mt-3 leading-7 text-muted-foreground">
              Consolidarnos como la empresa líder en resiliencia operativa y
              emergencias en México, redefiniendo los estándares de la seguridad humana.
            </p>
          </article>

          {/* Valores */}
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