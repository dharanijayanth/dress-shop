/**
 * ZINZU DRESS SHOP - MAIN JASVASCRIPT CONTROLLER
 * Pure frontend logic for catalog filtering, WhatsApp link generation, modal lightboxes & animations.
 */

// ==========================================
// 1. CONFIGURATION & WHATSAPP SETTINGS
// ==========================================
// Replace this with your shop's actual WhatsApp phone number (with country code, no + or spaces)
const SHOP_WHATSAPP_NUMBER = '917825957949';
const SHOP_WHATSAPP_DISPLAY = '+91 78259 57949';

// ==========================================
// 2. PRODUCT CATALOG DATA
// ==========================================
const DRESS_CATALOG = [
  // CASUAL WEAR (12 Items)
  {
    id: 'dress-1',
    name: 'LIVA Viscose Printed Casual Co-ord Set',
    price: 699,
    category: 'Casual Wear',
    sizeRange: 'S – XXL',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    description: 'Effortless LIVA certified soft viscose cotton co-ord set featuring a printed button-down tunic top & matching cropped trousers.',
    isFeatured: true
  },
  {
    id: 'dress-2',
    name: 'Peach Blossom Tiered Casual Maxi Dress',
    price: 799,
    category: 'Casual Wear',
    sizeRange: 'XS – XXL',
    badge: 'Casual Chic',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80',
    description: 'Breezy multi-tiered floral printed casual maxi dress with adjustable shoulder ribbon ties and cotton lining.',
    isFeatured: true
  },
  {
    id: 'dress-3',
    name: 'Pastel Mint Pure Linen Casual Shirt & Pant Set',
    price: 749,
    category: 'Casual Wear',
    sizeRange: 'S – XXL',
    badge: 'Minimalist',
    image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=800&q=80',
    description: 'Minimalist pastel mint pure linen collared shirt set with wooden buttons and front-pleated casual pants.',
    isFeatured: true
  },
  {
    id: 'dress-4',
    name: 'Meadow Jaipur Handblock Printed Midi Dress',
    price: 499,
    category: 'Casual Wear',
    sizeRange: 'XS – XL',
    badge: 'Super Value',
    image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?auto=format&fit=crop&w=800&q=80',
    description: 'Handblock printed mulmul cotton casual midi dress with soft elastic neckline and zero-itch cotton lining.',
    isFeatured: false
  },
  {
    id: 'dress-5',
    name: 'Dusty Blue Peplum Tunic & Trouser Set',
    price: 649,
    category: 'Casual Wear',
    sizeRange: 'S – XXL',
    badge: 'Popular Pick',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80',
    description: 'Chic dusty blue flared peplum tunic paired with slim-fit ankle length casual trousers.',
    isFeatured: false
  },
  {
    id: 'dress-6',
    name: 'Boho Tassel Embroidered Cotton Tunic Top',
    price: 549,
    category: 'Casual Wear',
    sizeRange: 'XS – XL',
    badge: 'Daily Comfort',
    image: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=800&q=80',
    description: 'Hand-embroidered white cotton tunic top with colourful tassel ties and bell sleeves.',
    isFeatured: false
  },
  {
    id: 'dress-7',
    name: 'Lavender Gingham Plaid Casual Co-ord Set',
    price: 699,
    category: 'Casual Wear',
    sizeRange: 'XS – L',
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80',
    description: 'Cute gingham plaid crop top and wide-leg trousers set. Premium pre-washed breathable cotton.',
    isFeatured: false
  },
  {
    id: 'dress-8',
    name: 'Botanical Garden Tiered Wrap Casual Maxi',
    price: 899,
    category: 'Casual Wear',
    sizeRange: 'S – XXL',
    badge: 'Summer Style',
    image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=800&q=80',
    description: 'Flowy botanical garden floral printed wrap-front casual maxi dress with flutter sleeves.',
    isFeatured: false
  },
  {
    id: 'dress-9',
    name: 'Printed Cotton Tunic & Shorts Casual Set',
    price: 599,
    category: 'Casual Wear',
    sizeRange: 'XS – XL',
    badge: 'Casual Chic',
    image: 'https://images.unsplash.com/photo-1550639525-c97d455acf70?auto=format&fit=crop&w=800&q=80',
    description: 'Soft Jaipur block printed tunic top paired with elasticated cotton casual shorts.',
    isFeatured: false
  },
  {
    id: 'dress-10',
    name: 'Sweet Tulip Printed A-Line Casual Dress',
    price: 599,
    category: 'Casual Wear',
    sizeRange: 'XS – XL',
    badge: 'New Arrival',
    image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=800&q=80',
    description: 'Soft combed cotton casual dress with cheerful tulip prints and breathable cotton inner lining.',
    isFeatured: false
  },
  {
    id: 'dress-11',
    name: 'Sage Green Linen Casual Tunic & Trousers',
    price: 749,
    category: 'Casual Wear',
    sizeRange: 'S – XXL',
    badge: 'Daily Wear',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    description: 'Calm sage green casual tunic with mandarin collar and matching straight-cut cotton trousers.',
    isFeatured: false
  },
  {
    id: 'dress-12',
    name: 'Classic Tartan Plaid Casual Holiday Dress',
    price: 999,
    category: 'Casual Wear',
    sizeRange: 'S – XL',
    badge: 'Holiday Special',
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=800&q=80',
    description: 'Traditional red & green tartan plaid cotton dress with ribbon sash and soft cotton lining.',
    isFeatured: false
  },

  // TRADITIONAL WEAR (12 Items)
  {
    id: 'dress-13',
    name: 'Traditional Kanjivaram Pure Silk Pattu Set',
    price: 1299,
    category: 'Traditional Wear',
    sizeRange: 'S – XXL',
    badge: 'Heritage Silk',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    description: 'Traditional South Indian pure silk Pattu Pavadai skirt paired with rich zari embroidered blouse.',
    isFeatured: true
  },
  {
    id: 'dress-14',
    name: 'Alia Cut Lucknowi Chikankari Anarkali Suit',
    price: 1399,
    category: 'Traditional Wear',
    sizeRange: 'S – XXL',
    badge: 'Handcrafted',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    description: 'Soft pastel peach Lucknowi thread hand-embroidered muslin cotton Anarkali suit with chiffon dupatta.',
    isFeatured: true
  },
  {
    id: 'dress-15',
    name: 'Chanderi Cotton Silk Kurti & Palazzo Set',
    price: 799,
    category: 'Traditional Wear',
    sizeRange: 'S – XXL',
    badge: 'Festive Budget',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80',
    description: 'Lightweight Chanderi cotton kurti paired with comfy flared palazzo trousers and metallic lace trim.',
    isFeatured: true
  },
  {
    id: 'dress-16',
    name: 'Blush Pink Organza Flared Lehenga Set',
    price: 1699,
    category: 'Traditional Wear',
    sizeRange: 'S – XXL',
    badge: 'Festive Wear',
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80',
    description: 'Lightweight organza lehenga skirt decorated with subtle floral sequins paired with embroidered silk blouse.',
    isFeatured: true
  },
  {
    id: 'dress-17',
    name: 'Gold Zari Brocade Silk Pattu Pavadai Set',
    price: 1899,
    category: 'Traditional Wear',
    sizeRange: 'S – XXL',
    badge: 'Pure Silk',
    image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=80',
    description: 'Traditional South Indian Pattu Pavadai woven with heavy gold zari borders and contrasting silk blouse.',
    isFeatured: false
  },
  {
    id: 'dress-18',
    name: 'South Indian Temple Border Silk Lehenga',
    price: 1499,
    category: 'Traditional Wear',
    sizeRange: 'S – XXL',
    badge: 'Royal Silk',
    image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=800&q=80',
    description: 'Rich temple border silk woven traditional lehenga skirt with matching embroidered zari blouse.',
    isFeatured: false
  },
  {
    id: 'dress-19',
    name: 'Jaipur Handblock Printed Muslin Ethnic Suit',
    price: 699,
    category: 'Traditional Wear',
    sizeRange: 'XS – XL',
    badge: 'Super Value',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=800&q=80',
    description: 'Pure cotton muslin A-line printed kurti with pants and lightweight dupatta.',
    isFeatured: false
  },
  {
    id: 'dress-20',
    name: 'Mirror-Work Embroidered Silk Anarkali Suit',
    price: 1599,
    category: 'Traditional Wear',
    sizeRange: 'S – XXL',
    badge: 'Wedding Luxe',
    image: 'https://images.unsplash.com/photo-1610030469668-9887034638a1?auto=format&fit=crop&w=800&q=80',
    description: 'Floor-length silk Anarkali suit studded with real mirror-work embroidery and net dupatta.',
    isFeatured: false
  },
  {
    id: 'dress-21',
    name: 'Royal Plum Brocade Silk Festive Kurti Set',
    price: 1199,
    category: 'Traditional Wear',
    sizeRange: 'S – XXL',
    badge: 'Festive Favorite',
    image: 'https://images.unsplash.com/photo-1585487000160-a47cd5749f7b?auto=format&fit=crop&w=800&q=80',
    description: 'Deep ruby plum brocade jacquard silk kurti with golden zari weave and soft inner lining.',
    isFeatured: false
  },
  {
    id: 'dress-22',
    name: 'Pastel Peach Organza Dupatta Kurti Set',
    price: 999,
    category: 'Traditional Wear',
    sizeRange: 'S – XXL',
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1621600411688-4be93cd68504?auto=format&fit=crop&w=800&q=80',
    description: 'Pastel peach silk blend kurti paired with organza floral digital print dupatta.',
    isFeatured: false
  },
  {
    id: 'dress-23',
    name: 'Hand-Embroidered Bandhani Silk Suit Set',
    price: 1299,
    category: 'Traditional Wear',
    sizeRange: 'S – XXL',
    badge: 'Heritage Craft',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80',
    description: 'Traditional Gujarati Bandhani tie-dye printed silk kurti with hand-worked Gota Patti borders.',
    isFeatured: false
  },
  {
    id: 'dress-24',
    name: 'Fairytale Silk Blend Tiered Festival Lehenga',
    price: 2199,
    category: 'Traditional Wear',
    sizeRange: 'S – XXL',
    badge: 'Couture Fit',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80',
    description: 'Tiered silk lehenga skirt decorated with zardozi hand embroidery and organza dupatta.',
    isFeatured: false
  }
];

