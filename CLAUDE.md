# EVELYN SOUSA FOTOGRAFIA — APT ESTÚDIO
# DESIGN SYSTEM + MOTION SYSTEM + IMPLEMENTATION PLAYBOOK

> Fonte de direção para um portfólio fotográfico autoral, premium, humano e memorável.
> O objetivo não é mostrar bibliotecas; é fazer o visitante sentir a fotografia, a pessoa e as memórias.

## 0. REGRAS ABSOLUTAS

Antes de editar:
1. Leia este arquivo inteiro.
2. Analise a estrutura real do projeto e todos os assets disponíveis.
3. Preserve o que já funciona.
4. Faça alterações incrementais.
5. Não refatore o projeto inteiro para resolver uma tarefa localizada.
6. Não invente biografia, serviços, prêmios, clientes, números, depoimentos, preços ou resultados.
7. Não copie literalmente matthewencina.com ou qualquer referência.
8. Não transforme o site em showcase de React Bits, Three.js, Canvas UI ou GSAP.
9. Se um efeito prejudicar performance, acessibilidade ou funcionalidade, reduza ou remova o efeito.

## 1. MARCA E CONTEXTO

**Nome:** Evelyn Sousa Fotografia
**Estúdio:** APT Estúdio
**Categoria:** Fotógrafa / Estúdio Fotográfico
**Local:** Coelho Neto — Rio de Janeiro/RJ
**Endereço:** R. Pôrto Acre, 42 — Coelho Neto, Rio de Janeiro/RJ, 21540-830
**Instagram:** @evelynsousafotografia
**Telefone:** (21) 97751-4967
**Avaliação informada:** 5,0 / 49 avaliações

Comunicação observada nos materiais:
- Fotografia Infantil
- Família
- Eventos
- Ensaios
- Aniversários
- 15 anos
- Memórias
- Aconchego
- Paciência
- Experiência acolhedora

Use apenas informação confirmada no projeto/material fornecido.

## 2. POSICIONAMENTO

A sensação desejada é:

> “Essa fotógrafa registra momentos que eu quero lembrar.”

A experiência deve combinar:

FOTOGRAFIA + MEMÓRIA + AFETO + AUTORIA + ACOLHIMENTO + MOVIMENTO + EDITORIAL + EMOÇÃO.

Não criar um portfólio corporativo frio.
Não criar um site de fotógrafo genérico.
Não criar uma landing page com cards padronizados.

## 3. REFERÊNCIA DE EXPERIÊNCIA

A referência de Matthew Encina deve ser usada para estudar:
- portfolio autoral;
- narrativa pessoal;
- tipografia em grande escala;
- scroll storytelling;
- motion com propósito;
- apresentação de trabalho como história;
- craft e processo.

A home atual de Matthew Encina usa uma apresentação de identidade por roles como “Designer / Maker / Storyteller” e uma linguagem de portfólio que prioriza trabalho, história e processo; use o princípio, não copie identidade ou layout. citeturn793127search3turn793127search0

## 4. PALETA

A direção cromática é:

ROXO PASTEL + AZUL PASTEL + BRANCO + ROSA/PINK.

### Tokens
```css
:root {
  --color-purple-deep: #5B4B7A;
  --color-purple: #A99BD2;
  --color-purple-soft: #D9D2EC;
  --color-purple-pale: #EEEAF6;

  --color-blue-deep: #4D708E;
  --color-blue: #AFCBE2;
  --color-blue-soft: #DCEAF4;
  --color-blue-pale: #EEF5FA;

  --color-pink-deep: #A55E7D;
  --color-pink: #E7A8C2;
  --color-pink-soft: #F3D5E1;
  --color-pink-pale: #FAEDF2;

  --color-white: #FFFFFF;
  --color-warm-white: #FCFBF8;
  --color-ink: #29272E;
  --color-muted: #79737F;
  --color-line: rgba(41,39,46,.14);
}
```

### Proporção
- 65–75% branco / warm white
- 15–25% roxo + azul
- 5–10% pink

Não usar todas as cores na mesma intensidade.

## 5. TIPOGRAFIA

### Display
Preferir:
- Cormorant Garamond
- DM Serif Display
- Playfair Display
- ou uma fonte editorial já presente no projeto.

Peso principal: 300–400.

### Interface
Preferir:
- Satoshi
- Inter
- DM Sans
- Manrope

Pesos: 500 / 600 / 700.

### Escala
```css
--text-caption: 12px;
--text-body: 15px;
--text-body-lg: 22px;
--text-subheading: 38px;
--text-heading: 58px;
--text-heading-lg: 82px;
--text-display: 120px;
```
Use `clamp()` para responsividade.

