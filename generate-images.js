/**
 * Image Generator Script for QuickCart E-commerce
 * Generates SVG images for all products, banners, categories, and deals
 */

const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, 'client', 'public', 'images');

// Ensure directories exist
['banners', 'deals', 'categories', 'products'].forEach(dir => {
    fs.mkdirSync(path.join(BASE, dir), { recursive: true });
});

// ============ CATEGORY ICONS ============
const categories = [
    { id: 'cat-1', name: 'Fruits & Vegetables', emoji: '🥬', colors: ['#43A047', '#66BB6A'] },
    { id: 'cat-2', name: 'Dairy & Breakfast', emoji: '🥛', colors: ['#7B1FA2', '#AB47BC'] },
    { id: 'cat-3', name: 'Snacks & Munchies', emoji: '🍿', colors: ['#F57F17', '#FDD835'] },
    { id: 'cat-4', name: 'Cold Drinks & Juices', emoji: '🥤', colors: ['#0277BD', '#29B6F6'] },
    { id: 'cat-5', name: 'Instant & Frozen Food', emoji: '🍜', colors: ['#C62828', '#EF5350'] },
    { id: 'cat-6', name: 'Tea, Coffee & Health', emoji: '☕', colors: ['#4E342E', '#8D6E63'] },
    { id: 'cat-7', name: 'Bakery & Biscuits', emoji: '🍞', colors: ['#E65100', '#FF9800'] },
    { id: 'cat-8', name: 'Sweet Tooth', emoji: '🍫', colors: ['#6A1B9A', '#BA68C8'] },
    { id: 'cat-9', name: 'Atta, Rice & Dal', emoji: '🌾', colors: ['#BF360C', '#FF7043'] },
    { id: 'cat-10', name: 'Masala, Oil & More', emoji: '🫙', colors: ['#B71C1C', '#E53935'] },
    { id: 'cat-11', name: 'Cleaning Essentials', emoji: '🧹', colors: ['#00695C', '#26A69A'] },
    { id: 'cat-12', name: 'Personal Care', emoji: '🧴', colors: ['#1565C0', '#42A5F5'] },
];

