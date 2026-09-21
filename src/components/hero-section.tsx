import { ArrowRight, PhoneCall } from 'lucide-react'
import { Link } from 'react-router-dom'

<<<<<<< HEAD
// 🚨 Tu imagen real
import heroImg from '../assets/inicio/hero.png'
=======
import heroImg from '../assets/inicio/hero.png'

// IMPORTA TUS IMÁGENES REALES AQUÍ
import oshaLogo from '../assets/inicio/OSHA_LOGO.png'
import ecsiLogo from '../assets/inicio/ECSI_LOGO.png'
import stbLogo from '../assets/inicio/STOPBLEED_LOGO.png'
>>>>>>> feature/chat

const credentials = [
  { 
    bg: 'white', 
    logo: oshaLogo, 
    desc: 'Cumplimos con los estándares de seguridad y salud ocupacional más rigurosos.', 
    linkText: 'VER CERTIFICACIÓN', 
    to: '/servicios' 
  },
  { 
    bg: 'blue', 
    logo: ecsiLogo, 
    desc: 'Capacitación en atención prehospitalaria y respuesta a emergencias.', 
    linkText: 'VER CERTIFICACIÓN', 
    to: '/servicios' 
  },
  { 
    bg: 'white', 
    logo: stbLogo, 
    desc: 'Formación en control de hemorragias y respuesta a tiradores masivos.', 
    linkText: 'VER CERTIFICACIÓN', 
    to: '/cursos' 
  },
  { 
    bg: 'blue', 
    isContact: true, 
    icon: PhoneCall, 
    title: 'CONTACTO', 
    desc: 'Hablar con un asesor para más información de nuestros servicios.', 
    linkText: 'VER CONTACTO', 
    href: 'https://wa.me/14692158327' 
  },
]

