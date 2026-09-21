'use client'

import { ArrowRight, Award, BookOpen, ShieldCheck, LucideIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

// 1. Definimos las propiedades (props) para que sea 100% reutilizable
export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CtaSectionProps {
  badge?: string;
  titlePart1?: string;
  highlightText?: string;
  description?: string;
  imageUrl?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string; // Nueva prop para controlar hacia dónde va el botón
  secondaryButtonText?: string;
  secondaryButtonClassName?: string;
  features?: Feature[];
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function CtaSection({
  badge = "CAPACITACIÓN INDUSTRIAL",
  titlePart1 = "Prepara a tu equipo antes de que ocurra",
  highlightText = "una emergencia",
  description = "Capacitación práctica para responder con seguridad, criterio y preparación. Porque la mejor respuesta empieza con una buena formación.",
  imageUrl = "/images/rescate-cta.jpg",
  primaryButtonText = "SOLICITAR COTIZACIÓN",
  primaryButtonLink = "/contacto", // Por defecto lleva a contacto
  secondaryButtonText = "HABLAR CON UN ASESOR",
  secondaryButtonClassName = "bg-transparent border border-white/30 hover:border-white hover:bg-white/5 text-white px-8 py-3.5 rounded text-[11px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-3",
  features = [
    { icon: ShieldCheck, title: "Instructores especializados", description: "Con experiencia real en campo" },
    { icon: BookOpen, title: "Capacitación práctica", description: "Simulaciones y escenarios reales de emergencia" },
    { icon: Award, title: "Certificación válida", description: "Respalda la formación de tu equipo" }
  ],
  onPrimaryClick,
  onSecondaryClick
}: CtaSectionProps) {
  return (
    <section className="relative w-full bg-[#04111d] flex flex-col lg:block">
      
      {/* =======================================
          FONDO DE IMAGEN
      ======================================= */}
      <div className="relative lg:absolute lg:top-0 lg:right-0 w-full lg:w-[60%] h-[300px] sm:h-[400px] lg:h-full z-0 shrink-0">
        <img 
          src={imageUrl} 
          alt="Llamada a la acción" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Oscurecedor base */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10" />
        
        {/* Gradientes para fusionar la foto con el fondo azul oscuro (Solo Desktop) */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#04111d]/80 via-[#04111d]/30 via-20% to-transparent z-20" />
        <div className="hidden lg:block absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#04111d] to-transparent z-20" />
      </div>

      {/* =======================================
          CONTENEDOR DE TEXTOS
      ======================================= */}
      <div className="relative z-30 w-full max-w-[1400px] mx-auto px-6 lg:px-8 py-16 lg:py-24 flex items-center lg:min-h-[500px]">
        <div className="w-full lg:w-[55%] xl:w-[50%] text-white">
          
          {/* Badge Superior */}
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-[#ff7414] flex items-center gap-4">
            {badge}
            <span className="block w-12 h-px bg-[#ff7414]/50" />
          </p>
          
          {/* Título Principal */}
          <h2 className="text-3xl sm:text-4xl text-white lg:text-5xl font-black uppercase leading-[1.1] tracking-tight mb-6">
            {titlePart1} <br className="hidden sm:block"/>
            <span className="text-[#3b82f6]">{highlightText}</span>
          </h2>
          
          {/* Descripción */}
          <p className="text-slate-300 font-['IBM_Plex_Sans'] text-sm leading-relaxed mb-10 max-w-md">
            {description}
          </p>
          
          {/* Lista de beneficios dinámica (Grid 2 columnas) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex gap-3">
                  <Icon size={22} className="text-[#ff7414] shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h4 className="text-[12px] font-bold text-white mb-1 leading-tight">{feature.title}</h4>
                    <p className="text-[10px] text-slate-400 leading-snug pr-4">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Botones dinámicos */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* AQUÍ ESTÁ EL CAMBIO: Ahora es un Link real a /contacto */}
            <Link 
              to={primaryButtonLink}
              onClick={onPrimaryClick}
              className="bg-[#ff7414] hover:bg-[#e66a0c] text-white px-8 py-3.5 rounded text-[11px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-3 shadow-lg shadow-[#ff7414]/20"
            >
              {primaryButtonText} <ArrowRight size={14} />
            </Link>
            
            <button 
              onClick={onSecondaryClick}
              className={secondaryButtonClassName}
            >
              {secondaryButtonText}
            </button>
          </div>
          
        </div>
      </div>
    </section>
  )
}