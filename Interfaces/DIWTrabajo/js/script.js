const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.bakery": "Panadería",
    "nav.pastry": "Pastelería - Bollería",
    "nav.empanadas": "Empanadas",
    "welcome.title": "Bienvenidos a Migas Amigas",
    "welcome.description": "Descubre el sabor auténtico de nuestros productos artesanales.",
    "animation.title": "Cómo hacemos nuestro pan",
    "animation.stage1": "1. Mezclamos los ingredientes",
    "animation.stage2": "2. Amasamos la mezcla",
    "animation.stage3": "3. Dejamos fermentar la masa",
    "animation.stage4": "4. Horneamos el pan",
    "contact.title": "Contacto",
    "contact.address": "Dirección: Calle del Pan, 123, Ciudad",
    "contact.phone": "Teléfono: +34 123 456 789",
  },
  pt: {
    "nav.home": "Início",
    "nav.bakery": "Padaria",
    "nav.pastry": "Pastelaria",
    "nav.empanadas": "Empanadas",
    "welcome.title": "Bem-vindos à Migas Amigas",
    "welcome.description": "Descubra o sabor autêntico dos nossos produtos artesanais.",
    "animation.title": "Como fazemos nosso pão",
    "animation.stage1": "1. Misturamos os ingredientes",
    "animation.stage2": "2. Amassamos a mistura",
    "animation.stage3": "3. Deixamos a massa fermentar",
    "animation.stage4": "4. Assamos o pão",
    "contact.title": "Contato",
    "contact.address": "Endereço: Rua do Pão, 123, Cidade",
    "contact.phone": "Telefone: +34 123 456 789",
  },
}

function changeLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n")
    element.textContent = translations[lang][key]
  })
  document.documentElement.lang = lang
}

document.getElementById("languageSelector").addEventListener("change", (event) => {
  changeLanguage(event.target.value)
})

// Animación del proceso de hacer pan
function animateBreadMaking() {
  const stages = document.querySelectorAll(".bread-stage")
  let currentStage = 0

  function showNextStage() {
    if (currentStage > 0) {
      stages[currentStage - 1].classList.remove("active")
    }
    if (currentStage < stages.length) {
      stages[currentStage].classList.add("active")
      currentStage++
      setTimeout(showNextStage, 3000)
    } else {
      currentStage = 0
      setTimeout(animateBreadMaking, 1000)
    }
  }

  showNextStage()
}

// Iniciar la animación cuando la página se carga
window.addEventListener("load", animateBreadMaking)

// Inicializar el idioma en español
changeLanguage("es")  