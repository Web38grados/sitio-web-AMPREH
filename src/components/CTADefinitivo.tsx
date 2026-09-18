import { ArrowRight, MessageCircle, Shield, ShieldCheck, Flame, PlusSquare, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

// IMPORTA TU IMAGEN AQUÍ
import bgBomberosTeam from '../assets/bomberos-team.jpg'; 

export function CTADefinitivo() {
  return (
    <section className="relative w-full bg-[#070b14] overflow-hidden font-['Plus_Jakarta_Sans']">
      
      {/* =========================================================
          IMAGEN DE FONDO CON DIFUMINADO (FADE)
      ========================================================= */}
      <div className="absolute top-0 right-0 w-full lg:w-[65%] h-[60vh] lg:h-full z-0">
        {/* Difuminado de izquierda a derecha (para mezclar con el texto) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/80 to-transparent z-10"></div>
        {/* Difuminado de abajo hacia arriba (para mezclar con los beneficios) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/60 lg:via-[#070b14]/20 to-transparent z-10"></div>
        
        <img 
          src={bgBomberosTeam} 
          alt="Equipo de rescate y paramédicos" 
          // EL CAMBIO ESTÁ AQUÍ EN EL CLASNAME:
          // Usamos object-[80%_top] en móviles y lg:object-[80%_center] en PC
          className="w-full h-full object-cover object-[80%_top] lg:object-[80%_center] opacity-80 lg:opacity-100"
        />
      </div>

      {/* =========================================================
          CONTENIDO PRINCIPAL (HERO)
      ========================================================= */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 lg:pt-36 pb-16 lg:pb-20">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Etiqueta Superior */}
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-5 h-5 text-[#FF4F00]" strokeWidth={2} />
            <span className="text-xs font-black tracking-[0.25em] text-slate-400 uppercase">
              Tu seguridad, nuestra misión
            </span>
          </div>

          {/* Título Principal */}
          <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-black uppercase leading-[1.05] tracking-tight mb-8">
            <span className="text-white">Estamos listos para <br className="hidden sm:block"/> apoyar</span><br />
            <span className="text-[#FF4F00]">la seguridad y salud</span><br />
            <span className="text-white">de tu organización</span>
          </h2>

          {/* Descripción */}
          <p className="text-slate-300 font-['IBM_Plex_Sans'] text-base lg:text-lg max-w-xl mb-12 leading-relaxed border-l-2 border-slate-700 pl-4">
            Garantiza el cumplimiento normativo ante la STPS y OSHA. Protege a tu personal con instructores especializados y protocolos de élite internacional.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
            <Link 
              to="/cotizacion" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#FF4F00] text-white px-8 py-4 font-black uppercase tracking-wider text-xs sm:text-sm hover:bg-[#e64600] transition-colors shadow-[0_10px_30px_rgba(255,79,0,0.25)]"
            >
              Solicitar cotización a la medida <ArrowRight className="w-4 h-4" />
            </Link>
            
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-slate-600 text-white px-8 py-4 font-black uppercase tracking-wider text-xs sm:text-sm hover:border-white hover:bg-white/5 transition-all"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Directo
            </a>
          </div>

        </div>
      </div>

      {/* =========================================================
          BENEFICIOS INFERIORES
      ========================================================= */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pb-24">
        {/* Usamos una línea sutil con opacidad para dividir */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pt-12 border-t border-slate-800">
          
          <div className="flex flex-col items-start group">
            <ShieldCheck className="w-8 h-8 text-[#FF4F00] mb-5 transform group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
            <h4 className="text-white font-black uppercase tracking-wide text-sm mb-2">Capacitación<br/>Certificada</h4>
            <p className="text-slate-500 font-['IBM_Plex_Sans'] text-xs leading-relaxed max-w-[250px]">Avalada por estándares nacionales e internacionales.</p>
          </div>

          <div className="flex flex-col items-start group">
            <Flame className="w-8 h-8 text-[#FF4F00] mb-5 transform group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
            <h4 className="text-white font-black uppercase tracking-wide text-sm mb-2">Instructores<br/>Especializados</h4>
            <p className="text-slate-500 font-['IBM_Plex_Sans'] text-xs leading-relaxed max-w-[250px]">Profesionales con experiencia en campo.</p>
          </div>

          <div className="flex flex-col items-start group">
            <PlusSquare className="w-8 h-8 text-[#FF4F00] mb-5 transform group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
            <h4 className="text-white font-black uppercase tracking-wide text-sm mb-2">Práctica<br/>Real</h4>
            <p className="text-slate-500 font-['IBM_Plex_Sans'] text-xs leading-relaxed max-w-[250px]">Simulaciones y escenarios que te preparan para la vida real.</p>
          </div>

          <div className="flex flex-col items-start group">
            <Users className="w-8 h-8 text-[#FF4F00] mb-5 transform group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
            <h4 className="text-white font-black uppercase tracking-wide text-sm mb-2">Más<br/>Oportunidades</h4>
            <p className="text-slate-500 font-['IBM_Plex_Sans'] text-xs leading-relaxed max-w-[250px]">Potencia tu perfil profesional y abre nuevas puertas en el sector de emergencias.</p>
          </div>

        </div>
      </div>

    </section>
  )
}