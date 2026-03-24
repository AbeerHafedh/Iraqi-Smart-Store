// Product Database with REAL images and Iraqi products
const products = [
    // Gaming Products
    { 
        id: 1, 
        name: "سماعة رأس جيمنج احترافية", 
        price: 89000, 
        rating: 4.8, 
        type: "gaming", 
        image: "https://th.bing.com/th/id/OIP.UdgWt_GPBDlaRDOMVoKtyQHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", 
        desc: "سماعة جيمنج مع مايك، صوت محيطي 7.1، تصميم مريح للاستخدام الطويل", 
        story: "صُممت خصيصاً للاعبين العراقيين المحترفين. استمتع بتجربة ألعاب لا مثيل لها مع جودة صوت استثنائية." 
    },
    { 
        id: 2, 
        name: "ماوس جيمنج لاسلكي", 
        price: 45000, 
        rating: 4.7, 
        type: "gaming", 
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=400&fit=crop", 
        desc: "ماوس 16000 DPI، 8 أزرار قابلة للبرمجة، إضاءة RGB", 
        story: "دقة متناهية واستجابة فورية تجعلك تتفوق في كل مباراة. الماوس المثالي للاعبين العراقيين." 
    },
    { 
        id: 3, 
        name: "لوحة مفاتيح ميكانيكية", 
        price: 125000, 
        rating: 4.9, 
        type: "gaming", 
        image: "https://th.bing.com/th/id/OIP.XBsUkmH6V_L36mIMuMds1AHaHa?w=185&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", 
        desc: "سويتشات ميكانيكية حمراء، إضاءة RGB، تصميم عربي", 
        story: "كل نقرة تشعرك بالقوة والدقة. لوحة مفاتيح مصممة للاعبين العراقيين الذين يبحثون عن الأداء المثالي." 
    },
    
    // Fitness Products
    { 
        id: 4, 
        name: "سوار ذكي للياقة", 
        price: 65000, 
        rating: 4.6, 
        type: "fitness", 
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=400&fit=crop", 
        desc: "قياس نبضات القلب، عداد خطوات، مراقبة النوم، مقاوم للماء", 
        story: "تتبع لياقتك البدنية بدقة مع هذا السوار الذكي. شريكك المثالي لتحقيق أهدافك الرياضية." 
    },
    { 
        id: 5, 
        name: "زجاجة ماء ذكية", 
        price: 35000, 
        rating: 4.5, 
        type: "fitness", 
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=400&fit=crop", 
        desc: "تذكير بشرب الماء، عزل حراري، سعة 750 مل", 
        story: "حافظ على رطوبتك طوال اليوم مع هذه الزجاجة الذكية التي تذكرك بشرب الماء في الوقت المناسب." 
    },
    { 
        id: 6, 
        name: "حقيبة رياضية متعددة الاستخدامات", 
        price: 55000, 
        rating: 4.7, 
        type: "fitness", 
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=400&fit=crop", 
        desc: "مقاومة للماء، تصميم مريح، جيوب متعددة", 
        story: "حقيبة رياضية تجمع بين الأناقة والعملية، مثالية للذهاب إلى النادي الرياضي أو الرحلات." 
    },
    
    // Casual Products
    { 
        id: 7, 
        name: "تي شيرت قطني فاخر", 
        price: 28000, 
        rating: 4.4, 
        type: "casual", 
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=400&fit=crop", 
        desc: "100% قطن عضوي، عدة ألوان، جودة عالية", 
        story: "راحة لا مثيل لها مع هذا التي شيرت المصنوع من أجود أنواع القطن. مثالي للارتداء اليومي." 
    },
    { 
        id: 8, 
        name: "ساعة أنيقة كلاسيكية", 
        price: 125000, 
        rating: 4.8, 
        type: "casual", 
        image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&h=400&fit=crop", 
        desc: "سوار جلدي، تصميم سويسري، مقاومة للماء", 
        story: "ساعة تجمع بين الأناقة الكلاسيكية والجودة العالية. إضافة مميزة لإطلالتك اليومية." 
    },
    { 
        id: 9, 
        name: "نظارة شمسية عصرية", 
        price: 45000, 
        rating: 4.6, 
        type: "casual", 
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=400&fit=crop", 
        desc: "حماية من الأشعة فوق البنفسجية، إطار معدني", 
        story: "حماية كاملة لعينيك مع لمسة أنيقة. نظارة شمسية تناسب جميع الأذواق." 
    },
    
    // Gifts Products
    { 
        id: 10, 
        name: "صندوق هدايا فاخر", 
        price: 75000, 
        rating: 4.9, 
        type: "gifts", 
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&h=400&fit=crop", 
        desc: "شوكولاتة بلجيكية، ورد طبيعي، بطاقة معايدة", 
        story: "هدية مثالية لمن تحب. صندوق فاخر يحتوي على أجود أنواع الشوكولاتة والورود الطبيعية." 
    },
    { 
        id: 11, 
        name: "لمبة ذكية متعددة الألوان", 
        price: 45000, 
        rating: 4.7, 
        type: "gifts", 
        image: "https://th.bing.com/th/id/OIP.uZVlnFoWNDMEze4GeNJykgHaHa?w=159&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", 
        desc: "تتحكم بالهاتف، 16 مليون لون، متوافقة مع Alexa", 
        story: "أضف لمسة سحرية إلى غرفتك مع هذه اللمبة الذكية التي تتحكم بها عبر هاتفك." 
    },
    { 
        id: 12, 
        name: "باقة ورد طبيعي فاخرة", 
        price: 55000, 
        rating: 4.8, 
        type: "gifts", 
        image: "https://th.bing.com/th/id/OIP.JYD7-YN0S9nQXdXEQ5DuBAHaHa?w=176&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
        story: "أجمل تعبير عن الحب والامتنان مع باقة الورد الفاخرة هذه. مناسبة لجميع المناسبات." 
    },
    
    // Iraqi Heritage Products
    { 
        id: 13, 
        name: "عباءة عراقية تقليدية", 
        price: 185000, 
        rating: 4.9, 
        type: "iraqi", 
        image: "https://tse1.mm.bing.net/th/id/OIP.-KbpISSwpz5I-fLQNiTctgHaJ4?w=1500&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3", 
        desc: "عباءة عراقية أصلية، تطريز يدوي، قماش فاخر", 
        story: "قطعة من التراث العراقي الأصيل. تعكس العراقة والأناقة في آن واحد." 
    },
    { 
        id: 14, 
        name: "مسبحة عراقية يدوية", 
        price: 35000, 
        rating: 4.7, 
        type: "iraqi", 
        image: "https://th.bing.com/th/id/OIP.vMIIwVF0qdSCYYNcegBFYAHaHa?w=191&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", 
        desc: "مسبحة من الخشب الطبيعي، صناعة يدوية، تصميم فريد", 
        story: "مسبحة عراقية تقليدية صنعت بأيدي حرفيين عراقيين. قطعة فنية تحمل روح التراث." 
    },
    { 
        id: 15, 
        name: "سجادة عراقية يدوية", 
        price: 295000, 
        rating: 4.9, 
        type: "iraqi", 
        image: "https://th.bing.com/th/id/OIP.h3Fbu2_Li79BCy3wWs8-UAHaHa?w=208&h=208&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", 
        desc: "سجادة عراقية أصلية، صوف طبيعي، تصميم تراثي", 
        story: "سجادة عراقية صنعت بحرفية عالية. تضفي لمسة من الأصالة والدفء على منزلك." 
    }
];