export function HeroSection() {
  return (
    <section id="inicio" className="relative w-full bg-[#040b16] font-['Plus_Jakarta_Sans']">
      
      {/* =========================================================
          FONDO: GRADIENTE RESPONSIVE Y POSICIÓN AJUSTADA
      ========================================================= */}
      <div className="absolute inset-0 z-0 bg-[#040b16]">
        <img 
          src={heroImg} 
          alt="Equipo AMPREH en acción" 
          /* En tablet/móvil lo centramos un poco más a la derecha (80%) para que el bombero no pise el texto */
          className="h-full w-full object-cover object-[80%_center] lg:object-center" 
        />
        {/* Gradiente: En móvil cubre el 60% de la pantalla, en PC vuelve al 40% original para lucir la foto en HD */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040b16] from-10% via-[#040b16]/90 via-60% lg:via-40% to-transparent lg:to-70%" />
      </div>

      {/* =========================================================
          CONTENIDO DEL HERO (Textos principales)
      ========================================================= */}
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-[1400px] flex-col justify-center px-6 pt-32 pb-40 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-end justify-between w-full gap-12">
          
          <div className="w-full max-w-2xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-[2px] w-8 bg-[#ff7414]"></div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-300 uppercase">
                Operaciones desde 2005
              </span>
            </div>
            
            <h1 className="font-black uppercase leading-[1.05] tracking-tight text-white text-4xl sm:text-5xl lg:text-[54px] mb-6">
              Protegemos el <br />
              activo más valioso <br />
              <span className="text-[#ff7414]">La Vida</span>
            </h1>
            
            <p className="max-w-xl text-sm lg:text-base font-medium leading-relaxed text-slate-300 mb-10">
              Servicios de élite en atención médica prehospitalaria, protección civil y capacitación corporativa con estándares que inspiran confianza.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/servicios" 
                className="flex h-12 lg:h-14 items-center justify-center gap-3 bg-[#ff7414] px-8 text-[10px] lg:text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#e66a0c] rounded-sm"
              >
                Nuestros servicios <ArrowRight className="h-4 w-4" />
              </Link>
              <a 
                href="https://wa.me/14692158327" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-12 lg:h-14 items-center justify-center gap-3 border border-slate-500 bg-transparent px-8 text-[10px] lg:text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10 rounded-sm"
              >
                Contacto B2B
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4 mb-4 max-w-[220px]">
            <div className="w-[2px] h-12 bg-[#ff7414]"></div>
            <p className="text-white text-[9px] font-bold uppercase tracking-widest leading-relaxed opacity-90">
              Formación, experiencia y compromiso en cada operación.
            </p>
          </div>

        </div>
      </div>

{/* =========================================================
          PANEL DE CREDENCIALES Y CONTACTO (Diseño Integrado)
      ========================================================= */}
      <div className="relative z-20 mx-auto max-w-[1400px] px-6 lg:px-8 -mt-24 pb-16">
        
        {/* Contenedor principal del panel */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-0">
          
          {/* Bloque Izquierdo: Las 3 Certificaciones */}
          <div className="flex flex-col sm:flex-row w-full lg:w-[70%] items-center justify-between border-y lg:border-y-0 lg:border-t border-slate-700/50 py-8 lg:py-10">
            {credentials.slice(0, 3).map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col w-full sm:w-1/3 px-4 ${
                  index !== 2 ? 'border-b sm:border-b-0 sm:border-r border-slate-700/50 pb-6 sm:pb-0 mb-6 sm:mb-0' : ''
                }`}
              >
                {/* Logo con invert para que resalte sobre el fondo oscuro */}
                <div className="h-20 mb-4 flex items-center justify-start">
                  <img 
                    src={item.logo} 
                    alt={item.title} 
                    className="max-h-full w-auto object-contain brightness-0 invert" 
                  />
                </div>
                
                {/* Descripción */}
                <p className="text-[11px] text-slate-300 leading-snug mb-6 pr-4">
                  {item.desc}
                </p>
                
                {/* Link Inferior */}
                <Link to={item.to} className="flex items-center gap-2 group mt-auto">
                  <div className="w-4 h-[2px] bg-[#ff7414] transition-all group-hover:w-6"></div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400 group-hover:text-white transition-colors">
                    {item.linkText}
                  </span>
                </Link>
              </div>
            ))}
          </div>

          {/* Bloque Derecho: Tarjeta de Contacto (El Call to Action) */}
          <div className="w-full lg:w-[28%] flex items-center lg:justify-end">
            <a 
              href={credentials[3].href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-[#051124]/80 backdrop-blur-md border border-slate-700/50 p-6 rounded-lg lg:rounded-tl-none lg:rounded-bl-none transition-all hover:bg-[#071836] group"
              // Opcional: clip-path para darle ese ligero corte diagonal en la esquina superior derecha que se ve en tu imagen
              style={{ clipPath: 'polygon(0 0, 95% 0, 100% 15%, 100% 100%, 0 100%)' }}
            >
              <div className="flex items-start gap-4">
                
                {/* Icono de Teléfono en círculo naranja */}
                <div className="w-10 h-10 rounded-full border-2 border-[#ff7414] flex items-center justify-center shrink-0 mt-1">
                  <PhoneCall className="w-4 h-4 text-[#ff7414]" strokeWidth={2.5} />
                </div>
                
                {/* Textos del CTA */}
                <div>
                  <h4 className="text-[10px] font-bold tracking-widest text-slate-300 uppercase mb-2">
                    ¿NECESITAS ORIENTACIÓN?
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed mb-6">
                    {credentials[3].desc}
                  </p>
                  
                  <div className="flex items-center text-[10px] font-bold uppercase tracking-[0.1em] text-[#ff7414]">
                    <ArrowRight className="mr-2 h-3 w-3 transition-transform group-hover:translate-x-1" strokeWidth={2.5} /> 
                    {credentials[3].linkText}
                  </div>
                </div>

              </div>
            </a>
          </div>

        </div>
      </div>
      
    </section>
  )
}