const menuData = {
    starters: {
        icon: '🥗',
        items: [
            {
                name: 'French Fries',
                description: 'Classic crisp fries with sea salt.',
                howMade: 'Fresh-cut potatoes fried until golden.',
                tasteProfile: 'Crispy, salty, and satisfying.',
                price: 100,
                emoji: '🍟',
                image: 'img/french_fries.jpg'
            },
            {
                name: 'Loaded Fries',
                description: 'Fries topped with cheese and sauces.',
                howMade: 'Crispy fries piled with cheddar and herbs.',
                tasteProfile: 'Cheesy, rich, and indulgent.',
                price: 160,
                emoji: '🧀',
                image: 'img/loaded_fries.jpg'
            },
            {
                name: 'Peri Peri Fries',
                description: 'Spicy peri peri seasoned fries.',
                howMade: 'Tossed in house-made peri peri spice.',
                tasteProfile: 'Spicy, smoky, and bold.',
                price: 130,
                emoji: '🌶️',
                image: 'img/peri_peri_fries.jpg'
            },
            {
                name: 'Cheese Balls',
                description: 'Golden fried cheese bites.',
                howMade: 'Crispy breadcrumb shell with molten cheese.',
                tasteProfile: 'Creamy and crunchy.',
                price: 150,
                emoji: '🧀',
                image: 'img/cheese_balls.jpg'
            },
            {
                name: 'Carribean Chicken Strips',
                description: 'Jerk-seasoned chicken strips with dip.',
                howMade: 'Marinated in Caribbean spices and grilled.',
                tasteProfile: 'Smoky, tangy, and vibrant.',
                price: 170,
                emoji: '🍗',
                image: 'img/Carribean_Chicken_Strips.jpg'
            },
            {
                name: 'Loaded Nachos',
                description: 'Tortilla chips with cheese and toppings.',
                howMade: 'Baked nachos loaded with salsa and cheese.',
                tasteProfile: 'Crunchy, cheesy, and zesty.',
                price: 150,
                emoji: '🌽',
                image: 'img/loaded_nachos.jpg'
            },
            {
                name: 'Chicken Nachos',
                description: 'Nachos topped with seasoned chicken.',
                howMade: 'Layered with chicken, cheese, and jalapeños.',
                tasteProfile: 'Spicy and savory.',
                price: 180,
                emoji: '🍗',
                image: 'img/chicken_nachos.jpg'
            },
            {
                name: 'Fish & Chips',
                description: 'Crispy battered fish with fries.',
                howMade: 'Beer-battered fish fried to golden perfection.',
                tasteProfile: 'Light, crunchy, and classic.',
                price: 170,
                emoji: '🐟',
                image: 'img/Fish_&_Chips.jpg'
            }
        ]
    },

    mexican: {
        icon: '🌮',
        items: [
            {
                name: 'Mexican Chicken Tacos',
                description: 'Soft tacos with chicken and salsa.',
                howMade: 'Grilled chicken stuffed in soft taco shells.',
                tasteProfile: 'Juicy and tangy.',
                price: 200,
                image: 'img/Mexican_Chicken_Tacos.jpg'
            },
            {
                name: 'Pepper Chicken Tacos',
                description: 'Peppery chicken with fresh veggies.',
                howMade: 'Pan-seared chicken with bell peppers.',
                tasteProfile: 'Spicy and aromatic.',
                price: 210,
                image: 'img/pepper_chicken_tacos.jpg'
            },
            {
                name: 'Paneer Tacos',
                description: 'Grilled paneer with Mexican spices.',
                howMade: 'Paneer marinated in chili and herbs.',
                tasteProfile: 'Smoky and cheesy.',
                price: 180,
                image: 'img/Paneer_Tacos.jpg'
            },
            {
                name: 'Peri Peri Chicken Tacos',
                description: 'Tacos with spicy peri peri chicken.',
                howMade: 'Chicken tossed in peri peri sauce.',
                tasteProfile: 'Hot, tangy, and bold.',
                price: 190,
                image: 'img/Peri_Peri_Chicken_Tacos.jpg'
            }
        ]
    },

    bowls: {
        icon: '🥣',
        items: [
            {
                name: 'Chicken Burrito Bowl',
                description: 'Rice bowl with seasoned chicken and salsa.',
                howMade: 'Layered with rice, beans, chicken, and toppings.',
                tasteProfile: 'Filling and savory.',
                price: 300,
                image: 'img/Chicken_Burrito_Bowl.jpg'
            },
            {
                name: 'Prawn Burrito Bowl',
                description: 'Seafood bowl with prawns and rice.',
                howMade: 'Prawns sautéed with garlic and herbs.',
                tasteProfile: 'Fresh and zesty.',
                price: 320,
                image: 'img/Prawn_Burrito_Bowl.jpg'
            },
            {
                name: 'Kataifi Prawn',
                description: 'Crunchy prawns wrapped in kataifi pastry.',
                howMade: 'Fried kataifi-wrapped prawns with dip.',
                tasteProfile: 'Crispy and aromatic.',
                price: 320,
                image: 'img/Kataifi_Prawn.jpg'
            },
            {
                name: 'Paneer Burrito Bowl',
                description: 'Rice bowl with spiced paneer and veggies.',
                howMade: 'Paneer served over seasoned rice.',
                tasteProfile: 'Creamy and satisfying.',
                price: 280,
                image: 'img/Paneer_Burrito_Bowl.jpg'
            }
        ]
    },

    sandwich: {
        icon: '🥪',
        items: [
            {
                name: 'Chicken Club Sandwich',
                description: 'Triple-decker sandwich with chicken and bacon.',
                howMade: 'Grilled chicken stacked with fresh veggies.',
                tasteProfile: 'Savory and hearty.',
                price: 200,
                image: 'img/Chicken_Club_Sandwich.jpg'
            },
            {
                name: 'Veg Club Sandwich',
                description: 'Layered sandwich loaded with vegetables.',
                howMade: 'Fresh veggies layered with sauces.',
                tasteProfile: 'Crunchy and light.',
                price: 160,
                image: 'img/Veg_Club_Sandwich.jpg'
            },
            {
                name: 'Paneer Club Sandwich',
                description: 'Paneer sandwich with fries or mashed potato.',
                howMade: 'Grilled paneer with fresh greens.',
                tasteProfile: 'Creamy and spicy.',
                price: 180,
                image: 'img/Paneer_Club_Sandwich.jpg'
            },
            {
                name: 'Paneer Steak',
                description: 'Spiced paneer steak with sides.',
                howMade: 'Paneer seared with herbs and spices.',
                tasteProfile: 'Smoky and rich.',
                price: 280,
                image: 'img/Paneer_Steak.jpg'
            },
            {
                name: 'Nutella Sandwich',
                description: 'Sweet chocolate hazelnut sandwich.',
                howMade: 'Toasted bread filled with Nutella.',
                tasteProfile: 'Sweet and indulgent.',
                price: 80,
                image: 'img/Nutella_Sandwich.jpg'
            }
        ]
    },

    momos: {
        icon: '🥟',
        items: [
            {
                name: 'Veg Momos - stream/fried/saucy',
                description: 'Steamed, fried, or saucy vegetable momos.',
                howMade: 'Soft dumplings served with chutney.',
                tasteProfile: 'Tender and savory.',
                price: '120/140/160',
                image: 'img/Veg_Momos.jpg'
            },
            {
                name: 'Chicken Momos - stream/fried/saucy',
                description: 'Steamed, fried, or saucy chicken momos.',
                howMade: 'Juicy chicken-filled dumplings.',
                tasteProfile: 'Spicy and succulent.',
                price: '150/160/180',
                image: 'img/Chicken_Momos.jpg'
            },
            {
                name: 'Paneer Momos',
                description: 'Dumplings stuffed with paneer.',
                howMade: 'Soft dumplings with spiced paneer.',
                tasteProfile: 'Creamy and light.',
                price: 150,
                image: 'img/Paneer_Momos.jpg'
            }
        ]
    },

    ramen: {
        icon: '🍜',
        items: [
            {
                name: 'Veg Ramen',
                description: 'Noodle soup with vegetables.',
                howMade: 'Broth simmered with vegetables and spices.',
                tasteProfile: 'Comforting and umami.',
                price: 240,
                image: 'img/Veg_Ramen.jpg'
            },
            {
                name: 'Chicken Ramen',
                description: 'Noodle soup with chicken.',
                howMade: 'Hearty chicken broth with noodles.',
                tasteProfile: 'Rich and savory.',
                price: 280,
                image: 'img/Chicken_Ramen.jpg'
            },
            {
                name: 'Veg Stir Fried Ramen',
                description: 'Pan-fried noodles with veggies.',
                howMade: 'Stir-fried noodles tossed with vegetables.',
                tasteProfile: 'Wok-charred and aromatic.',
                price: 180,
                image: 'img/Veg_Stir_Fried_Ramen.jpg'
            },
            {
                name: 'Chicken Stir Fried Ramen',
                description: 'Stir-fried noodles with chicken.',
                howMade: 'Noodles seared with chicken and sauces.',
                tasteProfile: 'Savory and satisfying.',
                price: 220,
                image: 'img/Chicken_Stir_Fried_Ramen.jpg'
            },
            {
                name: 'Miso Chicken Ramen',
                description: 'Miso-flavored ramen with chicken.',
                howMade: 'Miso broth simmered with chicken.',
                tasteProfile: 'Umami-rich and comforting.',
                price: 280,
                image: 'img/Miso_Chicken_Ramen.jpg'
            },
            {
                name: 'Creamy Ramen',
                description: 'Creamy broth ramen with soft noodles.',
                howMade: 'Rich, creamy broth poured over noodles.',
                tasteProfile: 'Velvety and indulgent.',
                price: 290,
                image: 'img/Creamy_Ramen.jpg'
            },
            {
                name: 'Tantanmen Ramen',
                description: 'Spicy sesame ramen with minced meat.',
                howMade: 'Noodles served in spicy sesame broth.',
                tasteProfile: 'Spicy and nutty.',
                price: 280,
                image: 'img/Tantanmen_Ramen.jpg'
            }
        ]
    },

    pasta: {
        icon: '🍝',
        items: [
            {
                name: 'Alfredo Pasta',
                description: 'Creamy Alfredo with veg or chicken.',
                howMade: 'Pasta tossed in rich cream sauce.',
                tasteProfile: 'Creamy and cheesy.',
                price: '200/250',
                image: 'img/Alfredo_Pasta.jpg'
            },
            {
                name: 'Arrabiata Pasta',
                description: 'Spicy tomato pasta with veg or chicken.',
                howMade: 'Pasta served in fiery tomato sauce.',
                tasteProfile: 'Spicy and tangy.',
                price: '200/250',
                image: 'img/Arrabiata_Pasta.jpg'
            },
            {
                name: 'Pesto Pasta',
                description: 'Basil pesto pasta with veg or chicken.',
                howMade: 'Pasta tossed in fresh pesto sauce.',
                tasteProfile: 'Herbaceous and bright.',
                price: '200/250',
                image: 'img/Pesto_Pasta.jpg'
            },
            {
                name: 'Mac & Cheese',
                description: 'Classic macaroni and cheese with add-on.',
                howMade: 'Baked macaroni in creamy cheese sauce.',
                tasteProfile: 'Rich and comforting.',
                price: '220/250',
                image: 'img/Mac_&_Cheese.jpg'
            }
        ]
    },

    wraps: {
        icon: '🌯',
        items: [
            {
                name: 'Paneer Wrap',
                description: 'Grilled paneer wrapped with veggies.',
                howMade: 'Paneer rolled in warm flatbread.',
                tasteProfile: 'Spicy and fresh.',
                price: 160,
                image: 'img/Paneer_Wrap.jpg'
            },
            {
                name: 'Chicken Wrap',
                description: 'Seasoned chicken wrapped with salad.',
                howMade: 'Chicken and greens wrapped in tortilla.',
                tasteProfile: 'Juicy and zesty.',
                price: 180,
                image: 'img/Chicken_Wrap.jpg'
            }
        ]
    }
};