// Global State
let cart = [];
let wishlist = [];
let currentMood = "gaming";
let searchQuery = "";

// Load saved data
try {
    const savedCart = localStorage.getItem("iraqi_cart");
    const savedWishlist = localStorage.getItem("iraqi_wishlist");
    if (savedCart) cart = JSON.parse(savedCart);
    if (savedWishlist) wishlist = JSON.parse(savedWishlist);
} catch(e) {
    console.log("Error loading saved data");
}

// DOM Elements
const productsContainer = document.getElementById("productsContainer");
const searchInput = document.getElementById("searchInput");
const cartCountSpan = document.getElementById("cartCount");
const cartSidebar = document.getElementById("cartSidebar");
const cartItemsList = document.getElementById("cartItemsList");
const cartTotalSpan = document.getElementById("cartTotal");
const wishlistCountSpan = document.getElementById("wishlistCount");
const themeToggle = document.getElementById("themeToggle");
const modal = document.getElementById("productModal");

// Helper Functions
function showNotification(message) {
    const notif = document.createElement("div");
    notif.className = "notification";
    notif.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 3000);
}

function formatPrice(price) {
    return price.toLocaleString('ar-IQ');
}

function updateCartUI() {
    localStorage.setItem("iraqi_cart", JSON.stringify(cart));
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountSpan.innerText = totalItems;
    if (cartSidebar.classList.contains("open")) renderCartSidebar();
}

