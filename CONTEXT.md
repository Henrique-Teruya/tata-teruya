# 📋 CONTEXT.md — Tatá Teruya

Registro do projeto frontend da loja de bolsas de crochê artesanais.

---

## 🧶 Sobre o projeto

Loja de e-commerce 100% front-end (sem backend) para venda de **bolsas artesanais de crochê**.

- Pagamento via **Pix** (QR Code + chave copiável)
- Confirmação de pedido via **WhatsApp**
- Sem frameworks (HTML + CSS + Vanilla JS puro)
- Experiência SPA-like na página de produtos

---

## 📁 Estrutura de arquivos

```
tata-teruya/
├── index.html       # Landing page editorial (hero + lookbook + carousel)
├── produtos.html    # Shop SPA (grid → produto → pagamento)
├── style.css        # Design system + todos os estilos
├── script.js        # Lógica base (drawer, WhatsApp, carousel, scroll reveal)
├── shop.js          # Controlador SPA da loja (routing, galeria, pagamento)
├── DESIGN.md        # Tokens de design
├── CONTEXT.md       # Este arquivo
└── data/
    ├── images/      # Fotos dos produtos (principal, aberta, alça, embaixo)
    └── videos/      # Vídeo editorial da landing page
```

---

## 🏗️ Histórico de desenvolvimento

### Fase 1 — Estrutura base
**Objetivo:** Criar a versão inicial da loja.

**Entregues:**
- `index.html` com header, seção de produtos (4 cards), modal Pix, footer
- `style.css` com design system completo (CSS variables, 8px spacing system, paleta quente)
- `script.js` com modal dinâmico, cópia da chave Pix, toast, WhatsApp via `data-whatsapp`
- Fontes: **Inter** (corpo) + **Playfair Display** (títulos)
- Paleta: tons terrosos/caramelo (`#C4956A`, `#FAF7F4`, `#3D2E24`)

---

### Fase 2 — Upgrade premium (editorial style)
**Objetivo:** Transformar a loja em uma experiência visual premium inspirada na Farm Rio.

**Entregues:**
- **Hero full-screen** com vídeo de fundo, overlay escuro, headline em Playfair, botão CTA glassmorphism
- **Seção Lookbook** editorial: carousel de imagens + bloco raw-media (vídeo + textura)
- **Scroll reveal**: cards e seções entram com fade + slide-up via `IntersectionObserver`

---

### Fase 3 — Header dinâmico + Drawer
**Objetivo:** Substituir o sidebar fixo por um header dinâmico com menu hamburger.

**Entregues:**
- **Site Header** fixo com logo (aparece ao rolar) e hamburger
- **Nav Drawer** lateral com links, animação de entrada, e WhatsApp CTA
- Overlay com blur fecha o drawer ao clicar fora
- Tecla `Escape` fecha modal e drawer simultaneamente

---

### Fase 4 — Otimização e refatoração
**Objetivo:** Limpar código redundante e criar componentes reutilizáveis.

**Entregues:**
- Classe base `.btn` para todos os botões (CTA, Pix, Secondary)
- Classe base `.close-btn` para botões de fechar (drawer, modal)
- Componentes `.section-title-group`, `.section-label`, `.section-title` unificados
- Remoção de CSS não utilizado e comentários obsoletos
- Correção de scrollbar "fantasma" no lado direito

---

### Fase 5 — SPA E-Commerce
**Objetivo:** Transformar `produtos.html` em uma experiência SPA profissional.

**Entregues:**
- **View Router** com `history.pushState` e suporte ao botão voltar
- **Shop View:** Grid de produtos renderizado via JS, breadcrumb, contador de produtos
- **Product Detail View:** Galeria de imagens com thumbnails (click + touch swipe), informações do produto, medidas, descrição, botão comprar
- **Payment View:** Fluxo Pix completo com QR Code, chave copiável, instrução WhatsApp, botão "Já paguei" com estado de sucesso animado
- Transições suaves entre views (fade + slide)
- Scroll position restaurado ao navegar entre views
- Dados de produtos centralizados em `shop.js`

---

## 🎨 Design System

| Token | Valor | Uso |
|-------|-------|-----|
| `--primary` | `#C4956A` | Botões, acentos, tags |
| `--primary-dark` | `#A67B52` | Preços, hover |
| `--bg` | `#FAF7F4` | Fundo da página |
| `--bg-footer` | `#3D2E24` | Rodapé escuro |
| `--text-primary` | `#2C1E14` | Títulos |
| `--success` | `#5A9A6E` | Confirmações |

**Tipografia:**
- Títulos / Logo: `Playfair Display` (serifada, elegante)
- Corpo / UI: `Inter` (sem-serifa, leve)

**Espaçamento:** sistema de 8px (`xs=4, sm=8, md=16, lg=24, xl=32, 2xl=48, 3xl=64px`)

**Componentes Base:**
- `.btn` — Botão reutilizável (inline-flex, border-radius, transitions)
- `.close-btn` — Botão circular de fechar (drawer, modal)
- `.section-title-group` + `.section-label` + `.section-title` — Headers de seção
- `.view` — Container de view SPA com animação de entrada/saída

---

## ⚙️ Personalização rápida

Edite as constantes no topo de `script.js` e `shop.js`:

```js
const PIX_KEY = 'sua-chave-pix@email.com';
const WHATSAPP_NUMBER = '5511998387082';
```

Para adicionar/editar produtos, edite o array `PRODUCTS` no topo de `shop.js`.

---

## 📱 Responsividade

| Breakpoint | Colunas produtos | Comportamento |
|-----------|-----------------|---------------|
| < 600px | 2 | Mobile — header fixo, hamburger, galeria empilhada |
| ≥ 600px | 2 | Tablet — lookbook 2 colunas, galeria 1:1 |
| ≥ 960px | 3 | Desktop — PDP lado a lado, galeria sticky |
| ≥ 1200px | 3 | Wide |

---

## 🚀 Deploy sugerido

- GitHub Pages
- Netlify (drag & drop da pasta)
- Vercel

---

## 💡 Melhorias futuras planejadas

- [ ] QR Code dinâmico por valor (API Pix)
- [ ] Carrinho com `localStorage`
- [ ] Integração automática com WhatsApp (mensagem pré-formatada com produto)
- [ ] Filtro por cor/estilo
- [ ] Painel admin simples
