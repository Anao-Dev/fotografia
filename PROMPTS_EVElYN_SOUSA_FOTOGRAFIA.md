# SEQUÊNCIA DE PROMPTS — EVELYN SOUSA FOTOGRAFIA

Use uma etapa por vez. Depois do relatório de cada etapa, pare e aguarde a próxima instrução.

## 01 — DISCOVERY / AUDITORIA

Leia completamente o CLAUDE.md.
Analise todo o projeto antes de editar.
NÃO faça alterações.

Mapeie:
- estrutura;
- componentes;
- rotas;
- dependências;
- GSAP;
- Lenis;
- React Bits;
- Framer Motion;
- assets.

Analise TODAS as imagens e TODOS os vídeos. Identifique resolução, orientação, assunto, qualidade e melhor função narrativa.

Crie uma curadoria mental: BEST HERO / BEST ABOUT / BEST PORTFOLIO / BEST EMOTIONAL / BEST VIDEO / BEST CTA.

Informe o inventário e pare.

---

## 02 — DESIGN TOKENS

Leia o CLAUDE.md.

Implemente apenas:
- cores;
- typography;
- spacing;
- shapes;
- motion tokens;
- textura base.

Paleta: roxo pastel + azul pastel + branco + pink.
Não criar paleta paralela.
Não adicionar funcionalidades.

Execute `npm run build`.
Relate e pare.

---

## 03 — HERO FOUNDATION

Implemente SOMENTE a Hero.

Conceito:
- fotografia da Evelyn como protagonista;
- “ROLE PARA DESCER”;
- parallax por camadas;
- nome revelado durante scroll;
- “Fotógrafa” revelado durante scroll;
- composição autoral e editorial.

Não usar Three.js ainda.
Não alterar outras seções.

Execute build e pare.

---

## 04 — ROLE MORPH

Adicionar somente o Text Rotator / Role Morph.

Crossfade + translateY 8–12px.
500–600ms.
power2.inOut.
~2.5s.

Preferir GSAP.
Não controlar o mesmo elemento com dois engines.

Execute build e pare.

---

## 05 — PORTFOLIO CURATION

Use os assets reais mais fortes.
Não usar placeholders ou URLs externas.

Criar portfólio editorial, não grid uniforme.

Se DriftWall ou ImageStreamHero melhorar a experiência, usar um deles e adaptar os parâmetros.

A ordem das imagens deve ser narrativa, não alfabética e não por ordem de download.

Execute build e pare.

---

## 06 — HOVER TO PLAY

Adicionar hover-to-play apenas onde existir vídeo adequado.

Imagem → crossfade → vídeo muted loop.
Mouse leave → pause → poster.

Vídeo:
- preload="metadata";
- playsInline;
- muted;
- loop.

Mobile:
tap ou poster estático.

Não carregar todos os vídeos simultaneamente.

Execute build e pare.

---

## 07 — ABOUT EVELYN

Criar a seção sobre Evelyn usando somente fatos confirmados.

Usar a segunda fotografia indicada quando disponível.

Pode utilizar MaskedHeading em UM momento forte.

Texto humano, não corporativo.

Execute build e pare.

---

## 08 — SCROLL-SCRUBBED MEDIA

Criar UMA experiência scroll-scrubbed.

GSAP + ScrollTrigger + scrub:true.

Escolher o melhor vídeo para isso.
Adicionar fallback mobile e reduced motion.

Execute build e pare.

---

## 09 — PIN + HORIZONTAL GALLERY

Implementar:
VERTICAL → PIN → HORIZONTAL → ÚLTIMA IMAGEM → TRANSITION → VERTICAL.

Usar cálculo dinâmico real.
Sem valores mágicos.
Preservar touch.

Execute build e pare.

---

## 10 — TESTIMONIALS

Implementar AnimatedTestimonials somente com depoimentos reais.
Nunca usar os dados da demo.

Motion:
- rotação pequena;
- scale discreto;
- crossfade;
- texto reveal sutil.

Execute build e pare.

---

## 11 — STUDIO MAP

Adicionar:
R. Pôrto Acre, 42 — Coelho Neto — Rio de Janeiro/RJ, 21540-830.

Usar mapcn-marker-tooltip somente se disponível e compatível.

Visual:
white + blue-soft + purple + pink.

Execute build e pare.

---

## 12 — PIXELSWAP TRANSITION

Usar PixelSwap em UMA transição entre capítulos.

Conceito:
memória → transformação → nova memória.

Não usar em toda navegação.

Execute build e pare.

---

## 13 — CANVAS UI

Pesquise a documentação atual.
Escolha no máximo 2 experiências.

Priorizar:
- Particle Reveal;
- Particle Scroll;
- Glass Object;
- Ripple;
- Peel.

Não usar efeitos aleatórios.
Adicionar fallback e reduced motion.

Execute build e pare.

---

## 14 — THREE.JS

Avalie se Three.js realmente melhora a Hero.

Se sim, criar UMA experiência sutil:
- partículas;
- luz;
- profundidade;
- atmosfera.

Não transformar a Hero em demo técnica.

Limitar DPR, partículas, RAF e canvas.
Destruir corretamente no unmount.

Se não houver benefício claro, NÃO adicionar Three.js.

Execute build e pare.

---

## 15 — AUDIO

Somente se contribuir para a experiência.

Volume 0.15–0.30.
Mute.
Debounce.
Reduced motion fallback.

Não tornar áudio necessário.

Execute build e pare.

---

## 16 — TEXTURE + DEPTH PASS

Revise todas as seções procurando:
- superfícies lisas;
- falta de profundidade;
- falta de materialidade.

Adicionar:
- grain;
- papel;
- micro-noise;
- background/midground/foreground;
- sombras muito sutis.

Não usar gradients decorativos como solução principal.

Execute build e pare.

---

## 17 — MOTION PASS

Audite todas as animações.

Pergunte:
- por que se move?
- duração?
- easing?
- repetição?
- há excesso de fade?

Remova redundâncias.
Não criar efeitos apenas para aumentar a quantidade de motion.

Execute build e pare.

---

## 18 — MOBILE + REDUCED MOTION

Testar:
360 / 390 / 412 / 768 / 1024 / 1440.

Corrigir:
- overflow;
- hover dependency;
- vídeo pesado;
- WebGL;
- parallax;
- tipografia;
- touch.

Testar `prefers-reduced-motion`.

Execute build e pare.

---

## 19 — ASSET QA

Verifique:
- paths;
- imagens quebradas;
- vídeos quebrados;
- poster de vídeos;
- alt;
- duplicações;
- assets não utilizados.

Não remover assets sem certeza.

Execute build e pare.

---

## 20 — FINAL QA

Não adicione funcionalidades.

Audite:
- identidade;
- hero;
- portfólio;
- role morph;
- hover-to-play;
- scroll-scrub;
- pin;
- horizontal gallery;
- testimonials;
- map;
- PixelSwap;
- áudio;
- mobile;
- reduced motion;
- performance;
- console;
- build.

Corrija somente problemas encontrados.

Execute `npm run build`.

Informe:
- arquivos alterados;
- bugs corrigidos;
- motion validado;
- scroll validado;
- assets validados;
- mobile;
- performance;
- build;
- problemas restantes.

Depois pare.
