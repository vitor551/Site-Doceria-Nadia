import { Sparkles, Utensils, HeartHandshake, Eye } from 'lucide-react'

const pillars = [
  {
    number: '1',
    icon: Utensils,
    title: 'Receitas de Família',
    description:
      'Nossos cadernos de receitas guardam segredos passados de geração em geração. O sabor inconfundível que remete a momentos acolhedores reunidos à mesa.',
  },
  {
    number: '2',
    icon: HeartHandshake,
    title: 'Insumos Nobres & Frescos',
    description:
      'Utilizamos apenas chocolates nobres de alto teor de cacau, fava de baunilha de verdade, manteiga de primeira linha e frutas frescas da estação. Sem misturas prontas industriais.',
  },
  {
    number: '3',
    icon: Eye,
    title: 'Apresentação Impecável',
    description:
      'Acreditamos que o afeto começa pelos olhos. Cada laço de cetim, caixa rígida e acabamento floral é montado à mão com sensibilidade artística e zelo artesanal.',
  },
]

export default function About() {
  return (
    <section id="tradicao" className="bg-paper py-section">
      <div className="container-site">
        {/* Cabeçalho da Seção */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow inline-flex items-center gap-1.5">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            Nossa Essência
          </span>

          <h2 className="mt-2.5 font-display text-section text-plum font-normal tracking-tight">
            A Tradição de Fazer com o Coração
          </h2>

          {/* Traço decorativo sutil */}
          <div
            className="mx-auto mt-3.5 h-0.5 w-12 rounded-full bg-lime"
            aria-hidden="true"
          />
        </div>

        {/* Grade com os 3 Pilares */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.number}
                className="group flex flex-col items-center rounded-2xl bg-white p-8 sm:p-10 text-center shadow-soft ring-1 ring-plum/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
              >
                {/* Indicador Numérico Circular com Selo */}
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-lime/30 text-plum ring-4 ring-lime/20 transition-transform duration-300 group-hover:scale-110">
                  <span className="font-display text-xl font-normal leading-none">
                    {pillar.number}
                  </span>
                  <Icon
                    className="absolute -top-1 -right-1 h-4 w-4 text-moss"
                    aria-hidden="true"
                  />
                </div>

                {/* Título do Pilar */}
                <h3 className="font-sans text-lg font-bold text-ink">
                  {pillar.title}
                </h3>

                {/* Descrição Afetiva */}
                <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-ink-muted">
                  {pillar.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