// State Variables
let currentFilter = 'all';
let searchQuery = '';
let currentSort = 'default';
let activeModalDress = null;
let activeModalSize = 'M';

// Shopping Cart State
let cartItems = JSON.parse(localStorage.getItem('zinzu_cart')) || [];

/**
 * Save cart state to localStorage and re-render cart UI
 */
function saveCart() {
  localStorage.setItem('zinzu_cart', JSON.stringify(cartItems));
  renderCartDrawer();
}

/**
 * Add item to cart
 */
function addToCart(dressId, size = '') {
  const dress = DRESS_CATALOG.find(d => d.id === dressId);
  if (!dress) return;

  // Determine fallback size from dress sizeRange (e.g., 'S – XXL' -> 'S') or default to 'M'
  let defaultSize = 'M';
  if (dress.sizeRange) {
    const parsedSize = dress.sizeRange.split('–')[0].split('-')[0].trim();
    if (parsedSize) defaultSize = parsedSize;
  }

  const itemSize = size || defaultSize;
  const cartKey = `${dress.id}_${itemSize}`;

  const existingIndex = cartItems.findIndex(item => item.cartKey === cartKey);
  if (existingIndex > -1) {
    cartItems[existingIndex].qty += 1;
  } else {
    cartItems.push({
      cartKey: cartKey,
      id: dress.id,
      name: dress.name,
      price: dress.price,
      image: dress.image,
      size: itemSize,
      qty: 1
    });
  }

  saveCart();
  showToastNotification(`Added "${dress.name}" (${itemSize}) to your bag! ✨`);
}

