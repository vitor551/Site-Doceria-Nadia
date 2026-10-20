import { Sparkles, Check, ArrowRight } from 'lucide-react'
import { whatsappLink } from '../data/site'

const occasions = [
  {
    category: '01 / Casamentos',
    title: 'Mesas de Doces Finos',
    description:
      'Opções com camélias artesanais, trufas francesas, brigadeiros belgas de nozes e physalis decoradas com perfeição e requinte.',
  },
  {
    category: '02 / Corporativo',
    title: 'Mimos Empresariais',
    description:
      'Caixas com identidade visual personalizada da sua marca para presentear parceiros, clientes VIP e equipes em momentos comemorativos.',
  },
  {
    category: '03 / Aniversários',
    title: 'Bolos de Assinatura',
    description:
      'Montagens delicadas com fitas de gorgurão, recheios fartos e artesanais, finalizados com flores selecionadas e frutas frescas.',
  },
  {
    category: '04 / Encomendas Especiais',
    title: 'Maternidade & Chás',
    description:
      'Lembranças gastronômicas embaladas à mão em papéis de seda e fitas personalizadas, celebrando novas vidas com doçura e afeto.',
  },
]

const features = [
  'Casamentos e Noivados com kit degustação',
  'Aniversários e Mini Weddings personalizados',
  'Presentes corporativos e mimos de final de ano',
  'Chá revelação, maternidade e batizados delicados',
]

export default function Occasions() {
  return (
    <section id="celebracoes" className="bg-white py-section">
      <div className="container-site">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Coluna Esquerda: Texto Institucional, Lista e CTA */}
          <div className="flex flex-col items-start lg:col-span-5">
            <span className="tag mb-4 shadow-sm">
              <Sparkles className="mr-1.5 h-3 w-3" aria-hidden="true" />
              Momentos Memoráveis
            </span>

            <h2 className="font-display text-section text-plum font-normal tracking-tight">
              Adoçando Celebrações e Datas Marcantes
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-muted">
              Desde uma mesa completa de doces finos para casamentos intimistas até caixas corporativas de final de ano ou lembrancinhas de maternidade e batizado. Desenvolvemos kits sob medida de acordo com sua paleta de cores e estilo da festa.
            </p>

            {/* Lista com Marcadores Delicados */}
            <ul className="mt-6 space-y-3">
              {features.map((feat) => (
                <li key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-ink font-medium">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime/40 text-moss">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            {/* CTA Convidativo para Conversa com a Confeiteira */}
            <div className="mt-8">
              <a
                href={whatsappLink('Olá! Gostaria de conversar com a confeiteira sobre os doces para o meu evento.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Conversar com nossa confeiteira</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Coluna Direita: Grade 2x2 de Cards de Ocasiões */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-7">
            {occasions.map((occ) => (
              <div
                key={occ.category}
                className="group flex flex-col justify-between rounded-2xl bg-paper p-6 sm:p-7 shadow-soft ring-1 ring-plum/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lift"
              >
                <div>
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-moss">
                    {occ.category}
                  </span>
                  <h3 className="mt-2 font-display text-xl text-plum font-normal">
                    {occ.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-ink-muted">
                    {occ.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-plum/10">
                  <a
                    href={whatsappLink(`Olá! Gostaria de saber mais sobre opções para: ${occ.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-sans text-xs font-semibold uppercase tracking-wider text-plum transition-colors hover:text-plum-hover"
                  >
                    <span>Consultar opções</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
