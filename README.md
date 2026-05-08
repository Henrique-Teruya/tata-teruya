# 🧶 Tatá Teruya — Bolsas de Crochê Artesanais

Site de e-commerce **100% front-end** para venda de bolsas artesanais de crochê, com pagamento via **Pix** e experiência editorial premium.

---

## 📌 Sobre o projeto

Loja online leve e elegante para a marca Tatá Teruya. Sem backend, sem frameworks — apenas HTML, CSS e JavaScript puro.

- **Landing page** editorial com vídeo hero, lookbook carousel e bloco de mídia
- **Shop SPA** com grid de produtos, página de detalhe e fluxo de pagamento Pix
- **Responsivo** e otimizado para mobile

---

## 🚀 Tecnologias

- HTML5
- CSS3 (design system com CSS variables)
- JavaScript (Vanilla — zero dependências)

---

## 📂 Estrutura

```
tata-teruya/
├── index.html       # Landing page editorial
├── produtos.html    # Shop SPA (grid → produto → pagamento)
├── style.css        # Design system + todos os estilos
├── script.js        # Lógica base (drawer, WhatsApp, carousel)
├── shop.js          # Controlador SPA (routing, galeria, pagamento)
├── data/
│   ├── images/      # Fotos dos produtos
│   └── videos/      # Vídeo editorial
├── DESIGN.md        # Tokens de design
└── CONTEXT.md       # Histórico e contexto do projeto
```

---

## 🛒 Fluxo de compra

1. Usuário navega pelos produtos no **Shop**
2. Clica em um produto → abre a **página de detalhe** com galeria de fotos, descrição e medidas
3. Clica em **"Comprar"** → abre a **página de pagamento** com QR Code Pix
4. Copia a chave Pix ou escaneia o QR Code
5. Clica em **"Já paguei"** → confirmação visual
6. Envia comprovante via **WhatsApp**

---

## ⚙️ Personalização

Edite as constantes no topo de `script.js` e `shop.js`:

```js
const PIX_KEY = 'sua-chave-pix@email.com';
const WHATSAPP_NUMBER = '5511998387082';
```

Para adicionar/editar produtos, edite o array `PRODUCTS` em `shop.js` com nome, preço, descrição, medidas e imagens.

---

## 📱 Responsividade

| Breakpoint | Produtos | Layout |
|-----------|----------|--------|
| < 600px | 2 colunas | Mobile, galeria empilhada |
| ≥ 600px | 2 colunas | Tablet, galeria quadrada |
| ≥ 960px | 3 colunas | Desktop, PDP lado a lado com galeria sticky |

---

## 🌐 Deploy

Hospede gratuitamente em:
- GitHub Pages
- Netlify
- Vercel

---

## 📄 Licença

Este projeto é de uso livre para fins de estudo e projetos pessoais.
