import { Github, Linkedin, Mail } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import ContactButton from '../components/ContactButton'

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn delay={0} y={30}>
        <div className="flex flex-col items-center gap-8 text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
          >
            Let&apos;s talk
          </h2>
          <p className="text-[#D7E2EA]/70 font-light max-w-md" style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)' }}>
            I’m looking for an entry-level software engineering opportunity across backend, full-stack development, and applied AI/ML. Feel free to get in touch.
          </p>
          <ContactButton href="mailto:hsshreyas.1si23cs056@gmail.com" label="Email Me" />

          <div className="card" role="group" aria-label="Professional contact links">
            <a className="social-link1" href="https://www.linkedin.com/in/hsshreyas/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <Linkedin />
            </a>
            <a className="social-link2" href="https://github.com/HSSHREYAS" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <Github />
            </a>
            <a className="social-link3" href="mailto:hsshreyas.1si23cs056@gmail.com" aria-label="Email H.S. Shreyas">
              <Mail />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-[#D7E2EA]/65">
            <span className="uppercase tracking-[0.16em] text-[10px] text-[#D7E2EA]/40">Coding profiles</span>
            <a className="text-link" href="https://leetcode.com/u/hsshreyas2005/" target="_blank" rel="noopener noreferrer">LeetCode ↗</a>
            <a className="text-link" href="https://www.geeksforgeeks.org/user/hsshreyas1qmrr/" target="_blank" rel="noopener noreferrer">GeeksforGeeks ↗</a>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
