'use client'

import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, Award,  Clock3, FileText, ShieldCheck, Stethoscope, Users, Briefcase, BookOpen, ArrowLeft, MessageCircle, CheckCircle2 } from 'lucide-react'

// IMÁGENES BASE (Intactas)
import imgHero from '../../assets/cursos/hero.png'

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
  // 1. PROTECCIÓN CIVIL (Brigadas STPS DC-3)
  // ==========================================
  { 
    id: 'pc-evacuacion', 
    title: 'Evacuación, Búsqueda y Rescate (Brigada Multifuncional)', 
    category: 'Protección Civil', 
    description: 'Capacitación para brigadas en diseño de rutas de evacuación, sistemas de alerta y técnicas de rescate.', 
    hours: '8 horas', level: 'Brigadista', badge: 'STPS DC-3', image: atpconfined,
    topics: ['Sistemas de Alerta y Comunicación', 'Diseño y Manejo de Rutas de Evacuación', 'Procedimientos de Búsqueda y Localización', 'Técnicas Básicas de Rescate y Transporte']
  },
  { 
    id: 'pc-incendios', 
    title: 'Combate de Incendios (Brigada contra Incendios)', 
    category: 'Protección Civil', 
    description: 'Formación teórico-práctica para brigadas en el manejo de extintores, sistemas fijos y respuesta a conatos de incendio.', 
    hours: '8 horas', level: 'Brigadista', badge: 'STPS DC-3', image: atpfire,
    topics: ['Teoría del Fuego y Clasificación', 'Uso y Manejo de Extintores Portátiles (PASS)', 'Sistemas Fijos y Redes Contra Incendios', 'Tácticas de Respuesta Inicial y Prevención']
  },
  { 
    id: 'pc-escolar', 
    title: 'Seguridad y Prevención Escolar', 
    category: 'Protección Civil', 
    description: 'Curso diseñado para dotar de conocimientos de prevención y primer respondiente a personal de guarderías y educación.', 
    hours: '6 horas', level: 'Básico', badge: 'SEP / PC', image: atpeap,
    topics: ['Prevención de riesgos infantiles', 'Formación de brigadistas escolares', 'Cumplimiento de la Ley de Educación', 'Atención de emergencias']
  },
  { 
    id: 'pc-stps', 
    title: 'Comisión de Seguridad e Higiene (STPS)', 
    category: 'Protección Civil', 
    description: 'Curso teórico-práctico para la integración y funcionamiento de la Comisión de Seguridad e Higiene.', 
    hours: '8 horas', level: 'Intermedio', badge: 'STPS DC-3', image: recordkeep,
    topics: ['Marco legal estipulado por la ley', 'Responsabilidades legales de la comisión', 'Documentación y actas', 'Recorridos de verificación']
  },

  // ==========================================
  // 2. OSHA (10 y 30 Horas + Disaster Site)
  // ==========================================
  { 
    id: 'osha-30const', 
    title: '30-Hour Construction Industry Outreach Training', 
    category: 'OSHA', 
    description: 'Programa exhaustivo sobre normativas de construcción, los "Focus Four" y gestión integral de la seguridad.', 
    hours: '30 horas', level: 'Avanzado', badge: 'OSHA 30', image: sshConst,
    topics: ['Gestión de la Seguridad', 'Los Cuatro Peligros Principales (Focus Four)', 'Riesgos para la Salud en Construcción', 'Excavaciones y andamios']
  },
  { 
    id: 'osha-30gen', 
    title: '30-Hour General Industry Outreach Training', 
    category: 'OSHA', 
    description: 'Formación profunda en normativas de la industria general (29 CFR 1910) para supervisores.', 
    hours: '30 horas', level: 'Avanzado', badge: 'OSHA 30', image: sindustrial,
    topics: ['Normas de Superficies de Trabajo', 'Materiales Peligrosos y GHS', 'Espacios Confinados (LOTO)', 'Ergonomía']
  },
  { 
    id: 'osha-15disaster', 
    title: '15-Hour Outreach Training for Disaster Site Workers', 
    category: 'OSHA', 
    description: 'Preparación avanzada para trabajadores de respuesta en escenarios de catástrofe y recuperación.', 
    hours: '15 horas', level: 'Avanzado', badge: 'OSHA', image: hm242,
    topics: ['Marco Normativo y Gestión de Incidentes (ICS)', 'Peligros Físicos Avanzados', 'Materiales Peligrosos', 'Seguridad en Operaciones de Rescate']
  },
  { 
    id: 'osha-10const', 
    title: '10-Hour Construction Industry Outreach Training', 
    category: 'OSHA', 
    description: 'Introducción normativa a la prevención de riesgos y obligaciones patronales en construcción.', 
    hours: '10 horas', level: 'Intermedio', badge: 'OSHA 10', image: atp8const,
    topics: ['Normativa (29 CFR 1926)', 'Prevención de caídas', 'Riesgos por sílice y plomo', 'Uso de herramientas']
  },
  { 
    id: 'osha-10gen', 
    title: '10-Hour General Industry Outreach Training', 
    category: 'OSHA', 
    description: 'Conocimientos fundamentales sobre los derechos de los trabajadores y prevención de lesiones.', 
    hours: '10 horas', level: 'Intermedio', badge: 'OSHA 10', image: atp8gen,
    topics: ['Derechos de los trabajadores', 'Protección contra caídas', 'Seguridad Eléctrica', 'Equipo de Protección Personal']
  },
  { 
    id: 'osha-75disaster', 
    title: '7.5-Hour Outreach Training for Disaster Site Workers', 
    category: 'OSHA', 
    description: 'Criterios esenciales para evaluación de riesgos en escenarios de desastre y protocolos iniciales.', 
    hours: '7.5 horas', level: 'Intermedio', badge: 'OSHA', image: atpdisaster,
    topics: ['Criterios de OSHA en respuesta', 'Identificación de riesgos', 'EPP Específico', 'Manejo seguro de escombros']
  },

  // ==========================================
  // 3. PRIMEROS AUXILIOS (Programas ECSI)
  // ==========================================
  { 
    id: 'fa-emr', 
    title: 'Emergency Medical Responder', 
    category: 'Primeros Auxilios', 
    description: 'Capacitación del más alto nivel para primeros intervinientes médicos en situaciones críticas.', 
    hours: '40 horas', level: 'Especialista', badge: 'ECSI', image: csho1t,
    topics: ['Evaluación del paciente', 'Soporte vital avanzado', 'Manejo de trauma complejo', 'Operaciones de rescate']
  },
  { 
    id: 'fa-wild', 
    title: 'Wilderness First Aid (Lugares Remotos)', 
    category: 'Primeros Auxilios', 
    description: 'Atención prehospitalaria avanzada para escenarios alejados de centros médicos.', 
    hours: '16 horas', level: 'Avanzado', badge: 'ECSI', image: sshDisaster,
    topics: ['Estabilización prolongada', 'Traumas en entornos hostiles', 'Urgencias ambientales', 'Evacuación improvisada']
  },
  { 
    id: 'fa-adv', 
    title: 'Advanced First Aid, CPR, and AED', 
    category: 'Primeros Auxilios', 
    description: 'Programa completo de primeros auxilios avanzados, reanimación cardiopulmonar y uso de desfibrilador.', 
    hours: '16 horas', level: 'Avanzado', badge: 'ECSI', image: atpblood,
    topics: ['Control de Hemorragias', 'Lesiones Musculoesqueléticas', 'Uso de DEA', 'Urgencias Médicas']
  },
  { 
    id: 'fa-firstaid', 
    title: 'Standard First Aid', 
    category: 'Primeros Auxilios', 
    description: 'Primeros auxilios estándar para el lugar de trabajo.', 
    hours: '8 horas', level: 'Básico', badge: 'ECSI', image: atpppe,
    topics: ['Bioseguridad', 'Heridas y Hemorragias', 'Quemaduras', 'Manejo de trauma leve']
  },
  { 
    id: 'fa-bls', 
    title: 'Basic Life Support (BLS) for Health Care Providers', 
    category: 'Primeros Auxilios', 
    description: 'Soporte vital básico diseñado específicamente para profesionales y proveedores de la salud.', 
    hours: '6 horas', level: 'Intermedio', badge: 'ECSI', image: atp191rec,
    topics: ['RCP de alta calidad', 'Ventilaciones asistidas', 'Dinámica de equipos', 'Uso de DEA']
  },
  { 
    id: 'fa-pet', 
    title: 'Pet First Aid and Disaster Response', 
    category: 'Primeros Auxilios', 
    description: 'Atención primaria de emergencia y respuesta a desastres aplicable a mascotas y animales de servicio.', 
    hours: '6 horas', level: 'Básico', badge: 'ECSI', image: atpblood,
    topics: ['RCP en mascotas', 'Signos vitales', 'Control de sangrado', 'Evacuación animal']
  },
  { 
    id: 'fa-cpr', 
    title: 'CPR and AED (Adult, Child, and Infant)', 
    category: 'Primeros Auxilios', 
    description: 'Técnicas de reanimación cardiopulmonar y desfibrilación para todas las edades.', 
    hours: '4 horas', level: 'Básico', badge: 'ECSI', image: atpfire,
    topics: ['RCP en todas las edades', 'Desobstrucción de vías (Heimlich)', 'Reconocimiento de paro', 'Aplicación del DEA']
  },
  { 
    id: 'fa-bloodborne', 
    title: 'Bloodborne and Airborne Pathogens', 
    category: 'Primeros Auxilios', 
    description: 'Prevención de transmisión de patógenos sanguíneos y aéreos.', 
    hours: '2 horas', level: 'Básico', badge: 'OSHA / ECSI', image: atpblood,
    topics: ['Precauciones universales', 'Prácticas de bioseguridad', 'Planes de control de exposición', 'Punzocortantes']
  },

  // ==========================================
  // 4. SEGURIDAD INDUSTRIAL (El grueso del catálogo)
  // ==========================================
  { 
    id: 'ind-24const', 
    title: '24-Hour Construction Industry Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Capacitación exhaustiva en estándares de seguridad operativa para la construcción.', 
    hours: '24 horas', level: 'Intermedio', badge: 'OSHA', image: atp24const,
    topics: ['Grúas y aparejos', 'Herramientas eléctricas', 'Señalización y barricadas', 'Inspección de obra']
  },
  { 
    id: 'ind-24gen', 
    title: '24-Hour General Industry Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Capacitación integral en estándares operativos para supervisores de la industria general.', 
    hours: '24 horas', level: 'Intermedio', badge: 'OSHA', image: atp24gen,
    topics: ['Guarda de maquinarias', 'Materiales peligrosos', 'Ergonomía industrial', 'Programas de seguridad']
  },
  { 
    id: 'osha-3015', 
    title: 'Excavation, Trenching and Soil Mechanics', 
    category: 'Seguridad Industrial', 
    description: 'Normativa práctica sobre mecánica de suelos y estabilidad de taludes apuntalados y no apuntalados.', 
    hours: '24 horas', level: 'Avanzado', badge: 'OSHA #3015', image: osha3015,
    topics: ['Clasificación y análisis de mecánica de suelos', 'Tipos de apuntalamiento', 'Uso de penetrómetros y medidores', 'Sistemas de protección para zanjas']
  },
  { 
    id: 'ind-scaffold', 
    title: 'Scaffolding Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Normativas y procedimientos seguros para el armado, inspección y uso de andamios.', 
    hours: '16 horas', level: 'Avanzado', badge: 'STPS / OSHA', image: atpladders,
    topics: ['Tipos de andamios', 'Inspección estructural previa', 'Puntos de anclaje', 'Prevención de colapsos']
  },
  { 
    id: 'ind-8const', 
    title: '8-Hour Construction Industry Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Programa de seguridad intensiva para trabajadores de construcción.', 
    hours: '8 horas', level: 'Básico', badge: 'OSHA', image: atp8const,
    topics: ['Focus Four', 'Andamios', 'Riesgos de excavaciones', 'EPP en obra']
  },
  { 
    id: 'ind-8gen', 
    title: '8-Hour General Industry Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Programa introductorio de fundamentos de seguridad para trabajadores generales.', 
    hours: '8 horas', level: 'Básico', badge: 'OSHA', image: atp8gen,
    topics: ['Riesgos eléctricos', 'EPP Básico', 'Resbalones y caídas', 'Salida de emergencias']
  },
  { 
    id: 'ind-disaster-4h', 
    title: 'Disaster Response Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Preparación básica y respuesta operativa táctica ante emergencias y desastres.', 
    hours: '4 horas', level: 'Básico', badge: 'STPS / OSHA', image: atpdisaster,
    topics: ['Evaluación rápida de daños', 'Operaciones de triaje básico', 'Búsqueda y rescate ligero', 'Control de riesgos en la escena']
  },
  { 
    id: 'ind-confined', 
    title: 'Confined Space Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Identificación y control de riesgos en trabajos dentro de espacios confinados.', 
    hours: '4 horas', level: 'Intermedio', badge: 'STPS / OSHA', image: atpconfined,
    topics: ['Monitoreo atmosférico', 'Permisos de entrada', 'Entrante, asistente y supervisor', 'Extracción']
  },
  { 
    id: 'ind-fall', 
    title: 'Fall Protection Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Sistemas y métodos para prevenir accidentes por trabajos en alturas.', 
    hours: '4 horas', level: 'Intermedio', badge: 'STPS / OSHA', image: atpfall,
    topics: ['Sistemas de detención (PFAS)', 'Distancia de caída', 'Inspección de arneses', 'Anclajes']
  },
  { 
    id: 'ind-elec', 
    title: 'Electrical Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Prevención de riesgos eléctricos, relámpagos de arco y descargas.', 
    hours: '4 horas', level: 'Intermedio', badge: 'STPS / OSHA', image: atpelec,
    topics: ['Arco eléctrico (Arc Flash)', 'Distancias de aproximación', 'Interruptores GFCI', 'Calificación']
  },
  { 
    id: 'ind-material', 
    title: 'Material Handling Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Técnicas seguras para el manejo, levantamiento y transporte de materiales.', 
    hours: '4 horas', level: 'Básico', badge: 'STPS / OSHA', image: atpjha,
    topics: ['Ergonomía de levantamiento', 'Uso de carretillas', 'Eslingas', 'Límites de carga']
  },
  { 
    id: 'ind-fire', 
    title: 'Fire Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Capacitación en uso práctico de extintores y comportamiento durante evacuaciones.', 
    hours: '4 horas', level: 'Básico', badge: 'STPS / OSHA', image: atpfire,
    topics: ['Uso del método PASS', 'Clases de fuego', 'Riesgos de humo', 'Almacenamiento seguro']
  },
  { 
    id: 'ind-ppe', 
    title: 'Personal Protective Equipment Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Selección, uso y mantenimiento adecuado del Equipo de Protección Personal.', 
    hours: '4 horas', level: 'Básico', badge: 'STPS / OSHA', image: atpppe,
    topics: ['Evaluación de peligros para EPP', 'Ajuste respiratorio', 'Protección ocular', 'Limitaciones']
  },
  { 
    id: 'ind-silica', 
    title: 'Silica Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Control de exposición a sílice cristalina respirable.', 
    hours: '2 horas', level: 'Intermedio', badge: 'STPS / OSHA', image: atpsilica,
    topics: ['Reconocimiento de sílice', 'Supresión por agua', 'Aspiradoras HEPA', 'Planes de control']
  },
  { 
    id: 'ind-loto', 
    title: 'Lock-Out Tag-Out (LOTO) Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Procedimientos de bloqueo y etiquetado para control de energías peligrosas.', 
    hours: '2 horas', level: 'Intermedio', badge: 'STPS / OSHA', image: atploto,
    topics: ['Aislamiento de energía', 'Tipos de candados', 'Liberación', 'Empleados autorizados']
  },
  { 
    id: 'ind-mach', 
    title: 'Machine Operation Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Operación segura de maquinaria y métodos de protección de puntos mecánicos.', 
    hours: '2 horas', level: 'Intermedio', badge: 'STPS / OSHA', image: atpmach,
    topics: ['Prevención de amputaciones', 'Guardas fijas', 'Cortinas de luz', 'Partes rotativas']
  },
  { 
    id: 'ind-jha', 
    title: 'Job Hazard Analysis Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Metodología para identificar peligros y establecer controles en tareas.', 
    hours: '2 horas', level: 'Intermedio', badge: 'STPS / OSHA', image: atpjha,
    topics: ['Desglose de tareas', 'Peligros latentes', 'Jerarquía de controles', 'Procedimientos']
  },
  { 
    id: 'ind-invest', 
    title: 'Accident Investigation Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Técnicas de investigación de incidentes y análisis de causa raíz.', 
    hours: '2 horas', level: 'Intermedio', badge: 'STPS / OSHA', image: atpinvest,
    topics: ['Protección de la escena', 'Entrevistas', 'Los 5 porqués', 'Informes']
  },
  { 
    id: 'ind-ladder', 
    title: 'Ladder Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Uso seguro y normatividad para trabajo con escaleras.', 
    hours: '2 horas', level: 'Básico', badge: 'STPS / OSHA', image: atpladders,
    topics: ['3 puntos de contacto', 'Ángulo correcto', 'Escaleras articuladas', 'Daños']
  },
  { 
    id: 'ind-tool', 
    title: 'Tool Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Manejo e inspección de herramientas manuales, neumáticas y de potencia.', 
    hours: '2 horas', level: 'Básico', badge: 'STPS / OSHA', image: atptool,
    topics: ['Inspección previa', 'Interruptores de seguridad', 'Herramientas de impacto', 'Riesgos']
  },
  { 
    id: 'ind-occhealth', 
    title: 'Occupational Health Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Fundamentos de higiene industrial y salud ocupacional.', 
    hours: '2 horas', level: 'Intermedio', badge: 'STPS / OSHA', image: osha521,
    topics: ['Límites de exposición (PEL)', 'Riesgos químicos', 'Ruido', 'Ergonomía']
  },
  { 
    id: 'ind-ladderinsp', 
    title: 'Ladder Inspection Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Evaluación técnica y estructural de escaleras de uso industrial.', 
    hours: '2 horas', level: 'Intermedio', badge: 'STPS / OSHA', image: atpladders,
    topics: ['Grietas y fisuras', 'Corrosión', 'Sistemas de bloqueo', 'Etiquetado de fuera de servicio']
  },
  { 
    id: 'ind-equip', 
    title: 'Equipment Inspections', 
    category: 'Seguridad Industrial', 
    description: 'Protocolos sistemáticos para la inspección de equipos pesados y montacargas.', 
    hours: '2 horas', level: 'Intermedio', badge: 'STPS / OSHA', image: atpequip,
    topics: ['Listas de verificación', 'Puntos ciegos', 'Sistemas hidráulicos', 'Señalizadores']
  },
  { 
    id: 'ind-record', 
    title: 'Recordkeeping Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Fundamentos de mantenimiento de registros de seguridad y reportes.', 
    hours: '2 horas', level: 'Básico', badge: 'STPS / OSHA', image: recordkeep,
    topics: ['Formularios 300, 300A', 'Lesiones registrables', 'Reporte de fatalidades', 'Conservación']
  },
  { 
    id: 'ind-eap', 
    title: 'Emergency Action & Fire Prevention Planning', 
    category: 'Seguridad Industrial', 
    description: 'Implementación de planes de acción de emergencia (EAP).', 
    hours: '2 horas', level: 'Intermedio', badge: 'STPS / OSHA', image: atpeap,
    topics: ['Vías de salida', 'Coordinadores de piso', 'Refugio en el lugar', 'Simulacros']
  },
  { 
    id: 'ind-weld', 
    title: 'Welding & Cutting Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Seguridad para trabajos en caliente, soldadura y corte.', 
    hours: '2 horas', level: 'Intermedio', badge: 'STPS / OSHA', image: atpweld,
    topics: ['Permisos de trabajo en caliente', 'Humos metálicos', 'Cilindros de gas', 'Fire Watch']
  },
  { 
    id: 'ind-ghs', 
    title: 'Hazard Communication / GHS Safety Training', 
    category: 'Seguridad Industrial', 
    description: 'Sistema Globalmente Armonizado para la comunicación de riesgos.', 
    hours: '2 horas', level: 'Básico', badge: 'STPS / OSHA', image: atpghs,
    topics: ['Lectura de SDS', 'Pictogramas', 'Etiquetado', 'Vías de exposición']
  },
  { 
    id: 'ind-fallinsp', 
    title: 'Fall Protection Equipment Inspection', 
    category: 'Seguridad Industrial', 
    description: 'Inspección para detectar desgaste en equipos de protección contra caídas.', 
    hours: '1 hora', level: 'Intermedio', badge: 'STPS / OSHA', image: atpfallinsp,
    topics: ['Costuras e indicadores de impacto', 'Corrosión en conectores', 'Pruebas de bloqueo', 'Registros']
  },

  // ==========================================
  // 5. CERTIFICACIONES (Especializaciones Profesionales)
  // ==========================================
  { 
    id: 'cert-csho-const', 
    title: 'Certified Safety & Health Official (Construction)', 
    category: 'Certificaciones', 
    description: 'Certificación profesional integral diseñada para elevar la experiencia en riesgos de la industria constructora.', 
    hours: '40 horas', level: 'Especialista', badge: 'CSHO', image: csho1t,
    topics: ['Normas generales OSHA de construcción', 'Prevención de atropellos y equipos pesados', 'Auditorías en sitios de construcción', 'Responsabilidades del contratista general']
  },
  { 
    id: 'cert-csho-gen', 
    title: 'Certified Safety & Health Official (General)', 
    category: 'Certificaciones', 
    description: 'Certificación profesional orientada a prevenir enfermedades o lesiones causadas por factores ergonómicos y físicos.', 
    hours: '40 horas', level: 'Especialista', badge: 'CSHO', image: sindustrial,
    topics: ['Normativas de la industria general', 'Investigación de incidentes ocupacionales', 'Auditorías de cumplimiento', 'Desarrollo de planes de corrección']
  },
  { 
    id: 'cert-ssh-fire', 
    title: 'Specialist in Safety & Health (Fire Safety)', 
    category: 'Certificaciones', 
    description: 'Especialización en evaluación y normativas de seguridad contra incendios.', 
    hours: '24 horas', level: 'Especialista', badge: 'SSH', image: sshFire,
    topics: ['Inspección de equipos de prevención', 'Evaluación de rutas de evacuación', 'Sistemas de alarma y extinción', 'Normativas NFPA aplicadas']
  },
  { 
    id: 'cert-ssh-disaster', 
    title: 'Specialist in Safety & Health (Disaster Response)', 
    category: 'Certificaciones', 
    description: 'Especialización en preparación y coordinación táctica de respuesta ante desastres.', 
    hours: '24 horas', level: 'Especialista', badge: 'SSH', image: sshDisaster,
    topics: ['Mantenimiento de planes de respuesta', 'Simulacros de evacuación complejos', 'Coordinación con servicios médicos', 'Sistemas de comando']
  },
  { 
    id: 'cert-ssh-const', 
    title: 'Specialist in Safety & Health (Construction)', 
    category: 'Certificaciones', 
    description: 'Especialización inicial orientada a comprender los principios básicos de seguridad en construcción.', 
    hours: '24 horas', level: 'Especialista', badge: 'SSH', image: sshConst,
    topics: ['Fundamentos de seguridad en obra', 'Inspección de herramientas de potencia', 'Análisis de tareas críticas (AST)', 'Control de contratistas']
  },
  { 
    id: 'cert-atp', 
    title: 'Authorized Trainer Program (ATP)', 
    category: 'Certificaciones', 
    description: 'Acreditación oficial para entrenadores autorizados en seguridad y salud, permitiendo impartir cursos oficiales.', 
    hours: '0 horas', level: 'Instructor', badge: 'ATP', image: atp191update,
    topics: ['Actualización de estándares OSHA', 'Requisitos del programa Outreach Trainer', 'Técnicas efectivas de instrucción', 'Nuevas políticas de cumplimiento']
  }
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

