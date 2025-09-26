// Computer Center Website - Main JavaScript

// Language Toggle System
const translations = {
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    education: "Education",
    about: "About",
    contact: "Contact",

    // Homepage
    heroTitle: "Professional Computer Solutions",
    heroSubtitle: "Expert computer repair, education, and IT services for individuals and businesses",
    getStarted: "Get Started",
    learnMore: "Learn More",

    // Services
    servicesTitle: "Our Services",
    servicesSubtitle: "Comprehensive computer solutions for all your needs",

    repairTitle: "Computer Repair",
    repairDesc: "Professional hardware and software repair services",

    educationTitle: "Computer Education",
    educationDesc: "Learn essential computer skills with expert instructors",

    itSupportTitle: "IT Support",
    itSupportDesc: "Complete IT solutions for businesses and organizations",

    // About
    aboutTitle: "About TechCenter Pro",
    aboutDesc: "Leading computer center providing quality services since 2010",

    // Contact
    contactTitle: "Get In Touch",
    contactDesc: "Ready to help with all your computer needs",

    // Footer
    quickLinks: "Quick Links",
    ourServices: "Our Services",
    contactInfo: "Contact Info",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved.",

    // Contact Info
    phone: "Phone",
    email: "Email",
    address: "Address",
    hours: "Business Hours",
  },
  hi: {
    // Navigation
    home: "होम",
    services: "सेवाएं",
    education: "शिक्षा",
    about: "हमारे बारे में",
    contact: "संपर्क",

    // Homepage
    heroTitle: "व्यावसायिक कंप्यूटर समाधान",
    heroSubtitle: "व्यक्तियों और व्यवसायों के लिए विशेषज्ञ कंप्यूटर मरम्मत, शिक्षा और आईटी सेवाएं",
    getStarted: "शुरू करें",
    learnMore: "और जानें",

    // Services
    servicesTitle: "हमारी सेवाएं",
    servicesSubtitle: "आपकी सभी आवश्यकताओं के लिए व्यापक कंप्यूटर समाधान",

    repairTitle: "कंप्यूटर मरम्मत",
    repairDesc: "व्यावसायिक हार्डवेयर और सॉफ्टवेयर मरम्मत सेवाएं",

    educationTitle: "कंप्यूटर शिक्षा",
    educationDesc: "विशेषज्ञ प्रशिक्षकों के साथ आवश्यक कंप्यूटर कौशल सीखें",

    itSupportTitle: "आईटी सहायता",
    itSupportDesc: "व्यवसायों और संगठनों के लिए पूर्ण आईटी समाधान",

    // About
    aboutTitle: "टेकसेंटर प्रो के बारे में",
    aboutDesc: "2010 से गुणवत्तापूर्ण सेवाएं प्रदान करने वाला अग्रणी कंप्यूटर केंद्र",

    // Contact
    contactTitle: "संपर्क में रहें",
    contactDesc: "आपकी सभी कंप्यूटर आवश्यकताओं में मदद के लिए तैयार",

    // Footer
    quickLinks: "त्वरित लिंक",
    ourServices: "हमारी सेवाएं",
    contactInfo: "संपर्क जानकारी",
    followUs: "हमें फॉलो करें",
    allRightsReserved: "सभी अधिकार सुरक्षित।",

    // Contact Info
    phone: "फोन",
    email: "ईमेल",
    address: "पता",
    hours: "व्यावसायिक घंटे",
  },
}

let currentLanguage = "en"

// Initialize the website
document.addEventListener("DOMContentLoaded", () => {
  initializeLanguageToggle()
  initializeMobileMenu()
  initializeScrollAnimations()
  initializeContactButtons()
  initializeContactForm()
  updateLanguage()
  setActiveNavLink()
})

// Language Toggle Functions
function initializeLanguageToggle() {
  const langButtons = document.querySelectorAll(".lang-btn")
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang
      switchLanguage(lang)
    })
  })
}

function switchLanguage(lang) {
  currentLanguage = lang
  updateLanguage()
  updateActiveLanguageButton()
  // Store language preference
  localStorage.setItem("preferredLanguage", lang)
}

function updateLanguage() {
  const elements = document.querySelectorAll("[data-translate]")
  elements.forEach((element) => {
    const key = element.dataset.translate
    if (translations[currentLanguage] && translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key]
    }
  })
}

function updateActiveLanguageButton() {
  const langButtons = document.querySelectorAll(".lang-btn")
  langButtons.forEach((btn) => {
    btn.classList.remove("active")
    if (btn.dataset.lang === currentLanguage) {
      btn.classList.add("active")
    }
  })
}

// Load saved language preference
function loadLanguagePreference() {
  const savedLang = localStorage.getItem("preferredLanguage")
  if (savedLang && translations[savedLang]) {
    switchLanguage(savedLang)
  }
}

// Mobile Menu Functions
function initializeMobileMenu() {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const navMenu = document.querySelector(".nav-menu")

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      // Toggle hamburger icon
      const icon = mobileMenuBtn.querySelector("i")
      if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-times")
      } else {
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }
    })

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("i")
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      })
    })

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        navMenu.classList.remove("active")
        const icon = mobileMenuBtn.querySelector("i")
        icon.classList.remove("fa-times")
        icon.classList.add("fa-bars")
      }
    })
  }
}

// Scroll Animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
      }
    })
  }, observerOptions)

  // Observe all animation elements
  const animatedElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right")
  animatedElements.forEach((el) => observer.observe(el))
}

