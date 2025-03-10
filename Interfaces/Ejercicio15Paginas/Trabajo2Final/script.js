// Data for products
const products = {
    books: [
      {
        id: "book1",
        title: "El nombre del viento",
        titleEn: "The Name of the Wind",
        price: 19.99,
        image: "/placeholder.svg?height=300&width=200",
        summary: "Una aventura épica que narra la historia de Kvothe, un músico, ladrón, mago y leyenda.",
        summaryEn: "An epic adventure that tells the story of Kvothe, a musician, thief, magician, and legend.",
      },
      {
        id: "book2",
        title: "Cien años de soledad",
        titleEn: "One Hundred Years of Solitude",
        price: 15.99,
        image: "/placeholder.svg?height=300&width=200",
        summary: "La historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo.",
        summaryEn: "The story of the Buendía family through seven generations in the fictional town of Macondo.",
      },
      {
        id: "book3",
        title: "Don Quijote de la Mancha",
        titleEn: "Don Quixote",
        price: 12.99,
        image: "/placeholder.svg?height=300&width=200",
        summary: "Las aventuras del ingenioso hidalgo Don Quijote de la Mancha y su fiel escudero Sancho Panza.",
        summaryEn:
          "The adventures of the ingenious nobleman Don Quixote of La Mancha and his faithful squire Sancho Panza.",
      },
    ],
    audiobooks: [
      {
        id: "audiobook1",
        title: "Harry Potter y la piedra filosofal",
        titleEn: "Harry Potter and the Philosopher's Stone",
        price: 24.99,
        image: "/placeholder.svg?height=300&width=200",
        audio: "audiobook1.mp3", // Placeholder, user will provide actual files
        summary: "La historia del joven mago Harry Potter y su primer año en Hogwarts.",
        summaryEn: "The story of young wizard Harry Potter and his first year at Hogwarts.",
      },
      {
        id: "audiobook2",
        title: "El Hobbit",
        titleEn: "The Hobbit",
        price: 22.99,
        image: "/placeholder.svg?height=300&width=200",
        audio: "audiobook2.mp3", // Placeholder, user will provide actual files
        summary: "La aventura de Bilbo Bolsón, un hobbit que emprende un viaje inesperado.",
        summaryEn: "The adventure of Bilbo Baggins, a hobbit who embarks on an unexpected journey.",
      },
      {
        id: "audiobook3",
        title: "La sombra del viento",
        titleEn: "The Shadow of the Wind",
        price: 21.99,
        image: "/placeholder.svg?height=300&width=200",
        audio: "audiobook3.mp3", // Placeholder, user will provide actual files
        summary: "Un joven encuentra un libro misterioso que cambia su vida en la Barcelona de posguerra.",
        summaryEn: "A young man finds a mysterious book that changes his life in post-war Barcelona.",
      },
    ],
    movies: [
      {
        id: "movie1",
        title: "El laberinto del fauno",
        titleEn: "Pan's Labyrinth",
        price: 14.99,
        image: "/placeholder.svg?height=300&width=200",
        video: "movie1.mp4", // Placeholder, user will provide actual files
        summary: "Una niña se adentra en un mundo mágico y oscuro durante la posguerra española.",
        summaryEn: "A girl enters a magical and dark world during the Spanish post-war period.",
      },
      {
        id: "movie2",
        title: "Todo sobre mi madre",
        titleEn: "All About My Mother",
        price: 13.99,
        image: "/placeholder.svg?height=300&width=200",
        video: "movie2.mp4", // Placeholder, user will provide actual files
        summary: "Tras la muerte de su hijo, una mujer busca al padre de este, que ahora vive como mujer.",
        summaryEn: "After her son's death, a woman searches for his father, who now lives as a woman.",
      },
      {
        id: "movie3",
        title: "Relatos salvajes",
        titleEn: "Wild Tales",
        price: 12.99,
        image: "/placeholder.svg?height=300&width=200",
        video: "movie3.mp4", // Placeholder, user will provide actual files
        summary: "Seis historias independientes que exploran la violencia y la venganza.",
        summaryEn: "Six independent stories that explore violence and revenge.",
      },
    ],
  }
  
  // Translations
  const translations = {
    es: {
      logo: "Tienda Multimedia",
      searchPlaceholder: "Buscar productos...",
      searchButton: "Buscar",
      languageToggle: "English",
      booksTitle: "Libros",
      audiobooksTitle: "Audiolibros",
      moviesTitle: "Películas",
      addToCart: "Añadir al carrito",
      cartTitle: "Carrito de Compra",
      cartEmpty: "Tu carrito está vacío",
      cartTotal: "Total:",
      clearCart: "Vaciar Carrito",
      footerText: "© 2025 Tienda Multimedia. Todos los derechos reservados.",
      play: "Reproducir",
      pause: "Pausar",
      removeFromCart: "Eliminar",
    },
    en: {
      logo: "Multimedia Store",
      searchPlaceholder: "Search products...",
      searchButton: "Search",
      languageToggle: "Español",
      booksTitle: "Books",
      audiobooksTitle: "Audiobooks",
      moviesTitle: "Movies",
      addToCart: "Add to cart",
      cartTitle: "Shopping Cart",
      cartEmpty: "Your cart is empty",
      cartTotal: "Total:",
      clearCart: "Clear Cart",
      footerText: "© 2025 Multimedia Store. All rights reserved.",
      play: "Play",
      pause: "Pause",
      removeFromCart: "Remove",
    },
  }
  
  // Global variables
  let currentLanguage = "es"
  let cart = []
  
  // DOM elements
  const languageToggle = document.getElementById("language-toggle")
  const cartIcon = document.getElementById("cart-icon")
  const cartModal = document.getElementById("cart-modal")
  const closeCartModal = document.querySelector(".close")
  const cartItems = document.getElementById("cart-items")
  const cartTotal = document.getElementById("cart-total")
  const clearCartButton = document.getElementById("clear-cart")
  const searchInput = document.getElementById("search-input")
  const searchButton = document.getElementById("search-button")
  
  // Initialize the page
  function initializePage() {
    renderProducts("books", products.books)
    renderProducts("audiobooks", products.audiobooks)
    renderProducts("movies", products.movies)
    updateLanguage()
  
    // Load cart from localStorage if available
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      cart = JSON.parse(savedCart)
      updateCartCount()
    }
  }
  
  // Render products
  function renderProducts(category, productsList) {
    const container = document.getElementById(`${category}-row`)
    container.innerHTML = ""
  
    productsList.forEach((product) => {
      const productCard = document.createElement("div")
      productCard.className = "product-card"
      productCard.dataset.id = product.id
  
      let mediaElement = ""
      if (category === "audiobooks") {
        mediaElement = `
                  <div class="media-controls">
                      <audio controls>
                          <source src="${product.audio}" type="audio/mpeg">
                          Tu navegador no soporta el elemento de audio.
                      </audio>
                  </div>
              `
      } else if (category === "movies") {
        mediaElement = `
                  <div class="media-controls">
                      <video controls>
                          <source src="${product.video}" type="video/mp4">
                          Tu navegador no soporta el elemento de video.
                      </video>
                  </div>
              `
      }
  
      productCard.innerHTML = `
              <img src="${product.image}" alt="${product.title}" class="product-image">
              <div class="product-info">
                  <h3 class="product-title">${currentLanguage === "es" ? product.title : product.titleEn}</h3>
                  <p class="product-price">${product.price.toFixed(2)}€</p>
                  <button class="add-to-cart" data-id="${product.id}" data-category="${category}">
                      ${translations[currentLanguage].addToCart}
                  </button>
                  ${mediaElement}
              </div>
              <div class="product-summary">
                  <p>${currentLanguage === "es" ? product.summary : product.summaryEn}</p>
              </div>
          `
  
      container.appendChild(productCard)
    })
  }
  
  // Update language
  function updateLanguage() {
    // Update UI elements
    document.getElementById("logo").textContent = translations[currentLanguage].logo
    document.getElementById("search-input").placeholder = translations[currentLanguage].searchPlaceholder
    document.getElementById("search-button").textContent = translations[currentLanguage].searchButton
    document.getElementById("language-toggle").textContent = translations[currentLanguage].languageToggle
    document.getElementById("books-title").textContent = translations[currentLanguage].booksTitle
    document.getElementById("audiobooks-title").textContent = translations[currentLanguage].audiobooksTitle
    document.getElementById("movies-title").textContent = translations[currentLanguage].moviesTitle
    document.getElementById("cart-title").textContent = translations[currentLanguage].cartTitle
    document.getElementById("cart-total-label").textContent = `${translations[currentLanguage].cartTotal} `
    document.getElementById("clear-cart").textContent = translations[currentLanguage].clearCart
    document.getElementById("footer-text").textContent = translations[currentLanguage].footerText
  
    // Update product titles and buttons
    document.querySelectorAll(".add-to-cart").forEach((button) => {
      button.textContent = translations[currentLanguage].addToCart
    })
  
    // Re-render products with updated language
    renderProducts("books", products.books)
    renderProducts("audiobooks", products.audiobooks)
    renderProducts("movies", products.movies)
  
    // Update cart if open
    renderCart()
  }
  
  // Toggle language
  languageToggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "es" ? "en" : "es"
    updateLanguage()
  })
  
  // Add to cart
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      const productId = e.target.dataset.id
      const category = e.target.dataset.category
  
      // Find the product
      const product = products[category].find((p) => p.id === productId)
  
      // Check if product is already in cart
      const existingItem = cart.find((item) => item.id === productId)
  
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        cart.push({
          id: product.id,
          title: product.title,
          titleEn: product.titleEn,
          price: product.price,
          category: category,
          quantity: 1,
        })
      }
  
      // Save cart to localStorage
      localStorage.setItem("cart", JSON.stringify(cart))
  
      // Update cart count
      updateCartCount()
  
      // Show a brief animation on the cart icon
      cartIcon.classList.add("cart-added")
      setTimeout(() => {
        cartIcon.classList.remove("cart-added")
      }, 300)
    }
  })
  
  // Update cart count
  function updateCartCount() {
    const cartCount = document.getElementById("cart-count")
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
    cartCount.textContent = totalItems
  }
  
  // Open cart modal
  cartIcon.addEventListener("click", () => {
    renderCart()
    cartModal.style.display = "block"
  })
  
  // Close cart modal
  closeCartModal.addEventListener("click", () => {
    cartModal.style.display = "none"
  })
  
  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === cartModal) {
      cartModal.style.display = "none"
    }
  })
  
  // Render cart
  function renderCart() {
    if (cart.length === 0) {
      cartItems.innerHTML = `<p class="cart-empty">${translations[currentLanguage].cartEmpty}</p>`
      cartTotal.textContent = "0.00"
      return
    }
  
    cartItems.innerHTML = ""
    let total = 0
  
    cart.forEach((item) => {
      const itemTotal = item.price * item.quantity
      total += itemTotal
  
      const cartItem = document.createElement("div")
      cartItem.className = "cart-item"
      cartItem.innerHTML = `
              <div class="cart-item-info">
                  <div class="cart-item-title">${currentLanguage === "es" ? item.title : item.titleEn}</div>
                  <div class="cart-item-price">${item.price.toFixed(2)}€ x ${item.quantity}</div>
              </div>
              <button class="remove-from-cart" data-id="${item.id}">
                  ${translations[currentLanguage].removeFromCart}
              </button>
          `
  
      cartItems.appendChild(cartItem)
    })
  
    cartTotal.textContent = total.toFixed(2)
  }
  
  // Remove from cart
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-from-cart")) {
      const productId = e.target.dataset.id
  
      // Find the item index
      const itemIndex = cart.findIndex((item) => item.id === productId)
  
      if (itemIndex !== -1) {
        // If quantity is more than 1, decrease quantity
        if (cart[itemIndex].quantity > 1) {
          cart[itemIndex].quantity -= 1
        } else {
          // Otherwise remove the item
          cart.splice(itemIndex, 1)
        }
  
        // Save cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart))
  
        // Update cart count
        updateCartCount()
  
        // Re-render cart
        renderCart()
      }
    }
  })
  
  // Clear cart
  clearCartButton.addEventListener("click", () => {
    cart = []
    localStorage.removeItem("cart")
    updateCartCount()
    renderCart()
  })
  
  // Search functionality
  searchButton.addEventListener("click", performSearch)
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      performSearch()
    }
  })
  
  function performSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim()
  
    if (searchTerm === "") {
      // If search is empty, show all products
      renderProducts("books", products.books)
      renderProducts("audiobooks", products.audiobooks)
      renderProducts("movies", products.movies)
      return
    }
  
    // Filter products
    const filteredBooks = products.books.filter(
      (product) =>
        (currentLanguage === "es" ? product.title : product.titleEn).toLowerCase().includes(searchTerm) ||
        (currentLanguage === "es" ? product.summary : product.summaryEn).toLowerCase().includes(searchTerm),
    )
  
    const filteredAudiobooks = products.audiobooks.filter(
      (product) =>
        (currentLanguage === "es" ? product.title : product.titleEn).toLowerCase().includes(searchTerm) ||
        (currentLanguage === "es" ? product.summary : product.summaryEn).toLowerCase().includes(searchTerm),
    )
  
    const filteredMovies = products.movies.filter(
      (product) =>
        (currentLanguage === "es" ? product.title : product.titleEn).toLowerCase().includes(searchTerm) ||
        (currentLanguage === "es" ? product.summary : product.summaryEn).toLowerCase().includes(searchTerm),
    )
  
    // Render filtered products
    renderProducts("books", filteredBooks)
    renderProducts("audiobooks", filteredAudiobooks)
    renderProducts("movies", filteredMovies)
  }
  
  // Initialize the page when DOM is loaded
  document.addEventListener("DOMContentLoaded", initializePage)
  
  