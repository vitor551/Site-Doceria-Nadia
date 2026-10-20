import { site } from '../data/site'

export default function Quote() {
  return (
    <section aria-label="Citação e filosofia da marca" className="border-y border-lime/40 bg-lime-soft py-14 sm:py-16">
      <div className="container-site text-center">
        <blockquote className="mx-auto max-w-3xl">
          <p className="font-display text-xl sm:text-2xl md:text-3xl text-plum font-normal leading-relaxed tracking-tight">
            &ldquo;{site.quote.text}&rdquo;
          </p>
          <footer className="mt-4 font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-moss">
            &mdash; {site.quote.author} &mdash;
          </footer>
        </blockquote>
      </div>
    </section>
  )
}
