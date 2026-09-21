import { 
  Calendar, Users, Target, Eye, ShieldCheck, 
  UserCheck, Wrench, Mail, 
  Globe,
  UsersRound,
  HardHat
} from 'lucide-react';
import CtaSection from '../../components/CtaSection';
import img1 from '../../assets/nosotros/img1.png'
import img2 from '../../assets/nosotros/img2.png'
import img3 from '../../assets/nosotros/img3.png'


export default function Nosotros() {
  return (
    <main className="w-full bg-white font-['Plus_Jakarta_Sans'] text-slate-900 pb-20">
      
      {/* =========================================================
          1. HERO SECTION (Fondo Azul Corporativo #004a99)
      ========================================================= */}
      <section className="relative w-full bg-[#004a99] pt-28 pb-20 lg:pt-40 lg:pb-28 flex flex-col lg:block overflow-hidden">
        {/* IMAGEN HERO (Derecha en Desktop) */}
        <div className="relative lg:absolute lg:top-0 lg:right-0 w-full lg:w-[60%] h-[300px] lg:h-full z-0 order-2 lg:order-none">
          <img 
            src={img2}
            alt="Equipo AMPREH" 
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Overlay suave ajustado al azul corporativo */}
          {/* <div className="absolute inset-0 bg-[#004a99]/40 z-10" /> */}
          {/* Gradiente de fusión con el fondo azul */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#004a99] via-[#004a99]/70 lg:via-[#004a99]/40 via-40% to-transparent z-20" />
        </div>

        {/* TEXTOS HERO */}
        <div className="relative z-30 w-full max-w-[1400px] mx-auto px-6 lg:px-8 order-1 lg:order-none mb-10 lg:mb-0 lg:min-h-[400px] flex items-center">
          <div className="w-full lg:w-[55%] xl:w-[50%]">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4 text-blue-200 flex items-center gap-4">
              SOBRE NOSOTROS
              <span className="block w-8 h-px bg-[#ff7414]" />
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white leading-[1.05] tracking-tight mb-6">
              Forjamos la <br className="hidden sm:block"/>
              primera línea de <br className="hidden sm:block"/>
              <span className="text-[#ff7414]">respuesta</span>
            </h1>
            <p className="text-blue-100 font-['IBM_Plex_Sans'] text-sm lg:text-base leading-relaxed max-w-lg">
              Somos una empresa especializada en capacitación en seguridad industrial, protección civil y atención prehospitalaria. Formamos verdaderos equipos para actuar con seguridad, criterio y preparación ante cualquier emergencia.
            </p>
          </div>
        </div>
      </section>

{/* =========================================================
          2. BANNER INTERMEDIO (Imagen Izquierda, Texto Derecha)
      ========================================================= */}
      <section className="relative w-full bg-[#003d82] py-16 lg:py-24 flex flex-col lg:block overflow-hidden">
        
        {/* IMAGEN BANNER (Izquierda en Desktop) */}
        <div className="relative lg:absolute lg:top-0 lg:left-0 w-full lg:w-[60%] h-[300px] lg:h-full z-0 order-2 lg:order-none">
          <img 
            src={img1}
            alt="Equipo de respuesta" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Overlay suave ajustado al nuevo azul oscuro */}
          {/* <div className="absolute inset-0 bg-[#003d82]/40 z-10" /> */}
          {/* Gradiente de fusión: Se oscurece de derecha a izquierda para fundirse con el texto */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#003d82] via-[#003d82]/80 lg:via-[#003d82]/70 via-40% to-transparent z-20" />
        </div>
        
        {/* TEXTOS BANNER */}
        <div className="relative z-30 w-full max-w-[1400px] mx-auto px-6 lg:px-8 order-1 lg:order-none mb-10 lg:mb-0 lg:min-h-[400px] flex items-center justify-end">
          <div className="w-full lg:w-[45%] xl:w-[45%]">
            <p className="text-[#ff7414] text-[10px] font-bold tracking-widest uppercase mb-3">
              NUESTRO ADN
            </p>
            <h2 className="text-2xl lg:text-3xl font-black uppercase text-white leading-tight mb-4">
              Detrás de cada respuesta, hay un <br className="hidden lg:block"/>
              <span className="text-[#ff7414]">equipo preparado.</span>
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Nuestro equipo está conformado por profesionales comprometidos con la vida, la seguridad y el bienestar de las personas. Juntos, trabajamos para construir una cultura de prevención y respuesta ante emergencias.
            </p>
          </div>
        </div>
      </section>
{/* =========================================================
          3. HISTORIA Y ESTADÍSTICAS (Imagen ancha, textos sobrios)
      ========================================================= */}
      <section className="bg-[#f8fafc] py-10 lg:py-24 overflow-hidden border-y border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
            
            {/* Lado Izquierdo: Textos (28% de ancho, fuentes más sobrias) */}
            <div className="w-full lg:w-[28%] flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#ff7414]"></div>
                <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-slate-500">Nuestra historia</p>
              </div>
              
              <h2 className="text-3xl xl:text-4xl font-black uppercase leading-[1.05] tracking-tight text-[#004a99] mb-5">
                Comprometidos <br />
                <span className="text-[#ff7414]">con la vida</span>
              </h2>
              
              <div className="space-y-4 text-[11px] xl:text-xs text-slate-600 leading-relaxed mb-8">
                <p>
                  AMPREH nace con la visión de proveer formación técnica y especializada en áreas críticas para la seguridad industrial.
                </p>
                <p>
                  Superamos los estándares tradicionales mediante instructores de primer nivel y escenarios simulados de alta fidelidad para potenciar la capacidad de respuesta de brigadistas y equipos de intervención rápida.
                </p>
              </div>

              {/* Distintivo inferior */}
              <div className="flex items-center gap-4 border-l-[2px] border-[#ff7414] pl-4">
                <HardHat className="w-6 h-6 text-[#004a99] shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-[8px] font-bold tracking-[0.15em] uppercase text-slate-500 mb-0.5">Formación que genera</p>
                  <p className="text-[10px] font-black uppercase text-[#004a99] leading-tight">
                    Personas preparadas, <br /> empresas más seguras.
                  </p>
                </div>
              </div>
            </div>

            {/* Centro: Imagen (48% de ancho - Protagonista absoluta) */}
            <div className="w-full lg:w-[60%] h-[350px] sm:h-[450px] lg:h-[450px] relative z-10 px-4 lg:px-0">
              {/* Corte muy suave (4%) para no rebanar a las personas de los bordes */}
              <div className="w-full h-full  overflow-hidden relative group">
                <img 
                  src={img3}
                  alt="Entrenamiento práctico" 
                  className="w-full h-full object-cover object-center "
                />
              </div>
              {/* Detalle naranja adaptado al nuevo ángulo */}
              <div className="hidden lg:block absolute bottom-0 left-[1%] w-3 h-12 bg-[#ff7414] z-20 transform -skew-x-[6deg]"></div>
            </div>

            {/* Lado Derecho: Estadísticas (20% de ancho, números proporcionados) */}
            <div className="w-full lg:w-[20%] flex flex-col justify-center">
              
              <div className="flex gap-4 items-start">
                <Calendar className="w-6 h-6 text-[#ff7414] shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <h3 className="text-3xl xl:text-4xl font-black text-[#004a99] mb-1 leading-none">+10</h3>
                  <p className="text-[8px] font-bold uppercase tracking-[0.1em] text-[#0a1727] mb-1 mt-1">Años de experiencia</p>
                  <p className="text-[10px] text-slate-500 leading-relaxed">Un recorrido sólido en el sector para brindar un servicio de excelencia.</p>
                </div>
              </div>

              <div className="w-full h-px bg-slate-200 my-8"></div>
              
              <div className="flex gap-4 items-start">
                <UsersRound className="w-6 h-6 text-[#ff7414] shrink-0 mt-1" strokeWidth={2} />
                <div>
                  <h3 className="text-3xl xl:text-4xl font-black text-[#004a99] mb-1 leading-none">+500</h3>
                  <p className="text-[8px] font-bold uppercase tracking-[0.1em] text-[#0a1727] mb-1 mt-1">Profesionales</p>
                  <p className="text-[10px] text-slate-500 leading-relaxed">Capacitados en todo el país con los más altos estándares.</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          4. MISIÓN Y VISIÓN (Fondo Azul Corporativo)
      ========================================================= */}
      <section className="bg-[#004a99] py-20 border-y border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 divide-y md:divide-y-0 md:divide-x divide-white/20">
            
            {/* Misión */}
            <div className="flex gap-6 md:pr-12 pt-8 md:pt-0">
              <Target className="w-12 h-12 text-[#ff7414] shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="text-xl font-bold uppercase text-white mb-4">Misión</h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Brindar capacitación de alto nivel en seguridad industrial, atención prehospitalaria y rescate profesional, contribuyendo a la formación de personas y equipos preparados para prevenir, responder y salvar vidas.
                </p>
              </div>
            </div>

            {/* Visión */}
            <div className="flex gap-6 md:pl-12 pt-8 md:pt-0">
              <Eye className="w-12 h-12 text-[#ff7414] shrink-0" strokeWidth={1.5} />
              <div>
                <h3 className="text-xl font-bold uppercase text-white mb-4">Visión</h3>
                <p className="text-sm text-blue-100 leading-relaxed">
                  Ser la empresa líder en capacitación en seguridad industrial y respuesta a emergencias en el país, reconocida por nuestro profesionalismo, innovación y compromiso con la vida y el bienestar de las personas.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          5. NUESTRA DIFERENCIA (Lista enumerada)
      ========================================================= */}
      <section className="bg-[#f8fafc] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-center">
          
          <div>
            <p className="text-[#004a99] text-[10px] font-bold tracking-widest uppercase mb-3">POR QUÉ ELEGIRNOS</p>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0a1727] uppercase leading-[1.1] mb-6">
              Nuestra diferencia <br/>
              <span className="text-[#ff7414]">está en las personas</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              No solo capacitamos; desarrollamos el criterio y la memoria muscular necesarios para actuar cuando los segundos cuentan. Nuestro modelo se basa en un ecosistema de seguridad, criterio y resiliencia.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {[
              { num: '01', icon: ShieldCheck, title: 'Experiencia en campo', desc: 'Expertos que han estado en situaciones reales de emergencia.' },
              { num: '02', icon: UserCheck, title: 'Instructores Especializados', desc: 'Profesionales con trayectoria operativa y formación internacional.' },
              { num: '03', icon: Wrench, title: 'Formación Práctica', desc: 'Simulaciones, equipos reales y metodologías activas para mayor retención.' },
              { num: '04', icon: Users, title: 'Compromiso con la seguridad', desc: 'Impulsamos estándares que protegen vidas y activos corporativos.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start group">
                <span className="text-4xl font-black text-slate-200 group-hover:text-[#ff7414] transition-colors mt-1">{item.num}</span>
                <div className="w-12 h-12 rounded bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                  <item.icon className="w-6 h-6 text-[#004a99]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0a1727] uppercase mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          6. NUESTRO EQUIPO (Grilla de Instructores)
      ========================================================= */}
      {/* <section className="py-20 lg:py-28 max-w-[1400px] mx-auto px-6 lg:px-8">
        <p className="text-[#ff7414] text-[10px] font-bold tracking-widest uppercase mb-2">NUESTRO EQUIPO</p>
        <h2 className="text-3xl font-black text-[#0a1727] uppercase leading-tight mb-12">
          Instructores con <br/> experiencia <span className="text-[#004a99]">real</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Carlos Mendoza', role: 'Especialista HAZMAT', img: '/images/inst-1.jpg' },
            { name: 'Andrea Rojas', role: 'Paramédico Avanzado', img: '/images/inst-2.jpg' },
            { name: 'Luis Fernandez', role: 'Rescate en Alturas', img: '/images/inst-3.jpg' },
            { name: 'Jorge Salazar', role: 'Seguridad Industrial', img: '/images/inst-4.jpg' }
          ].map((inst, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded p-4 transition-transform hover:-translate-y-1 hover:shadow-lg group">
              <div className="w-full h-[220px] bg-slate-100 mb-4 overflow-hidden rounded">
                <img src={inst.img} alt={inst.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <h4 className="font-bold text-[#0a1727] text-sm">{inst.name}</h4>
              <p className="text-xs text-[#ff7414] font-semibold mb-4">{inst.role}</p>
              <div className="flex gap-2 pt-4 border-t border-slate-100">
                <a href="#" className="w-8 h-8 rounded bg-slate-50 hover:bg-[#004a99] hover:text-white text-slate-400 flex items-center justify-center transition-colors">
                  <Globe size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded bg-slate-50 hover:bg-[#004a99] hover:text-white text-slate-400 flex items-center justify-center transition-colors">
                  <Mail size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* =========================================================
          7. CTA FINAL (Reutilizamos el componente)
      ========================================================= */}
      <CtaSection
        badge="ÚNETE AL EQUIPO"
        titlePart1="Forma parte de un"
        highlightText="equipo preparado"
        description="La seguridad no es un accidente, es una decisión. Capacítate con AMPREH y marca la diferencia en tu organización."
        imageUrl="/images/rescate-cta.jpg"
        primaryButtonText="VER NUESTROS CURSOS"
        secondaryButtonText="HABLAR CON UN ASESOR"
      />

    </main>
  );
}