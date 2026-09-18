
import { HeroSection } from '../components/hero-section';
import { ClientProof } from '../components/ClientProof';
import { ImpactSection } from '../components/ImpactSection';
import AboutPreview from '../components/AboutPreview';
import { CertificationsShowcase } from '../components/CertificationsShowcase'
// import { ScrollytellingCertifications } from '../components/ScrollytellingCertifications';
import { CTADefinitivo } from '../components/CTADefinitivo';
import { PilaresValor } from '../components/PilaresValor';
import { CursosPreview } from './CursosPreview';

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
      <CTADefinitivo></CTADefinitivo>
    </div>
  );
}