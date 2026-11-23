/**
 * MB ACCESSORIES - Main Interactive JavaScript
 * Powers Dynamic Rendering, Search, Filtering, Quick View Modal,
 * Inquiry Bag, WhatsApp Direct Message Generation, and
 * Commercial-Grade Motion Micro-interactions & Animations.
 */

// State Management
let inquiryBag = JSON.parse(localStorage.getItem('mb_inquiry_bag')) || [];
let activeCategoryFilter = 'all';
let searchQuery = '';
let currentSort = 'default';

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initScrollProgress();
    initNavbar();
    initNavbarScroll();
    initInquiryBag();
    initFloatingWhatsApp();
    initWhatsAppTooltip();
    initBackToTop();
    initButtonShimmer();
    
    // Page-specific initializers
    if (document.getElementById('home-categories-grid')) {
        renderHomeCategories();
    }

    if (document.getElementById('featured-products-container')) {
        renderFeaturedProducts();
        initHomeFilterPills();
    }
    
    if (document.getElementById('catalog-products-container')) {
        initCatalogPage();
    }

    if (document.getElementById('all-categories-container')) {
        renderAllCategoriesPage();
    }

    if (document.getElementById('contact-form')) {
        initContactForm();
    }

    // Initialize Scroll Animations & Counters after DOM elements are ready
    setTimeout(() => {
        initScrollReveal();
        initStatsCounters();
    }, 50);

    // Keyboard ESC to close Quick View Modal or Drawers
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeQuickView();
            const bagDrawer = document.getElementById('inquiry-drawer');
            const bagBackdrop = document.getElementById('inquiry-backdrop');
            if (bagDrawer && !bagDrawer.classList.contains('translate-x-full')) {
                bagDrawer.classList.add('translate-x-full');
                if (bagBackdrop) bagBackdrop.classList.add('hidden');
            }
            const mobileDrawer = document.getElementById('mobile-menu-drawer');
            const mobileBackdrop = document.getElementById('mobile-menu-backdrop');
            if (mobileDrawer && !mobileDrawer.classList.contains('translate-x-full')) {
                mobileDrawer.classList.add('translate-x-full');
                if (mobileBackdrop) mobileBackdrop.classList.add('hidden');
            }
        }
    });
});

/* ==========================================================================
   Page Load & Scroll Progress Bar
   ========================================================================== */
function initScrollProgress() {
    let progressBar = document.getElementById('scroll-progress-bar');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.id = 'scroll-progress-bar';
        document.body.prepend(progressBar);
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                if (totalHeight > 0) {
                    const progress = (window.scrollY / totalHeight) * 100;
                    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

/* ==========================================================================
   Theme Management (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
    const savedTheme = localStorage.getItem('mb_theme');
    const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && systemDark);

    applyTheme(isDark, false);

    const toggleBtns = [
        document.getElementById('theme-toggle-btn'),
        document.getElementById('mobile-theme-toggle-btn')
    ];

    toggleBtns.forEach(btn => {
        if (!btn) return;
        btn.addEventListener('click', () => {
            const currentDark = document.documentElement.classList.contains('dark');
            const newDark = !currentDark;
            localStorage.setItem('mb_theme', newDark ? 'dark' : 'light');
            applyTheme(newDark, true);

            btn.style.transform = 'scale(0.85) rotate(180deg)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 260);

            showToast(newDark ? 'Dark Mode Activated 🌙' : 'Light Mode Activated ☀️', newDark ? 'fa-moon' : 'fa-sun');
        });
    });

    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('mb_theme')) {
                applyTheme(e.matches, true);
            }
        });
    }
}

function applyTheme(isDark, animate = false) {
    if (animate) {
        document.documentElement.classList.add('theme-transition');
        setTimeout(() => {
            document.documentElement.classList.remove('theme-transition');
        }, 300);
    }

    if (isDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Toggle icons
    const moonIcons = document.querySelectorAll('.theme-icon-moon');
    const sunIcons = document.querySelectorAll('.theme-icon-sun');
    const labels = document.querySelectorAll('.theme-toggle-label');

    moonIcons.forEach(icon => {
        if (isDark) {
            icon.classList.add('hidden');
        } else {
            icon.classList.remove('hidden');
        }
    });

    sunIcons.forEach(icon => {
        if (isDark) {
            icon.classList.remove('hidden');
        } else {
            icon.classList.add('hidden');
        }
    });

    labels.forEach(label => {
        label.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });

    // Switch Header Logos
    document.querySelectorAll('.site-logo-img').forEach(img => {
        img.src = isDark ? 'assets/images/logo-white.svg' : 'assets/images/logo.svg';
    });
}

/* ==========================================================================
   Navbar & Mobile Menu
   ========================================================================== */
function initNavbar() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');

    if (mobileMenuBtn && mobileMenuDrawer) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuDrawer.classList.remove('translate-x-full');
            if (mobileMenuBackdrop) mobileMenuBackdrop.classList.remove('hidden');
        });

        const closeMenu = () => {
            mobileMenuDrawer.classList.add('translate-x-full');
            if (mobileMenuBackdrop) mobileMenuBackdrop.classList.add('hidden');
        };

        if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMenu);
        if (mobileMenuBackdrop) mobileMenuBackdrop.addEventListener('click', closeMenu);
    }

    // Inquiry Drawer Toggle
    const bagBtn = document.getElementById('inquiry-bag-btn');
    const mobileBagBtn = document.getElementById('mobile-inquiry-bag-btn');
    const bagDrawer = document.getElementById('inquiry-drawer');
    const bagClose = document.getElementById('inquiry-drawer-close');
    const bagBackdrop = document.getElementById('inquiry-backdrop');

    const openBag = () => {
        if (bagDrawer) bagDrawer.classList.remove('translate-x-full');
        if (bagBackdrop) bagBackdrop.classList.remove('hidden');
        renderInquiryDrawerItems();
    };

    const closeBag = () => {
        if (bagDrawer) bagDrawer.classList.add('translate-x-full');
        if (bagBackdrop) bagBackdrop.classList.add('hidden');
    };

    if (bagBtn) bagBtn.addEventListener('click', openBag);
    if (mobileBagBtn) mobileBagBtn.addEventListener('click', openBag);
    if (bagClose) bagClose.addEventListener('click', closeBag);
    if (bagBackdrop) bagBackdrop.addEventListener('click', closeBag);

    // Global Search trigger
    const navSearchInput = document.getElementById('nav-search-input');
    if (navSearchInput) {
        navSearchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const term = navSearchInput.value.trim();
                if (term) {
                    window.location.href = `products.html?search=${encodeURIComponent(term)}`;
                }
            }
        });
    }
}

