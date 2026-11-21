import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import LiveProjectButton from '../components/LiveProjectButton'
import ProjectGlyph from '../components/ProjectGlyph'
import { PROJECTS, type PortfolioProject } from '../content/projects'

function ProjectArtwork({ project }: { project: PortfolioProject }) {
  return (
    <div
      className="project-art relative h-full min-h-[320px] overflow-hidden rounded-[32px] border border-white/10 bg-[#11161d] sm:min-h-[360px]"
      style={{ ['--project-accent' as string]: project.accent }}
    >
      <div className="project-art__scene absolute inset-0" aria-hidden="true">
        <ProjectGlyph kind={project.visual} className="project-art__glyph" />
        <span className="project-art__stamp">H.S. SHREYAS / PROJECT {project.number}</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/[0.98] via-[#0C0C0C]/[0.83] to-[#0C0C0C]/[0.12]" />

      <div className="relative z-10 flex h-full flex-col justify-end gap-3 p-4 sm:gap-4 sm:p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-[10px] uppercase tracking-[0.2em] text-white/55 sm:text-xs">
          <span>Illustrative project visual</span>
          <span className="project-art__role"><span>My role</span> {project.role}</span>
        </div>

        <div className="grid gap-3 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          <div>
            <p className="project-art__label">The problem</p>
            <p className="project-art__problem">{project.problem}</p>
          </div>
          <div>
            <p className="project-art__label">What I built</p>
            <p className="project-art__approach">{project.approach}</p>
          </div>
        </div>

        <div className="project-art__outcome">
          <span>Outcome</span>
          <p>{project.outcome}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className="rounded-full border border-white/15 bg-black/20 px-2.5 py-1 text-[10px] uppercase tracking-wide text-white/75 sm:px-3 sm:text-xs">
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index, total }: { project: PortfolioProject; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start start'] })
  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div ref={ref} className="h-[85vh] flex items-start sticky top-24 md:top-32" style={{ top: `${index * 28}px` }}>
      <motion.div
        style={{ scale: reduceMotion ? 1 : scale, ['--project-accent' as string]: project.accent }}
        className="project-stack-card w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-3 sm:p-5 md:p-8 flex flex-col gap-4 sm:gap-6"
      >
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3 sm:gap-6 min-w-0">
            <span className="project-stack-number font-black leading-none" style={{ fontSize: 'clamp(2.8rem, 10vw, 140px)' }}>{project.number}</span>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-[10px] sm:text-sm">{project.category}</span>
              <h3 className="project-stack-title text-[#D7E2EA] font-medium uppercase text-xl sm:text-3xl md:text-4xl">{project.name}</h3>
            </div>
          </div>
          <LiveProjectButton href="#contact" label="Discuss project" className="project-discuss-button" />
        </div>
        <div className="flex-1 min-h-0">
          <ProjectArtwork project={project} />
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20" aria-labelledby="projects-heading">
      <FadeIn delay={0} y={40}>
        <h2 id="projects-heading" className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>Projects</h2>
      </FadeIn>
      <div className="flex flex-col gap-6">{PROJECTS.map((project, index) => <ProjectCard key={project.number} project={project} index={index} total={PROJECTS.length} />)}</div>
    </section>
  )
}
