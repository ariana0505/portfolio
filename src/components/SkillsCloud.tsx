import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { skills, skillCategories } from '@/data/skills'
import { SECTION_IDS } from '@/lib/constants'
import { AnimatedSection } from './AnimatedSection'

export function SkillsCloud() {
  const { t } = useTranslation()
  const categoryLabels: Record<string, string> = {
    Languages: t('skills.categories.languages'),
    Web: t('skills.categories.web'),
    Data: t('skills.categories.data'),
    Tools: t('skills.categories.tools'),
  }

  return (
    <section id={SECTION_IDS.skills} className="border-t border-gray-900/10 px-6 py-24 dark:border-white/10">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-display text-4xl font-extrabold tracking-[-0.04em] text-gray-950 dark:text-white md:text-5xl">
              {t('skills.subtitle')}
            </h2>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              {t('skills.title')}
            </span>
          </div>
        </AnimatedSection>

        <div className="border-t border-gray-900/15 dark:border-white/15">
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = skills.filter((skill) => skill.category === category)
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: categoryIndex * 0.06 }}
                className="grid gap-5 border-b border-gray-900/15 py-7 md:grid-cols-[220px_1fr] md:items-center dark:border-white/15"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-primary-600 dark:text-primary-400">0{categoryIndex + 1}</span>
                  <h3 className="font-display text-lg font-bold text-gray-950 dark:text-white">{categoryLabels[category]}</h3>
                </div>
                <div className="flex flex-wrap gap-x-7 gap-y-3">
                  {categorySkills.map((skill) => (
                    <span key={skill.name} className="text-base font-medium text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
