'use client'

import  { useState } from 'react'
import { X, Send, Paperclip, GraduationCap, Shield, UserCircle, MessageCircle, Bot } from 'lucide-react'

// Reemplaza estas rutas con las imágenes reales de tu proyecto
import logoBlanco from '../assets/logo_blanco.png'
import robotImg from '../assets/robot-chat.png'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [chatView, setChatView] = useState<'home' | 'chat'>('home')
  const [message, setMessage] = useState('')

  // Toggle para abrir/cerrar el chat
  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) setChatView('home') 
  }

  // --- VISTA 1: HOME (Pantalla inicial de bienvenida) ---
  const renderHomeView = () => (
    <div className="flex flex-col h-full bg-[#f8fafc]">
      {/* Header Home */}
      <div className="bg-[#002b5e] p-4 flex items-center justify-between rounded-t-2xl shadow-md z-10 relative">
        <div className="flex items-center gap-3">
          <img src={logoBlanco} alt="AMPREH" className="h-6 object-contain brightness-0 invert" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-wide text-white/90">En línea</span>
          </div>
          <button onClick={toggleChat} className="text-white/80 hover:text-white transition-colors">
            <X size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Área de Bienvenida */}
      <div className="flex-1 overflow-y-auto p-5 relative">
        
        {/* === CAMBIO AQUÍ: Robot con posición absoluta === */}
        <div className="relative mb-6 min-h-[120px]">
          {/* El texto tiene un padding-right (pr-20) para no chocar con el robot */}
          <div className="pr-20 mt-2 relative z-10">
            <h2 className="text-3xl font-black text-[#002b5e] mb-2 leading-none">¡Hola!</h2>
            <p className="text-[11px] font-bold text-slate-700 mb-4 leading-tight">
              Soy tu asistente virtual <br /> de AMPREH. 👋
            </p>
            <p className="text-[10px] text-slate-500 leading-relaxed">
              Estoy aquí para resolver tus dudas sobre nuestros servicios, capacitaciones y programas de seguridad industrial, protección civil y atención prehospitalaria.
            </p>
          </div>
          
          {/* El robot flota absolutamente a la derecha sin empujar los textos */}
          <div className="absolute -top-2 -right-2 w-[100px] z-0">
            <img 
              src={robotImg} 
              alt="Asistente AMPREH" 
              className="w-full h-auto object-contain drop-shadow-xl" 
            />
          </div>
        </div>
        

        {/* Botones de Acción Rápida */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 relative z-10">
          <h3 className="text-xs font-bold text-[#002b5e] mb-3">¿En qué puedo ayudarte hoy?</h3>
          
          <div className="grid grid-cols-2 gap-2 mb-3">
            <button 
              onClick={() => setChatView('chat')}
              className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 hover:border-[#002b5e] hover:shadow-sm transition-all group bg-white text-left"
            >
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#002b5e]" />
                <span className="text-[9px] font-semibold text-slate-600 leading-tight">Conocer nuestros cursos <br/> y capacitaciones</span>
              </div>
            </button>
            <button 
              onClick={() => setChatView('chat')}
              className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 hover:border-[#002b5e] hover:shadow-sm transition-all group bg-white text-left"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#002b5e]" />
                <span className="text-[9px] font-semibold text-slate-600 leading-tight">Servicios de seguridad <br/> industrial y prehospitalaria</span>
              </div>
            </button>
            <button 
              onClick={() => setChatView('chat')}
              className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 hover:border-[#002b5e] hover:shadow-sm transition-all group bg-white text-left"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#002b5e] rounded flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">📄</span>
                </div>
                <span className="text-[9px] font-semibold text-slate-600 leading-tight">Información sobre <br/> certificaciones</span>
              </div>
            </button>
            <button 
              onClick={() => setChatView('chat')}
              className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 hover:border-[#002b5e] hover:shadow-sm transition-all group bg-white text-left"
            >
              <div className="flex items-center gap-2">
                <UserCircle className="w-5 h-5 text-[#002b5e]" />
                <span className="text-[9px] font-semibold text-slate-600 leading-tight">Hablar con un <br/> asesor humano</span>
              </div>
            </button>
          </div>
          
          {/* wsp */}
          <div className="bg-[#e8f5e9] rounded-lg p-3 flex flex-col items-center justify-center gap-2 border border-green-200 mt-4">
             <div className="flex flex-col items-center text-center">
                <p className="text-[10px] font-bold text-[#1b5e20] mb-0.5">¿Prefieres WhatsApp?</p>
                <p className="text-[9px] text-[#2e7d32]">Te atendemos de forma rápida y personalizada.</p>
             </div>
             <a 
               href="https://wa.me/14692158327" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-[#25D366] hover:bg-[#1da851] text-white text-[10px] font-bold py-1.5 px-4 rounded-full transition-colors flex items-center gap-1.5 shadow-sm"
             >
               <MessageCircle size={12} />
               Ir a WhatsApp →
             </a>
          </div>

          
        </div>
        
      </div>

      

      {/* Input Falso Inferior */}
      <div className="p-4 bg-white border-t border-slate-100 rounded-b-2xl">
        <div 
          onClick={() => setChatView('chat')}
          className="w-full bg-slate-50 border border-slate-200 rounded-full px-4 py-3 flex items-center justify-between cursor-text hover:border-[#002b5e] transition-colors"
        >
          <div className="flex items-center gap-2 text-slate-400">
            <Paperclip size={14} />
            <span className="text-[11px]">Escribe tu mensaje...</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-[#ff7414] flex items-center justify-center text-white shrink-0 shadow-md">
            <Send size={12} className="-ml-0.5" />
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="text-[8px] text-slate-400 flex items-center justify-center gap-1 font-medium">
             <Shield size={10} className="text-[#002b5e]" /> AMPREH - Tu seguridad, nuestra especialidad.
          </p>
        </div>
      </div>
    </div>
  )

  

  // --- VISTA 2: CHAT (Conversación activa) ---
  const renderChatView = () => (
    <div className="flex flex-col h-full bg-[#f4f7f9]">
      <div className="bg-[#002b5e] p-4 flex items-center justify-between rounded-t-2xl shadow-md z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
            <Bot size={16} className="text-white" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-white leading-tight">Asesor AMPREH</h3>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              <span className="text-[9px] text-blue-200 font-medium">Asistente Virtual</span>
            </div>
          </div>
        </div>
        <button onClick={toggleChat} className="text-white/80 hover:text-white transition-colors p-1">
          <X size={18} strokeWidth={2.5} />
        </button>
      </div>

      {/* Historial de Mensajes */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-[11px]">
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 rounded-full bg-[#002b5e] shrink-0 flex items-center justify-center text-white shadow-sm mb-4">
             <Bot size={12} />
          </div>
          <div className="flex flex-col">
            <div className="bg-white border border-slate-200 text-slate-700 rounded-2xl rounded-bl-sm p-3 shadow-sm max-w-[90%]">
              <p className="mb-2">¡Hola! 👋<br/>Soy el asesor virtual de AMPREH.</p>
              <p>Estoy aquí para ayudarte con información sobre nuestros servicios, capacitaciones y más. ¿En qué puedo asistirte hoy?</p>
            </div>
            <span className="text-[8px] text-slate-400 mt-1 ml-1 font-medium">10:24 a. m.</span>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="bg-[#002b5e] text-white rounded-2xl rounded-br-sm p-3 shadow-sm max-w-[85%]">
            <p className='text-white'>Me gustaría saber más sobre las capacitaciones en atención prehospitalaria.</p>
          </div>
          <div className="flex items-center gap-1 mt-1 mr-1">
            <span className="text-[8px] text-slate-400 font-medium">10:25 a. m.</span>
            <span className="text-[8px] text-blue-500">✓✓</span>
          </div>
        </div>

        <div className="flex gap-2 items-end">
           <div className="w-6 h-6 rounded-full bg-[#002b5e] shrink-0 flex items-center justify-center text-white shadow-sm mb-4">
             <Bot size={12} />
          </div>
          <div className="flex flex-col w-full">
            <div className="bg-white border border-slate-200 text-slate-700 rounded-2xl rounded-bl-sm p-3 shadow-sm max-w-[90%]">
              <p className="mb-2">¡Perfecto! Contamos con programas de capacitación en atención prehospitalaria, control de hemorragias y respuesta a emergencias, con certificaciones internacionales.</p>
              <p>¿Te gustaría que te envíe más detalles o que un asesor se comunique contigo?</p>
            </div>
            <span className="text-[8px] text-slate-400 mt-1 ml-1 font-medium">10:25 a. m.</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pl-8 pt-2">
          <button className="bg-[#ff7414] hover:bg-[#e66a0c] text-white text-[10px] font-bold py-1.5 px-3 rounded-full flex items-center gap-1 shadow-sm transition-colors">
            Ver capacitaciones →
          </button>
          <button className="bg-white border border-slate-300 text-slate-600 hover:border-[#002b5e] hover:text-[#002b5e] text-[10px] font-semibold py-1.5 px-3 rounded-full shadow-sm transition-colors">
            Hablar con un asesor
          </button>
        </div>
      </div>

      <div className="p-3 bg-[#f4f7f9] border-t border-slate-200 rounded-b-2xl">
        <form 
          onSubmit={(e) => { e.preventDefault(); }}
          className="w-full bg-white border border-slate-200 rounded-full pl-4 pr-1.5 py-1.5 flex items-center justify-between shadow-sm focus-within:border-[#002b5e] focus-within:ring-1 focus-within:ring-[#002b5e] transition-all"
        >
          <input 
            type="text" 
            placeholder="Escribe tu mensaje..." 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full text-[11px] text-slate-700 outline-none bg-transparent placeholder:text-slate-400"
          />
          <button 
            type="submit"
            className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors bg-[#ff7414] hover:bg-[#e66a0c] text-white shadow-md"
          >
            <Send size={12} className="-ml-0.5" />
          </button>
        </form>
        <div className="text-right mt-1.5 pr-2">
          <span className="text-[8px] text-slate-400 font-medium">Powered by AMPREH</span>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        
        {!isOpen && (
          <a 
            href="https://wa.me/14692158327" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-[52px] h-[52px] bg-[#25D366] hover:bg-[#1da851] rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] flex items-center justify-center text-white transition-transform hover:scale-110 mb-1"
            aria-label="Contactar por WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
          </a>
        )}

        {/* 2. Botón del Chat Principal (Ambos de 52px con ícono de Bot) */}
        <button
          onClick={toggleChat}
          className="w-[52px] h-[52px] bg-[#002b5e] hover:bg-[#003d82] rounded-full shadow-[0_8px_24px_rgba(0,43,94,0.4)] flex items-center justify-center text-white transition-transform hover:scale-105 relative"
          aria-label="Abrir chat"
        >
          {isOpen ? <X size={26} strokeWidth={2.5} /> : <Bot size={26} strokeWidth={2} />}
          
          {!isOpen && (
            <span className="absolute -top-0.5 -right-0.5 flex h-[16px] w-[16px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff7414] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-[16px] w-[16px] bg-[#ff7414] border-[2px] border-white"></span>
            </span>
          )}
        </button>
      </div>
      
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[340px] h-[580px] max-h-[80vh] bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.2)] flex flex-col z-50 overflow-hidden font-['Plus_Jakarta_Sans'] border border-slate-200 origin-bottom-right animate-in fade-in zoom-in duration-200">
          {chatView === 'home' ? renderHomeView() : renderChatView()}
        </div>
      )}
    </>
  )
}