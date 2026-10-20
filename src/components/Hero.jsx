import { Sparkles, Heart, Clock, Award } from 'lucide-react'
import { site, whatsappLink } from '../data/site'
import heroImage from '../assets/fotos/hero-caixa-doces-especiais.webp'

export default function Hero() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-paper pt-6 pb-12 sm:pt-8 sm:pb-16 lg:pb-20">
      <div className="container-site">
        {/* Banner Superior Decorativo (conforme protótipo) */}
        <div className="mb-8 sm:mb-12 rounded-2xl border border-lime/60 bg-lime/25 px-6 py-5 text-center shadow-soft sm:px-8 sm:py-6">
          <p className="font-display text-xl sm:text-2xl text-plum">
            {site.subtitle}
          </p>
          <p className="mt-1 font-sans text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-moss">
            {site.tagline}
          </p>
        </div>

        {/* Grade Principal do Hero */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna de Conteúdo (Texto, CTAs e Métricas) */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Tag de Categoria */}
            <span className="tag mb-4 shadow-sm">
              Confeitaria Artesanal
            </span>

            {/* Título Principal H1 */}
            <h1 className="font-display text-hero text-plum font-normal tracking-tight">
              {site.name}
            </h1>

            {/* Assinatura / Tagline em Destaque */}
            <p className="mt-1.5 font-display text-tagline text-smoky">
              {site.tagline}
            </p>

            {/* Descrição Apetitosa e Afetiva */}
            <p className="mt-5 max-w-xl font-sans text-sm sm:text-base leading-relaxed text-ink-muted">
              Especialistas em doces feitos à mão com receitas tradicionais de família. Criamos experiências delicadas e inesquecíveis para casamentos, aniversários e momentos especiais que merecem ser celebrados com o mais puro sabor da confeitaria artesanal e afetiva.
            </p>

            {/* Ações / CTAs */}
            <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <a href="#catalogo" className="btn-primary">
                Ver cardápio de pronta entrega
              </a>
              <a
                href={whatsappLink('Olá! Gostaria de fazer uma encomenda para o meu evento.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Faça sua encomenda
              </a>
            </div>

            {/* Métricas e Pilares de Confiança (Conforme Protótipo) */}
            <div className="mt-10 grid w-full grid-cols-1 gap-5 border-t border-plum/10 pt-8 sm:grid-cols-3 sm:gap-6">
              <div className="flex flex-col">
                <span className="flex items-center gap-1.5 font-display text-2xl text-plum font-normal">
                  <Clock className="h-5 w-5 text-moss shrink-0" aria-hidden="true" />
                  +8 anos
                </span>
                <span className="mt-1 text-xs text-ink-muted leading-snug">
                  Adoçando histórias e datas inesquecíveis
                </span>
              </div>

              <div className="flex flex-col">
                <span className="flex items-center gap-1.5 font-display text-2xl text-plum font-normal">
                  <Heart className="h-5 w-5 text-smoky shrink-0" aria-hidden="true" />
                  100%
                </span>
                <span className="mt-1 text-xs text-ink-muted leading-snug">
                  Artesanal, fresco &amp; feito sob demanda
                </span>
              </div>

              <div className="flex flex-col">
                <span className="flex items-center gap-1.5 font-display text-2xl text-plum font-normal">
                  <Award className="h-5 w-5 text-plum shrink-0" aria-hidden="true" />
                  Pureza
                </span>
                <span className="mt-1 text-xs text-ink-muted leading-snug">
                  Chocolate nobre &amp; insumos selecionados
                </span>
              </div>
            </div>
          </div>

          {/* Coluna Visual (Foto Destaque com Selos Flutuantes) */}
          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            {/* Decoração de Fundo Suave */}
            <div
              className="absolute -inset-2 sm:-inset-3 rounded-3xl bg-lime/30 transform -rotate-1"
              aria-hidden="true"
            />

            {/* Card com Foto Real */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white p-2 sm:p-2.5 shadow-lift ring-1 ring-plum/10">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-chalk">
                <img
                  src={heroImage}
                  alt="Caixa especial de doces artesanais e brigadeiros gourmet da Doce de Nádia"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Selo Flutuante Superior Direito */}
                <div className="absolute top-3 right-3 rounded-xl border border-plum/10 bg-white/95 px-3 py-2 text-right shadow-soft backdrop-blur-sm sm:top-4 sm:right-4 sm:px-4 sm:py-2.5">
                  <span className="eyebrow block text-[10px]">
                    Edição exclusiva
                  </span>
                  <span className="font-display text-sm font-normal text-plum">
                    Doces Especiais
                  </span>
                </div>

                {/* Selo Flutuante Inferior Esquerdo */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-plum-deep/90 px-3.5 py-1.5 text-[11px] font-semibold text-paper shadow-soft backdrop-blur-sm sm:bottom-4 sm:left-4 sm:px-4 sm:py-2 sm:text-xs">
                  <Sparkles className="h-3.5 w-3.5 text-lime" aria-hidden="true" />
                  <span>Frescor em cada receita</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
