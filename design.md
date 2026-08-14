# 🌿 Green Smile - Design System & UI/UX Specification

Documento técnico e guia de design da **Green Smile Clínica Odontológica**.  
Utilize este guia para prototipação no **Figma**, implementação no **Google AI Studio / Stitch** ou desenvolvimento frontend.

---

## 🎨 1. Identidade Visual & Design Tokens

### 1.1 Paleta de Cores Oficial

| Token | Nome Semântico | HEX | HSL | Aplicação Principal |
| :--- | :--- | :--- | :--- | :--- |
| `primary-dark` | Verde Floresta | `#1B4332` | `hsl(154, 42%, 18%)` | Headers com scroll, títulos H1/H2, background do footer e cards escuros |
| `primary-emerald` | Verde Esmeralda | `#2D6A4F` | `hsl(153, 40%, 30%)` | Ícones de destaque, badges de especialidades, acentos botânicos |
| `accent-gold` | Ouro Champagne | `#D4A373` | `hsl(30, 52%, 64%)` | Botões primários de CTA, estrelas de avaliação Google, badges |
| `accent-gold-hover` | Ouro Escuro | `#C49566` | `hsl(30, 45%, 58%)` | Hover states dos botões de ação |
| `accent-yellow` | Ouro Claro | `#E9C46A` | `hsl(43, 74%, 66%)` | Palavras-chave destacadas no Hero |
| `surface-sand` | Marfim / Areia | `#F5F0E8` | `hsl(36, 38%, 94%)` | Fundo de seções alternadas (Serviços, Depoimentos, Formulário) |
| `surface-white` | Branco Puro | `#FFFFFF` | `hsl(0, 0%, 100%)` | Cards elevados, fundo de seções clean, textos sobre fundo escuro |
| `whatsapp-green` | Verde WhatsApp | `#25D366` | `hsl(142, 70%, 49%)` | Botão flutuante do WhatsApp e card de contato rápido |
| `text-dark` | Texto Principal | `#1B4332` | `hsl(154, 42%, 18%)` | Títulos e subtítulos principais |
| `text-muted` | Texto Secundário | `rgba(27,67,50,0.7)`| - | Parágrafos, legendas e descrições |

---

### 1.2 Variáveis CSS (Root Variables)

```css
:root {
  /* Colors */
  --color-primary-dark: #1B4332;
  --color-primary-emerald: #2D6A4F;
  --color-accent-gold: #D4A373;
  --color-accent-gold-hover: #C49566;
  --color-accent-yellow: #E9C46A;
  --color-surface-sand: #F5F0E8;
  --color-surface-white: #FFFFFF;
  --color-whatsapp: #25D366;

  /* Typography */
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Inter', system-ui, -apple-system, sans-serif;

  /* Spacing System (8pt Grid) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;

  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Elevation / Shadows */
  --shadow-subtle: 0 1px 3px rgba(27, 67, 50, 0.05);
  --shadow-card: 0 4px 20px rgba(27, 67, 50, 0.08);
  --shadow-hover: 0 12px 32px rgba(27, 67, 50, 0.15);
  --shadow-floating: 0 8px 24px rgba(37, 211, 102, 0.35);
}
```

---

## 🔤 2. Tipografia & Escala Visual

| Nível | Família | Tamanho Desktop | Tamanho Mobile | Peso | Tracking | Line-Height |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display (H1)** | Playfair Display | `56px (3.5rem)` | `36px (2.25rem)` | Bold (700) | `-0.02em` | `1.15` |
| **Section Title (H2)** | Playfair Display | `40px (2.5rem)` | `28px (1.75rem)` | SemiBold (600) | `-0.01em` | `1.25` |
| **Card Title (H3)** | Inter | `22px (1.375rem)`| `18px (1.125rem)`| SemiBold (600) | `0` | `1.3` |
| **Subtitles / Lead** | Inter | `18px (1.125rem)`| `16px (1rem)` | Regular (400) | `0` | `1.6` |
| **Body (Corpo)** | Inter | `16px (1rem)` | `15px (0.937rem)`| Regular (400) | `0` | `1.6` |
| **Small / Badges** | Inter | `13px (0.812rem)`| `12px (0.75rem)` | Medium (500) | `+0.05em` | `1.4` (Uppercase) |

---

## 📐 3. Grid System & Breakpoints

* **Container Max-Width:** `1280px` (`max-w-7xl`)
* **Colunas Desktop (>= 1024px):** 12 colunas | Gap: `32px` | Padding lateral: `32px`
* **Colunas Tablet (768px - 1023px):** 8 colunas | Gap: `24px` | Padding lateral: `24px`
* **Colunas Mobile (< 768px):** 4 colunas | Gap: `16px` | Padding lateral: `16px`

---

## 🧱 4. Especificações de Componentes & Wireframes

### 4.1 Header (Barra de Navegação Superior)
* **Estrutura:** Logo à esquerda (largura auto, altura 56px a 72px) | Menu central de links | Botão CTA WhatsApp à direita.
* **Comportamento Dinâmico:**
  * Topo: Transparente com texto `#FFFFFF`.
  * Scroll (>20px): Fundo `#FFFFFF` a 95% com desfoque `backdrop-blur(12px)` e sombra sutil.
