# SKILL: Doce de Nádia — Brand & Design System

## Purpose
Esta skill é a **fonte única da verdade** para todas as decisões de design, redação, arquitetura de interface e código no desenvolvimento do site da **Doce de Nádia**. O agente DEVE consultar e seguir este documento antes de gerar qualquer componente, texto, cor ou espaçamento. Nenhuma decisão estética ou de conteúdo deve violar as regras aqui definidas.

> **Hierarquia de referências (v2 — out/2026):**
> 1. **Brand book oficial** (`MODELO/doce_de_n_dia_brand_book_by_pomelli.pdf`): manda em cores, fontes, valores e tom de voz.
> 2. **Protótipo visual** (`MODELO/prototipo-home.png`): manda em layout, ordem das seções e textos provisórios.
> 3. Este documento junta os dois. Quando o protótipo diverge do brand book (ex.: usa Playfair Display), **vale o brand book**.
>
> Os arquivos de `MODELO/` ficam no Google Drive: `G:\Meu Drive\Antigravity\Site-Doceria\MODELO\`.

---

## 01. Brand Identity

### A Empresa
- **Nome Oficial:** Doce de Nádia
- **Nome secundário:** "Na Doceria" aparece no brand book e no protótipo (subtítulo do logo e banner). `[PLACEHOLDER: confirmar com a cliente a relação entre "Doce de Nádia" e "Na Doceria"]`
- **Nicho:** Confeitaria artesanal: doces finos, bolos de festa, tortas e caixas presenteáveis
- **Tagline Principal:** *"Com amor da nossa família pra sua"*
- **Descrição (brand book):** Confeitaria artesanal especializada em doces feitos à mão com receitas de família. Cria doces delicados e de alta qualidade para momentos importantes, como casamentos e aniversários, valorizando o vínculo afetivo e a "alma" de cada produto.

### Valores da Marca (brand book)
**Amor · Qualidade · Artesanal · Tradição Familiar · Cuidado**

### Estética (brand book)
Artisan refinement · Vintage modernism · Refined whimsy · Modern heritage · Nostalgic warmth
→ Na prática: refinado e artesanal, com um toque lúdico e nostálgico. Elegante sem ser frio, delicado sem ser infantil.

### Público-Alvo
Famílias, noivas e noivos, anfitriões de festas, mães e empresas que buscam doces artesanais bem apresentados para presentear ou celebrar.

---

## 02. Brand Voice & Tone

### Tom de Voz (brand book)
| Atributo | Como aplicar |
|---|---|
| **Afetuoso** (Affectionate) | Conversa próxima, de família. Fala com "você", nunca com "prezado cliente". |
| **Inspirador** (Inspiring) | Ajuda o cliente a imaginar a festa, a mesa posta, o presente sendo aberto. |
| **Gentil** (Gentle) | Frases calmas, sem pressão de venda nem urgência artificial. |
| **Autêntico** (Authentic) | Só fatos reais: ingredientes, receitas e histórias verdadeiras. Nada inventado. |

### Regras de Redação (Anti-Slop)
- **Âncora da Hero:** *"Com amor da nossa família pra sua."*
- **CTAs Principais:** *"Ver cardápio de pronta entrega"*, *"Faça sua encomenda"*, *"Enviar mensagem no WhatsApp"*, *"Solicitar catálogo completo com preços"*.
- **TERMOS PROIBIDOS:** jargão corporativo ("transforme", "potencialize", "soluções", "ecossistema", "de ponta"), apelos de supermercado ("preço imbatível", "queima de estoque") e clichês de IA ("descubra", "mergulhe", "eleve sua experiência").
- Rodar a skill `avoid-ai-writing` em todo texto novo.

---

## 03. Paleta de Cores

### Cores oficiais (brand book)
| Token | Nome | Hex | Função |
|---|---|---|---|
| `lavender` | Pale Lavender | `#C2B2D1` | Detalhes, selos, bordas decorativas, ícones de fundo |
| `chalk` | Chalk White | `#F2F0EF` | Fundo de seções alternadas |
| `smoky` | Smoky Purple | `#8E6998` | Cor-assinatura: logo, ícones, títulos grandes e ilustrações |
| `lime` | Pastel Lime | `#CFDFB3` | Banner, tags e selos ("Confeitaria Artesanal") |

### Tons derivados (para acessibilidade, a partir do protótipo)
O Smoky Purple tem contraste de **3,98:1** sobre Chalk White, abaixo do mínimo WCAG AA (4,5:1) para texto pequeno. Por isso o protótipo usa versões mais escuras do mesmo roxo, todas no mesmo matiz (≈287°):

