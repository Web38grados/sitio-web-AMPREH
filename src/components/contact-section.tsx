import { Mail, MessageCircle, Phone } from 'lucide-react'
import { FormEvent, useState } from 'react'

export default function ContactSection() {
  const [sent, setSent] = useState(false)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
    // Aquí puedes agregar la lógica para enviar el formulario a tu correo.
  }

  return (
    <section id="contacto" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        {/* Lado Izquierdo: Formulario */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[.2em] text-[#D32F2F]">
            Contacto B2B
          </p>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-[#1A237E] sm:text-5xl">
            Hablemos de una operación más preparada.
          </h2>

          <form onSubmit={submit} className="mt-10 grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-[#1A237E]">
              Nombre
              <input required name="nombre" className="rounded-lg border border-gray-200 bg-slate-50 px-4 py-3 font-normal outline-none transition-colors focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F]" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#1A237E]">
              Empresa
              <input required name="empresa" className="rounded-lg border border-gray-200 bg-slate-50 px-4 py-3 font-normal outline-none transition-colors focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F]" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#1A237E]">
              Correo
              <input required type="email" name="correo" className="rounded-lg border border-gray-200 bg-slate-50 px-4 py-3 font-normal outline-none transition-colors focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F]" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#1A237E]">
              Tipo de servicio
              <select name="servicio" className="rounded-lg border border-gray-200 bg-slate-50 px-4 py-3 font-normal outline-none transition-colors focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F]">
                <option>Capacitación y Certificación OSHA</option>
                <option>Respuesta a Emergencias</option>
                <option>Medicina Táctica y Stop the Bleed</option>
                <option>Programas Internos de Protección Civil</option>
                <option>Simulacros de Emergencia</option>
                <option>Atención Médica Prehospitalaria</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-[#1A237E] sm:col-span-2">
              Mensaje
              <textarea required name="mensaje" rows={5} className="rounded-lg border border-gray-200 bg-slate-50 px-4 py-3 font-normal outline-none transition-colors focus:border-[#D32F2F] focus:ring-1 focus:ring-[#D32F2F]" />
            </label>
            <button type="submit" className="rounded-lg bg-[#D32F2F] px-6 py-4 font-bold text-white transition-opacity hover:opacity-90 sm:col-span-2">
              {sent ? 'Mensaje enviado' : 'Enviar solicitud'}
            </button>
          </form>
        </div>

        {/* Lado Derecho: Información de Contacto */}
        <aside className="rounded-[2rem] bg-[#1A237E] p-8 text-white lg:p-12 shadow-lg">
          <p className="text-xl font-black tracking-tight">Conecta con nuestro equipo</p>
          <div className="mt-10 flex flex-col gap-8">
            
            {/* Correo */}
            <a href="mailto:edgar_diazcovarrubias@ampreh.com.mx" className="flex items-start gap-4 group">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[#FF4F00]">
                <Mail className="size-5 text-white" />
              </div>
              <span>
                <b className="block font-bold">Correo electrónico</b>
                <span className="text-sm text-gray-300">edgar_diazcovarrubias@ampreh.com.mx</span>
              </span>
            </a>

            {/* Teléfono */}
            <a href="tel:+14692158327" className="flex items-start gap-4 group">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[#FF4F00]">
                <Phone className="size-5 text-white" />
              </div>
              <span>
                <b className="block font-bold">Teléfono Directo</b>
                <span className="text-sm text-gray-300">+1 469 215 8327</span>
              </span>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/14692158327" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[#FF4F00]">
                <MessageCircle className="size-5 text-white" />
              </div>
              <span>
                <b className="block font-bold">WhatsApp Business</b>
                <span className="text-sm text-gray-300">Respuesta directa para cotizaciones</span>
              </span>
            </a>
            
          </div>
        </aside>
      </div>
    </section>
  )
}