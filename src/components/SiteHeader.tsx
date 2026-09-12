import { Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const logoUrl =
  'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_AMPREH-removebg-preview-LutM7LdEdV3sWpEhReq90XgogHwHIr.png'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Siempre mostrar el header cuando estamos arriba de todo
      if (currentScrollY <= 0) {
        setShowHeader(true)
      } else if (currentScrollY > lastScrollY) {
        // Bajando
        setShowHeader(false)
        setOpen(false)
      } else {
        // Subiendo
        setShowHeader(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const links = [
    ['Inicio', '/'],
    ['Nosotros', '/nosotros'],
    ['Servicios', '/servicios'],
    ['Cursos', '/cursos'],
    ['Contacto', '/contacto'],
  ]
return (
  <>
    {/* Línea azul permanente */}
    <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-[#0056B3]" />

    {/* Header que aparece/desaparece al hacer scroll */}
    <header
      className={`sticky top-0 z-50 flex flex-col shadow-sm transition-transform duration-300 ease-in-out ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* 1. Barra Azul Superior */}
      <div className="hidden w-full bg-[#0056B3] px-5 py-2 text-xs font-medium text-white sm:block lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="mailto:edgar_diazcovarrubias@ampreh.com.mx"
              className="flex items-center gap-2 transition-colors hover:text-white/80"
            >
              <Mail className="size-3.5" />
              edgar_diazcovarrubias@ampreh.com.mx
            </a>

            <span className="flex items-center gap-2">
              <MapPin className="size-3.5" />
              Servicio a nivel nacional
            </span>
          </div>

          <a
            href="tel:+14692158327"
            className="flex items-center gap-2 font-bold transition-colors hover:text-white/80"
          >
            <Phone className="size-3.5" />
            +1 469 215 8327
          </a>
        </div>
      </div>

      {/* 2. Navegación Principal */}
      <div className="border-b-4 border-[#0056B3] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">

          {/* Logo */}
          <Link to="/" aria-label="AMPREH inicio">
            <img
              src={logoUrl}
              alt="AMPREH LLC"
              width={225}
              height={72}
              className="h-14 w-auto object-contain"
              loading="lazy"
            />
          </Link>

          {/* Botón menú móvil */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-md p-2 text-[#0056B3] transition-colors hover:bg-[#eaf4fb] lg:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>

          {/* Menú de Enlaces */}
          <nav
            className={`${
              open ? 'flex' : 'hidden'
            } absolute inset-x-0 top-full flex-col gap-1 border-b border-gray-200 bg-white p-5 shadow-xl lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
          >
            <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-7">
              {links.map(([label, path]) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setOpen(false)}
                  className="rounded px-2 py-2 text-sm font-bold text-slate-700 transition-colors hover:bg-[#eaf4fb] hover:text-[#0056B3]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  </>
)

}