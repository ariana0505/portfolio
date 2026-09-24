import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    company: 'BiblioMatch',
    role: {
      en: 'Full-stack Project',
      es: 'Proyecto Full Stack',
    },
    period: '2026',
    description: {
      en: 'Designed and built a school library platform with real workflows for students, librarians, and administrators.',
      es: 'Diseñé y construí una plataforma de biblioteca escolar con flujos reales para estudiantes, bibliotecarios y administradores.',
    },
    highlights: [
      {
        en: 'Implemented secure sessions, CSRF protection, role checks, input validation, and login rate limits',
        es: 'Implementé sesiones seguras, protección CSRF, control de roles, validación de entradas y límites de intentos de acceso',
      },
      {
        en: 'Built catalog, inventory, request, loan, review, user management, and reporting flows',
        es: 'Construí flujos de catálogo, inventario, solicitudes, préstamos, opiniones, usuarios y estadísticas',
      },
      {
        en: 'Added AI-assisted recommendations, study tools, and an interactive 3D library experience',
        es: 'Añadí recomendaciones con IA, herramientas de estudio y una experiencia de biblioteca 3D interactiva',
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
      en: 'Completed a Python file for every problem in a curated 75-problem collection and published a bilingual companion website.',
      es: 'Completé un archivo Python para cada problema de una colección curada de 75 retos y publiqué un sitio bilingüe complementario.',
    },
    highlights: [
      {
        en: 'Created 75/75 solution files and continue reviewing edge cases and correctness',
        es: 'Creé 75/75 archivos de solución y continúo revisando casos límite y corrección',
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
    company: 'Independent Learning',
    role: {
      en: 'Web Development Foundations',
      es: 'Fundamentos de Desarrollo Web',
    },
    period: '2024 - 2025',
    description: {
      en: 'Started my programming journey with web fundamentals and now maintain 19 public repositories across Python, JavaScript, and TypeScript.',
      es: 'Comencé mi camino en programación con fundamentos web y hoy mantengo 19 repositorios públicos en Python, JavaScript y TypeScript.',
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
