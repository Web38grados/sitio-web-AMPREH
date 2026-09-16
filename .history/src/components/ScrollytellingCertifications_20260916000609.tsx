import { CheckCircle2 } from 'lucide-react';
// Importa tus imágenes aquí
// import heroImg from '../assets/hero-paramedic.jpg';
// import certOsha from '../assets/osha-certificate.png';
// ...

export function ScrollytellingCertifications() {
  return (
    <section className="bg-white font-sans overflow-hidden">
      
      {/* SECCIÓN 1: Hero (Paramédico + OSHA) */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Lado Izquierdo: Texto */}
        <div className="z-10">
          <p className="text-[#D32F2F] text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#D32F2F]"></span> CERTIFICACIONES
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A0F3D] leading-[1.1] tracking-tight mb-6">
            Formación que cumple con los más <span className="text-[#D32F2F]">altos estándares</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-lg">
            Nuestros programas de capacitación están respaldados por certificaciones oficiales que garantizan la calidad, seguridad y el cumplimiento normativo en cada proceso.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-10">
            {/* Lista de beneficios breves */}
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
              <CheckCircle2 className="w-5 h-5 text-[#0056B3]" /> OSHA Authorized
            </div>
            {/* Agrega más beneficios aquí */}
          </div>
        </div>

        {/* Lado Derecho: Imagen + Certificado Flotante */}
        <div className="relative z-0 h-[500px] lg:h-[600px] flex items-center justify-center">
          {/* Fondo: Foto del Paramédico (Ocupando todo el espacio derecho) */}
          <div className="absolute right-0 top-0 w-[120%] lg:w-[150%] h-full rounded-l-[4rem] overflow-hidden shadow-2xl">
            {/* Reemplaza el div rojo con tu etiqueta <img>: <img src={heroImg} className="w-full h-full object-cover" /> */}
            <div className="w-full h-full bg-slate-200" /> 
          </div>
          
          {/* Frente: Certificado OSHA Flotante (Desplazado hacia la izquierda) */}
          <div className="relative z-10 w-[80%] max-w-md -translate-x-12 lg:-translate-x-24 shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-white p-2 rounded-xl">
             {/* <img src={certOsha} className="w-full h-auto object-contain rounded-lg" /> */}
             <div className="w-full h-[400px] bg-slate-100 flex items-center justify-center text-slate-400">Certificado OSHA</div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 2: Industria (Foto Izquierda, Texto Derecha) */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Izquierda: Imagen Industrial con Tarjeta Flotante */}
        <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl">
          {/* <img src={industryImg} className="w-full h-full object-cover" /> */}
          <div className="w-full h-full bg-slate-300" />
          
          {/* Tarjeta Azul Superpuesta */}
          <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 bg-[#0056B3] p-6 rounded-2xl text-white shadow-lg">
             <h4 className="font-bold text-lg mb-1">Capacitación práctica</h4>
             <p className="text-blue-200 text-sm">en entornos reales</p>
          </div>
        </div>

        {/* Derecha: Texto Explicativo */}
        <div>
          <p className="text-slate-400 font-bold mb-2">01</p>
          <h3 className="text-3xl lg:text-4xl font-black text-[#0A0F3D] mb-6 leading-tight">
            Certificación OSHA para un entorno más seguro
          </h3>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Nuestros programas cumplen con los requisitos de la Administración de Seguridad y Salud Ocupacional (OSHA), brindando a tu equipo las herramientas necesarias para prevenir riesgos y salvar vidas.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-slate-700 font-medium">
              <CheckCircle2 className="w-5 h-5 text-[#D32F2F] shrink-0 mt-0.5" /> Formación 100% práctica y certificada
            </li>
            {/* Más items */}
          </ul>
        </div>
      </div>

      {/* SECCIÓN 3: Médica (Texto Izquierda, Foto Derecha con Certificado) */}
      <div className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Izquierda: Texto */}
          <div className="order-2 lg:order-1">
             <p className="text-slate-400 font-bold mb-2">02</p>
            <h3 className="text-3xl lg:text-4xl font-black text-[#0A0F3D] mb-6 leading-tight">
              Certificación Médica para personal operativo
            </h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Contamos con certificaciones médicas ocupacionales que garantizan que tu equipo esté en condiciones óptimas para el trabajo, cumpliendo con los estándares de salud y seguridad de tu industria.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#D32F2F] shrink-0 mt-0.5" /> Evaluaciones médicas ocupacionales
              </li>
              {/* Más items */}
            </ul>
          </div>

          {/* Derecha: Foto + Certificado Médico Flotante */}
          <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px]">
            {/* Foto de fondo */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl">
               {/* <img src={medicalImg} className="w-full h-full object-cover" /> */}
               <div className="w-full h-full bg-slate-300" />
            </div>
            
            {/* Certificado Flotante (Desplazado abajo y a la izquierda) */}
            <div className="absolute -bottom-10 -left-10 lg:-left-20 w-[90%] max-w-md shadow-2xl bg-white p-2 rounded-xl transform -rotate-2">
               {/* <img src={certMedical} className="w-full h-auto object-contain rounded-lg" /> */}
               <div className="w-full h-[300px] bg-slate-100 flex items-center justify-center text-slate-400">Certificado Médico</div>
            </div>
          </div>
          
        </div>
      </div>

    </section>
  )
}