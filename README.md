# 🧶 Tatá Teruya Atelier — Bolsas de Crochê Artesanais

Portfólio editorial e boutique digital para a marca Tatá Teruya. Peças artesanais exclusivas, produzidas sob demanda e sob consulta.

---

## 📌 Sobre o projeto

Loja online leve e elegante com foco em exclusividade. Sem backend, sem frameworks — apenas HTML, CSS e JavaScript puro.

- **Landing page** editorial com vídeo hero, lookbook carousel e bloco de mídia
- **Atelier SPA** com catálogo de produtos, página de detalhe e portal de consulta via WhatsApp
- **Responsivo** e otimizado para mobile

---

## 🚀 Tecnologias

- HTML5
- CSS3 (design system com CSS variables)
- JavaScript (Vanilla — zero dependências)
- @hiseb/confetti (celebração de contato)

---

## 📂 Estrutura

```
tata-teruya/
├── index.html       # Landing page editorial
├── produtos.html    # Atelier SPA (catálogo → produto → consulta)
├── style.css        # Design system + todos os estilos
├── script.js        # Lógica base (drawer, WhatsApp geral, carousel)
├── shop.js          # Controlador SPA (routing, galeria, consulta dinâmica)
├── data/
│   └── images/      # Fotos dos produtos (Ativos Premium)
├── DESIGN.md        # Tokens de design
└── CONTEXT.md       # Histórico e contexto do projeto
```

---

## 🛒 Fluxo de Consulta

1. Usuário navega pela **Coleção Artesanal**
2. Clica em um peça → abre a **página de detalhe** com galeria de fotos, nota de atelier e medidas
3. Clica em **"Solicitar disponibilidade"** → abre o portal de consulta
4. Clica em **"Falar com o atelier"** → dispara mensagem dinâmica para o **WhatsApp** com o nome da peça
5. O atelier atende de forma personalizada para fechar a encomenda

---

## ⚙️ Personalização

Edite a constante no topo de `script.js` e `shop.js`:

```js
const WHATSAPP_NUMBER = '5511998387082';
```

Para adicionar/editar peças, edite o array `PRODUCTS` em `shop.js` com nome, preço, descrição, medidas e imagens.

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
