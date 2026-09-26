'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, Award,  Clock3, FileText, Search, ShieldCheck, Stethoscope, Users, Briefcase, BookOpen, ArrowLeft, MessageCircle, CheckCircle2 } from 'lucide-react'
import CtaSection from '../../components/CtaSection'

// IMÁGENES BASE (Intactas)
import imgHero from '../../assets/cursos/hero.png'
import img4 from '../../assets/nosotros/rescate-cta.png'

// IMPORTS ORIGINALES (Sin espacios, conservaron su nombre exacto)
import recordkeep from '../../assets/cursos/RecordkeepingRuleSeminar.png'
import osha521 from '../../assets/cursos/OSHA-521-osha.international.jpg'
import osha3015 from '../../assets/cursos/3015.jpg'
import atp191update from '../../assets/cursos/UpdateforSafety.jpg'
import csho1t from '../../assets/cursos/salud-2-construccion.jpg'
import sindustrial from '../../assets/cursos/seguridad-industria.jpg'
import atpsilica from '../../assets/cursos/Silica.jpg'
import atpladders from '../../assets/cursos/Ladders.jpg'
import atploto from '../../assets/cursos/LockoutTagout.jpg'
import atpelec from '../../assets/cursos/Electrical.jpg'
import atp191rec from '../../assets/cursos/Recordkeeping.jpg'

// NUEVOS IMPORTS CORREGIDOS PARA GOOGLE CLOUD RUN (kebab-case)
import sshFire from '../../assets/cursos/specialist-in-safety-and-health-fire-safety.jpg'
import sshDisaster from '../../assets/cursos/specialist-in-safety-and-health-disaster-response.jpg'
import sshConst from '../../assets/cursos/specialist-in-safety-and-health-construction.jpg'

import atp8gen from '../../assets/cursos/8-hour-general-industry.jpg'
import atp8const from '../../assets/cursos/8-hour-construction-industry.jpg'
import atp24gen from '../../assets/cursos/24-hour-general-industry-2.jpg'
import atp24const from '../../assets/cursos/24-hour-construction-industry.jpg'
import atpweld from '../../assets/cursos/welding-and-cutting.jpg'
import atptool from '../../assets/cursos/tool-safety.jpg'
import atpppe from '../../assets/cursos/personal-protective-equipment-ppe.jpg'
import atpjha from '../../assets/cursos/job-hazard-analysis.jpg'
import atpmach from '../../assets/cursos/machine-operation.jpg'
import atpghs from '../../assets/cursos/hazard-communication.jpg'
import atpequip from '../../assets/cursos/equipment-inspections.jpg'
import atpinvest from '../../assets/cursos/accidentincident-investigation.jpg'

import hm242 from '../../assets/cursos/hazwoper-annual-refresher.jpg'
import atpfire from '../../assets/cursos/fire-and-safety.jpg'
import atpdisaster from '../../assets/cursos/disaster-response.jpg'
import atpeap from '../../assets/cursos/emergency-action-and-fire-prevention.jpg'

import atpfallinsp from '../../assets/cursos/fall-protection-equipment.jpg'
import atpfall from '../../assets/cursos/fall-protection.jpg'
import atpconfined from '../../assets/cursos/confined-space.jpg'

import atpblood from '../../assets/cursos/bloodborne-pathogens.jpg'
import { useLocation } from 'react-router-dom'

// =========================================================
// DATOS DE CURSOS
// =========================================================
type Course = { 
  id: string; 
  title: string; 
  category: string; 
  description: string; 
  hours: string; 
  level: string; 
  badge: string; 
  image: any; 
  topics?: string[]; 
}



