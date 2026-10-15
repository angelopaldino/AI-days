---
name: ValidAI Telemetry Interface
colors:
  surface: '#131318'
  surface-dim: '#131318'
  surface-bright: '#39383e'
  surface-container-lowest: '#0e0e13'
  surface-container-low: '#1b1b20'
  surface-container: '#1f1f24'
  surface-container-high: '#2a292f'
  surface-container-highest: '#35343a'
  on-surface: '#e4e1e9'
  on-surface-variant: '#c9c4d8'
  inverse-surface: '#e4e1e9'
  inverse-on-surface: '#303036'
  outline: '#938ea1'
  outline-variant: '#484555'
  surface-tint: '#cabeff'
  primary: '#cabeff'
  on-primary: '#31009a'
  primary-container: '#947dff'
  on-primary-container: '#2a0088'
  inverse-primary: '#603ce2'
  secondary: '#5de6ff'
  on-secondary: '#00363e'
  secondary-container: '#00cbe6'
  on-secondary-container: '#00515d'
  tertiary: '#4ae176'
  on-tertiary: '#003915'
  tertiary-container: '#00a74b'
  on-tertiary-container: '#003111'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e6deff'
  primary-fixed-dim: '#cabeff'
  on-primary-fixed: '#1c0062'
  on-primary-fixed-variant: '#4816cb'
  secondary-fixed: '#a2eeff'
  secondary-fixed-dim: '#2fd9f4'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e5a'
  tertiary-fixed: '#6bff8f'
  tertiary-fixed-dim: '#4ae176'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005321'
  background: '#131318'
  on-background: '#e4e1e9'
  surface-variant: '#35343a'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: -0.005em
  metric-huge:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 68px
    letterSpacing: -0.04em
  metric-huge-mobile:
    fontFamily: Space Grotesk
    fontSize: 44px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  metric-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-mono:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies an ultra-precise, futuristic telemetry terminal tailored for AI-driven business idea validation and strategic marketing analysis. The interface serves founders, venture analysts, and growth operators who demand rigorous data density, decisive real-time AI scoring, and zero visual clutter.

### Aesthetic Paradigm: Hyper-Clean Technical Minimalist
- **Zero Decorative Fluff:** No stock photography, 3D clay illustrations, or arbitrary ornamental graphics. Visual authority is communicated exclusively through raw typographic balance, dynamic telemetry indicators, micro-metrics, and pristine hairline borders.
- **Atmospheric Glow & Optical Contrast:** Crisp, luminous foreground data floats over deep obsidian backdrops. High-energy electric violet and cyan accents guide user focus toward validation scores, synthetic confidence intervals, and decisive viability thresholds.
- **Linguistic Context:** All user interface copy, status feedback, and analytical microcopy are strictly authored in contemporary, analytical Italian (e.g., *Validazione Eseguita*, *Indice di Rischio*, *Punteggio di Mercato*, *Saturazione Segmento*).

## Colors

The palette establishes an ultra-dark canvas calibrated for high-contrast clarity, prolonged analytical sessions, and precise visual hierarchy.

### Core Architecture
- **Canvas Base (`#0B0B10`):** Pure deep obsidian backdrop providing absolute contrast and minimal eye fatigue.
- **Surface Elevation (`#15151D`):** Subtle charcoal container color providing structured separation without creating jarring contrast steps.
- **Surface Hover / Highlight (`#1C1C26`):** Elevated interactive state for cards, dropdown menus, and nested metric modules.
- **Hairline Structural Borders (`rgba(255, 255, 255, 0.08)` / `#272732`):** Subtle micro-dividers maintaining crisp technical separation.

### Synthetic Accents & Gradients
- **Primary Electric Violet (`#7C5CFF`):** Powers key action items, generative AI triggers, and high-confidence metrics.
- **Secondary Cyan Glow (`#22D3EE`):** Paired with the primary violet in a 135° linear gradient (`linear-gradient(135deg, #7C5CFF 0%, #22D3EE 100%)`) for progress vectors, synthetic intelligence highlights, and interactive sparklines.
- **Ambient Accent Halo:** Box-shadow and background radial glows strictly use opacity ramps between `0.12` and `0.20` to prevent visual bleeding.

