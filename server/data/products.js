const products = [
    // Fruits & Vegetables (cat-1)
    { id: "p-1", name: "Fresh Bananas", categoryId: "cat-1", subcategory: "Fresh Fruits", price: 39, mrp: 55, unit: "1 dozen", weight: "900g-1kg", image: "/images/products/p-1.svg", rating: 4.5, reviews: 2340, inStock: true, description: "Fresh yellow bananas, naturally ripened." },
    { id: "p-2", name: "Red Apple", categoryId: "cat-1", subcategory: "Fresh Fruits", price: 149, mrp: 199, unit: "4 pcs", weight: "500g", image: "/images/products/p-2.svg", rating: 4.3, reviews: 1890, inStock: true, description: "Crisp and juicy premium Shimla apples." },
    { id: "p-3", name: "Fresh Tomato", categoryId: "cat-1", subcategory: "Fresh Vegetables", price: 29, mrp: 40, unit: "500g", weight: "500g", image: "/images/products/p-3.svg", rating: 4.1, reviews: 3200, inStock: true, description: "Farm fresh red tomatoes." },
    { id: "p-4", name: "Green Capsicum", categoryId: "cat-1", subcategory: "Fresh Vegetables", price: 35, mrp: 50, unit: "2 pcs", weight: "250g", image: "/images/products/p-4.svg", rating: 4.0, reviews: 890, inStock: true, description: "Fresh green bell peppers." },
    { id: "p-5", name: "Onion", categoryId: "cat-1", subcategory: "Fresh Vegetables", price: 35, mrp: 45, unit: "1 kg", weight: "1kg", image: "/images/products/p-5.svg", rating: 4.4, reviews: 5600, inStock: true, description: "Premium quality onions." },
    { id: "p-6", name: "Potato", categoryId: "cat-1", subcategory: "Fresh Vegetables", price: 29, mrp: 38, unit: "1 kg", weight: "1kg", image: "/images/products/p-6.svg", rating: 4.6, reviews: 4200, inStock: true, description: "Fresh potatoes for everyday cooking." },
    { id: "p-7", name: "Mango Alphonso", categoryId: "cat-1", subcategory: "Exotic Fruits", price: 299, mrp: 399, unit: "6 pcs", weight: "1kg", image: "/images/products/p-7.svg", rating: 4.8, reviews: 890, inStock: true, description: "Premium Alphonso mangoes from Ratnagiri." },

    // Dairy & Breakfast (cat-2)
    { id: "p-8", name: "Amul Toned Milk", categoryId: "cat-2", subcategory: "Milk", price: 30, mrp: 30, unit: "500ml", weight: "500ml", image: "/images/products/p-8.svg", rating: 4.5, reviews: 8900, inStock: true, description: "Amul Toned Milk, pasteurized and homogenized." },
    { id: "p-9", name: "Amul Gold Milk", categoryId: "cat-2", subcategory: "Milk", price: 35, mrp: 35, unit: "500ml", weight: "500ml", image: "/images/products/p-9.svg", rating: 4.6, reviews: 7800, inStock: true, description: "Amul Gold Full Cream Milk." },
    { id: "p-10", name: "Greek Yogurt Plain", categoryId: "cat-2", subcategory: "Curd & Yogurt", price: 75, mrp: 99, unit: "400g", weight: "400g", image: "/images/products/p-10.svg", rating: 4.3, reviews: 1200, inStock: true, description: "Thick and creamy Greek yogurt." },
    { id: "p-11", name: "Amul Butter", categoryId: "cat-2", subcategory: "Butter & Cheese", price: 56, mrp: 60, unit: "100g", weight: "100g", image: "/images/products/p-11.svg", rating: 4.7, reviews: 9500, inStock: true, description: "Amul Pasteurised Butter." },
    { id: "p-12", name: "Brown Eggs", categoryId: "cat-2", subcategory: "Eggs", price: 85, mrp: 99, unit: "6 pcs", weight: "6 pcs", image: "/images/products/p-12.svg", rating: 4.4, reviews: 3400, inStock: true, description: "Farm fresh brown eggs." },
    { id: "p-13", name: "Britannia Bread", categoryId: "cat-2", subcategory: "Bread & Pav", price: 40, mrp: 45, unit: "400g", weight: "400g", image: "/images/products/p-13.svg", rating: 4.2, reviews: 6700, inStock: true, description: "Britannia white sandwich bread." },
    { id: "p-14", name: "Amul Cheese Slices", categoryId: "cat-2", subcategory: "Butter & Cheese", price: 99, mrp: 120, unit: "200g", weight: "200g", image: "/images/products/p-14.svg", rating: 4.5, reviews: 4500, inStock: true, description: "Processed cheese slices, pack of 10." },

    // Snacks & Munchies (cat-3)
    { id: "p-15", name: "Lay's Classic Salted", categoryId: "cat-3", subcategory: "Chips & Crisps", price: 20, mrp: 20, unit: "52g", weight: "52g", image: "/images/products/p-15.svg", rating: 4.5, reviews: 12000, inStock: true, description: "Lay's Classic Salted Potato Chips." },
    { id: "p-16", name: "Kurkure Masala Munch", categoryId: "cat-3", subcategory: "Namkeen", price: 20, mrp: 20, unit: "75g", weight: "75g", image: "/images/products/p-16.svg", rating: 4.3, reviews: 8900, inStock: true, description: "Kurkure Masala Munch crunchy puffed corn." },
    { id: "p-17", name: "Haldiram's Aloo Bhujia", categoryId: "cat-3", subcategory: "Namkeen", price: 65, mrp: 75, unit: "200g", weight: "200g", image: "/images/products/p-17.svg", rating: 4.6, reviews: 5600, inStock: true, description: "Haldiram's crispy aloo bhujia." },
    { id: "p-18", name: "Oreo Original", categoryId: "cat-3", subcategory: "Biscuits & Cookies", price: 30, mrp: 30, unit: "120g", weight: "120g", image: "/images/products/p-18.svg", rating: 4.7, reviews: 15000, inStock: true, description: "Oreo chocolate sandwich cookies." },
    { id: "p-19", name: "Parle-G", categoryId: "cat-3", subcategory: "Biscuits & Cookies", price: 10, mrp: 10, unit: "80g", weight: "80g", image: "/images/products/p-19.svg", rating: 4.8, reviews: 25000, inStock: true, description: "India's favourite glucose biscuit." },
    { id: "p-20", name: "Doritos Cheese", categoryId: "cat-3", subcategory: "Chips & Crisps", price: 49, mrp: 50, unit: "72g", weight: "72g", image: "/images/products/p-20.svg", rating: 4.4, reviews: 3400, inStock: true, description: "Doritos Nacho Cheese tortilla chips." },

    // Cold Drinks & Juices (cat-4)
    { id: "p-21", name: "Coca-Cola", categoryId: "cat-4", subcategory: "Soft Drinks", price: 40, mrp: 40, unit: "750ml", weight: "750ml", image: "/images/products/p-21.svg", rating: 4.5, reviews: 18000, inStock: true, description: "Coca-Cola original taste." },
    { id: "p-22", name: "Tropicana Orange", categoryId: "cat-4", subcategory: "Juices", price: 55, mrp: 65, unit: "1L", weight: "1L", image: "/images/products/p-22.svg", rating: 4.3, reviews: 4500, inStock: true, description: "100% pure orange juice, no added sugar." },
    { id: "p-23", name: "Red Bull", categoryId: "cat-4", subcategory: "Energy Drinks", price: 115, mrp: 125, unit: "250ml", weight: "250ml", image: "/images/products/p-23.svg", rating: 4.4, reviews: 6700, inStock: true, description: "Red Bull Energy Drink." },
    { id: "p-24", name: "Sprite", categoryId: "cat-4", subcategory: "Soft Drinks", price: 40, mrp: 40, unit: "750ml", weight: "750ml", image: "/images/products/p-24.svg", rating: 4.3, reviews: 12000, inStock: true, description: "Sprite clear lemon-lime soda." },
    { id: "p-25", name: "Bisleri Water", categoryId: "cat-4", subcategory: "Water & Soda", price: 20, mrp: 20, unit: "1L", weight: "1L", image: "/images/products/p-25.svg", rating: 4.2, reviews: 3000, inStock: true, description: "Bisleri mineral water, ISI certified." },
    { id: "p-26", name: "Pepsi", categoryId: "cat-4", subcategory: "Soft Drinks", price: 40, mrp: 40, unit: "750ml", weight: "750ml", image: "/images/products/p-26.svg", rating: 4.3, reviews: 14000, inStock: true, description: "Pepsi cola soft drink." },

    // Instant & Frozen Food (cat-5)
    { id: "p-27", name: "Maggi 2-Minute Noodles", categoryId: "cat-5", subcategory: "Noodles & Pasta", price: 14, mrp: 14, unit: "70g", weight: "70g", image: "/images/products/p-27.svg", rating: 4.7, reviews: 32000, inStock: true, description: "Maggi Masala instant noodles." },
    { id: "p-28", name: "Top Ramen Curry", categoryId: "cat-5", subcategory: "Noodles & Pasta", price: 12, mrp: 14, unit: "70g", weight: "70g", image: "/images/products/p-28.svg", rating: 4.2, reviews: 8000, inStock: true, description: "Top Ramen curry flavored noodles." },
    { id: "p-29", name: "McCain Smiles", categoryId: "cat-5", subcategory: "Frozen Snacks", price: 110, mrp: 130, unit: "415g", weight: "415g", image: "/images/products/p-29.svg", rating: 4.5, reviews: 5600, inStock: true, description: "McCain crispy happy potato smiles." },
    { id: "p-30", name: "MTR Ready Meal - Paneer Butter Masala", categoryId: "cat-5", subcategory: "Ready to Eat", price: 89, mrp: 99, unit: "300g", weight: "300g", image: "/images/products/p-30.svg", rating: 4.1, reviews: 2300, inStock: true, description: "MTR ready-to-eat Paneer Butter Masala." },
    { id: "p-31", name: "Yippee Noodles", categoryId: "cat-5", subcategory: "Noodles & Pasta", price: 12, mrp: 14, unit: "60g", weight: "60g", image: "/images/products/p-31.svg", rating: 4.4, reviews: 9800, inStock: true, description: "Sunfeast Yippee Magic Masala noodles." },

    // Tea, Coffee & Health Drinks (cat-6)
    { id: "p-32", name: "Tata Tea Gold", categoryId: "cat-6", subcategory: "Tea", price: 185, mrp: 210, unit: "250g", weight: "250g", image: "/images/products/p-32.svg", rating: 4.5, reviews: 11000, inStock: true, description: "Premium Assam tea leaves." },
    { id: "p-33", name: "Nescafé Classic", categoryId: "cat-6", subcategory: "Coffee", price: 240, mrp: 280, unit: "200g", weight: "200g", image: "/images/products/p-33.svg", rating: 4.6, reviews: 14000, inStock: true, description: "100% pure instant coffee." },
    { id: "p-34", name: "Bournvita", categoryId: "cat-6", subcategory: "Health Drinks", price: 225, mrp: 260, unit: "500g", weight: "500g", image: "/images/products/p-34.svg", rating: 4.4, reviews: 8900, inStock: true, description: "Cadbury Bournvita chocolate health drink." },
    { id: "p-35", name: "Green Tea Honey Lemon", categoryId: "cat-6", subcategory: "Green Tea", price: 175, mrp: 199, unit: "25 bags", weight: "25 bags", image: "/images/products/p-35.svg", rating: 4.3, reviews: 3400, inStock: true, description: "Lipton Green Tea with honey and lemon." },

    // Bakery & Biscuits (cat-7)
    { id: "p-36", name: "Britannia Good Day Cashew", categoryId: "cat-7", subcategory: "Cookies", price: 30, mrp: 35, unit: "120g", weight: "120g", image: "/images/products/p-36.svg", rating: 4.5, reviews: 7800, inStock: true, description: "Rich cashew cookies." },
    { id: "p-37", name: "Hide & Seek Choco Chip", categoryId: "cat-7", subcategory: "Cookies", price: 35, mrp: 40, unit: "120g", weight: "120g", image: "/images/products/p-37.svg", rating: 4.6, reviews: 9200, inStock: true, description: "Choco chip filled cookies." },
    { id: "p-38", name: "Pav Buns", categoryId: "cat-7", subcategory: "Buns & Pavs", price: 30, mrp: 35, unit: "6 pcs", weight: "300g", image: "/images/products/p-38.svg", rating: 4.2, reviews: 2100, inStock: true, description: "Soft pav buns for pav bhaji." },
    { id: "p-39", name: "Chocolate Cake Slice", categoryId: "cat-7", subcategory: "Cakes & Pastries", price: 45, mrp: 55, unit: "1 pc", weight: "80g", image: "/images/products/p-39.svg", rating: 4.3, reviews: 1800, inStock: true, description: "Fresh chocolate cake slice." },

    // Sweet Tooth (cat-8)
    { id: "p-40", name: "Cadbury Dairy Milk", categoryId: "cat-8", subcategory: "Chocolates", price: 40, mrp: 40, unit: "50g", weight: "50g", image: "/images/products/p-40.svg", rating: 4.8, reviews: 28000, inStock: true, description: "Cadbury Dairy Milk chocolate." },
    { id: "p-41", name: "KitKat", categoryId: "cat-8", subcategory: "Chocolates", price: 40, mrp: 40, unit: "37.3g", weight: "37.3g", image: "/images/products/p-41.svg", rating: 4.7, reviews: 22000, inStock: true, description: "Have a break, have a KitKat." },
    { id: "p-42", name: "Gulab Jamun Mix", categoryId: "cat-8", subcategory: "Dessert Mixes", price: 85, mrp: 99, unit: "200g", weight: "200g", image: "/images/products/p-42.svg", rating: 4.3, reviews: 3400, inStock: true, description: "Easy to make gulab jamun." },
    { id: "p-43", name: "Kwality Walls Vanilla", categoryId: "cat-8", subcategory: "Ice Cream", price: 120, mrp: 150, unit: "700ml", weight: "700ml", image: "/images/products/p-43.svg", rating: 4.5, reviews: 5600, inStock: true, description: "Creamy vanilla ice cream." },
    { id: "p-44", name: "5 Star", categoryId: "cat-8", subcategory: "Chocolates", price: 20, mrp: 20, unit: "25g", weight: "25g", image: "/images/products/p-44.svg", rating: 4.4, reviews: 15000, inStock: true, description: "Cadbury 5 Star chocolate bar." },
    { id: "p-45", name: "Ferrero Rocher", categoryId: "cat-8", subcategory: "Chocolates", price: 349, mrp: 399, unit: "16 pcs", weight: "200g", image: "/images/products/p-45.svg", rating: 4.9, reviews: 7800, inStock: true, description: "Premium Italian hazelnut chocolates." },

    // Atta, Rice & Dal (cat-9)
    { id: "p-46", name: "Aashirvaad Atta", categoryId: "cat-9", subcategory: "Atta & Flour", price: 249, mrp: 290, unit: "5kg", weight: "5kg", image: "/images/products/p-46.svg", rating: 4.6, reviews: 18000, inStock: true, description: "Aashirvaad whole wheat atta." },
    { id: "p-47", name: "India Gate Basmati Rice", categoryId: "cat-9", subcategory: "Rice", price: 399, mrp: 450, unit: "5kg", weight: "5kg", image: "/images/products/p-47.svg", rating: 4.7, reviews: 12000, inStock: true, description: "Premium aged basmati rice." },
    { id: "p-48", name: "Toor Dal", categoryId: "cat-9", subcategory: "Dal & Pulses", price: 145, mrp: 165, unit: "1kg", weight: "1kg", image: "/images/products/p-48.svg", rating: 4.4, reviews: 6700, inStock: true, description: "Premium quality toor dal." },
    { id: "p-49", name: "Moong Dal", categoryId: "cat-9", subcategory: "Dal & Pulses", price: 135, mrp: 155, unit: "1kg", weight: "1kg", image: "/images/products/p-49.svg", rating: 4.3, reviews: 4500, inStock: true, description: "Yellow moong dal, premium." },
    { id: "p-50", name: "Maida", categoryId: "cat-9", subcategory: "Atta & Flour", price: 42, mrp: 50, unit: "1kg", weight: "1kg", image: "/images/products/p-50.svg", rating: 4.2, reviews: 3200, inStock: true, description: "Refined wheat flour." },

    // Masala, Oil & More (cat-10)
    { id: "p-51", name: "Fortune Sunflower Oil", categoryId: "cat-10", subcategory: "Cooking Oil", price: 155, mrp: 180, unit: "1L", weight: "1L", image: "/images/products/p-51.svg", rating: 4.5, reviews: 14000, inStock: true, description: "Fortune refined sunflower oil." },
    { id: "p-52", name: "MDH Chana Masala", categoryId: "cat-10", subcategory: "Spices", price: 65, mrp: 75, unit: "100g", weight: "100g", image: "/images/products/p-52.svg", rating: 4.6, reviews: 8900, inStock: true, description: "MDH Chana Masala spice mix." },
    { id: "p-53", name: "Tata Salt", categoryId: "cat-10", subcategory: "Salt & Sugar", price: 22, mrp: 25, unit: "1kg", weight: "1kg", image: "/images/products/p-53.svg", rating: 4.7, reviews: 22000, inStock: true, description: "Vacuum evaporated iodised salt." },
    { id: "p-54", name: "Sugar", categoryId: "cat-10", subcategory: "Salt & Sugar", price: 46, mrp: 52, unit: "1kg", weight: "1kg", image: "/images/products/p-54.svg", rating: 4.3, reviews: 9800, inStock: true, description: "Refined white sugar." },
    { id: "p-55", name: "Kissan Tomato Ketchup", categoryId: "cat-10", subcategory: "Pickles & Sauces", price: 99, mrp: 115, unit: "500g", weight: "500g", image: "/images/products/p-55.svg", rating: 4.5, reviews: 11000, inStock: true, description: "Kissan fresh tomato ketchup." },
    { id: "p-56", name: "Mustard Oil", categoryId: "cat-10", subcategory: "Cooking Oil", price: 185, mrp: 210, unit: "1L", weight: "1L", image: "/images/products/p-56.svg", rating: 4.4, reviews: 6700, inStock: true, description: "Pure cold-pressed mustard oil." },

    // Cleaning Essentials (cat-11)
    { id: "p-57", name: "Surf Excel Matic", categoryId: "cat-11", subcategory: "Detergents", price: 249, mrp: 290, unit: "1kg", weight: "1kg", image: "/images/products/p-57.svg", rating: 4.6, reviews: 9800, inStock: true, description: "Front load washing machine detergent." },
    { id: "p-58", name: "Vim Dishwash Liquid", categoryId: "cat-11", subcategory: "Dishwash", price: 99, mrp: 115, unit: "500ml", weight: "500ml", image: "/images/products/p-58.svg", rating: 4.4, reviews: 7800, inStock: true, description: "Vim liquid dishwash gel." },
    { id: "p-59", name: "Lizol Floor Cleaner", categoryId: "cat-11", subcategory: "Floor Cleaners", price: 145, mrp: 165, unit: "975ml", weight: "975ml", image: "/images/products/p-59.svg", rating: 4.5, reviews: 5600, inStock: true, description: "Lizol disinfectant floor cleaner citrus." },
    { id: "p-60", name: "Odonil Air Freshener", categoryId: "cat-11", subcategory: "Fresheners", price: 55, mrp: 65, unit: "75g", weight: "75g", image: "/images/products/p-60.svg", rating: 4.2, reviews: 3400, inStock: true, description: "Odonil bathroom air freshener." },
    { id: "p-61", name: "Harpic Power Plus", categoryId: "cat-11", subcategory: "Floor Cleaners", price: 85, mrp: 99, unit: "500ml", weight: "500ml", image: "/images/products/p-61.svg", rating: 4.5, reviews: 8900, inStock: true, description: "Harpic toilet cleaner liquid." },

    // Personal Care (cat-12)
    { id: "p-62", name: "Head & Shoulders Shampoo", categoryId: "cat-12", subcategory: "Shampoo", price: 190, mrp: 220, unit: "340ml", weight: "340ml", image: "/images/products/p-62.svg", rating: 4.4, reviews: 11000, inStock: true, description: "Anti-dandruff shampoo." },
    { id: "p-63", name: "Dove Soap", categoryId: "cat-12", subcategory: "Soap & Body Wash", price: 42, mrp: 49, unit: "75g", weight: "75g", image: "/images/products/p-63.svg", rating: 4.6, reviews: 15000, inStock: true, description: "Dove beauty bathing bar." },
    { id: "p-64", name: "Colgate MaxFresh", categoryId: "cat-12", subcategory: "Oral Care", price: 89, mrp: 99, unit: "150g", weight: "150g", image: "/images/products/p-64.svg", rating: 4.5, reviews: 12000, inStock: true, description: "Colgate MaxFresh toothpaste with cooling crystals." },
    { id: "p-65", name: "Nivea Body Lotion", categoryId: "cat-12", subcategory: "Skin Care", price: 215, mrp: 250, unit: "400ml", weight: "400ml", image: "/images/products/p-65.svg", rating: 4.5, reviews: 7800, inStock: true, description: "Nivea nourishing body lotion." },
    { id: "p-66", name: "Lux Soap", categoryId: "cat-12", subcategory: "Soap & Body Wash", price: 35, mrp: 42, unit: "75g", weight: "75g", image: "/images/products/p-66.svg", rating: 4.3, reviews: 9800, inStock: true, description: "Lux soft touch soap bar." },
    { id: "p-67", name: "Oral-B Toothbrush", categoryId: "cat-12", subcategory: "Oral Care", price: 35, mrp: 40, unit: "1 pc", weight: "1 pc", image: "/images/products/p-67.svg", rating: 4.2, reviews: 5600, inStock: true, description: "Oral-B sensitive toothbrush." }
];

module.exports = products;
