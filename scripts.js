// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    }),
)

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
    })
})

// Header background change on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header")
    if (window.scrollY > 100) {
        header.style.background = "rgba(255, 255, 255, 0.95)"
        header.style.backdropFilter = "blur(15px)"
    } else {
        header.style.background = "var(--white)"
        header.style.backdropFilter = "blur(10px)"
    }
})

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
            entry.target.classList.add("animate")
        }
    })
}, observerOptions)

// Observe all animated elements
document.querySelectorAll(".product-category, .custom-service, .service-card, .merch-item").forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    element.style.transition = "opacity 0.8s ease, transform 0.8s ease"
    observer.observe(element)
})

// Add loading animation
window.addEventListener("load", () => {
    document.body.style.opacity = "1"
})

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
    // Add fade-in effect to body
    document.body.style.opacity = "0"
    document.body.style.transition = "opacity 0.5s ease"

    // Trigger animations after a short delay
    setTimeout(() => {
        document.body.style.opacity = "1"
    }, 100)
})

// WhatsApp integration
function openWhatsApp(message = "") {
    const phoneNumber = "573001234567" // Replace with actual number
    const defaultMessage = "¡Hola! Me interesa conocer más sobre las gorras de Buff-Head COL 🧢"
    const finalMessage = message || defaultMessage
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`
    window.open(url, "_blank")
}

// Add click event to WhatsApp float button
document.querySelector(".whatsapp-float a").addEventListener("click", (e) => {
    e.preventDefault()
    openWhatsApp()
})

// Product category interactions
document.querySelectorAll(".product-category").forEach((category, index) => {
    const productTypes = [
        "Gorras Baseball",
        "Gorras Trucker",
        "Gorras Snapback",
        "Bucket Hats",
        "Viseras Deportivas",
        "Ediciones Especiales",
    ]

    category.addEventListener("click", () => {
        const message = `Hola! Me interesa conocer más sobre: ${productTypes[index]} 🧢`
        openWhatsApp(message)
    })
})

// Customization service interactions
document.querySelectorAll(".custom-service").forEach((service, index) => {
    const serviceTypes = ["Bordado Profesional", "Impresión Digital", "Diseño Gráfico", "Pedidos Corporativos"]

    service.addEventListener("click", () => {
        const message = `Hola! Me interesa el servicio de: ${serviceTypes[index]} 🎨`
        openWhatsApp(message)
    })
})

// Service card hover effects
document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-8px) scale(1.02)"
    })

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)"
    })
})

// Product category hover effects with enhanced animations
document.querySelectorAll(".product-category").forEach((category) => {
    category.addEventListener("mouseenter", () => {
        category.style.transform = "translateY(-10px)"
        category.querySelector(".category-icon i").style.transform = "scale(1.2) rotate(5deg)"
    })

    category.addEventListener("mouseleave", () => {
        category.style.transform = "translateY(0)"
        category.querySelector(".category-icon i").style.transform = "scale(1) rotate(0deg)"
    })
})

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

// Add scroll to top button
const scrollButton = document.createElement("div")
scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>'
scrollButton.className = "scroll-to-top"
scrollButton.style.cssText = `
  position: fixed;
  bottom: 110px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: var(--secondary-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 999;
  box-shadow: 0 4px 15px rgba(0, 78, 137, 0.3);
`

document.body.appendChild(scrollButton)

scrollButton.addEventListener("click", scrollToTop)

scrollButton.addEventListener("mouseenter", () => {
    scrollButton.style.transform = "scale(1.1)"
    scrollButton.style.background = "var(--primary-orange)"
})

scrollButton.addEventListener("mouseleave", () => {
    scrollButton.style.transform = "scale(1)"
    scrollButton.style.background = "var(--secondary-blue)"
})

// Show/hide scroll to top button
window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        scrollButton.style.opacity = "1"
    } else {
        scrollButton.style.opacity = "0"
    }
})

// Dynamic text animation for hero subtitle
const heroSubtitle = document.querySelector(".hero-subtitle")
const subtitles = [
    "🧢 Gorras que definen tu estilo",
    "🎨 Personalización premium",
    "🚚 Envíos a toda Colombia",
    "💯 Calidad garantizada",
]

let currentSubtitle = 0

function changeSubtitle() {
    heroSubtitle.style.opacity = "0"
    setTimeout(() => {
        currentSubtitle = (currentSubtitle + 1) % subtitles.length
        heroSubtitle.textContent = subtitles[currentSubtitle]
        heroSubtitle.style.opacity = "1"
    }, 500)
}

// Change subtitle every 4 seconds
setInterval(changeSubtitle, 4000)

// Add parallax effect to hero section
window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const parallax = document.querySelector(".hero")
    const speed = scrolled * 0.5

    if (parallax) {
        parallax.style.transform = `translateY(${speed}px)`
    }
})

// Add click tracking for analytics (placeholder)
function trackClick(element, action) {
    console.log(`Clicked: ${element} - Action: ${action}`)
        // Here you would integrate with your analytics service
}

// Track button clicks
document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        trackClick("Button", e.target.textContent)
    })
})

// Add loading states for interactive elements
function addLoadingState(element) {
    element.style.opacity = "0.7"
    element.style.pointerEvents = "none"

    setTimeout(() => {
        element.style.opacity = "1"
        element.style.pointerEvents = "auto"
    }, 1000)
}

// Enhanced mobile menu animation
const hamburgerSpans = document.querySelectorAll(".hamburger span")

hamburger.addEventListener("click", () => {
    hamburgerSpans.forEach((span, index) => {
        if (hamburger.classList.contains("active")) {
            if (index === 0) span.style.transform = "rotate(45deg) translate(5px, 5px)"
            if (index === 1) span.style.opacity = "0"
            if (index === 2) span.style.transform = "rotate(-45deg) translate(7px, -6px)"
        } else {
            span.style.transform = "none"
            span.style.opacity = "1"
        }
    })
})

// Add custom cursor effect for interactive elements
document.querySelectorAll(".product-category, .custom-service, .service-card").forEach((element) => {
    element.addEventListener("mouseenter", () => {
        document.body.style.cursor = "pointer"
    })

    element.addEventListener("mouseleave", () => {
        document.body.style.cursor = "default"
    })
})

// Initialize all animations and interactions
function initializeApp() {
    console.log("Buff-Head COL website initialized! 🧢")

    // Add any additional initialization code here

    // Preload images for better performance
    const images = [
        "images/gorra-trucker-verde.webp",
        "images/gorra-trucker-blanca.webp",
        "images/exhibicion-gorras.webp",
    ]

    images.forEach((src) => {
        const img = new Image()
        img.src = src
    })
}

// Run initialization when DOM is ready
document.addEventListener("DOMContentLoaded", initializeApp)