import { Mail} from 'lucide-react';
import { Link } from 'react-router-dom';

// Reemplaza estas rutas con tus imágenes reales
import logoAmpreh from '../assets/LOGO-sinBG.png'; 

export default function SiteFooter() {
  return (
    <footer className="relative w-full bg-[#f8fafc] overflow-hidden font-['Plus_Jakarta_Sans']">
      
      {/* =========================================================
          CONTENIDO PRINCIPAL DEL FOOTER (4 Columnas)
      ========================================================= */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-0">
          
          {/* COLUMNA 1: Marca y Redes (Ocupa 4/12) */}
          <div className="lg:col-span-4 lg:pr-12 flex flex-col">
            <img 
              src={logoAmpreh} 
              alt="AMPREH LLC. Safety and Health Training" 
              className="h-12 object-contain object-left mb-6"
            />
            <h3 className="text-[#004a99] text-xl font-bold leading-tight mb-3">
              Tu seguridad,<br/>
              nuestra especialidad
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed mb-6 pr-4">
              Capacitamos personas y equipos para un entorno laboral más seguro, preparado y resiliente.
            </p>
            
            {/* Redes Sociales (SVGs puros) */}
            {/* <div className="flex items-center gap-4 text-[#004a99]">
              <a href="#" className="hover:text-[#F58220] transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-[#F58220] transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="hover:text-[#F58220] transition-colors" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
              <a href="#" className="hover:text-[#F58220] transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div> */}
          </div>

          {/* COLUMNA 2: Navegación (Ocupa 2/12) */}
          <div className="lg:col-span-2 lg:border-l lg:border-slate-200 lg:px-8">
            <h4 className="text-[10px] font-black uppercase text-[#0a1727] tracking-widest mb-2">Navegación</h4>
            <div className="w-6 h-[2px] bg-[#F58220] mb-5"></div>
            <ul className="flex flex-col gap-3 text-xs font-medium text-slate-500">
              <li><Link to="/" className="hover:text-[#F58220] transition-colors">Inicio</Link></li>
              <li><Link to="/nosotros" className="hover:text-[#F58220] transition-colors">Nosotros</Link></li>
              <li><Link to="/servicios" className="hover:text-[#F58220] transition-colors">Servicios</Link></li>
              <li><Link to="/cursos" className="hover:text-[#F58220] transition-colors">Cursos</Link></li>
              <li><Link to="/contacto" className="hover:text-[#F58220] transition-colors">Contacto</Link></li>
            </ul>
          </div>

      {/* COLUMNA 3: Servicios (Ocupa 3/12) */}
          <div className="lg:col-span-3 lg:border-l lg:border-slate-200 lg:px-8">
            <h4 className="text-[10px] font-black uppercase text-[#0a1727] tracking-widest mb-2">Servicios</h4>
            <div className="w-6 h-[2px] bg-[#F58220] mb-5"></div>
            <ul className="flex flex-col gap-3 text-xs font-medium text-slate-500">
              <li><Link to="/servicios#capacitacion" className="hover:text-[#F58220] transition-colors">Capacitación Empresarial</Link></li>
              <li><Link to="/servicios#proteccion" className="hover:text-[#F58220] transition-colors">Consultoría en Seguridad</Link></li>
              <li><Link to="/servicios#proteccion" className="hover:text-[#F58220] transition-colors">Simulacros y Evacuación</Link></li>
              <li><Link to="/servicios#operaciones" className="hover:text-[#F58220] transition-colors">Asesoría en SST</Link></li>
              <li><Link to="/servicios#atencion" className="hover:text-[#F58220] transition-colors">Atención Prehospitalaria</Link></li>
            </ul>
          </div>

          {/* COLUMNA 4: Contacto (Ocupa 3/12) */}
          <div className="lg:col-span-3 lg:border-l lg:border-slate-200 lg:px-8">
            <h4 className="text-[10px] font-black uppercase text-[#0a1727] tracking-widest mb-2">Contacto</h4>
            <div className="w-6 h-[2px] bg-[#F58220] mb-5"></div>
            
            <div className="flex flex-col gap-5">
              {/* <div className="flex items-start gap-3">
                <Phone size={16} className="text-[#ff7414] shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-0.5">Teléfono</p>
                  <p className="text-xs font-bold text-[#0a1727]">+51 956 123 5678</p>
                  <p className="text-[9px] text-slate-400 mt-0.5">Lun - Vie | 8:00 a.m. - 6:00 p.m.</p>
                </div>
              </div> */}
              
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-[#ff7414] shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-0.5">Correo electrónico</p>
                  <a href="servicios@ampre.com.mx" className="text-xs font-bold text-[#0a1727] hover:text-[#F58220] transition-colors">servicios@ampre.com.mx</a>
                  <p className="text-[9px] text-slate-400 mt-0.5">Respuesta en menos de 24 horas.</p>
                </div>
              </div>

              {/* <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#ff7414] shrink-0 mt-0.5" strokeWidth={2.5} />
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-0.5">Dirección</p>
                  <p className="text-xs font-bold text-[#0a1727]">Av. Industrial 123, Ate - Lima, Perú</p>
                  <p className="text-[9px] text-slate-400 mt-0.5">(Referencia: Cerca al Parque Industrial)</p>
                </div>
              </div> */}
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================
          BARRA INFERIOR (Derechos y Legales)
      ========================================================= */}
      <div className="relative z-10 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-slate-600 font-medium">
            © {new Date().getFullYear()} AMPREH, LLC. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-[10px] text-slate-600 font-medium">
            <Link to="/privacidad" className="hover:text-[#004a99] transition-colors">Política de Privacidad</Link>
            <span className="w-px h-3 bg-slate-300"></span>
            {/* <Link to="/terminos" className="hover:text-[#004a99] transition-colors">Términos y condiciones</Link> */}
          </div>
        </div>
      </div>

    </footer>
  );
}