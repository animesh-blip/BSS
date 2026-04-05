// Beautiful SVG illustrations for the website
// These provide visual richness without needing external images

export function HeroIllustration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Warm gradient background shapes */}
      <circle cx="400" cy="300" r="250" fill="url(#heroGrad1)" opacity="0.15" />
      <circle cx="550" cy="200" r="150" fill="url(#heroGrad2)" opacity="0.2" />
      <circle cx="250" cy="400" r="120" fill="url(#heroGrad3)" opacity="0.15" />

      {/* Children silhouettes - stylized */}
      {/* Child 1 - jumping */}
      <g transform="translate(280, 220)">
        <circle cx="30" cy="15" r="15" fill="#e8630a" opacity="0.9" />
        <path d="M30 30 L30 70 M15 50 L45 50 M30 70 L15 95 M30 70 L45 95" stroke="#e8630a" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
        {/* Star above */}
        <path d="M30 -5 L32 -12 L38 -12 L33 -16 L35 -23 L30 -19 L25 -23 L27 -16 L22 -12 L28 -12Z" fill="#fbbf24" />
      </g>

      {/* Child 2 - reading */}
      <g transform="translate(380, 250)">
        <circle cx="25" cy="15" r="14" fill="#0d7377" opacity="0.9" />
        <path d="M25 29 L25 65 M12 48 L38 48 M25 65 L15 90 M25 65 L35 90" stroke="#0d7377" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
        {/* Book */}
        <rect x="35" y="38" width="20" height="15" rx="2" fill="#fbbf24" opacity="0.8" />
        <line x1="45" y1="38" x2="45" y2="53" stroke="white" strokeWidth="1" />
      </g>

      {/* Child 3 - arms up celebrating */}
      <g transform="translate(490, 230)">
        <circle cx="28" cy="15" r="14" fill="#e8630a" opacity="0.8" />
        <path d="M28 29 L28 68 M28 42 L10 25 M28 42 L46 25 M28 68 L18 93 M28 68 L38 93" stroke="#e8630a" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
        {/* Stars */}
        <circle cx="5" cy="15" r="3" fill="#fbbf24" />
        <circle cx="52" cy="10" r="2.5" fill="#fbbf24" />
      </g>

      {/* Tree */}
      <g transform="translate(160, 180)">
        <rect x="18" y="80" width="8" height="40" fill="#0d7377" opacity="0.6" />
        <circle cx="22" cy="60" r="30" fill="#0d7377" opacity="0.3" />
        <circle cx="10" cy="70" r="20" fill="#0d7377" opacity="0.25" />
        <circle cx="35" cy="65" r="22" fill="#14a3a8" opacity="0.25" />
      </g>

      {/* Sun */}
      <g transform="translate(600, 100)">
        <circle cx="0" cy="0" r="35" fill="#fbbf24" opacity="0.3" />
        <circle cx="0" cy="0" r="22" fill="#fbbf24" opacity="0.5" />
        {/* Rays */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <line
            key={angle}
            x1={Math.cos((angle * Math.PI) / 180) * 30}
            y1={Math.sin((angle * Math.PI) / 180) * 30}
            x2={Math.cos((angle * Math.PI) / 180) * 45}
            y2={Math.sin((angle * Math.PI) / 180) * 45}
            stroke="#fbbf24"
            strokeWidth="2.5"
            opacity="0.4"
            strokeLinecap="round"
          />
        ))}
      </g>

      {/* Flying birds */}
      <path d="M520 150 Q525 143 530 150 Q535 143 540 150" stroke="#e8630a" strokeWidth="2" fill="none" opacity="0.5" />
      <path d="M560 130 Q564 124 568 130 Q572 124 576 130" stroke="#e8630a" strokeWidth="1.5" fill="none" opacity="0.4" />
      <path d="M480 170 Q483 165 486 170 Q489 165 492 170" stroke="#0d7377" strokeWidth="1.5" fill="none" opacity="0.4" />

      {/* Ground */}
      <ellipse cx="400" cy="380" rx="300" ry="20" fill="#0d7377" opacity="0.1" />

      {/* Hearts floating */}
      <path d="M200 150 C200 145 195 140 190 140 C183 140 180 148 180 148 C180 148 177 140 170 140 C165 140 160 145 160 150 C160 163 180 175 180 175 C180 175 200 163 200 150Z" fill="#e8630a" opacity="0.2" />
      <path d="M650 250 C650 246 646 242 642 242 C637 242 634 248 634 248 C634 248 631 242 626 242 C622 242 618 246 618 250 C618 260 634 268 634 268 C634 268 650 260 650 250Z" fill="#e8630a" opacity="0.15" />

      <defs>
        <radialGradient id="heroGrad1"><stop offset="0%" stopColor="#e8630a" /><stop offset="100%" stopColor="transparent" /></radialGradient>
        <radialGradient id="heroGrad2"><stop offset="0%" stopColor="#0d7377" /><stop offset="100%" stopColor="transparent" /></radialGradient>
        <radialGradient id="heroGrad3"><stop offset="0%" stopColor="#fbbf24" /><stop offset="100%" stopColor="transparent" /></radialGradient>
      </defs>
    </svg>
  );
}

