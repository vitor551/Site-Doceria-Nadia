import TopBar from './components/TopBar'
import Header from './components/Header'
import Hero from './components/Hero'
import Specialties from './components/Specialties'
import About from './components/About'
import Occasions from './components/Occasions'
import Quote from './components/Quote'
import HowToOrder from './components/HowToOrder'
import Footer from './components/Footer'
import VisualEditor from './components/VisualEditor'

export default function App() {
  return (
    <div id="topo" className="min-h-screen bg-paper text-ink selection:bg-lavender/50 selection:text-plum-deep">
      {/* 0. Barra Superior com WhatsApp e Entrega */}
      <TopBar />

      {/* 1. Header com Navegação e Botão de Encomenda */}
      <Header />

      {/* Fluxo Principal da Homepage (Conforme Protótipo e SKILL.md) */}
      <main>
        {/* 2. Hero: Headline Afetiva, Métricas e Foto Destaque */}
        <Hero />

        {/* 3. Especialidades: Cards dos Produtos Principais */}
        <Specialties />

        {/* 4. Nossa Essência: 3 Pilares da Tradição Familiar */}
        <About />

        {/* 5. Celebrações & Datas Marcantes: Casamentos, Mimos e Festas */}
        <Occasions />

        {/* 6. Citação: Assinatura da Nádia e Filosofia da Marca */}
        <Quote />

        {/* 7. Como Pedir: Prazos, Como Trabalhamos e WhatsApp */}
        <HowToOrder />
      </main>

      {/* 8. Rodapé: Informações Completas, Horários e Créditos */}
      <Footer />

      {/* Ferramenta Interativa: Modo de Edição Visual em Tempo Real */}
      <VisualEditor />
    </div>
  )
}
