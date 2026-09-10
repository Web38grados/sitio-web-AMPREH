import { Link } from 'react-router-dom'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_AMPREH-removebg-preview-LutM7LdEdV3sWpEhReq90XgogHwHIr.png'

export default function SiteFooter() {
  return (
    <footer className="bg-[#1A237E] py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <img
            src={logoUrl}
            alt="AMPREH LLC"
            width={210}
            height={68}
            className="h-14 w-auto object-contain brightness-0 invert"
            loading="lazy"
          />
          <p className="mt-4 max-w-sm text-sm leading-6 text-gray-300">
            Seguridad y salud para equipos preparados. Formación que protege
            vidas y blinda operaciones.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold">
          {/* Corregidos los href por to */}
          <Link to="/nosotros" className="hover:text-[#FF4F00]">Nosotros</Link>
          <Link to="/servicios" className="hover:text-[#FF4F00]">Servicios</Link>
          <Link to="/cursos" className="hover:text-[#FF4F00]">Cursos</Link>
          <Link to="/contacto" className="hover:text-[#FF4F00]">Contacto</Link>
        </div>

        <p className="text-sm text-gray-400">
          © 2026 AMPREH, LLC. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}