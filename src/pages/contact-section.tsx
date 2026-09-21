import { Phone, Mail, MapPin, Map } from 'lucide-react';

export default function ContactSection() {
  return (
    <main className="w-full bg-white font-['Plus_Jakarta_Sans'] text-slate-900">
      
      {/* =========================================================
          SECCIÓN SUPERIOR: Info de Contacto + Formulario (Fondo Claro)
      ========================================================= */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* COLUMNA IZQUIERDA: Información */}
          <div>
            <p className="text-[#ff7414] text-[10px] font-bold tracking-widest uppercase mb-3">
              INFORMACIÓN DE CONTACTO
            </p>
            <h1 className="text-3xl lg:text-4xl font-black text-[#004a99] uppercase leading-[1.1] mb-6">
              Comunícate <br /> con nosotros
            </h1>
            <p className="text-slate-600 text-sm leading-relaxed mb-10 max-w-md">
              Estamos ubicados en Lima, pero atendemos a todo el Perú. Puedes escribirnos, llamarnos o visitarnos en nuestras instalaciones.
            </p>

            <div className="flex flex-col gap-8">
              {/* Teléfono */}
              {/* <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Phone className="w-6 h-6 text-[#004a99]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0a1727]">Teléfono</h4>
                  <p className="text-base font-semibold text-[#004a99] mt-1">+51 956 123 5678</p>
                  <p className="text-xs text-slate-500 mt-1">Lun - Vie de 8:00 a.m. - 6:00 p.m.</p>
                </div>
              </div> */}

              {/* Correo */}
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Mail className="w-6 h-6 text-[#004a99]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0a1727]">Correo electrónico</h4>
                  <p className="text-base font-semibold text-[#004a99] mt-1">edgar_diazcovarrubias@ampreh.com.mx</p>
                  <p className="text-xs text-slate-500 mt-1">Respondemos en menos de 24 horas</p>
                </div>
              </div>

              {/* Dirección */}
              {/* <div className="flex items-start gap-4">
                <div className="mt-1">
                  <MapPin className="w-6 h-6 text-[#004a99]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0a1727]">Dirección</h4>
                  <p className="text-base font-semibold text-[#004a99] mt-1">Av. Industrial 123, Ate - Lima, Perú</p>
                  <p className="text-xs text-slate-500 mt-1">Referencia: Cerca al Parque Industrial</p>
                </div>
              </div> */}
            </div>
          </div>

          {/* COLUMNA DERECHA: Formulario */}
          <div className="bg-[#004a99] p-8 lg:p-10 border border-slate-200 shadow-xl rounded-sm">
            <p className="text-[#ff7414] text-[10px] font-bold tracking-widest uppercase mb-3">
              ENVÍANOS UN MENSAJE
            </p>
            <h2 className="text-2xl font-black text-white uppercase leading-tight mb-4">
              Solicita más <br/> información
            </h2>
            <p className="text-white text-xs mb-8">
              Completa el formulario y nos pondremos en contacto contigo lo antes posible.
            </p>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-1">
                <label className="block text-xs font-bold text-white mb-2">Nombre completo *</label>
                <input type="text" placeholder="Tu nombre completo" className="w-full bg-slate-50 border border-slate-200 text-sm px-4 py-3 outline-none focus:border-[#ff7414] transition-colors rounded-sm placeholder:text-slate-400" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-xs font-bold text-white mb-2">Correo electrónico *</label>
                <input type="email" placeholder="tucorreo@empresa.com" className="w-full bg-slate-50 border border-slate-200 text-sm px-4 py-3 outline-none focus:border-[#ff7414] transition-colors rounded-sm placeholder:text-slate-400" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-xs font-bold text-white mb-2">Teléfono *</label>
                <input type="tel" placeholder="Tu número de telefono" className="w-full bg-slate-50 border border-slate-200 text-sm px-4 py-3 outline-none focus:border-[#ff7414] transition-colors rounded-sm placeholder:text-slate-400" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-xs font-bold text-white mb-2">Tipo de consulta *</label>
                <select className="w-full bg-slate-50 border border-slate-200 text-sm px-4 py-3 outline-none focus:border-[#ff7414] transition-colors rounded-sm text-slate-600 appearance-none">
                  <option>Selecciona una opción</option>
                  <option>Cotización de Cursos</option>
                  <option>Atención Prehospitalaria</option>
                  <option>Otro servicio</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-white mb-2">Mensaje *</label>
                <textarea rows={4} placeholder="Cuéntanos en qué podemos ayudarte..." className="w-full bg-slate-50 border border-slate-200 text-sm px-4 py-3 outline-none focus:border-[#ff7414] transition-colors rounded-sm placeholder:text-slate-400 resize-none"></textarea>
              </div>
              <div className="sm:col-span-2 mt-2">
                <button type="button" className="w-full bg-[#ff7414] hover:bg-[#e66a0c] text-white font-bold uppercase text-[11px] tracking-widest py-4 transition-colors rounded-sm shadow-md">
                  ENVIAR MENSAJE
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* =========================================================
          SECCIÓN INFERIOR: Mapa y Ubicación (Fondo Oscuro)
      ========================================================= */}
      <section className="relative w-full bg-[#071522] py-20 lg:py-28 overflow-hidden">
        
        {/* Imagen de fondo del edificio (con baja opacidad) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/edificio-ampreh.jpg" // Reemplaza con la foto real de tus instalaciones
            alt="Instalaciones AMPREH" 
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071522] via-[#071522]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* COLUMNA IZQUIERDA: Texto */}
          <div className="text-white">
            <p className="text-[#ff7414] text-[10px] font-bold tracking-widest uppercase mb-3">
              NUESTRAS INSTALACIONES
            </p>
            <h2 className="text-3xl lg:text-4xl font-black uppercase leading-[1.1] mb-6 text-white">
              Visítanos en <br /> nuestra sede
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-10 max-w-sm">
              Contamos con instalaciones equipadas para brindar una experiencia de capacitación práctica y de alto nivel.
            </p>
            
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-transparent border border-white/30 hover:bg-white hover:text-[#004a99] hover:border-white text-white px-8 py-3.5 rounded-sm text-[10px] font-bold uppercase tracking-widest transition-colors"
            >
              <Map size={16} /> VER EN GOOGLE MAPS
            </a>
          </div>

          {/* COLUMNA DERECHA: Mapa Integrado (Iframe) */}
          <div className="w-full h-[350px] lg:h-[450px] bg-slate-200 rounded-sm overflow-hidden shadow-2xl border-4 border-white/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.810557457715!2d-76.95350812403657!3d-12.056554642084666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c66b1a13e2bb%3A0xc07a98ebdc6778f3!2sAte%2C%20Peru!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Ubicación AMPREH"
            ></iframe>
          </div>

        </div>
      </section>

    </main>
  );
}