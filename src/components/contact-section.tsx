// 🚨 CORREGIDO: Se eliminó el 'use client'
import { Mail, MessageCircle, Phone } from 'lucide-react'
import { FormEvent, useState } from 'react'

// 🚨 CORREGIDO: Se agregó "default"
export default function ContactSection() {
  const [sent, setSent] = useState(false)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className="bg-background py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.2em] text-accent">
            Contacto B2B
          </p>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-primary sm:text-5xl">
            Hablemos de una operación más preparada.
          </h2>

          <form onSubmit={submit} className="mt-10 grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-primary">
              Nombre
              <input required name="nombre" className="rounded-lg border border-border bg-card px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-primary" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-primary">
              Empresa
              <input required name="empresa" className="rounded-lg border border-border bg-card px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-primary" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-primary">
              Correo
              <input required type="email" name="correo" className="rounded-lg border border-border bg-card px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-primary" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-primary">
              Tipo de servicio
              <select name="servicio" className="rounded-lg border border-border bg-card px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-primary">
                <option>Capacitación</option>
                <option>Protección Civil</option>
                <option>Atención prehospitalaria</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-bold text-primary sm:col-span-2">
              Mensaje
              <textarea required name="mensaje" rows={5} className="rounded-lg border border-border bg-card px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-primary" />
            </label>
            <button type="submit" className="rounded-lg bg-accent px-6 py-4 font-bold text-accent-foreground sm:col-span-2">
              {sent ? 'Mensaje enviado' : 'Enviar solicitud'}
            </button>
          </form>
        </div>

        <aside className="rounded-[2rem] bg-primary p-8 text-primary-foreground lg:p-12">
          <p className="text-lg font-bold">Conecta con nuestro equipo</p>
          <div className="mt-10 flex flex-col gap-7">
            <a href="mailto:edgar_diazcovarrubias@ampreh.com.mx" className="flex items-start gap-4">
              <Mail className="mt-1 text-accent" />
              <span>
                <b className="block">Correo electrónico</b>
                <span className="text-sm text-primary-foreground/70">edgar_diazcovarrubias@ampreh.com.mx</span>
              </span>
            </a>
            <a href="tel:+14692158327" className="flex items-start gap-4">
              <Phone className="mt-1 text-accent" />
              <span>
                <b className="block">Teléfono</b>
                <span className="text-sm text-primary-foreground/70">+1 469 215 8327</span>
              </span>
            </a>
            <a href="https://wa.me/14692158327" className="flex items-start gap-4">
              <MessageCircle className="mt-1 text-accent" />
              <span>
                <b className="block">WhatsApp Business</b>
                <span className="text-sm text-primary-foreground/70">Respuesta directa para cotizaciones</span>
              </span>
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}