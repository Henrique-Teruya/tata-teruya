# 🎨 Design System — Tatá Teruya

## Color Palette

| Token              | Value      | Usage                    |
|--------------------|------------|--------------------------|
| `--primary`        | `#C4956A`  | Buttons, accents, labels |
| `--primary-light`  | `#D4A97A`  | Hero highlights          |
| `--primary-dark`   | `#A67B52`  | Prices, hover states     |
| `--accent`         | `#8B6F5E`  | Secondary accents        |
| `--bg`             | `#FAF7F4`  | Page background          |
| `--bg-card`        | `#FFFFFF`  | Cards, modals            |
| `--bg-footer`      | `#3D2E24`  | Footer                   |
| `--bg-header`      | `rgba(250,247,244,0.92)` | Scrolled header |
| `--text-primary`   | `#2C1E14`  | Headings, primary text   |
| `--text-secondary` | `#6B5B4F`  | Body text                |
| `--text-muted`     | `#9A8B7F`  | Labels, captions         |
| `--border`         | `#E8DDD4`  | Dividers, card borders   |
| `--success`        | `#5A9A6E`  | Confirmation messages    |

## Typography

- **Display**: `Playfair Display` — headings, logo, product names, editorial text
- **Body**: `Inter` — body text, buttons, labels, UI elements

## Spacing

8px system using CSS custom properties:

| Token        | Value  |
|-------------|--------|
| `--space-xs`  | 4px  |
| `--space-sm`  | 8px  |
| `--space-md`  | 16px |
| `--space-lg`  | 24px |
| `--space-xl`  | 32px |
| `--space-2xl` | 48px |
| `--space-3xl` | 64px |

## Border Radius

| Token           | Value |
|----------------|-------|
| `--radius-sm`   | 8px  |
| `--radius-md`   | 12px |
| `--radius-lg`   | 16px |
| `--radius-xl`   | 24px |
| `--radius-full` | 50%  |

## Shadows

| Token          | Usage               |
|---------------|---------------------|
| `--shadow-sm`  | Subtle elevation    |
| `--shadow-md`  | Cards, buttons      |
| `--shadow-lg`  | Modals, hover cards |
| `--shadow-xl`  | Overlays            |

## Easing Functions

| Token           | Value                        | Usage          |
|----------------|------------------------------|----------------|
| `--ease-smooth` | `cubic-bezier(.4,0,.2,1)`   | General motion |
| `--ease-bounce` | `cubic-bezier(.34,1.56,.64,1)` | Playful interactions |

## Base Components

| Class               | Purpose                          |
|---------------------|----------------------------------|
| `.btn`              | Base button (inline-flex, radius, transitions) |
| `.close-btn`        | Circular close button (drawer, modal) |
| `.section-title-group` | Centered section header wrapper |
| `.section-label`    | Uppercase accent label           |
| `.section-title`    | Playfair Display heading         |
| `.view`             | SPA view container with transitions |
| `.breadcrumb`       | Navigation breadcrumb            |

## Responsiveness

| Breakpoint | Target  | Key changes              |
|------------|---------|--------------------------|
| < 600px    | Mobile  | Stacked layouts, 2-col grid |
| ≥ 600px    | Tablet  | Footer grid, lookbook grid |
| ≥ 960px    | Desktop | 3-col products, PDP side-by-side, nav links visible |
| ≥ 1200px   | Wide    | Max-width refinements    |
