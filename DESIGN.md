# DESIGN.md — Doce de Nádia Design Tokens (v2)

> Derivado do `SKILL.md` v2: brand book oficial + protótipo `MODELO/prototipo-home.png`.
> Fonte única da verdade para tokens visuais. Componentes usam **só** as classes Tailwind mapeadas aqui.

---

## 1. Cores

```css
:root {
  /* Oficiais — brand book */
  --color-lavender:      #C2B2D1;  /* Pale Lavender */
  --color-chalk:         #F2F0EF;  /* Chalk White */
  --color-smoky:         #8E6998;  /* Smoky Purple */
  --color-lime:          #CFDFB3;  /* Pastel Lime */

  /* Derivados — acessibilidade e protótipo */
  --color-plum:          #4C2650;  /* Ameixa — ação, títulos */
  --color-plum-hover:    #3B1C3F;
  --color-plum-deep:     #2D1B31;  /* Footer */
  --color-paper:         #FAF9F5;  /* Fundo principal */
  --color-lime-soft:     #EDEFE1;  /* Faixa de citação */
  --color-lavender-soft: #F3EEF4;  /* Barra de aviso */
  --color-moss:          #536B3A;  /* Eyebrow / checks */
  --color-ink:           #2D1B31;  /* Texto principal */
  --color-ink-muted:     #6B5E70;  /* Texto secundário */
}
```

### Contraste verificado (WCAG)
| Combinação | Razão | Uso permitido |
|---|---|---|
| `plum` sobre `paper` | ≈ 12:1 | Qualquer texto |
| `paper` sobre `plum` (botão) | ≈ 12:1 | Qualquer texto |
| `ink-muted` sobre `chalk` | ≈ 5,3:1 | Texto de corpo |
| `moss` sobre `paper` | ≈ 5,6:1 | Eyebrow pequeno |
| `smoky` sobre `chalk` | ≈ 4,0:1 | Só texto ≥ 24px |
| `plum-deep` sobre `lime` | ≈ 11:1 | Tags |

---

## 2. Tipografia

```css
:root {
  --font-display: 'Courgette', cursive;      /* peso único 400 */
  --font-body:    'Open Sans', sans-serif;   /* 400 · 500 · 600 · 700 */
}
```

| Token Tailwind | Valor (mobile → desktop) | Uso |
|---|---|---|
| `text-hero` | `clamp(2.75rem, 2rem + 3.2vw, 4.5rem)` | H1 |
| `text-section` | `clamp(2rem, 1.6rem + 1.8vw, 3rem)` | H2 |
| `text-tagline` | `clamp(1.5rem, 1.3rem + 0.8vw, 2rem)` | Tagline / citação |
| `text-xs` … `text-lg` | padrão Tailwind | Open Sans |

---

## 3. Espaçamento e Estrutura
- Container: `max-w-content` (1240px) + `px-5 sm:px-8`
- Padding vertical de seção: `py-section` = `clamp(3.5rem, 7vw, 6rem)`

## 4. Arredondamento
| Token | Valor | Uso |
|---|---|---|
| `rounded-lg` | 8px | Tags retangulares, inputs |
| `rounded-2xl` | 16px | Cards e fotos (como no brand book) |
| `rounded-full` | 9999px | Botões, selos, monograma |

## 5. Sombras
| Token | Valor |
|---|---|
| `shadow-soft` | `0 8px 24px -8px rgba(76, 38, 80, 0.10)` |
| `shadow-lift` | `0 16px 36px -12px rgba(76, 38, 80, 0.18)` |

---

## 6. Mapa de Fundos das Seções

| Seção | Classe | Títulos |
|---|---|---|
| TopBar | `bg-lavender-soft` | `text-plum` |
| Header | `bg-white/90 backdrop-blur-md` | `text-plum` |
| Hero | `bg-paper` (banner `bg-lime`) | `text-plum` |
| Specialties | `bg-chalk` | `text-plum` |
| About | `bg-paper` | `text-plum` |
| Occasions | `bg-white` | `text-plum` |
| Quote | `bg-lime-soft` | `text-smoky` |
| Testimonials *(reservada)* | `bg-paper` | `text-plum` |
| HowToOrder | `bg-chalk` (card `bg-white`) | `text-plum` |
| Footer | `bg-plum-deep text-paper/80` | `text-paper` |
