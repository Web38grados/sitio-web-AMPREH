// 🚨 IMPORTACIONES EXACTAS A TU FOTO
import { HeroSection } from '../components/hero-section';
import { ClientProof } from '../components/ClientProof';

export default function Inicio() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ClientProof />
    </div>
  );
}