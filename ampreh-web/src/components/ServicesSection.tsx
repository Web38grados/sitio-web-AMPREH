import { ArrowRight, Flame, House, Stethoscope } from 'lucide-react'
import { Link } from 'react-router-dom'


const services = [
  {
    icon: House,
    title: 'Programas Internos de Protección Civil',
    text: 'Planes claros, accionables y alineados con la operación de cada empresa para proteger personas, instalaciones y continuidad del negocio.',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85',
  },
  {
    icon: Flame,
    title: 'Simulacros de Emergencia a la medida',
    text: 'Escenarios realistas, evaluación profesional y recomendaciones concretas para elevar la capacidad de respuesta.',
    image:
      'https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=1200&q=85',
  },
  {
    icon: Stethoscope,
    title: 'Atención Médica Prehospitalaria en Campo',
    text: 'Acompañamiento médico y respuesta prehospitalaria para operaciones, eventos y ambientes críticos.',
    image:
      'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1200&q=85',
  },
]

export default function ServicesSection() {
  return (
    <section id="servicios-b2b" className="bg-secondary/60">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        {/* Encabezado */}
        <p className="text-sm font-bold uppercase tracking-[.2em] text-accent">
          Servicios especializados B2B
        </p>

        <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-primary sm:text-5xl">
          Soluciones integrales para empresas.
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
          Integramos consultoría, práctica y atención especializada para
          fortalecer cada capa de prevención y respuesta.
        </p>

        {/* Servicios */}
        <div className="mt-12 flex flex-col gap-6">
          {services.map(
            ({ icon: Icon, title, text, image }, index) => (
              <article
                key={title}
                className="grid overflow-hidden rounded-[1.75rem] border border-border bg-card lg:grid-cols-2"
              >
                {/* Imagen */}
                <div
                  className={`min-h-[260px] ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>

                {/* Contenido */}
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  {/* Icono */}
                  <div className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon className="size-6" />
                  </div>

                  {/* Título */}
                  <h3 className="mt-6 text-3xl font-black text-primary">
                    {title}
                  </h3>

                  {/* Descripción */}
                  <p className="mt-4 leading-8 text-muted-foreground">
                    {text}
                  </p>

                  {/* Enlace */}
                  <Link to="/contacto"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-accent"
                  >
                    Solicitar solución
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  )
}