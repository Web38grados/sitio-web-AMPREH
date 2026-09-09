
export const ROUTES = {
  INICIO: '/',
  NOSOTROS: '/nosotros',
  SERVICIOS: '/servicios',
  CURSOS: '/cursos',
  CONTACTO: '/contacto',
} as const;

export const NAVIGATION_LINKS = [
  { path: ROUTES.INICIO, label: 'Inicio' },
  { path: ROUTES.NOSOTROS, label: 'Nosotros' },
  { path: ROUTES.SERVICIOS, label: 'Servicios' },
  { path: ROUTES.CURSOS, label: 'Cursos y Certificaciones' },
  { path: ROUTES.CONTACTO, label: 'Contacto' },
];