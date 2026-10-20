import { site } from '../data/site'

// Marca provisória (monograma "Nd" + nome) até a cliente enviar o logo oficial.
// PLACEHOLDER: substituir pelo arquivo de logo em assets/logo/ quando chegar.
export default function Logo({ variant = 'light', className = '' }) {
  const isDark = variant === 'dark'

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span
        aria-hidden="true"
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border font-display text-lg leading-none ${
          isDark
            ? 'border-lavender/40 bg-plum text-paper'
            : 'border-lime bg-lime/40 text-plum'
        }`}
      >
        Nd
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-2xl ${isDark ? 'text-paper' : 'text-plum'}`}>
          {site.name}
        </span>
        <span
          className={`mt-1 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] ${
            isDark ? 'text-lavender' : 'text-ink-muted'
          }`}
        >
          {site.subtitle}
        </span>
      </span>
    </span>
  )
}