| Token | Nome | Hex | Função |
|---|---|---|---|
| `plum` | Ameixa | `#4C2650` | **Cor de ação**: botões primários, títulos H1/H2, links |
| `plum-hover` | Ameixa hover | `#3B1C3F` | Hover de botões primários |
| `plum-deep` | Ameixa profunda | `#2D1B31` | Footer e textos de alto contraste |
| `paper` | Papel | `#FAF9F5` | Fundo principal (versão mais clara do Chalk) |
| `lime-soft` | Lima suave | `#EDEFE1` | Faixa de citação |
| `lavender-soft` | Lavanda suave | `#F3EEF4` | Barra de aviso do topo |
| `moss` | Musgo | `#536B3A` | Textos de eyebrow e ícones de check (verde legível derivado do Pastel Lime) |
| `ink` | Tinta | `#2D1B31` | Texto principal |
| `ink-muted` | Tinta suave | `#6B5E70` | Texto secundário (5,3:1 sobre Chalk) |

### Regras
- **NUNCA** usar preto puro (`#000`) nem cinzas frios. Os neutros puxam para o lilás ou para o creme.
- **NUNCA** usar Smoky Purple ou Pastel Lime em texto menor que 24px sobre fundo claro (contraste insuficiente).
- Botões de ação sempre em `plum`. O verde é para acentos, nunca para CTAs.

---

## 04. Tipografia (brand book)

| Papel | Família | Uso |
|---|---|---|
| **Primária (Display)** | `Courgette` (Google Fonts, script) | Logotipo, H1, H2 de seção, tagline, citação, assinaturas |
| **Secundária (Texto)** | `Open Sans` (Google Fonts) | Corpo, H3 de cards, navegação, botões, eyebrows, rodapé |

- **URL Google Fonts:** `https://fonts.googleapis.com/css2?family=Courgette&family=Open+Sans:wght@400;500;600;700&display=swap`
- **Courgette só tem um peso (400).** Nunca aplicar `font-bold` nem `italic` nela.
- Courgette é cursiva: usar só em frases curtas (até ~8 palavras). Títulos de card e textos longos ficam em Open Sans.

| Função | Família | Peso | Estilo |
|---|---|---|---|
| Logo "Doce de Nádia" | Courgette | 400 | — |
| H1 (Hero) | Courgette | 400 | `text-plum` |
| Tagline / Citação | Courgette | 400 | `text-smoky` (só em tamanho ≥ 24px) |
| H2 (Títulos de seção) | Courgette | 400 | `text-plum` |
| H3 (Cards) | Open Sans | 600 | `text-ink` |
| Eyebrow | Open Sans | 600 | Uppercase, `tracking-[0.18em]`, `text-moss` |
| Corpo | Open Sans | 400 | `text-ink-muted` |
| Botões / Nav | Open Sans | 600 | Uppercase, `tracking-wider`, texto pequeno |

---

## 05. Logo & Elementos de Marca
- **Marca nominal:** "Doce de Nádia" em Courgette, `text-smoky` ou `text-plum`.
- **Subtítulo do logo:** "NA DOCERIA" em Open Sans caixa alta espaçada (como no protótipo). `[PLACEHOLDER: confirmar]`
- **Monograma:** "Nd" dentro de um círculo (protótipo). Usado no header, no footer e no favicon até a cliente enviar o logo oficial. `[PLACEHOLDER: arquivo de logo oficial]`

---

## 06. Direção Estética
- **Fotografia:** fotos reais dos produtos (ver brand book, pág. 4): luz natural, laços de cetim, caixas kraft, brigadeiros com granulado. Fotos reais da cliente sempre têm prioridade sobre banco de imagem.
- **Formas:** cantos suavemente arredondados, como nas fotos do brand book (`rounded-2xl` = 16px em fotos e cards). Botões em formato pílula.
- **Sombras:** muito leves, tingidas de ameixa. Nada de sombras pretas pesadas.
- **Detalhes:** tags em Pastel Lime, filetes finos em verde ou lavanda sob os títulos, numeração em círculos com fundo verde-claro.

---

## 07. Padrões de Componentes

### Botão Primário
`bg-plum text-paper` · Open Sans 600, uppercase, `text-xs tracking-wider` · `px-6 py-3.5` (altura ≥ 44px) · `rounded-full` · hover `bg-plum-hover -translate-y-0.5`

