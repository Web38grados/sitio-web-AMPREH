import { ArrowRight, ShieldCheck, ShieldAlert, Users, Award, Clock3 } from 'lucide-react';
import { Link } from 'react-router-dom';

// IMAGEN PRINCIPAL DE FONDO
import bgBombero from '../assets/bgBombero.png';

// IMÁGENES PARA EL INTERIOR DE LAS TARJETAS

import { Reveal } from '../components/Reveal';
import osha3015 from '../assets/cursos/3015.jpg';
import hm242 from '../assets/cursos/hazwoper-annual-refresher.jpg';
import atp8const from '../assets/cursos/8-hour-construction-industry.jpg';

// const courses = [
//   { icon: ShieldCheck, code: 'OSHA 10', title: 'OSHA 10', detail: 'Seguridad industrial básica en el trabajo.',  img: imgOsha },
//   { icon: ShieldAlert, code: 'STOP THE BLEED', title: 'STOP THE BLEED', detail: 'Control de hemorragias y primeros auxilios.', img: imgBleed },
//   { icon: ShieldCheck, code: 'ECSI', title: 'ECSI FIRST AID', detail: 'Primeros auxilios y atención médica básica.',  img: imgEcsi }, 
// ];

const benefits = [
  ['SEGURIDAD', 'Normas y prácticas actualizadas.', ShieldCheck],
  ['PREVENCIÓN', 'Identifica, actúa y controla.', ShieldAlert],
  ['FORMACIÓN', 'Estándares internacionales.', Users],
] as const;

// 2. DATOS DE LOS CURSOS DESTACADOS
const featuredCourses = [
  {
    id: 'osha-3015',
    code: 'OSHA #3015',
    title: 'Excavation, Trenching and Soil Mechanics',
    detail: 'Normativa práctica sobre mecánica de suelos y estabilidad de taludes apuntalados.',
    image: osha3015,
    hours: '24 hrs',
  },
  {
    id: 'hm-242',
    code: 'HM 242',
    title: 'HAZWOPER Annual Refresher',
    detail: 'Actualización sobre tendencias, control, contención y confinamiento de residuos peligrosos.',
    image: hm242,
    hours: '8 hrs',
  },
  {
    id: 'atp-191-8const',
    code: 'ATP 191',
    title: '8-Hour Construction Industry',
    detail: 'Programa introductorio enfocado en los peligros más comunes en el sector construcción.',
    image: atp8const,
    hours: '8 hrs',
  }
];

