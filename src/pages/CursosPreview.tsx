import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, ShieldAlert, Users, Droplet, HeartPulse, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

import bgBombero from '../assets/cursebg1.png';

const courses = [
  { icon: ShieldCheck, code: 'OSHA 10', title: 'OSHA 10', detail: 'Seguridad industrial básica en el trabajo.' },
  { icon: Droplet, code: 'STOP THE BLEED', title: 'Stop the Bleed', detail: 'Control de hemorragias y primeros auxilios.' },
  { icon: HeartPulse, code: 'ECSI', title: 'ECSI First Aid', detail: 'Primeros auxilios y atención médica básica.' },
  { icon: AlertTriangle, code: 'ATPI 191', title: 'ATPI 191', detail: 'Respuesta a emergencias y manejo de crisis.' },
]

const benefits = [
  ['Seguridad', 'Normas y prácticas.', ShieldCheck],
  ['Prevención', 'Identificación y control.', ShieldAlert],
  ['Formación', 'Estándares internacionales.', Users],
] as const;

export function CursosPreview() {
  const [active, setActive] = useState(0);
  const visibleCourses = courses.slice(active, active + 4);
  const canBack = active > 0;
  const canNext = active < courses.length - 4;

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const boxOrange = document.getElementById('anim-orange');
          const boxBlue = document.getElementById('anim-blue');
          const boxWhite = document.getElementById('anim-white');
          const bgBombero = document.getElementById('anim-bombero-bg');

          if (boxOrange) {
            boxOrange.classList.remove('opacity-0', '-translate-x-24');
            boxOrange.classList.add('opacity-100', 'translate-x-0');
          }
          if (boxBlue) {
            boxBlue.classList.remove('opacity-0', '-translate-x-24');
            boxBlue.classList.add('opacity-100', 'translate-x-0');
          }
          if (boxWhite) {
            boxWhite.classList.remove('opacity-0', '-translate-x-24');
            boxWhite.classList.add('opacity-100', 'translate-x-0');
          }
          if (bgBombero) {
            bgBombero.classList.remove('opacity-0');
            bgBombero.classList.add('opacity-100');
          }
          
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        } 
      },
      { rootMargin: '0px', threshold: 0.15 } 
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.disconnect(); };
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 w-full mb-24 font-['Plus_Jakarta_Sans'] -mt-40 overflow-x-hidden bg-white">
      
      {/* =========================================================
          1. LA FRANJA SUPERIOR
      ========================================================= */}
      <div className="relative lg:-top-0 w-full flex flex-col lg:flex-row bg-transparent ">
        
        <div id="anim-orange" className="relative z-10 w-full lg:w-[60%] bg-[#F58220] py-16 sm:py-24 lg:py-0 px-6 sm:px-10 lg:h-[350px] lg:pt-44 lg:pb-32 lg:pl-16 pr-8 flex flex-col justify-center transform transition-all duration-1000 ease-out opacity-0 -translate-x-24 will-change-transform">
          <div>
            <div className=' h-20 lg:border-t-0 border-t-2 border-gray-600'></div>
            <div className="flex items-center gap-2 mb-3 border-t-2 border-gray-600 max-w-xl lg:border-t-0">
            
            </div>

            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tight">
              <span className="text-[#1A237E]">Tu próximo nivel</span><br />
              <span className="text-white drop-shadow-md">de preparación</span>
            </h2>
          </div>
        </div>

        <div id="anim-blue" className="relative z-10 w-full lg:w-[40%] bg-[#0759A0] py-12 px-7 sm:px-10 lg:-ml-12 lg:pt-48 pb-12 lg:pb-1 pr-6 lg:pr-16 pl-6 lg:pl-16 xl:pl-24 flex items-center overflow-hidden lg:[clip-path:polygon(8%_0,92%_0,62%_100%,0_100%)] xl:[clip-path:polygon(8%_0,88%_0,58%_100%,0_100%)] transform transition-all duration-500 delay-200 ease-out opacity-0 -translate-x-24 will-change-transform">
          <div className="absolute top-0 right-0 w-full h-full bg-[#0759A0] hidden lg:block lg:[clip-path:polygon(40%_0,100%_0,100%_100%,10%_100%)] opacity-40 z-0"></div>
          <div className="relative z-10 lg:right-14 border-white/20 lg:pl-4 w-full">
            <p className="text-white/90 text-[14px] lg:text-[13px] leading-relaxed font-['IBM_Plex_Sans'] lg:max-w-[400px] font-medium">
              Formación certificada en seguridad industrial<br className="hidden lg:block"/>
              y atención prehospitalaria, diseñada para<br className="hidden lg:block"/>
              fortalecer las competencias de tu equipo<br className="hidden lg:block"/>
              y reducir riesgos en el entorno laboral.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          2. PARTE BLANCA INFERIOR 
      ========================================================= */}
      <div 
        id="anim-white"
        className="relative z-[9] w-full bg-white -mt-16 lg:-mt-49 transform transition-all duration-1000 delay-400 ease-out opacity-0 -translate-x-24 will-change-transform"
      >
        {/* === SOLUCIÓN FONDO BLANCO: Linear Gradient inyectado === */}
