import FadeIn from '../components/FadeIn'

const EXPERIENCES = [
  {
    period: 'JAN 2024 — PRESENT',
    organization: 'Team Soaring Eagles · SAE India UAV Club',
    role: 'Automation & Software Team Member',
    details: [
      'Built and tested a real-time Python and YOLOv8 obstacle-detection pipeline on Raspberry Pi, and integrated LiDAR with autonomous UAV navigation.',
      'Implemented and debugged MAVLink telemetry between UAV and ground station using ArduPilot and Mission Planner; trained 30+ juniors and documented work for AeroTHON 2026 and NETRA UAS competitions.',
    ],
  },
  {
    period: 'JAN 2024 — PRESENT',
    organization: 'TEDxSIT',
    role: 'Sponsorship & Stakeholder Lead',
    details: [
      'Coordinate sponsors and stakeholders across a cross-functional event team of 40+ members.',
      'Supported the flagship event attended by 200+ people.',
    ],
  },
]

const RECOGNITION = [
  { label: 'UAV Challenge', result: 'Top 20 nationally', detail: 'IIT Bombay Techfest · Team Soaring Eagles' },
  { label: 'Smart India Hackathon', result: 'Top 5 teams', detail: 'Institutional selection · 100+ competing teams' },
  { label: 'Research', result: 'Paper accepted', detail: 'SmartShop AI · IEEE ICSSES 2026' },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-white px-5 sm:px-8 md:px-10 pt-12 sm:pt-16 md:pt-20 pb-24 sm:pb-28 md:pb-36" aria-labelledby="experience-heading">
      <div className="mx-auto max-w-6xl">
        <FadeIn delay={0} y={32}>
          <p className="text-center text-[#0C0C0C]/50 uppercase tracking-[0.25em] text-xs sm:text-sm">Teamwork / Leadership / Recognition</p>
          <h2 id="experience-heading" className="mt-4 text-[#0C0C0C] font-black uppercase text-center leading-none" style={{ fontSize: 'clamp(2.7rem, 9vw, 112px)' }}>
            Experience
          </h2>
        </FadeIn>

        <div className="mt-10 sm:mt-14 grid gap-4 lg:grid-cols-2">
          {EXPERIENCES.map((experience, index) => (
            <FadeIn key={experience.organization} delay={index * 0.08} y={22}>
              <article className="h-full rounded-[28px] bg-[#0C0C0C] p-6 text-[#D7E2EA] sm:rounded-[34px] sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-[#D7E2EA]/50 font-mono text-[10px] sm:text-xs tracking-[0.14em]">{experience.period}</p>
                    <h3 className="mt-3 text-xl sm:text-2xl font-medium uppercase leading-tight">{experience.organization}</h3>
                    <p className="mt-2 text-[#D7E2EA]/70 text-sm sm:text-base">{experience.role}</p>
                  </div>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/60">SIT · Bengaluru</span>
                </div>
                <ul className="mt-6 space-y-3 border-t border-white/10 pt-5">
                  {experience.details.map((detail) => (
                    <li key={detail} className="flex gap-3 text-sm leading-relaxed text-[#D7E2EA]/75 sm:text-[15px]">
                      <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#80b0ff]" aria-hidden="true" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12} y={22}>
          <div className="mt-16 sm:mt-20">
            <p className="text-[#0C0C0C]/50 uppercase tracking-[0.25em] text-xs sm:text-sm">Selected highlights</p>
            <h3 className="mt-3 text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0C0C0C]">Recognition</h3>
          </div>
        </FadeIn>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {RECOGNITION.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.06} y={18}>
              <article className="h-full rounded-[22px] border border-[#0C0C0C]/10 bg-[#F5F5F3] p-5 sm:p-6">
                <p className="text-[#0C0C0C]/50 uppercase tracking-[0.18em] text-[10px] sm:text-xs">{item.label}</p>
                <p className="mt-3 text-2xl font-semibold uppercase tracking-tight text-[#0C0C0C]">{item.result}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#0C0C0C]/65">{item.detail}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
