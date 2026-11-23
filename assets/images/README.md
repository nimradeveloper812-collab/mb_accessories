# 📸 Image Replacement & Upload Guide for MB ACCESSORIES

Assalam-o-Alaikum! / Welcome!
This guide explains where and how you or your client can change, add, or customize pictures for **MB ACCESSORIES**.

---

## 📁 1. Directory Structure

```text
assets/images/
│
├── categories/       <-- Put Category Banner Pictures here
│   ├── cases.jpg
│   ├── chargers.jpg
│   ├── cables.jpg
│   ├── audio.jpg
│   ├── protectors.jpg
│   ├── powerbanks.jpg
│   ├── mounts.jpg
│   └── watch.jpg
│
├── products/         <-- Put Individual Product Pictures here
│   ├── mb-001.jpg
│   ├── mb-002.jpg
│   ├── ... (and so on)
│
├── logo.png / .svg   <-- Shop Logo
└── hero-banner.jpg   <-- Main Homepage Banner
```

---

## 🛠️ 2. How to Change a Product's Picture

### Option A: Using Local Images (Recommended)
1. Save your product photo inside:
   `assets/images/products/my-new-case.jpg`
2. Open `assets/js/products-data.js` in any text editor (Notepad, VS Code, etc.).
3. Locate the product and update the `image` field:
   ```javascript
   {
       id: "mb-001",
       name: "MagSafe Crystal Armor Case...",
       // Change this line:
       image: "assets/images/products/my-new-case.jpg",
       ...
   }
   ```
4. Save the file and refresh your browser. Done!

### Option B: Using an Online Link (Unsplash, Google Drive Direct, Imgur, Cloudinary)
Simply paste the web image URL into `image`:
```javascript
image: "https://your-domain.com/path-to-image.jpg"
```

---

## 📐 3. Recommended Image Dimensions & Formats

| Asset Type | Recommended Size | Aspect Ratio | Format |
| :--- | :--- | :--- | :--- |
| **Product Photos** | 800 x 800 px | 1:1 (Square) | JPG, PNG, WEBP |
| **Category Cards** | 600 x 600 px | 1:1 or 4:3 | JPG, WEBP |
| **Hero Homepage Banner** | 1920 x 800 px | 16:9 or 21:9 | JPG, WEBP |
| **Shop Logo** | 400 x 100 px | Transparent | PNG or SVG |

> **Pro-Tip**: Square (1:1) white or dark gradient backgrounds make mobile accessories look ultra-clean and premium!

---

## 📱 4. How WhatsApp Ordering Works Without Payment Gateway

In `assets/js/products-data.js`:
- Change `whatsappNumber: "923001234567"` to your client's actual WhatsApp phone number (with country code, no `+` sign).
- Whenever a visitor clicks **"Order via WhatsApp"** or **"Inquire on WhatsApp"**, it automatically opens WhatsApp with a pre-filled message including the Product Name, Product Code, and Price!