const courses: Course[] = [
  // ==========================================
  // OSHA, CSHO, SSH Y NORMATIVA
  // ==========================================
  { 
    id: 'osha-7845', 
    title: 'Recordkeeping Rule Seminar', 
    category: 'OSHA y seguridad', 
    description: 'Seminario oficial sobre reglas de mantenimiento de registros e informes de incidentes de acuerdo al estándar 29 CFR 1904.', 
    hours: '8 horas', level: 'Nivel Intermedio', badge: 'OSHA #7845', image: recordkeep,
    topics: ['Requisitos de mantenimiento de registros OSHA', 'Instrucciones de los formularios 300, 300A y 301', 'Reporte de fatalidades y hospitalizaciones', 'Reglas de privacidad y casos especiales']
  },
  { 
    id: 'osha-521', 
    title: 'OSHA Guide to Industrial Hygiene', 
    category: 'OSHA y seguridad', 
    description: 'Guía oficial para el reconocimiento, evaluación y control de riesgos químicos, físicos y biológicos en el trabajo.', 
    hours: '16 horas', level: 'Nivel Avanzado', badge: 'OSHA #521', image: osha521,
    topics: ['Límites de exposición permisibles (PEL)', 'Protocolos y estrategias de muestreo', 'Controles de ingeniería y ventilación', 'Desarrollo de programas de salud laboral']
  },
  { 
    id: 'osha-3015', 
    title: 'Excavation, Trenching and Soil Mechanics', 
    category: 'OSHA y seguridad', 
    description: 'Normativa práctica sobre mecánica de suelos y estabilidad de taludes apuntalados y no apuntalados.', 
    hours: '24 horas', level: 'Nivel Avanzado', badge: 'OSHA #3015', image: osha3015,
    topics: ['Clasificación y análisis de mecánica de suelos', 'Tipos de apuntalamiento (madera e hidráulico)', 'Uso de penetrómetros y medidores de corte', 'Sistemas de protección para zanjas']
  },
  { 
    id: 'atp-190', 
    title: 'Update for Authorized Trainers', 
    category: 'OSHA y seguridad', 
    description: 'Actualización oficial de normativas e interpretaciones para entrenadores autorizados en seguridad y salud.', 
    hours: '16 horas', level: 'Instructor', badge: 'ATP 190', image: atp191update,
    topics: ['Actualización de estándares OSHA', 'Requisitos del programa Outreach Trainer', 'Técnicas efectivas de instrucción', 'Nuevas políticas de cumplimiento']
  },
  { 
    id: 'csho-const', 
    title: 'Certified Safety & Health Official (Construction)', 
    category: 'OSHA y seguridad', 
    description: 'Certificación profesional integral diseñada para elevar la experiencia en riesgos de la industria constructora.', 
    hours: '40 horas', level: 'Especialista', badge: 'CSHO', image: csho1t,
    topics: ['Normas generales OSHA de construcción', 'Prevención de atropellos y equipos pesados', 'Auditorías en sitios de construcción', 'Responsabilidades del contratista general']
  },
  { 
    id: 'csho-gen', 
    title: 'Certified Safety & Health Official (General)', 
    category: 'OSHA y seguridad', 
    description: 'Certificación profesional orientada a prevenir enfermedades o lesiones causadas por factores ergonómicos y físicos.', 
    hours: '40 horas', level: 'Especialista', badge: 'CSHO', image: sindustrial,
    topics: ['Normativas de la industria general', 'Investigación de incidentes ocupacionales', 'Auditorías de cumplimiento', 'Desarrollo de planes de corrección']
  },
  { 
    id: 'ssh-fire', 
    title: 'Specialist in Safety & Health: Fire Safety', 
    category: 'OSHA y seguridad', 
    description: 'Especialización en evaluación y normativas de seguridad contra incendios.', 
    hours: '24 horas', level: 'Especialista', badge: 'SSH', image: sshFire,
    topics: ['Inspección de equipos de prevención', 'Evaluación de rutas de evacuación', 'Sistemas de alarma y extinción', 'Normativas NFPA aplicadas']
  },
  { 
    id: 'ssh-disaster', 
    title: 'Specialist in Safety & Health: Disaster Response', 
    category: 'OSHA y seguridad', 
    description: 'Especialización en preparación y coordinación táctica de respuesta ante desastres.', 
    hours: '24 horas', level: 'Especialista', badge: 'SSH', image: sshDisaster,
    topics: ['Mantenimiento de planes de respuesta', 'Simulacros de evacuación complejos', 'Coordinación con servicios médicos', 'Sistemas de comando de incidentes']
  },
  { 
    id: 'ssh-const', 
    title: 'Specialist in Safety & Health: Construction', 
    category: 'OSHA y seguridad', 
    description: 'Especialización inicial orientada a comprender los principios básicos de seguridad en construcción.', 
    hours: '24 horas', level: 'Especialista', badge: 'SSH', image: sshConst,
    topics: ['Fundamentos de seguridad en obra', 'Inspección de herramientas de potencia', 'Análisis de tareas críticas (AST)', 'Control de contratistas']
  },
  { 
    id: 'atp-191-rec', 
    title: 'Recordkeeping Fundamentals', 
    category: 'OSHA y seguridad', 
    description: 'Fundamentos básicos de mantenimiento de registros de seguridad y salud en el lugar de trabajo.', 
    hours: '4 horas', level: 'Nivel Básico', badge: 'ATP 191', image: atp191rec,
    topics: ['Identificación de lesiones registrables', 'Llenado de bitácoras básicas', 'Diferencia entre primeros auxilios y tratamiento', 'Conservación de documentos']
  },

  // ==========================================
  // SEGURIDAD INDUSTRIAL Y OPERATIVA
  // ==========================================
  { 
    id: 'atp-191-8gen', 
    title: '8-Hour General Industry', 
    category: 'Seguridad industrial', 
    description: 'Programa introductorio de 8 horas sobre fundamentos de seguridad para trabajadores de la industria general.', 
    hours: '8 horas', level: 'Nivel Básico', badge: 'ATP 191', image: atp8gen,
    topics: ['Derechos de los trabajadores', 'Riesgos eléctricos y de incendios', 'Uso básico de EPP', 'Prevención de resbalones y caídas']
  },
  { 
    id: 'atp-191-8const', 
    title: '8-Hour Construction Industry', 
    category: 'Seguridad industrial', 
    description: 'Programa introductorio de 8 horas enfocado en los peligros más comunes en el sector construcción.', 
    hours: '8 horas', level: 'Nivel Básico', badge: 'ATP 191', image: atp8const,
    topics: ['Los cuatro grandes peligros (Focus Four)', 'Conciencia sobre andamios', 'Riesgos de excavaciones simples', 'Equipo de protección personal en obra']
  },
  { 
    id: 'atp-191-24gen', 
    title: '24-Hour General Industry', 
    category: 'Seguridad industrial', 
    description: 'Capacitación exhaustiva en estándares de seguridad operativa para supervisores de la industria general.', 
    hours: '24 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: atp24gen,
    topics: ['Guarda de maquinarias', 'Manejo de materiales peligrosos', 'Ergonomía industrial', 'Programas de seguridad integrales']
  },
  { 
    id: 'atp-191-24const', 
    title: '24-Hour Construction Industry', 
    category: 'Seguridad industrial', 
    description: 'Capacitación integral para supervisores y encargados de seguridad en el sector construcción.', 
    hours: '24 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: atp24const,
    topics: ['Grúas y aparejos básicos', 'Peligros de herramientas eléctricas', 'Señalización y barricadas', 'Inspección de sitios de trabajo']
  },
  { 
    id: 'atp-191-weld', 
    title: 'Welding & Cutting', 
    category: 'Seguridad industrial', 
    description: 'Protocolos de seguridad para trabajos en caliente, soldadura, corte y prevención de incendios.', 
    hours: '8 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: atpweld,
    topics: ['Permisos de trabajo en caliente', 'Peligros de humos metálicos', 'Cilindros de gas comprimido', 'Vigilancia de incendios (Fire Watch)']
  },
  { 
    id: 'atp-191-tool', 
    title: 'Tool Safety', 
    category: 'Seguridad industrial', 
    description: 'Manejo seguro e inspección de herramientas manuales, neumáticas y de potencia.', 
    hours: '4 horas', level: 'Nivel Básico', badge: 'ATP 191', image: atptool,
    topics: ['Inspección previa al uso', 'Peligros de herramientas defectuosas', 'Interruptores y guardas de seguridad', 'Manejo de herramientas de impacto']
  },
  { 
    id: 'atp-191-silica', 
    title: 'Silica Exposure Control', 
    category: 'Seguridad industrial', 
    description: 'Prevención y control de exposición a sílice cristalina respirable en construcción e industria.', 
    hours: '8 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: atpsilica,
    topics: ['Reconocimiento de materiales con sílice', 'Sistemas de supresión por agua', 'Uso de aspiradoras HEPA', 'Planes de control de exposición']
  },
  { 
    id: 'atp-191-ppe', 
    title: 'Personal Protective Equipment', 
    category: 'Seguridad industrial', 
    description: 'Evaluación, selección, uso y mantenimiento adecuado del Equipo de Protección Personal.', 
    hours: '4 horas', level: 'Nivel Básico', badge: 'ATP 191', image: atpppe,
    topics: ['Evaluación de peligros para EPP', 'Ajuste de protección respiratoria', 'Protección ocular y facial', 'Limitaciones del equipo']
  },
  { 
    id: 'atp-191-jha', 
    title: 'Job Hazard Analysis (JHA)', 
    category: 'Seguridad industrial', 
    description: 'Metodología paso a paso para identificar peligros y establecer controles en tareas específicas.', 
    hours: '8 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: atpjha,
    topics: ['Desglose de tareas paso a paso', 'Identificación de peligros latentes', 'Jerarquía de controles', 'Redacción de procedimientos seguros']
  },
  { 
    id: 'atp-191-ladders', 
    title: 'Ladder Safety', 
    category: 'Seguridad industrial', 
    description: 'Uso seguro, inspección y normatividad para el trabajo con escaleras portátiles y fijas.', 
    hours: '4 horas', level: 'Nivel Básico', badge: 'ATP 191', image: atpladders,
    topics: ['Regla de los 3 puntos de contacto', 'Ángulo correcto de colocación', 'Escaleras articuladas y de tijera', 'Identificación de daños estructurales']
  },
  { 
    id: 'atp-191-loto', 
    title: 'Lockout/Tagout (LOTO)', 
    category: 'Seguridad industrial', 
    description: 'Procedimientos de bloqueo y etiquetado para el control efectivo de energías peligrosas.', 
    hours: '8 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: atploto,
    topics: ['Aislamiento de energía térmica y mecánica', 'Tipos de candados y dispositivos', 'Procedimientos de liberación de energía', 'Roles de empleados afectados y autorizados']
  },
  { 
    id: 'atp-191-mach', 
    title: 'Machine Guarding', 
    category: 'Seguridad industrial', 
    description: 'Operación segura de maquinaria y métodos de protección de puntos de operación mecánicos.', 
    hours: '8 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: atpmach,
    topics: ['Prevención de amputaciones', 'Guardas fijas y enclavadas', 'Cortinas de luz y sensores', 'Peligros de partes rotativas']
  },
  { 
    id: 'atp-191-ghs', 
    title: 'Hazard Communication (GHS)', 
    category: 'Seguridad industrial', 
    description: 'Sistema Globalmente Armonizado (GHS) para la comunicación y comprensión de riesgos químicos.', 
    hours: '8 horas', level: 'Nivel Básico', badge: 'ATP 191', image: atpghs,
    topics: ['Lectura de hojas de datos de seguridad (SDS)', 'Nuevos pictogramas de peligro', 'Etiquetado secundario', 'Vías de exposición a químicos']
  },
  { 
    id: 'atp-191-elec', 
    title: 'Electrical Safety', 
    category: 'Seguridad industrial', 
    description: 'Reconocimiento y prevención de riesgos eléctricos, relámpagos de arco y descargas en el lugar de trabajo.', 
    hours: '8 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: atpelec,
    topics: ['Peligros de arco eléctrico (Arc Flash)', 'Distancias de aproximación seguras', 'Uso de interruptores GFCI', 'Calificación para trabajos eléctricos']
  },
  { 
    id: 'atp-191-equip', 
    title: 'Heavy Equipment Inspections', 
    category: 'Seguridad industrial', 
    description: 'Protocolos sistemáticos para la inspección y operación segura de equipos pesados y montacargas.', 
    hours: '8 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: atpequip,
    topics: ['Listas de verificación diarias', 'Puntos ciegos de maquinaria', 'Peligros de vuelco', 'Comunicación con señalizadores']
  },
  { 
    id: 'atp-191-invest', 
    title: 'Accident Investigation', 
    category: 'Seguridad industrial', 
    description: 'Técnicas de investigación de incidentes, análisis de causa raíz y prevención de recurrencia.', 
    hours: '16 horas', level: 'Nivel Avanzado', badge: 'ATP 191', image: atpinvest,
    topics: ['Protección de la escena del incidente', 'Técnicas de entrevista a testigos', 'Metodología de los 5 porqués', 'Redacción de informes finales']
  },

  // ==========================================
  // EMERGENCIAS Y MATERIALES PELIGROSOS
  // ==========================================
  { 
    id: 'hm-242', 
    title: 'HAZWOPER Annual Refresher', 
    category: 'Emergencias', 
    description: 'Actualización sobre tendencias, control, contención y confinamiento de residuos peligrosos (HAZWOPER).', 
    hours: '8 horas', level: 'Nivel Avanzado', badge: 'HM 242', image: hm242,
    topics: ['Sistema de Comando de Incidentes', 'Procedimientos de descontaminación', 'Líquidos inflamables y combustibles', 'Planificación de emergencias']
  },
  { 
    id: 'atp-191-fire', 
    title: 'Fire Prevention & Safety', 
    category: 'Emergencias', 
    description: 'Capacitación en uso práctico de extintores, clases de fuego y comportamiento durante evacuaciones.', 
    hours: '8 horas', level: 'Nivel Básico', badge: 'ATP 191', image: atpfire,
    topics: ['Uso del método PASS (Tirar, Apuntar, Apretar, Barrer)', 'El tetraedro del fuego', 'Riesgos de inhalación de humo', 'Almacenamiento de combustibles']
  },
  { 
    id: 'atp-191-disaster', 
    title: 'Disaster Response Tactics', 
    category: 'Emergencias', 
    description: 'Preparación operativa y respuesta táctica ante desastres naturales, derrames industriales y crisis.', 
    hours: '16 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: atpdisaster,
    topics: ['Evaluación rápida de daños', 'Operaciones de triaje básico', 'Búsqueda y rescate ligero', 'Psicología de emergencias']
  },
  { 
    id: 'atp-191-eap', 
    title: 'Emergency Action Plans', 
    category: 'Emergencias', 
    description: 'Diseño e implementación de rutas de escape, puntos de reunión y planes de acción de emergencia (EAP).', 
    hours: '8 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: atpeap,
    topics: ['Vías de salida y señalización', 'Sistemas de notificación a empleados', 'Asignación de coordinadores de piso', 'Procedimientos de refugio en el lugar']
  },

  // ==========================================
  // RESCATE Y ALTURAS
  // ==========================================
  { 
    id: 'atp-191-fall-insp', 
    title: 'Fall Equipment Inspection', 
    category: 'Rescate y alturas', 
    description: 'Inspección detallada para detectar desgaste, abrasión química o impacto en equipos de protección contra caídas.', 
    hours: '8 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: atpfallinsp,
    topics: ['Costuras e indicadores de impacto', 'Corrosión en conectores y ganchos', 'Pruebas de bloqueo de líneas retráctiles', 'Registro de mantenimiento']
  },
  { 
    id: 'atp-191-fall', 
    title: 'Fall Protection Systems', 
    category: 'Rescate y alturas', 
    description: 'Uso de sistemas personales de detención y restricción, cálculo de espacio libre y selección de anclajes.', 
    hours: '16 horas', level: 'Nivel Intermedio', badge: 'ATP 191', image: atpfall,
    topics: ['Componentes de sistemas de detención (PFAS)', 'Sistemas pasivos (barandillas y redes)', 'Cálculo de distancia de caída libre', 'Planes de rescate en altura']
  },
  { 
    id: 'atp-191-confined', 
    title: 'Confined Space Entry', 
    category: 'Rescate y alturas', 
    description: 'Identificación de riesgos con permiso requerido, monitoreo atmosférico y protocolos de extracción.', 
    hours: '16 horas', level: 'Nivel Avanzado', badge: 'ATP 191', image: atpconfined,
    topics: ['Monitoreo de gases y oxígeno', 'Uso de trípodes y winches', 'Funciones del entrante, asistente y supervisor', 'Ventilación mecánica y purga']
  },

  // ==========================================
  // MÉDICO Y SALUD OCUPACIONAL
  // ==========================================
  { 
    id: 'atp-191-blood', 
    title: 'Bloodborne Pathogens', 
    category: 'Médico', 
    description: 'Estándar OSHA para prevención de transmisión de patógenos sanguíneos, VIH y Hepatitis en el trabajo.', 
    hours: '4 horas', level: 'Nivel Básico', badge: 'ATP 191', image: atpblood,
    topics: ['Precauciones universales', 'Prácticas de ingeniería y limpieza', 'Planes de control de exposición', 'Eliminación de objetos punzocortantes']
  },
]
function CourseCard({ course, featured }: { course: Course, featured?: boolean }) {
  const isOrange = !course.badge.includes('OSHA');

  // Función para armar el mensaje de WhatsApp y redirigir
  const handleConsultar = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que se haga clic en la tarjeta completa
    const phone = "51999999999"; // ¡CAMBIA ESTO POR TU NÚMERO REAL DE WHATSAPP!
    const message = `Hola, estoy muy interesado en obtener información y consultar disponibilidad sobre el curso: *${course.title}* (${course.badge}). ¡Gracias!`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };



  return (
    <article 
      className={`group relative cursor-pointer overflow-hidden rounded-[4px] border border-[#d9e2e8] bg-white/75 shadow-[0_7px_17px_rgba(25,52,69,.04)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(25,52,69,.1)] flex flex-col ${
        featured ? 'min-h-[580px] border-0 bg-[#071522] text-white' : 'h-full'
      }`}
    >
      {/* Contenedor de la Imagen */}
      <div 
        className={`relative h-[120px] bg-cover bg-center shrink-0 ${
          featured ? 'absolute inset-0 h-full bg-[position:center_30%]' : ''
        }`} 
        style={{ backgroundImage: `url(${course.image})` }}
      >
        <span 
          className={`absolute left-3 top-3 z-20 rounded-[3px] px-2 py-1 text-[9px] font-bold tracking-wider text-white ${
            isOrange ? 'bg-[#ff7414]' : 'bg-[#0c3856]'
          }`}
        >
          {course.badge}
        </span>
        
        {featured && (
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#071522] via-[#071522]/80 to-transparent" />
        )}
      </div>

      {/* Contenido */}
      <div className={`flex flex-col flex-grow p-4 ${featured ? 'relative z-20 mt-auto p-6' : ''}`}>
        <p className={`text-[10px] uppercase tracking-wider mb-1 font-semibold ${featured ? 'text-[#ff7414]' : 'text-[#ff7414]'}`}>
          {course.category}
        </p>
        <h2 className={`mb-2 font-bold leading-[1.1] ${featured ? 'text-[28px] text-white' : 'text-[16px] text-[#0a1727]'}`}>
          {course.title}
        </h2>
        <p className={`mb-4 text-[12px] leading-[1.4] line-clamp-2 ${featured ? 'text-[#e0e8eb] max-w-[400px]' : 'text-[#5e7488]'}`}>
          {course.description}
        </p>

        {/* Sección de Temario Previo */}
        {course.topics && (
          <div className={`mb-4 flex-grow ${featured ? 'max-w-[400px]' : ''}`}>
            <p className={`text-[11px] font-bold mb-2 ${featured ? 'text-white' : 'text-[#0a1727]'}`}>Lo que aprenderás:</p>
            <ul className="flex flex-col gap-1.5">
              {course.topics.slice(0, 3).map((topic, idx) => (
                <li key={idx} className={`flex items-start gap-2 text-[11px] leading-[1.3] ${featured ? 'text-[#cbd5e1]' : 'text-[#475569]'}`}>
                  <CheckCircle2 size={12} className="shrink-0 mt-[1px] text-[#22c55e]" />
                  <span>{topic}</span>
                </li>
              ))}
              {course.topics.length > 3 && (
                <li className={`text-[10px] italic mt-1 ${featured ? 'text-[#94a3b8]' : 'text-[#64748b]'}`}>
                  + otros temas específicos...
                </li>
              )}
            </ul>
          </div>
        )}

        <div className={`mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t py-3 text-[10px] font-medium ${featured ? 'border-white/10 text-[#cbd5e1]' : 'border-[#e2e8f0] text-[#64748b]'}`}>
          <span className="flex items-center gap-1.5"><Clock3 size={13} className={featured ? 'text-[#ff7414]' : 'text-[#ff7414]'} />{course.hours}</span>
          <span className="flex items-center gap-1.5"><BookOpen size={13} className={featured ? 'text-[#ff7414]' : 'text-[#ff7414]'} />{course.level}</span>
        </div>

        {/* Botón Consultar WhatsApp */}
        <button 
          onClick={handleConsultar}
          className={`w-full flex items-center justify-center gap-2 rounded-[4px] border-0 transition-colors py-[10px] text-[11px] font-bold tracking-wide mt-2 ${
            featured 
              ? 'bg-[#ff7414] hover:bg-[#e66a0c] text-white shadow-lg shadow-[#ff7414]/20' 
              : 'bg-[#0a1727] hover:bg-[#112338] text-white'
          }`}
        >
          CONSULTAR CURSO <MessageCircle size={14} />
        </button>
      </div>
    </article>
  )
}

