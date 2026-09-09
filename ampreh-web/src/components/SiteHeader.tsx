import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_AMPREH-removebg-preview-LutM7LdEdV3sWpEhReq90XgogHwHIr.png'

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  const links = [
    ['Inicio', '/'],
    ['Nosotros', '/nosotros'],
    ['Servicios', '/servicios'],
    ['Cursos', '/cursos'],
    ['Contacto', '/contacto'],
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        {/* Logo (Usamos 'to' en vez de 'href') */}
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
          className="rounded-md p-2 text-[#1A237E] hover:bg-gray-100 lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>

        {/* Navegación */}
        <nav
          className={`${
            open ? 'flex' : 'hidden'
          } absolute inset-x-0 top-full flex-col gap-1 border-b border-gray-200 bg-white p-5 lg:static lg:flex lg:flex-row lg:items-center lg:gap-7 lg:border-0 lg:bg-transparent lg:p-0`}
        >
          <div className="flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-7">
            {links.map(([label, path]) => (
              <Link
                key={path}
                to={path} // <-- CORREGIDO
                onClick={() => setOpen(false)}
                className="rounded px-2 py-2 text-sm font-bold text-[#1A237E] transition-colors hover:bg-gray-100 hover:text-[#D32F2F]"
              >
                {label}
              </Link>
            ))}
          </div>

          <Link
            to="/contacto" // <-- CORREGIDO
            onClick={() => setOpen(false)}
            className="mt-3 rounded-lg bg-[#D32F2F] px-5 py-3 text-center text-sm font-bold text-white transition-transform hover:-translate-y-0.5 lg:mt-0"
          >
            Solicitar cotización
          </Link>
        </nav>
      </div>
    </header>
  )
}