import { Outlet } from 'react-router'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'
import { CustomCursor } from '@/components/CustomCursor'
import { ScrollProgress } from '@/components/ScrollProgress'
import { InteractiveBackground } from '@/components/InteractiveBackground'
import { useTranslation } from 'react-i18next'

export function MainLayout() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex flex-col relative">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-transform focus:translate-y-0 dark:bg-white dark:text-gray-900"
      >
        {t('accessibility.skip_content')}
      </a>
      <CustomCursor />
      <ScrollProgress />
      <InteractiveBackground />
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