const categories = ['Todos', 'Protección Civil', 'OSHA', 'Primeros Auxilios', 'Seguridad Industrial', 'Certificaciones'];

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
  
  // NUEVO: Estado para el filtro de horas
  const [activeDuration, setActiveDuration] = useState('Todas');
  
  // NUEVO: Extraemos automáticamente todas las horas únicas de tus cursos
const durationOptions = [
    { label: 'Todas las horas', value: 'Todas' },
    { label: 'De 1 a 8 horas', value: 'cortos' },
    { label: 'De 9 a 24 horas', value: 'medios' },
    { label: 'Más de 24 horas', value: 'extensos' }
  ];
  
  // 3. Estados para la Paginación
  const [page, setPage] = useState(1);
  const pageSize = 6;

// 4. Lógica de Filtrado (por categoría, texto Y HORAS AGRUPADAS)
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      // Filtro Categoría y Texto
      const matchCategory = activeCategory === 'Todos' || course.category.toLowerCase() === activeCategory.toLowerCase();
      const matchQuery = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || course.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filtro de Horas Agrupadas
      let matchDuration = true;
      if (activeDuration !== 'Todas') {
        // Extraemos los números del texto (ej. de "16 a 20 horas" saca el 20)
        const numbers = course.hours.match(/\d+(\.\d+)?/g);
        const maxHour = numbers ? Math.max(...numbers.map(Number)) : 0;

        if (activeDuration === 'cortos') matchDuration = maxHour <= 8;
        else if (activeDuration === 'medios') matchDuration = maxHour > 8 && maxHour <= 24;
        else if (activeDuration === 'extensos') matchDuration = maxHour > 24;
      }
      
      return matchCategory && matchQuery && matchDuration;
    });
  }, [activeCategory, searchQuery, activeDuration]);
  
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
                  <ShieldCheck size={18} className="text-[#F58220] lg:text-slate-300"/> 30+
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
            { icon: BookOpen, title: '30+ cursos', sub: 'en diferentes áreas de seguridad' },
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

