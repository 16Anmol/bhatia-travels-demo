// Package data and functionality
const packagesData = {
    international: [
        {
            id: 1,
            name: "New York City Explorer",
            price: "₹1,25,000",
            image: "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
            description: "Experience the city that never sleeps with iconic landmarks, Broadway shows, and vibrant culture",
            fullDescription: "Discover the magic of New York City with visits to Times Square, Central Park, Statue of Liberty, Empire State Building, and Broadway shows. Enjoy world-class dining, shopping on Fifth Avenue, and the cultural diversity that makes NYC unique.",
            highlights: ["Times Square", "Central Park", "Statue of Liberty", "Empire State Building", "Broadway Shows"],
            category: "America"
        },
        {
            id: 2,
            name: "New York & Niagara Falls",
            price: "₹1,45,000",
            image: "https://storage.needpix.com/rsynced_images/niagara-falls-3589433_1280.jpg",
            description: "Combine the excitement of NYC with the natural wonder of Niagara Falls",
            fullDescription: "A perfect combination of urban excitement and natural beauty. Explore New York's famous attractions and then witness the breathtaking Niagara Falls. Includes boat rides, observation decks, and scenic helicopter tours.",
            highlights: ["NYC Attractions", "Niagara Falls", "Boat Rides", "Helicopter Tours", "Scenic Views"],
            category: "America"
        },
        {
            id: 3,
            name: "London Royal Heritage",
            price: "₹95,000",
            image: "https://live.staticflickr.com/2840/10658001973_72cd1bb333_b.jpg",
            description: "Explore London's royal palaces, historic landmarks, and cultural treasures",
            fullDescription: "Immerse yourself in London's rich history with visits to Buckingham Palace, Tower of London, Westminster Abbey, and Big Ben. Experience traditional afternoon tea, Thames river cruise, and world-class museums.",
            highlights: ["Buckingham Palace", "Tower of London", "Westminster Abbey", "Thames Cruise", "British Museum"],
            category: "London"
        },
        {
            id: 4,
            name: "London & Scotland",
            price: "₹1,15,000",
            image: "https://images.pexels.com/photos/20350233/pexels-photo-20350233/free-photo-of-cloud-over-hills-in-scotland.jpeg",
            description: "Discover the best of England and Scotland with historic castles and scenic highlands",
            fullDescription: "Journey through London's iconic sites and Scotland's breathtaking landscapes. Visit Edinburgh Castle, explore the Scottish Highlands, enjoy whisky tastings, and experience the charm of both cultures.",
            highlights: ["London Sightseeing", "Edinburgh Castle", "Scottish Highlands", "Whisky Tasting", "Cultural Tours"],
            category: "London"
        },
        {
            id: 5,
            name: "Dubai Luxury Experience",
            price: "₹36,000",
            image: "https://upload.wikimedia.org/wikipedia/en/f/f2/Dubai_-_Burj_Al_Arab_-_Helicopter_View.jpg",
            description: "Experience luxury and modern architecture in the city of gold",
            fullDescription: "Discover Dubai's architectural marvels including Burj Khalifa, luxury shopping at Dubai Mall, desert safari adventures, and traditional dhow cruises. Experience the perfect blend of modern luxury and Arabian culture.",
            highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Dhow Cruise", "Luxury Hotels"],
            category: "Dubai"
        },
        {
            id: 6,
            name: "Dubai & Abu Dhabi",
            price: "₹42,000",
            image: "https://images.pexels.com/photos/19965889/pexels-photo-19965889/free-photo-of-the-skyline-of-abu-dhabi-united-arab-emirates.jpeg",
            description: "Explore both Emirates with modern attractions and cultural experiences",
            fullDescription: "A comprehensive UAE experience covering Dubai's futuristic attractions and Abu Dhabi's cultural landmarks. Visit Sheikh Zayed Mosque, Ferrari World, Louvre Abu Dhabi, and enjoy the best of both emirates.",
            highlights: ["Dubai Attractions", "Sheikh Zayed Mosque", "Ferrari World", "Louvre Abu Dhabi", "Cultural Sites"],
            category: "Dubai"
        },
        {
            id: 7,
            name: "Bali Temple & Beach",
            price: "₹49,500",
            image: "https://live.staticflickr.com/5302/5779381745_58ac1403b8_b.jpg",
            description: "Discover the magic of Bali with ancient temples and pristine beaches",
            fullDescription: "Experience Bali's spiritual side with temple visits to Tanah Lot, Uluwatu, and Besakih. Relax on beautiful beaches, enjoy traditional Balinese culture, and witness stunning sunsets over the Indian Ocean.",
            highlights: ["Tanah Lot Temple", "Uluwatu Temple", "Beach Resorts", "Cultural Shows", "Sunset Views"],
            category: "Bali"
        },
        {
            id: 8,
            name: "Bali Adventure & Culture",
            price: "₹55,000",
            image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Canyoning_Bali_-_Adventure_%26_Spirit_-_Kalimudah_the_team-_Bali_canyoning.JPG",
            description: "Adventure activities combined with rich Balinese culture and traditions",
            fullDescription: "An action-packed Bali experience with volcano trekking, white water rafting, rice terrace walks, and cultural village visits. Perfect for adventure seekers who want to experience authentic Balinese life.",
            highlights: ["Volcano Trekking", "White Water Rafting", "Rice Terraces", "Cultural Villages", "Adventure Sports"],
            category: "Bali"
        }
    ],
    domestic: [
        {
            id: 11,
            name: "Rajasthan Royal Heritage",
            price: "₹15,000",
            image: "https://indiawalkthrough.com/wp-content/uploads/2023/11/image-159.jpeg",
            description: "Explore the royal palaces, forts, and vibrant culture of the Land of Kings",
            fullDescription: "Journey through Rajasthan's magnificent cities including Jaipur, Udaipur, Jodhpur, and Jaisalmer. Experience royal palaces, ancient forts, camel safaris in the Thar Desert, and the rich cultural heritage of the Rajput kingdoms.",
            highlights: ["Amber Palace", "City Palace Udaipur", "Mehrangarh Fort", "Thar Desert Safari", "Cultural Shows"],
            category: "Domestic"
        },
        {
            id: 12,
            name: "Kashmir Paradise",
            price: "₹18,000",
            image: "https://live.staticflickr.com/8026/7666020888_8c7423d19c_b.jpg",
            description: "Experience the breathtaking beauty of Kashmir, the Paradise on Earth",
            fullDescription: "Discover the stunning landscapes of Kashmir with visits to Srinagar, Gulmarg, Pahalgam, and Sonamarg. Enjoy shikara rides on Dal Lake, stay in traditional houseboats, and witness the snow-capped Himalayan peaks.",
            highlights: ["Dal Lake Shikara", "Gulmarg Gondola", "Pahalgam Valleys", "Mughal Gardens", "Houseboat Stay"],
            category: "Domestic"
        },
        {
            id: 13,
            name: "Goa Beach Bliss",
            price: "₹12,000",
            image: "https://images.pexels.com/photos/29023464/pexels-photo-29023464/free-photo-of-scenic-view-of-anjuna-beach-goa-s-coastline.jpeg",
            description: "Relax on pristine beaches and enjoy the vibrant nightlife of Goa",
            fullDescription: "Experience the best of Goa with its beautiful beaches, Portuguese colonial architecture, vibrant markets, and exciting water sports. Perfect blend of relaxation and adventure in India's beach paradise.",
            highlights: ["Baga Beach", "Basilica of Bom Jesus", "Spice Plantations", "Water Sports", "Beach Parties"],
            category: "Domestic"
        },
        {
            id: 14,
            name: "Mussoorie Hill Station",
            price: "₹10,000",
            image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Mussoorie_hill_station_in_india.jpg",
            description: "Escape to the Queen of Hills with scenic mountain views and pleasant weather",
            fullDescription: "Enjoy the cool mountain air and stunning views of Mussoorie. Visit Kempty Falls, Gun Hill, and the famous Mall Road. Perfect destination for families and couples seeking a peaceful hill station experience.",
            highlights: ["Kempty Falls", "Gun Hill", "Mall Road", "Camel's Back Road", "Mountain Views"],
            category: "Domestic"
        },
        {
            id: 15,
            name: "Kerala Backwaters",
            price: "₹16,000",
            image: "https://live.staticflickr.com/3277/2535893402_6c78f420d8_b.jpg",
            description: "Cruise through the serene backwaters and experience God's Own Country",
            fullDescription: "Explore Kerala's famous backwaters in Alleppey and Kumarakom. Stay in traditional houseboats, visit spice gardens in Munnar, and experience the rich cultural heritage of Kerala with Kathakali performances.",
            highlights: ["Houseboat Cruise", "Munnar Tea Gardens", "Spice Plantations", "Kathakali Shows", "Ayurvedic Spa"],
            category: "Domestic"
        },
        {
            id: 16,
            name: "Himachal Adventure",
            price: "₹14,000",
            image: "https://pixahive.com/wp-content/uploads/2020/11/StepfarmentationDahouseyHimachal-Pradesh-211378-pixahive.jpg",
            description: "Adventure and scenic beauty in the mountains of Himachal Pradesh",
            fullDescription: "Explore the beautiful hill stations of Shimla, Manali, and Dharamshala. Enjoy adventure activities like paragliding, river rafting, and trekking while experiencing the serene mountain landscapes.",
            highlights: ["Shimla Mall Road", "Manali Adventure", "Rohtang Pass", "Dharamshala Monasteries", "Paragliding"],
            category: "Domestic"
        },
        {
            id: 17,
            name: "Uttarakhand Spiritual Journey",
            price: "₹13,000",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Nainital_metro.jpg",
            description: "Spiritual journey through the sacred sites and hill stations of Uttarakhand",
            fullDescription: "Visit the holy cities of Haridwar and Rishikesh, experience the spiritual atmosphere of the Ganges, and explore the beautiful hill stations of Nainital and Dehradun in the lap of the Himalayas.",
            highlights: ["Har Ki Pauri", "Rishikesh Ashrams", "Nainital Lake", "Valley of Flowers", "Ganga Aarti"],
            category: "Domestic"
        },
        {
            id: 18,
            name: "Andaman Island Paradise",
            price: "₹22,000",
            image: "https://images.pexels.com/photos/29175703/pexels-photo-29175703/free-photo-of-pristine-beach-in-andaman-and-nicobar-islands.jpeg",
            description: "Tropical paradise with pristine beaches and crystal clear waters",
            fullDescription: "Discover the untouched beauty of Andaman Islands with visits to Port Blair, Havelock Island, and Neil Island. Enjoy water sports, coral reef snorkeling, and relax on some of India's most beautiful beaches.",
            highlights: ["Radhanagar Beach", "Cellular Jail", "Scuba Diving", "Coral Reefs", "Water Sports"],
            category: "Domestic"
        }
    ]
};

