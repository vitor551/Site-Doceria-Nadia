import { useState, useEffect } from 'react'
import { Edit3, Check, RotateCcw, Copy, X } from 'lucide-react'

const STORAGE_KEY = 'docenadia_visual_edits'

// Gera uma chave única e estável para qualquer elemento com base em seu caminho DOM
function getElementKey(el) {
  if (el.dataset.editKey) return el.dataset.editKey
  const path = []
  let curr = el
  while (curr && curr !== document.body) {
    let index = 0
    let sibling = curr.previousElementSibling
    while (sibling) {
      if (sibling.tagName === curr.tagName) index++
      sibling = sibling.previousElementSibling
    }
    const id = curr.id ? `#${curr.id}` : ''
    path.unshift(`${curr.tagName.toLowerCase()}${id}:nth-of-type(${index + 1})`)
    curr = curr.parentElement
  }
  return path.join(' > ')
}

function loadInitialEdits() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : {}
  } catch {
    return {}
  }
}

export default function VisualEditor() {
  const [isActive, setIsActive] = useState(false)
  const [edits, setEdits] = useState(loadInitialEdits)
  const [toastMessage, setToastMessage] = useState('')
  const editCount = Object.keys(edits).length

  // Aplica as edições salvas aos elementos correspondentes após a montagem do DOM
  useEffect(() => {
    Object.entries(edits).forEach(([key, text]) => {
      try {
        const el = document.querySelector(key)
        if (el && typeof text === 'string') {
          el.innerText = text
        }
      } catch {
        // Ignora se o seletor não for mais válido
      }
    })
  }, [edits])

  // Gerenciamento de eventos de clique e edição inline
  useEffect(() => {
    if (!isActive) return

    const style = document.createElement('style')
    style.id = 'visual-editor-styles'
    style.innerHTML = `
      body.visual-editor-on [data-editable-target="true"] {
        outline: 1.5px dashed rgba(76, 38, 80, 0.4) !important;
        outline-offset: 2px !important;
        cursor: text !important;
        transition: outline 0.15s ease, background-color 0.15s ease !important;
      }
      body.visual-editor-on [data-editable-target="true"]:hover {
        outline: 2px solid #4C2650 !important;
        background-color: rgba(194, 178, 209, 0.15) !important;
        border-radius: 4px !important;
      }
      body.visual-editor-on [data-editable-target="true"]:focus {
        outline: 2px solid #8E6998 !important;
        background-color: rgba(255, 255, 255, 0.85) !important;
        box-shadow: 0 0 0 4px rgba(142, 105, 152, 0.15) !important;
        border-radius: 4px !important;
      }
    `
    document.head.appendChild(style)
    document.body.classList.add('visual-editor-on')

    // Identifica todos os elementos textuais editáveis
    const textSelector = 'h1, h2, h3, h4, h5, p, span, a, button, li'
    const markTargets = () => {
      document.querySelectorAll(textSelector).forEach((el) => {
        // Ignora elementos da própria barra do editor
        if (el.closest('#visual-editor-toolbar') || el.closest('#visual-editor-toggle')) return
        if (el.children.length === 0 || Array.from(el.childNodes).some((n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim())) {
          el.setAttribute('data-editable-target', 'true')
        }
      })
    }
    markTargets()

    // Captura cliques para impedir navegação acidental e habilitar foco
    const handleClick = (e) => {
      const target = e.target.closest('[data-editable-target="true"]')
      if (!target) return
      if (target.closest('#visual-editor-toolbar') || target.closest('#visual-editor-toggle')) return

      e.preventDefault()
      e.stopPropagation()
      target.contentEditable = 'true'
      target.focus()
    }

    // Salva ao perder o foco (blur)
    const handleBlur = (e) => {
      const target = e.target.closest('[data-editable-target="true"]')
      if (!target) return
      if (target.closest('#visual-editor-toolbar')) return

      const key = getElementKey(target)
      const newText = target.innerText.trim()
      if (newText) {
        setEdits((prev) => {
          const next = { ...prev, [key]: newText }
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
          } catch {
            // localStorage indisponível
          }
          return next
        })
      }
    }

    document.addEventListener('click', handleClick, true)
    document.addEventListener('blur', handleBlur, true)

    return () => {
      document.body.classList.remove('visual-editor-on')
      const el = document.getElementById('visual-editor-styles')
      if (el) el.remove()
      document.removeEventListener('click', handleClick, true)
      document.removeEventListener('blur', handleBlur, true)
      document.querySelectorAll('[data-editable-target="true"]').forEach((el) => {
        el.removeAttribute('data-editable-target')
        el.removeAttribute('contenteditable')
      })
    }
  }, [isActive])

  // Notificação toast temporária
  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(''), 3000)
  }

  // Copia o relatório de alterações em formato amigável para envio
  const handleCopyEdits = () => {
    const keys = Object.keys(edits)
    if (keys.length === 0) {
      showToast('Nenhum texto foi alterado ainda.')
      return
    }

    const lines = [
      '# Textos Alterados no Modo Edição — Doce de Nádia',
      `Data: ${new Date().toLocaleDateString('pt-BR')} ${new Date().toLocaleTimeString('pt-BR')}`,
      '',
    ]

    keys.forEach((key, i) => {
      lines.push(`${i + 1}. [${key}]:`)
      lines.push(`   "${edits[key]}"`)
      lines.push('')
    })

    navigator.clipboard.writeText(lines.join('\n'))
    showToast('Alterações copiadas! Você pode colar no chat para aplicar ao código.')
  }

  // Restaura todos os textos para o código original
  const handleReset = () => {
    if (window.confirm('Deseja restaurar todos os textos originais do site? Todas as alterações manuais serão limpas.')) {
      localStorage.removeItem(STORAGE_KEY)
      setEdits({})
      window.location.reload()
    }
  }

  return (
    <>
      {/* Botão Flutuante Discreto para Ativar/Desativar o Modo Edição */}
      {!isActive && (
        <div id="visual-editor-toggle" className="fixed bottom-5 right-5 z-[9999]">
          <button
            type="button"
            onClick={() => setIsActive(true)}
            className="group flex items-center gap-2 rounded-full border border-plum/20 bg-white/95 px-4 py-2.5 font-sans text-xs font-semibold text-plum shadow-lift backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-plum hover:bg-lavender-soft"
            title="Clique para editar qualquer texto diretamente na tela"
          >
            <Edit3 className="h-4 w-4 text-smoky transition-transform group-hover:scale-110" aria-hidden="true" />
            <span>Modo Edição</span>
            {editCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime text-[10px] font-bold text-plum-deep">
                {editCount}
              </span>
            )}
          </button>
        </div>
      )}

      {/* Barra de Ferramentas Fixa Superior/Inferior quando Ativo */}
      {isActive && (
        <div
          id="visual-editor-toolbar"
          className="fixed bottom-5 inset-x-4 z-[9999] mx-auto max-w-2xl rounded-2xl border border-plum/20 bg-white/95 p-3.5 shadow-2xl backdrop-blur-lg sm:p-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Indicador de Status */}
            <div className="flex items-center gap-2.5">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pistachio opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-lime"></span>
              </span>
              <div>
                <p className="text-xs font-bold text-plum">
                  Modo Edição Ativo
                </p>
                <p className="text-[11px] text-ink-muted">
                  Clique em qualquer texto do site para digitar e alterar.
                </p>
              </div>
            </div>

            {/* Ações da Barra */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyEdits}
                className="inline-flex items-center gap-1.5 rounded-full border border-plum/20 bg-paper px-3 py-1.5 text-xs font-semibold text-plum transition-colors hover:bg-lavender-soft"
                title="Copiar todas as alterações feitas para colar no chat"
              >
                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="hidden sm:inline">Copiar Alterações</span>
                {editCount > 0 && <span>({editCount})</span>}
              </button>

              {editCount > 0 && (
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-50/60 px-2.5 py-1.5 text-xs font-semibold text-red-700 transition-colors hover:bg-red-100"
                  title="Restaurar textos padrão originais"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  <span className="hidden sm:inline">Restaurar</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => setIsActive(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-plum text-paper transition-colors hover:bg-plum-hover"
                title="Sair do modo edição"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Mensagem Toast */}
          {toastMessage && (
            <div className="mt-2.5 flex items-center gap-1.5 rounded-lg bg-lime/40 px-3 py-1.5 text-xs font-semibold text-plum-deep">
              <Check className="h-3.5 w-3.5 text-moss shrink-0" aria-hidden="true" />
              <span>{toastMessage}</span>
            </div>
          )}
        </div>
      )}
    </>
  )
}
