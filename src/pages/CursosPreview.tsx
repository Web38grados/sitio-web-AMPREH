import { ArrowRight, ShieldCheck, ShieldAlert, Users, Clock3, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

// IMAGEN PRINCIPAL DE FONDO
import bgBombero from '../assets/bgBombero.png';

// IMÁGENES PARA EL INTERIOR DE LAS TARJETAS
import imgOsha from '../assets/cursos/hero.png';
import imgBleed from '../assets/cursos/hero.png';
import imgEcsi from '../assets/cursos/hero.png';
import { Reveal } from '../components/Reveal';

const courses = [
  { icon: ShieldCheck, code: 'OSHA 10', title: 'OSHA 10', detail: 'Seguridad industrial básica en el trabajo.', hours: '10 HORAS', img: imgOsha },
  { icon: ShieldAlert, code: 'STOP THE BLEED', title: 'STOP THE BLEED', detail: 'Control de hemorragias y primeros auxilios.', hours: '4 HORAS', img: imgBleed },
  { icon: ShieldCheck, code: 'ECSI', title: 'ECSI FIRST AID', detail: 'Primeros auxilios y atención médica básica.', hours: '8 HORAS', img: imgEcsi }, 
];

const benefits = [
  ['SEGURIDAD', 'Normas y prácticas actualizadas.', ShieldCheck],
  ['PREVENCIÓN', 'Identifica, actúa y controla.', ShieldAlert],
  ['FORMACIÓN', 'Estándares internacionales.', Users],
] as const;

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

      {/* =========================================================
          CARTAS DE CURSOS (Inferiores)
      ========================================================= */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-20 pb-10 bottom-20">
        <Reveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {courses.map((course) => (
              <div 
                key={course.code} 
                className="group flex flex-col  overflow-hidden shadow-[0_10px_30px_rgba(0,43,94,0.15)] transition-all duration-300 hover:-translate-y-2 bg-[#002b5e] relative"
              >
                
                {/* 1. Imagen Superior */}
                <div className="relative w-full h-[180px] shrink-0 bg-[#040b16]">
                  <img 
                    src={course.img} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                  />
                  {/* Badge Naranja sobre la imagen */}
                  <div className="absolute bottom-4 left-4 bg-[#ff7414] px-3 py-1.5 rounded flex items-center gap-2 shadow-md">
                    <course.icon size={12} className="text-white" strokeWidth={2.5} />
                    <span className="text-[9px] font-black text-white tracking-widest uppercase">
                      {course.code}
                    </span>
                  </div>
                  {/* Corte diagonal inferior */}
                  <div className="absolute -bottom-1 left-0 right-0 h-8 bg-[#002b5e] [clip-path:polygon(0_100%,100%_100%,100%_0)]"></div>
                </div>

                {/* 2. Textos del Curso */}
                <div className="p-6 flex flex-col flex-grow relative bg-[#002b5e]">
                  <h5 className="font-black text-white text-xl uppercase leading-tight mb-2 group-hover:text-[#ff7414] transition-colors">
                    {course.title}
                  </h5>
                  <p className="text-[11px] text-blue-100/70 leading-relaxed">
                    {course.detail}
                  </p>
                </div>

                {/* 3. Footer con Metadatos y Botón */}
                <div className="mt-auto bg-[#002046] p-4 flex items-center justify-between border-t border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-[9px] font-bold text-white tracking-wider">
                      <Clock3 size={12} className="text-[#ff7414]" />
                      {course.hours}
                    </div>
                    <div className="w-px h-4 bg-white/10"></div>
                    <div className="flex items-center gap-1.5 text-[9px] font-bold text-white tracking-wider">
                      <Award size={12} className="text-[#ff7414]" />
                      <span className="opacity-80 leading-tight text-[8px]">CERTIFICACIÓN<br/>INTERNACIONAL</span>
                    </div>
                  </div>
                  
                  <Link 
                    to="/cursos"
                    className="w-8 h-8 bg-[#ff7414] hover:bg-[#e66a0c] rounded flex items-center justify-center transition-colors shadow-md group-hover:translate-x-1"
                  >
                    <ArrowRight size={14} className="text-white" strokeWidth={2.5} />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </Reveal>

        {/* Enlace Inferior (Ver todos) */}
        <Reveal delay={400}>
          <div className="flex items-center gap-4 mt-12">
            <Link to="/cursos" className="text-[10px] font-black text-[#002b5e] uppercase tracking-widest hover:text-[#ff7414] transition-colors">
              VER TODOS LOS CURSOS <ArrowRight className="inline-block w-3 h-3 ml-1 -mt-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
      
    </section>
  );
}