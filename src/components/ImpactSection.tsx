import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

import impactImg from '../assets/inicio/impacto.png'

const AnimatedCounter = ({
  end,
  isVisible,
}: {
  end: number
  isVisible: boolean
}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number | null = null
    const duration = 2000

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      )

      const easeOut = 1 - Math.pow(1 - progress, 4)

      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, isVisible])

  return <span>{count}</span>
}

export function ImpactSection() {
  // Un solo estado para controlar TODA la visibilidad de la sección
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Apagamos el observador de inmediato para evitar cálculos innecesarios en scroll
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      {
        rootMargin: '0px', 
        threshold: 0.20, // Se activa un poco antes para que la animación empiece a tiempo
      }
    )

    const currentRef = sectionRef.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    // Observamos TODA la sección en lugar de solo los números
    <section ref={sectionRef} className="relative flex min-h-[130vh] w-full flex-col overflow-hidden bg-slate-950 py-24 text-white">

      <div className="absolute inset-0 z-0">
        <img
          src={impactImg}
          alt="Bombero industrial de AMPREH"
          className="h-full w-full object-cover object-bottom"
        />
      </div>

      <div className="relative z-10 mx-auto mt-40 w-full max-w-7xl px-6 lg:px-8">
        <div 
          // Reemplazamos getElementById por clases dinámicas condicionales de React
          className={`max-w-2xl transition-all duration-1000 ease-out delay-1000 will-change-transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'
          }`}
        >
          <div className="mb-6 h-1.5 w-16 bg-[#D32F2F]" />
          <h2 className="text-5xl font-black uppercase leading-[1.05] tracking-tight  text-white drop-shadow-2xl sm:text-6xl lg:text-7xl">
            Líderes en
            <br />
            <span className="text-white">
              Respuesta y Prevención
            </span>
          </h2>

          <Link
            to="/nosotros"
            className="group mt-10 flex w-fit items-center gap-3 bg-[#D32F2F] px-8 py-4 text-sm font-black uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 hover:bg-[#b72727] hover:shadow-xl"
          >
            Conoce más
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="flex-grow"></div>

      <div className="relative z-10 mx-auto my-auto w-full max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:gap-12">
          
          <div
            // Clases dinámicas para las estadísticas de la izquierda
            className={`flex flex-col gap-10 transition-all duration-1000 ease-out delay-300 will-change-transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            <div className="border-l-4 border-[#D32F2F] pl-4">
              <div className="text-4xl font-black text-white lg:text-5xl [text-shadow:_0_4px_24px_rgb(0_0_0_/_100%)]">
                +<AnimatedCounter end={20} isVisible={isVisible} />
              </div>

              <p className="mt-2 text-xs font-bold uppercase tracking-widest w-fit text-white bg-blue-700 [text-shadow:_0_2px_10px_rgb(0_0_0_/_100%)]">Años de Experiencia</p>
              <p className="mt-1 text-xs font-semibold text-slate-100 [text-shadow:_0_2px_10px_rgb(0_0_0_/_100%)]">Protegiendo empresas desde 2005</p>
            </div>

            <div className="border-l-4 border-[#1A237E] pl-4">
              <div className="text-4xl font-black text-white lg:text-5xl [text-shadow:_0_4px_24px_rgb(0_0_0_/_100%)]">
                <AnimatedCounter end={3} isVisible={isVisible} />
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest w-fit text-white bg-blue-700 [text-shadow:_0_2px_10px_rgb(0_0_0_/_100%)]">Estándares Globales</p>
              <p className="mt-1 text-xs font-semibold text-slate-100 [text-shadow:_0_2px_10px_rgb(0_0_0_/_100%)]">OSHA, ECSI y Stop the Bleed</p>
            </div>
          </div>

          <div className="hidden min-h-[350px] lg:block"></div>

          <div
            // Clases dinámicas para las estadísticas de la derecha
            className={`flex flex-col gap-10 transition-all duration-1000 ease-out delay-500 will-change-transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
          >

            <div className="border-r-4 border-[#1A237E] pr-4 text-right ">
              <div className="text-4xl font-black text-white lg:text-5xl [text-shadow:_0_4px_24px_rgb(0_0_0_/_100%)]">
                <AnimatedCounter end={100} isVisible={isVisible} />%
              </div>
              <div>
                
              </div>
               <p className="flex justify-end ml-auto mt-2 text-xs font-bold uppercase tracking-widest w-fit text-white bg-blue-700 [text-shadow:_0_2px_10px_rgb(0_0_0_/_100%)]">Cumplimiento Legal</p>
                <p className="mt-1 text-xs font-semibold text-slate-100 [text-shadow:_0_2px_10px_rgb(0_0_0_/_100%)]">STPS y Protección Civil</p>
              </div>

  
            <div className="border-r-4 border-[#D32F2F] pr-4 text-right ">
              <div className="text-4xl font-black text-white lg:text-5xl [text-shadow:_0_4px_24px_rgb(0_0_0_/_100%)]">
                +<AnimatedCounter end={500} isVisible={isVisible} />
              </div>
              <p className="flex justify-end ml-auto mt-2 text-xs font-bold uppercase tracking-widest w-fit text-white bg-blue-700 [text-shadow:_0_2px_10px_rgb(0_0_0_/_100%)]">Brigadistas</p>
              <p className="mt-1 text-xs font-semibold text-slate-100 [text-shadow:_0_2px_10px_rgb(0_0_0_/_100%)]">Formados y certificados en campo</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}