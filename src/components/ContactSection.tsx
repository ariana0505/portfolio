import { useTranslation } from 'react-i18next'
import { Send, Github, Mail, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { SECTION_IDS } from '@/lib/constants'
import { AnimatedSection } from './AnimatedSection'
import { socialLinks } from '@/data/social-links'
import type { FormEvent } from 'react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github, Mail,
}

export function ContactSection() {
  const { t } = useTranslation()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const message = data.get('message') as string
    window.location.href = `mailto:hello@example.com?subject=Contact from ${name} (${email})&body=${encodeURIComponent(message)}`
  }

  return (
    <section id={SECTION_IDS.contact} className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="font-mono text-sm font-medium text-primary-500 dark:text-primary-400 tracking-wider">
              {'// '}{t('contact.title')}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-3 tracking-tight">
              {t('contact.subtitle')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              {t('contact.description')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Form - 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={t('contact.name_placeholder')}
                    className="w-full rounded-xl border border-gray-200 dark:border-primary-800/50 bg-white dark:bg-surface-dark px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={t('contact.email_placeholder')}
                    className="w-full rounded-xl border border-gray-200 dark:border-primary-800/50 bg-white dark:bg-surface-dark px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={t('contact.message_placeholder')}
                  className="w-full rounded-xl border border-gray-200 dark:border-primary-800/50 bg-white dark:bg-surface-dark px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity cursor-pointer"
              >
                <Send className="h-4 w-4" />
                {t('contact.send')}
              </button>
            </form>
          </motion.div>

          {/* Social links - 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-3"
          >
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon]
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl bg-white dark:bg-surface-dark-elevated border border-gray-200 dark:border-primary-800/30 p-5 hover:border-primary-300 dark:hover:border-primary-600 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-900/40 flex items-center justify-center group-hover:from-primary-500 group-hover:to-secondary-500 transition-all">
                    {Icon && <Icon className="h-4 w-4 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm text-gray-900 dark:text-white">{link.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {link.url.replace(/^https?:\/\//, '').replace(/^mailto:/, '')}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-primary-500 transition-colors" />
                </a>
              )
            })}

            <div className="mt-auto pt-4 rounded-2xl bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 border border-gray-200 dark:border-primary-800/30 p-5">
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('contact.availability')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
