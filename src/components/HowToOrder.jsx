import { Check, MessageCircle, Calendar, Clock, Truck } from 'lucide-react'
import { site, whatsappLink } from '../data/site'

const steps = [
  {
    icon: Clock,
    title: 'Bolos e Tortas de Festa',
    detail: 'Antecedência mínima de 48 a 72 horas para preparo com frescor total.',
  },
  {
    icon: Calendar,
    title: 'Doces Finos para Eventos',
    detail: 'Recomendamos reserva de data com 15 a 30 dias de antecedência.',
  },
  {
    icon: Truck,
    title: 'Retirada ou Delivery Climatizado',
    detail: 'Retirada com horário agendado ou entrega segura na sua região.',
  },
]

export default function HowToOrder() {
  return (
    <section id="como-pedir" className="bg-chalk py-section">
      <div className="container-site">
        <div className="overflow-hidden rounded-3xl bg-white p-7 shadow-soft ring-1 ring-plum/10 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Coluna Esquerda: Informações de Planejamento */}
            <div className="flex flex-col lg:col-span-7">
              <span className="eyebrow mb-2">
                Como Trabalhamos
              </span>
              <h2 className="font-display text-section text-plum font-normal tracking-tight">
                Planeje Sua Encomenda
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-ink-muted">
                Para assegurar a máxima qualidade e frescor, nossos produtos são preparados no mesmo dia ou na véspera da entrega. Por isso, trabalhamos com uma quantidade limitada de pedidos por semana para dar atenção exclusiva a cada celebração.
              </p>

              {/* Lista de Prazos e Modalidades */}
              <div className="mt-8 space-y-4">
                {steps.map((step) => {
                  const Icon = step.icon
                  return (
                    <div
                      key={step.title}
                      className="flex items-start gap-3.5 rounded-xl border border-plum/10 bg-paper/60 p-4 transition-colors hover:bg-paper"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lime/40 text-moss">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                      <div className="flex flex-col">
                        <span className="flex items-center gap-1.5 font-sans text-xs sm:text-sm font-bold text-ink">
                          <Check className="h-3.5 w-3.5 text-moss" aria-hidden="true" />
                          {step.title}
                        </span>
                        <span className="mt-0.5 text-xs text-ink-muted leading-relaxed">
                          {step.detail}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Coluna Direita: Card de Ação WhatsApp Direto */}
            <div className="lg:col-span-5">
              <div className="flex flex-col items-center rounded-2xl border-2 border-dashed border-plum/20 bg-paper p-8 text-center shadow-sm sm:p-10">
                {/* Ícone Circular em Destaque */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-plum text-paper shadow-soft">
                  <MessageCircle className="h-8 w-8 text-lime" aria-hidden="true" />
                </div>

                <h3 className="mt-5 font-display text-2xl text-plum font-normal">
                  Faça seu Pedido pelo WhatsApp
                </h3>

                <p className="mt-2.5 max-w-xs text-xs sm:text-sm leading-relaxed text-ink-muted">
                  Envie uma mensagem direta para conferir datas disponíveis, tirar dúvidas de rendimento ou personalizar sua encomenda.
                </p>

                {/* Botão de Encomenda */}
                <a
                  href={whatsappLink('Olá! Gostaria de consultar a disponibilidade para uma encomenda.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 w-full max-w-xs shadow-md"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Enviar mensagem no WhatsApp</span>
                </a>

                {/* Horário de Atendimento */}
                <p className="mt-4 font-sans text-[11px] text-ink-muted font-medium">
                  Atendimento: {site.hours.weekdays}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
