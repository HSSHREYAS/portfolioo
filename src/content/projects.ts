export type ProjectVisualKind = 'matsya' | 'smartshop' | 'costra' | 'planwise'

export interface PortfolioProject {
  number: string
  category: string
  name: string
  role: string
  problem: string
  description: string
  approach: string
  outcome: string
  technologies: string[]
  repositoryUrl?: string
  liveDemoUrl?: string
  accent: string
  visual: ProjectVisualKind
}

export const PROJECTS: PortfolioProject[] = [
  {
    number: '01',
    category: 'Marine Intelligence / Sea Safety',
    name: 'MatsyaMitra',
    role: 'Lead Developer & Project Researcher',
    problem: 'Small-scale fishers need fishing and safety guidance drawn from marine data that is usually spread across separate services.',
    description: 'A Kannada-first Android app that turns marine data into practical decisions for small-scale fishers along coastal Karnataka.',
    approach: 'Combined INCOIS Potential Fishing Zone bulletins, Open-Meteo marine forecasts, and Google Earth Engine satellite signals. Zone scores account for congestion; the app adds sea-safety verdicts, Google Maps GPS navigation, Kannada voice advisories, Firebase Firestore sync, and emergency SOS.',
    outcome: 'Working prototype covering 25 coastal ports from Karwar to Ullal.',
    technologies: ['Android', 'Firebase Firestore', 'Google Maps', 'Google Earth Engine', 'Open-Meteo', 'INCOIS PFZ'],
    repositoryUrl: 'https://github.com/HSSHREYAS/MATSYA-MITRA-F',
    accent: '#69d7c6',
    visual: 'matsya',
  },
  {
    number: '02',
    category: 'Applied AI / Assistive Technology',
    name: 'SmartShop AI',
    role: 'Lead Developer & Research Paper Co-author',
    problem: 'Visually impaired shoppers can face barriers when products, labels, and nearby objects are communicated visually.',
    description: 'An assistive shopping prototype that recognizes products and text, then speaks useful information aloud.',
    approach: 'Built a real-time YOLOv8 detection → OCR → text-to-speech pipeline and exposed it through modular FastAPI endpoints. The React and TypeScript interface supports voice-guided navigation and audio feedback; detection and Gemini Vision OCR run in parallel to reduce response latency.',
    outcome: 'Built with a four-member team; the co-authored research paper was accepted at IEEE ICSSES 2026.',
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'YOLOv8', 'OCR', 'TTS', 'Gemini Vision'],
    accent: '#80b0ff',
    visual: 'smartshop',
  },
  {
    number: '03',
    category: 'Cloud / Cost Optimization',
    name: 'Costra',
    role: 'Full-Stack · Backend owner · 3-person team',
    problem: 'Cloud users need a practical way to estimate costs and identify potential inefficiencies across common AWS services.',
    description: 'A cloud cost optimization product that analyzes configurations and suggests potential savings.',
    approach: 'Owned the Python and FastAPI backend, REST JSON contracts, and stateless JWT authentication. The analysis engine uses AWS Pricing API data for Lambda, S3, and EC2 cost modelling, with a React client and Firebase authentication. Deployed on Render with CORS, logging, environment secrets, and integration testing.',
    outcome: 'Live full-stack application with separate frontend, API, cost engine, and pricing-data integration.',
    technologies: ['Python', 'FastAPI', 'React', 'AWS Pricing API', 'JWT', 'MySQL', 'Render'],
    liveDemoUrl: 'https://costra-frontend.onrender.com',
    accent: '#f1ad62',
    visual: 'costra',
  },
  {
    number: '04',
    category: 'Agentic AI / Personal Planning',
    name: 'PlanWise AI',
    role: 'Full-Stack Developer & AI Engineer',
    problem: 'Turning an open-ended request into a useful plan requires breaking it into tasks, gathering information, and checking constraints.',
    description: 'An AI planning assistant that converts natural-language requests into structured, actionable plans.',
    approach: 'Designed an agentic workflow for planning, information retrieval, constraint validation, and schedule generation. Firebase Authentication and Cloud Firestore support persistent profiles and saved plans.',
    outcome: 'End-to-end planning application with a live demo and persistent user data.',
    technologies: ['React', 'AI agents', 'Firebase Authentication', 'Cloud Firestore'],
    repositoryUrl: 'https://github.com/HSSHREYAS/Planwise-AI',
    liveDemoUrl: 'https://planwise-ai-bqcm.onrender.com/',
    accent: '#c79aff',
    visual: 'planwise',
  },
]
