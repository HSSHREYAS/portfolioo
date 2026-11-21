import { motion, useReducedMotion } from 'framer-motion'
import type { ElementType, ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  as?: ElementType
  className?: string
  ariaLabel?: string
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
  ariaLabel,
}: FadeInProps) {
  const reduceMotion = useReducedMotion()
  const MotionTag = motion.create ? motion.create(as as ElementType) : (motion as any)(as)

  return (
    <MotionTag
      className={className}
      aria-label={ariaLabel}
      initial={reduceMotion ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={reduceMotion ? { duration: 0 } : { delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  )
}
