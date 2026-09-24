'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDown, ArrowUpRight, Camera, Menu, MapPin, Play, X } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

/* ── util ─────────────────────────────────────────────────────────── */
const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const EASE_OUT = 'cubic-bezier(0.22, 1, 0.36, 1)'

/* ── dados (curadoria real — pastas images/ e videos/ da raiz) ────── */

const roles = ['Fotógrafa', 'Contadora de histórias', 'Fotografia de família']

type Frame = { src: string; alt: string; video?: string }

const portfolioGroups: {
  id: string
  title: string
  note: string
  variant: 'wide-first' | 'tall-pair' | 'offset' | 'triptych' | 'duo'
  frames: Frame[]
}[] = [
  {
    id: 'familia',
    title: 'Família',
    note: 'O afeto que fica.',
    variant: 'wide-first',
    frames: [
      { src: '/images/diadasmaes1.jpg', alt: 'Mãe com seu filho em ensaio do Dia das Mães' },
      { src: '/images/diadasmaes2.jpg', alt: 'Família reunida em ensaio no estúdio' },
      { src: '/images/diadasmaes4.jpg', alt: 'Momento de carinho entre mãe e filho' },
    ],
  },
  {
    id: 'infantil',
    title: 'Infantil',
    note: 'A espontaneidade da infância.',
    variant: 'tall-pair',
    frames: [
      { src: '/images/crianca.jpg', alt: 'Retrato espontâneo de criança' },
      { src: '/images/crianca1.jpg', alt: 'Criança em momento lúdico no estúdio' },
    ],
  },
  {
    id: 'aniversarios',
    title: 'Aniversários',
    note: 'A festa, o bolo e a alegria.',
    variant: 'offset',
    frames: [
      { src: '/images/smash10.jpg', alt: 'Criança celebrando aniversário com o bolo' },
      { src: '/images/smash6.jpg', alt: 'Smash the cake na festa de um ano' },
    ],
  },
  {
    id: 'gestante',
    title: 'Gestante',
    note: 'A espera cheia de amor.',
    variant: 'triptych',
    frames: [
      { src: '/images/gestante.jpg', alt: 'Gestante em ensaio no estúdio' },
      { src: '/images/gestante1.jpg', alt: 'Barriga de gestante iluminada em fundo neutro' },
      { src: '/images/gestante2.jpg', alt: 'Detalhe de mãos sobre a barriga' },
    ],
  },
  {
    id: 'ensaios',
    title: 'Ensaios',
    note: 'Você, em destaque.',
    variant: 'duo',
    frames: [
      { src: '/images/ensaio_menina1.jpg', alt: 'Ensaio fotográfico de menina em cenário floral' },
      { src: '/images/ensaio_menina4.jpg', alt: 'Menina sorrindo durante ensaio no estúdio' },
    ],
  },
  {
    id: 'datas',
    title: 'Datas especiais',
    note: 'Páscoa e celebrações — passe o mouse (ou toque) para ver em movimento.',
    variant: 'duo',
    frames: [
      { src: '/images/pascoa2.jpg', alt: 'Ensaio temático de Páscoa' },
      { src: '/images/pascoa4.jpg', alt: 'Criança no ensaio de Páscoa, em vídeo', video: '/videos/pascoavideo.mp4' },
    ],
  },
]

const horizontalFrames = [
  { src: '/images/oqfotografamos.jpg', alt: 'Ensaio fotográfico no APT Estúdio' },
  { src: '/images/oqfotografamos1.jpg', alt: 'Retrato de família no estúdio' },
  { src: '/images/oqfotografamos2.jpg', alt: 'Criança durante ensaio fotográfico' },
  { src: '/images/oqfotografamos4.jpg', alt: 'Momento espontâneo de criança' },
  { src: '/images/oqfotografamos5.jpg', alt: 'Família em sessão fotográfica' },
  { src: '/images/oqfotografamos6.jpg', alt: 'Registro de celebração em família' },
]

const memoryVideos = [
  {
    src: '/videos/ensaionamorados.mp4',
    poster: '/images/oqfotografamos1.jpg',
    alt: 'Casal em ensaio de namorados, em vídeo',
    label: 'Ensaios a dois',
  },
  {
    src: '/videos/casamento.mp4',
    poster: '/images/diadasmaes3.jpg',
    alt: 'Cerimônia de casamento, em vídeo',
    label: 'Casamentos',
  },
]