### Semantic Telemetry
- **Success / Viable (`#22C55E`):** Verified viability, positive PMF signals, emerald ambient glow.
- **Warning / Divergent (`#F59E0B`):** Incomplete sample size, market saturation alerts, medium risk.
- **Critical / Inviable (`#EF4444`):** Market barrier, negative unit economics, fatal friction points.

### Typography & Data Color Roles
- **Primary Crisp White (`#FFFFFF`):** High-priority values, telemetry numerals, active states.
- **Secondary Slate (`#9CA3AF`):** Labels, subtext, contextual metadata, input placeholders.
- **Tertiary Muted Charcoal (`#6B7280`):** Micro-timestamps, inactive toggle states, auxiliary telemetry keys.

## Typography

The typographic hierarchy implements a high-tech dual-engine system:

1. **Space Grotesk (Telemetry & Display):** Engineered for impact, numeric telemetry, viability scores, and crisp structural titles. Its geometric character cuts through dark backgrounds, giving numerical outputs the precision of an aerospace flight deck.
2. **Inter (Operational Interface & Analytical Body):** Applied to user flows, technical explanations, comparative benchmarks, and data inputs. Provides maximum legibility at compact sizes with neutral glyph shaping.

### Formatting Rules
- **Monospace-like Precision:** Use `font-variant-numeric: tabular-nums` for all telemetry readouts, scores, and currency metrics to avoid layout jitter during real-time streaming validation.
- **Telemetry Labels (`label-mono`):** Rendered in uppercase with `0.06em` letter spacing for section subheads, validation badges, and sensor status tags (e.g., `CONFIDENZA MODELLO`, `TAM STIMATO`).

## Layout & Spacing

The layout model utilizes a rigorous 12-column fluid grid system bounded by a maximum display width of 1440px to ensure dense, scan-friendly visual analytics without horizontal ocular drift.

### Breakpoint Matrix
- **Mobile (< 768px):** 4 columns, `margin-mobile` (16px), `gutter-mobile` (16px). Metrics collapse from multi-column rows into modular vertical card stacks.
- **Tablet (768px - 1023px):** 8 columns, `margin` (32px), `gutter` (24px). Analytical sidebars fold into high-density slide-over panels.
- **Desktop (≥ 1024px):** 12 columns, `margin` (32px), `gutter` (24px). Dual-zone terminal architecture featuring a real-time prompt and parameter workspace on the left, flanked by a telemetry scoring engine on the right.

### Vertical Rhythms & Gaps
Layout components conform strictly to an 8px base rhythm. Micro-padding (`space-xs`, `space-sm`) is reserved for badge tags, button interiors, and telemetry chips. Component groupings use `space-md` (16px) or `space-lg` (24px), while major analytical zones anchor to `space-xl` (40px).

## Elevation & Depth

Visual hierarchy is maintained without standard drop shadows or muddy diffusion. The interface uses tonal surface layering combined with low-contrast structural boundaries and focused optical glows.

### Elevation Levels
- **Layer 0 (Canvas Base):** Solid `#0B0B10`. Hosts global structural boundaries and sub-surface navigational anchors.
- **Layer 1 (Card & Module Canvas):** `#15151D` with a persistent hairline edge (`1px solid rgba(255, 255, 255, 0.08)`). No ambient shadow in default resting state.
- **Layer 2 (Elevated Panels & Focus Surfaces):** `#1C1C26` with hairline border (`1px solid rgba(255, 255, 255, 0.16)`). Paired with an ultra-soft directional rim highlight: `box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.7)`.
- **Layer 3 (Modals, Context Overlays & Drawers):** `#181822` wrapped with `1px solid rgba(124, 92, 255, 0.3)` and an ambient deep diffusion: `box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.9)`.

### High-Tech Glow Dynamics
- **Electric Accent Glow:** Key interaction targets and high-score meters emit localized chromatic glows: `0 0 24px rgba(124, 92, 255, 0.25)`.
- **Viability Signal Glow:** Passing metrics (`#22C55E`) project a focused highlight: `0 0 16px rgba(34, 197, 94, 0.2)`.

