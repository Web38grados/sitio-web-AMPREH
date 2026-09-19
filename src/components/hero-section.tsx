import { ArrowRight, BadgeCheck, BookOpenCheck, PhoneCall, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

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
      
      {/* Fondo Oscuro */}
      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="Equipo AMPREH en acción" className="h-full w-full object-cover object-center mix-blend-luminosity opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
      </div>

      {/* Aumentamos pb-24 a pb-36 para dar más respiro antes de las tarjetas */}
      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-120px)] max-w-7xl items-center px-6 pt-16 lg:px-12 pb-36">
        
        <div className="w-full max-w-2xl pt-20">
          
          <div className="mb-6 flex items-center gap-3">
            <div className="h-4 w-4 bg-[#F58220]"></div>
            <span className="text-[11px] font-black tracking-[0.3em] text-[#F58220] uppercase">
              Operaciones desde 2005
            </span>
          </div>
          
          {/* Cambiamos a leading-[1.15] para que respire verticalmente */}
          <h1 className="font-black uppercase leading-[1.15] tracking-tight text-white text-4xl md:text-6xl">
            Protegemos el
            <br />
            activo
            <br />
            más valioso
            <br />
            {/* Aumentamos un poco el mt-4 para alejar el recuadro azul del texto superior */}
            <span className="mt-4 inline-block bg-[#004a99] px-6 py-2 border-b-4 border-[#F58220] shadow-2xl">
              La Vida
            </span>
          </h1>
          
          {/* Bajamos de text-lg a text-base para mayor contraste con el título */}
          <p className="mt-8 max-w-xl text-base font-medium leading-relaxed text-blue-100 border-l-2 border-[#F58220] pl-4">
            Servicios de élite en atención médica prehospitalaria, protección civil y capacitación corporativa con estándares que inspiran confianza.
          </p>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link 
              to="/servicios" 
              className="flex h-14 items-center justify-center gap-3 bg-[#004a99] px-8 text-xs font-black uppercase tracking-wider text-white transition-all hover:bg-[#F58220] shadow-lg rounded-none"
            >
              Nuestros servicios <ArrowRight className="h-4 w-4" />
            </Link>
            <a 
              href="https://wa.me/14692158327" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex h-14 items-center justify-center gap-3 border-2 border-white bg-white/15 backdrop-blur-sm px-8 text-xs font-black uppercase tracking-wider text-white transition-all hover:bg-white hover:text-slate-900 shadow-sm rounded-none"
            >
              <PhoneCall className="h-4 w-4" />
              Contacto B2B
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-30 mx-auto -mt-16 max-w-7xl px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {credentials.map((item) => {
            const Icon = item.icon
            const cardClasses = "group flex flex-col justify-between border-t-8 border-[#004a99] bg-white p-7 shadow-xl transition-all duration-300 hover:border-[#F58220] hover:-translate-y-2 hover:shadow-2xl rounded-none"
            const cardContent = (
              <>
                <div>
                  <Icon className="mb-6 h-8 w-8 text-[#004a99] transition-colors duration-300 group-hover:text-[#F58220]" strokeWidth={2} />
                  <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 leading-none">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500">
                    {item.label}
                  </p>
                </div>
                <div className="mt-8 flex items-center text-[11px] font-black uppercase tracking-widest text-[#004a99] transition-colors group-hover:text-[#F58220]">
                  Explorar <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </>
            )
            if (item.to) { return <Link key={item.title} to={item.to} className={cardClasses}>{cardContent}</Link> }
            return <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className={cardClasses}>{cardContent}</a>
          })}
        </div>
      </div>
    </section>
  )
}