function initNavbarScroll() {
    const nav = document.querySelector('.glass-nav');
    if (!nav) return;

    const handleScroll = () => {
        if (window.scrollY > 20) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
}

/* ==========================================================================
   Product Card Generator (Reusable HTML Template with Motion Stagger)
   ========================================================================== */
function createProductCardHTML(product, index = 0) {
    const discountPercent = product.originalPrice 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
        : 0;

    const inBag = inquiryBag.some(item => item.id === product.id);
    const staggerDelay = Math.min(index * 45, 600);

    return `
    <div class="product-card glow-card product-card-enter bg-white rounded-2xl overflow-hidden flex flex-col group relative" data-product-id="${product.id}" style="animation-delay: ${staggerDelay}ms">
        <!-- Image & Badges -->
        <div class="relative bg-slate-100 aspect-square overflow-hidden flex items-center justify-center p-4">
            <!-- Badges -->
            <div class="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
                ${product.badge ? `<span class="badge-custom bg-blue-600 text-white shadow-sm">${product.badge}</span>` : ''}
                ${discountPercent > 0 ? `<span class="badge-custom bg-emerald-500 text-white shadow-sm">-${discountPercent}%</span>` : ''}
            </div>

            <!-- Quick Action Floating Buttons -->
            <div class="absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-x-2 group-hover:translate-x-0">
                <button onclick="openQuickView('${product.id}')" title="Quick View" class="w-9 h-9 rounded-full bg-white text-slate-700 shadow-md flex items-center justify-center hover:bg-blue-600 hover:text-white transition duration-200 active:scale-95">
                    <i class="fa-solid fa-eye text-sm"></i>
                </button>
                <button onclick="toggleInquiryBag('${product.id}')" title="${inBag ? 'Remove from Inquiry List' : 'Add to Inquiry List'}" class="w-9 h-9 rounded-full ${inBag ? 'bg-amber-500 text-white' : 'bg-white text-slate-700'} shadow-md flex items-center justify-center hover:bg-amber-500 hover:text-white transition duration-200 active:scale-95">
                    <i class="fa-solid ${inBag ? 'fa-check' : 'fa-list-check'} text-sm"></i>
                </button>
            </div>

            <!-- Product Image -->
            <img src="${product.image}" alt="${product.name}" loading="lazy" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1601593346740-925612772716?w=600&auto=format&fit=crop&q=80'">
        </div>

        <!-- Product Content -->
        <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
                <!-- Category & Rating -->
                <div class="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span class="uppercase tracking-wider font-semibold text-blue-600">${formatCategoryName(product.category)}</span>
                    <div class="flex items-center gap-1 text-amber-500 font-bold">
                        <i class="fa-solid fa-star text-[11px]"></i>
                        <span>${product.rating}</span>
                        <span class="text-slate-400 font-normal">(${product.reviewsCount})</span>
                    </div>
                </div>

                <!-- Title -->
                <h3 class="font-bold text-slate-900 text-base leading-snug line-clamp-2 hover:text-blue-600 transition cursor-pointer" onclick="openQuickView('${product.id}')">
                    ${product.name}
                </h3>

                <!-- Compatibility Pill -->
                ${product.compatibility ? `
                    <div class="mt-2 text-[11px] text-slate-500 flex items-center gap-1.5 line-clamp-1">
                        <i class="fa-solid fa-circle-check text-emerald-500 text-[10px]"></i>
                        <span>${product.compatibility}</span>
                    </div>
                ` : ''}
            </div>

            <div class="mt-4 pt-3 border-t border-slate-100">
                <!-- Price -->
                <div class="flex items-baseline gap-2 mb-3">
                    <span class="text-xl font-black text-slate-900">${STORE_CONFIG.currency} ${product.price.toLocaleString()}</span>
                    ${product.originalPrice ? `
                        <span class="text-xs text-slate-400 line-through">${STORE_CONFIG.currency} ${product.originalPrice.toLocaleString()}</span>
                    ` : ''}
                </div>

                <!-- Action Buttons: WhatsApp Inquire & Quick View -->
                <div class="grid grid-cols-5 gap-2">
                    <a href="${generateWhatsAppLink(product)}" target="_blank" rel="noopener noreferrer" class="col-span-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 text-xs shadow-sm transition active:scale-98">
                        <i class="fa-brands fa-whatsapp text-sm"></i>
                        <span>Order on WhatsApp</span>
                    </a>
                    <button onclick="openQuickView('${product.id}')" title="View Details" class="col-span-1 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-600 rounded-xl flex items-center justify-center transition active:scale-95">
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;
}

function formatCategoryName(catId) {
    const cat = CATEGORIES.find(c => c.id === catId);
    return cat ? cat.name : catId;
}

/* ==========================================================================
   Home Page Renderers
   ========================================================================== */
function renderHomeCategories() {
    const container = document.getElementById('home-categories-grid');
    if (!container) return;

    container.innerHTML = CATEGORIES.map((cat, idx) => `
        <a href="products.html?category=${cat.id}" class="category-card glow-card group bg-white rounded-3xl overflow-hidden border border-slate-200/90 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 reveal stagger-${(idx % 6) + 1}">
            <!-- Image Area with Badges -->
            <div class="relative h-44 w-full bg-slate-900 overflow-hidden">
                <img src="${cat.image}" alt="${cat.name}" loading="lazy" class="cat-img w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                
                <!-- Floating Icon Badge -->
                <div class="absolute top-3.5 left-3.5 w-11 h-11 rounded-xl bg-blue-600/90 text-white backdrop-blur-md flex items-center justify-center text-lg shadow-lg group-hover:scale-105 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <i class="${cat.icon}"></i>
                </div>

                <!-- Category Name on Image -->
                <div class="absolute bottom-3 left-4 right-4">
                    <h4 class="font-extrabold text-white text-lg tracking-tight group-hover:text-cyan-300 transition">
                        ${cat.name}
                    </h4>
                </div>
            </div>

            <!-- Content Area -->
            <div class="p-5 flex-1 flex flex-col justify-between bg-white">
                <p class="text-xs text-slate-500 leading-relaxed line-clamp-2">${cat.description}</p>
                <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-xs font-bold text-blue-600 group-hover:text-blue-700 flex items-center gap-1.5 transition">
                        <span>Browse Products</span>
                        <i class="fa-solid fa-arrow-right text-[11px] group-hover:translate-x-1 transition-transform"></i>
                    </span>
                    ${cat.itemCount > 0 ? `
                        <span class="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                            <i class="fa-solid fa-circle-check text-[10px]"></i> In Stock
                        </span>
                    ` : `
                        <span class="text-[11px] text-amber-600 font-semibold flex items-center gap-1">
                            <i class="fa-solid fa-clock-rotate-left text-[10px]"></i> Inquire Stock
                        </span>
                    `}
                </div>
            </div>
        </a>
    `).join('');
}

function renderHomeVerticalCategories() {
    const container = document.getElementById('home-vertical-categories-list');
    if (!container) return;

    // All Items Button (Vertical)
    const allBtn = `
        <button class="home-cat-vertical-btn active w-full p-3.5 rounded-2xl flex items-center justify-between text-left transition duration-200 bg-blue-600 text-white font-bold shadow-md" data-filter="all">
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center text-sm flex-shrink-0">
                    <i class="fa-solid fa-layer-group"></i>
                </div>
                <div>
                    <span class="text-xs font-black block">All Accessories</span>
                    <span class="text-[10px] text-blue-100 font-medium">Complete Inventory</span>
                </div>
            </div>
            <span class="text-[11px] bg-white/20 px-2.5 py-1 rounded-full font-extrabold">${PRODUCTS.length}</span>
        </button>
    `;

    // 9 Vertical Category Buttons
    const catBtns = CATEGORIES.map(cat => {
        const count = PRODUCTS.filter(p => p.category === cat.id).length;
        return `
            <button class="home-cat-vertical-btn w-full p-3.5 rounded-2xl flex items-center justify-between text-left transition duration-200 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200/80 hover:border-blue-300 group" data-filter="${cat.id}">
                <div class="flex items-center gap-3 min-w-0">
                    <div class="w-10 h-10 rounded-xl bg-white text-blue-600 border border-slate-200 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center text-sm flex-shrink-0 transition duration-200">
                        <i class="${cat.icon}"></i>
                    </div>
                    <div class="min-w-0">
                        <span class="text-xs font-bold block truncate text-slate-900 group-hover:text-blue-600">${cat.name}</span>
                        <span class="text-[10px] text-slate-400 font-medium">Tested Spare Parts</span>
                    </div>
                </div>
                <div class="flex items-center gap-2 flex-shrink-0">
                    <span class="text-[10px] font-bold text-slate-400 group-hover:text-blue-600 bg-white px-2 py-0.5 rounded-full border border-slate-200">${count}</span>
                    <i class="fa-solid fa-chevron-right text-[10px] text-slate-400 group-hover:translate-x-1 group-hover:text-blue-600 transition-transform"></i>
                </div>
            </button>
        `;
    }).join('');

    container.innerHTML = allBtn + catBtns;

    // Attach click handlers
    container.querySelectorAll('.home-cat-vertical-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            container.querySelectorAll('.home-cat-vertical-btn').forEach(b => {
                b.className = 'home-cat-vertical-btn w-full p-3.5 rounded-2xl flex items-center justify-between text-left transition duration-200 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200/80 hover:border-blue-300 group';
                const iconBox = b.querySelector('.w-10');
                if (iconBox) iconBox.className = 'w-10 h-10 rounded-xl bg-white text-blue-600 border border-slate-200 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center text-sm flex-shrink-0 transition duration-200';
            });

            btn.className = 'home-cat-vertical-btn active w-full p-3.5 rounded-2xl flex items-center justify-between text-left transition duration-200 bg-blue-600 text-white font-bold shadow-md';
            const activeIconBox = btn.querySelector('.w-10');
            if (activeIconBox) activeIconBox.className = 'w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center text-sm flex-shrink-0';

            const filterVal = btn.getAttribute('data-filter');
            renderFeaturedProducts(filterVal);
        });
    });
}

function renderFeaturedProducts(filter = 'all') {
    const container = document.getElementById('featured-products-container');
    const categoryNameElem = document.getElementById('current-category-name');
    const categoryCountElem = document.getElementById('current-category-count');
    if (!container) return;

    let items = PRODUCTS;
    let selectedTitle = 'All Accessories';

    if (filter !== 'all') {
        const catObj = CATEGORIES.find(c => c.id === filter);
        selectedTitle = catObj ? catObj.name : filter;
        items = PRODUCTS.filter(p => p.category === filter);
    }

    if (categoryNameElem) categoryNameElem.textContent = selectedTitle;
    if (categoryCountElem) categoryCountElem.textContent = `${items.length} Product(s) Available`;

    if (items.length === 0) {
        container.innerHTML = `
            <div class="col-span-full bg-white rounded-3xl p-12 text-center border border-slate-200">
                <div class="w-16 h-16 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center text-2xl mb-4">
                    <i class="fa-solid fa-box-open"></i>
                </div>
                <h4 class="text-base font-bold text-slate-800">No products found in this category</h4>
                <p class="text-xs text-slate-500 mt-1">Please check back soon or inquire directly on WhatsApp for fresh stock!</p>
                <a href="https://wa.me/923044614270?text=Hi%20Muhammad%20Basil!%20Do%20you%20have%20stock%20for%20${encodeURIComponent(selectedTitle)}?" target="_blank" class="mt-5 inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-sm active:scale-95">
                    <i class="fa-brands fa-whatsapp text-sm"></i>
                    <span>Inquire on WhatsApp</span>
                </a>
            </div>
        `;
        return;
    }

    container.innerHTML = items.map((p, idx) => createProductCardHTML(p, idx)).join('');
}

function initHomeFilterPills() {
    renderHomeVerticalCategories();
}

/* ==========================================================================
   Catalog Page (Products.html)
   ========================================================================== */
function initCatalogPage() {
    // Check URL parameters (e.g. ?category=chargers&search=fast)
    const urlParams = new URLSearchParams(window.location.search);
    const catParam = urlParams.get('category');
    const searchParam = urlParams.get('search');

    if (catParam) activeCategoryFilter = catParam;
    if (searchParam) {
        searchQuery = searchParam;
        const catalogSearchInput = document.getElementById('catalog-search-input');
        if (catalogSearchInput) catalogSearchInput.value = searchParam;
    }

    renderCatalogCategoryPills();
    setupCatalogEventListeners();
    applyCatalogFilters();
}

function renderCatalogCategoryPills() {
    const container = document.getElementById('catalog-categories-bar');
    if (!container) return;

    const allPill = `
        <button class="catalog-cat-pill w-full p-3 rounded-2xl flex items-center justify-between text-left transition duration-200 ${activeCategoryFilter === 'all' ? 'bg-blue-600 text-white font-bold shadow-md' : 'bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200/80'}" data-cat="all">
            <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-lg ${activeCategoryFilter === 'all' ? 'bg-white/20 text-white' : 'bg-white text-blue-600 border border-slate-200'} flex items-center justify-center text-xs flex-shrink-0">
                    <i class="fa-solid fa-layer-group"></i>
                </div>
                <span class="text-xs font-bold">All Accessories</span>
            </div>
            <span class="text-[10px] ${activeCategoryFilter === 'all' ? 'bg-white/20' : 'bg-white border border-slate-200'} px-2 py-0.5 rounded-full font-bold">${PRODUCTS.length}</span>
        </button>
    `;

    const catPills = CATEGORIES.map(cat => {
        const count = PRODUCTS.filter(p => p.category === cat.id).length;
        const isActive = activeCategoryFilter === cat.id;
        return `
            <button class="catalog-cat-pill w-full p-3 rounded-2xl flex items-center justify-between text-left transition duration-200 ${isActive ? 'bg-blue-600 text-white font-bold shadow-md' : 'bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200/80'} group" data-cat="${cat.id}">
                <div class="flex items-center gap-2.5 min-w-0">
                    <div class="w-8 h-8 rounded-lg ${isActive ? 'bg-white/20 text-white' : 'bg-white text-blue-600 border border-slate-200 group-hover:bg-blue-600 group-hover:text-white'} flex items-center justify-center text-xs flex-shrink-0 transition">
                        <i class="${cat.icon}"></i>
                    </div>
                    <span class="text-xs font-bold truncate">${cat.name}</span>
                </div>
                <div class="flex items-center gap-1.5 flex-shrink-0">
                    <span class="text-[10px] font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-white text-slate-600 border border-slate-200'} px-2 py-0.5 rounded-full">${count}</span>
                    <i class="fa-solid fa-chevron-right text-[10px] ${isActive ? 'text-white' : 'text-slate-400'}"></i>
                </div>
            </button>
        `;
    }).join('');

    container.innerHTML = allPill + catPills;

    // Attach click handlers
    container.querySelectorAll('.catalog-cat-pill').forEach(btn => {
        btn.addEventListener('click', () => {
            activeCategoryFilter = btn.getAttribute('data-cat');
            renderCatalogCategoryPills();
            applyCatalogFilters();
        });
    });
}

function setupCatalogEventListeners() {
    // Live Search
    const searchInput = document.getElementById('catalog-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim().toLowerCase();
            applyCatalogFilters();
        });
    }

    // Sort Dropdown
    const sortSelect = document.getElementById('catalog-sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            applyCatalogFilters();
        });
    }

    // Reset Filters Button
    const resetBtn = document.getElementById('reset-filters-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            activeCategoryFilter = 'all';
            searchQuery = '';
            currentSort = 'default';
            if (searchInput) searchInput.value = '';
            if (sortSelect) sortSelect.value = 'default';
            renderCatalogCategoryPills();
            applyCatalogFilters();
        });
    }
}

function applyCatalogFilters() {
    const container = document.getElementById('catalog-products-container');
    const resultCount = document.getElementById('catalog-result-count');
    if (!container) return;

    let filtered = [...PRODUCTS];

    // Filter by Category
    if (activeCategoryFilter !== 'all') {
        filtered = filtered.filter(p => p.category === activeCategoryFilter);
    }

    // Filter by Search
    if (searchQuery) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchQuery) ||
            p.shortDesc.toLowerCase().includes(searchQuery) ||
            (p.compatibility && p.compatibility.toLowerCase().includes(searchQuery))
        );
    }

    // Sorting
    if (currentSort === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === 'name-az') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    // Update count
    if (resultCount) {
        resultCount.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} products`;
    }

    // Render cards with cascading entrance
    if (filtered.length === 0) {
        const catObj = CATEGORIES.find(c => c.id === activeCategoryFilter);
        const catName = catObj ? catObj.name : 'Accessories';
        container.innerHTML = `
            <div class="col-span-full bg-white rounded-3xl p-10 sm:p-14 text-center border border-slate-200/90 shadow-sm">
                <div class="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mx-auto flex items-center justify-center text-2xl mb-4 border border-blue-100">
                    <i class="fa-solid fa-boxes-packing"></i>
                </div>
                <h3 class="text-xl font-black text-slate-900">Fresh Stock Available on WhatsApp for ${catName}</h3>
                <p class="text-xs sm:text-sm text-slate-500 mt-1.5 max-w-lg mx-auto leading-relaxed">
                    We have ready stock available at our Farooq Center, Gujranwala shop! Contact Muhammad Basil on WhatsApp to get instant live photos, model compatibility, and wholesale/retail rates.
                </p>
                <div class="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <a href="https://api.whatsapp.com/send?phone=923044614270&text=Assalam-o-Alaikum%20Muhammad%20Basil%20bhai!%20I%20want%20to%20inquire%20about%20${encodeURIComponent(catName)}%20available%20at%20MB%20Accessories." target="_blank" rel="noopener noreferrer" class="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-md shadow-emerald-600/20 flex items-center gap-2">
                        <i class="fa-brands fa-whatsapp text-base"></i>
                        <span>Inquire ${catName} via WhatsApp</span>
                    </a>
                    <button onclick="document.getElementById('reset-filters-btn').click()" class="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition">
                        View All Products
                    </button>
                </div>
            </div>
        `;
        return;
    }

    container.innerHTML = filtered.map((p, idx) => createProductCardHTML(p, idx)).join('');
}

