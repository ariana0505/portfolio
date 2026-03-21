import { Outlet } from 'react-router'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'
import { CustomCursor } from '@/components/CustomCursor'
import { ScrollProgress } from '@/components/ScrollProgress'
import { InteractiveBackground } from '@/components/InteractiveBackground'

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <CustomCursor />
      <ScrollProgress />
      <InteractiveBackground />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
