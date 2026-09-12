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
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true)
        }
      },
      {
        threshold: 0.2,
      }
    )

    const currentRef = statsRef.current

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
    <section className="relative flex min-h-[130vh] w-full flex-col overflow-hidden bg-slate-950 py-24 text-white">

      <div className="absolute inset-0 z-0">
        <img
          src={impactImg}
          alt="Bombero industrial de AMPREH"
          className="h-full w-full object-cover object-bottom"
        />


        {/* <div className="absolute inset-0 bg-black/20" /> */}


        {/* <div className="absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-transparent" />


        <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute inset-y-0 left-0 w-[35%] bg-gradient-to-r from-black/50 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-[35%] bg-gradient-to-l from-black/50 to-transparent" /> */}
      </div>




      <div className="relative z-10 mx-auto mt-10 w-full max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">

  
          <div className="mb-6 h-1.5 w-20 bg-[#D32F2F]" />

 
          <h2 className="text-5xl font-black uppercase leading-[1.05] tracking-tight text-white drop-shadow-2xl sm:text-6xl lg:text-7xl">
            Líderes en
            <br />
            <span className="text-slate-300">
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

      <div
        ref={statsRef}
        className="relative z-10 mx-auto my-auto w-full max-w-7xl px-6 py-16 lg:px-8"
      >

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:gap-12">

          <div
            className={`flex flex-col gap-8 transition-all duration-1000 ease-out ${
              statsVisible
                ? 'translate-x-0 opacity-100'
                : '-translate-x-16 opacity-0'
            }`}
          >

            {/* STAT 1 */}
            <div className="rounded-r-xl border-l-4 border-[#D32F2F] bg-black/40 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:bg-black/55 hover:shadow-red-950/30">

              <div className="text-4xl font-black text-white lg:text-5xl">
                +
                <AnimatedCounter
                  end={20}
                  isVisible={statsVisible}
                />
              </div>

              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-[#4285F4]">
                Años de Experiencia
              </p>

              <p className="mt-1 text-xs text-slate-300">
                Protegiendo empresas desde 2005
              </p>

            </div>


            {/* STAT 2 */}
            <div className="rounded-r-xl border-l-4 border-[#0056B3] bg-black/40 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:bg-black/55 hover:shadow-blue-950/30">

              <div className="text-4xl font-black text-white lg:text-5xl">
                <AnimatedCounter
                  end={3}
                  isVisible={statsVisible}
                />
              </div>

              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-[#4285F4]">
                Estándares Globales
              </p>

              <p className="mt-1 text-xs text-slate-300">
                OSHA, ECSI y Stop the Bleed
              </p>

            </div>

          </div>



          <div className="hidden min-h-[350px] lg:block">

          </div>
          <div
            className={`flex flex-col gap-8 transition-all duration-1000 ease-out ${
              statsVisible
                ? 'translate-x-0 opacity-100'
                : 'translate-x-16 opacity-0'
            }`}
          >

            <div className="rounded-r-xl border-l-4 border-[#0056B3] bg-black/40 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:bg-black/55 hover:shadow-blue-950/30">

              <div className="text-4xl font-black text-white lg:text-5xl">
                <AnimatedCounter
                  end={100}
                  isVisible={statsVisible}
                />
                %
              </div>

              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-[#4285F4]">
                Cumplimiento Legal
              </p>

              <p className="mt-1 text-xs text-slate-300">
                STPS y Protección Civil
              </p>

            </div>



            <div className="rounded-r-xl border-l-4 border-[#D32F2F] bg-black/40 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:bg-black/55 hover:shadow-red-950/30">

              <div className="text-4xl font-black text-white lg:text-5xl">
                +
                <AnimatedCounter
                  end={500}
                  isVisible={statsVisible}
                />
              </div>

              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-[#4285F4]">
                Brigadistas
              </p>

              <p className="mt-1 text-xs text-slate-300">
                Formados y certificados en campo
              </p>

            </div>

          </div>

        </div>
      </div>

    </section>
  )
}