/**
 * Update cart item quantity
 */
function updateCartQuantity(cartKey, change) {
  const itemIndex = cartItems.findIndex(item => item.cartKey === cartKey);
  if (itemIndex > -1) {
    cartItems[itemIndex].qty += change;
    if (cartItems[itemIndex].qty <= 0) {
      cartItems.splice(itemIndex, 1);
    }
    saveCart();
  }
}

/**
 * Remove item from cart
 */
function removeFromCart(cartKey) {
  cartItems = cartItems.filter(item => item.cartKey !== cartKey);
  saveCart();
}

/**
 * Clear entire cart
 */
function clearCart() {
  cartItems = [];
  saveCart();
}

/**
 * Build pre-filled WhatsApp checkout URL from cart items
 */
function createCartWhatsAppCheckoutUrl() {
  if (cartItems.length === 0) {
    return createGeneralWhatsAppUrl('Hi Zinzu Atelier! I would like to inquire about dress availability.');
  }

  let text = `Hi Zinzu Atelier! 👋 I would like to place an order for the following items in my shopping bag:\n\n`;
  let grandTotal = 0;

  cartItems.forEach((item, idx) => {
    const itemTotal = item.price * item.qty;
    grandTotal += itemTotal;
    text += `${idx + 1}. *${item.name}* (Size: ${item.size}) x ${item.qty} = ₹${itemTotal.toLocaleString('en-IN')}\n`;
  });

  text += `\n*Total Amount:* ₹${grandTotal.toLocaleString('en-IN')}\n`;
  text += `Please confirm availability & delivery details!`;

  return `https://wa.me/${SHOP_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Render slide-over Cart Drawer content & badge counts
 */
function renderCartDrawer() {
  const totalCount = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);

  // Update Badges
  const badgeEl = document.getElementById('cart-badge-count');
  const headerCountEl = document.getElementById('cart-header-count');
  if (badgeEl) badgeEl.textContent = totalCount;
  if (headerCountEl) headerCountEl.textContent = totalCount;

  // Update Summary Prices
  const subtotalEl = document.getElementById('cart-subtotal-price');
  const totalEl = document.getElementById('cart-total-price');
  if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
  if (totalEl) totalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;

  // Update WhatsApp Checkout Button URL
  const checkoutBtn = document.getElementById('cart-checkout-wa-btn');
  if (checkoutBtn) {
    checkoutBtn.href = createCartWhatsAppCheckoutUrl();
  }

  // Render Items List
  const listEl = document.getElementById('cart-items-list');
  if (!listEl) return;

  if (cartItems.length === 0) {
    listEl.innerHTML = `
      <div class="cart-empty-msg">
        <i class="fa-solid fa-bag-shopping"></i>
        <h4>Your Shopping Bag is Empty</h4>
        <p>Explore our handmade dress collection and add items to your cart.</p>
      </div>
    `;
    return;
  }

  listEl.innerHTML = cartItems.map(item => `
    <div class="cart-item-card" data-key="${item.cartKey}">
      <img src="${item.image}" alt="" class="cart-item-img">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-meta">Size: ${item.size}</div>
        <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
        <div class="cart-qty-controls">
          <button class="cart-qty-btn qty-minus" data-key="${item.cartKey}">-</button>
          <span class="cart-qty-val">${item.qty}</span>
          <button class="cart-qty-btn qty-plus" data-key="${item.cartKey}">+</button>
        </div>
      </div>
      <button class="cart-remove-item remove-btn" data-key="${item.cartKey}" aria-label="Remove item">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  `).join('');

  // Attach Item Action Listeners
  listEl.querySelectorAll('.qty-minus').forEach(btn => {
    btn.onclick = () => updateCartQuantity(btn.dataset.key, -1);
  });
  listEl.querySelectorAll('.qty-plus').forEach(btn => {
    btn.onclick = () => updateCartQuantity(btn.dataset.key, 1);
  });
  listEl.querySelectorAll('.remove-btn').forEach(btn => {
    btn.onclick = () => removeFromCart(btn.dataset.key);
  });
}

/**
 * Show floating notification toast
 */
function showToastNotification(msg) {
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = msg;
  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

// ==========================================
// 3. WHATSAPP LINK GENERATOR
// ==========================================
/**
 * Creates a pre-filled WhatsApp link for product ordering using encodeURIComponent.
 */
function createWhatsAppOrderUrl(dressName, price, size = '') {
  let messageText = `Hi Zinzu! I'm interested in ordering: ${dressName} - ₹${price.toLocaleString('en-IN')}`;
  if (size) {
    messageText += ` (Size: ${size})`;
  }
  messageText += `. Could you please confirm availability & tailoring timeline?`;
  return `https://wa.me/${SHOP_WHATSAPP_NUMBER}?text=${encodeURIComponent(messageText)}`;
}

