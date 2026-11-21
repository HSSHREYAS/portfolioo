import type { ProjectVisualKind } from '../content/projects'

export default function ProjectGlyph({ kind, className = '' }: { kind: ProjectVisualKind; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 280" fill="none" aria-hidden="true">
      {kind === 'matsya' && (
        <>
          <path d="M0 60H400M0 130H400M0 200H400M60 0V280M140 0V280M220 0V280M300 0V280" stroke="currentColor" strokeOpacity=".16" />
          <path d="M278 -8C244 25 270 49 238 73S262 105 220 130s8 42-25 64 4 44-25 72" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M62 204C118 179 150 149 205 145S279 109 344 80" stroke="currentColor" strokeWidth="2" strokeDasharray="7 10" />
          <circle cx="62" cy="204" r="8" fill="currentColor" /><circle cx="205" cy="145" r="8" fill="currentColor" /><circle cx="344" cy="80" r="8" fill="currentColor" />
        </>
      )}
      {kind === 'smartshop' && (
        <>
          <rect x="130" y="37" width="140" height="206" rx="18" stroke="currentColor" strokeWidth="2" />
          <path d="M150 68v-18h20M250 50h20v18M150 212v18h20M250 230h20v-18" stroke="currentColor" strokeWidth="3" />
          <path d="M176 108h48M176 132h48M176 156h48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".55" />
          <circle cx="200" cy="185" r="18" stroke="currentColor" strokeWidth="2" />
          <path d="m192 185 6 6 11-13" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {kind === 'costra' && (
        <>
          <path d="M45 225H358M45 185H358M45 145H358M45 105H358" stroke="currentColor" strokeOpacity=".18" />
          <path d="M77 225v-45h25v45M128 225v-84h25v84M179 225v-63h25v63M230 225v-112h25v112M281 225v-91h25v91M332 225v-55h25v55" fill="currentColor" fillOpacity=".3" stroke="currentColor" strokeWidth="2" />
          <path d="m59 128 73-27 51 19 70-55 66 10 48-33" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="367" cy="42" r="6" fill="currentColor" />
        </>
      )}
      {kind === 'planwise' && (
        <>
          <rect x="115" y="28" width="170" height="47" rx="8" stroke="currentColor" strokeWidth="2" />
          <path d="M200 75v39M66 114h268M66 114v22M155 114v22M245 114v22M334 114v22" stroke="currentColor" strokeWidth="2" strokeDasharray="5 6" />
          <rect x="27" y="136" width="78" height="96" rx="9" stroke="currentColor" strokeWidth="2" />
          <rect x="116" y="136" width="78" height="96" rx="9" stroke="currentColor" strokeWidth="2" />
          <rect x="205" y="136" width="78" height="96" rx="9" stroke="currentColor" strokeWidth="2" />
          <rect x="294" y="136" width="78" height="96" rx="9" stroke="currentColor" strokeWidth="2" />
          <path d="M45 164h42M134 164h42M223 164h42M312 164h42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M45 182h25M134 182h31M223 182h25M312 182h35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".6" />
        </>
      )}
    </svg>
  )
}