export function WaveDivider({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={flip ? { transform: "rotate(180deg)" } : {}}
    >
      <path
        d="M0 60 C360 120 720 0 1080 60 C1260 90 1380 30 1440 60 L1440 120 L0 120Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function BlobDecoration({ className = "", color = "#e8630a" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color}
        d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,88.5,-0.9C87,14.5,81.4,29,72.4,40.8C63.4,52.6,51,61.7,37.5,68.6C24,75.5,9.5,80.1,-4.1,79.1C-17.7,78.1,-30.4,71.5,-43.9,64.6C-57.4,57.7,-71.7,50.5,-79.4,38.6C-87.1,26.7,-88.2,10.1,-85.3,-5.3C-82.4,-20.7,-75.5,-34.9,-65.5,-46.4C-55.5,-57.9,-42.4,-66.7,-28.5,-74C-14.6,-81.3,-0.1,-87.1,13.1,-84.8C26.3,-82.5,30.6,-83.6,44.7,-76.4Z"
        transform="translate(100 100)"
        opacity="0.08"
      />
    </svg>
  );
}

export function EducationIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="25" width="50" height="35" rx="3" fill="#e8630a" opacity="0.15" />
      <rect x="20" y="30" width="40" height="25" rx="2" fill="#e8630a" opacity="0.25" />
      <path d="M40 15 L60 28 L40 41 L20 28Z" fill="#e8630a" opacity="0.8" />
      <line x1="40" y1="41" x2="40" y2="55" stroke="#e8630a" strokeWidth="2" />
      <path d="M30 47 Q40 55 50 47" stroke="#e8630a" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function HealthIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="28" fill="#0d7377" opacity="0.15" />
      <rect x="35" y="22" width="10" height="36" rx="2" fill="#0d7377" opacity="0.8" />
      <rect x="22" y="35" width="36" height="10" rx="2" fill="#0d7377" opacity="0.8" />
    </svg>
  );
}

export function CommunityIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="25" r="10" fill="#7c3aed" opacity="0.8" />
      <circle cx="22" cy="35" r="8" fill="#7c3aed" opacity="0.5" />
      <circle cx="58" cy="35" r="8" fill="#7c3aed" opacity="0.5" />
      <path d="M15 60 Q15 45 40 45 Q65 45 65 60" fill="#7c3aed" opacity="0.3" />
    </svg>
  );
}

export function PatternBackground({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="currentColor" opacity="0.07" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

export function FloatingShapes({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Top-left blob */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      {/* Top-right blob */}
      <div className="absolute -top-10 -right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      {/* Bottom-left blob */}
      <div className="absolute -bottom-20 -left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      {/* Bottom-right blob */}
      <div className="absolute -bottom-10 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
      {/* Center accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />
    </div>
  );
}
