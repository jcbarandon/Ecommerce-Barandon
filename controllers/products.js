import { v4 as uuidv4 } from 'uuid';

// In-memory product catalog. Seeded with Barandon Inc. heritage menswear.
// `category` matches the frontend slugs: 'shirts' | 'caps' | 'shoes'.
let products = [
    // ── Shirts ──
    { id: uuidv4(), name: 'Barong Tagalog Classic', category: 'shirts', price: 2499, description: 'Hand-finished piña-blend barong with pechera embroidery. The centerpiece of any Filipino formal wardrobe.' },
    { id: uuidv4(), name: 'Piña Weave Formal Shirt', category: 'shirts', price: 3299, description: 'Lightweight pineapple-fiber weave that breathes in the tropical heat while keeping a crisp, premium drape.' },
    { id: uuidv4(), name: 'Indigo Katsa Casual Shirt', category: 'shirts', price: 1299, description: 'Rugged natural-cotton katsa dyed in deep indigo. Built for everyday wear with a heritage edge.' },
    { id: uuidv4(), name: 'Sinulog Print Polo', category: 'shirts', price: 999, description: 'A relaxed polo carrying bold Sinulog-festival motifs. Vibrant, breathable, unmistakably Pinoy.' },

    // ── Caps ──
    { id: uuidv4(), name: 'Sarimanok Embroidered Cap', category: 'caps', price: 899, description: 'Structured six-panel cap with a gold Sarimanok bird embroidered across the front.' },
    { id: uuidv4(), name: 'Sun & Stars Snapback', category: 'caps', price: 799, description: 'Flat-brim snapback featuring the three stars and sun in stitched detail. Adjustable fit.' },
    { id: uuidv4(), name: 'Carabao Heritage Dad Cap', category: 'caps', price: 749, description: 'Soft, low-profile dad cap with a minimalist carabao emblem. Everyday comfort.' },
    { id: uuidv4(), name: 'Pintados Trucker Cap', category: 'caps', price: 849, description: 'Mesh-back trucker with Pintados-inspired weave patterning on the crown.' },

    // ── Shoes ──
    { id: uuidv4(), name: 'Ifugao Weave Sneakers', category: 'shoes', price: 3999, description: 'Low-top sneakers with handwoven Ifugao-textile side panels on a cushioned sole.' },
    { id: uuidv4(), name: 'Baybayin Low-Top', category: 'shoes', price: 3499, description: 'Clean leather low-tops subtly debossed with Baybayin script along the heel.' },
    { id: uuidv4(), name: 'Vinta Sail Runners', category: 'shoes', price: 4299, description: 'Lightweight runners in the bold color-blocking of a Mindanao vinta sail.' },
    { id: uuidv4(), name: 'Tinikling Court Shoes', category: 'shoes', price: 2999, description: 'Grippy court shoes named for the national dance — quick, light, and responsive.' },
];

const CATEGORIES = ['shirts', 'caps', 'shoes'];

export const getProducts = (req, res) => {
    const { category } = req.query;

    if (category) {
        const normalized = String(category).toLowerCase();
        if (!CATEGORIES.includes(normalized)) {
            return res.status(400).json({ message: `Unknown category '${category}'. Valid categories: ${CATEGORIES.join(', ')}.` });
        }
        return res.json(products.filter((p) => p.category === normalized));
    }

    res.json(products);
};

export const getProduct = (req, res) => {
    const { id } = req.params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        return res.status(404).json({ message: `Product with id ${id} not found.` });
    }

    res.json(product);
};

export const createProduct = (req, res) => {
    const { name, category, price, description } = req.body;

    if (!name || !category || price == null) {
        return res.status(400).json({ message: 'name, category, and price are required.' });
    }

    const normalized = String(category).toLowerCase();
    if (!CATEGORIES.includes(normalized)) {
        return res.status(400).json({ message: `Unknown category '${category}'. Valid categories: ${CATEGORIES.join(', ')}.` });
    }

    const product = { id: uuidv4(), name, category: normalized, price: Number(price), description: description || '' };
    products.push(product);

    res.status(201).json(product);
};
