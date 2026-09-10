export function ClientProof() {
  return (
    <section
      className="border-b border-border bg-card py-7"
      aria-label="Clientes corporativos"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-5 px-5 lg:justify-between lg:px-8">
        {/* Texto */}
        <p className="w-full text-center text-xs font-bold uppercase tracking-[.18em] text-muted-foreground lg:w-auto lg:text-left">
          Clientes que confían en nuestra preparación
        </p>

        {/* Clientes */}
        <span className="font-sans text-xl font-black tracking-tight text-muted-foreground/60 grayscale">
          Microsoft
        </span>

        <span className="font-serif text-xl font-bold text-muted-foreground/60 grayscale">
          Coca-Cola FEMSA
        </span>

        <span className="text-sm font-black tracking-widest text-muted-foreground/60 grayscale">
          BANK OF AMERICA
        </span>

        <span className="text-2xl font-black tracking-tight text-muted-foreground/60 grayscale">
          GE
        </span>
      </div>
    </section>
  )
}