const categoryOrder = [
    'all',
    'starters',
    'mexican',
    'bowls',
    'sandwich',
    'momos',
    'ramen',
    'pasta',
    'wraps'
];

const categoryLabels = {
    all: 'All',
    starters: 'Starters',
    mexican: 'Mexican',
    bowls: 'Burrito Bowls',
    sandwich: 'Sandwiches',
    momos: 'Momos',
    ramen: 'Ramen',
    pasta: 'Pasta',
    wraps: 'Wraps'
};

const categoryIcons = {
    all: '🍽️',
    starters: '🥗',
    mexican: '🌮',
    bowls: '🥣',
    sandwich: '🥪',
    momos: '🥟',
    ramen: '🍜',
    pasta: '🍝',
    wraps: '🌯'
};

let currentCategory = 'all';

const backgroundMusic = document.getElementById('backgroundMusic');

const playlist = [
    'vennilave.mp3',
    'ghilli.mp3'
];

let currentSongIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    initializeMenu();
    setupModal();
    setupSearch();
    setupAudio();
});

function initializeMenu() {
    const categoriesContainer = document.getElementById('menuCategories');

    categoryOrder.forEach((category, index) => {
        const card = document.createElement('button');
        card.className = 'category-card' + (index === 0 ? ' active' : '');

        card.innerHTML = `
            <div class="category-icon">${categoryIcons[category]}</div>
            <span>${categoryLabels[category]}</span>
        `;

        card.addEventListener('click', () => selectCategory(category, card));
        categoriesContainer.appendChild(card);
    });

    renderMenuItems();
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.classList.add('search-input');

    searchInput.addEventListener('input', () => {
        renderMenuItems();
    });
}

