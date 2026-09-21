import React from 'react'
import { LucideIcon } from 'lucide-react'

// Interfaz para que puedas pasarle diferentes íconos y textos según la página
interface Feature {
  icon: LucideIcon;
  text: string;
}

interface SplitHeroProps {
  breadcrumbs: string;
  eyebrow: string;
  titleWhite: string;
  titleOrange: string;
  description: string;
  features?: Feature[];
  bgImage: string;
}

export function PageHero({ 
  breadcrumbs, 
  eyebrow, 
  titleWhite, 
  titleOrange, 
  description, 
  features,
  bgImage 
}: SplitHeroProps) {
  return (
    <section className="relative w-full bg-[#004a99] flex flex-col lg:flex-row min-h-[60vh] pt-15 overflow-hidden font-['Plus_Jakarta_Sans'] border-b-[12px] border-[#F58220]">
      
      {/* =========================================================
          LADO IZQUIERDO: TEXTO (Azul Marino Oscuro)
      ========================================================= */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center px-6 py-20 lg:pl-16 xl:pl-24 relative z-20 bg-[#004a99]">
        <div className="max-w-2xl">
          
          {/* Eyebrow con línea separadora */}
          <div className="flex items-center gap-4 mb-4">
            <p className="text-[#F58220] text-xs font-black uppercase tracking-[0.2em]">
              {eyebrow}
            </p>
            <div className="h-[1px] w-12 bg-slate-700"></div>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase leading-[1.05] tracking-tight mb-6">
            <span className="text-white block">{titleWhite}</span>
            <span className="text-[#F58220] block">{titleOrange}</span>
          </h1>

          {/* Descripción */}
          <p className="text-slate-300 font-['IBM_Plex_Sans'] text-base md:text-lg leading-relaxed max-w-xl mb-12">
            {description}
          </p>

          {/* Bloque de Características */}
          {features && (
            <div className="flex flex-wrap items-center gap-6 lg:gap-10 border-t border-slate-800 pt-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 border border-[#F58220] rounded-full text-[#F58220]">
                    <feature.icon size={18} strokeWidth={2} />
                  </div>
                  <span className="text-white text-xs font-bold uppercase tracking-wider leading-tight max-w-[120px]">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* =========================================================
          LADO DERECHO: IMAGEN 
      ========================================================= */}
      <div className="hidden lg:block w-full lg:w-[45%] relative min-h-[400px] lg:min-h-full lg:absolute lg:right-0 lg:top-0 lg:bottom-0 z-10">
        
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-l from-transparent to-[#004a99]/20 z-20 [clip-path:polygon(15%_0,100%_0,100%_100%,0%_100%,15%_50%)]"></div>
        
        <div className="absolute inset-0 lg:[clip-path:polygon(0%_0,100%_0,100%_100%,0%_100%,15%_50%)]">
          {/* Usamos un tag <img> real con fetchPriority="high" en lugar de backgroundImage */}
          <img 
            src={bgImage} 
            alt="Fondo de sección" 
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        {/* <div className="hidden lg:block absolute top-0 left-[14.8%] w-[2px] h-[50%] bg-[#F58220] z-30 transform -rotate-[30deg] origin-bottom-left opacity-80"></div> */}

      </div>
      
    </section>
  )
}