// Function to create package card HTML
function createPackageCard(pkg) {
    return `
        <div class="col-lg-4 col-md-6">
            <div class="card h-100 border-0 shadow-sm hover-card package-card" data-package-id="${pkg.id}">
                <div class="position-relative">
                    <img src="${pkg.image}" class="card-img-top" alt="${pkg.name}" style="height: 250px; object-fit: cover;">
                    <div class="position-absolute top-0 end-0 m-3">
                        <span class="badge bg-danger fs-6 fw-semibold">${pkg.price} onwards</span>
                    </div>
                    <div class="position-absolute top-0 start-0 m-3">
                        <span class="badge bg-white text-danger">${pkg.category}</span>
                    </div>
                    <div class="position-absolute top-50 start-50 translate-middle package-overlay">
                        <i class="bi bi-eye text-white fs-1"></i>
                    </div>
                </div>
                <div class="card-body p-4">
                    <h5 class="card-title fw-bold mb-3">${pkg.name}</h5>
                    <p class="card-text text-muted mb-4" style="height: 60px; overflow: hidden;">${pkg.description}</p>
                    <div class="d-flex gap-2">
                        <button class="btn btn-danger btn-sm flex-fill view-package-btn" data-package-id="${pkg.id}">
                            View More
                        </button>
                        <a href="tel:+919814927575" class="btn btn-outline-danger btn-sm">
                            <i class="bi bi-telephone"></i>
                        </a>
                        <button class="btn btn-success btn-sm whatsapp-btn" data-package-name="${pkg.name}" data-package-price="${pkg.price}">
                            <i class="bi bi-whatsapp"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to load packages
function loadPackages() {
    const internationalContainer = document.getElementById('internationalPackages');
    const domesticContainer = document.getElementById('domesticPackages');

    // Load international packages
    internationalContainer.innerHTML = packagesData.international.map(pkg => createPackageCard(pkg)).join('');

    // Load domestic packages
    domesticContainer.innerHTML = packagesData.domestic.map(pkg => createPackageCard(pkg)).join('');
}

// Function to show package modal
function showPackageModal(packageId) {
    const allPackages = [...packagesData.international, ...packagesData.domestic];
    const pkg = allPackages.find(p => p.id === packageId);
    
    if (!pkg) return;

    const modalHTML = `
        <div class="modal fade" id="packageModal" tabindex="-1" aria-labelledby="packageModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-0">
                        <div class="row g-0">
                            <div class="col-lg-6">
                                <img src="${pkg.image}" class="img-fluid w-100" alt="${pkg.name}" style="height: 500px; object-fit: cover;">
                            </div>
                            <div class="col-lg-6 p-4">
                                <div class="mb-4">
                                    <h2 class="fw-bold mb-3">Tour Package For ${pkg.name}</h2>
                                    <span class="badge bg-danger fs-6 px-3 py-2">${pkg.price} onwards</span>
                                </div>
                                
                                <div class="mb-4">
                                    <p class="text-muted">${pkg.fullDescription}</p>
                                </div>
                                
                                <div class="mb-4">
                                    <h5 class="fw-bold mb-3">Package Highlights:</h5>
                                    <ul class="list-unstyled">
                                        ${pkg.highlights.map(highlight => `
                                            <li class="d-flex align-items-center mb-2">
                                                <i class="bi bi-geo-alt text-danger me-2"></i>
                                                <span>${highlight}</span>
                                            </li>
                                        `).join('')}
                                    </ul>
                                </div>
                                
                                <div class="d-flex gap-2">
                                    <button class="btn btn-danger flex-fill book-now-btn" data-package-name="${pkg.name}" data-package-price="${pkg.price}">
                                        Book Now
                                    </button>
                                    <a href="tel:+919814927575" class="btn btn-outline-danger flex-fill">
                                        <i class="bi bi-telephone me-2"></i>Call Now
                                    </a>
                                    <button class="btn btn-success px-4 whatsapp-btn" data-package-name="${pkg.name}" data-package-price="${pkg.price}">
                                        <i class="bi bi-whatsapp"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Remove existing modal
    const existingModal = document.getElementById('packageModal');
    if (existingModal) {
        existingModal.remove();
    }

    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('packageModal'));
    modal.show();

    // Add event listeners for modal buttons
    addModalEventListeners();
}