## Shapes

The design uses a 16px (`rounded-2xl` / `rounded-lg: 1rem`) radius as its core surface building block, balancing futuristic softness with industrial structure.

### Geometry Specifications
- **Cards & Data Modules:** Standardized to `16px` border-radius (`1rem`). Maintains unified continuity across telemetry grids.
- **Form Fields & Buttons:** Standardized to `10px` border-radius for tactile control surfaces.
- **Pills & Status Indicators:** Fully rounded (`9999px`) for telemetry chips, confidence indicators, and status tags.
- **Segmented Controls:** Enclosing pill chassis (`9999px`) housing interactive inner pills (`9999px`) with 3px interior clearance.

## Components

### 1. Buttons & Triggers
- **Primary Action (Generative Validation):** Background applied as a 135° gradient from `#7C5CFF` to `#22D3EE`. Solid `#FFFFFF` text in `Inter SemiBold`, 14px. Box shadow: `0 0 16px rgba(124, 92, 255, 0.35)`. Hover enhances glow to `0 0 24px rgba(34, 211, 238, 0.45)`. Label: *Avvia Analisi AI*.
- **Secondary / Ghost Action:** `#15151D` fill with `1px solid rgba(255, 255, 255, 0.12)`. Slate text (`#9CA3AF`) transitioning to pure white (`#FFFFFF`) on hover with border tinting to `#7C5CFF`.
- **Destructive Trigger:** Background `rgba(239, 68, 68, 0.1)` with `1px solid rgba(239, 68, 68, 0.3)`, text `#EF4444`. Label: *Elimina Ipotesi*.

### 2. Validation Cards & Data Containers
- Built on `#15151D` background with `16px` border radius and `1px solid rgba(255, 255, 255, 0.08)`.
- **Header Section:** Houses metric category title (`label-mono`, `#9CA3AF`) and a status pill indicator.
- **Body Section:** Dedicated Space Grotesk numerical readouts (e.g., `87/100`) accompanied by tabular comparative benchmarks.
- **Footer Section:** Border-top `1px solid #272732`, padding 12px 16px, housing Italian analytical insights in `body-sm`.

### 3. Status Badges & Telemetry Chips
- Compact height (24px), fully rounded geometry (`9999px`), inline flex items with 6px gap.
- **Success Badge:** `rgba(34, 197, 94, 0.1)` background, `1px solid rgba(34, 197, 94, 0.3)`, text `#22C55E`. Icon: 6px solid emerald dot with subtle breathing pulse. Label: *Elevata Fattibilità*.
- **Neutral Telemetry Tag:** `rgba(255, 255, 255, 0.05)` background, `1px solid rgba(255, 255, 255, 0.1)`, text `#9CA3AF`. Label: *B2B SaaS*.

### 4. Input Fields & Prompt Editors
- Background `#0B0B10` inset into cards, or `#15151D` on top-level pages. Border: `1px solid #272732`. Radius: `10px`.
- **Typography:** `Inter` 14px, text `#FFFFFF`, placeholder `#4B5563`.
- **Focus State:** Border transitions to `#7C5CFF` accompanied by an external ring: `box-shadow: 0 0 0 3px rgba(124, 92, 255, 0.2)`.
- Labeling: `label-md` uppercase in `#9CA3AF`, positioned strictly above input with 8px margin.

### 5. Selection Controls (Checkboxes & Radio Selectors)
- **Checkbox:** 18x18px square with 4px border radius. Border `1px solid #374151`, background `#0B0B10`. Active state fills with `#7C5CFF`, inset checkmark in pure white `#FFFFFF`.
- **Radio Selector:** 18x18px circle. Active state displays 6px center pip in `#22D3EE` with a `#7C5CFF` outer stroke.

### 6. Specialized Telemetry Components
- **Market Viability Gauge:** Circular or horizontal linear meter displaying idea viability. Uses dual gradient stroke (`#7C5CFF` to `#22D3EE`) across a track of `#272732`.
- **Synthetic Confidence Matrix:** Segmented progress bar where individual blocks illuminate progressively from electric violet to emerald based on calculated validation metrics.