### Botão Secundário
`bg-white border border-plum/25 text-plum` · mesma tipografia · hover `border-plum bg-lavender-soft`

### Link de card ("Encomendar →")
Open Sans 600 uppercase `text-xs text-plum` com sublinhado fino.

### Cards de Produto
`bg-white rounded-2xl overflow-hidden shadow-soft` · foto `aspect-[4/3] object-cover` · tag Pastel Lime sobre a foto · eyebrow + H3 + descrição + rodapé com rendimento e link.

### Tag / Selo
`bg-lime text-plum-deep text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full`

---

## 08. Estrutura do Site (Homepage) — conforme protótipo

| # | Seção | Componente | Fundo | Conteúdo |
|---|---|---|---|---|
| 0 | **Barra de aviso** | `TopBar.jsx` | `lavender-soft` | Aviso de encomendas + WhatsApp + região de entrega |
| 1 | **Header** | `Header.jsx` | `white/90` + blur | Monograma + logo, nav (Sobre, Catálogo, Tradição, Celebrações, Galeria, Contato), botão "Faça sua encomenda" |
| 2 | **Hero** | `Hero.jsx` | `paper` | Banner verde "Na Doceria", tag, H1, tagline, texto, 2 CTAs, 3 números, foto com selo |
| 3 | **Especialidades** | `Specialties.jsx` | `chalk` | "Menu Afetivo": 3 cards de produto + botão de catálogo |
| 4 | **Nossa Essência** | `About.jsx` | `paper` | "A Tradição de Fazer com o Coração": 3 pilares numerados |
| 5 | **Celebrações** | `Occasions.jsx` | `white` | "Adoçando Celebrações e Datas Marcantes": texto, lista, CTA e 4 cards de ocasião |
| 6 | **Citação** | `Quote.jsx` | `lime-soft` | Frase da Nádia em Courgette |
| 7 | **Depoimentos** *(reservada)* | `Testimonials.jsx` | `paper` | Fica oculta até chegarem avaliações reais |
| 8 | **Como Pedir** | `HowToOrder.jsx` | `chalk` | "Planeje sua Encomenda": prazos + caixa do WhatsApp |
| 9 | **Footer** | `Footer.jsx` | `plum-deep` | Logo, navegação, ateliê e entregas, horários, contato |

> ⚠️ A navegação do protótipo tem "Galeria", mas não existe essa seção. `[PLACEHOLDER: decidir se vira uma galeria com as fotos reais ou se sai do menu]`

---

## 09. Stack Técnica
- **Framework:** React 19 + Vite + Tailwind CSS v3
- **Ícones:** `lucide-react`
- **Estrutura:** um componente por arquivo em `src/components/`. Dados de contato centralizados em `src/data/site.js` (troca em um só lugar).
- **Mobile First:** de `375px` a `1280px+`. Seções com `min-h-[100dvh]` só quando fizer sentido (nunca `h-screen`).
- **Imagens:** WebP otimizado em `src/assets/`, com `aspect-ratio` fixo, `loading="lazy"` (exceto a imagem da Hero) e `alt` descritivo.
- **Pasta do código:** `C:\Users\vitor\Documents\Antigravity\Site-Na Doceria` (local, fora do Drive).

---

## 10. Anti-Patterns (PROIBIDO)
- ❌ Fontes fora do brand book (Playfair, Fraunces, Plus Jakarta etc.).
- ❌ `font-bold` ou `italic` em Courgette.
- ❌ Courgette em parágrafos ou em textos com mais de ~8 palavras.
- ❌ Hex solto no JSX. Usar só os tokens do Tailwind.
- ❌ Smoky Purple ou Pastel Lime em texto pequeno.
- ❌ Inventar preços, endereços, telefones ou depoimentos sem `[PLACEHOLDER]`.
- ❌ Imagens achatadas ou cortadas no celular (`375px`).

---

## 11. Quality Gate (Checagem Obrigatória por Seção)
- [ ] Cores vêm só dos tokens (oficiais + derivados)
- [ ] Fontes só Courgette (display) e Open Sans (texto), sem peso falso na Courgette
- [ ] Fundo segue o mapa da Seção 08
- [ ] Em `375px`: sem rolagem horizontal, sem texto sobreposto
- [ ] Áreas de toque ≥ 44px
- [ ] Contraste de texto ≥ 4,5:1 (ou ≥ 3:1 em texto ≥ 24px)
- [ ] Tom afetuoso, gentil e autêntico, sem termos proibidos
- [ ] Dados não confirmados marcados com `[PLACEHOLDER]`
