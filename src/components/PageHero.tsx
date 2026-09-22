import React from 'react'
import { LucideIcon } from 'lucide-react'

// Interfaz para que puedas pasarle diferentes íconos y textos según la página
interface Feature {
  icon: LucideIcon;
  text: string;
}

interface SplitHeroProps {
  breadcrumbs?: string;
  eyebrow: string;
  titleWhite: string;
  titleOrange: string;
  description: string;
  features?: Feature[];
  bgImage: string;
}

export function PageHero({ 

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  breadcrumbs, 
  eyebrow, 
  titleWhite, 
  titleOrange, 
  description, 
  features,
  bgImage 
}: SplitHeroProps) {
  return (
    <section className="relative w-full bg-[#004a99] flex flex-col lg:block min-h-[55vh] pt-16 lg:pt-20 overflow-hidden font-['Plus_Jakarta_Sans'] border-b-[8px] border-[#F58220]">
      
      {/* =========================================================
          IMAGEN Y GRADIENTE DE FUSIÓN (Lado Derecho/Fondo)
      ========================================================= */}
      <div className="relative lg:absolute lg:top-0 lg:right-0 w-full lg:w-[60%] h-[350px] lg:h-full z-0 order-2 lg:order-none">
        <img 
          src={bgImage} 
          alt="Fondo de sección" 
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* El gradiente que crea el difuminado suave idéntico a la página de Nosotros */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#004a99] via-[#004a99]/20 lg:via-[#004a99]/30 via-40% to-transparent z-10"></div>
      </div>

      {/* =========================================================
          CONTENEDOR DE TEXTOS (Lado Izquierdo)
      ========================================================= */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto flex items-center min-h-[100%] order-1 lg:order-none">
        <div className="w-full lg:w-[55%] xl:w-[50%] flex flex-col justify-center px-6 py-16 lg:py-24 lg:pl-8 xl:pl-12">
          
          {/* Eyebrow con línea separadora */}
          <div className="flex items-center gap-4 mb-4">
            <p className="text-[#F58220] text-[11px] font-black uppercase tracking-[0.2em]">
              {eyebrow}
            </p>
            <div className="h-[2px] w-8 bg-[#F58220]/50"></div>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-[1.05] tracking-tight mb-6">
            <span className="text-white block">{titleWhite}</span>
            <span className="text-[#F58220] block">{titleOrange}</span>
          </h1>

          {/* Descripción */}
          <p className="text-blue-50 font-['IBM_Plex_Sans'] text-sm md:text-base leading-relaxed max-w-lg mb-10">
            {description}
          </p>

          {/* Bloque de Características */}
          {features && (
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6 lg:gap-10 border-t border-white/10 pt-8 mt-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 border border-[#F58220] rounded-full text-[#F58220] bg-white/5 backdrop-blur-sm shrink-0">
                    <feature.icon size={18} strokeWidth={2} />
                  </div>
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest leading-tight max-w-[140px]">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
      
    </section>
  )
}