/**
 * Creates a general inquiry WhatsApp URL.
 */
function createGeneralWhatsAppUrl(customMessage = '') {
  const defaultText = customMessage || `Hi Zinzu Atelier! I would like to inquire about your girls handmade dress collections & custom sizing.`;
  return `https://wa.me/${SHOP_WHATSAPP_NUMBER}?text=${encodeURIComponent(defaultText)}`;
}

// ==========================================
// 4. RENDERING FUNCTIONS
// ==========================================

/**
 * Render single product card HTML
 */
function renderProductCard(dress) {
  const waUrl = createWhatsAppOrderUrl(dress.name, dress.price, dress.sizeRange);

  return `
    <article class="product-card" data-id="${dress.id}" data-category="${dress.category}">
      <div class="product-img-wrapper">
        <img src="${dress.image}" alt="" loading="lazy">
        <span class="product-badge">${dress.badge}</span>
        <button class="quick-view-btn" data-id="${dress.id}">
          <i class="fa-regular fa-eye"></i> Quick View
        </button>
      </div>
      <div class="product-content">
        <div class="product-meta">
          <div>
            <span class="product-category-tag">${dress.category}</span>
            <span class="age-badge">${dress.sizeRange}</span>
          </div>
          <span class="product-price">₹${dress.price.toLocaleString('en-IN')}</span>
        </div>
        <h3 class="product-title">${dress.name}</h3>
        <p class="product-description-snippet">${dress.description}</p>
        <div class="product-card-footer">
          <div class="card-btn-group">
            <button class="btn btn-add-cart add-to-cart-btn" data-id="${dress.id}">
              <i class="fa-solid fa-bag-shopping"></i> Add to Cart
            </button>
            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-wa-card" style="width: auto; padding: 10px 14px;" aria-label="Order on WhatsApp">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </article>
  `;
}

