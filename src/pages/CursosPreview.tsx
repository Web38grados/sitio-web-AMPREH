import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, ShieldAlert, Users, Droplet, HeartPulse, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

// IMAGEN PRINCIPAL DE FONDO
import bgBombero from '../assets/cursebg1.png';

// IMÁGENES PARA EL INTERIOR DE LAS TARJETAS (Agrega estas rutas en tu proyecto)
import imgOsha from '../assets/cursos/hero.png';
import imgBleed from '../assets/cursos/hero.png';
import imgEcsi from '../assets/cursos/hero.png';
import imgAtpi from '../assets/cursos/hero.png';
import { Reveal } from '../components/Reveal';

const courses = [
  { icon: ShieldCheck, code: 'OSHA 10', title: 'OSHA 10', detail: 'Seguridad industrial básica en el trabajo.', img: imgOsha },
  { icon: Droplet, code: 'STOP THE BLEED', title: 'STOP THE BLEED', detail: 'Control de hemorragias y primeros auxilios.', img: imgBleed },
  { icon: HeartPulse, code: 'ECSI', title: 'ECSI FIRST AID', detail: 'Primeros auxilios y atención médica básica.', img: imgEcsi },
  { icon: AlertTriangle, code: 'ATPI 191', title: 'ATP 191', detail: 'Respuesta a emergencias y manejo de crisis.', img: imgAtpi },
];

const benefits = [
  ['SEGURIDAD', 'Normas y prácticas.', ShieldCheck],
  ['PREVENCIÓN', 'Identificación y control.', ShieldAlert],
  ['FORMACIÓN', 'Estándares internacionales.', Users],
] as const;

export function CursosPreview() {
  return (
    <section className="relative w-full bg-white font-['Plus_Jakarta_Sans'] overflow-hidden">
      
      {/* =========================================================
          FONDO PRINCIPAL CON DEGRADADO (Sin lag)
      ========================================================= */}
      <div 
        className="absolute top-0 right-0 w-full lg:w-[85%] h-[600px] lg:h-[700px] pointer-events-none z-0"
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 60%), url(${bgBombero})`, 
          backgroundPosition: 'right top', 
          backgroundRepeat: 'no-repeat', 
          backgroundSize: 'cover' 
        }}
      ></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 pt-20 lg:pt-28 pb-16">
        
        <Reveal>
          <div className="flex flex-col lg:w-3/5 xl:w-1/2 pb-12">
            
            {/* Etiqueta Superior */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2.5 h-2.5 bg-[#FF4F00]"></div>
              <span className="text-[10px] font-black tracking-[0.2em] text-[#FF4F00] uppercase">Cursos Destacados</span>
            </div>
            
            {/* Título */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tight mb-6 text-[#004a99]">
              Domina la seguridad<br/>
              industrial
            </h2>
            
            {/* Descripción */}
            <p className="text-slate-600 font-medium text-sm sm:text-base mb-12 max-w-md leading-relaxed">
              Accede a nuestros cursos más solicitados y adquiere las habilidades que tu equipo necesita para actuar con seguridad, eficiencia y confianza.
            </p>

            {/* Beneficios con Iconos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12 border-b border-slate-200 pb-8 max-w-2xl">
              {benefits.map(([name, text, BenefitIcon]) => (
                <div key={name} className="flex flex-col items-start gap-2">
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center">
                    <BenefitIcon className="h-5 w-5 text-[#004a99]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase text-[#004a99] tracking-wider mb-0.5">{name}</p>
                    <p className="text-[10px] text-slate-500 leading-tight">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Controles del Carrusel */}
            <div className="flex items-center gap-6 mb-12 lg:mb-0">
              <div className="flex gap-2">
                <button className="flex items-center justify-center w-10 h-10 border border-slate-200 text-[#004a99] hover:border-[#004a99] bg-white transition-colors">
                  <ChevronLeft size={20} strokeWidth={1.5} />
                </button>
                <button className="flex items-center justify-center w-10 h-10 border border-slate-200 text-[#004a99] hover:border-[#004a99] bg-white transition-colors">
                  <ChevronRight size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-1 bg-[#FF4F00]"></div>
                <div className="w-4 h-1 bg-slate-200"></div>
                <div className="w-4 h-1 bg-slate-200"></div>
              </div>
            </div>

          </div>
        </Reveal>

        {/* =========================================================
            CARTAS DE CURSOS (Diseño con foto a la derecha)
        ========================================================= */}
        <Reveal delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative z-30 lg:-mt-10 mb-10">
            {courses.map((course) => (
              <div key={course.code} className="relative bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-l-[3px] border-[#FF4F00] h-[240px] group overflow-hidden hover:shadow-[0_20px_40px_rgba(0,74,153,0.15)] transition-shadow duration-300">
                
                {/* Lado Derecho: Imagen con corte diagonal */}
                <div className="absolute top-0 right-0 w-[45%] h-full [clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)] z-0">
                  <img src={course.img} alt={course.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#004a99]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Lado Izquierdo: Contenido */}
                <div className="relative z-10 w-[65%] h-full p-5 flex flex-col justify-between bg-white [clip-path:polygon(0_0,100%_0,85%_100%,0_100%)]">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <course.icon size={16} className="text-[#FF4F00]" strokeWidth={2} />
                      <span className="text-[9px] font-black text-[#004a99] tracking-widest uppercase">{course.code}</span>
                    </div>
                    <h5 className="font-black text-[#004a99] text-[16px] xl:text-[18px] uppercase leading-tight mb-2 pr-2">{course.title}</h5>
                    <p className="text-[10px] text-slate-500 leading-relaxed pr-4">{course.detail}</p>
                  </div>
                  
                  <div>
                    <Link to="/cursos" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-wider text-[#004a99] hover:text-[#FF4F00] transition-colors">
                      VER CURSO <ArrowRight className="w-3 h-3 text-[#FF4F00] transform group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </Reveal>

        {/* Enlace Inferior */}
        <Reveal delay={400}>
          <div className="flex items-center gap-4 mt-8">
            <div className="w-8 h-px bg-[#FF4F00]"></div>
            <Link to="/cursos" className="text-[11px] font-black text-[#0a1727] uppercase tracking-widest hover:text-[#FF4F00] transition-colors">
              VER TODOS LOS CURSOS <ArrowRight className="inline-block w-3 h-3 ml-1" />
            </Link>
          </div>
        </Reveal>

      </div>
      
      {/* Franja decorativa azul inferior */}
    </section>
  );
}