import FadeIn from '../components/FadeIn'

const SERVICES = [
  {
    number: '01',
    name: 'Languages',
    description: 'Python (primary), SQL, JavaScript, C++, and C.',
  },
  {
    number: '02',
    name: 'Backend & APIs',
    description: 'FastAPI, REST API design, JSON contracts, JWT authentication, Node.js, Express.js, and third-party API integration.',
  },
  {
    number: '03',
    name: 'Databases',
    description: 'MySQL, SQLAlchemy, and Firebase Cloud Firestore for relational data and persistent application state.',
  },
  {
    number: '04',
    name: 'AI & Computer Vision',
    description: 'YOLOv8, OpenCV, OCR, text-to-speech, NumPy, and multi-stage real-time inference pipelines.',
  },
  {
    number: '05',
    name: 'AWS & Cloud',
    description: 'AWS Pricing API, Lambda and S3 pricing, EC2 cost modelling, Render deployment, and Firebase Authentication.',
  },
  {
    number: '06',
    name: 'Frontend & Mobile',
    description: 'React, TypeScript, JavaScript, and Android Studio for responsive web and mobile applications.',
  },
  {
    number: '07',
    name: 'Connected Data Systems',
    description: 'AWS Pricing API, Google Maps, satellite data, INCOIS PFZ advisories, and live marine weather feeds.',
  },
  {
    number: '08',
    name: 'Engineering Practice',
    description: 'Integration testing, debugging, technical documentation, Git, GitHub, and Linux/Unix.',
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
