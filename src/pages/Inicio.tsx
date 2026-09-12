
import { HeroSection } from '../components/hero-section';
import { ClientProof } from '../components/ClientProof';
import { ImpactSection } from '../components/ImpactSection';

export default function Inicio() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ClientProof />
      <ImpactSection></ImpactSection>
    </div>
  );
}