export function CursosPreview() {
  return (
    <section className="relative w-full bg-white font-['Plus_Jakarta_Sans'] overflow-hidden">
      
{/* =========================================================
          IMAGEN DERECHA (Full Bleed con efecto difuminado suave)
      ========================================================= */}
      <div className="hidden lg:block absolute top-0 right-0 w-[55%] xl:w-[65%] h-[580px] z-0">
        
        {/* Fotografía principal (Sin clip-path, ocupa todo el div) */}
        <img 
          src={bgBombero} 
          alt="Bombero industrial" 
          className="absolute inset-0 w-full h-full object-cover object-[center_20%] z-0"
        />
        
        {/* 
            Gradiente difuminado Izquierdo: 
            Se funde perfectamente con el fondo blanco de la sección de texto.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent w-[60%] z-10"></div>

        {/* 
            Gradiente difuminado Inferior (Opcional pero recomendado): 
            Ayuda a que la foto no se corte en línea recta seca abajo, 
            sino que se funda suavemente hacia las tarjetas.
        */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>

      </div>

      {/* =========================================================
          CONTENIDO IZQUIERDO (Textos generales)
      ========================================================= */}
      {/* Aquí sí usamos el max-w-[1400px] para alinear el texto con el resto de la web */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 pt-20 lg:pt-28 mb-16 lg:mb-24">
        
        <div className="flex flex-col lg:w-[45%] xl:w-[45%]">
          <Reveal>
            <div className="flex items-center gap-3 mb-4 mt-2">
              <div className="w-4 h-[2px] bg-[#ff7414]"></div>
              <span className="text-[10px] font-black tracking-[0.2em] text-[#ff7414] uppercase">
                Cursos Destacados
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black uppercase leading-[1.05] tracking-tight mb-6 text-[#002b5e]">
              Domina la<br/>
              Seguridad<br/>
              <span className="text-[#ff7414]">Industrial</span>
            </h2>
            
            <p className="text-slate-500 font-medium text-sm mb-12 max-w-[400px] leading-relaxed">
              Accede a nuestros cursos más solicitados y adquiere las habilidades que tu equipo necesita para actuar con seguridad, eficiencia y confianza.
            </p>

            {/* Beneficios con Iconos (En 3 columnas para PC, 2 para móvil) */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mb-8 max-w-[500px]">
              {benefits.map(([name, text, BenefitIcon]) => (
                <div key={name} className="flex flex-col items-start gap-3">
                  <div className="w-10 h-10 border border-slate-200 rounded-lg flex items-center justify-center bg-slate-50">
                    <BenefitIcon className="h-5 w-5 text-[#002b5e]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-[#002b5e] tracking-wider mb-1">{name}</p>
                    <p className="text-[9px] text-slate-500 leading-tight pr-2">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

{/* 3. NUEVO DISEÑO DE TARJETAS */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-20 pb-10 bottom-20">
        <Reveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div 
                key={course.id} 
                className="group bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgb(0,43,94,0.12)] transition-all duration-500 hover:-translate-y-2 border border-slate-100 flex flex-col"
              >
                
                {/* Imagen Superior con Overlay */}
                <div className="relative h-[220px] w-full overflow-hidden bg-[#0a1727]">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1727]/80 via-transparent to-transparent"></div>
                  
                  {/* Badge Naranja */}
                  <div className="absolute top-5 left-5 bg-[#ff7414] px-3 py-1.5 rounded-[4px] shadow-lg">
                    <span className="text-[10px] font-black text-white tracking-widest uppercase">
                      {course.code}
                    </span>
                  </div>
                </div>

                {/* Textos del Curso */}
                <div className="p-8 flex flex-col flex-grow relative bg-white">
                  
                  {/* Icono flotante (Detalle premium) */}
                  <div className="absolute right-6 -top-6 w-12 h-12 bg-[#0a1727] rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:bg-[#ff7414] transition-colors duration-300">
                    <ShieldCheck size={20} className="text-white" />
                  </div>

                  <h5 className="font-bold text-[#0a1727] text-[20px] leading-[1.2] mb-3 group-hover:text-[#ff7414] transition-colors pr-8">
                    {course.title}
                  </h5>
                  <p className="text-[13px] text-slate-500 leading-relaxed mb-6">
                    {course.detail}
                  </p>

                  {/* Footer de la tarjeta */}
                  <div className="mt-auto pt-5 flex items-center justify-between border-t border-slate-100">
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                        <Clock3 size={14} className="text-[#ff7414]" />
                        {course.hours}
                      </span>
                      <span className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                        <Award size={14} className="text-[#ff7414]" />
                        CERTIFICADO
                      </span>
                    </div>
                    
                    {/* El link ahora apunta exactamente al ID del curso en la otra página */}
                    <Link 
                      to={`/cursos?search=${encodeURIComponent(course.title)}#cursos`}
                      className="w-9 h-9 rounded-full bg-slate-100 text-[#0a1727] hover:bg-[#ff7414] hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm"
                    >
                      <ArrowRight size={16} strokeWidth={2.5} />
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Enlace Inferior con línea animada */}
        <Reveal delay={400}>
          <div className="flex items-center justify-center lg:justify-start gap-4 mt-12">
            <Link to="/cursos#cursos" className="inline-flex items-center gap-3 text-[11px] font-black text-[#0a1727] uppercase tracking-widest hover:text-[#ff7414] transition-colors group">
              VER TODOS LOS PROGRAMAS
              <span className="w-8 h-[2px] bg-[#ff7414] transition-all duration-300 group-hover:w-16"></span>
            </Link>
          </div>
        </Reveal>
      </div>
      
    </section>
  );
}