categories.forEach(cat => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${cat.colors[0]};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${cat.colors[1]};stop-opacity:1" />
    </linearGradient>
    <filter id="shadow">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.2"/>
    </filter>
  </defs>
  <rect width="200" height="200" rx="24" fill="url(#bg)"/>
  <circle cx="100" cy="85" r="50" fill="rgba(255,255,255,0.15)"/>
  <text x="100" y="105" font-size="64" text-anchor="middle" filter="url(#shadow)">${cat.emoji}</text>
  <text x="100" y="155" font-size="13" font-family="Arial, sans-serif" font-weight="bold" fill="white" text-anchor="middle" opacity="0.95">${cat.name}</text>
</svg>`;
    fs.writeFileSync(path.join(BASE, 'categories', `${cat.id}.svg`), svg);
});

console.log('✅ Generated 12 category icons');

// ============ BANNER IMAGES ============
const banners = [
    { id: 'banner-1', title: 'Fresh Fruits & Veggies', sub: 'Up to 40% OFF', emoji: '🥦🍎🥕🍊🍇', colors: ['#0C831F', '#16a34a'], shapes: 'fruit' },
    { id: 'banner-2', title: 'Dairy Essentials', sub: 'Starting ₹29', emoji: '🥛🧈🧀🥚🍞', colors: ['#7C3AED', '#A855F7'], shapes: 'dairy' },
    { id: 'banner-3', title: "Snack O'Clock", sub: 'Buy 2 Get 1 Free', emoji: '🍿🍪🥨🧁🍫', colors: ['#EA580C', '#F97316'], shapes: 'snack' },
    { id: 'banner-4', title: 'Cold Drinks & Juices', sub: 'Flat 30% OFF', emoji: '🥤🧃🍹🥥🧊', colors: ['#0284C7', '#38BDF8'], shapes: 'drink' },
    { id: 'banner-5', title: 'Cleaning Supplies', sub: 'Under ₹99', emoji: '🧹🧴🫧🧽🪣', colors: ['#0D9488', '#2DD4BF'], shapes: 'clean' },
];

banners.forEach(b => {
    const emojis = [...b.emoji].filter(c => c.trim() && c.codePointAt(0) > 255);
    const emojiElements = emojis.map((e, i) => {
        const x = 520 + (i % 3) * 80 + (Math.sin(i * 1.5) * 30);
        const y = 60 + Math.floor(i / 3) * 90 + (Math.cos(i * 2) * 15);
        const size = 48 + (i % 2) * 16;
        const rotation = -15 + (i * 12) % 30;
        return `<text x="${x}" y="${y}" font-size="${size}" transform="rotate(${rotation} ${x} ${y})" opacity="0.9">${e}</text>`;
    }).join('\n    ');

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="280" viewBox="0 0 800 280">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${b.colors[0]}" />
      <stop offset="100%" style="stop-color:${b.colors[1]}" />
    </linearGradient>
  </defs>
  <rect width="800" height="280" rx="20" fill="url(#bg)"/>
  <!-- Decorative circles -->
  <circle cx="650" cy="140" r="120" fill="rgba(255,255,255,0.08)"/>
  <circle cx="720" cy="60" r="60" fill="rgba(255,255,255,0.06)"/>
  <circle cx="100" cy="250" r="40" fill="rgba(255,255,255,0.05)"/>
  <!-- Text content -->
  <text x="50" y="80" font-size="16" font-family="Arial" font-weight="bold" fill="rgba(255,255,255,0.8)" letter-spacing="3">${b.id === 'banner-1' ? 'FRESH DEALS' : b.id === 'banner-2' ? 'DAILY NEEDS' : b.id === 'banner-3' ? 'MEGA OFFER' : b.id === 'banner-4' ? 'COOL DEALS' : 'HOME CARE'}</text>
  <text x="50" y="130" font-size="42" font-family="Arial" font-weight="bold" fill="white">${b.title}</text>
  <text x="50" y="175" font-size="28" font-family="Arial" font-weight="bold" fill="rgba(255,255,255,0.9)">${b.sub}</text>
  <rect x="50" y="200" width="140" height="42" rx="21" fill="white"/>
  <text x="120" y="227" font-size="15" font-family="Arial" font-weight="bold" fill="${b.colors[0]}" text-anchor="middle">Shop Now →</text>
  <!-- Emojis -->
  ${emojiElements}
</svg>`;
    fs.writeFileSync(path.join(BASE, 'banners', `${b.id}.svg`), svg);
});

console.log('✅ Generated 5 banner images');

// ============ DEAL IMAGES ============
const deals = [
    { id: 'deal-1', title: 'Fruits & Vegetables', discount: '40% OFF', emoji: '🥬🍎🥕', colors: ['#43A047', '#66BB6A'] },
    { id: 'deal-2', title: 'Dairy Products', discount: '25% OFF', emoji: '🥛🧈🧀', colors: ['#7B1FA2', '#CE93D8'] },
    { id: 'deal-3', title: 'Instant Food', discount: 'BUY 2 GET 1', emoji: '🍜🍝🍲', colors: ['#C62828', '#EF9A9A'] },
    { id: 'deal-4', title: 'Chocolates', discount: '30% OFF', emoji: '🍫🍬🍭', colors: ['#6A1B9A', '#CE93D8'] },
];

