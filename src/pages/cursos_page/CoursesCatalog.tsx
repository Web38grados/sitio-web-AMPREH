'use client'

import React, { useMemo, useState } from 'react'
import { ArrowRight, Award,  Clock3, FileText, Search, ShieldCheck, Stethoscope, Users, Briefcase, BookOpen, ArrowLeft } from 'lucide-react'
import imgHero from '../../assets/cursos/hero.png'
import CtaSection from '../../components/CtaSection'
import recordkeep from '../../assets/cursos/RecordkeepingRuleSeminar.png'
import osha521 from '../../assets/cursos/OSHA-521-osha.international.jpg'
import osha3015 from '../../assets/cursos/3015.jpg'
import atp191update from '../../assets/cursos/UpdateforSafety.jpg'
import csho1t from '../../assets/cursos/salud-2-construccion.jpg'
import sindustrial from '../../assets/cursos/seguridad-industria.jpg'


// =========================================================
// DATOS

// =========================================================
type Course = { 
  id: string; 
  title: string; 
  category: string; 
  description: string; 
  hours: string; 
  level: string; 
  badge: string; 
  image: string;
  topics?: string[]; 
}
import img4 from '../../assets/nosotros/rescate-cta.png'
const courses: Course[] = [
  // ==========================================
  // OSHA, CSHO, SSH Y NORMATIVA
  // ==========================================
  { 
    id: 'osha-7845', 
    title: 'Recordkeeping Rule Seminar', 
    category: 'OSHA y seguridad', 
    description: 'Seminario oficial sobre reglas de mantenimiento de registros e informes de incidentes.', 
    hours: '8 horas', level: 'Nivel Intermedio', badge: 'OSHA #7845', image: recordkeep
  },
  { 
    id: 'osha-521', 
    title: 'OSHA Guide to Industrial Hygiene', 
    category: 'OSHA y seguridad', 
    description: 'Guía oficial de OSHA para prácticas de higiene industrial y evaluación de riesgos en el trabajo.', 
    hours: '16 horas', level: 'Nivel Avanzado', badge: 'OSHA #521', image: osha521
  },
  { 
    id: 'osha-3015', 
    title: 'Excavation, Trenching and Soil Mechanics', 
    category: 'OSHA y seguridad', 
    description: 'Normativa para trabajos de excavación, zanjas y análisis de mecánica de suelos.', 
    hours: '24 horas', level: 'Nivel Avanzado', badge: 'OSHA #3015', image: osha3015
  },
  { 
    id: 'atp-190', 
    title: 'Update for Safety and Health Authorized Trainers', 
    category: 'OSHA y seguridad', 
    description: 'Actualización oficial para entrenadores autorizados en seguridad y salud.', 
    hours: '16 horas', level: 'Instructor', badge: 'ATP 190', image: atp191update
  },
  { 
    id: 'csho-const', 
    title: 'Certified Safety & Health Official (Construction)', 
    category: 'OSHA y seguridad', 
    description: 'Certificación oficial de seguridad y salud enfocada en la industria de la construcción.', 
    hours: '40 horas', level: 'Especialista', badge: 'CSHO', image: csho1t 
  },
  { 
    id: 'csho-gen', 
    title: 'Certified Safety & Health Official (General Industry)', 
    category: 'OSHA y seguridad', 
    description: 'Certificación oficial de seguridad y salud para la industria general.', 
    hours: '40 horas', level: 'Especialista', badge: 'CSHO', image: sindustrial 
  },
  { 
    id: 'ssh-fire', 
    title: 'Specialist in Safety & Health: Fire Safety', 
    category: 'OSHA y seguridad', 
    description: 'Especialización en normativas de seguridad contra incendios.', 
    hours: '24 horas', level: 'Especialista', badge: 'SSH', image: 'https://images.unsplash.com/photo-1605814511210-917eb572cc85?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'ssh-disaster', 
    title: 'Specialist in Safety & Health: Disaster Response', 
    category: 'OSHA y seguridad', 
    description: 'Especialización en normativas de respuesta ante desastres.', 
    hours: '24 horas', level: 'Especialista', badge: 'SSH', image: 'https://images.unsplash.com/photo-1541888087525-071de60f8113?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'ssh-const', 
    title: 'Specialist in Safety & Health: Construction', 
    category: 'OSHA y seguridad', 
    description: 'Especialización en seguridad y salud para la industria constructora.', 
    hours: '24 horas', level: 'Especialista', badge: 'SSH', image: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'atp-191-rec', 
    title: 'Recordkeeping', 
    category: 'OSHA y seguridad', 
    description: 'Fundamentos de mantenimiento de registros de seguridad.', 
    hours: '4 horas', level: 'Nivel Básico', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800' 
  },

  // ==========================================
  // SEGURIDAD INDUSTRIAL Y OPERATIVA
  // ==========================================
  { 
    id: 'atp-191-8gen', 
    title: '8-Hour General Industry', 
    category: 'Seguridad industrial', 
    description: 'Programa de 8 horas sobre fundamentos de seguridad para la industria general.', 
    hours: '8 horas', level: 'Nivel Básico', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'atp-191-8const', 
    title: '8-Hour Construction Industry', 
    category: 'Seguridad industrial', 
    description: 'Programa de 8 horas sobre seguridad básica en construcción.', 
    hours: '8 horas', level: 'Nivel Básico', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'atp-191-24gen', 
    title: '24-Hour General Industry', 
    category: 'Seguridad industrial', 
    description: 'Capacitación exhaustiva de 24 horas en seguridad para la industria general.', 
    hours: '24 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'atp-191-24const', 
    title: '24-Hour Construction Industry', 
    category: 'Seguridad industrial', 
    description: 'Capacitación integral de 24 horas para seguridad en el sector construcción.', 
    hours: '24 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1541888087525-071de60f8113?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'atp-191-weld', 
    title: 'Welding & Cutting', 
    category: 'Seguridad industrial', 
    description: 'Protocolos de seguridad para trabajos en caliente, soldadura y corte.', 
    hours: '8 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'atp-191-tool', 
    title: 'Tool Safety', 
    category: 'Seguridad industrial', 
    description: 'Manejo seguro e inspección de herramientas manuales y de potencia.', 
    hours: '4 horas', level: 'Nivel Básico', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'atp-191-silica', 
    title: 'Silica', 
    category: 'Seguridad industrial', 
    description: 'Prevención y control de exposición a sílice cristalina respirable.', 
    hours: '8 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'atp-191-ppe', 
    title: 'Personal Protective Equipment (PPE)', 
    category: 'Seguridad industrial', 
    description: 'Selección, uso y mantenimiento del Equipo de Protección Personal.', 
    hours: '4 horas', level: 'Nivel Básico', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'atp-191-jha', 
    title: 'Job Hazard Analysis', 
    category: 'Seguridad industrial', 
    description: 'Metodología para identificar peligros y establecer controles por tarea (AST/JHA).', 
    hours: '8 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'atp-191-ladders', 
    title: 'Ladders', 
    category: 'Seguridad industrial', 
    description: 'Uso seguro, inspección y normatividad para el trabajo con escaleras portátiles y fijas.', 
    hours: '4 horas', level: 'Nivel Básico', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'atp-191-loto', 
    title: 'Lockout/Tagout', 
    category: 'Seguridad industrial', 
    description: 'Procedimientos de bloqueo y etiquetado para el control de energías peligrosas.', 
    hours: '8 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'atp-191-mach', 
    title: 'Machine Operation', 
    category: 'Seguridad industrial', 
    description: 'Operación segura de maquinaria y protección de puntos de operación (Machine Guarding).', 
    hours: '8 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'atp-191-ghs', 
    title: 'Hazard Communication (GHS)', 
    category: 'Seguridad industrial', 
    description: 'Sistema Globalmente Armonizado (GHS) para la comunicación de riesgos químicos.', 
    hours: '8 horas', level: 'Nivel Básico', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'atp-191-elec', 
    title: 'Electrical', 
    category: 'Seguridad industrial', 
    description: 'Reconocimiento y prevención de riesgos eléctricos en el lugar de trabajo.', 
    hours: '8 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'atp-191-equip', 
    title: 'Equipment Inspections', 
    category: 'Seguridad industrial', 
    description: 'Protocolos sistemáticos para la inspección de equipos y maquinaria.', 
    hours: '8 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'atp-191-invest', 
    title: 'Accident/Incident Investigation', 
    category: 'Seguridad industrial', 
    description: 'Técnicas de investigación, análisis de causa raíz y prevención de recurrencia.', 
    hours: '16 horas', level: 'Nivel Avanzado', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800' 
  },

  // ==========================================
  // EMERGENCIAS Y MATERIALES PELIGROSOS
  // ==========================================
  { 
    id: 'hm-242', 
    title: 'HAZWOPER Annual Refresher', 
    category: 'Emergencias', 
    description: 'Actualización anual para operaciones con residuos peligrosos y respuesta a emergencias.', 
    hours: '8 horas', level: 'Nivel Avanzado', badge: 'HM 242', image: 'https://images.unsplash.com/photo-1605814511210-917eb572cc85?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'atp-191-fire', 
    title: 'Fire & Safety', 
    category: 'Emergencias', 
    description: 'Prevención de incendios, uso de extintores y evacuación segura.', 
    hours: '8 horas', level: 'Nivel Básico', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1605814511210-917eb572cc85?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'atp-191-disaster', 
    title: 'Disaster Response', 
    category: 'Emergencias', 
    description: 'Preparación y respuesta táctica ante desastres naturales e industriales.', 
    hours: '16 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1541888087525-071de60f8113?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'atp-191-eap', 
    title: 'Emergency Action & Fire Prevention Plans', 
    category: 'Emergencias', 
    description: 'Desarrollo e implementación de planes de acción de emergencia y prevención.', 
    hours: '8 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1605814511210-917eb572cc85?auto=format&fit=crop&q=80&w=800' 
  },

  // ==========================================
  // RESCATE Y ALTURAS
  // ==========================================
  { 
    id: 'atp-191-fall-insp', 
    title: 'Fall Protection Equipment Inspection', 
    category: 'Rescate y alturas', 
    description: 'Inspección detallada y mantenimiento de arneses, líneas de vida y conectores.', 
    hours: '8 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'atp-191-fall', 
    title: 'Fall Protection', 
    category: 'Rescate y alturas', 
    description: 'Sistemas de protección contra caídas, cálculo de claridad y técnicas de anclaje.', 
    hours: '16 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1541888087525-071de60f8113?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 'atp-191-confined', 
    title: 'Confined Space', 
    category: 'Rescate y alturas', 
    description: 'Identificación de riesgos, monitoreo atmosférico y protocolos de rescate en espacios confinados.', 
    hours: '16 horas', level: 'Nivel Avanzado', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?auto=format&fit=crop&q=80&w=800' 
  },

  // ==========================================
  // MÉDICO Y SALUD OCUPACIONAL
  // ==========================================
  { 
    id: 'atp-191-blood', 
    title: 'Bloodborne Pathogens', 
    category: 'Médico', 
    description: 'Control de exposición y prevención de transmisión de patógenos de transmisión sanguínea.', 
    hours: '4 horas', level: 'Nivel Básico', badge: 'ATP 191', image: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=800' 
  },
]

