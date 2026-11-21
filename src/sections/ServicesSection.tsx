import FadeIn from '../components/FadeIn'

const SERVICES = [
  {
    number: '01',
    name: 'Backend Engineering',
    description: 'Python, C++, and FastAPI across full-stack and AI-enabled application backends.',
  },
  {
    number: '02',
    name: 'Full-Stack Development',
    description: 'React and TypeScript interfaces connected to FastAPI services and application data.',
  },
  {
    number: '03',
    name: 'AI / Computer Vision',
    description: 'Applied AI using YOLOv8, Gemini Vision OCR, and agentic planning workflows.',
  },
  {
    number: '04',
    name: 'Assistive Technology',
    description: 'Voice-guided interaction, product recognition, OCR, and audio feedback for accessible shopping.',
  },
  {
    number: '05',
    name: 'Data & Persistence',
    description: 'MySQL, Firebase Authentication, and Cloud Firestore for application data and saved plans.',
  },
  {
    number: '06',
    name: 'Connected Data Systems',
    description: 'Google Earth Engine, Open-Meteo, INCOIS PFZ bulletins, GPS, and the AWS Pricing API.',
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-shell bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Skills
        </h2>
      </FadeIn>

      <div className="relative mx-auto grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-3">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.08} y={20}>
            <article className="skill-card group" tabIndex={0}>
              <div className="skill-card-front">
                <div className="flex items-center justify-between gap-4">
                  <span className="skill-number">{service.number}</span>
                  <div className="skill-divider" />
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="skill-title">{service.name}</h3>
                </div>
              </div>

              <div className="skill-card-back">
                <p className="skill-back-copy">{service.description}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