/* ==========================================================================
   Categories Page (categories.html)
   ========================================================================== */
function renderAllCategoriesPage() {
    const container = document.getElementById('all-categories-container');
    if (!container) return;

    container.innerHTML = CATEGORIES.map((cat, idx) => {
        const catProducts = PRODUCTS.filter(p => p.category === cat.id);
        const sampleItems = catProducts.slice(0, 3);

        return `
        <div class="category-card glow-card group bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between reveal stagger-${(idx % 6) + 1}">
            <!-- Top Image Banner -->
            <div class="relative h-52 w-full bg-slate-900 overflow-hidden">
                <img src="${cat.image}" alt="${cat.name}" loading="lazy" class="cat-img w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                
                <div class="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-blue-600 text-white backdrop-blur-md flex items-center justify-center text-xl shadow-lg group-hover:scale-105 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <i class="${cat.icon}"></i>
                </div>

                <div class="absolute bottom-4 left-5 right-5">
                    <span class="text-[11px] uppercase font-bold text-cyan-400 tracking-wider">Muhammad Basil Shop</span>
                    <h3 class="text-2xl font-black text-white mt-0.5 tracking-tight">${cat.name}</h3>
                </div>
            </div>

            <!-- Content Area -->
            <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">${cat.description}</p>

                    <!-- Popular Items Sample -->
                    <div class="mt-5 pt-4 border-t border-slate-100">
                        ${sampleItems.length > 0 ? `
                            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Available in this section:</span>
                            <ul class="space-y-1.5">
                                ${sampleItems.map(item => `
                                    <li class="text-xs text-slate-700 flex items-center gap-2">
                                        <i class="fa-solid fa-circle-check text-emerald-500 text-[10px]"></i>
                                        <span class="truncate font-medium">${item.name}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        ` : `
                            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Inventory Status:</span>
                            <div class="py-2 flex items-center gap-2 text-xs text-amber-600 font-medium">
                                <i class="fa-solid fa-clock-rotate-left text-[11px]"></i>
                                <span>Fresh stock arriving soon — Inquire on WhatsApp</span>
                            </div>
                        `}
                    </div>
                </div>

                <!-- Action Button -->
                <div class="mt-6 pt-4 border-t border-slate-100">
                    <a href="${sampleItems.length > 0 ? `products.html?category=${cat.id}` : `https://wa.me/923044614270?text=Hi%20Muhammad%20Basil!%20Do%20you%20have%20stock%20for%20${encodeURIComponent(cat.name)}?`}" ${sampleItems.length === 0 ? 'target="_blank"' : ''} class="w-full ${sampleItems.length > 0 ? 'bg-slate-900 group-hover:bg-blue-600' : 'bg-emerald-600 hover:bg-emerald-700'} text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition duration-300 shadow-sm active:scale-98">
                        <span>${sampleItems.length > 0 ? `View All ${cat.name}` : `Inquire on WhatsApp`}</span>
                        <i class="${sampleItems.length > 0 ? 'fa-solid fa-arrow-right text-[11px] group-hover:translate-x-1' : 'fa-brands fa-whatsapp text-sm'} transition-transform"></i>
                    </a>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

/* ==========================================================================
   Quick View Modal with Fluid Spring Entrance & Exit Transitions
   ========================================================================== */
function openQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    let modal = document.getElementById('quick-view-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'quick-view-modal';
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6';
        document.body.appendChild(modal);
    }

    const inBag = inquiryBag.some(item => item.id === product.id);
    const discountPercent = product.originalPrice 
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
        : 0;

    modal.innerHTML = `
        <div class="modal-backdrop fixed inset-0" onclick="closeQuickView()"></div>
        <div class="modal-content glow-card glow-card-featured relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row">
            <!-- Close Button -->
            <button onclick="closeQuickView()" class="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition active:scale-95" title="Close Modal (Esc)">
                <i class="fa-solid fa-xmark text-sm"></i>
            </button>

            <!-- Image Section -->
            <div class="md:w-1/2 bg-slate-100 flex items-center justify-center p-6 relative">
                ${product.badge ? `<span class="absolute top-4 left-4 z-10 badge-custom bg-blue-600 text-white">${product.badge}</span>` : ''}
                <img src="${product.image}" alt="${product.name}" class="w-full max-h-80 object-contain rounded-2xl transition-transform duration-300 hover:scale-105" onerror="this.src='https://images.unsplash.com/photo-1601593346740-925612772716?w=600&auto=format&fit=crop&q=80'">
            </div>

            <!-- Details Section -->
            <div class="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
                <div>
                    <span class="text-xs uppercase font-bold tracking-wider text-blue-600">${formatCategoryName(product.category)}</span>
                    <h2 class="text-xl sm:text-2xl font-bold text-slate-900 mt-1 leading-snug">${product.name}</h2>
                    
                    <!-- Rating & Reviews -->
                    <div class="flex items-center gap-2 mt-2 text-xs">
                        <div class="flex text-amber-500">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <span class="font-bold text-slate-800">${product.rating}</span>
                        <span class="text-slate-400">(${product.reviewsCount} customer reviews)</span>
                    </div>

                    <!-- Price -->
                    <div class="mt-4 flex items-baseline gap-3">
                        <span class="text-2xl sm:text-3xl font-black text-slate-900">${STORE_CONFIG.currency} ${product.price.toLocaleString()}</span>
                        ${product.originalPrice ? `
                            <span class="text-sm text-slate-400 line-through">${STORE_CONFIG.currency} ${product.originalPrice.toLocaleString()}</span>
                            <span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Save ${discountPercent}%</span>
                        ` : ''}
                    </div>

                    <!-- Description -->
                    <p class="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">${product.shortDesc}</p>

                    <!-- Specifications List -->
                    <div class="mt-4">
                        <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Key Highlights:</span>
                        <ul class="space-y-1.5">
                            ${product.specs.map(spec => `
                                <li class="text-xs text-slate-700 flex items-center gap-2">
                                    <i class="fa-solid fa-circle-check text-blue-600 text-[11px]"></i>
                                    <span>${spec}</span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <!-- Compatibility -->
                    ${product.compatibility ? `
                        <div class="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-700">
                            <span class="font-bold text-slate-900">Device Compatibility:</span> ${product.compatibility}
                        </div>
                    ` : ''}
                </div>

                <!-- CTAs -->
                <div class="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                    <a href="${generateWhatsAppLink(product)}" target="_blank" rel="noopener noreferrer" class="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs shadow-md transition active:scale-98">
                        <i class="fa-brands fa-whatsapp text-base"></i>
                        <span>Order Now on WhatsApp</span>
                    </a>
                    <button onclick="toggleInquiryBag('${product.id}'); updateModalInquiryButton('${product.id}')" id="modal-inquiry-btn" class="px-4 py-3 rounded-xl text-xs font-bold border ${inBag ? 'bg-amber-500 text-white border-amber-500' : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'} transition flex items-center justify-center gap-2 active:scale-95">
                        <i class="fa-solid ${inBag ? 'fa-check' : 'fa-list-check'}"></i>
                        <span>${inBag ? 'Added' : 'Add to List'}</span>
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    const modal = document.getElementById('quick-view-modal');
    if (!modal) return;
    
    const content = modal.querySelector('.modal-content');
    const backdrop = modal.querySelector('.modal-backdrop');
    if (content) content.classList.add('closing');
    if (backdrop) backdrop.classList.add('closing');
    
    setTimeout(() => {
        if (modal) modal.remove();
        document.body.style.overflow = '';
    }, 220);
}

function updateModalInquiryButton(productId) {
    const btn = document.getElementById('modal-inquiry-btn');
    if (!btn) return;
    const inBag = inquiryBag.some(item => item.id === productId);
    if (inBag) {
        btn.className = 'px-4 py-3 rounded-xl text-xs font-bold border bg-amber-500 text-white border-amber-500 transition flex items-center justify-center gap-2 active:scale-95';
        btn.innerHTML = `<i class="fa-solid fa-check"></i><span>Added</span>`;
    } else {
        btn.className = 'px-4 py-3 rounded-xl text-xs font-bold border bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 transition flex items-center justify-center gap-2 active:scale-95';
        btn.innerHTML = `<i class="fa-solid fa-list-check"></i><span>Add to List</span>`;
    }
}

/* ==========================================================================
   Inquiry Bag / Wishlist Management
   ========================================================================== */
function initInquiryBag() {
    updateBagBadge();
}

function toggleInquiryBag(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const index = inquiryBag.findIndex(item => item.id === productId);
    if (index > -1) {
        inquiryBag.splice(index, 1);
        showToast(`Removed "${product.name.slice(0, 25)}..." from Inquiry List`);
    } else {
        inquiryBag.push(product);
        showToast(`Added "${product.name.slice(0, 25)}..." to Inquiry List!`);
    }

    localStorage.setItem('mb_inquiry_bag', JSON.stringify(inquiryBag));
    updateBagBadge();
    
    // Refresh current card state
    document.querySelectorAll(`[data-product-id="${productId}"]`).forEach(card => {
        const inBag = inquiryBag.some(item => item.id === productId);
        const iconBtn = card.querySelector('.fa-list-check, .fa-check');
        if (iconBtn) {
            const btn = iconBtn.closest('button');
            if (inBag) {
                btn.className = 'w-9 h-9 rounded-full bg-amber-500 text-white shadow-md flex items-center justify-center transition active:scale-95';
                iconBtn.className = 'fa-solid fa-check text-sm';
            } else {
                btn.className = 'w-9 h-9 rounded-full bg-white text-slate-700 shadow-md flex items-center justify-center hover:bg-amber-500 hover:text-white transition active:scale-95';
                iconBtn.className = 'fa-solid fa-list-check text-sm';
            }
        }
    });

    renderInquiryDrawerItems();
}

function removeInquiryItem(productId, event) {
    if (event) {
        event.stopPropagation();
        const row = event.target.closest('.inquiry-item');
        if (row) {
            row.classList.add('removing');
            setTimeout(() => {
                toggleInquiryBag(productId);
            }, 260);
            return;
        }
    }
    toggleInquiryBag(productId);
}

function updateBagBadge() {
    const count = inquiryBag.length;
    const badges = document.querySelectorAll('.inquiry-badge');
    badges.forEach(b => {
        b.textContent = count;
        if (count > 0) {
            b.classList.remove('hidden');
            b.classList.remove('badge-pop');
            void b.offsetWidth; // trigger reflow for animation restart
            b.classList.add('badge-pop');
        } else {
            b.classList.add('hidden');
        }
    });

    // Micro-bounce on inquiry bag button icons
    const bagBtns = [document.getElementById('inquiry-bag-btn'), document.getElementById('mobile-inquiry-bag-btn')];
    bagBtns.forEach(btn => {
        if (btn) {
            btn.style.transform = 'scale(1.15)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 200);
        }
    });
}

function renderInquiryDrawerItems() {
    const container = document.getElementById('inquiry-items-container');
    const totalElem = document.getElementById('inquiry-total-estimate');
    const whatsappBtn = document.getElementById('inquiry-send-whatsapp-btn');
    if (!container) return;

    if (inquiryBag.length === 0) {
        container.innerHTML = `
            <div class="text-center py-16">
                <div class="w-16 h-16 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center text-2xl mb-3">
                    <i class="fa-solid fa-clipboard-list"></i>
                </div>
                <h4 class="font-bold text-slate-800">Your Inquiry List is Empty</h4>
                <p class="text-xs text-slate-500 mt-1">Browse accessories and add products you'd like to ask about or order!</p>
            </div>
        `;
        if (totalElem) totalElem.textContent = `${STORE_CONFIG.currency} 0`;
        if (whatsappBtn) {
            whatsappBtn.classList.add('opacity-50', 'pointer-events-none');
            whatsappBtn.href = '#';
        }
        return;
    }

    let total = 0;
    container.innerHTML = inquiryBag.map((item) => {
        total += item.price;
        return `
        <div class="inquiry-item flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200/80" data-inquiry-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" class="w-14 h-14 object-cover rounded-xl bg-white border border-slate-200 flex-shrink-0" onerror="this.src='https://images.unsplash.com/photo-1601593346740-925612772716?w=600&auto=format&fit=crop&q=80'">
            <div class="flex-1 min-w-0">
                <h5 class="text-xs font-bold text-slate-900 truncate">${item.name}</h5>
                <span class="text-xs font-bold text-blue-600 block mt-0.5">${STORE_CONFIG.currency} ${item.price.toLocaleString()}</span>
            </div>
            <button onclick="removeInquiryItem('${item.id}', event)" title="Remove" class="w-8 h-8 rounded-full bg-white text-slate-400 hover:text-red-500 hover:bg-red-50 flex items-center justify-center transition border border-slate-200 active:scale-95">
                <i class="fa-solid fa-trash-can text-xs"></i>
            </button>
        </div>
        `;
    }).join('');

    if (totalElem) totalElem.textContent = `${STORE_CONFIG.currency} ${total.toLocaleString()}`;
    
    if (whatsappBtn) {
        whatsappBtn.classList.remove('opacity-50', 'pointer-events-none');
        whatsappBtn.href = generateBulkWhatsAppLink();
    }
}

/* ==========================================================================
   WhatsApp Link Generators (Universal - Works with Personal & Regular WhatsApp)
   ========================================================================== */
function generateWhatsAppLink(product) {
    const text = `Assalam-o-Alaikum Muhammad Basil bhai! 👋\n\nI want to order / inquire about:\n📌 *${product.name}*\n💰 Price: ${STORE_CONFIG.currency} ${product.price.toLocaleString()}\n\nIs this in stock at Farooq Center, Gujranwala?`;
    return `https://api.whatsapp.com/send?phone=${STORE_CONFIG.whatsappNumber}&text=${encodeURIComponent(text)}`;
}

function generateBulkWhatsAppLink() {
    if (inquiryBag.length === 0) return `https://api.whatsapp.com/send?phone=${STORE_CONFIG.whatsappNumber}`;
    let text = `Assalam-o-Alaikum Muhammad Basil bhai! 👋\n\nI would like to order these items from your shop:\n\n`;
    let total = 0;

    inquiryBag.forEach((item, i) => {
        total += item.price;
        text += `${i + 1}. *${item.name}* (${STORE_CONFIG.currency} ${item.price.toLocaleString()})\n`;
    });

    text += `\n💵 Total: ${STORE_CONFIG.currency} ${total.toLocaleString()}`;
    text += `\n\nPlease confirm availability and dispatch details.`;

    return `https://api.whatsapp.com/send?phone=${STORE_CONFIG.whatsappNumber}&text=${encodeURIComponent(text)}`;
}

function initFloatingWhatsApp() {
    const floatBtn = document.getElementById('floating-whatsapp');
    if (floatBtn) {
        const text = `Assalam-o-Alaikum Muhammad Basil bhai! I am browsing your website and have an inquiry.`;
        floatBtn.href = `https://api.whatsapp.com/send?phone=${STORE_CONFIG.whatsappNumber}&text=${encodeURIComponent(text)}`;
    }
}

function initWhatsAppTooltip() {
    const floatBtn = document.getElementById('floating-whatsapp');
    if (floatBtn && !floatBtn.querySelector('.whatsapp-tooltip')) {
        const tooltip = document.createElement('span');
        tooltip.className = 'whatsapp-tooltip';
        tooltip.textContent = 'Chat on WhatsApp';
        floatBtn.appendChild(tooltip);
    }
}

/* ==========================================================================
   Toast Notification Utility with Animated Countdown Progress Bar
   ========================================================================== */
function showToast(message, icon = 'fa-circle-check') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="fa-solid ${icon} text-emerald-400 text-base flex-shrink-0"></i>
        <span class="flex-1">${message}</span>
        <div class="toast-progress"></div>
    `;

    container.appendChild(toast);
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    const dismissTimeout = setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 350);
    }, 3200);

    toast.addEventListener('click', () => {
        clearTimeout(dismissTimeout);
        toast.classList.remove('show');
        toast.classList.add('removing');
        setTimeout(() => toast.remove(), 350);
    });
}

/* ==========================================================================
   Contact Page Form Handling with Button Feedback
   ========================================================================== */
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalContent = submitBtn ? submitBtn.innerHTML : '';

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <i class="fa-solid fa-circle-notch fa-spin text-lg"></i>
                <span>Opening WhatsApp Chat...</span>
            `;
            submitBtn.style.opacity = '0.9';
        }

        const name = form.elements['name'] ? form.elements['name'].value : '';
        const phone = form.elements['phone'] ? form.elements['phone'].value : '';
        const message = form.elements['message'] ? form.elements['message'].value : '';

        const waText = `Assalam-o-Alaikum Muhammad Basil bhai!\n\nMy name is *${name}* (${phone}).\nMessage: ${message}`;
        
        setTimeout(() => {
            window.open(`https://api.whatsapp.com/send?phone=${STORE_CONFIG.whatsappNumber}&text=${encodeURIComponent(waText)}`, '_blank');
            showToast('Opening WhatsApp chat with Muhammad Basil (0304-4614270)...');
            form.reset();
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalContent;
                submitBtn.style.opacity = '';
            }
        }, 400);
    });
}