// Function to add event listeners for modal buttons
function addModalEventListeners() {
    // WhatsApp buttons
    document.querySelectorAll('.whatsapp-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const packageName = this.dataset.packageName;
            const packagePrice = this.dataset.packagePrice;
            const message = `Hi, I'm interested in the ${packageName} package (${packagePrice}). Please provide more information about the itinerary, inclusions, and booking process.`;
            const whatsappURL = `https://wa.me/919814927575?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        });
    });

    // Book now buttons
    document.querySelectorAll('.book-now-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const packageName = this.dataset.packageName;
            const packagePrice = this.dataset.packagePrice;
            const message = `Hi, I want to book the ${packageName} package (${packagePrice}). Please help me with the booking process and provide detailed information about the itinerary, inclusions, and payment options.`;
            const whatsappURL = `https://wa.me/919814927575?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        });
    });
}

// Initialize packages page
document.addEventListener('DOMContentLoaded', function() {
    loadPackages();

    // Add event listeners for view package buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-package-btn') || e.target.closest('.view-package-btn')) {
            const btn = e.target.classList.contains('view-package-btn') ? e.target : e.target.closest('.view-package-btn');
            const packageId = parseInt(btn.dataset.packageId);
            showPackageModal(packageId);
        }

        // Handle package card clicks
        if (e.target.closest('.package-card')) {
            const card = e.target.closest('.package-card');
            const packageId = parseInt(card.dataset.packageId);
            showPackageModal(packageId);
        }
    });

    // Add initial event listeners for WhatsApp buttons
    addModalEventListeners();

    // Add hover effects for package cards
    document.addEventListener('mouseenter', function(e) {
        if (e.target.closest('.package-card')) {
            const overlay = e.target.closest('.package-card').querySelector('.package-overlay');
            if (overlay) {
                overlay.style.opacity = '1';
            }
        }
    }, true);

    document.addEventListener('mouseleave', function(e) {
        if (e.target.closest('.package-card')) {
            const overlay = e.target.closest('.package-card').querySelector('.package-overlay');
            if (overlay) {
                overlay.style.opacity = '0';
            }
        }
    }, true);
});

// Add CSS for package overlay
const style = document.createElement('style');
style.textContent = `
    .package-overlay {
        opacity: 0;
        transition: opacity 0.3s ease;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        width: 80px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .package-card {
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    
    .package-card:hover {
        transform: translateY(-5px);
    }
    
    .package-card img {
        transition: transform 0.3s ease;
    }
    
    .package-card:hover img {
        transform: scale(1.05);
    }
`;
document.head.appendChild(style);