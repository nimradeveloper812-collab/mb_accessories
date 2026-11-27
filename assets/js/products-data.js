/**
 * MB ACCESSORIES (Muhammad Basil) - Centralized Products & Categories Data
 * 
 * Shop Owner: Muhammad Basil
 * WhatsApp: 03044614270 (Intl: 923044614270)
 * Address: Shop No. 12, Farooq Center, Tehsil Road, Gujranwala
 */

const STORE_CONFIG = {
    storeName: "MB ACCESSORIES",
    tagline: "Mobile Accessories & Spare Parts | Your Mobile Our Priority",
    ownerName: "MB_ accessories",
    phone: "0304-4614270",
    phoneDisplay: "+92 304 4614270 (MB_ accessories)",
    whatsappNumber: "923044614270", // Target: 03044614270 without '+' or spaces
    email: "info@mbaccessories.pk",
    address: "Shop No. 12, Farooq Center, Tehsil Road, Gujranwala, Pakistan",
    timing: "Monday - Saturday: 10:00 AM - 10:00 PM (Sunday Closed)",
    currency: "Rs.",
    freeDeliveryThreshold: 3000
};

// 9 Exact Categories from Muhammad Basil Shop Banner
const CATEGORIES = [
    {
        id: "lcd-touch",
        name: "LCD & Touch Glass",
        icon: "fa-solid fa-mobile-screen-button",
        description: "Original display panels, OLED & IPS LCD screens, and OCA touch glass for iPhone, Samsung, Vivo, Oppo & Redmi.",
        image: "assets/images/categories/lcd-touch.jpg",
        itemCount: 0
    },
    {
        id: "batteries",
        name: "Batteries",
        icon: "fa-solid fa-car-battery",
        description: "100% health replacement mobile batteries with genuine cobalt cells, long backup, and zero swelling warranty.",
        image: "assets/images/categories/batteries.jpg",
        itemCount: 0
    },
    {
        id: "charging-flex",
        name: "Charging Flex & Jack",
        icon: "fa-solid fa-plug-circle-bolt",
        description: "Original charging sub-board flex ribbons, Type-C & Micro USB charging jacks with mic and fast charging support.",
        image: "assets/images/categories/charging-flex.jpg",
        itemCount: 0
    },
    {
        id: "airpods-handfree",
        name: "AirPods & Handfree",
        icon: "fa-solid fa-headphones",
        description: "UT STAR MYSTIC UT PRO 2, UT STAR EMINENCE ANC Earbuds, UT STAR Type-C & 3.5mm Heavy Bass Earphones, and premium audio gear.",
        image: "assets/images/categories/airpods-handfree.jpg",
        itemCount: 4
    },
    {
        id: "chargers-cables",
        name: "Chargers & Data Cables",
        icon: "fa-solid fa-bolt",
        description: "Apple 40W Adapter, Samsung 25W PD Adapter, UT STAR 45W, 35W & 25W GaN Chargers, Adapter Kits, Fast Charging Data Cables, and premium charging gear.",
        image: "assets/images/categories/chargers-cables.jpg",
        itemCount: 14
    },
    {
        id: "covers-protectors",
        name: "Mobile Covers & Protectors",
        icon: "fa-solid fa-shield-halved",
        description: "UT STAR USG Ultra Strong 9H Tempered Glass (All Models & iPhone Pro Max Series Edition), Explosion-Proof HD Screen Protectors.",
        image: "assets/images/categories/covers-protectors.jpg",
        itemCount: 2
    },
    {
        id: "camera-glass",
        name: "Camera Glass",
        icon: "fa-solid fa-camera",
        description: "Sapphire camera lens replacement glass and alloy camera ring protectors for scratchless photography.",
        image: "assets/images/categories/camera-glass.jpg",
        itemCount: 0
    },
    {
        id: "power-banks",
        name: "Power Banks",
        icon: "fa-solid fa-battery-full",
        description: "10,000mAh to 30,000mAh high capacity portable power banks with PD fast charge and LED battery display.",
        image: "assets/images/categories/power-banks.jpg",
        itemCount: 0
    },
    {
        id: "spare-parts",
        name: "All Mobile Spare Parts",
        icon: "fa-solid fa-screwdriver-wrench",
        description: "Mobile housing bodies, back glass, loud speakers, fingerprint sensors, OCA sheets, and repair tools.",
        image: "assets/images/categories/spare-parts.jpg",
        itemCount: 0
    }
];

