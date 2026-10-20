import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: ''
  });

  const [status, setStatus] = useState(''); // '', 'loading', 'success', 'error'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Si hay un mensaje de error/éxito y el usuario vuelve a escribir, lo ocultamos
    if (status !== '') setStatus(''); 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://email-service-605558562484.us-central1.run.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ nombre: '', email: '', telefono: '', empresa: '', mensaje: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <main className="w-full bg-white font-['Plus_Jakarta_Sans'] text-slate-900">
      
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
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Mail className="w-6 h-6 text-[#004a99]" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0a1727]">Correo electrónico</h4>
                  <p className="text-base font-semibold text-[#004a99] mt-1">servicios@ampreh.com.mx</p>
                  <p className="text-xs text-slate-500 mt-1">Respondemos en menos de 24 horas</p>
                </div>
              </div>
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

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-1">
                <label className="block text-xs font-bold text-white mb-2">Nombre completo *</label>
                <input 
                  type="text" 
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo" 
                  className="w-full bg-slate-50 border border-slate-200 text-sm px-4 py-3 outline-none focus:border-[#ff7414] transition-colors rounded-sm placeholder:text-slate-400" 
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-xs font-bold text-white mb-2">Correo electrónico *</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tucorreo@empresa.com" 
                  className="w-full bg-slate-50 border border-slate-200 text-sm px-4 py-3 outline-none focus:border-[#ff7414] transition-colors rounded-sm placeholder:text-slate-400" 
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-xs font-bold text-white mb-2">Teléfono *</label>
                <input 
                  type="tel" 
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  placeholder="Tu número de telefono" 
                  className="w-full bg-slate-50 border border-slate-200 text-sm px-4 py-3 outline-none focus:border-[#ff7414] transition-colors rounded-sm placeholder:text-slate-400" 
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-xs font-bold text-white mb-2">Empresa *</label>
                <input 
                  type="text" 
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  required
                  placeholder="Nombre de tu empresa" 
                  className="w-full bg-slate-50 border border-slate-200 text-sm px-4 py-3 outline-none focus:border-[#ff7414] transition-colors rounded-sm placeholder:text-slate-400" 
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-white mb-2">Mensaje *</label>
                <textarea 
                  name="mensaje"
                  rows={4} 
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  placeholder="Cuéntanos en qué podemos ayudarte..." 
                  className="w-full bg-slate-50 border border-slate-200 text-sm px-4 py-3 outline-none focus:border-[#ff7414] transition-colors rounded-sm placeholder:text-slate-400 resize-none"
                ></textarea>
              </div>
              
              <div className="sm:col-span-2 mt-2">
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-[#ff7414] hover:bg-[#e66a0c] disabled:opacity-50 text-white font-bold uppercase text-[11px] tracking-widest py-4 transition-colors rounded-sm shadow-md"
                >
                  {status === 'loading' ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
                </button>
              </div>

              {/* =======================================
                  MENSAJES DE FEEDBACK VISUAL
              ======================================= */}
              {status === 'success' && (
                <div className="sm:col-span-2 mt-2 bg-[#10b981] text-white text-sm font-bold text-center px-4 py-3 rounded-sm shadow-md animate-fade-in">
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
                </div>
              )}

              {status === 'error' && (
                <div className="sm:col-span-2 mt-2 bg-[#ef4444] text-white text-sm font-bold text-center px-4 py-3 rounded-sm shadow-md animate-fade-in">
                  Error de conexión. El servidor no está disponible en este momento.
                </div>
              )}

            </form>
          </div>

        </div>
      </section>

    </main>
  );
}