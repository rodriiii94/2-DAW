// Datos de los productos (simulados)
const productos = {
    panaderia: [
      {
        nombre: "Pan de trigo",
        ingredientes: "Harina de trigo, agua, sal, levadura",
        elaboracion: "Amasado tradicional y horneado en horno de piedra",
        imagen: "pan_trigo.jpg",
      },
      // ... más productos hasta 12
    ],
    pasteleria: [
      {
        nombre: "Croissant",
        ingredientes: "Harina, mantequilla, azúcar, levadura",
        elaboracion: "Laminado manual y horneado",
        imagen: "croissant.jpg",
      },
      // ... más productos hasta 8
    ],
    empanadas: [
      {
        nombre: "Empanada de atún",
        ingredientes: "Masa de empanada, atún, cebolla, pimiento",
        elaboracion: "Relleno casero y horneado",
        imagen: "empanada_atun.jpg",
      },
      // ... más productos hasta 4
    ],
  }
  
  // Función para cargar los productos
  function cargarProductos(seccion) {
    const contenedor = document.getElementById(seccion)
    contenedor.innerHTML = `<h2>${seccion.charAt(0).toUpperCase() + seccion.slice(1)}</h2>`
  
    productos[seccion].forEach((producto) => {
      const productoElement = document.createElement("div")
      productoElement.className = "producto"
      productoElement.innerHTML = `
              <h3>${producto.nombre}</h3>
              <img src="${producto.imagen}" alt="${producto.nombre}">
              <p><strong>Ingredientes:</strong> ${producto.ingredientes}</p>
              <p><strong>Elaboración:</strong> ${producto.elaboracion}</p>
          `
      contenedor.appendChild(productoElement)
    })
  }
  
  // Cargar todos los productos al inicio
  document.addEventListener("DOMContentLoaded", () => {
    cargarProductos("panaderia")
    cargarProductos("pasteleria")
    cargarProductos("empanadas")
  })
  
  // Cambio de idioma (simulado)
  const languageToggle = document.getElementById("languageToggle")
  let isSpanish = true
  
  languageToggle.addEventListener("click", () => {
    isSpanish = !isSpanish
    if (isSpanish) {
      languageToggle.textContent = "Cambiar a Português"
      // Aquí se cambiarían los textos a español
    } else {
      languageToggle.textContent = "Cambiar para Espanhol"
      // Aquí se cambiarían los textos a portugués
    }
  })
  
  // Navegación suave
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })
  
  