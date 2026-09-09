import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ROUTES } from './constants/routes';

// 🏗️ IMPORTACIONES EXACTAS SEGÚN LOS NOMBRES DE TUS ARCHIVOS
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import CoursesSection from './components/courses-section';
import ContactSection from './components/contact-section';

import Inicio from './pages/Inicio';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { 
    window.scrollTo({ top: 0, behavior: 'instant' }); 
  }, [pathname]);
  return null;
}

function LayoutPrincipal() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
      <main className="flex-grow">
        <Outlet /> 
      </main>
      <SiteFooter /> 
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <SiteHeader />
      
      <Routes>
        <Route element={<LayoutPrincipal />}>
          <Route path={ROUTES.INICIO} element={<Inicio />} />
          <Route path={ROUTES.NOSOTROS} element={<AboutSection />} />
          <Route path={ROUTES.SERVICIOS} element={<ServicesSection />} />
          <Route path={ROUTES.CURSOS} element={<CoursesSection />} />
          <Route path={ROUTES.CONTACTO} element={<ContactSection />} />
        </Route>
      </Routes>
    </>
  );
}