const categories = ['Todos', 'OSHA y seguridad', 'Seguridad industrial', 'Emergencias', 'Rescate y alturas', 'Médico']

export default function Page() {
  
  // 1. Estados básicos
  const [activeCategory, setActiveCategory] = useState('Todos');
  const location = useLocation();
   

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', ''); 
      const element = document.getElementById(id);
      
      if (element) {
        
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  // 1. Extraemos lo que venga en la URL después de "?search="
  const searchParams = new URLSearchParams(location.search);
  const initialSearch = searchParams.get('search') || '';

  // 2. Se lo pasamos al estado inicial del buscador
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  
  
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
              <button className="bg-[#F58220] hover:bg-[#e67515] text-white px-6 py-4 lg:py-3.5 rounded text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#F58220]/20"
              onClick={()=>{
                document.getElementById('cursos')?.scrollIntoView()
              }}
              >
                VER NUESTROS CURSOS <ArrowRight size={16} />
              </button>
              {/* <button className="bg-white border border-slate-300 hover:border-[#004a99] text-[#004a99] px-6 py-4 lg:py-3.5 rounded text-xs font-bold uppercase tracking-widest transition-colors text-center">
                HABLAR CON UN ASESOR
              </button> */}
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

{/* ========================================== */}
        {/* CONTENEDOR PRINCIPAL: PANEL + CURSOS       */}
        {/* ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] xl:grid-cols-[360px_minmax(0,1fr)] gap-8 items-start">
          
          {/* 1. PANEL DE CONFIANZA (Izquierda - Sticky) */}
         <div className={`sticky top-24 rounded-xl bg-[#071522] p-8 text-white shadow-xl shadow-[#071522]/10 flex flex-col border border-white/10 ${pageCount > 1 ? 'mt-[56px]' : ''}`}>
            
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#ff7414]/20 text-[#ff7414]">
              <ShieldCheck size={28} />
            </div>
            
            {/* TÍTULO CORREGIDO: Le agregué text-white explícitamente */}
            <h3 className="mb-4 text-[26px] font-bold leading-tight text-white">
              Impulsa tu carrera con <span className="text-[#ff7414]">expertos</span>
            </h3>
            
            {/* PÁRRAFO CORREGIDO: Lo puse un poco más clarito (text-[#e2e8f0]) */}
            <p className="mb-8 text-[13px] leading-relaxed text-[#e2e8f0]">
              No solo dictamos cursos, formamos líderes en prevención. Beneficios de certificarte con nosotros:
            </p>

            {/* Viñetas / Bullet points */}
            <ul className="mb-8 flex flex-col gap-5">
              <li className="flex items-start gap-3 text-[13px] text-[#e2e8f0]">
                <Award size={18} className="shrink-0 text-[#ff7414]" />
                <span><strong className="text-white block">Instructores ATP</strong> Entrenadores autorizados por OSHA.</span>
              </li>
              <li className="flex items-start gap-3 text-[13px] text-[#e2e8f0]">
                <BookOpen size={18} className="shrink-0 text-[#ff7414]" />
                <span><strong className="text-white block">Material Oficial</strong> Contenido 100% actualizado a normativas internacionales.</span>
              </li>
              <li className="flex items-start gap-3 text-[13px] text-[#e2e8f0]">
                <Users size={18} className="shrink-0 text-[#ff7414]" />
                <span><strong className="text-white block">Networking</strong> Únete a una red de miles de profesionales de seguridad.</span>
              </li>
            </ul>

            {/* Botón Asesor General */}
            <button 
              onClick={() => {
                const url = `https://wa.me/51999999999?text=${encodeURIComponent('Hola AMPREH, deseo asesoría general para elegir el curso ideal para mi perfil profesional.')}`;
                window.open(url, '_blank');
              }}
              className="mt-auto w-full flex items-center justify-center gap-2 rounded bg-[#ff7414] hover:bg-[#e66a0c] transition-colors py-4 text-[12px] font-bold uppercase tracking-wider text-white"
            >
              SOLICITAR MAS INFORMACION
            </button>
          </div>

{/* 2. CONTENEDOR DE CURSOS Y PAGINACIÓN (Derecha) */}
          <div className="flex flex-col min-w-0">
            
            {/* Paginación Arriba */}
            {pageCount > 1 && (
              <nav aria-label="Paginación de cursos" className="mb-6 flex items-center justify-end gap-2">
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

            {/* Grilla de Tarjetas de Cursos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6">
              {visibleCourses.map((course) => (
                <div key={course.id}>
                  <CourseCard course={course} featured={false} />
                </div>
              ))}
            </div>

          </div>

        </div>



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