// Product Catalog corresponding to all 9 categories
const PRODUCTS = [
    // 4. AirPods & Handfree
    {
        id: "mb-tws-ut-1001",
        name: "UT STAR EMINENCE ANC Wireless TWS Earbuds (UT 1001)",
        category: "airpods-handfree",
        price: 3800,
        originalPrice: 5500,
        badge: "ANC + 100H",
        rating: 4.9,
        reviewsCount: 63,
        image: "assets/images/products/ut-star-eminence-tws-earbuds-ut-1001.jpg",
        featured: true,
        inStock: true,
        shortDesc: "UT STAR EMINENCE (Model UT 1001) ANC Active Noise Cancellation True Wireless Earbuds. Premium gold-accented cyber transparent lid case, Quad-Mic with ENC for crystal-clear calls, 45ms low-latency gaming mode, and extraordinary 100 hours playtime.",
        specs: [
            "ANC Active Noise Cancellation & Quad-Mic ENC Clear Calling",
            "Up to 100 Hours Total Battery Playtime with Charging Case",
            "Dedicated Ultra-Low 45ms Gaming Mode Latency",
            "Cyber Transparent Smoked Flip-Lid & Gold-Trim Stems",
            "Hi-Fi Deep Bass Audio Drivers with Touch Controls",
            "Bluetooth 5.3 Quick Auto-Pairing & Sweat Resistance"
        ],
        compatibility: "iPhone, Samsung, Xiaomi, Vivo, Oppo, Infinix, PC, Laptops & all Bluetooth Devices"
    },
    {
        id: "mb-tws-ut-pro2",
        name: "UT STAR MYSTIC UT PRO 2 ANC Wireless Earbuds (AirPods Pro Style)",
        category: "airpods-handfree",
        price: 4500,
        originalPrice: 6500,
        badge: "Wireless Charging",
        rating: 5.0,
        reviewsCount: 72,
        image: "assets/images/products/ut-star-mystic-ut-pro-2-anc-earbuds.jpg",
        featured: true,
        inStock: true,
        shortDesc: "UT STAR MYSTIC (Model UT PRO 2) Premium ANC Active Noise Cancellation Wireless Earbuds. Apple AirPods Pro 2 design with wireless charging case support, Quad-Mic with ENC for crystal-clear calls, up to 100 hours monster battery life, and 45ms low-latency gaming mode.",
        specs: [
            "ANC Active Noise Cancellation & Quad-Mic ENC Calling",
            "Qi Wireless Charging & Lightning/Type-C Fast Charging Case",
            "Up to 100 Hours Total Playtime with Compact Charging Case",
            "45ms Pro Gaming Mode for Lag-Free Audio Synchronization",
            "AirPods Pro 2 In-Ear Ergonomic Fit with Soft Silicone Tips",
            "Pop-up Auto Connect, Smart Touch Sensor & Siri/Google Assistant"
        ],
        compatibility: "iPhone, iPad, Apple Watch, Samsung, Xiaomi, Vivo, Oppo, Infinix, PC & Laptops"
    },
    {
        id: "mb-hf-ut-hl03",
        name: "UT STAR Heavy Bass Digital Type-C Stereo Earphone (HL-03)",
        category: "airpods-handfree",
        price: 800,
        originalPrice: 1200,
        badge: "Digital Type-C",
        rating: 4.8,
        reviewsCount: 55,
        image: "assets/images/products/ut-star-heavy-bass-type-c-earphone-hl-03.jpg",
        featured: false,
        inStock: true,
        shortDesc: "UT STAR (Model HL-03) Heavy Bass Digital Type-C Stereo Earphone. In-ear ergonomic design with high-definition digital DAC audio chip, deep punchy bass, built-in HD clear microphone, and multi-function inline volume remote.",
        specs: [
            "Digital Type-C Audio Jack with High-Resolution Sound",
            "Heavy Bass Acoustic Chambers & Balanced Hi-Fi Stereo",
            "Built-in HD Clear Microphone for Noise-Reduced Calling",
            "Inline Remote with Volume Control & Call Answer/Reject",
            "Ergonomic In-Ear Angled Fit for Long Fatigue-Free Listening",
            "Durable Anti-Tangle Cable & Universal Digital Compatibility"
        ],
        compatibility: "Samsung, Xiaomi, Vivo, Oppo, Infinix, Tecno, iPad, iPhone 15/16 & all Type-C Audio Devices"
    },
    {
        id: "mb-hf-ut-hl02",
        name: "UT STAR Heavy Bass 3.5mm Stereo Earphone (HL-02)",
        category: "airpods-handfree",
        price: 600,
        originalPrice: 950,
        badge: "3.5mm Jack",
        rating: 4.8,
        reviewsCount: 68,
        image: "assets/images/products/ut-star-heavy-bass-3-5mm-earphone-hl-02.jpg",
        featured: false,
        inStock: true,
        shortDesc: "UT STAR (Model HL-02) Heavy Bass 3.5mm Stereo Earphone. Standard gold-plated universal 3.5mm audio jack, dynamic stereo bass drivers, built-in HD clear microphone, and comfortable ergonomic in-ear design.",
        specs: [
            "Universal 3.5mm Gold-Plated Audio Jack for Lossless Audio",
            "Heavy Bass Dynamic Acoustic Drivers for Punchy Sound",
            "Built-in HD Clear Microphone for Hands-Free Calling",
            "Convenient Inline Remote Controller with Multi-Function Button",
            "Ergonomic Angled Earbuds for Comfortable Long-Time Wear",
            "Tangle-Free Flexible Cable & Strong Universal Compatibility"
        ],
        compatibility: "All Android Mobiles with 3.5mm Jack, Keypad Phones, MP3 Players, Laptops, Tablets & PC"
    },

    // 5. Chargers & Data Cables
    {
        id: "mb-cbl-ut-zf97",
        name: "UT STAR 67W PD Fast Charging Data Cable (UT-ZF97)",
        category: "chargers-cables",
        price: 800,
        originalPrice: 1200,
        badge: "67W PD",
        rating: 4.9,
        reviewsCount: 48,
        image: "assets/images/products/ut-star-data-cable-ut-zf97.jpg",
        featured: true,
        inStock: true,
        shortDesc: "UT STAR (Model UT-ZF97) 67W High Power Output Fast Charging Data Cable. 1-meter heavy-duty nylon braided cord with bold copper core for ultra-fast charging and high-speed data transmission.",
        specs: [
            "67W High Power Output Fast Charging",
            "PD Type-C to Lightning Fast Charging Interface",
            "1M Length Heavy-Duty Wire Nylon Braided Cable Body",
            "Bold Copper Core Wire for Stable 480Mbps Data Transmission",
            "Strong, Durable & Bend-Resistant Anti-Tangle Design",
            "Real Standard 100% Premium Quality Guaranteed"
        ],
        compatibility: "iPhone (14, 13, 12, 11, X, 8 series), iPad & all Lightning Fast Charging Devices"
    },
    {
        id: "mb-cbl-ut-zf97-cc",
        name: "UT STAR 67W Type-C to Type-C Fast Charging Data Cable (UT-ZF97)",
        category: "chargers-cables",
        price: 700,
        originalPrice: 1100,
        badge: "67W C-C",
        rating: 4.9,
        reviewsCount: 52,
        image: "assets/images/products/ut-star-type-c-to-c-cable-ut-zf97.jpg",
        featured: true,
        inStock: true,
        shortDesc: "UT STAR (Model UT-ZF97) 67W C-C Super Fast Charging Cable. Dual Type-C interfaces with bold copper core and heavy-duty nylon braided exterior for Android smartphones, tablets, and laptops.",
        specs: [
            "67W High Power Output Super Fast Charging",
            "C-C Dual Type-C to Type-C Interface",
            "1M Length Heavy-Duty Wire Nylon Braided Cable Body",
            "Bold Copper Core Wire for High-Speed 480Mbps Data Sync",
            "Strong, Durable & Bend-Resistant Anti-Tangle Wire",
            "Real Standard 100% Premium Quality Guaranteed"
        ],
        compatibility: "Samsung Super Fast Charge, Xiaomi, Oppo, Vivo, Poco, Google Pixel, Type-C Laptops & Tablets"
    },
    {
        id: "mb-cbl-ut-zf98",
        name: "UT STAR 67W USB to Type-C Fast Charging Data Cable (UT-ZF98)",
        category: "chargers-cables",
        price: 550,
        originalPrice: 850,
        badge: "67W Max",
        rating: 4.8,
        reviewsCount: 39,
        image: "assets/images/products/ut-star-usb-to-type-c-cable-ut-zf98.jpg",
        featured: true,
        inStock: true,
        shortDesc: "UT STAR (Model UT-ZF98) 67W Max Output USB to Type-C Fast Charging Data Cable. 1-meter heavy-duty nylon braided body with bold copper core for high-power fast charging and rapid 480Mbps data transmission.",
        specs: [
            "67W Max High Power Output Fast Charging",
            "USB-A to Type-C Universal Fast Charging Interface",
            "1M Length Heavy-Duty Wire Nylon Braided Cable Body",
            "Bold Copper Core Wire for Stable Fast Charging & Data Sync",
            "Strong, Durable & Bend-Resistant Anti-Tangle Cable",
            "Real Standard 100% Premium Quality Guaranteed"
        ],
        compatibility: "Samsung, Xiaomi, Oppo, Vivo, Realme, Infinix, Tecno & all USB Type-C Smartphones and Devices"
    },
    {
        id: "mb-cbl-ut-u010",
        name: "UT STAR 2.4A Super Fast Type-C Data Cable (U-010)",
        category: "chargers-cables",
        price: 450,
        originalPrice: 700,
        badge: "2.4A Fast",
        rating: 4.7,
        reviewsCount: 34,
        image: "assets/images/products/ut-star-2-4a-type-c-cable-u010.jpg",
        featured: true,
        inStock: true,
        shortDesc: "UT STAR (Model U-010) 2.4A Super Fast USB to Type-C Data Cable. 1000mm length durable white flexible wire for rapid charging and safe high-speed data transmission.",
        specs: [
            "2.4A Output Super Fast Charging Speed",
            "1000 MM (1 Meter) Flexible Cable Length",
            "USB to Type-C High-Speed Interface",
            "Fast Data Transmission & Safe Sync",
            "Reinforced Connector Joints & Anti-Split Protection",
            "100% Real Standard Premium Quality"
        ],
        compatibility: "Samsung, Xiaomi, Oppo, Vivo, Infinix, Tecno, Realme & all Type-C Devices"
    },
    {
        id: "mb-cbl-ut-zf99",
        name: "UT STAR 6A USB to Micro Fast Charging Data Cable (UT-ZF99)",
        category: "chargers-cables",
        price: 550,
        originalPrice: 850,
        badge: "6A Max",
        rating: 4.8,
        reviewsCount: 41,
        image: "assets/images/products/ut-star-usb-to-micro-cable-ut-zf99.jpg",
        featured: true,
        inStock: true,
        shortDesc: "UT STAR (Model UT-ZF99) 6A Max Output USB to Micro Fast Charging Data Cable. 1-meter heavy-duty nylon braided body with bold copper core for high-power fast charging and rapid 480Mbps data transmission.",
        specs: [
            "6A Max High Power Output Fast Charging",
            "USB-A to Micro USB Universal Fast Charging Interface",
            "1M Length Heavy-Duty Wire Nylon Braided Cable Body",
            "Bold Copper Core Wire for Stable Fast Charging & Data Sync",
            "Strong, Durable & Bend-Resistant Anti-Tangle Cable",
            "Real Standard 100% Premium Quality Guaranteed"
        ],
        compatibility: "All Micro-USB Android Phones, Power Banks, Bluetooth Speakers & Devices"
    },
    {
        id: "mb-cbl-ut-zf01",
        name: "UT STAR 27W Type-C Fast Charging Data Cable (UT-ZF01)",
        category: "chargers-cables",
        price: 350,
        originalPrice: 550,
        badge: "27W Fast",
        rating: 4.7,
        reviewsCount: 28,
        image: "assets/images/products/ut-star-27w-type-c-cable-ut-zf01.jpg",
        featured: true,
        inStock: true,
        shortDesc: "UT STAR (Model UT-ZF01) 27W Fast Charging Type-C Data Cable. 1000mm length durable white flexible wire with orange accent joints for reliable fast charging and high-speed data synchronization.",
        specs: [
            "27W Fast Charging Power Output",
            "USB-A to Type-C Universal Fast Charging Interface",
            "1000 MM (1 Meter) Flexible Cable Length",
            "Fast Charging & High-Speed Data Synchronization",
            "Reinforced Orange Strain-Relief Joint Protection",
            "100% Real Standard Premium Quality Guaranteed"
        ],
        compatibility: "Samsung, Xiaomi, Oppo, Vivo, Infinix, Tecno, Realme & all Type-C Smartphones and Devices"
    },
    {
        id: "mb-cbl-ut-99",
        name: "UT STAR 3.4A Metal Shell Micro Fast Charge Data Cable (UT-99)",
        category: "chargers-cables",
        price: 550,
        originalPrice: 850,
        badge: "3.4A Metal",
        rating: 4.8,
        reviewsCount: 36,
        image: "assets/images/products/ut-star-3-4a-micro-cable-ut99.jpg",
        featured: true,
        inStock: true,
        shortDesc: "UT STAR (Model UT-99) 3.4A Fast Charge Micro-USB Data Cable. Premium aluminium alloy metal shell connectors with rugged black strain relief, electronic circuit protection, and heavy-duty red/black braided cord.",
        specs: [
            "3.4A High-Speed Fast Charge Output",
            "Aluminium Alloy Metal Shell & Reinforced Joint Protection",
            "1000 MM (1 Meter) Heavy-Duty Braided Cable Length",
            "Electronic Circuit & Flame-Retardant Safe Charging Protection",
            "Over-Current Protection & Intelligent Auto Power-Off",
            "Fast 30-Minute Charging Capability (Romoss Speed Benchmark)"
        ],
        compatibility: "All Micro-USB Android Smartphones, Keypad Mobiles, Power Banks & Bluetooth Accessories"
    },
    {
        id: "mb-chg-apple-40w",
        name: "Apple Original 100% 40W Dynamic Power Adapter (60W Max)",
        category: "chargers-cables",
        price: 6000,
        originalPrice: 8500,
        badge: "100% Original",
        rating: 5.0,
        reviewsCount: 58,
        image: "assets/images/products/apple-40w-dynamic-power-adapter.jpg",
        featured: true,
        inStock: true,
        shortDesc: "Genuine Apple Original 100% 40W Dynamic Power Adapter with 60W Max delivery. High-efficiency Type-C fast charging adapter with foldable flat prongs for iPhone, iPad, and MacBook.",
        specs: [
            "Apple 100% Original Genuine Dynamic Power Adapter",
            "40W Dynamic Output with 60W Maximum Peak Delivery",
            "Single USB-C Super Fast Power Delivery (PD) Port",
            "Foldable Flat Pins & Ultra Compact Travel Design",
            "Advanced Temperature & Voltage Surge Protection",
            "Optimized Battery Health & Rapid Fast Charging"
        ],
        compatibility: "iPhone 16, 15, 14, 13, 12, 11 series, iPad Pro/Air, Apple Watch & MacBooks"
    },
    {
        id: "mb-chg-sam-25w",
        name: "Samsung 25W PD Super Fast Charging Adapter (USB-C)",
        category: "chargers-cables",
        price: 1800,
        originalPrice: 2600,
        badge: "25W Super Fast",
        rating: 4.8,
        reviewsCount: 42,
        image: "assets/images/products/samsung-25w-pd-adapter-type-c.jpg",
        featured: true,
        inStock: true,
        shortDesc: "Samsung 25W PD Adapter with Type-C Super Fast Charging technology. Features standard 2-pin round plug, intelligent power delivery, and complete device protection.",
        specs: [
            "25W Super Fast Charging USB-C Power Delivery",
            "Universal EU 2-Pin Round Plug Design",
            "Smart IC Power Management & Overheat Protection",
            "Supports Samsung Super Fast Charging Protocol",
            "High-Quality Durable Fire-Retardant Shell",
            "Tested & Verified Quality by UT STAR"
        ],
        compatibility: "Samsung Galaxy S24, S23, S22, S21, Note 20, A-Series & all Type-C Fast Charge Devices"
    },
    {
        id: "mb-chg-apple-40w-copy",
        name: "Apple 40W Dynamic Power Adapter with 60W Max (Master Copy)",
        category: "chargers-cables",
        price: 2200,
        originalPrice: 3200,
        badge: "40W Dynamic",
        rating: 4.7,
        reviewsCount: 38,
        image: "assets/images/products/apple-40w-dynamic-adapter-grade-a.jpg",
        featured: true,
        inStock: true,
        shortDesc: "Apple 40W Dynamic Power Adapter with 60W Max output (Master Copy / High Quality). Fast charging Type-C port with foldable US flat prongs, suitable for everyday fast charging of iPhone and iPad.",
        specs: [
            "40W Dynamic Power Output with 60W Max Capability",
            "Single USB-C High-Speed Fast Charging Port",
            "Foldable Flat Pins Compact Travel Adapter",
            "Built-in Surge & Over-Current Safety Protection",
            "Smooth Matte White Finish with Precision Cutouts",
            "High Value for Money & Reliable Daily Performance"
        ],
        compatibility: "iPhone 15, 14, 13, 12, 11 Series, iPad & all Type-C Devices"
    },
    {
        id: "mb-chg-ut-103",
        name: "UT STAR 35W GaN Dual Port QC 3.0 & Type-C Fast Charger (CH UT-103)",
        category: "chargers-cables",
        price: 1000,
        originalPrice: 1600,
        badge: "35W GaN Dual Port",
        rating: 4.8,
        reviewsCount: 45,
        image: "assets/images/products/ut-star-35w-gan-dual-port-charger-ch-ut-103.jpg",
        featured: true,
        inStock: true,
        shortDesc: "UT STAR (Model CH UT-103) 35W Max GaN Dual Port QC 3.0 & Type-C Fast Travel Adapter. Features transparent cyber casing, amber body with LED ring, dual device simultaneous charging, and includes a free 1-meter silicone fast charging cable.",
        specs: [
            "35W Max GaN Fast Charging Power Delivery",
            "Dual Ports: Type-C (PD) + USB-A (QC 3.0) Simultaneous Fast Charge",
            "Free 1-Meter Premium Silicone Fast Charging Cable Included",
            "Cyber Transparent Outer Casing with Amber Tech Aesthetic",
            "Advanced GaN Technology: High Efficiency, Low Heat Generation",
            "Universal EU 2-Pin Plug with Multi-Protection Safety System"
        ],
        compatibility: "All Type-C & USB Android Smartphones, iPhone, Tablets, Power Banks & Bluetooth Earbuds"
    },
    {
        id: "mb-chg-ut-kit",
        name: "UT STAR Fast Charging Power Adapter Kit with Type-C Cable",
        category: "chargers-cables",
        price: 1000,
        originalPrice: 1500,
        badge: "Complete Kit",
        rating: 4.8,
        reviewsCount: 39,
        image: "assets/images/products/ut-star-power-adapter-kit-type-c.jpg",
        featured: true,
        inStock: true,
        shortDesc: "UT STAR Power Adapter Kit with Fast Charging Wall Charger and matching 1-meter USB to Type-C data cable. Features sleek white minimal casing, flat prongs, smart IC protection, and reliable daily charging performance.",
        specs: [
            "Complete Fast Charging Set: Power Adapter + USB-C Cable",
            "Includes High-Speed USB to Type-C Charging & Data Sync Cable",
            "US Flat 2-Prong Wall Plug with Compact Travel Form Factor",
            "Smart IC Protection Against Over-Voltage & Over-Heating",
            "Durable Heat-Resistant Pure White Housing",
            "100% Reliable Quality Guaranteed by UT STAR"
        ],
        compatibility: "Samsung, Xiaomi, Oppo, Vivo, Infinix, Tecno, Realme & all Type-C Devices"
    },
    {
        id: "mb-chg-ut-45w",
        name: "UT STAR 45W Max GaN Dual Port Quick Charger",
        category: "chargers-cables",
        price: 1900,
        originalPrice: 2800,
        badge: "45W GaN Dual",
        rating: 4.9,
        reviewsCount: 51,
        image: "assets/images/products/ut-star-45w-gan-dual-port-charger.jpg",
        featured: true,
        inStock: true,
        shortDesc: "UT STAR 45W Max GaN Dual Port Quick Charger. Advanced GaN technology delivers high-efficiency super fast charging with dual USB-C + USB-A simultaneous outputs, matte black anti-scratch casing, and complete device safety.",
        specs: [
            "45W Max High-Power GaN Fast Charging Output",
            "Dual Port Simultaneous Charging (Type-C PD + USB-A Quick Charge)",
            "Advanced Gallium Nitride (GaN) Chip for Cool & Efficient Operation",
            "Supports iPhone (including latest series) & Android Fast Protocols",
            "Matte Black Flame-Retardant Finish & Compact Form Factor",
            "100% Real Standard Premium Quality Guaranteed"
        ],
        compatibility: "iPhone 16, 15, 14, 13, Samsung Galaxy S24, Note, iPad, Tablets & all Type-C Devices"
    },
    {
        id: "mb-chg-ut-nf01",
        name: "UT STAR 25W GaN Dual Port PD & QC 3.2 Fast Charger (UT-NF01)",
        category: "chargers-cables",
        price: 1300,
        originalPrice: 1950,
        badge: "25W GaN Dual",
        rating: 4.8,
        reviewsCount: 44,
        image: "assets/images/products/ut-star-25w-gan-dual-port-charger-ut-nf01.jpg",
        featured: true,
        inStock: true,
        shortDesc: "UT STAR (Model UT-NF01) 25W GaN Dual Port PD & QC 3.2 Fast Charger. High-efficiency Gallium Nitride architecture ensures cool temperature operation, smart IC multi-protection, and simultaneous fast charging for two devices via Type-C and USB-A.",
        specs: [
            "25W Max Power Delivery & QC 3.2 Fast Charging",
            "Dual Ports: Type-C (PD) + USB-A Simultaneous Quick Output",
            "Advanced GaN Tech: Cool Charging & Smart Chip Energy Efficiency",
            "Universal EU 2-Pin Round Plug for Stable Wall Grip",
            "Full Circuit & Overheating Multi-Protection System",
            "100% Real Standard Premium Quality Guaranteed"
        ],
        compatibility: "Samsung, Xiaomi, Oppo, Vivo, Infinix, Tecno, Realme, iPhone & all Type-C Devices"
    },

    // 6. Mobile Covers & Protectors
    {
        id: "mb-prt-ut-usg9h",
        name: "UT STAR USG Ultra Strong 9H Tempered Glass Screen Protector",
        category: "covers-protectors",
        price: 550,
        originalPrice: 850,
        badge: "9H Explosion-Proof",
        rating: 4.9,
        reviewsCount: 84,
        image: "assets/images/products/ut-star-usg-ultra-strong-9h-tempered-glass.jpg",
        featured: true,
        inStock: true,
        shortDesc: "UT STAR USG Ultra Strong 9H Tempered Glass Screen Protector. Full screen edge-to-edge comprehensive protection, upgrade explosion-proof shield, crystal clear HD clarity, responsive touch sensitivity, and smooth large-arc curved edges.",
        specs: [
            "9H Diamond Hardness Anti-Scratch & Shatterproof Defense",
            "Upgrade Explosion-Proof Multilayer Tempered Glass",
            "Edge-to-Edge Quick-Fit Full Screen Coverage",
            "Ultra-Clear HD Optical Clarity & True Color Display",
            "Oleophobic Anti-Fingerprint & Oil-Repellent Coating",
            "Smooth Large Arc Edges for Comfortable Grip & Zero Chipping"
        ],
        compatibility: "All iPhone, Samsung, Xiaomi Redmi Note, Vivo, Oppo, Infinix, Tecno & Realme Models"
    },
    {
        id: "mb-prt-ut-usg9h-promax",
        name: "UT STAR USG Ultra Strong 9H Tempered Glass (iPhone Pro Max Edition)",
        category: "covers-protectors",
        price: 1000,
        originalPrice: 1500,
        badge: "iPhone Pro Max",
        rating: 5.0,
        reviewsCount: 92,
        image: "assets/images/products/ut-star-usg-ultra-strong-9h-glass-iphone-pro-max.jpg",
        featured: true,
        inStock: true,
        shortDesc: "UT STAR USG Ultra Strong 9H Tempered Glass (Flagship iPhone Pro Max Series Edition). Engineered for premium large-screen Apple iPhones with reinforced explosion-proof multi-layer armor, precision curved large-arc edges, crystal clear HD retinal clarity, and ultra-smooth oleophobic touch.",
        specs: [
            "Custom Molded Precision Fit for iPhone Pro Max Series",
            "9H Diamond Military-Grade Shatterproof & Impact Protection",
            "Curved Large-Arc Smooth Edges (No Sharpness or Chipping)",
            "Zero-Bubble Quick Fit Full Screen Optical Adhesive",
            "Retina HD Ultra-Clear Transparency & True Tone Color Fidelity",
            "Electroplated Oleophobic Coating for Anti-Fingerprint Gliding Touch"
        ],
        compatibility: "iPhone 16 Pro Max, 16 Pro, 15 Pro Max, 15 Pro, 14 Pro Max & 13 Pro Max"
    }
];

// Client Testimonials
const TESTIMONIALS = [
    {
        name: "Ali Raza",
        city: "Gujranwala",
        comment: "Bohot achi shop ha! MB_ accessories ne WhatsApp par bohot acha guide kia aur LCD foran shop se mil gayi. Quality 100% original ha.",
        rating: 5,
        product: "OLED Display & Touch Glass"
    },
    {
        name: "Usman Ghani",
        city: "Sialkot",
        comment: "Ordered 65W GaN charger and 100% health iPhone battery. Super fast dispatch from Tehsil Road Gujranwala. Genuine products!",
        rating: 5,
        product: "65W GaN Charger & Battery"
    },
    {
        name: "Kamran Akram",
        city: "Lahore",
        comment: "Wholesale spare parts and charging flexes ka rate pure market se behtareen ha. MB Accessories is the best mobile shop.",
        rating: 5,
        product: "Charging Flex & Jack"
    }
];

// Helper: Automatically synchronize CATEGORIES itemCount with actual PRODUCTS length
if (typeof CATEGORIES !== 'undefined' && typeof PRODUCTS !== 'undefined') {
    CATEGORIES.forEach(cat => {
        cat.itemCount = PRODUCTS.filter(p => p.category === cat.id).length;
    });
}