function CourseCard({ course, featured }: { course: typeof courses[0], featured?: boolean }) {
  const isOrange = !course.badge.includes('OSHA');

  return (
    <article 
      className={`group relative cursor-pointer overflow-hidden rounded-[4px] border border-[#d9e2e8] bg-white/75 shadow-[0_7px_17px_rgba(25,52,69,.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(25,52,69,.1)] ${
        featured ? 'min-h-[405px] border-0 bg-[#071522] text-white' : ''
      }`}
    >
      {/* Contenedor de la Imagen */}
      <div 
        className={`relative h-[84px] bg-cover bg-center ${
          featured ? 'h-full min-h-[405px] bg-[position:43%_center]' : ''
        }`} 
        style={{ backgroundImage: `url(${course.image})` }}
      >
        {/* Badge (Etiqueta superior izquierda) */}
        <span 
          className={`absolute left-2.5 top-2.5 z-20 rounded-[3px] px-2 py-1 text-[8px] font-bold text-white ${
            isOrange ? 'bg-[#ff7414]' : 'bg-[#0c3856]'
          }`}
        >
          {course.badge}
        </span>
        
        {/* ======================================================
            GRADIENTE PARA LA TARJETA DESTACADA (Más oscuro abajo)
        ====================================================== */}
        {featured && (
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#05121d] via-[#05121d]/80 to-transparent" />
        )}
      </div>
      
      {/* Contenido Tarjeta Normal */}
      {!featured && (
        <div className="p-[11px_10px_10px]">
          <p className="text-[9px] tracking-[.2px] text-[#60778a]">{course.category}</p>
          <h2 className="my-[5px] text-[11px] font-bold leading-[1.22] text-[#102235] line-clamp-2">{course.title}</h2>
          <p className="min-h-[27px] text-[8.5px] leading-[1.35] text-[#587084] line-clamp-2">{course.description}</p>
          <div className="mt-3.5 flex items-center gap-3.5 border-t border-[#e4eaed] pt-[9px] text-[8px] text-[#59788e]">
            <span className="flex items-center gap-1 whitespace-nowrap"><Clock3 size={14} />{course.hours}</span>
            <span className="flex items-center gap-1 whitespace-nowrap"><BookOpen size={14} />{course.level.replace('Nivel ', '')}</span>
            <ArrowRight size={16} className="ml-auto text-[#2d536a]" />
          </div>
        </div>
      )}
      
      {/* Contenido Tarjeta Destacada (Flotando sobre el gradiente oscuro) */}
      {featured && (
        <div className="absolute bottom-[22px] left-[23px] right-[23px] z-20">
          <p className="text-[9px] text-[#eaf0f3]">{course.category}</p>
          <h2 className="my-[9px] max-w-[250px] text-[23px] font-bold leading-[.98] text-white">{course.title}</h2>
          <p className="mb-4 max-w-[290px] text-[10px] leading-[1.4] text-[#e0e8eb] line-clamp-2">{course.description}</p>
          <div className="flex gap-3 border-t border-white/20 py-3 text-[8px] text-[#e6ebed]">
            <span className="flex items-center gap-1"><Clock3 size={14} className="text-[#ff7414]" />{course.hours}</span>
            <span className="flex items-center gap-1"><BookOpen size={14} className="text-[#ff7414]" />{course.level.replace('Nivel ', '')}</span>
            <span className="flex items-center gap-1"><Award size={14} className="text-[#ff7414]" />Certificación incluida</span>
          </div>
          <button className="flex items-center gap-3 rounded-[4px] border-0 bg-[#ff7414] hover:bg-[#e66a0c] transition-colors px-3.5 py-[9px] text-[9px] font-bold text-white">
            VER DETALLES <ArrowRight size={15} />
          </button>
        </div>
      )}
    </article>
  )
}

