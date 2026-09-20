
import { HeroSection } from '../components/hero-section';
import { ClientProof } from '../components/ClientProof';
import { ImpactSection } from '../components/ImpactSection';
import AboutPreview from '../components/AboutPreview';
import { CertificationsShowcase } from '../components/CertificationsShowcase'
// import { ScrollytellingCertifications } from '../components/ScrollytellingCertifications';
// import { CTADefinitivo } from '../components/CTADefinitivo';
// import { PilaresValor } from '../components/PilaresValor';
import { CursosPreview } from './CursosPreview';
import CtaSection from '../components/CtaSection';
import bgBomberosTeam from '../assets/bomberos-team.jpg'
import { Flame, PlusSquare, ShieldCheck, Users } from 'lucide-react';
export default function Inicio() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ClientProof />
      <ImpactSection></ImpactSection>
      <AboutPreview></AboutPreview>
      <CertificationsShowcase></CertificationsShowcase>
      <CursosPreview></CursosPreview>
      {/* <ScrollytellingCertifications></ScrollytellingCertifications> */}
      {/* <PilaresValor></PilaresValor> */}
      <CtaSection
          badge="TU SEGURIDAD, NUESTRA MISIÓN"
          titlePart1="Estamos listos para apoyar"
          highlightText="la seguridad de tu organización"
          description="Garantiza el cumplimiento normativo ante la STPS y OSHA. Protege a tu personal con instructores especializados y protocolos de élite internacional."
          imageUrl={bgBomberosTeam}
          primaryButtonText="SOLICITAR COTIZACIÓN"
          secondaryButtonText="WHATSAPP DIRECTO"
          secondaryButtonClassName="bg-[#25D366] border border-[#25D366] hover:bg-[#128C7E] hover:border-[#128C7E] text-white px-8 py-3.5 rounded text-[11px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-lg"
          onSecondaryClick={() => window.open('https://wa.me/5214692158327', '_blank')}
          features={[
            { 
              icon: ShieldCheck, 
              title: "Capacitación Certificada", 
              description: "Avalada por estándares nacionales e internacionales." 
            },
            { 
              icon: Flame, 
              title: "Instructores Especializados", 
              description: "Profesionales con experiencia en campo." 
            },
            { 
              icon: PlusSquare, 
              title: "Práctica Real", 
              description: "Simulaciones y escenarios que te preparan para la vida real." 
            },
            { 
              icon: Users, 
              title: "Más Oportunidades", 
              description: "Potencia tu perfil profesional en el sector de emergencias." 
            }
          ]}
      />
    </div>
  );
}