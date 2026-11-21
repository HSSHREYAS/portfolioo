import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import ProjectGlyph from '../components/ProjectGlyph'
import { PROJECTS } from '../content/projects'

export default function MarqueeSection() {
  const [activeId, setActiveId] = useState('01')
  const reduceMotion = useReducedMotion()

  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden" aria-labelledby="project-notes-heading">
      <div className="px-5 pb-8 sm:px-8 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p id="project-notes-heading" className="text-[#D7E2EA]/50 uppercase tracking-[0.25em] text-xs sm:text-sm">Selected builds / Four project notes</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8 md:px-10">
        <div className="flex gap-2 sm:gap-3 pb-4" role="group" aria-label="Featured projects">
          {PROJECTS.map((project) => {
            const expanded = activeId === project.number

            return (
              <motion.button
                key={project.number}
                type="button"
                layout={!reduceMotion}
                onMouseEnter={() => setActiveId(project.number)}
                onMouseLeave={() => setActiveId('01')}
                onFocus={() => setActiveId(project.number)}
                onBlur={() => setActiveId('01')}
                onClick={() => setActiveId(project.number)}
                animate={{ flex: expanded ? 3 : 1.25, maxWidth: expanded ? 'min(500px, 44vw)' : 'min(130px, 10vw)' }}
                transition={reduceMotion ? { duration: 0 } : { type: 'spring', stiffness: 220, damping: 28 }}
                aria-expanded={expanded}
                aria-label={`${project.name} project note`}
                className="project-note relative flex-1 min-w-[44px] sm:min-w-[64px] snap-start overflow-hidden rounded-[26px] cursor-pointer"
                style={{ height: 'clamp(280px, 31vw, 400px)', ['--project-accent' as string]: project.accent }}
              >
                <div className="absolute inset-0 project-note__surface">
                  <div className="project-note__glow" />
                  <ProjectGlyph kind={project.visual} className="project-note__glyph" />
                  <span className="absolute left-4 top-4 z-10 text-xs font-semibold text-white/90 sm:text-sm">
                    {project.number}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
                    <motion.p
                      initial={false}
                      animate={{
                        opacity: expanded ? 1 : 0,
                        height: expanded ? 'auto' : 0,
                        marginBottom: expanded ? 12 : 0,
                      }}
                      transition={reduceMotion ? { duration: 0 } : { duration: 0.3 }}
                      className="overflow-hidden text-sm leading-relaxed text-white/90 sm:text-[15px]"
                    >
                      {project.description}
                    </motion.p>

                    <div className="flex items-center gap-2 text-white">
                      <span className="project-note__dot" aria-hidden="true" />
                      <motion.span
                        initial={false}
                        animate={{ opacity: expanded ? 1 : 0, width: expanded ? 'auto' : 0 }}
                        transition={reduceMotion ? { duration: 0 } : { duration: 0.25 }}
                        className="overflow-hidden whitespace-nowrap text-sm font-medium sm:text-[15px]"
                      >
                        {project.name}
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