<div 
          id="anim-bombero-bg"
          className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block transition-opacity duration-1000 delay-500 opacity-0"
          style={{ 
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 45%, rgba(255,255,255,0) 70%), url(${bgBombero})`, 
            // 1. CAMBIAMOS 'top' por 'bottom' para que se ancle abajo
            backgroundPosition: 'right bottom', 
            backgroundRepeat: 'no-repeat', 
            // 2. CAMBIAMOS '110%' a '100%' (o 'cover') para que no se salga de la caja
            backgroundSize: 'auto 100%' 
          }}
        ></div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:w-3/5 xl:w-1/2 pt-16 lg:pt-56 xl:pt-64 pb-12">
            
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-[#FF4F00]"></div>
              <span className="text-[11px] font-black tracking-[0.2em] text-[#FF4F00] uppercase font-['IBM_Plex_Sans']">Cursos Destacados</span>
            </div>
            
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase leading-[1.05] tracking-tight mb-8">
              <span className="text-[#1A237E]">Domina la seguridad</span><br/>
              <span className="text-[#FF4F00]">industrial</span>
            </h3>
            
            <p className="text-slate-500 font-['IBM_Plex_Sans'] text-sm sm:text-base mb-12 border-l-2 border-[#FF4F00] pl-4 max-w-lg leading-relaxed">
              Accede a nuestros cursos más solicitados y adquiere las habilidades que tu equipo necesita para actuar con seguridad, eficiencia y confianza.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
              {benefits.map(([name, text, BenefitIcon]) => (
                <div key={name} className="flex flex-col items-start">
                  <BenefitIcon className="mb-3 h-6 w-6 text-[#FF4F00]" strokeWidth={1.5} />
                  <p className="text-[12px] font-black uppercase text-[#1A237E] tracking-wider mb-1">{name}</p>
                  <p className="text-[10px] text-slate-500 leading-tight font-['IBM_Plex_Sans']">{text}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <div className="flex gap-2">
                <button 
                  disabled={!canBack} 
                  onClick={() => setActive((value) => Math.max(0, value - 1))}
                  className="flex items-center justify-center w-10 h-10 border border-slate-300 text-[#1A237E] hover:border-[#1A237E] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={20} strokeWidth={1.5} />
                </button>
                <button 
                  disabled={!canNext} 
                  onClick={() => setActive((value) => Math.min(courses.length - 4, value + 1))}
                  className="flex items-center justify-center w-10 h-10 border border-slate-300 text-[#1A237E] hover:border-[#1A237E] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={20} strokeWidth={1.5} />
                </button>
              </div>
              <div className="flex gap-2">
                <div className="w-4 h-1 bg-slate-300"></div>
                <div className="w-4 h-1 bg-slate-300"></div>
                <div className="w-4 h-1 bg-slate-300"></div>
                <div className="w-4 h-1 bg-[#FF4F00]"></div>
              </div>
            </div>

          </div>

          {/* =========================================================
              3. CARTAS DE CURSOS
          ========================================================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pb-16 relative z-30">
            {visibleCourses.map((course) => (
              <div key={course.code} className="bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border-l-[3px] border-[#FF4F00] flex flex-col justify-between min-h-[220px] hover:shadow-[0_20px_50px_rgba(26,35,126,0.12)] transition-shadow duration-300 group">
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#FF4F00]/10 flex items-center justify-center text-[#FF4F00]">
                      <course.icon size={16} strokeWidth={2.5} />
                    </div>
                    <span className="text-[10px] font-black text-[#1A237E] tracking-widest uppercase">{course.code}</span>
                  </div>
                  
                  <h5 className="font-black text-[#1A237E] text-[18px] uppercase leading-tight mb-2 group-hover:text-[#FF4F00] transition-colors duration-300">{course.title}</h5>
                  <p className="text-[11px] text-slate-500 font-['IBM_Plex_Sans'] leading-relaxed pr-2">{course.detail}</p>
                </div>
                
                <div className="relative z-10 mt-6 pt-4 border-t border-slate-100">
                  <Link to="/cursos" className="flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-[#1A237E]">
                    <span>Ver curso</span>
                    <ArrowRight className="w-4 h-4 text-[#FF4F00] transform group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2.5} />
                  </Link>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}