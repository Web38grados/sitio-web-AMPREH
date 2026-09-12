export function ClientProof() {
  // Lista de tus clientes con estilos tipográficos que simulan sus logos reales
  const clients = [
    { name: 'Microsoft México', style: 'font-sans text-xl font-black tracking-tight' },
    { name: 'Coca-Cola FEMSA', style: 'font-serif text-xl font-bold' },
    { name: 'BANK OF AMERICA', style: 'text-sm font-black tracking-widest uppercase' },
    { name: 'GE', style: 'text-3xl font-black tracking-tighter' },
    { name: 'Owens Corning', style: 'font-sans text-lg font-bold tracking-wide' },
    { name: 'Pernod Ricard', style: 'font-serif text-lg font-medium italic' },
    { name: 'RSA Seguros', style: 'font-sans text-lg font-extrabold uppercase' },
    { name: 'BNY Mellon', style: 'font-serif text-xl font-semibold' },
    { name: 'American Tower', style: 'font-sans text-lg font-bold tracking-tighter' },
  ]

  return (
    <section
      className="border-b border-border bg-card py-12"
      aria-label="Clientes corporativos"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-5 lg:flex-row lg:px-8">
        {/* Texto intro */}
        <p className="w-full text-center text-xs font-bold uppercase tracking-[.18em] text-muted-foreground lg:w-48 lg:text-left lg:shrink-0">
          Clientes que confían en nuestra preparación
        </p>

        {/* Grilla de Clientes */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:justify-end">
          {clients.map((client, index) => (
            <span
              key={index}
              className={`${client.style} text-muted-foreground/50 grayscale transition-all duration-300 hover:text-primary hover:grayscale-0 cursor-default`}
            >
              {client.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}