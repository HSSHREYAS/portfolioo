import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'
import HeroArtwork from '../components/HeroArtwork'
import { useReducedMotion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function HeroSection() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="h-screen flex flex-col relative isolate"
      style={{ overflowX: 'clip' }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden bg-[#0C0C0C]" aria-hidden="true">
        {!reduceMotion && (
          <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="none">
            <source src={`${import.meta.env.BASE_URL}background.mp4`} type="video/mp4" />
          </video>
        )}
        <div className="hero-film-scrim absolute inset-0" />
      </div>

      <FadeIn delay={0} y={-20} as="nav" className="hero-nav" ariaLabel="Main navigation">
        <div className="hero-nav__inner flex justify-between items-center gap-3 px-6 md:px-10 pt-6 md:pt-8 relative z-20">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-batman-btn"
            >
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </FadeIn>

      <div className="overflow-hidden mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[10vw] sm:text-[11vw] md:text-[11vw] lg:text-[11.5vw]">
            H.S. Shreyas
          </h1>
        </FadeIn>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-[41%] -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[min(90vw,620px)] sm:w-[min(58vw,680px)] lg:w-[min(48vw,760px)] pointer-events-none">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
              <HeroArtwork />
          </Magnet>
        </FadeIn>
      </div>

      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 relative z-20 mt-auto">
        <FadeIn delay={0.35} y={20}>
          <p
            className="hero-bottom-copy text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[260px] md:max-w-[360px]"
            style={{ fontSize: 'clamp(0.72rem, 1.1vw, 1rem)', whiteSpace: 'pre-line' }}
          >
            Aspiring Software Engineer{`\n`}Backend / Full-Stack / AI/ML{`\n`}2027 · Bengaluru, India
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  )
}
