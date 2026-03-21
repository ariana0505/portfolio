import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export function CustomCursor() {
  const isPointerFine = useMediaQuery('(pointer: fine)')
  const [isHovering, setIsHovering] = useState(false)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 }
  const ringX = useSpring(cursorX, springConfig)
  const ringY = useSpring(cursorY, springConfig)

  useEffect(() => {
    if (!isPointerFine) return

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isPointerFine, cursorX, cursorY])

  useEffect(() => {
    if (!isPointerFine) return

    document.body.classList.add('cursor-none')

    const selectors = 'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'

    const handleEnter = () => setIsHovering(true)
    const handleLeave = () => setIsHovering(false)

    const addListeners = (el: Element) => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    }
    const removeListeners = (el: Element) => {
      el.removeEventListener('mouseenter', handleEnter)
      el.removeEventListener('mouseleave', handleLeave)
    }

    const elements = document.querySelectorAll(selectors)
    elements.forEach(addListeners)

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            if (node.matches(selectors)) addListeners(node)
            node.querySelectorAll(selectors).forEach(addListeners)
          }
        })
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.body.classList.remove('cursor-none')
      elements.forEach(removeListeners)
      observer.disconnect()
    }
  }, [isPointerFine])

  if (!isPointerFine) return null

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-primary-500"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHovering ? 4 : 8,
          height: isHovering ? 4 : 8,
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{ duration: 0.15 }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2 border-secondary-400/50"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          boxShadow: isHovering
            ? '0 0 20px rgba(31, 167, 179, 0.3)'
            : '0 0 0px rgba(31, 167, 179, 0)',
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  )
}
