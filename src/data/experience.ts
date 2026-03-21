import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    company: 'Personal Projects',
    role: {
      en: 'Self-Taught Developer',
      es: 'Desarrolladora Autodidacta',
    },
    period: '2025 - Present',
    description: {
      en: 'Building personal projects and learning through practice across multiple languages and technologies.',
      es: 'Construyendo proyectos personales y aprendiendo a través de la práctica en múltiples lenguajes y tecnologías.',
    },
    highlights: [
      {
        en: 'Built and maintained 13+ repositories on GitHub covering Python, JavaScript, and TypeScript',
        es: 'Construí y mantuve más de 13 repositorios en GitHub abarcando Python, JavaScript y TypeScript',
      },
      {
        en: 'Developed a static site with Astro as my first frontend framework project',
        es: 'Desarrollé un sitio estático con Astro como mi primer proyecto con un framework frontend',
      },
      {
        en: 'Learning backend fundamentals with Node.js and server-side JavaScript',
        es: 'Aprendiendo fundamentos de backend con Node.js y JavaScript del lado del servidor',
      },
    ],
  },
  {
    company: 'LeetCode Practice',
    role: {
      en: 'Algorithm & Data Structures',
      es: 'Algoritmos y Estructuras de Datos',
    },
    period: '2025 - Present',
    description: {
      en: 'Solving the LeetCode 75 curated problem list in Python to build a strong foundation in algorithmic thinking.',
      es: 'Resolviendo la lista curada LeetCode 75 en Python para construir una base sólida en pensamiento algorítmico.',
    },
    highlights: [
      {
        en: 'Completed 38 of 75 problems (51%) across 9 categories',
        es: 'Completé 38 de 75 problemas (51%) en 9 categorías',
      },
      {
        en: 'Covered arrays, trees, dynamic programming, sliding window, and bit manipulation',
        es: 'Abarcando arreglos, árboles, programación dinámica, ventana deslizante y manipulación de bits',
      },
      {
        en: 'Deepened understanding of data structures through dedicated practice repository',
        es: 'Profundicé mi comprensión de estructuras de datos a través de un repositorio dedicado de práctica',
      },
    ],
  },
  {
    company: 'Online Courses',
    role: {
      en: 'Web Development Foundations',
      es: 'Fundamentos de Desarrollo Web',
    },
    period: '2024 - 2025',
    description: {
      en: 'Started my programming journey learning JavaScript, TypeScript, and web fundamentals through online courses and hands-on practice.',
      es: 'Comencé mi camino en la programación aprendiendo JavaScript, TypeScript y fundamentos web a través de cursos en línea y práctica.',
    },
    highlights: [
      {
        en: 'Learned JavaScript fundamentals and object-oriented programming',
        es: 'Aprendí fundamentos de JavaScript y programación orientada a objetos',
      },
      {
        en: 'Started with TypeScript for type-safe development',
        es: 'Comencé con TypeScript para desarrollo con tipos seguros',
      },
    ],
  },
]