function getSearchQuery() {
    return document.getElementById('searchInput').value.trim().toLowerCase();
}

function getFilteredItems() {
    const query = getSearchQuery();

    const allItems = categoryOrder
        .filter(category => category !== 'all')
        .flatMap(category => menuData[category].items);

    const items = currentCategory === 'all'
        ? allItems
        : menuData[currentCategory].items;

    if (!query) {
        return items;
    }

    return items.filter(item => {
        const searchable = `${item.name} ${item.description} ${item.howMade} ${item.tasteProfile}`.toLowerCase();
        return searchable.includes(query);
    });
}

function renderMenuItems() {
    const cards = document.querySelectorAll('.category-card');
    cards.forEach(card => {
        card.classList.toggle('active', card.textContent.trim() === categoryLabels[currentCategory]);
    });

    const container = document.getElementById('menuItemsContainer');
    container.innerHTML = '';

    const filteredItems = getFilteredItems();

    if (filteredItems.length === 0) {
        container.innerHTML = '<p class="no-results">No dishes match your search. Try another keyword.</p>';
        return;
    }

    filteredItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-item-card';

        const imageMarkup = item.image
            ? `<img src="${item.image}" alt="${item.name}" />`
            : `<span>${item.emoji}</span>`;

        card.innerHTML = `
            <div class="menu-item-image">${imageMarkup}</div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                  <h3>${item.name}</h3>
                  ${item.price ? `<div class="menu-item-price">₹${item.price}</div>` : ''}
                </div>
                <p>${item.description}</p>
                <button class="view-btn">View Details</button>
            </div>
        `;

        card.querySelector('.view-btn').addEventListener('click', () => showDetails(item));
        container.appendChild(card);
    });
}