/**
 * Render main product grid with filtering & sorting applied
 */
function renderProductGrid() {
  const gridElement = document.getElementById('product-grid');
  const noProductsElement = document.getElementById('no-products-msg');
  if (!gridElement) return;

  // Filter Catalog
  let filtered = DRESS_CATALOG.filter(dress => {
    const matchesCategory = (currentFilter === 'all') || (dress.category === currentFilter);
    const matchesSearch = dress.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dress.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dress.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort Catalog
  if (currentSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Inject HTML
  if (filtered.length === 0) {
    gridElement.innerHTML = '';
    noProductsElement?.classList.remove('hidden');
  } else {
    noProductsElement?.classList.add('hidden');
    gridElement.innerHTML = filtered.map(renderProductCard).join('');
  }

  // Re-attach card button listeners
  attachQuickViewEvents();
}

/**
 * Render Featured / New Arrivals Carousel
 */
function renderFeaturedCarousel() {
  const track = document.getElementById('featured-carousel-track');
  if (!track) return;

  const featuredDresses = DRESS_CATALOG.filter(d => d.isFeatured);
  track.innerHTML = featuredDresses.map(dress => `
    <div class="carousel-item">
      ${renderProductCard(dress)}
    </div>
  `).join('');

  attachQuickViewEvents();
}

// ==========================================
// 5. EVENT HANDLERS & MODAL LOGIC
// ==========================================

/**
 * Open Quick View Modal for selected product
 */
function openQuickViewModal(dressId) {
  const dress = DRESS_CATALOG.find(d => d.id === dressId);
  if (!dress) return;

  activeModalDress = dress;
  activeModalSize = 'M';

  const modal = document.getElementById('quick-view-modal');
  const imgEl = document.getElementById('modal-img');
  const catEl = document.getElementById('modal-category');
  const titleEl = document.getElementById('modal-title');
  const priceEl = document.getElementById('modal-price');
  const descEl = document.getElementById('modal-description');

  if (imgEl) imgEl.src = dress.image;
  if (catEl) catEl.textContent = `${dress.category} • Sizes ${dress.sizeRange}`;
  if (titleEl) titleEl.textContent = dress.name;
  if (priceEl) priceEl.textContent = `₹${dress.price.toLocaleString('en-IN')}`;
  if (descEl) descEl.textContent = dress.description;

  // Reset size active states
  const sizeBtns = document.querySelectorAll('#size-options .size-btn');
  sizeBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.size === activeModalSize);
  });

  // Update modal WhatsApp URL
  updateModalWhatsAppUrl();

  modal?.classList.remove('hidden');
}

