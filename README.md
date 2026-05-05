# 🧶 Loja de Bolsas de Crochê

Site simples de e-commerce **100% front-end** para venda de bolsas artesanais, com pagamento via **Pix (QR Code)**.

---

## 📌 Sobre o projeto

Este projeto foi desenvolvido com o objetivo de criar uma loja online simples, leve e funcional, sem necessidade de backend.

A venda é feita diretamente via **Pix**, e a confirmação do pagamento ocorre manualmente via WhatsApp.

---

## 🚀 Tecnologias utilizadas

- HTML5  
- CSS3  
- JavaScript (Vanilla)

---

## 🛒 Funcionalidades

- Exibição de produtos (bolsas de crochê)
- Modal com informações de pagamento
- Pagamento via QR Code Pix
- Exibição da chave Pix
- Interface simples e responsiva

---

## 💳 Como funciona o pagamento

1. O usuário escolhe um produto  
2. Clica em **"Pagar com Pix"**  
3. Um QR Code é exibido na tela  
4. O pagamento é realizado via app do banco  
5. O cliente envia o comprovante via WhatsApp  

---

## 📂 Estrutura do projeto

```

/site
├── index.html
├── style.css
├── script.js
└── /img
├── bolsa1.jpg
└── qrcode-pix.png

````

---

## ⚙️ Como rodar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repo.git
````

2. Acesse a pasta:

```bash
cd seu-repo
```

3. Abra o arquivo:

```bash
index.html
```

---

## ✏️ Personalização

Para adaptar o projeto:

* Troque as imagens em `/img`
* Edite os produtos no `index.html`
* Atualize:

  * Nome dos produtos
  * Preços
  * Chave Pix
  * QR Code (`qrcode-pix.png`)

---

## ⚠️ Observações importantes

* Este projeto **não possui backend**
* Não há:

  * Controle de estoque
  * Registro automático de pedidos
* Toda a comunicação com o cliente deve ser feita externamente (ex: WhatsApp)

---

## 💡 Melhorias futuras

* Integração com WhatsApp automático
* Carrinho de compras com `localStorage`
* QR Code dinâmico por valor
* Integração com API de pagamento
* Painel administrativo

---

## 🌐 Deploy

Você pode hospedar gratuitamente em:

* GitHub Pages
* Netlify
* Vercel

---

## 📞 Contato

Após o pagamento, o cliente deve enviar o comprovante para o WhatsApp do vendedor.

---

## 📄 Licença

Este projeto é de uso livre para fins de estudo e projetos pessoais.

```
```
