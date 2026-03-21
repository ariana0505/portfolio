import type { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'leetcode75-python',
    title: {
      en: 'LeetCode 75 - Python',
      es: 'LeetCode 75 - Python',
    },
    description: {
      en: 'Solutions to the curated LeetCode 75 problem list in Python. 26 problems solved across 9 categories: arrays, trees, dynamic programming, sliding window, bit manipulation, and more.',
      es: 'Soluciones a la lista curada de 75 problemas de LeetCode en Python. 26 problemas resueltos en 9 categorías: arreglos, árboles, programación dinámica, ventana deslizante, manipulación de bits y más.',
    },
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
    tags: ['Python', 'Algorithms', 'Data Structures'],
    category: 'algorithms',
    liveUrl: 'https://ariana0505.github.io/leetcode75-python/',
    githubUrl: 'https://github.com/ariana0505/leetcode75-python',
    featured: true,
  },
  {
    slug: 'pokemon-static-site',
    title: {
      en: 'Pokemon Static Site',
      es: 'Sitio Estático de Pokemon',
    },
    description: {
      en: 'A static website built with Astro showcasing Pokemon data. My first experience with a modern frontend framework.',
      es: 'Un sitio web estático construido con Astro mostrando datos de Pokemon. Mi primera experiencia con un framework frontend moderno.',
    },
    image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=600&h=400&fit=crop',
    tags: ['Astro', 'HTML', 'CSS'],
    category: 'frontend',
    githubUrl: 'https://github.com/ariana0505/02-pokemon-static',
    featured: true,
  },
  {
    slug: 'nodejs-course',
    title: {
      en: 'Node.js Course Project',
      es: 'Proyecto del Curso de Node.js',
    },
    description: {
      en: 'Backend project built while learning Node.js fundamentals, including server creation, routing, and API basics.',
      es: 'Proyecto backend construido mientras aprendía los fundamentos de Node.js, incluyendo creación de servidores, rutas y conceptos básicos de APIs.',
    },
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop',
    tags: ['Node.js', 'JavaScript'],
    category: 'backend',
    githubUrl: 'https://github.com/ariana0505/Curso-Node-Js',
  },
]

export const projectCategories = ['all', ...new Set(projects.map((p) => p.category))]