## 6. FORMA E ESPAÇAMENTO

```css
--space-4: 4px;
--space-8: 8px;
--space-12: 12px;
--space-16: 16px;
--space-24: 24px;
--space-32: 32px;
--space-48: 48px;
--space-64: 64px;
--space-96: 96px;
--space-128: 128px;
--space-160: 160px;
```

Cards e fotografias: normalmente 0–12px de raio.
Controles: 3–8px.
Pills: somente quando realmente fizer sentido.

## 7. FULLSCREEN CHAPTERS

As seções principais devem possuir presença visual.
Preferir:
```css
min-height: 100svh;
```
quando apropriado.

Não usar `height: 100vh` rígido se houver risco de cortar conteúdo.

Cada seção é um capítulo e deve ter uma atmosfera e um comportamento próprio.

## 8. HERO — ABERTURA

A Hero é a parte mais importante.

### Experiência
Inicialmente:
- foto da Evelyn como foco;
- composição limpa;
- “ROLE PARA DESCER”;
- poucos elementos.

Ao scroll:
1. a foto reage;
2. a pessoa/fotografia desloca-se lateralmente;
3. camadas aparecem;
4. “Evelyn Sousa” é revelado;
5. “Fotógrafa” é revelado;
6. a próxima experiência nasce da própria composição.

Não parecer slider.
Não parecer banner.
Não empilhar cards.

## 9. HERO PARALLAX

Estrutura:
- Background: textura, luz, formas sutis.
- Midground: fotografia.
- Foreground: tipografia, microcopy, instrução de scroll.

Movimento:
- background mais lento;
- imagem com deslocamento moderado;
- texto com timing próprio.

## 10. TEXT ROTATOR / ROLE MORPH

Pode alternar palavras coerentes com a identidade real, por exemplo:
- Fotógrafa
- Contadora de histórias
- Fotografia de família

Animação:
- crossfade;
- translateY de 8–12px;
- 500–600ms;
- `power2.inOut`;
- intervalo ~2.5s.

Preferência: GSAP timeline.
Não controlar o mesmo elemento com GSAP e Framer Motion simultaneamente.

## 11. SCROLL STORYTELLING

O scroll é uma ferramenta narrativa.

Fluxo desejado:
```text
HERO → IMPACTO
↓
SCROLL → REVELAÇÃO
↓
PORTFÓLIO → DESCOBERTA
↓
SCROLL → NOVA COMPOSIÇÃO
↓
SOBRE EVELYN → HUMANIDADE
↓
SCROLL → MEMÓRIAS
↓
PROVA SOCIAL → CONFIANÇA
↓
LOCALIZAÇÃO → PROXIMIDADE
↓
CTA → CONEXÃO
```

A pergunta silenciosa deve ser:
**“O que vem agora?”**

## 12. TRANSIÇÕES

Evitar cortes secos entre seções.

Possibilidades:
- clip-path;
- máscara;
- curtain;
- pixel transition;
- image reveal;
- layer reveal;
- mudança tonal;
- fotografia atravessando o limite.

Não repetir a mesma transição em todos os capítulos.

## 13. PORTFÓLIO

A apresentação deve parecer curadoria editorial.

Não usar apenas:
`grid de 3 colunas + cards iguais`.

Preferir:
- imagens grandes;
- composição assimétrica;
- muito respiro;
- agrupamentos editoriais;
- detalhe interativo;
- motion que respeita cada foto.

Possíveis grupos, somente se existirem nos assets:
- Infantil
- Família
- Eventos
- Aniversários
- 15 anos
- Amor

## 14. ASSET CURATION

Antes de usar imagens:
- inventariar todas;
- analisar resolução, orientação e assunto;
- identificar duplicatas;
- escolher as melhores;
- definir função de cada asset.

Regra:
**A melhor foto deve ocupar o melhor lugar.**

Não escolher por ordem de download.
Não escolher por nome de arquivo.

## 15. VÍDEOS

Analisar todos os vídeos.
Registrar mentalmente:
- duração;
- orientação;
- resolução;
- primeiro frame;
- movimento;
- iluminação;
- assunto;
- potencial para hero/background/hover/transição.

Vídeo deve ser usado porque é o melhor meio para aquele momento.

## 16. DRIFTWALL / IMAGE STREAM

`DriftWall` ou `ImageStreamHero` podem servir para criar fluxo de memórias.

Não copiar os valores de uma demo cegamente.
Ajustar:
- velocidade;
- perspectiva;
- quantidade;
- tilt;
- depth;
- fade;
- mobile fallback.