function renderCartSidebar() {
    if (!cartItemsList) return;
    
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-cart"></i><p>السلة فارغة</p><p>أضف بعض المنتجات الرائعة!</p></div>';
        cartTotalSpan.innerText = "0";
        return;
    }
    
    let html = "";
    let total = 0;
    cart.forEach((item) => {
        total += item.price * item.quantity;
        html += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${formatPrice(item.price)} د.ع</p>
                    <div class="cart-item-actions">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        <button onclick="removeFromCart(${item.id})" class="remove-btn"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            </div>
        `;
    });
    cartItemsList.innerHTML = html;
    cartTotalSpan.innerText = formatPrice(total);
}

window.updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
        removeFromCart(id);
        return;
    }
    const existing = cart.find(i => i.id === id);
    if (existing) existing.quantity = newQuantity;
    updateCartUI();
    renderCartSidebar();
};

window.removeFromCart = (id) => {
    cart = cart.filter(i => i.id !== id);
    updateCartUI();
    renderCartSidebar();
    showNotification("تم إزالة المنتج من السلة");
};

function addToCart(product, quantity = 1) {
    const existing = cart.find(i => i.id === product.id);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    updateCartUI();
    showNotification(`✅ تم إضافة ${product.name} إلى السلة`);
}

function toggleWishlist(product) {
    const exists = wishlist.some(p => p.id === product.id);
    if (exists) {
        wishlist = wishlist.filter(p => p.id !== product.id);
        showNotification(`❌ تم إزالة ${product.name} من المفضلة`);
    } else {
        wishlist.push(product);
        showNotification(`❤️ تم إضافة ${product.name} إلى المفضلة`);
    }
    localStorage.setItem("iraqi_wishlist", JSON.stringify(wishlist));
    const count = wishlist.length;
    wishlistCountSpan.innerText = count;
    wishlistCountSpan.style.display = count ? "inline-flex" : "none";
    renderProducts();
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    let stars = '';
    for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star"></i>';
    const emptyStars = 5 - fullStars;
    for (let i = 0; i < emptyStars; i++) stars += '<i class="far fa-star"></i>';
    return stars;
}

function renderProducts() {
    let filtered = products.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesMood = currentMood === "all" || p.type === currentMood;
        return matchesSearch && matchesMood;
    });
    
    if (filtered.length === 0) {
        productsContainer.innerHTML = '<div class="empty-products" style="grid-column:1/-1; text-align:center; padding:3rem;"><i class="fas fa-box-open" style="font-size:3rem;"></i><p>لا توجد منتجات متطابقة</p></div>';
        return;
    }
    
    productsContainer.innerHTML = filtered.map(p => `
        <div class="product-card" data-id="${p.id}">
            <img class="product-img" src="${p.image}" loading="lazy" alt="${p.name}">
            <div class="product-info">
                <h3>${p.name}</h3>
                <div class="price">${formatPrice(p.price)} د.ع</div>
                <div class="rating">
                    ${generateStars(p.rating)} (${p.rating})
                </div>
                <button class="add-to-cart" data-id="${p.id}">
                    <i class="fas fa-shopping-cart"></i> أضف للسلة
                </button>
                <button class="wishlist-btn" data-id="${p.id}">
                    <i class="fas ${wishlist.some(w => w.id === p.id) ? 'fa-heart' : 'fa-heart'}"></i>
                    ${wishlist.some(w => w.id === p.id) ? 'في المفضلة' : 'أضف للمفضلة'}
                </button>
            </div>
        </div>
    `).join("");
    
    // Attach events
    document.querySelectorAll(".add-to-cart").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const prod = products.find(p => p.id === id);
            if (prod) addToCart(prod, 1);
        });
    });
    
    document.querySelectorAll(".wishlist-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const prod = products.find(p => p.id === id);
            if (prod) toggleWishlist(prod);
        });
    });
    
    document.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", (e) => {
            if (e.target.classList.contains("add-to-cart") || e.target.classList.contains("wishlist-btn")) return;
            const id = parseInt(card.dataset.id);
            const prod = products.find(p => p.id === id);
            if (prod) openProductModal(prod);
        });
    });
}

function openProductModal(product) {
    document.getElementById("modalImg").src = product.image;
    document.getElementById("modalTitle").innerText = product.name;
    document.getElementById("modalPrice").innerHTML = `${formatPrice(product.price)} دينار عراقي`;
    document.getElementById("modalRating").innerHTML = generateStars(product.rating) + ` (${product.rating})`;
    document.getElementById("modalDesc").innerText = product.desc;
    document.getElementById("modalStory").innerHTML = `<i class="fas fa-book-open"></i> ${product.story}`;
    modal.style.display = "flex";
    const buyBtn = document.getElementById("modalBuyBtn");
    buyBtn.onclick = () => {
        addToCart(product, 1);
        modal.style.display = "none";
    };
}

function setMood(mood) {
    currentMood = mood;
    document.querySelectorAll(".mood-btn").forEach(btn => {
        if (btn.dataset.mood === mood) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
    renderProducts();
}

// AI Chatbot Logic with Iraqi Accent
function getBotResponse(message) {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes("اقترح لي منتجات") || lowerMsg.includes("اقتراح")) {
        const suggestions = products.filter(p => p.type === currentMood).slice(0, 3).map(p => p.name).join("، ");
        return `🤖 هلا والله! حسب مزاجك (${getMoodName(currentMood)})، أقترح لك: ${suggestions}. شنو رأيك بهالمنتجات؟`;
    } 
    else if (lowerMsg.includes("منتجات رياضية") || lowerMsg.includes("رياضة") || lowerMsg.includes("fitness")) {
        const fitnessItems = products.filter(p => p.type === "fitness").map(p => p.name).slice(0, 3).join("، ");
        return `💪 أي والله! عندنا منتجات رياضية ممتازة: ${fitnessItems}. تريد تشتري شي؟`;
    }
    else if (lowerMsg.includes("أفضل منتج")) {
        const best = products.reduce((max, p) => p.rating > max.rating ? p : max, products[0]);
        return `🏆 أحسن منتج عندنا هو "${best.name}" بتقييم ${best.rating}/5 وسعره ${formatPrice(best.price)} دينار. تحب أضيفه للسلة؟`;
    }
    else if (lowerMsg.includes("جيمنج") || lowerMsg.includes("gaming")) {
        const gamingItems = products.filter(p => p.type === "gaming").map(p => p.name).slice(0, 3).join("، ");
        return `🎮 للاعبين المحترفين، ننصحك بـ: ${gamingItems}. كلها أجهزة قوية وبأسعار مناسبة!`;
    }
    else if (lowerMsg.includes("هدايا") || lowerMsg.includes("gifts")) {
        const giftItems = products.filter(p => p.type === "gifts").map(p => p.name).slice(0, 3).join("، ");
        return `🎁 شنو رأيك بهالهدايا: ${giftItems}. كلها مناسبة لجميع المناسبات!`;
    }
    else if (lowerMsg.includes("عراقي") || lowerMsg.includes("تراث")) {
        const iraqiItems = products.filter(p => p.type === "iraqi").map(p => p.name).slice(0, 3).join("، ");
        return `🇮🇶 هاي المنتجات التراثية العراقية: ${iraqiItems}. تعكس الأصالة والتراث العريق!`;
    }
    else {
        return `🤖 أهلاً وسهلاً! أنا مساعدك الذكي. جرب تسألني:<br>
        • "اقترح لي منتجات"<br>
        • "أريد منتجات رياضية"<br>
        • "أفضل منتج"<br>
        • "شنو الهدايا المناسبة؟"<br>
        • "منتجات عراقية"`;
    }
}

function getMoodName(mood) {
    const moods = {
        gaming: "جيمنج",
        fitness: "لياقة",
        casual: "كاجوال",
        gifts: "هدايا",
        iraqi: "تراث عراقي"
    };
    return moods[mood] || "عام";
}

// Chatbot Functions
function addChatMessage(text, isUser = false) {
    const chatMessages = document.getElementById("chatMessages");
    const messageDiv = document.createElement("div");
    messageDiv.className = isUser ? "user-message" : "bot-message";
    
    if (isUser) {
        messageDiv.innerHTML = `
            <div class="message-text">
                <i class="fas fa-user"></i> ${text}
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <i class="fas fa-robot"></i>
            <div class="message-text">${text}</div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendChatMessage() {
    const input = document.getElementById("chatInput");
    const message = input.value.trim();
    if (!message) return;
    
    addChatMessage(message, true);
    input.value = "";
    
    setTimeout(() => {
        const response = getBotResponse(message);
        addChatMessage(response, false);
    }, 500);
}

// Initialize page
function init() {
    renderProducts();
    updateCartUI();
    const wishCount = wishlist.length;
    if (wishCount > 0) {
        wishlistCountSpan.style.display = "inline-flex";
        wishlistCountSpan.innerText = wishCount;
    }
    
    // Load dark mode preference
    if (localStorage.getItem("iraqi_darkMode") === "true") {
        document.body.classList.add("dark");
    }
}

// Event Listeners
document.getElementById("sendChatBtn")?.addEventListener("click", sendChatMessage);
document.getElementById("chatInput")?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendChatMessage();
});

