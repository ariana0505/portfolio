import type { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'bibliomatch',
    title: {
      en: 'BiblioMatch',
      es: 'BiblioMatch',
    },
    description: {
      en: 'A full-stack school library platform with role-based access, catalog and loan management, reviews, learning progress, AI reading recommendations, and an interactive 3D library.',
      es: 'Plataforma full stack para bibliotecas escolares con acceso por roles, gestión de catálogo y préstamos, opiniones, progreso de aprendizaje, recomendaciones con IA y una biblioteca 3D interactiva.',
    },
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=800&fit=crop&auto=format&q=80',
    tags: ['Python', 'MongoDB', 'JavaScript', 'AI'],
    category: 'fullstack',
    liveUrl: 'https://bibliomatch.vercel.app',
    githubUrl: 'https://github.com/ariana0505/bibliomatch',
    featured: true,
  },
  {
    slug: 'leetcode75-python',
    title: {
      en: 'LeetCode 75 - Python',
      es: 'LeetCode 75 - Python',
    },
    description: {
      en: 'A bilingual collection with Python files for all 75 problems, organized by pattern and paired with an Astro website for browsing statements and solutions.',
      es: 'Colección bilingüe con archivos Python para los 75 problemas, organizada por patrones y acompañada de un sitio en Astro para explorar enunciados y soluciones.',
    },
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
    tags: ['Python', 'Algorithms', 'Data Structures'],
    category: 'algorithms',
    liveUrl: 'https://ariana0505.github.io/leetcode75-python/',
    githubUrl: 'https://github.com/ariana0505/leetcode75-python',
    featured: true,
  },
  {
    slug: 'portfolio',
    title: {
      en: 'Developer Portfolio',
      es: 'Portafolio de Desarrollo',
    },
    description: {
      en: 'This bilingual portfolio, built as a responsive React application with typed content, dark mode, accessible navigation, project case studies, and a technical blog.',
      es: 'Este portafolio bilingüe, construido como una aplicación React responsive con contenido tipado, modo oscuro, navegación accesible, proyectos y blog técnico.',
    },
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=800&fit=crop&auto=format&q=80',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'i18n'],
    category: 'frontend',
    liveUrl: 'https://ariana0505.github.io/portfolio/',
    githubUrl: 'https://github.com/ariana0505/portfolio',
  },
  {
    slug: 'pokemon-static-site',
    title: {
      en: 'Pokemon Static Site',
      es: 'Sitio Estático de Pokémon',
    },
    description: {
      en: 'A fast static website built with Astro to present Pokémon data, focused on reusable components, structured content, and responsive design.',
      es: 'Un sitio estático rápido construido con Astro para presentar datos de Pokémon, con componentes reutilizables, contenido estructurado y diseño responsive.',
    },
    image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?w=1200&h=800&fit=crop&auto=format&q=80',
    tags: ['Astro', 'HTML', 'CSS'],
    category: 'frontend',
    githubUrl: 'https://github.com/ariana0505/02-pokemon-static',
  },
]

export const projectCategories = ['all', ...new Set(projects.map((p) => p.category))]
