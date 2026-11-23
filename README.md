# 📱 MB ACCESSORIES - Official Website Project
> **Premium Mobile Gear & Tech Essentials**  
> Complete Client-Ready Front-End Web Solution

---

## 🌟 Project Overview

**MB ACCESSORIES** is a high-performance, modern front-end website created specifically for mobile accessories retail and wholesale shops. 

Built with **HTML5, Tailwind CSS, modern vanilla JavaScript, and Font Awesome 6**, this website requires **zero server-side installation or build steps**—meaning it works immediately when opening `index.html` in any web browser and can be hosted for free or on any shared hosting / cPanel / Netlify / Vercel with zero configuration!

---

## 🚀 Key Features

1. **Client-Ready & Ultra Professional Design**:
   - High-tech aesthetic inspired by Apple, Anker, and Spigen.
   - Clean slate background, electric cyan & blue highlights, glowing badges, and micro-interactions.
   - 100% responsive across mobile smartphones, tablets, and desktop displays.

2. **No Payment Gateway Needed – Direct WhatsApp Ordering**:
   - In accordance with your requirements, there are no complicated payment gateways or checkout bugs.
   - **Single Product Order**: Clicking *"Order on WhatsApp"* on any item opens a pre-formatted WhatsApp chat with the Product Name, Product Code, and Price.
   - **Inquiry & Order Bag**: Customers can add multiple accessories to their bag and click *"Send Order via WhatsApp"* to submit their complete list in one tap!

3. **Complete Pages Included**:
   - 🏠 [index.html](file:///c:/Users/nimra/OneDrive/Desktop/mb_accessories/index.html): Hero section, trust badges, trending categories, featured products with category switcher, wholesale callout, customer reviews, and floating WhatsApp widget.
   - 📦 [products.html](file:///c:/Users/nimra/OneDrive/Desktop/mb_accessories/products.html): Full interactive catalog with **Live Real-time Search**, category filtering, price/rating sorting, and dynamic product rendering.
   - 🗂️ [categories.html](file:///c:/Users/nimra/OneDrive/Desktop/mb_accessories/categories.html): Comprehensive showcase of all product categories with item counts and highlights.
   - 🏢 [about.html](file:///c:/Users/nimra/OneDrive/Desktop/mb_accessories/about.html): Store story, quality standards, 4 core pillars, and quality inspection breakdown.
   - 📞 [contact.html](file:///c:/Users/nimra/OneDrive/Desktop/mb_accessories/contact.html): Store location (Main Hall Road Lahore), phone numbers, direct WhatsApp buttons, interactive contact form, and embedded map.
   - ❓ [faq.html](file:///c:/Users/nimra/OneDrive/Desktop/mb_accessories/faq.html): Frequently asked questions, 7-day replacement warranty policy, and device compatibility guidance.

4. **Quick View Modal**:
   - Clicking any product opens an interactive modal showing high-resolution imagery, full bulleted technical specifications, device compatibility (iPhone, Samsung, etc.), and warranty details.

---

## 🛠️ How to Customize for Your Client

All store details, categories, and products are stored in a single, well-documented file:
👉 **[assets/js/products-data.js](file:///c:/Users/nimra/OneDrive/Desktop/mb_accessories/assets/js/products-data.js)**

### 1. Changing Store Information & WhatsApp Number
Open `assets/js/products-data.js` and edit the `STORE_CONFIG` object at the top:
```javascript
const STORE_CONFIG = {
    storeName: "MB ACCESSORIES",
    phone: "+92 300 1234567",
    whatsappNumber: "923001234567", // <-- Enter client's WhatsApp number here (no '+' or spaces)
    email: "info@mbaccessories.pk",
    address: "Shop # 14-B, City Mobile Mall, Main Hall Road, Lahore, Pakistan",
    timing: "Monday - Saturday: 11:00 AM - 10:00 PM (Sunday Closed)",
    currency: "Rs.",
};
```

### 2. How to Add or Change Products
In `assets/js/products-data.js`, you will find the `PRODUCTS` list. You can edit any existing product or copy/paste a block to add a new one:
```javascript
{
    id: "mb-017",
    name: "Ultra Slim MagSafe Battery Pack",
    category: "powerbanks",       // Matching category id
    price: 3800,                  // Price in Rs.
    originalPrice: 4800,          // Original price for strikethrough (optional)
    badge: "New Arrival",         // Badge text (optional)
    rating: 4.9,
    reviewsCount: 15,
    image: "assets/images/products/my-powerbank.jpg", // Local image or web URL
    featured: true,               // true to show on homepage
    shortDesc: "High speed wireless magnetic battery.",
    specs: ["10,000mAh", "15W MagSafe", "USB-C PD 20W"],
    compatibility: "iPhone 12 to 16 Series"
}
```

---

## 📸 Image Guide (Kahan or Konsi Pic Lagani Ha)

Full instructions are available in:
👉 **[assets/images/README.md](file:///c:/Users/nimra/OneDrive/Desktop/mb_accessories/assets/images/README.md)**

1. **Product Pictures**:
   - Put photos in: `assets/images/products/`
   - Recommended size: `800 x 800 px` (Square 1:1 with clean white or light gray background).
   - In `products-data.js`, set `image: "assets/images/products/your-file-name.jpg"`.
2. **Category Pictures**:
   - Put photos in: `assets/images/categories/`
   - Recommended size: `600 x 600 px`.
3. **Store Logo**:
   - An electric vector logo is included at `assets/images/logo.svg`.
   - To replace, replace `assets/images/logo.svg` or use a PNG file.

---

## 🌐 How to Deliver to the Client

1. **Local Demo**: You can zip this folder or double-click `index.html` to open it right inside Google Chrome, Microsoft Edge, or Safari.
2. **Online Hosting (Free & Instant)**:
   - **Vercel / Netlify**: Simply drag and drop this folder onto netlify.com or vercel.com. It goes live in 10 seconds!
   - **GitHub Pages**: Push this repository and turn on GitHub Pages.
   - **Standard Hosting**: Upload the files to `public_html` via cPanel File Manager or FTP.

---
Developed for **MB ACCESSORIES**.
