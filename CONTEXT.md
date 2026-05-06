# 📋 CONTEXT.md — Tatá Teruya

Registro do projeto frontend da loja de bolsas de crochê artesanais.

---

## 🧶 Sobre o projeto

Loja de e-commerce 100% front-end (sem backend) para venda de **bolsas artesanais de crochê**.

- Pagamento via **Pix** (QR Code + chave copiável)
- Confirmação de pedido via **WhatsApp**
- Sem frameworks (HTML + CSS + Vanilla JS puro)

---

## 📁 Estrutura de arquivos

```
tata-teruya/
├── index.html       # Estrutura completa da página
├── style.css        # Design system + todos os estilos
├── script.js        # Lógica de interação
├── DESIGN.md        # Tokens de design (cores, tipografia, espaçamento)
├── CONTEXT.md       # Este arquivo
└── img/
    ├── bolsa1.jpg   # Foto do produto 1 (Floral Rosé)
    ├── bolsa2.jpg   # Foto do produto 2 (Boho Natural)
    ├── bolsa3.jpg   # Foto do produto 3 (Lavanda)
    ├── bolsa4.jpg   # Foto do produto 4 (Verde Sálvia)
    └── qrcode-pix.png  # QR Code do Pix
```

---

## 🏗️ Histórico de desenvolvimento

### Fase 1 — Estrutura base
**Objetivo:** Criar a versão inicial da loja.

**Entregues:**
- `index.html` com header, seção de produtos (4 cards), modal Pix, footer
- `style.css` com design system completo (CSS variables, 8px spacing system, paleta quente)
- `script.js` com modal dinâmico (nome + preço do produto), cópia da chave Pix, toast de confirmação, WhatsApp via `data-whatsapp`
- Fontes: **Inter** (corpo) + **Playfair Display** (títulos)
- Paleta: tons terrosos/caramelo (`#C4956A`, `#FAF7F4`, `#3D2E24`)
- Botão de WhatsApp flutuante com animação de pulso

**Decisões tomadas:**
- Imagens dos produtos usam `img/bolsa1.jpg` etc. → o usuário possui as fotos reais
- Chave Pix e número do WhatsApp ficam no topo do `script.js` como constantes para fácil customização

---

### Fase 2 — Upgrade premium (editorial style)
**Objetivo:** Transformar a loja em uma experiência visual premium inspirada na Farm Rio.

**Entregues:**
- **Hero full-screen** com vídeo de fundo (CloudFront CDN), overlay escuro, headline em Playfair, botão CTA glassmorphism
- **Seção Lookbook** editorial: grid de 3 imagens clicáveis que rolam para os produtos
- **Sidebar de navegação** fixa (desktop) com links verticais com `writing-mode`
- **Scroll reveal**: cards e seções entram com fade + slide-up via `IntersectionObserver`
- **Header inteligente**: some quando o hero está visível (mobile), aparece ao rolar para baixo
- `scrollToSection(id)` — função reutilizável de scroll suave

---

### Fase 3 — Hamburger menu
**Objetivo:** Substituir o sidebar fixo por um menu hamburger universal (funciona em mobile e desktop).

**Entregues:**
- Sidebar removido completamente
- **Botão hamburger** fixo no canto superior direito (sobre o hero), com backdrop-filter
- Animação do ícone (3 barras → X) ao abrir
- **Nav drawer** desliza da direita com todos os links: Início, Coleção, Produtos, Contato
- Overlay com blur fecha o drawer ao clicar fora
- Botão de WhatsApp no rodapé do drawer
- Hamburger muda para tema escuro automaticamente quando o hero sai da tela
- Tecla `Escape` fecha modal e drawer simultaneamente

---

## 🎨 Design System

| Token | Valor | Uso |
|-------|-------|-----|
| `--primary` | `#C4956A` | Botões, acentos, tags |
| `--primary-dark` | `#A67B52` | Preços, hover |
| `--pix-green` | `#32BCAD` | Botão "Pagar com Pix" |
| `--bg` | `#FAF7F4` | Fundo da página |
| `--bg-footer` | `#3D2E24` | Rodapé escuro |
| `--text-primary` | `#2C1E14` | Títulos |
| `--success` | `#5A9A6E` | Confirmações |

**Tipografia:**
- Títulos / Logo: `Playfair Display` (serifada, elegante)
- Corpo / UI: `Inter` (sem-serifa, leve)

**Espaçamento:** sistema de 8px (`xs=4, sm=8, md=16, lg=24, xl=32, 2xl=48, 3xl=64px`)

---

## ⚙️ Personalização rápida

Edite as constantes no topo de `script.js`:

```js
const PIX_KEY = 'sua-chave-pix@email.com';  // chave Pix
const WHATSAPP_NUMBER = '5511999999999';     // número WhatsApp (só dígitos)
const QR_CODE_IMAGE = 'img/qrcode-pix.png'; // caminho do QR Code
```

Para adicionar/editar produtos, edite os blocos `.product-card` no `index.html`.

---

## 📱 Responsividade

| Breakpoint | Colunas produtos | Comportamento |
|-----------|-----------------|---------------|
| < 600px | 1 | Mobile — header visível, hamburger branco sobre hero |
| ≥ 600px | 2 | Tablet — lookbook 2 colunas |
| ≥ 960px | 3 | Desktop — header some, hamburger escuro após hero |
| ≥ 1200px | 4 | Wide |

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
