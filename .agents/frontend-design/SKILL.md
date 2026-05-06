Beleza — vou te mandar uma versão em inglês, estilo “original/clean”, como se fosse um skill/documento padrão 👇

````md
# 🎨 Frontend Design Skill

A practical guide for building clean, modern, and user-friendly front-end interfaces.

---

## 📌 Core Principles

### Visual Hierarchy
- Large titles grab attention
- Subtitles organize content
- Body text should be simple and readable

### Spacing
- Use `padding` and `margin` consistently
- Follow an 8px spacing system:
  - 8px, 16px, 24px, 32px...

### Consistency
- Use the same font across the project
- Keep colors consistent
- Standardize button styles

---

## 🎨 Colors

Use a minimal color palette:
- 1 primary color
- 1 secondary color
- Neutral colors (white, gray, black)

```css
:root {
  --primary: #8B5CF6;
  --secondary: #F59E0B;
  --bg: #F9FAFB;
  --text: #111827;
}
````

---

## 🔤 Typography

```css
body {
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 2rem;
}

p {
  color: #555;
}
```

---

## 📦 Layout (Grid System)

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

---

## 🛍️ Product Card

```css
.product {
  background: white;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: 0.2s;
}

.product:hover {
  transform: scale(1.03);
}
```

---

## 🔘 Buttons

```css
button {
  background: #8B5CF6;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}
```

---

## 📱 Responsiveness

```css
@media (max-width: 600px) {
  h1 {
    font-size: 1.5rem;
  }
}
```

---

## ✨ UX Best Practices

* Always show prices clearly
* Use clear call-to-action buttons
* Keep the interface simple
* Avoid unnecessary complexity

---

## 💳 Pix Payment UX (Brazil-specific)

* Clearly display:

  * "Pay with Pix"
  * "Send payment confirmation via WhatsApp"
* Show QR Code prominently
* Provide Pix key
* Keep instructions simple

---

## 🔥 Recommended Page Structure

```html
<header>
  Store Name
</header>

<main>
  <section class="products">
    <!-- product cards -->
  </section>
</main>

<footer>
  Contact / WhatsApp
</footer>
```

---

## 🚀 Final Tips

* Simplicity beats complexity
* Take inspiration from real marketplaces (Shopee, Mercado Livre)
* Clean design converts better
* Focus on user experience first

---

## 📈 Future Improvements

* Shopping cart (localStorage)
* WhatsApp integration
* Dynamic Pix QR codes
* Smooth animations
* Product filters

````md id="r8w1kz"
# 📱 Responsiveness & Fluid Units (Frontend Design)

Building responsive layouts means your interface adapts smoothly to different screen sizes — from mobile phones to large desktops.

---

## 📌 What is Responsiveness?

Responsiveness ensures that your layout:
- Adjusts to screen size
- Maintains usability on mobile devices
- Avoids horizontal scrolling
- Keeps elements readable and accessible

---

## 📏 Responsive Units

Instead of fixed units like `px`, use flexible units:

### 🔹 Percentage (`%`)
- Relative to the parent element
```css
.container {
  width: 100%;
}
````

---

### 🔹 Viewport Width (`vw`)

* Based on the width of the screen
* `100vw` = 100% of the screen width

```css
.banner {
  width: 100vw;
}
```

---

### 🔹 Viewport Height (`vh`)

* Based on the height of the screen
* `100vh` = 100% of the screen height

```css
.section {
  height: 100vh;
}
```

---

### 🔹 `rem` (Recommended)

* Relative to the root font size (`html`)
* Great for scalable typography and spacing

```css
html {
  font-size: 16px;
}

h1 {
  font-size: 2rem; /* 32px */
}
```

---

### 🔹 `em`

* Relative to the parent element
* Can stack (be careful)

```css
.card {
  font-size: 1.2em;
}
```

---

## ⚖️ px vs Responsive Units

| Unit  | Use Case               |
| ----- | ---------------------- |
| px    | Borders, small details |
| %     | Layout widths          |
| vw/vh | Full screen sections   |
| rem   | Fonts and spacing      |

👉 Avoid building entire layouts only with `px`

---

## 📦 Responsive Layout Example

```css
.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
```

---

## 📱 Media Queries

Used to adjust layout for smaller screens:

```css
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

---

## 🔥 Mobile-First Approach

Start designing for mobile first:

```css
/* Mobile (default) */
.container {
  padding: 10px;
}

/* Tablet/Desktop */
@media (min-width: 768px) {
  .container {
    padding: 20px;
  }
}
```

---

## ⚠️ Common Mistakes

* Using only `px` everywhere ❌
* Fixed widths like `width: 1200px` ❌
* Ignoring small screens ❌
* Elements overflowing the screen ❌

---

## ✅ Best Practices

* Use `max-width` instead of fixed width
* Combine `rem` + `%` + `vw`
* Test on different screen sizes
* Keep touch targets large (mobile)

---

## 💡 Example (Good Practice)

```css
body {
  font-size: 1rem;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

h1 {
  font-size: 2.5rem;
}

.button {
  padding: 0.8rem 1.2rem;
}
```

---

## 🚀 Final Tip

A good responsive design:

* Feels natural on any device
* Requires minimal zoom or scrolling
* Keeps the experience consistent

👉 Think: "Would this be easy to use on my phone?"

```
```

```
```