* **Mobile Drawer:** Menu hambúrguer que abre gaveta lateral direita de `300px` de largura com fundo `#FFFFFF`.

### 4.2 Hero Section (Capa Imersiva com Vídeo)
* **Camada 0 (Fundo):** Vídeo `hero-bg-video.mp4` cobrindo 100% com `object-fit: cover`.
* **Camada 1 (Overlay):** Gradiente escuro linear horizontal `from-[#1B4332]/95 via-[#1B4332]/80 to-black/40`.
* **Camada 2 (Conteúdo):**
  * Pill Badge: *"Agenda do Mês Aberta"* (Ponto pulsante `#D4A373`).
  * Headline: *"Seu novo sorriso começa no Jabaquara."*
  * Selo Google Review: 5 estrelas douradas com nota 4.9/5 e texto *"Mais de 2.000 pacientes atendidos"*.
  * Botão de Agendamento: Dourado com ícone do WhatsApp e efeito scale no hover.

### 4.3 Cards de Tratamentos (Serviços)
* **Card Container:** Fundo `#FFFFFF`, raio de borda `24px` (`rounded-3xl`), padding `24px`.
* **Ícone em Destaque:** Caixa de `56x56px` com fundo gradiente verde/dourado suave (`#2D6A4F`/10) e ícone temático (`Sparkles`, `CircleDot`, `Smile`, `Sun`, `Layers`, `Stethoscope`).
* **Micro-animação:** Ao passar o mouse, o ícone aumenta de escala (`scale-110`) e a sombra do card expande.

### 4.4 Consultórios & Cromoterapia (Estrutura)
* **Consultório Azul:** Foco em relaxamento e cirurgias sem estresse.
* **Consultório Verde:** Foco em equilíbrio, frescor natural e biossegurança.
* **Consultório Laranja:** Foco em estética e energia positiva.
* **Galeria:** Grade responsiva com proporção `aspect-[4/3]` e cantos arredondados de `16px`.

### 4.5 Antes & Depois Interativo
* **Card de Comparação:** Exibe a foto do "Antes" por padrão; ao passar o mouse ou tocar, transita suavemente para o "Depois" com fade de `400ms`.
* **Badges de Estado:** Indicador "Antes" em branco e "Depois" em dourado `#D4A373`.

### 4.6 Quiz do Sorriso (Funil de Diagnóstico)
* **Card Central:** Fundo `#FFFFFF`, largura máxima `640px` com barra de progresso no topo.
* **Opções de Resposta:** Botões táteis com borda suave que ficam preenchidos em verde `#1B4332` ao selecionar.
* **Tela Final:** Diagnóstico customizado com botão direto para envio automático do resultado ao WhatsApp da clínica.

### 4.7 Botão Flutuante do WhatsApp
* **Posição:** `fixed bottom-6 right-6 z-50`.
* **Dimensão:** `64x64px`, raio total (`rounded-full`), fundo `#25D366`, sombra `0 8px 24px rgba(37,211,102,0.4)`.
* **Animação:** Pulso de anel contínuo chamando atenção sem ser invasivo.

---

## 📂 5. Estrutura de Arquivos no Projeto

```text
src/
├── assets/
│   ├── hero-bg-video.mp4            # Vídeo de capa do Hero
│   ├── hero-big-logo-clean.png      # Logotipo com transparência
│   ├── clinic-reception.jpg         # Recepção da clínica
│   ├── clinic-waiting.jpg           # Sala de espera
│   ├── room-blue.jpg                # Consultório Cromoterápico Azul
│   ├── room-green.jpg               # Consultório Cromoterápico Verde
│   ├── room-orange.jpg              # Consultório Cromoterápico Laranja
│   └── gallery/                     # Fotos da galeria (clinic-1 a clinic-6)
├── components/
│   ├── layout/
│   │   ├── Header.jsx               # Header com logo e menu dinâmico
│   │   └── Footer.jsx               # Rodapé com dados de contato
│   ├── home/
│   │   ├── HeroSection.jsx          # Seção Hero com vídeo e contraste
│   │   ├── AboutSection.jsx         # Seção Sobre e fotos
│   │   ├── ServicesSection.jsx      # Cards dos 6 tratamentos
│   │   ├── StructureSection.jsx     # Galeria dos consultórios
│   │   ├── BeforeAfterSection.jsx   # Comparador Antes e Depois
│   │   ├── TestimonialsSection.jsx  # Depoimentos do Google 5 estrelas
│   │   ├── QuizCTA.jsx              # Chamada para o Quiz
│   │   ├── FAQSection.jsx           # Dúvidas Frequentes (Accordion)
│   │   └── LocationSection.jsx      # Mapa e endereço no Jabaquara
│   ├── forms/
│   │   └── LeadForm.jsx             # Formulário de Agendamento
│   └── ui/
│       └── WhatsAppButton.jsx       # Botão Flutuante do WhatsApp
└── api/
    └── apiClient.js                 # Dados estáticos integrados (Zero delay)
```