Usar assets locais reais.

## 17. HOVER-TO-PLAY

Estado inicial: imagem.

Hover:
- crossfade;
- vídeo muted;
- loop;
- playsInline.

Mouse out:
- pause;
- volta para poster/imagem.

`preload="metadata"`.

Touch:
- tap ou poster estático;
- nunca depender de hover para conteúdo essencial.

## 18. AUDIO

Opcional.

Se usado:
- Web Audio API, Howler.js ou HTMLAudioElement;
- volume 0.15–0.30;
- debounce;
- mute acessível.

Nunca iniciar áudio de forma intrusiva.

## 19. SCROLL-SCRUBBED VIDEO

Uma experiência especial pode vincular:
`scroll progress → video.currentTime`.

Usar GSAP + ScrollTrigger + `scrub: true`.

Alternativa: sequência de frames em canvas.

Não criar várias experiências pesadas desse tipo.

## 20. PINNING

Pode existir uma cena pinned:
- viewport permanece estável;
- imagens/textos mudam;
- composição transforma-se;
- unpin suave no fim.

Não prender o usuário por tempo excessivo.

## 21. HORIZONTAL SCROLL

Criar pelo menos uma experiência:
```text
VERTICAL
↓
PIN
↓
HORIZONTAL GALLERY
↓
LAST IMAGE
↓
TRANSITION
↓
VERTICAL
```

Calcular deslocamento com dimensões reais.
Nunca usar `xPercent: -1000` arbitrariamente.

No mobile, usar horizontal nativo ou simplificar para vertical se necessário.

## 22. MASKED HEADING

`MaskedHeading` é candidato para:
- manifesto;
- apresentação;
- memória;
- encerramento.

Pode usar foto ou vídeo real.
Não usar em todos os títulos.

## 23. PIXELSWAP

Usar `PixelSwap` em uma única transição importante.

Conceito:
**uma memória se desfaz → outra memória surge.**

Não usar em toda navegação.

## 24. ANIMATED TESTIMONIALS

Pode usar `AnimatedTestimonials` somente com depoimentos reais.

Nunca usar:
- Sarah Chen;
- Michael Rodriguez;
- outras pessoas da demo;
- fotos de stock para simular clientes.

Motion:
- pequena rotação;
- scale discreto;
- crossfade;
- texto word-by-word muito sutil.

## 25. MAPA / LOCALIZAÇÃO

Localização:
R. Pôrto Acre, 42 — Coelho Neto — Rio de Janeiro/RJ
21540-830

O mapa deve comunicar:
**“onde as memórias acontecem.”**

Pode utilizar um componente de mapa/marker compatível, incluindo mapcn quando estiver disponível no projeto.

Visual do mapa:
- branco;
- blue-soft;
- purple;
- pink apenas para marcador.

## 26. TEXTO EM CAMADAS

Uma composição especial pode usar 2–3 cópias do mesmo texto.

Camada 1: principal.
Camada 2: offset 2–6px, opacidade menor.
Camada 3: blur mínimo/opacidade baixa.

Usar raramente.

## 27. REACT BITS — SELEÇÃO

Pesquisar a biblioteca oficial antes de implementar.
A index atual do React Bits inclui famílias de Text Animations e Animations com componentes como Text Split, Blur Text, Masked Heading, Scroll Reveal, Scroll Float, Count Up, Pixel Swap, Image Trail e outros. citeturn793127search10

### Text
- Text Split
- Blur Text
- Scroll Reveal
- Scroll Float
- True Focus
- Variable Proximity
- Masked Heading
- Count Up

### Composition / UI
- Spotlight Card
- Tilted Card
- Scroll Stack
- Flowing Menu
- Flying Posters
- Carousel
- Masonry
- Chroma Grid
- Depth Carousel

### Motion / Interaction
- Pixel Swap
- Image Trail
- Magnet
- Target Cursor
- Pixel Transition

### Background
- Threads
- Silk
- Light Rays
- Grid Motion
- Aurora
- Topography
- Web Threads

Regra: escolher por propósito, não por quantidade.

## 28. CANVAS UI

Canvas UI atualmente oferece componentes HTML-in-canvas em WebGL/WebGPU e apresenta efeitos como Particle Reveal, Particle Scroll, Glass Object, Liquid Object, Shatter, Peel e Ripple. citeturn793127search4turn793127search1

Usar no máximo 2–3 momentos significativos.

Preferir efeitos coerentes com fotografia:
- Particle Reveal
- Particle Scroll
- Glass Object
- Ripple
- Peel