deals.forEach(d => {
    const emojis = [...d.emoji].filter(c => c.trim() && c.codePointAt(0) > 255);
    const emojiElements = emojis.map((e, i) => {
        const x = 60 + i * 65;
        const y = 100;
        return `<text x="${x}" y="${y}" font-size="52" opacity="0.85">${e}</text>`;
    }).join('\n    ');

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${d.colors[0]}" />
      <stop offset="100%" style="stop-color:${d.colors[1]}" />
    </linearGradient>
  </defs>
  <rect width="240" height="240" rx="20" fill="url(#bg)"/>
  <circle cx="180" cy="60" r="40" fill="rgba(255,255,255,0.1)"/>
  <circle cx="40" cy="200" r="30" fill="rgba(255,255,255,0.08)"/>
  ${emojiElements}
  <text x="120" y="165" font-size="18" font-family="Arial" font-weight="bold" fill="white" text-anchor="middle">${d.title}</text>
  <rect x="50" y="180" width="140" height="36" rx="18" fill="rgba(255,255,255,0.25)"/>
  <text x="120" y="204" font-size="15" font-family="Arial" font-weight="bold" fill="white" text-anchor="middle">${d.discount}</text>
</svg>`;
    fs.writeFileSync(path.join(BASE, 'deals', `${d.id}.svg`), svg);
});

console.log('✅ Generated 4 deal images');

// ============ PRODUCT IMAGES ============
const products = [
    // Fruits & Vegetables (cat-1)
    { id: 'p-1', name: 'Fresh Bananas', emoji: '🍌', bg: '#FFF9C4', accent: '#F9A825' },
    { id: 'p-2', name: 'Red Apple', emoji: '🍎', bg: '#FFEBEE', accent: '#C62828' },
    { id: 'p-3', name: 'Fresh Tomato', emoji: '🍅', bg: '#FFEBEE', accent: '#D32F2F' },
    { id: 'p-4', name: 'Green Capsicum', emoji: '🫑', bg: '#E8F5E9', accent: '#2E7D32' },
    { id: 'p-5', name: 'Onion', emoji: '🧅', bg: '#FFF3E0', accent: '#E65100' },
    { id: 'p-6', name: 'Potato', emoji: '🥔', bg: '#EFEBE9', accent: '#5D4037' },
    { id: 'p-7', name: 'Mango Alphonso', emoji: '🥭', bg: '#FFF9C4', accent: '#F57F17' },
    // Dairy & Breakfast (cat-2)
    { id: 'p-8', name: 'Amul Toned Milk', emoji: '🥛', bg: '#E3F2FD', accent: '#1565C0' },
    { id: 'p-9', name: 'Amul Gold Milk', emoji: '🥛', bg: '#FFF8E1', accent: '#FF8F00' },
    { id: 'p-10', name: 'Greek Yogurt', emoji: '🫙', bg: '#F3E5F5', accent: '#7B1FA2' },
    { id: 'p-11', name: 'Amul Butter', emoji: '🧈', bg: '#FFF9C4', accent: '#F9A825' },
    { id: 'p-12', name: 'Brown Eggs', emoji: '🥚', bg: '#EFEBE9', accent: '#6D4C41' },
    { id: 'p-13', name: 'Britannia Bread', emoji: '🍞', bg: '#FFF3E0', accent: '#E65100' },
    { id: 'p-14', name: 'Cheese Slices', emoji: '🧀', bg: '#FFF9C4', accent: '#FF8F00' },
    // Snacks & Munchies (cat-3)
    { id: 'p-15', name: "Lay's Salted", emoji: '🥔', bg: '#FFF9C4', accent: '#F9A825' },
    { id: 'p-16', name: 'Kurkure', emoji: '🌶️', bg: '#FFF3E0', accent: '#E65100' },
    { id: 'p-17', name: 'Aloo Bhujia', emoji: '🍘', bg: '#FFF8E1', accent: '#FF6F00' },
    { id: 'p-18', name: 'Oreo', emoji: '🍪', bg: '#E3F2FD', accent: '#1565C0' },
    { id: 'p-19', name: 'Parle-G', emoji: '🍪', bg: '#FFF9C4', accent: '#F9A825' },
    { id: 'p-20', name: 'Doritos', emoji: '🔺', bg: '#FFEBEE', accent: '#C62828' },
    // Cold Drinks (cat-4)
    { id: 'p-21', name: 'Coca-Cola', emoji: '🥤', bg: '#FFEBEE', accent: '#B71C1C' },
    { id: 'p-22', name: 'Tropicana Orange', emoji: '🧃', bg: '#FFF3E0', accent: '#EF6C00' },
    { id: 'p-23', name: 'Red Bull', emoji: '🥫', bg: '#E3F2FD', accent: '#1565C0' },
    { id: 'p-24', name: 'Sprite', emoji: '🥤', bg: '#E8F5E9', accent: '#2E7D32' },
    { id: 'p-25', name: 'Bisleri Water', emoji: '💧', bg: '#E3F2FD', accent: '#0288D1' },
    { id: 'p-26', name: 'Pepsi', emoji: '🥤', bg: '#E3F2FD', accent: '#1565C0' },
    // Instant & Frozen (cat-5)
    { id: 'p-27', name: 'Maggi Noodles', emoji: '🍜', bg: '#FFF9C4', accent: '#F9A825' },
    { id: 'p-28', name: 'Top Ramen', emoji: '🍜', bg: '#FFF3E0', accent: '#E65100' },
    { id: 'p-29', name: 'McCain Smiles', emoji: '🍟', bg: '#FFF9C4', accent: '#FBC02D' },
    { id: 'p-30', name: 'Paneer Butter Masala', emoji: '🍛', bg: '#FFF3E0', accent: '#D84315' },
    { id: 'p-31', name: 'Yippee Noodles', emoji: '🍝', bg: '#FCE4EC', accent: '#C2185B' },
    // Tea, Coffee (cat-6)
    { id: 'p-32', name: 'Tata Tea Gold', emoji: '🍵', bg: '#FFF8E1', accent: '#FF8F00' },
    { id: 'p-33', name: 'Nescafé Classic', emoji: '☕', bg: '#EFEBE9', accent: '#4E342E' },
    { id: 'p-34', name: 'Bournvita', emoji: '🍫', bg: '#EFEBE9', accent: '#5D4037' },
    { id: 'p-35', name: 'Green Tea', emoji: '🍵', bg: '#E8F5E9', accent: '#2E7D32' },
    // Bakery (cat-7)
    { id: 'p-36', name: 'Good Day Cashew', emoji: '🍪', bg: '#FFF8E1', accent: '#FF8F00' },
    { id: 'p-37', name: 'Hide & Seek', emoji: '🍪', bg: '#EFEBE9', accent: '#5D4037' },
    { id: 'p-38', name: 'Pav Buns', emoji: '🍞', bg: '#FFF3E0', accent: '#E65100' },
    { id: 'p-39', name: 'Chocolate Cake', emoji: '🍰', bg: '#EFEBE9', accent: '#5D4037' },
    // Sweet Tooth (cat-8)
    { id: 'p-40', name: 'Dairy Milk', emoji: '🍫', bg: '#E8EAF6', accent: '#283593' },
    { id: 'p-41', name: 'KitKat', emoji: '🍫', bg: '#FFEBEE', accent: '#C62828' },
    { id: 'p-42', name: 'Gulab Jamun Mix', emoji: '🧆', bg: '#FFF3E0', accent: '#BF360C' },
    { id: 'p-43', name: 'Vanilla Ice Cream', emoji: '🍦', bg: '#FFF9C4', accent: '#F9A825' },
    { id: 'p-44', name: '5 Star', emoji: '⭐', bg: '#FFF8E1', accent: '#FF8F00' },
    { id: 'p-45', name: 'Ferrero Rocher', emoji: '🍬', bg: '#FFF8E1', accent: '#BF360C' },
    // Atta, Rice & Dal (cat-9)
    { id: 'p-46', name: 'Aashirvaad Atta', emoji: '🌾', bg: '#FFF8E1', accent: '#F57F17' },
    { id: 'p-47', name: 'Basmati Rice', emoji: '🍚', bg: '#FFFDE7', accent: '#F9A825' },
    { id: 'p-48', name: 'Toor Dal', emoji: '🫘', bg: '#FFF3E0', accent: '#E65100' },
    { id: 'p-49', name: 'Moong Dal', emoji: '🫘', bg: '#FFF9C4', accent: '#F9A825' },
    { id: 'p-50', name: 'Maida', emoji: '🌾', bg: '#FAFAFA', accent: '#757575' },
    // Masala, Oil (cat-10)
    { id: 'p-51', name: 'Sunflower Oil', emoji: '🌻', bg: '#FFF9C4', accent: '#F9A825' },
    { id: 'p-52', name: 'Chana Masala', emoji: '🌶️', bg: '#FFEBEE', accent: '#C62828' },
    { id: 'p-53', name: 'Tata Salt', emoji: '🧂', bg: '#E3F2FD', accent: '#1565C0' },
    { id: 'p-54', name: 'Sugar', emoji: '🍬', bg: '#FAFAFA', accent: '#9E9E9E' },
    { id: 'p-55', name: 'Tomato Ketchup', emoji: '🍅', bg: '#FFEBEE', accent: '#C62828' },
    { id: 'p-56', name: 'Mustard Oil', emoji: '🫒', bg: '#FFF9C4', accent: '#F57F17' },
    // Cleaning (cat-11)
    { id: 'p-57', name: 'Surf Excel', emoji: '🧺', bg: '#E3F2FD', accent: '#1565C0' },
    { id: 'p-58', name: 'Vim Dishwash', emoji: '🫧', bg: '#E8F5E9', accent: '#2E7D32' },
    { id: 'p-59', name: 'Lizol Floor Cleaner', emoji: '🧹', bg: '#F3E5F5', accent: '#7B1FA2' },
    { id: 'p-60', name: 'Odonil Freshener', emoji: '🌸', bg: '#FCE4EC', accent: '#C2185B' },
    { id: 'p-61', name: 'Harpic', emoji: '🚽', bg: '#E3F2FD', accent: '#0277BD' },
    // Personal Care (cat-12)
    { id: 'p-62', name: 'Head & Shoulders', emoji: '🧴', bg: '#E3F2FD', accent: '#1565C0' },
    { id: 'p-63', name: 'Dove Soap', emoji: '🧼', bg: '#FAFAFA', accent: '#0097A7' },
    { id: 'p-64', name: 'Colgate MaxFresh', emoji: '🪥', bg: '#FFEBEE', accent: '#C62828' },
    { id: 'p-65', name: 'Nivea Body Lotion', emoji: '🧴', bg: '#E3F2FD', accent: '#1565C0' },
    { id: 'p-66', name: 'Lux Soap', emoji: '🧼', bg: '#FCE4EC', accent: '#AD1457' },
    { id: 'p-67', name: 'Oral-B Toothbrush', emoji: '🪥', bg: '#E8F5E9', accent: '#2E7D32' },
];

products.forEach(p => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${p.bg}" />
      <stop offset="100%" style="stop-color:white" />
    </linearGradient>
    <filter id="shadow">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-opacity="0.15"/>
    </filter>
  </defs>
  <rect width="300" height="300" rx="16" fill="url(#bg)"/>
  <!-- Decorative elements -->
  <circle cx="240" cy="60" r="40" fill="${p.accent}" opacity="0.08"/>
  <circle cx="60" cy="240" r="30" fill="${p.accent}" opacity="0.06"/>
  <circle cx="150" cy="150" r="70" fill="${p.accent}" opacity="0.06"/>
  <!-- Product emoji -->
  <text x="150" y="155" font-size="100" text-anchor="middle" filter="url(#shadow)">${p.emoji}</text>
  <!-- Product name -->
  <rect x="20" y="240" width="260" height="44" rx="10" fill="${p.accent}" opacity="0.12"/>
  <text x="150" y="268" font-size="16" font-family="Arial, sans-serif" font-weight="bold" fill="${p.accent}" text-anchor="middle">${p.name}</text>
</svg>`;
    fs.writeFileSync(path.join(BASE, 'products', `${p.id}.svg`), svg);
});

console.log(`✅ Generated ${products.length} product images`);
console.log('\n🎉 All images generated successfully!');
console.log(`📁 Output directory: ${BASE}`);
