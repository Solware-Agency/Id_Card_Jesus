import { Employee } from '../types';

export const empleados: Employee[] = [
  {
    slug: 'eugenio-andreone',
    name: 'Jesus Freites',
    title: {
      en: 'Electronic Engineer',
      es: 'Ingeniero Electrónico'
    },
    company: {
      en: 'Solware Agency',
      es: 'Agencia Solware'
    },
    photo: '/images/eugenio-andreone.jpg',
    email: 'ventas@solware.agency',
    phone: '+58 414 2323332',
    whatsapp: '584120564628',
    linkedin: 'jesus-freites21',
    website: 'solware.agency',
    calendly: 'https://calendly.com/eugenio-andreone'
  }
];

export const getEmployeeBySlug = (slug: string): Employee | undefined => {
  return empleados.find(emp => emp.slug === slug);
};