Evitar automaticamente:
- glitch;
- VHS;
- fogo;
- ASCII.

## 29. THREE.JS

Three.js somente quando acrescentar valor real.

Na Hero pode criar:
- partículas suaves;
- profundidade;
- luz;
- objeto abstrato;
- atmosfera;
- interação discreta.

Não usar Three.js em todas as seções.

Canvas UI já possui componentes como Particle Object que podem trabalhar com imagem/SVG/modelo e Three.js; isso deve ser tratado como recurso pontual, não como padrão de toda a página. citeturn793127search5

## 30. GSAP + SCROLLTRIGGER

GSAP é o principal motor da narrativa.

Usar:
- ScrollTrigger;
- timeline;
- scrub;
- pin;
- snap quando necessário;
- matchMedia;
- refresh.

ScrollTrigger deve controlar a relação entre scroll e movimento, não criar animações aleatórias. A documentação do GSAP descreve pin, scrub, snap, callbacks e suporte a scroll horizontal. 

Sempre registrar:
```js
gsap.registerPlugin(ScrollTrigger);
```

## 31. GSAP CLEANUP

Sempre limpar:
- timelines;
- ScrollTriggers;
- listeners;
- RAF loops;
- observers.

Preferir:
```js
const ctx = gsap.context(() => {
  // animations
}, ref);

return () => ctx.revert();
```

## 32. MOTION TIMING

```css
--motion-fast: 0.25s;
--motion-base: 0.55s;
--motion-slow: 0.9s;
--motion-cinematic: 1.4s;
```

Easing preferido:
```text
cubic-bezier(0.22, 1, 0.36, 1)
```
ou easing equivalente GSAP.

Movimento emocional: mais lento.
Microinteração: mais rápida.

## 33. MOTION QUALITY

Evitar:
- fade + translateY em tudo;
- bounce sem motivo;
- parallax exagerado;
- todas as seções usando a mesma duração;
- todas as transições iguais.

Preferir:
- reveal;
- clip-path;
- mask;
- scale;
- pin;
- scrub;
- horizontal movement;
- image displacement;
- text mask;
- object entrance.

Toda animação precisa responder:
**Por que isso se move?**

## 34. BACKGROUND / MIDGROUND / FOREGROUND

Cada capítulo importante deve pensar em três planos.

Background:
- textura;
- luz;
- elementos gráficos.

Midground:
- tipografia;
- linhas;
- foto secundária.

Foreground:
- foto principal;
- CTA;
- objeto.

## 35. TEXTURE

Fundos não devem ser perfeitamente lisos.

Preferir:
- film grain;
- paper grain;
- micro-noise;
- textura de impressão;
- variação tonal.

Não usar ruído forte.
Não usar o mesmo padrão repetitivo em toda a página.

## 36. REDUCED MOTION

Respeitar:
```css
@media (prefers-reduced-motion: reduce)
```

Reduzir/desligar:
- parallax;
- pixel transitions;
- cursor effects;
- scroll-scrub;
- partículas;
- WebGL;
- sons.

Preservar conteúdo, navegação, imagens e CTA.

## 37. PERFORMANCE

Experiência rica sem custo desnecessário.

Verificar:
- imagens grandes;
- vídeos simultâneos;
- canvas;
- WebGL;
- RAF loops;
- re-renders;
- listeners;
- ScrollTriggers duplicados;
- will-change.

Hero tem prioridade de carregamento.
Abaixo da dobra: lazy loading quando apropriado.

## 38. WEBGL / THREE PERFORMANCE

- limitar DPR;
- limitar partículas;
- limitar geometria;
- destruir renderer;
- cancelar loops;
- reduzir em mobile;
- fallback quando necessário.

Canvas UI também deve degradar com elegância.

## 39. RESPONSIVIDADE

Testar:
360 / 390 / 412 / 768 / 1024 / 1440.

Mobile:
- não depender de hover;
- reduzir WebGL;
- reduzir vídeo;
- simplificar parallax;
- manter legibilidade;
- manter narrativa.

Não apenas empilhar o desktop.

## 40. ACCESSIBILITY

Garantir:
- contraste;
- keyboard;
- visible focus;
- semantic HTML;
- alt significativo;
- aria quando necessário;
- reduced motion;
- mute acessível.

## 41. ANTI-TEMPLATE

Proibido:
- 3 cards iguais;
- hero genérica;
- CTA gigante padrão;
- grid repetitivo;
- ícone + título + parágrafo em série;
- gradientes aleatórios;
- glassmorphism excessivo;
- efeito por efeito.

