import { Menu, X, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/LOGO.jpg'

const logoUrl =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_AMPREH-removebg-preview-LutM7LdEdV3sWpEhReq90XgogHwHIr.png'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const location = useLocation()

  useEffect(() => {
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY <= 0) {
        setShowHeader(true)
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(false)
        setOpen(false)
      } else {
        setShowHeader(true)
      }
      lastScrollY = currentScrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    ['Inicio', '/'],
    ['Nosotros', '/nosotros'],
    ['Servicios', '/servicios'],
    ['Cursos', '/cursos'],
  ]

  return (
    <>
    <header
  // AQUI LA MAGIA: -translate-y-[110%] asegura que no quede ninguna línea fantasma al hacer scroll
        className={`fixed w-full top-0 z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          showHeader ? 'translate-y-0' : '-translate-y-[110%]'
        }`}
      >
        {/* 1. Barra Azul Superior - Visible en todos lados, pero inteligente */}
        <div className="w-full bg-[#004a99] px-5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white lg:px-8">
          <div className="mx-auto flex max-w-7xl items-center justify-center md:justify-between">
            
            {/* Esto se oculta en celular para no amontonar, se ve en tablet/PC */}
            <div className="hidden md:flex items-center gap-8">
              <a href="mailto:edgar_diazcovarrubias@ampreh.com.mx" className="flex items-center gap-2.5 transition-colors hover:text-[#F58220]">
                <Mail className="size-3.5" />
                edgar_diazcovarrubias@ampreh.com.mx
              </a>
              <span className="flex items-center gap-2.5 text-blue-200">
                <MapPin className="size-3.5" />
                Cobertura Nacional
              </span>
            </div>

            {/* El teléfono SIEMPRE se ve. En celular queda centrado, en PC queda a la derecha */}
            <a href="tel:+14692158327" className="flex items-center gap-2.5 text-[#F58220] transition-colors hover:text-white">
              <Phone className="size-3.5" />
              Línea Directa: +1 469 215 8327
            </a>
          </div>
        </div>

        {/* 2. Navegación Principal */}
        <div className="bg-white shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)]">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8 h-20">
            
            <Link to="/" aria-label="AMPREH inicio" className="flex-shrink-0 border-r-2 border-slate-100 pr-8 mr-4">
              <img src={logo} alt="AMPREH LLC" className="h-17 w-auto object-contain" loading="lazy" />
            </Link>
            
            <button type="button" onClick={() => setOpen(!open)} className="rounded-none p-2 text-[#0056B3] transition-colors hover:bg-slate-100 lg:hidden border border-slate-200">
              {open ? <X /> : <Menu />}
            </button>
            
            <nav className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col border-b-4 border-[#0056B3] bg-white p-5 shadow-2xl lg:static lg:flex lg:flex-row lg:items-center lg:justify-end lg:flex-grow lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}>
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-1">
                {links.map(([label, path]) => {
                  const isActive = location.pathname === path
                  return (
                    <Link
                      key={path}
                      to={path}
                      onClick={() => setOpen(false)}
                      className={`group relative px-4 py-3 text-[13px] font-black uppercase tracking-widest transition-colors ${
                        isActive ? 'text-[#0056B3]' : 'text-slate-600 hover:text-[#0056B3]'
                      }`}
                    >
                      {label}
                      <span className={`absolute bottom-0 left-4 right-4 h-[5px] bg-[#F58220] transition-transform duration-300 ease-out origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                    </Link>
                  )
                })}
              </div>
              
              <Link to="/contacto" onClick={() => setOpen(false)} className="mt-4 lg:mt-0 lg:ml-6 flex items-center justify-center gap-2 bg-[#F58220] px-6 py-3.5 text-[11px] font-black uppercase tracking-widest text-white transition-all hover:bg-[#0056B3] shadow-md hover:shadow-lg rounded-none">
                Solicitar Asesoría <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
            
          </div>
        </div>
      </header>
    </>
  )
}