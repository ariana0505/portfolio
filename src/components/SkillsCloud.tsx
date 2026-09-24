import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { skills, skillCategories } from '@/data/skills'
import { SECTION_IDS } from '@/lib/constants'
import { SectionHeading } from './ui/SectionHeading'
import { AnimatedSection } from './AnimatedSection'

const categoryGlows: Record<string, string> = {
  Languages: 'hover:shadow-[0_0_20px_rgba(12,135,234,0.3)]',
  Web: 'hover:shadow-[0_0_20px_rgba(31,167,179,0.3)]',
  Tools: 'hover:shadow-[0_0_20px_rgba(147,197,253,0.3)]',
  Data: 'hover:shadow-[0_0_20px_rgba(103,232,249,0.3)]',
}

const categoryColors: Record<string, string> = {
  Languages: 'border-primary-500/40 bg-primary-500/10 text-primary-600 dark:text-primary-300',
  Web: 'border-secondary-500/40 bg-secondary-500/10 text-secondary-600 dark:text-secondary-300',
  Tools: 'border-primary-300/40 bg-primary-300/10 text-primary-500 dark:text-primary-300',
  Data: 'border-secondary-300/40 bg-secondary-300/10 text-secondary-500 dark:text-secondary-300',
}

const levelSizes: Record<number, string> = {
  3: 'text-xl font-bold px-5 py-2.5',
  2: 'text-base font-semibold px-4 py-2',
  1: 'text-sm font-medium px-3 py-1.5',
}

const rotations = [-2, 1, -1, 2, 0, -1.5, 1.5, -0.5, 0.5, -2, 1, 2]

export function SkillsCloud() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const categories = ['All', ...skillCategories]
  const categoryLabels: Record<string, string> = {
    Languages: t('skills.categories.languages'),
    Web: t('skills.categories.web'),
    Data: t('skills.categories.data'),
    Tools: t('skills.categories.tools'),
  }

  return (
    <section id={SECTION_IDS.skills} className="py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection>
          <SectionHeading title={t('skills.title')} subtitle={t('skills.subtitle')} />
        </AnimatedSection>

        {/* Category filters */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => {
              const isActive = category === 'All' ? activeCategory === null : activeCategory === category
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category === 'All' ? null : category)}
                  className={cn(
                    'relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors cursor-pointer',
                    isActive
                      ? 'text-white'
                      : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="skill-filter"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">
                    {category === 'All' ? t('skills.all') : categoryLabels[category]}
                  </span>
                </button>
              )
            })}
          </div>
        </AnimatedSection>

        {/* Tag cloud */}
        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {skills.map((skill, i) => {
            const isFiltered = activeCategory !== null && skill.category !== activeCategory
            return (
              <motion.span
                key={skill.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 },
                }}
                animate={isFiltered ? { opacity: 0.3, scale: 0.9 } : { opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className={cn(
                  'rounded-full border transition-shadow cursor-default',
                  levelSizes[skill.level],
                  categoryColors[skill.category],
                  categoryGlows[skill.category]
                )}
                style={{ transform: `rotate(${rotations[i % rotations.length]}deg)` }}
                title={skill.category}
              >
                {skill.name}
              </motion.span>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
