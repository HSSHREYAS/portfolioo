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
  accent: string
  visual: ProjectVisualKind
}

export const PROJECTS: PortfolioProject[] = [
  {
    number: '01',
    category: 'Marine Intelligence / Sea Safety',
    name: 'MatsyaMitra',
    role: 'Lead Developer & Project Researcher',
    problem: 'Small-scale fishermen along coastal Karnataka need useful fishing and safety information, but satellite data, marine forecasts, and official bulletins arrive through separate sources.',
    description: 'A Kannada-first Android application that brings marine signals into practical decisions for small-scale fishermen.',
    approach: 'Combined Google Earth Engine satellite data, Open-Meteo marine forecasts, and official INCOIS PFZ bulletins with fishing-zone recommendations, sea-safety verdicts, GPS navigation, Kannada voice advisories, and emergency SOS.',
    outcome: 'Working prototype covering 25 coastal ports from Karwar to Ullal.',
    technologies: ['Android', 'Google Earth Engine', 'Open-Meteo', 'INCOIS PFZ', 'GPS'],
    accent: '#69d7c6',
    visual: 'matsya',
  },
  {
    number: '02',
    category: 'Applied AI / Assistive Technology',
    name: 'SmartShop AI',
    role: 'Lead Developer & Research Paper Author',
    problem: 'Shopping independently can be difficult when products, labels, and navigation depend on visual information.',
    description: 'An assistive shopping system that combines product detection, OCR, and spoken guidance for visually impaired users.',
    approach: 'Built a React and TypeScript frontend with a FastAPI and Python backend. YOLOv8 detection and Gemini Vision OCR run in parallel, alongside voice-guided navigation and audio feedback.',
    outcome: 'Functional AI prototype; the research paper was selected at ICSSES 2026.',
    technologies: ['React', 'TypeScript', 'FastAPI', 'Python', 'YOLOv8', 'Gemini Vision OCR'],
    accent: '#80b0ff',
    visual: 'smartshop',
  },
  {
    number: '03',
    category: 'Cloud / Cost Optimization',
    name: 'Costra',
    role: 'Full-Stack Developer',
    problem: 'Teams need a clear way to examine cloud costs and spot possible inefficiencies across services and usage.',
    description: 'A cloud cost analysis platform that surfaces potential inefficiencies and recommends cost-saving opportunities.',
    approach: 'Connected a React frontend and FastAPI backend to a rule-based analysis engine, AWS Pricing API, MySQL, and Firebase Authentication.',
    outcome: 'Modular architecture separates the frontend, API layer, cost engine, and pricing-data integration.',
    technologies: ['React', 'FastAPI', 'AWS Pricing API', 'MySQL', 'Firebase Authentication'],
    accent: '#f1ad62',
    visual: 'costra',
  },
  {
    number: '04',
    category: 'Agentic AI / Personal Planning',
    name: 'PlanWise AI',
    role: 'Full-Stack Developer & AI Engineer',
    problem: 'Planning from an open-ended request means translating intent into steps, finding relevant information, and checking constraints.',
    description: 'An AI planning assistant that turns natural-language requests into structured, actionable plans.',
    approach: 'Designed an agentic flow for planning, information retrieval, constraint validation, and schedule generation, with persistent profiles and saved plans using Firebase Authentication and Cloud Firestore.',
    outcome: 'End-to-end architecture connects AI-driven planning with persistent profiles and saved plans.',
    technologies: ['React', 'AI agents', 'Firebase Authentication', 'Cloud Firestore'],
    accent: '#c79aff',
    visual: 'planwise',
  },
]
