// 🚨 ¡Cero importaciones problemáticas! Diseño puro.
export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-[#1A237E] text-white"
    >
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(26,35,126,.95),rgba(26,35,126,.70)),url('https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=2200&q=85')] bg-cover bg-center"
      />

      <div className="mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
        <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[.2em] text-[#FF4F00]">
          <span className="h-px w-10 bg-[#FF4F00]" />
          Seguridad y salud para operaciones reales
        </p>

        <h1 className="mt-6 max-w-4xl text-balance text-5xl font-black tracking-tight sm:text-7xl">
          Capacitación que protege vidas y blinda tus operaciones.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-200">
          +20 años formando equipos con estándares globales OSHA, ECSI y Stop
          the Bleed. Convertimos conocimiento técnico en respuestas seguras y
          oportunas.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href="/cursos" 
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D32F2F] px-6 py-4 font-bold text-white transition-transform hover:-translate-y-0.5"
          >
            Conoce nuestros cursos
            <span>→</span>
          </a>

          <a
            href="/contacto" 
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/50 bg-transparent px-6 py-4 font-bold text-white hover:bg-white/10"
          >
            <span>💬</span>
            Habla con un experto
          </a>
        </div>
      </div>
    </section>
  )
}