Preferir:
- foto grande;
- assimetria controlada;
- espaço negativo;
- microtipografia;
- movimento contextual;
- transições;
- narrativa.

## 42. COMPONENT ARCHITECTURE

Se houver estrutura shadcn, preferir:
`components/ui`
para componentes reutilizáveis.

Possível organização:
```text
src/
├── components/
│   ├── Hero/
│   ├── Portfolio/
│   ├── About/
│   ├── Testimonials/
│   ├── StudioMap/
│   ├── CTA/
│   └── Footer/
├── components/ui/
│   ├── DriftWall/
│   ├── ImageStreamHero/
│   ├── MaskedHeading/
│   ├── PixelSwap/
│   ├── AnimatedTestimonials/
│   └── map/
├── hooks/
├── lib/
└── styles/
```

Não reestruturar um projeto existente sem necessidade.

## 43. IMPLEMENTATION ORDER

### Fase 1 — Discovery
- projeto;
- assets;
- dependências;
- tokens.

### Fase 2 — Hero
- foto;
- parallax;
- role morph;
- scroll opening.

### Fase 3 — Portfolio
- curadoria;
- DriftWall/ImageStream;
- hover-to-play.

### Fase 4 — About
- foto da Evelyn;
- MaskedHeading;
- storytelling.

### Fase 5 — Testimonials
- conteúdo real;
- AnimatedTestimonials.

### Fase 6 — Location
- mapa;
- localização.

### Fase 7 — Transition
- PixelSwap em um único ponto.

### Fase 8 — Polish
- CTA;
- microinteractions;
- texture;
- depth.

### Fase 9 — QA
- performance;
- mobile;
- reduced motion;
- build.

## 44. TESTES POR FASE

Depois de cada fase importante:
```bash
npm run build
```

Verificar:
- imports;
- console;
- assets;
- links;
- scroll;
- horizontal scroll;
- mobile;
- reduced motion.

## 45. QUALITY GATE

Antes de declarar pronto:

### Identidade
Parece Evelyn?

### Fotografia
As melhores fotos estão nos melhores lugares?

### Motion
Existe intenção?

### Scroll
Conta história?

### Performance
Está leve?

### Mobile
Funciona sem hover?

### Human test
Parece feito por uma pessoa?

Se não: refinar.

## 46. PRINCÍPIO FINAL

O objetivo não é mostrar React.
Não é mostrar GSAP.
Não é mostrar Three.js.
Não é mostrar React Bits.
Não é mostrar Canvas UI.

O objetivo é criar uma experiência que faça o visitante pensar:

**“Eu quero ser fotografado por ela.”**

A tecnologia deve desaparecer atrás da experiência.

---

# APPENDIX — COMPONENTE IMAGE STREAM HERO

Quando for necessário integrar o `ImageStreamHero` fornecido como código de referência:
- analise as props antes de integrar;
- mantenha a geometria baseada em `cqw`;
- preserve a lógica de cards em perspectiva;
- evite buraco no centro do corredor;
- use `prefers-reduced-motion`;
- troque os assets de demo por assets locais reais;
- mantenha `alt` correto;
- ajuste velocidade/perspective somente depois de testar.

# APPENDIX — COMPONENTE ANIMATED TESTIMONIALS

Se o componente fornecido no prompt for usado:
- instalar somente dependências realmente necessárias;
- substituir dados fictícios por dados reais;
- manter acessibilidade;
- não importar fotos de demo;
- validar responsive.

# APPENDIX — COMPONENTE MASKED HEADING

Se `MaskedHeading` for usado:
- preferir fotos/vídeos reais;
- manter `fillScale`, `parallax`, `duration`, `stagger` dentro de valores leves;
- não usar como decoração em todos os headings.

# APPENDIX — MAP

O mapa representa o estúdio real e deve apontar para:
R. Pôrto Acre, 42 — Coelho Neto — Rio de Janeiro/RJ, 21540-830.

# APPENDIX — REFERÊNCIAS TÉCNICAS

React Bits: biblioteca atual inclui Text Animations, Animations, Components e Backgrounds; use a documentação atual antes de implementar. citeturn793127search10

Canvas UI: biblioteca open-source de componentes HTML-in-canvas para WebGL/WebGPU, com instalação via shadcn e possibilidade de trabalhar diretamente no conteúdo HTML. citeturn793127search4

Canvas UI Component Catalog: Particle Reveal, Particle Scroll, Glass Object, Liquid Object, Peel, Ripple, Shatter e outros. citeturn793127search1

Matthew Encina: referência de portfólio autoral e storytelling, com forte uso de identidade pessoal, trabalho e processo. citeturn793127search3turn793127search0