const categories = ['Todos', 'OSHA y seguridad', 'Seguridad industrial', 'Emergencias', 'Rescate y alturas', 'Médico']

export default function Page() {
  
  // 1. Estados básicos
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');
  
  // 2. Estado para el curso seleccionado (Tarjeta Gigante)
  const [selected, setSelected] = useState<typeof courses[0]>(courses[0]); 
  
  // 3. Estados para la Paginación
  const [page, setPage] = useState(1);
  const pageSize = 6;

  // 4. Lógica de Filtrado (por categoría y texto)
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchCategory = activeCategory === 'Todos' || course.category.toLowerCase() === activeCategory.toLowerCase();
      const matchQuery = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || course.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [activeCategory, searchQuery]);

  // 5. Cálculos de Paginación
  const pageCount = Math.max(1, Math.ceil(filteredCourses.length / pageSize));
  const visibleCourses = filteredCourses.slice((page - 1) * pageSize, page * pageSize);

  return (
    // ¡FIX VITAL! El overflow-x-hidden en el main previene absolutamente cualquier scroll horizontal
    <main className="w-full bg-white font-['Plus_Jakarta_Sans'] text-slate-900 pb-20 overflow-x-hidden">
      
      {/* =========================================================
          1. HERO SECTION 
      ========================================================= */}
      <section className="relative w-full bg-white flex flex-col lg:block mt-20">
        <div className="relative lg:absolute lg:top-0 lg:right-0 w-full lg:w-[58%] h-[300px] sm:h-[400px] lg:h-full z-0 shrink-0">
          <img 
            src={imgHero} 
            alt="Capacitación Industrial" 
            className="absolute inset-0 w-full h-full object-cover object-center"
            fetchPriority="high" 
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
          {/* <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/5 via-5% to-transparent z-20" /> */}
        </div>

        <div className="relative z-30 w-full max-w-[1400px] mx-auto px-6 lg:px-8 py-10 lg:py-16 flex items-center lg:min-h-[600px]">
          <div className="w-full lg:w-[50%] xl:w-[45%]">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 mt-2 lg:mt-0">
              <span className="text-[#F58220]">CAPACITACIÓN</span> <span className="text-[#004a99]">INDUSTRIAL</span>
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-black uppercase text-[#004a99] leading-[1.05] tracking-tight mb-6">
              Formación que prepara <br className="hidden sm:block"/>
              a tu equipo para actuar
            </h1>
            <p className="text-slate-600 font-['IBM_Plex_Sans'] text-sm lg:text-base leading-relaxed mb-8 lg:mb-10 max-w-lg">
              Cursos especializados en seguridad industrial, protección civil y atención prehospitalaria, diseñados para fortalecer la prevención, reducir riesgos y salvar vidas en el entorno laboral.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10 lg:mb-12">
              <button className="bg-[#F58220] hover:bg-[#e67515] text-white px-6 py-4 lg:py-3.5 rounded text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#F58220]/20">
                VER NUESTROS CURSOS <ArrowRight size={16} />
              </button>
              <button className="bg-white border border-slate-300 hover:border-[#004a99] text-[#004a99] px-6 py-4 lg:py-3.5 rounded text-xs font-bold uppercase tracking-widest transition-colors text-center">
                HABLAR CON UN ASESOR
              </button>
            </div>
            
            <div className="grid grid-cols-2 lg:flex lg:flex-wrap items-start lg:items-center gap-6 lg:gap-12">
              <div>
                <p className="font-bold text-[#004a99] text-lg flex items-center gap-2">
                  <ShieldCheck size={18} className="text-[#F58220] lg:text-slate-300"/> 12+
                </p>
                <p className="text-[11px] text-slate-500 mt-1">cursos disponibles</p>
              </div>
              <div>
                <p className="font-bold text-[#004a99] text-lg flex items-center gap-2">
                  <Users size={18} className="text-[#F58220] lg:text-slate-300"/> +500
                </p>
                <p className="text-[11px] text-slate-500 mt-1">empresas capacitadas</p>
              </div>
              <div className="col-span-2 lg:col-span-1 border-t border-slate-200 lg:border-0 pt-4 lg:pt-0">
                <p className="font-bold text-[#004a99] text-lg flex items-center gap-1">
                  <Award size={18} className="text-[#F58220] mr-1"/> 4.9/5
                </p>
                <p className="text-[11px] text-slate-500 mt-1">satisfacción de clientes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. RIBBON DE CARACTERÍSTICAS
      ========================================================= */}
      <div className="border-y border-slate-200 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-6 flex flex-wrap justify-between items-center gap-6">
          {[
            { icon: BookOpen, title: '12+ cursos', sub: 'en diferentes áreas de seguridad' },
            { icon: ShieldCheck, title: 'Certificación incluida', sub: 'en todos los cursos' },
            { icon: Clock3, title: 'Modalidad presencial', sub: 'y virtual' },
            { icon: Users, title: 'Instructores especializados', sub: 'con experiencia en campo' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="text-[#004a99]"><item.icon size={24} strokeWidth={1.5} /></div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="text-xs text-slate-500">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

       {/* =========================================================
          3. CATÁLOGO MASTER-DETAIL
      ========================================================= */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-8 py-20" id="cursos">
        
        {/* ¡FIX 1! Cambiamos 1fr a minmax(0,1fr) para que el lado derecho no desborde la pantalla */}
        <header className="mb-10 grid grid-cols-1 lg:grid-cols-[370px_minmax(0,1fr)] items-end gap-6 max-[900px]:grid-cols-1 max-[900px]:gap-[22px]">
          <div>
            <p className="text-[10px] font-bold tracking-[4px] text-[#ff7414]">
              <span className="mr-2.5 inline-block h-[11px] w-[3px] translate-y-0.5 bg-[#ff7414]" />
              CURSOS
            </p>
            <h1 className="my-2 text-[31px] font-bold leading-[.97] tracking-[-.8px] text-[#0a1727] max-[520px]:text-[28px]">
              Formación que<br />
              <strong className="font-extrabold text-[#004a99]">construye seguridad</strong>
            </h1>
            <p className="text-[11px] leading-[1.4] text-[#5e7488]">
              Capacítate con programas diseñados para fortalecer tus habilidades,<br className="max-[520px]:hidden" /> prevenir riesgos y salvar vidas en el entorno laboral.
            </p>
          </div>

          {/* ¡FIX 2! min-w-0 aquí es OBLIGATORIO para que el Flex no rompa el Grid */}
          <div className="flex items-center justify-between gap-[18px] max-[900px]:flex-col-reverse max-[900px]:items-stretch min-w-0">
            {/* ¡FIX 3! min-w-0 a la etiqueta <nav> para permitir el scroll horizontal seguro */}
            <nav className="flex flex-1 items-center gap-[3px] overflow-x-auto border-b border-[#dce3e5] min-w-0 pb-1">
              {categories.map((category) => (
                <button 
                  key={category} 
                  className={`whitespace-nowrap border-0 px-[13px] pb-3 pt-2 text-[10px] font-semibold transition-colors ${
                    activeCategory === category 
                      ? 'rounded-t-[4px] bg-[#071522] text-white shadow-[inset_0_-2px_#ff7414]' 
                      : 'bg-transparent text-[#263d50] hover:bg-slate-50'
                  }`} 
                  onClick={() => { 
                    setActiveCategory(category); 
                    setPage(1);
                  }}
                >
                  {category}
                </button>
              ))}
            </nav>
            <label className="flex h-[36px] w-[242px] items-center gap-2 rounded-[6px] border border-[#d6e0e5] bg-[#fafbfb] px-[11px] text-[#5d778d] max-[900px]:w-full focus-within:border-[#ff7414] transition-colors shrink-0">
              <Search size={15} />
              <input 
                value={searchQuery} 
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setPage(1); 
                }} 
                placeholder="Buscar por nombre o palabra..." 
                aria-label="Buscar cursos" 
                className="w-full min-w-0 border-0 bg-transparent text-[11px] text-[#102235] outline-none placeholder:text-[#7a8e9e]" 
              />
            </label>
          </div>
        </header>

        {/* ¡FIX 4! Nuevamente, minmax(0,1fr) evita que las tarjetas rompan su contenedor */}
        <div className="grid grid-cols-1 lg:grid-cols-[400px_minmax(0,1fr)] xl:grid-cols-[500px_minmax(0,1fr)] gap-[23px] items-start">
          
          <div 
            className="min-w-0 rounded-[4px] outline-none focus-visible:shadow-[0_0_0_3px_rgba(255,126,24,.45)] cursor-pointer h-full min-h-[580px] [&>article]:h-full" 
            role="button" 
            tabIndex={0} 
            onClick={() => setSelected(selected)} 
          >
            <CourseCard course={selected} featured={true} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-[18px]">
            {visibleCourses.map((course) => (
              <div key={course.id} onClick={() => setSelected(course)}>
                <CourseCard course={course} featured={false} />
              </div>
            ))}
          </div>

        </div>

        {pageCount > 1 && (
          <nav aria-label="Paginación de cursos" className="mt-8 flex items-center justify-end gap-2">
            <button 
              disabled={page === 1} 
              onClick={() => setPage((current) => Math.max(1, current - 1))} 
              className="flex h-8 w-8 items-center justify-center rounded border border-[#d6e0e5] bg-white text-[#294157] transition hover:border-[#ff7414] disabled:cursor-not-allowed disabled:opacity-40" 
            >
              <ArrowLeft size={14} />
            </button>
            
            {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
              <button 
                key={pageNumber} 
                onClick={() => setPage(pageNumber)} 
                aria-current={page === pageNumber ? 'page' : undefined} 
                className={`h-8 min-w-[32px] rounded px-2 text-[11px] font-semibold transition-colors ${
                  page === pageNumber 
                    ? 'bg-[#071522] text-white' 
                    : 'border border-[#d6e0e5] bg-white text-[#294157] hover:border-[#ff7414]'
                }`}
              >
                {pageNumber}
              </button>
            ))}

            <button 
              disabled={page === pageCount} 
              onClick={() => setPage((current) => Math.min(pageCount, current + 1))} 
              className="flex h-8 w-8 items-center justify-center rounded border border-[#d6e0e5] bg-white text-[#294157] transition hover:border-[#ff7414] disabled:cursor-not-allowed disabled:opacity-40" 
            >
              <ArrowRight size={14} />
            </button>
          </nav>
        )}

      </section>   

      {/* =========================================================
          4. METODOLOGÍA / OPERACIONES REALES
      ========================================================= */}
      <section className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
          
          <div className="w-full lg:w-1/3">
            <p className="text-[#F58220] text-[10px] font-bold uppercase tracking-widest mb-2">NUESTRA METODOLOGÍA</p>
            <h2 className="text-3xl font-semibold text-[#0a1122] mb-4">
              Capacitación diseñada <br/>para operaciones reales
            </h2>
            <p className="text-slate-500 text-sm">
              No solo impartimos teoría, formamos personas listas para actuar en entornos de alto riesgo.
            </p>
          </div>

          {/* ¡FIX 5! En 1200px (lg), 4 columnas se veían muy apretadas. Ahora es lg:grid-cols-2 y xl:grid-cols-4 para que respire */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: 'Prevención de riesgos', desc: 'Identifica, evalúa y controla los riesgos antes de que se conviertan en incidentes.' },
              { icon: Stethoscope, title: 'Respuesta ante emergencias', desc: 'Entrenamiento práctico para actuar con rapidez y seguridad en situaciones críticas.' },
              { icon: FileText, title: 'Cumplimiento y documentación', desc: 'Mantén a tu empresa alineada a la normativa y con registros completos.' },
              { icon: Briefcase, title: 'Entrenamiento práctico', desc: 'Simulaciones y escenarios reales para un aprendizaje efectivo y aplicable.' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <div className="text-[#F58220] mb-3"><item.icon size={28} strokeWidth={1.5} /></div>
                <h3 className="font-semibold text-slate-900 text-sm mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs font-['IBM_Plex_Sans'] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CtaSection
        badge="ÚNETE AL EQUIPO"
        titlePart1="Forma parte de un"
        highlightText="equipo preparado"
        description="La seguridad no es un accidente, es una decisión. Capacítate con AMPREH y marca la diferencia en tu organización."
        imageUrl={img4}
        primaryButtonText="VER NUESTROS CURSOS"
        secondaryButtonText="HABLAR CON UN ASESOR"
      />
      
    </main>
  )
}