/* ── hover-to-play (§17 do CLAUDE.md) ─────────────────────────────── */

function HoverVideo({ frame, eager = false }: { frame: Frame; eager?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [active, setActive] = useState(false)

  const start = () => {
    setActive(true)
    const v = videoRef.current
    if (v) {
      v.currentTime = 0
      v.play().catch(() => {})
    }
  }
  const stop = () => {
    setActive(false)
    videoRef.current?.pause()
  }
  const toggle = () => (active ? stop() : start())

  return (
    <div
      className={`hover-video${active ? ' is-active' : ''}`}
      onMouseEnter={start}
      onMouseLeave={stop}
      onClick={toggle}
      onFocus={start}
      onBlur={stop}
      tabIndex={0}
      role="button"
      aria-label={`${frame.alt}. Ative para reproduzir o vídeo.`}
    >
      <img src={frame.src} alt="" loading={eager ? 'eager' : 'lazy'} />
      <video
        ref={videoRef}
        src={frame.video}
        poster={frame.src}
        muted
        loop
        playsInline
        preload="metadata"
        tabIndex={-1}
        aria-hidden="true"
      />
      <span className="video-badge" aria-hidden="true">
        <Play size={13} /> vídeo
      </span>
    </div>
  )
}

/* ── transição estilo PixelSwap (§23): memória se desfaz → outra nasce ─ */

function MemorySwap({
  fromSrc,
  toSrc,
  altFrom,
  altTo,
}: {
  fromSrc: string
  toSrc: string
  altFrom: string
  altTo: string
}) {
  const sectionRef = useRef<HTMLElement>(null)
  const [reduced, setReduced] = useState(false)

  useEffect(() => setReduced(prefersReducedMotion()), [])

  useEffect(() => {
    if (reduced) return
    const el = sectionRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      const target = el.querySelector<HTMLElement>('.swap-to')
      if (!target) return
      gsap.fromTo(
        target,
        { webkitMaskPositionX: '100%', maskPosition: '100% 0%' },
        {
          webkitMaskPositionX: '0%',
          maskPosition: '0% 0%',
          ease: 'steps(14)',
          duration: 1.8,
          scrollTrigger: { trigger: el, start: 'top 72%', once: true },
        },
      )
      gsap.fromTo(
        el.querySelectorAll('.swap-label span'),
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.35,
          duration: 0.6,
          ease: 'power2.inOut',
          scrollTrigger: { trigger: el, start: 'top 72%', once: true },
        },
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [reduced])

  return (
    <section ref={sectionRef} className="memory-swap" aria-label="Uma memória se transforma em outra">
      <div className="swap-stage">
        <img className="swap-from" src={fromSrc} alt={altFrom} loading="lazy" />
        <img className="swap-to" src={toSrc} alt={altTo} loading="lazy" />
        <p className="swap-label" aria-hidden="true">
          <span>uma memória se desfaz…</span>
          <span>…e outra nasce.</span>
        </p>
      </div>
    </section>
  )
}

/* ── página ───────────────────────────────────────────────────────── */

export function EvelynHome() {
  const rootRef = useRef<HTMLElement>(null)
  const roleRef = useRef<HTMLSpanElement>(null)
  const scrubSectionRef = useRef<HTMLElement>(null)
  const scrubVideoRef = useRef<HTMLVideoElement>(null)
  const horizontalSectionRef = useRef<HTMLElement>(null)
  const horizontalTrackRef = useRef<HTMLDivElement>(null)

  const [menuOpen, setMenuOpen] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)
  const [reduced, setReduced] = useState(false)

  useEffect(() => setReduced(prefersReducedMotion()), [])

  /* ROLE MORPH — crossfade + translateY 10px, power2.inOut, ~2,5s (§10) */
  useEffect(() => {
    const id = window.setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 3000)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    if (reduced) return
    const el = roleRef.current
    if (!el) return
    gsap.fromTo(el, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.55, ease: 'power2.inOut' })
  }, [roleIndex, reduced])

  /* HERO — parallax por camadas + revelação no scroll (§8–§9)
     matchMedia: no mobile o deslocamento é vertical, sem empurrar a foto para fora */
  useEffect(() => {
    if (reduced) return
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      mm.add('(min-width: 701px)', () => {
        gsap
          .timeline({
            scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.6 },
          })
          .to('.hero-bg', { yPercent: 16, ease: 'none', duration: 1 }, 0)
          .to('.hero-image-wrap', { yPercent: -10, xPercent: -12, rotate: 5, ease: 'none', duration: 1 }, 0)
          .to('.hero-copy-intro', { opacity: 0, y: -40, ease: 'none', duration: 1 }, 0)
          .fromTo(
            '.hero-reveal',
            { yPercent: 112 },
            { yPercent: 0, stagger: 0.1, ease: 'power2.out', duration: 0.22 },
            0,
          )
      })
      mm.add('(max-width: 700px)', () => {
        gsap
          .timeline({
            scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.6 },
          })
          .to('.hero-bg', { yPercent: 10, ease: 'none', duration: 1 }, 0)
          .to('.hero-image-wrap', { yPercent: -14, ease: 'none', duration: 1 }, 0)
          .to('.hero-copy-intro', { opacity: 0, y: -40, ease: 'none', duration: 1 }, 0)
          .fromTo(
            '.hero-reveal',
            { yPercent: 112 },
            { yPercent: 0, stagger: 0.1, ease: 'power2.out', duration: 0.22 },
            0,
          )
      })
      /* entrada suave da hero (comum a todos os breakpoints) */
      gsap.fromTo(
        '.hero-image-wrap',
        { opacity: 0, y: 56 },
        { opacity: 1, y: 0, duration: 1.4, ease: EASE_OUT, delay: 0.15 },
      )
      gsap.fromTo(
        '.hero-copy-intro',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1.1, ease: EASE_OUT, delay: 0.35 },
      )
    }, rootRef)
    return () => ctx.revert()
  }, [reduced])

  /* REVEALS genéricos */
  useEffect(() => {
    if (reduced) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 44 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: EASE_OUT,
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          },
        )
      })
    }, rootRef)
    return () => ctx.revert()
  }, [reduced])

  /* SCROLL-SCRUBBED VIDEO — esperabebe (§19) */
  useEffect(() => {
    if (reduced) return
    const video = scrubVideoRef.current
    const section = scrubSectionRef.current
    if (!video || !section) return
    video.pause()
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=160%',
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          if (video.readyState >= 2 && video.duration > 0) {
            video.currentTime = self.progress * (video.duration - 0.05)
          }
        },
      })
    }, rootRef)
    return () => {
      video.pause()
      ctx.revert()
    }
  }, [reduced])

  /* PIN + HORIZONTAL GALLERY (§21) — desktop; mobile usa scroll nativo */
  useEffect(() => {
    if (reduced) return
    const section = horizontalSectionRef.current
    const track = horizontalTrackRef.current
    if (!section || !track) return

    const mm = gsap.matchMedia()
    mm.add('(min-width: 900px)', () => {
      const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth + 64)
      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
      return () => {
        tween.scrollTrigger?.kill()
        tween.kill()
        gsap.set(track, { clearProps: 'x' })
      }
    })
    return () => mm.revert()
  }, [reduced])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main ref={rootRef}>
      <header className="site-header">
        <a href="#inicio" className="brand" aria-label="Evelyn Sousa Fotografia — início">
          <span>Evelyn Sousa</span>
          <small>Fotografia</small>
        </a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Navegação principal">
          <a href="#trabalho" onClick={closeMenu}>Trabalho</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#estudio" onClick={closeMenu}>Estúdio</a>
          <a className="nav-cta" href="https://wa.me/5521977514967" target="_blank" rel="noreferrer" onClick={closeMenu}>
            Vamos conversar <ArrowUpRight size={14} />
          </a>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      {/* ── HERO (§8) ─────────────────────────────────────────────── */}
      <section id="inicio" className="hero" aria-labelledby="hero-title">
        <div className="hero-bg" aria-hidden="true">
          <span className="hero-glow hero-glow-one" />
          <span className="hero-glow hero-glow-two" />
        </div>

        <div className="hero-stage">
          <div className="hero-image-wrap">
            <img
              src="/images/hero_img.png"
              alt="Evelyn Sousa, fotógrafa, no APT Estúdio"
              className="hero-image"
              fetchPriority="high"
            />
            <span className="image-note">APT Estúdio — Coelho Neto</span>
          </div>

          <div className="hero-copy">
            <div className="hero-copy-intro">
              <p className="eyebrow">APT Estúdio · Rio de Janeiro</p>
              <p className="hero-lede">Fotografia de família, infância e celebrações — memórias para sentir de novo.</p>
            </div>
            <h1 id="hero-title">
              <span className="mask-line"><span className="hero-reveal">Evelyn Sousa</span></span>
              <span className="mask-line"><span className="hero-reveal"><em>Fotógrafa</em></span></span>
            </h1>
            <p className="hero-role" aria-hidden="true">
              <span ref={roleRef} key={roleIndex}>{roles[roleIndex]}</span>
            </p>
          </div>
        </div>

        <a className="scroll-cue" href="#manifesto">
          <span>Role para descer</span>
          <ArrowDown size={15} />
        </a>
      </section>

      {/* ── MANIFESTO ─────────────────────────────────────────────── */}
      <section id="manifesto" className="manifesto section-shell" data-reveal>
        <p className="section-index">01 — uma fotografia feita de perto</p>
        <div className="manifesto-content">
          <h2>O que fica<br /><span>é o que importa.</span></h2>
          <div className="manifesto-text">
            <p>Entre um abraço, uma risada e aquele olhar que quase passa despercebido, existem histórias inteiras.</p>
            <p>Eu fotografo com calma, presença e espaço para que cada família seja exatamente quem é.</p>
          </div>
        </div>
      </section>

      {/* ── PORTFÓLIO EDITORIAL (§13) ─────────────────────────────── */}
      <section id="trabalho" className="portfolio section-shell">
        <div className="section-heading" data-reveal>
          <div>
            <p className="section-index">02 — histórias reais</p>
            <h2>Um pouco do<br /><em>que vivemos.</em></h2>
          </div>
          <p className="heading-aside">
            Famílias, infância, celebrações<br />e tudo aquilo que merece ser lembrado.
          </p>
        </div>

        {portfolioGroups.map((group) => (
          <div className={`portfolio-group group-${group.variant}`} key={group.id} data-reveal>
            <div className="group-heading">
              <h3>{group.title}</h3>
              <p>{group.note}</p>
            </div>
            <div className="group-frames">
              {group.frames.map((frame, i) => (
                <figure className="group-frame" key={frame.src}>
                  {frame.video ? (
                    <HoverVideo frame={frame} />
                  ) : (
                    <img src={frame.src} alt={frame.alt} loading={i === 0 ? 'eager' : 'lazy'} />
                  )}
                </figure>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── MEMÓRIAS EM MOVIMENTO (hover-to-play §17) ─────────────── */}
      <section className="memories section-shell" data-reveal>
        <div className="section-heading">
          <div>
            <p className="section-index">03 — em movimento</p>
            <h2>Memórias que<br /><em>se mexem.</em></h2>
          </div>
          <p className="heading-aside">Passe o mouse — ou toque — para reviver o momento.</p>
        </div>
        <div className="memories-grid">
          {memoryVideos.map((m) => (
            <HoverVideo key={m.src} frame={{ src: m.poster, alt: m.alt, video: m.src }} eager />
          ))}
        </div>
        <p className="memories-note">{memoryVideos.map((m) => m.label).join(' · ')}</p>
      </section>

      {/* ── PIXELSWAP TRANSITION (§23) ────────────────────────────── */}
      <MemorySwap
        fromSrc="/images/crianca1.jpg"
        toSrc="/images/diadasmaes2.jpg"
        altFrom="Criança em momento lúdico"
        altTo="Família reunida em ensaio"
      />

      {/* ── SCROLL-SCRUBBED VIDEO (§19) ───────────────────────────── */}
      <section ref={scrubSectionRef} className="scrub-story" aria-label="A espera de um bebê, quadro a quadro">
        <div className="scrub-stage">
          <video
            ref={scrubVideoRef}
            src="/videos/esperabebe.mp4"
            poster="/images/gestante.jpg"
            muted
            loop
            playsInline
            preload="auto"
            controls={reduced || undefined}
          />
          <div className="scrub-caption">
            <p className="section-index">04 — a espera</p>
            <h2>Que começa<br /><em>antes do nascer.</em></h2>
          </div>
        </div>
      </section>

      {/* ── PIN + HORIZONTAL GALLERY (§21) ────────────────────────── */}
      <section ref={horizontalSectionRef} className="horizontal-story" aria-label="Uma história em imagens">
        <div className="horizontal-track" ref={horizontalTrackRef}>
          <div className="horizontal-story-intro">
            <p className="section-index">05 — o tempo de um encontro</p>
            <h2>Devagar,<br /><em>como a vida.</em></h2>
            <p>Uma sessão não precisa ser apressada. Ela pode ser feita de presença, luz e pequenos movimentos.</p>
            <p className="drag-hint" aria-hidden="true">Arraste para o lado</p>
          </div>
          {horizontalFrames.map((frame) => (
            <figure key={frame.src}>
              <img src={frame.src} alt={frame.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      {/* ── SOBRE EVELYN (etapa 07) ───────────────────────────────── */}
      <section id="sobre" className="about section-shell" data-reveal>
        <div className="about-image">
          <img src="/images/quemsoueu.jpg" alt="Evelyn Sousa, fotógrafa do APT Estúdio" loading="lazy" />
          <span>Evelyn Sousa</span>
        </div>
        <div className="about-copy">
          <p className="section-index">06 — sobre o encontro</p>
          <h2>Fotografar é<br /><em>estar presente.</em></h2>
          <p>
            Sou Evelyn, fotógrafa no Coelho Neto, Rio de Janeiro. No APT Estúdio, crio um espaço acolhedor
            para fotografar infância, família, eventos, aniversários, gestantes e os dias que fazem parte
            da nossa história.
          </p>
          <a className="text-link" href="https://www.instagram.com/evelynsousafotografia" target="_blank" rel="noreferrer">
            Conheça mais no Instagram <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      {/* ── QUOTE ─────────────────────────────────────────────────── */}
      <section className="quote-section" data-reveal>
        <p className="section-index">07 — palavras que abraçam</p>
        <blockquote>
          “A melhor fotografia não pede<br /><em>para você posar.</em>”
        </blockquote>
        <p className="quote-note">— um convite para ser você, por inteiro</p>
      </section>

      {/* ── LOCALIZAÇÃO (§25) ─────────────────────────────────────── */}
      <section id="estudio" className="studio-location section-shell" data-reveal>
        <div>
          <p className="section-index">08 — onde acontece</p>
          <h2>Um espaço para<br /><em>ser você.</em></h2>
        </div>
        <div className="location-card">
          <span className="location-pin" aria-hidden="true"><MapPin size={18} /></span>
          <p>APT Estúdio</p>
          <address>
            R. Pôrto Acre, 42<br />
            Coelho Neto — Rio de Janeiro/RJ<br />
            21540-830
          </address>
          <a
            className="text-link"
            href="https://www.google.com/maps/search/?api=1&query=R.+P%C3%B4rto+Acre%2C+42%2C+Coelho+Neto%2C+Rio+de+Janeiro"
            target="_blank"
            rel="noreferrer"
          >
            Abrir no mapa <ArrowUpRight size={15} />
          </a>
        </div>
      </section>

      {/* ── CTA final ─────────────────────────────────────────────── */}
      <section id="contato" className="contact section-shell" data-reveal>
        <p className="section-index">09 — quando quiser guardar</p>
        <h2>Vamos criar uma<br /><em>memória sua?</em></h2>
        <a className="contact-button" href="https://wa.me/5521977514967" target="_blank" rel="noreferrer">
          Agende seu ensaio <ArrowUpRight size={18} />
        </a>
        <div className="contact-details">
          <span>Coelho Neto · Rio de Janeiro</span>
          <span>(21) 97751-4967</span>
          <span>5,0 <span aria-label="cinco estrelas">★★★★★</span> · 49 avaliações</span>
        </div>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Evelyn Sousa Fotografia</span>
        <span>APT Estúdio</span>
        <a href="https://www.instagram.com/evelynsousafotografia" target="_blank" rel="noreferrer">
          <Camera size={16} /> @evelynsousafotografia
        </a>
      </footer>
    </main>
  )
}

export default EvelynHome
