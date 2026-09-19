'use client'

import React, { useState } from 'react'
import { ArrowRight, ChevronRight, ShieldCheck } from 'lucide-react'

// =========================================================
// DATOS DINÁMICOS
// =========================================================
const courseData = {
  rescate: {
    id: 'rescate',
    title: 'Rescate',
    eyebrow: 'CAPACITACIÓN EN CAMPO',
    description: 'Entrenamiento para responder cuando más importa.',
    image: 'https://images.unsplash.com/photo-1541888087525-071de60f8113?auto=format&fit=crop&q=80&w=800',
    courses: [
      { name: 'Rescate en Espacios Confinados', hours: '16 horas', cert: 'Certificación internacional' },
      { name: 'Rescate en Alturas', hours: '24 horas', cert: 'Certificación internacional' },
      { name: 'Rescate en Estructuras Colapsadas', hours: '32 horas', cert: 'Certificación internacional' },
      { name: 'Uso de Equipos de Rescate', hours: '20 horas', cert: 'Certificación internacional' },
    ]
  },
  medico: {
    id: 'medico',
    title: 'Médico',
    eyebrow: 'SOPORTE VITAL',
    description: 'Atención prehospitalaria y soporte vital de emergencia.',
    image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=800',
    courses: [
      { name: 'Primeros Auxilios Básicos', hours: '16 horas', cert: 'Certificación ECSI' },
      { name: 'Soporte Vital Básico (BLS)', hours: '8 horas', cert: 'Avalado por AHA' },
      { name: 'Stop The Bleed', hours: '4 horas', cert: 'Certificación internacional' },
    ]
  },
  industrial: {
    id: 'industrial',
    title: 'Industrial',
    eyebrow: 'PREVENCIÓN',
    description: 'Prevención de riesgos y seguridad operativa.',
    image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&q=80&w=800',
    courses: [
      { name: 'Certificación OSHA', hours: '30 horas', cert: 'Normativa Internacional' },
      { name: 'Manejo de Materiales Peligrosos', hours: '24 horas', cert: 'Certificación HAZMAT' },
    ]
  },
  incendios: {
    id: 'incendios',
    title: 'Contra incendios',
    eyebrow: 'BRIGADAS',
    description: 'Tácticas de combate contra incendios y evacuación.',
    image: 'https://images.unsplash.com/photo-1605814511210-917eb572cc85?auto=format&fit=crop&q=80&w=800',
    courses: [
      { name: 'Uso de Extintores', hours: '8 horas', cert: 'Certificación nacional' },
      { name: 'Combate de Incendios', hours: '16 horas', cert: 'Certificación NFPA' },
    ]
  }
};

type CategoryKey = keyof typeof courseData;