/**
 * Update modal WhatsApp order button URL based on current selected size
 */
function updateModalWhatsAppUrl() {
  const waBtnEl = document.getElementById('modal-wa-btn');
  if (waBtnEl && activeModalDress) {
    waBtnEl.href = createWhatsAppOrderUrl(activeModalDress.name, activeModalDress.price, activeModalSize);
  }
}

/**
 * Attach click listeners to Quick View and Add to Cart buttons on product cards
 */
function attachQuickViewEvents() {
  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      openQuickViewModal(btn.dataset.id);
    };
  });

  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      addToCart(btn.dataset.id);
    };
  });
}

// ==========================================
// 6. INITIALIZATION & LISTENERS SETUP
// ==========================================
document.addEventListener('DOMContentLoaded', () => {

  // Update Footer Year
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Set WhatsApp Display Numbers & General Action Links
  const waDisplayEl = document.getElementById('contact-wa-num-display');
  if (waDisplayEl) waDisplayEl.textContent = SHOP_WHATSAPP_DISPLAY;

  const headerWaBtn = document.getElementById('header-wa-btn');
  if (headerWaBtn) headerWaBtn.href = createGeneralWhatsAppUrl('Hi Zinzu! I am browsing your website lookbook and would like to order a dress.');

  const contactWaBtn = document.getElementById('contact-section-wa-btn');
  if (contactWaBtn) contactWaBtn.href = createGeneralWhatsAppUrl('Hi Zinzu! I have a question regarding custom measurements and delivery timelines.');

  const floatWaBtn = document.getElementById('wa-float-btn');
  const popoverWaBtn = document.getElementById('wa-popover-btn');
  if (floatWaBtn) floatWaBtn.href = createGeneralWhatsAppUrl('Hi Zinzu Atelier! I am interested in your girls handmade dresses.');
  if (popoverWaBtn) popoverWaBtn.href = createGeneralWhatsAppUrl('Hi! I want to inquire about custom fitting & dress availability.');

  // Render initial components & cart
  renderProductGrid();
  renderFeaturedCarousel();
  renderCartDrawer();

  // Cart Drawer Toggle Handlers
  const cartOverlay = document.getElementById('cart-drawer-overlay');
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');

  cartToggleBtn?.addEventListener('click', () => {
    cartOverlay?.classList.remove('hidden');
  });

  closeCartBtn?.addEventListener('click', () => {
    cartOverlay?.classList.add('hidden');
  });

  cartOverlay?.addEventListener('click', (e) => {
    if (e.target === cartOverlay) {
      cartOverlay.classList.add('hidden');
    }
  });

  // Modal Add to Cart Button Handler
  document.getElementById('modal-add-cart-btn')?.addEventListener('click', () => {
    if (activeModalDress) {
      addToCart(activeModalDress.id, activeModalSize);
      document.getElementById('quick-view-modal')?.classList.add('hidden');
    }
  });

  // Clear Cart Button Handler
  document.getElementById('clear-cart-btn')?.addEventListener('click', () => {
    clearCart();
  });

  // Sticky Navbar Scroll Listener
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // Mobile Menu Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const toggleIcon = document.getElementById('toggle-icon');

  mobileToggle?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
    if (navMenu?.classList.contains('active')) {
      toggleIcon?.classList.replace('fa-bars', 'fa-xmark');
    } else {
      toggleIcon?.classList.replace('fa-xmark', 'fa-bars');
    }
  });

  // Close mobile nav menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('active');
      toggleIcon?.classList.replace('fa-xmark', 'fa-bars');
    });
  });

  // Category Filter Tabs Handler
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderProductGrid();
    });
  });

  // Shop by Occasion Grid Cards Listener (Clicking occasion card filters products section)
  document.querySelectorAll('.occasion-card').forEach(card => {
    card.addEventListener('click', () => {
      const selectedCat = card.dataset.category;
      if (selectedCat) {
        currentFilter = selectedCat;
        filterBtns.forEach(b => {
          b.classList.toggle('active', b.dataset.filter === selectedCat);
        });
        renderProductGrid();
        
        // Smooth scroll to products section
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Search Input Listener
  const searchInput = document.getElementById('search-input');
  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderProductGrid();
  });

  // Sort Select Listener
  const sortSelect = document.getElementById('sort-select');
  sortSelect?.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderProductGrid();
  });

  // Reset Filters Button
  document.getElementById('reset-filters-btn')?.addEventListener('click', () => {
    currentFilter = 'all';
    searchQuery = '';
    currentSort = 'default';
    if (searchInput) searchInput.value = '';
    if (sortSelect) sortSelect.value = 'default';
    filterBtns.forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
    renderProductGrid();
  });

  // Carousel Next/Prev Controls
  const carouselTrack = document.getElementById('featured-carousel-track');
  document.getElementById('carousel-next')?.addEventListener('click', () => {
    carouselTrack?.scrollBy({ left: 340, behavior: 'smooth' });
  });
  document.getElementById('carousel-prev')?.addEventListener('click', () => {
    carouselTrack?.scrollBy({ left: -340, behavior: 'smooth' });
  });

  // Modal Size Selection
  document.querySelectorAll('#size-options .size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#size-options .size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeModalSize = btn.dataset.size || '4-6Y';
      updateModalWhatsAppUrl();
    });
  });

  // Footer category link handlers
  document.querySelectorAll('.cat-footer-link').forEach(link => {
    link.addEventListener('click', () => {
      const selectedCat = link.dataset.cat;
      if (selectedCat) {
        currentFilter = selectedCat;
        filterBtns.forEach(b => {
          b.classList.toggle('active', b.dataset.filter === selectedCat);
        });
        renderProductGrid();
      }
    });
  });

  // Nav link category target handlers (Traditional & Casual)
  document.querySelectorAll('.nav-link[data-cat-target]').forEach(link => {
    link.addEventListener('click', () => {
      const cat = link.dataset.catTarget;
      if (cat) {
        currentFilter = cat;
        filterBtns.forEach(b => {
          b.classList.toggle('active', b.dataset.filter === cat);
        });
        renderProductGrid();
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Modal Close Button, Backdrop & Escape Key Click
  const modal = document.getElementById('quick-view-modal');
  document.getElementById('modal-close')?.addEventListener('click', () => {
    modal?.classList.add('hidden');
  });
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal?.classList.contains('hidden')) {
      modal?.classList.add('hidden');
      cartOverlay?.classList.add('hidden');
    }
  });

  // Floating WhatsApp Popover logic
  const waPopover = document.getElementById('wa-popover');
  const closeWaPopover = document.getElementById('close-wa-popover');
  
  // Show popover preview after 3 seconds
  setTimeout(() => {
    waPopover?.classList.add('active');
  }, 3000);

  closeWaPopover?.addEventListener('click', () => {
    waPopover?.classList.remove('active');
  });

  // Newsletter Form Handler
  const newsletterForm = document.getElementById('newsletter-form');
  const newsletterSuccess = document.getElementById('newsletter-success');
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    newsletterForm.reset();
    newsletterSuccess?.classList.remove('hidden');
    setTimeout(() => {
      newsletterSuccess?.classList.add('hidden');
    }, 4000);
  });

  // Active Nav Link Scroll Highlight Observer
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  window.addEventListener('scroll', () => {
    let currentSection = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${currentSection}`) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });

  // Scroll Reveal Observer (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => revealObserver.observe(el));
});
