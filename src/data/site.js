// Dados centrais do site — editar AQUI quando a cliente enviar as informações.
// Tudo marcado com PLACEHOLDER ainda precisa de confirmação (ver questionário).

const PLACEHOLDER_WHATSAPP = '5500000000000' // PLACEHOLDER: número oficial com DDI + DDD, só dígitos

export const site = {
  name: 'Doce de Nádia',
  subtitle: 'Na Doceria', // PLACEHOLDER: confirmar relação "Doce de Nádia" × "Na Doceria"
  tagline: 'Com amor da nossa família pra sua',

  contact: {
    whatsappNumber: PLACEHOLDER_WHATSAPP,
    whatsappDisplay: '[PLACEHOLDER: (00) 00000-0000]',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de fazer uma encomenda.',
    instagram: '[PLACEHOLDER: @docedenadia.oficial]',
    instagramUrl: '#', // PLACEHOLDER
    email: '[PLACEHOLDER: contato@docedenadia.com.br]',
  },

  location: {
    address: '[PLACEHOLDER: São Paulo - SP · Bairro Perdizes / Higienópolis]',
    coverage: 'Entregas sob consulta em toda a capital e região metropolitana.',
    region: '[PLACEHOLDER: região de entrega]',
  },

  delivery: {
    region: '[PLACEHOLDER: região de entrega]',
  },

  hours: {
    weekdays: 'Segunda a Sexta: 09h às 18h',
    saturday: 'Sábados: 09h às 14h',
  },

  quote: {
    text: 'O ingrediente secreto é sempre o tempo, o cuidado e a dedicação que colocamos em cada detalhe.',
    author: 'NÁDIA & FAMÍLIA NA DOCERIA',
  },

  announcement: 'Encomendas personalizadas com carinho',
}

export const whatsappLink = (message = site.contact.whatsappMessage) =>
  `https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`

export const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Tradição', href: '#tradicao' },
  { label: 'Celebrações', href: '#celebracoes' },
  { label: 'Como Pedir', href: '#como-pedir' },
  { label: 'Contato', href: '#contato' },
]
