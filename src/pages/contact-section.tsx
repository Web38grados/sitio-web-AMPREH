import { Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <main className="w-full bg-white font-['Plus_Jakarta_Sans'] text-slate-900">
      
      {/* =========================================================
          SECCIÓN SUPERIOR: Info de Contacto + Formulario (Fondo Claro)
      ========================================================= */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-8 py-20 lg:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 pt-8">
          
          {/* COLUMNA IZQUIERDA: Información */}
          <div>
            <p className="text-[#ff7414] text-[10px] font-bold tracking-widest uppercase mb-3">
              INFORMACIÓN DE CONTACTO
            </p>
            <h1 className="text-3xl lg:text-4xl font-black text-[#004a99] uppercase leading-[1.1] mb-6">
              Comunícate <br /> con nosotros
            </h1>
            <p className="text-slate-600 text-sm leading-relaxed mb-10 max-w-md">
             Brindamos asesoría y capacitación especializada de clase mundial. Comunícate con nuestro equipo de expertos para resolver tus dudas y diseñar un plan a la medida de tu operación.
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



    </main>
  );
}