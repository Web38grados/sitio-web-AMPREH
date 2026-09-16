import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  PhoneCall,
  ShieldCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'

// 🚨 Tu imagen real
import heroImg from '../assets/inicio/hero.png'

const credentials = [
  { title: 'OSHA', label: 'Ver certificación', icon: ShieldCheck, to: '/servicios' },
  { title: 'ECSI', label: 'Conoce el estándar', icon: BadgeCheck, to: '/servicios' },
  { title: 'Stop the Bleed', label: 'Ver capacitación', icon: BookOpenCheck, to: '/cursos' },
  { title: 'Contacto', label: 'Hablar con un asesor', icon: PhoneCall, href: 'https://wa.me/14692158327' },
]

export function HeroSection() {
  return (
    <section id="inicio" className="relative bg-[#F8F9FB] font-sans overflow-hidden">
      
      {/* 1. Fondo Oscuro B2B */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Equipo AMPREH en acción" 
          className="h-full w-full object-cover object-center" 
        />
        {/* Degradado negro suave: de oscuro a la izquierda a casi transparente a la derecha */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* 2. Contenido Principal */}
      {/* 🔥 EL CAMBIO ESTÁ AQUÍ: min-h-[calc(100vh-120px)] hace que ocupe TODA la pantalla sobrante 🔥 */}
      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-120px)] max-w-7xl items-center px-6  pt-16 lg:px-8">
        <div className="max-w-2xl">
          
        {/* Etiqueta superior - Estilo Editorial 0% IA */}
        <div className="mb-6 flex items-center gap-4">
          <div className="h-0.5 w-12 bg-[#D32F2F]"></div>
          <span className="text-sm font-bold tracking-[0.25em] text-[#D32F2F] uppercase">
            Operaciones desde 2005
          </span>
        </div>
          
          {/* Título: BLANCO sobre fondo oscuro = Contraste Máximo */}
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl text-white">
            Protegemos el activo más valioso
            <br />
            {/* El bloque azul */}
            <span className="mt-4 inline-block bg-[#0056B3] px-6 py-2 font-black uppercase tracking-tighter text-white shadow-2xl">
              La Vida
            </span>
          </h1>
          
          <p className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-slate-300">
            Servicios de élite en atención médica prehospitalaria, protección civil y capacitación corporativa con estándares que inspiran confianza
          </p>
          
          {/* Botones cuadrados e industriales */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link 
              to="/servicios" 
              className="flex items-center justify-center gap-3 bg-[#0056B3] px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition-all hover:bg-[#00458f] shadow-lg"
            >
              Nuestros servicios <ArrowRight className="h-4 w-4" />
            </Link>
            <a 
              href="https://wa.me/14692158327" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-3 border-2 border-white bg-transparent px-8 py-4 text-sm font-black uppercase tracking-wider text-white transition-all hover:bg-white hover:text-slate-900 shadow-sm"
            >
              <PhoneCall className="h-4 w-4" />
              Contacto B2B
            </a>
          </div>
        </div>
      </div>

<<<<<<< HEAD
        <h1 className="mt-6 max-w-4xl text-balance text-5xl font-black text-white tracking-tight sm:text-7xl">
          Capacitación que protege vidas y blinda tus operaciones.
        </h1>
=======
      {/* 3. Tarjetas Flotantes (Se montan sobre la foto gracias al -mt-24) */}
      {/* Ajusté el margen negativo para que "muerdan" un poco más el fondo */}
      <div className="relative z-30 mx-auto -mt-10 max-w-7xl px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {credentials.map((item) => {
            const Icon = item.icon
            
            // Estructura dura, sin redondeos infantiles, borde azul fuerte
            const cardClasses = "group flex flex-col justify-between border-t-4 border-[#0056B3] bg-white p-7 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            
            const cardContent = (
              <>
                <div>
                  <Icon className="mb-5 h-8 w-8 text-[#0056B3] transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="text-xl font-black uppercase tracking-wide text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-600">
                    {item.label}
                  </p>
                </div>
                <div className="mt-8 flex items-center text-xs font-bold uppercase tracking-widest text-[#D32F2F] transition-colors group-hover:text-[#0056B3]">
                  Explorar <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </>
            )
>>>>>>> 4acc51ec65db104a4db7287d5722b0a07b248ca5

            if (item.to) {
              return (
                <Link key={item.title} to={item.to} className={cardClasses}>
                  {cardContent}
                </Link>
              )
            }
            return (
              <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className={cardClasses}>
                {cardContent}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}