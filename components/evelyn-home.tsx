'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Camera, Menu, X } from 'lucide-react'

const roles = ['Fotógrafa', 'Contadora de histórias', 'Fotografia de família']

const projects = [
  { title: 'Afeto em movimento', category: 'Família', image: '/images/family-session.png', className: 'portfolio-wide' },
  { title: 'Pequenos instantes', category: 'Infantil', image: '/images/childhood.png', className: 'portfolio-tall' },
  { title: 'O lugar das memórias', category: 'Estúdio', image: '/images/studio-detail.png', className: 'portfolio-wide portfolio-offset' },
]

export function EvelynHome() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const timer = window.setInterval(() => setRoleIndex((current) => (current + 1) % roles.length), 2800)
    return () => window.clearInterval(timer)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="Evelyn Sousa Fotografia — início"><span>Evelyn Sousa</span><small>Fotografia</small></a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Navegação principal">
          <a href="#trabalho" onClick={closeMenu}>Trabalho</a><a href="#sobre" onClick={closeMenu}>Sobre</a><a href="#estudio" onClick={closeMenu}>Estúdio</a>
          <a className="nav-cta" href="https://wa.me/5521977514967" target="_blank" rel="noreferrer" onClick={closeMenu}>Vamos conversar <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </header>

      <section id="inicio" className="hero" aria-labelledby="hero-title">
        <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
        <div className="hero-copy"><p className="eyebrow">APT Estúdio · Rio de Janeiro</p><h1 id="hero-title">Memórias<br /><em>para sentir</em><br />de novo.</h1><p className="hero-role" aria-live="polite"><span key={roles[roleIndex]}>{roles[roleIndex]}</span></p></div>
        <div className="hero-image-wrap"><img src="/images/hero-family.png" alt="Mãe segurando seu filho junto à janela" className="hero-image" /><span className="image-note">01 / presença</span></div>
        <a className="scroll-cue" href="#manifesto"><span>Role para descobrir</span><ArrowDown size={15} /></a>
      </section>

      <section id="manifesto" className="manifesto section-shell"><p className="section-index">01 — uma fotografia feita de perto</p><div className="manifesto-content"><h2>O que fica<br /><span>é o que importa.</span></h2><div className="manifesto-text"><p>Entre um abraço, uma risada e aquele olhar que quase passa despercebido, existem histórias inteiras.</p><p>Eu fotografo com calma, presença e espaço para que cada família seja exatamente quem é.</p></div></div></section>

      <section id="trabalho" className="portfolio section-shell"><div className="section-heading"><div><p className="section-index">02 — histórias reais</p><h2>Um pouco do<br /><em>que vivemos.</em></h2></div><p className="heading-aside">Famílias, infância, celebrações<br />e tudo aquilo que merece ser lembrado.</p></div><div className="portfolio-grid">{projects.map((project, index) => <a href="#contato" className={`portfolio-item ${project.className}`} key={project.title}><div className="portfolio-image-wrap"><img src={project.image} alt={project.title} loading={index === 0 ? 'eager' : 'lazy'} /></div><div className="portfolio-caption"><span>{project.category}</span><strong>{project.title}</strong><ArrowUpRight size={16} /></div></a>)}</div></section>

      <section className="horizontal-story" aria-label="Uma história em imagens"><div className="horizontal-story-intro"><p className="section-index">03 — o tempo de um encontro</p><h2>Devagar,<br /><em>como a vida.</em></h2><p>Uma sessão não precisa ser apressada. Ela pode ser feita de presença, luz e pequenos movimentos.</p></div><div className="horizontal-frames"><figure><img src="/images/hero-family.png" alt="Família em um momento de carinho" /></figure><figure><img src="/images/childhood.png" alt="Criança em um momento espontâneo" /></figure><figure><img src="/images/family-session.png" alt="Família reunida em sessão fotográfica" /></figure></div></section>

      <section id="sobre" className="about section-shell"><div className="about-image"><img src="/images/studio-detail.png" alt="Detalhe acolhedor do APT Estúdio" loading="lazy" /><span>APT Estúdio</span></div><div className="about-copy"><p className="section-index">04 — sobre o encontro</p><h2>Fotografar é<br /><em>estar presente.</em></h2><p>Sou Evelyn, fotógrafa no Coelho Neto, Rio de Janeiro. No APT Estúdio, crio um espaço acolhedor para fotografar infância, família, eventos e os dias que fazem parte da nossa história.</p><a className="text-link" href="https://www.instagram.com/evelynsousafotografia" target="_blank" rel="noreferrer">Conheça mais no Instagram <ArrowUpRight size={15} /></a></div></section>

      <section id="estudio" className="quote-section"><p className="section-index">05 — palavras que abraçam</p><blockquote>“A melhor fotografia não pede<br /><em>para você posar.</em>”</blockquote><p className="quote-note">— um convite para ser você, por inteiro</p></section>

      <section className="studio-location section-shell"><div><p className="section-index">06 — onde acontece</p><h2>Um espaço para<br /><em>ser você.</em></h2></div><div className="location-card"><span className="location-pin" aria-hidden="true"><Camera size={18} /></span><p>APT Estúdio</p><address>R. Pôrto Acre, 42<br />Coelho Neto — Rio de Janeiro/RJ<br />21540-830</address><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=R.+P%C3%B4rto+Acre%2C+42%2C+Coelho+Neto%2C+Rio+de+Janeiro" target="_blank" rel="noreferrer">Abrir no mapa <ArrowUpRight size={15} /></a></div></section>

      <section id="contato" className="contact section-shell"><p className="section-index">07 — quando quiser guardar</p><h2>Vamos criar uma<br /><em>memória sua?</em></h2><a className="contact-button" href="https://wa.me/5521977514967" target="_blank" rel="noreferrer">Agende seu ensaio <ArrowUpRight size={18} /></a><div className="contact-details"><span>Coelho Neto · Rio de Janeiro</span><span>(21) 97751-4967</span><span>5,0 <span aria-label="estrelas">★★★★★</span> · 49 avaliações</span></div></section>

      <footer className="site-footer"><span>© {new Date().getFullYear()} Evelyn Sousa Fotografia</span><span>APT Estúdio</span><a href="https://www.instagram.com/evelynsousafotografia" target="_blank" rel="noreferrer"><Camera size={16} /> @evelynsousafotografia</a></footer>
    </main>
  )
}

export default EvelynHome