{/* ¡FIX ESPACIO! Cambiamos a flex-col-reverse xl:flex-row para que 
              los filtros bajen solos si no hay espacio y no aplasten las pestañas */}
          <div className="flex flex-col-reverse xl:flex-row xl:items-center justify-between gap-4 xl:gap-[18px] min-w-0">
            
            <nav className="flex flex-1 items-center gap-[3px] overflow-x-auto border-b border-[#dce3e5] min-w-0 pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
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
            
            {/* Contenedor de Filtros (Baja automáticamente en pantallas medianas) */}
            <div className="flex items-center gap-3 w-full xl:w-auto mt-2 xl:mt-0">
              
              <select 
                value={activeDuration}
                onChange={(e) => {
                  setActiveDuration(e.target.value);
                  setPage(1);
                }}
                className="h-[36px] w-[140px] shrink-0 px-3 text-[11px] font-medium border border-[#dce3e5] rounded-[4px] bg-white text-[#263d50] outline-none focus:border-[#ff7414] transition-colors cursor-pointer"
              >
                {durationOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              <label className="flex h-[36px] w-full xl:w-[220px] items-center gap-2 rounded-[4px] border border-[#dce3e5] bg-white px-3 transition-colors focus-within:border-[#ff7414]">
                {/* Asegúrate de tener tu icono aquí: <Search className="text-[#a0b0c0]" size={14} /> */}
                <input 
                  type="text" 
                  placeholder="Buscar por nombre..." 
                  className="w-full bg-transparent text-[11px] text-[#263d50] outline-none placeholder:text-[#a0b0c0]"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setPage(1);
                  }}
                />
              </label>

            </div>
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
      <section className="bg-[#004a99] border-t border-[#003875] py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-12">
          
          <div className="w-full lg:w-1/3">
            <p className="text-[#F58220] text-[10px] font-bold uppercase tracking-widest mb-2">
              NUESTRA METODOLOGÍA
            </p>
            <h2 className="text-3xl font-semibold text-white mb-4">
              Capacitación diseñada <br/>para operaciones reales
            </h2>
            <p className="text-blue-100/90 text-sm">
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
                <h3 className="font-semibold text-white text-sm mb-2">{item.title}</h3>
                <p className="text-blue-100/80 text-xs font-['IBM_Plex_Sans'] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* <CtaSection
        badge="ÚNETE AL EQUIPO"
        titlePart1="Forma parte de un"
        highlightText="equipo preparado"
        description="La seguridad no es un accidente, es una decisión. Capacítate con AMPREH y marca la diferencia en tu organización."
        imageUrl={img4}
        primaryButtonText="VER NUESTROS CURSOS"
        secondaryButtonText="HABLAR CON UN ASESOR"
      /> */}
      
    </main>
  )
}