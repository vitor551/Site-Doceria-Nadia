import { ArrowRight, Sparkles } from 'lucide-react'
import { whatsappLink } from '../data/site'
import boloImg from '../assets/fotos/bolo-brigadeiro-laco.webp'
import caixaImg from '../assets/fotos/caixa-brigadeiros-sortidos.webp'
import docesImg from '../assets/fotos/doces-finos-mesa.webp'

const specialties = [
  {
    id: 'bolo-caramelo',
    badge: 'Celebração',
    category: 'Bolos de Festa',
    name: 'Bolo Artesanal Flor de Caramelo',
    description:
      'Pão de ló leve e aerado, recheado com doce de leite artesanal, morangos frescos e finalizado com frutas vermelhas selecionadas e flores comestíveis.',
    yieldInfo: 'Rendimento: 15 fatias',
    image: boloImg,
    alt: 'Bolo artesanal decorado com brigadeiros e laço afetivo para festas',
  },
  {
    id: 'caixa-degustacao',
    badge: 'Presente Afetivo',
    category: 'Caixas de Doces',
    name: 'Caixa Degustação Boutique',
    description:
      'Harmonização delicada de brigadeiros gourmet tradicionais e especiais, enrolados um a um com confeitos nobres e embalados com fita em cetim.',
    yieldInfo: 'Caixa com 16 a 24 itens',
    image: caixaImg,
    alt: 'Caixa kraft presenteável com brigadeiros gourmet selecionados à mão',
  },
  {
    id: 'torta-brigadeiro',
    badge: 'Mais Pedido',
    category: 'Linha Chocolate Nobre',
    name: 'Torta Suprema de Brigadeiro',
    description:
      'Massa úmida de cacau nobre, recheio cremoso e generoso de brigadeiro de colher, coroada com brigadeiros boleados na hora e raspas selecionadas.',
    yieldInfo: 'Rende de 15 a 20 fatias',
    image: docesImg,
    alt: 'Mesa com doces finos e torta especial de brigadeiro gourmet',
  },
]

export default function Specialties() {
  return (
    <section id="catalogo" className="bg-chalk py-section">
      <div className="container-site">
        {/* Cabeçalho da Seção */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow inline-flex items-center gap-1.5">
            <Sparkles className="h-3 w-3" aria-hidden="true" />
            Menu Afetivo
          </span>
          <h2 className="mt-2.5 font-display text-section text-plum font-normal tracking-tight">
            Doces Especiais &amp; Criações Autorais
          </h2>
          <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-ink-muted">
            Cada doce é elaborado manualmente com ingredientes nobres, apresentados com nossa clássica assinatura estética e o carinho das receitas de família.
          </p>
        </div>

        {/* Grade com os 3 Produtos em Destaque */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {specialties.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-plum/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
            >
              {/* Imagem do Produto com Tag */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3.5 left-3.5 tag shadow-sm">
                  {item.badge}
                </span>
              </div>

              {/* Corpo do Card */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-moss">
                    {item.category}
                  </span>
                  <h3 className="mt-1.5 font-sans text-lg font-bold text-ink">
                    {item.name}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-ink-muted line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Rodapé do Card com Rendimento e Ação */}
                <div className="mt-6 flex items-center justify-between border-t border-plum/10 pt-4 text-xs">
                  <span className="font-medium text-ink-muted">
                    {item.yieldInfo}
                  </span>
                  <a
                    href={whatsappLink(`Olá! Gostaria de encomendar: ${item.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold uppercase tracking-wider text-plum transition-colors hover:text-plum-hover"
                    aria-label={`Encomendar ${item.name} pelo WhatsApp`}
                  >
                    <span>Encomendar</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
