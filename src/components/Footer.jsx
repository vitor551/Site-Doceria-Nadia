import { MessageCircle, Instagram, Mail, MapPin, Clock } from 'lucide-react'
import Logo from './Logo'
import { site, navLinks, whatsappLink } from '../data/site'

export default function Footer() {
  return (
    <footer id="contato" className="border-t border-plum-deep bg-plum-deep text-paper/85">
      {/* Grade Principal do Rodapé */}
      <div className="container-site py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Coluna 1: Marca & Assinatura */}
          <div className="flex flex-col items-start lg:col-span-4">
            <Logo variant="dark" />
            <p className="mt-4 max-w-sm font-sans text-xs sm:text-sm leading-relaxed text-paper/70">
              Confeitaria artesanal afetiva. Criamos doces feitos à mão com receitas tradicionais para transformar momentos especiais em memórias inesquecíveis.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={site.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-lavender/30 text-paper transition-colors hover:border-lime hover:bg-lime/20 hover:text-lime"
                aria-label="Instagram da Doce de Nádia"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-lavender/30 text-paper transition-colors hover:border-lime hover:bg-lime/20 hover:text-lime"
                aria-label="WhatsApp da Doce de Nádia"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${site.contact.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-lavender/30 text-paper transition-colors hover:border-lime hover:bg-lime/20 hover:text-lime"
                aria-label="E-mail da Doce de Nádia"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação */}
          <div className="flex flex-col lg:col-span-2">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-lavender">
              Navegação
            </p>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-lime hover:underline underline-offset-4"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Ateliê & Encomendas */}
          <div className="flex flex-col lg:col-span-3">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-lavender">
              Ateliê &amp; Encomendas
            </p>
            <div className="mt-4 space-y-3 text-xs sm:text-sm text-paper/75">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-lime mt-0.5" aria-hidden="true" />
                <span>{site.location.address}</span>
              </p>
              <p className="text-[11px] text-paper/60 pl-6">
                {site.location.coverage}
              </p>
              <div className="pt-2 border-t border-paper/10">
                <p className="flex items-center gap-2 font-semibold text-paper/90">
                  <Clock className="h-4 w-4 text-lime" aria-hidden="true" />
                  <span>Horário de Atendimento:</span>
                </p>
                <p className="mt-1 pl-6 text-xs text-paper/70">{site.hours.weekdays}</p>
                <p className="pl-6 text-xs text-paper/70">{site.hours.saturday}</p>
              </div>
            </div>
          </div>

          {/* Coluna 4: Contato Direto */}
          <div className="flex flex-col items-start lg:col-span-3">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-lavender">
              Contato Direto
            </p>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-paper/75">
              <li>
                <span className="text-paper/50">WhatsApp: </span>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-lime underline-offset-4 hover:underline">
                  {site.contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <span className="text-paper/50">Instagram: </span>
                <span className="text-paper/80">{site.contact.instagram}</span>
              </li>
              <li>
                <span className="text-paper/50">E-mail: </span>
                <span className="text-paper/80">{site.contact.email}</span>
              </li>
            </ul>

            <a
              href={whatsappLink('Olá, Nádia! Gostaria de fazer uma encomenda.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-lavender/40 bg-transparent px-5 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider text-paper transition-all hover:border-lime hover:bg-lime/20 hover:text-lime"
            >
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Falar com Nádia</span>
            </a>
          </div>
        </div>
      </div>

      {/* Linha Inferior com Copyright e Tagline */}
      <div className="border-t border-paper/10 py-6 text-center text-xs text-paper/50">
        <div className="container-site flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name} ({site.subtitle}) &middot; Confeitaria Artesanal. Todos os direitos reservados.
          </p>
          <p className="font-display text-sm text-lavender font-normal">
            {site.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}
