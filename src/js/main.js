const products = [
    { id: 1, name: 'Laptop Pro', category: 'electronics', price: 999, description: 'High-performance laptop', emoji: '💻' },
    { id: 2, name: 'Smart Watch', category: 'electronics', price: 299, description: 'Track your fitness', emoji: '⌚' },
    { id: 3, name: 'Designer Shoes', category: 'fashion', price: 129, description: 'Premium footwear', emoji: '👟' },
    { id: 4, name: 'Winter Jacket', category: 'fashion', price: 199, description: 'Stay warm in style', emoji: '🧥' },
    { id: 5, name: 'Coffee Maker', category: 'home', price: 89, description: 'Brew perfect coffee', emoji: '☕' },
    { id: 6, name: 'Desk Lamp', category: 'home', price: 49, description: 'Bright and energy-efficient', emoji: '💡' },
    { id: 7, name: 'Wireless Earbuds', category: 'electronics', price: 179, description: 'Crystal clear sound', emoji: '🎧' },
    { id: 8, name: 'Running Shoes', category: 'fashion', price: 149, description: 'Comfortable running', emoji: '👕' },
];

let currentFilter = 'all';

function renderProducts(filter = 'all') {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    const filtered = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-footer">
                    <span class="product-price">$${product.price}</span>
                    <button class="add-to-cart-btn" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    addCartListeners();
}

function addCartListeners() {
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = e.target.dataset.id;
            const product = products.find(p => p.id == productId);
            addToCart(product);
            e.target.textContent = 'Added! ✓';
            setTimeout(() => e.target.textContent = 'Add to Cart', 1500);
        });
    });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.filter;
        renderProducts(currentFilter);
    });
});

document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
});

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});