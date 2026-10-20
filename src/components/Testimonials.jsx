import { Star, Heart } from 'lucide-react'

// Seção reservada para depoimentos reais da Doce de Nádia.
// Ativar em App.jsx assim que a cliente enviar as avaliações reais (Pergunta 21 do questionário).
const testimonials = [
  {
    name: 'Mariana C.',
    occasion: 'Casamento no Campo',
    quote:
      'A mesa de doces da Nádia foi o ponto alto da nossa festa. Os brigadeiros com confeitos nobres e as camélias artesanais encantaram todos os nossos convidados!',
    rating: 5,
  },
  {
    name: 'Beatriz M.',
    occasion: 'Aniversário de 15 Anos',
    quote:
      'O bolo de caramelo com frutas vermelhas estava impecável, leve e nada enjoativo. Dá para sentir o amor e o cuidado familiar em cada fatia.',
    rating: 5,
  },
  {
    name: 'Carla & Roberto',
    occasion: 'Batizado e Chá Revelação',
    quote:
      'As caixas de mimos e as lembrancinhas personalizadas foram um sucesso absoluto. Apresentação impecável e atendimento muito caloroso.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="bg-paper py-section">
      <div className="container-site">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow inline-flex items-center gap-1.5">
            <Heart className="h-3 w-3" aria-hidden="true" />
            Prova Social &amp; Afeto
          </span>
          <h2 className="mt-2.5 font-display text-section text-plum font-normal tracking-tight">
            Momentos que Adoçamos
          </h2>
          <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-ink-muted">
            O carinho de quem confiou suas celebrações mais importantes à nossa família.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-2xl bg-white p-7 sm:p-8 shadow-soft ring-1 ring-plum/10"
            >
              <div>
                <div className="flex items-center gap-1 text-moss" aria-label={`${t.rating} de 5 estrelas`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-ink-muted italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 border-t border-plum/10 pt-4">
                <p className="font-sans text-sm font-bold text-ink">{t.name}</p>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-moss">{t.occasion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