/* ==========================================================================
   Scroll Reveal System (IntersectionObserver with Progressive Enhancement)
   ========================================================================== */
function initScrollReveal() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const selectors = [
        '.trust-badge-card',
        '.review-card',
        '.pillar-card',
        '.faq-card',
        '#home-categories-grid > a',
        '#all-categories-container > div',
        'footer .grid > div'
    ];

    const targets = document.querySelectorAll(selectors.join(', '));
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) {
        targets.forEach(el => el.classList.add('is-revealed'));
        return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
    });

    targets.forEach((el, index) => {
        el.classList.add('reveal');
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            setTimeout(() => {
                el.classList.add('is-revealed');
            }, Math.min(index * 60, 300));
        } else {
            observer.observe(el);
        }
    });
}

/* ==========================================================================
   Animated Statistics & Number Counters
   ========================================================================== */
function initStatsCounters() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const statElements = Array.from(document.querySelectorAll('.font-extrabold, .font-black')).filter(el => {
        const text = el.textContent.trim();
        return /^(9\+|100%|10,000\+|7\s*Days)$/i.test(text);
    });

    if (!statElements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statElements.forEach(el => observer.observe(el));

    function animateCounter(el) {
        const text = el.textContent.trim();
        let targetNum = 0;
        let suffix = '';

        if (text.includes('10,000+')) {
            targetNum = 10000;
            suffix = '+';
        } else if (text.includes('100%')) {
            targetNum = 100;
            suffix = '%';
        } else if (text.includes('9+')) {
            targetNum = 9;
            suffix = '+';
        } else if (text.includes('7 Days')) {
            targetNum = 7;
            suffix = ' Days';
        } else {
            return;
        }

        const duration = 1200;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentVal = Math.round(targetNum * easeOut);

            if (targetNum >= 1000) {
                el.textContent = `${currentVal.toLocaleString()}${suffix}`;
            } else {
                el.textContent = `${currentVal}${suffix}`;
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = text; // Ensure exact final string is preserved
            }
        }

        requestAnimationFrame(update);
    }
}

/* ==========================================================================
   Floating Back-to-Top Button
   ========================================================================== */
function initBackToTop() {
    let btn = document.getElementById('back-to-top');
    if (!btn) {
        btn = document.createElement('button');
        btn.id = 'back-to-top';
        btn.setAttribute('aria-label', 'Scroll to top of page');
        btn.setAttribute('title', 'Back to top');
        btn.innerHTML = `<i class="fa-solid fa-arrow-up text-sm"></i>`;
        document.body.appendChild(btn);
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 350) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/* ==========================================================================
   Primary Action Button Shimmer Effect
   ========================================================================== */
function initButtonShimmer() {
    const primaryButtons = document.querySelectorAll('a.bg-blue-600, a.from-blue-600, button.bg-blue-600');
    primaryButtons.forEach(btn => {
        btn.classList.add('btn-shimmer');
    });
}