export default function CoursesCatalog() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('rescate');
  const activeData = courseData[activeCategory];

  return (
    <main className="w-full font-['Plus_Jakarta_Sans'] bg-white text-slate-900 pb-20">
      
      {/* =========================================================
          PARTE SUPERIOR: Textos sutiles + 4 Tarjetas Delgadas
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Lado Izquierdo: Textos y Botones */}
          <div className="w-full lg:w-1/2">
            <p className="text-[#F58220] text-[10px] font-bold uppercase tracking-widest mb-4">
              FORMACIÓN ESPECIALIZADA
            </p>
            <h2 className="text-4xl md:text-5xl font-medium text-[#0a1122] leading-[1.1] tracking-tight mb-6">
              Formación para <br/>
              <span className="text-[#F58220]">un entorno más seguro</span>
            </h2>
            <p className="text-slate-500 font-['IBM_Plex_Sans'] text-sm md:text-base leading-relaxed max-w-md mb-8">
              Soluciones a tu riesgo en todos los lugares. Aprende a actuar con confianza y experiencia real en el campo.
            </p>
            
            <div className="flex items-center gap-6">
              <button className="bg-[#F58220] hover:bg-[#e67515] text-white px-6 py-3 rounded text-sm font-semibold transition-colors flex items-center gap-2 shadow-md">
                Ver cursos <ArrowRight size={16} />
              </button>
              <button className="text-slate-600 hover:text-[#004a99] text-sm font-medium transition-colors flex items-center gap-1 group">
                Conoce nuestra metodología 
                <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Lado Derecho: Las 4 Tarjetas Delgadas */}
          <div className="w-full lg:w-1/2 bg-slate-50/50 rounded-xl p-4 md:p-6 grid grid-cols-4 gap-2 md:gap-4">
            {(Object.keys(courseData) as CategoryKey[]).map((key) => {
              const cat = courseData[key];
              const isActive = activeCategory === key;
              return (
                <button 
                  key={cat.id}
                  onClick={() => setActiveCategory(key)}
                  className={`relative h-[240px] md:h-[280px] rounded-lg overflow-hidden text-left transition-all duration-300 ${isActive ? 'ring-2 ring-[#F58220] shadow-lg transform -translate-y-1' : 'hover:ring-1 hover:ring-slate-300'}`}
                >
                  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${cat.image})` }} />
                  {/* Gradiente sutil para que el texto se lea bien */}
                  <div className={`absolute inset-0 transition-colors duration-300 ${isActive ? 'bg-gradient-to-t from-[#004a99] via-[#004a99]/60 to-transparent' : 'bg-gradient-to-t from-[#0a1122]/90 via-[#0a1122]/40 to-transparent'}`} />
                  
                  <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-end z-10">
                    <h3 className="text-white text-sm md:text-base font-semibold tracking-tight">{cat.title}</h3>
                    <span className="text-slate-300 text-[9px] md:text-[10px] font-medium mt-1 flex items-center transition-colors">
                      Ver curso <ArrowRight size={10} className="ml-1" />
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

        </div>
      </section>

      {/* =========================================================
          PARTE INFERIOR: Detalle (Imagen chica a la izquierda, lista a la derecha)
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 items-stretch border border-slate-100 rounded-xl overflow-hidden shadow-sm bg-white">
          
          {/* Tarjeta de Imagen Izquierda */}
          <div className="w-full lg:w-[40%] relative min-h-[300px] flex flex-col justify-center p-8 lg:p-12">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${activeData.image})` }} />
            <div className="absolute inset-0 bg-[#004a99]/85 mix-blend-multiply" />
            
            <div className="relative z-10">
              <p className="text-slate-300 text-[10px] font-bold uppercase tracking-widest mb-2">
                {activeData.eyebrow}
              </p>
              <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-tight">
                {activeData.title}
              </h2>
              <p className="text-blue-100 font-['IBM_Plex_Sans'] text-sm leading-relaxed mb-8 max-w-xs">
                {activeData.description}
              </p>
              <button className="border border-white text-white px-5 py-2 text-xs font-semibold rounded hover:bg-white hover:text-[#004a99] transition-colors inline-flex items-center gap-2">
                Ver programa <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Lista de Cursos Derecha con líneas finas */}
          <div className="w-full lg:w-[60%] p-8 lg:p-10 bg-white">
            <p className="text-[#F58220] text-[10px] font-bold uppercase tracking-widest mb-6">
              PROGRAMAS DE {activeData.title}
            </p>
            
            <div className="flex flex-col">
              {activeData.courses.map((course, i) => (
                <div key={i} className="group flex items-center justify-between cursor-pointer border-b border-slate-100 py-4 transition-colors hover:bg-slate-50 px-2 rounded-md">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 text-slate-400 group-hover:text-[#F58220] transition-colors">
                      <ShieldCheck size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-slate-800 font-semibold text-sm mb-0.5 group-hover:text-[#004a99] transition-colors">
                        {course.name}
                      </h4>
                      <p className="text-slate-400 font-['IBM_Plex_Sans'] text-[11px]">
                        {course.hours} <span className="mx-1">•</span> {course.cert}
                      </p>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-[#F58220] transform group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}