function selectCategory(category, cardElement) {
    currentCategory = category;
    renderMenuItems();
}

function showDetails(item) {
    document.getElementById('modalTitle').textContent = item.name;
    const modalPriceEl = document.getElementById('modalPrice');
    if (modalPriceEl) modalPriceEl.textContent = item.price ? `₹${item.price}` : '';
    document.getElementById('modalHowMade').textContent = item.howMade;
    document.getElementById('modalTasteProfile').textContent = item.tasteProfile;

    const modalImage = document.getElementById('modalImage');
    modalImage.innerHTML = item.image
        ? `<img src="${item.image}" alt="${item.name}" />`
        : `<span>${item.emoji}</span>`;

    document.getElementById('detailModal').classList.add('show');
    // mark body so headers can be hidden while modal is open
    document.body.classList.add('modal-open');
}

function setupModal() {
    const modal = document.getElementById('detailModal');

    document.getElementById('modalClose').addEventListener('click', () => {
        modal.classList.remove('show');
        document.body.classList.remove('modal-open');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.classList.remove('modal-open');
        }
    });

    // close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.classList.remove('modal-open');
        }
    });
}

function setupAudio() {
    const toggle = document.getElementById('audioToggle');
    
    backgroundMusic.volume = 0.25;
    
    loadAndPlaySong(0);
    
    toggle.addEventListener('click', () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play().catch(() => {});
            toggle.textContent = 'Pause Background Music';
        } else {
            backgroundMusic.pause();
            toggle.textContent = 'Play Background Music';
        }
    });

    backgroundMusic.addEventListener('play', () => {
        toggle.textContent = 'Pause Background Music';
    });
    
    backgroundMusic.addEventListener('pause', () => {
        toggle.textContent = 'Play Background Music';
    });
    
    backgroundMusic.addEventListener('ended', () => {
        playNextSong();
    });
}

function loadAndPlaySong(index) {
    backgroundMusic.src = playlist[index];
    backgroundMusic.play().catch(() => {});
    currentSongIndex = index;
}

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadAndPlaySong(currentSongIndex);
}

function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