// Contact Buttons
function initializeContactButtons() {
  // WhatsApp button
  const whatsappBtn = document.querySelector(".whatsapp-btn")
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", (e) => {
      e.preventDefault()
      const phoneNumber = "919876543210" // Replace with actual number (without +)
      const message = encodeURIComponent("Hello! I would like to know more about your computer services.")
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
    })
  }

  // Phone button
  const phoneBtn = document.querySelector(".phone-btn")
  if (phoneBtn) {
    phoneBtn.addEventListener("click", (e) => {
      e.preventDefault()
      window.location.href = "tel:+919876543210" // Replace with actual number
    })
  }
}

// Contact Form Handling
function initializeContactForm() {
  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", handleContactFormSubmit)

    // Real-time validation
    const requiredFields = contactForm.querySelectorAll("[required]")
    requiredFields.forEach((field) => {
      field.addEventListener("blur", () => validateField(field))
      field.addEventListener("input", () => {
        if (field.classList.contains("error")) {
          validateField(field)
        }
      })
    })
  }
}

function handleContactFormSubmit(e) {
  e.preventDefault()

  const form = e.target
  const formData = new FormData(form)

  // Validate form
  if (!validateForm(form)) {
    showNotification("Please fill in all required fields correctly.", "error")
    return
  }

  // Show loading state
  const submitBtn = form.querySelector('button[type="submit"]')
  const originalText = submitBtn.innerHTML
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
  submitBtn.disabled = true

  // Simulate form submission (replace with actual form handling)
  setTimeout(() => {
    // Reset form
    form.reset()

    // Reset button
    submitBtn.innerHTML = originalText
    submitBtn.disabled = false

    // Show success message
    showNotification("Thank you for your message! We will get back to you soon.", "success")

    // Log form data (for development)
    console.log("Form submitted with data:", Object.fromEntries(formData))
  }, 2000)
}

function validateField(field) {
  const value = field.value.trim()
  let isValid = true

  // Required field validation
  if (field.hasAttribute("required") && !value) {
    isValid = false
  }

  // Email validation
  if (field.type === "email" && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    isValid = emailRegex.test(value)
  }

  // Phone validation (basic)
  if (field.type === "tel" && value) {
    const phoneRegex = /^[+]?[0-9\s\-$$$$]{10,}$/
    isValid = phoneRegex.test(value)
  }

  // Update field appearance
  if (isValid) {
    field.classList.remove("error")
  } else {
    field.classList.add("error")
  }

  return isValid
}

// Utility Functions
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "home.html"
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    link.classList.remove("active")
    const href = link.getAttribute("href")
    if (href === currentPage || (currentPage === "" && href === "home.html")) {
      link.classList.add("active")
    }
  })
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]')
  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const navbarHeight = document.querySelector(".navbar").offsetHeight
        const targetPosition = targetElement.offsetTop - navbarHeight - 20

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
}

// Form validation
function validateForm(form) {
  const requiredFields = form.querySelectorAll("[required]")
  let isValid = true

  requiredFields.forEach((field) => {
    if (!validateField(field)) {
      isValid = false
    }
  })

  return isValid
}

// Notification system
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification")
  existingNotifications.forEach((notification) => notification.remove())

  // Create notification element
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${type === "success" ? "fa-check-circle" : type === "error" ? "fa-exclamation-circle" : "fa-info-circle"}"></i>
      <span>${message}</span>
      <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `

  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === "success" ? "var(--success-green)" : type === "error" ? "#ef4444" : "var(--accent-blue)"};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-lg);
    z-index: 10000;
    max-width: 400px;
    animation: slideInRight 0.3s ease;
  `

  // Add to page
  document.body.appendChild(notification)

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.animation = "slideOutRight 0.3s ease"
      setTimeout(() => notification.remove(), 300)
    }
  }, 5000)
}

// Add CSS animations for notifications
const notificationStyles = document.createElement("style")
notificationStyles.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
  
  .notification-content {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  
  .notification-close {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.25rem;
    margin-left: auto;
    opacity: 0.8;
    transition: opacity 0.2s;
  }
  
  .notification-close:hover {
    opacity: 1;
  }
`
document.head.appendChild(notificationStyles)

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeSmoothScrolling()
  loadLanguagePreference()
})

// Handle page visibility change to pause/resume animations
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    // Pause animations when page is not visible
    document.body.style.animationPlayState = "paused"
  } else {
    // Resume animations when page becomes visible
    document.body.style.animationPlayState = "running"
  }
})

// Performance optimization: Lazy load images
function initializeLazyLoading() {
  const images = document.querySelectorAll("img[data-src]")

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          img.src = img.dataset.src
          img.classList.remove("lazy")
          imageObserver.unobserve(img)
        }
      })
    })

    images.forEach((img) => imageObserver.observe(img))
  } else {
    // Fallback for older browsers
    images.forEach((img) => {
      img.src = img.dataset.src
      img.classList.remove("lazy")
    })
  }
}

// Initialize lazy loading
document.addEventListener("DOMContentLoaded", initializeLazyLoading)

// Add error handling for failed resource loads
window.addEventListener("error", (e) => {
  if (e.target.tagName === "IMG") {
    // Handle failed image loads
    e.target.src = "/placeholder.svg?height=200&width=300&text=Image+Not+Found"
  }
})

// Add keyboard navigation support
document.addEventListener("keydown", (e) => {
  // ESC key closes mobile menu
  if (e.key === "Escape") {
    const navMenu = document.querySelector(".nav-menu")
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
    if (navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active")
      const icon = mobileMenuBtn.querySelector("i")
      icon.classList.remove("fa-times")
      icon.classList.add("fa-bars")
    }
  }
})

console.log("[v0] Computer Center website initialized successfully!")
