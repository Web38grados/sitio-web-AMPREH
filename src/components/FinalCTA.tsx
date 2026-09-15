import { PhoneCall, MessageSquareText, ShieldAlert, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImg from '../assets/inicio/hero.jpg' // O usa otra foto de campo de tu carpeta

export function FinalCTA() {
  return (
    <section className="relative bg-[#071324] py-24 overflow-hidden border-t-8 border-[#E46D3C]">
      
      {/* Fondo industrial con la misma textura oscura */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Operaciones AMPREH" 
          className="h-full w-full object-cover object-center mix-blend-luminosity opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071324] via-[#071324]/90 to-[#071324]/70" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        
        {/* Etiqueta superior */}
        <div className="inline-flex items-center gap-3 mb-6 bg-white/5 px-4 py-2 border border-white/10">
          <ShieldAlert className="size-4 text-[#E46D3C]" />
          <span className="text-[11px] font-black tracking-[0.3em] text-[#E46D3C] uppercase">
            Respuesta Inmediata B2B
          </span>
        </div>

        {/* Título de Cierre */}
        <h2 className="mx-auto max-w-4xl text-4xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tighter text-white">
          Estamos listos para apoyar la <span className="text-[#E46D3C]">seguridad y salud</span> de tu organización
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg font-semibold text-blue-200">
          Garantiza el cumplimiento normativo ante la STPS y OSHA. Protege a tu personal con protocolos de élite internacional.
        </p>

        {/* Botón de Acción Principal */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/contacto"
            className="flex h-14 items-center justify-center gap-3 bg-[#E46D3C] px-8 text-xs font-black uppercase tracking-wider text-white transition-all hover:bg-white hover:text-[#0056B3] shadow-2xl rounded-none"
          >
            Solicitar Cotización a la Medida <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://wa.me/14692158327"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 items-center justify-center gap-3 border-2 border-white/40 bg-white/10 backdrop-blur-sm px-8 text-xs font-black uppercase tracking-wider text-white transition-all hover:bg-white hover:text-slate-900 shadow-sm rounded-none"
          >
            <MessageSquareText className="h-4 w-4 text-emerald-400" />
            WhatsApp Directo
          </a>
        </div>

        {/* Bloque Binacional de Teléfonos (Inspirado en tus gráficos oficiales) */}
        <div className="mt-16 pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          
          {/* USA */}
          <a 
            href="tel:+14692158327" 
            className="group flex items-center justify-center gap-4 bg-white/5 p-5 border border-white/10 transition-all hover:border-[#E46D3C] hover:bg-white/10"
          >
            <span className="text-2xl" role="img" aria-label="USA Flag">🇺🇸</span>
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Contacto USA</p>
              <p className="text-lg font-black text-white group-hover:text-[#E46D3C] transition-colors">+1 (469) 215-8327</p>
            </div>
          </a>

          {/* MÉXICO */}
          <a 
            href="tel:+524421140762" 
            className="group flex items-center justify-center gap-4 bg-white/5 p-5 border border-white/10 transition-all hover:border-[#E46D3C] hover:bg-white/10"
          >
            <span className="text-2xl" role="img" aria-label="Mexico Flag">🇲🇽</span>
            <div className="text-left">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Contacto México</p>
              <p className="text-lg font-black text-white group-hover:text-[#E46D3C] transition-colors">+52 (442) 114-0762</p>
            </div>
          </a>

        </div>

      </div>
    </section>
  )
}