document.getElementById("chatbotToggle")?.addEventListener("click", () => {
    const chatWindow = document.getElementById("chatWindow");
    chatWindow.style.display = chatWindow.style.display === "flex" ? "none" : "flex";
});

document.getElementById("closeChat")?.addEventListener("click", () => {
    document.getElementById("chatWindow").style.display = "none";
});

document.getElementById("cartIconBtn")?.addEventListener("click", () => {
    cartSidebar.classList.toggle("open");
    renderCartSidebar();
});

document.getElementById("closeCart")?.addEventListener("click", () => {
    cartSidebar.classList.remove("open");
});

document.getElementById("wishlistBtn")?.addEventListener("click", () => {
    if (wishlist.length === 0) {
        showNotification("ماكو منتجات في المفضلة");
    } else {
        const wishlistNames = wishlist.map(p => `• ${p.name}`).join("\n");
        alert(`منتجاتك المفضلة:\n${wishlistNames}`);
    }
});

themeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("iraqi_darkMode", document.body.classList.contains("dark"));
});

searchInput?.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProducts();
});

document.querySelectorAll(".mood-btn").forEach(btn => {
    btn.addEventListener("click", (e) => setMood(e.currentTarget.dataset.mood));
});

document.getElementById("checkoutBtn")?.addEventListener("click", () => {
    if (cart.length === 0) {
        showNotification("السلة فارغة! أضف بعض المنتجات أولاً");
        return;
    }
    alert("شكراً لتسوقك من العراقي مارت! 🎉\nسيتم توصيل طلبك خلال 2-3 أيام");
    cart = [];
    updateCartUI();
    renderCartSidebar();
    showNotification("تم إتمام عملية الشراء بنجاح");
});

document.getElementById("closeModal")?.addEventListener("click", () => {
    modal.style.display = "none";
});

window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
    if (e.target === cartSidebar) cartSidebar.classList.remove("open");
};

// Start the app
init();