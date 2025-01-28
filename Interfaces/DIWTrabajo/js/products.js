const products = {
  bakery: [
    {
      name: "Pan de Trigo",
      description:
        "Pan tradicional elaborado con harina de trigo, agua, sal y levadura.",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      name: "Pan Integral",
      description:
        "Pan saludable hecho con harina integral, rico en fibra y nutrientes.",
      image:
        "img/PanIntegral.jpg",
    },
    {
      name: "Pan de Centeno",
      description:
        "Pan oscuro y denso, con un sabor intenso, típico del norte de Europa.",
      image:
        "img/PanCenteno.webp",
    },
    {
      name: "Pan de Avena",
      description: "Pan suave y saludable con avena, ideal para el desayuno.",
      image:
        "img/PanAvena.webp",
    },
    {
      name: "Baguette",
      description: "Pan francés largo y crujiente, perfecto para bocadillos.",
      image:
        "img/Baguette.jpg",
    },
    {
      name: "Focaccia",
      description: "Pan italiano con aceite de oliva y hierbas aromáticas.",
      image:
        "img/Focaccia.jpg",
    },
    {
      name: "Pan Brioche",
      description: "Pan suave y esponjoso con un toque dulce.",
      image:
        "img/PanBrioche.jpg",
    },
    {
      name: "Pan de Masa Madre",
      description:
        "Pan con un sabor ligeramente ácido gracias a su fermentación natural.",
      image:
        "img/PanMasaMadre.jpg",
    },
    {
      name: "Pan de Espelta",
      description:
        "Hecho con harina de espelta, ideal para quienes buscan opciones más saludables.",
      image:
        "img/PanEspelta.jpg",
    },
    {
      name: "Pan Chapata",
      description: "Pan con corteza gruesa y miga esponjosa, estilo artesanal.",
      image:
        "img/PanChapata.jpg",
    },
  ],
  pastry: [
    {
      name: "Croissant",
      description:
        "Delicioso croissant de mantequilla, crujiente por fuera y suave por dentro.",
      image:
        "img/Croissants.jpg",
    },
    {
      name: "Palmera de Chocolate",
      description: "Hojaldre en forma de palmera cubierto con chocolate negro.",
      image:
        "img/Palmera.jpeg",
    },
    {
      name: "Eclair",
      description:
        "Hojaldre relleno de crema pastelera y cubierto de chocolate.",
      image:
        "img/Eclair.jpg",
    },
    {
      name: "Pastel de Manzana",
      description:
        "Pastel con hojaldre y un delicioso relleno de manzana caramelizada.",
      image:
        "img/PastelManzana.webp",
    },
    {
      name: "Tarta de Queso",
      description: "Postre suave y cremoso con base de galleta.",
      image:
        "img/TartaQueso.webp",
    },
    {
      name: "Muffin de Chocolate",
      description: "Muffin esponjoso con trozos de chocolate.",
      image:
        "img/MuffinChocolate.webp",
    },
    {
      name: "Milhojas",
      description: "Capas de hojaldre rellenas de crema pastelera.",
      image:
        "img/Milhojas.webp",
    },
    {
      name: "Dona Glaseada",
      description: "Rosquilla suave cubierta con glaseado dulce.",
      image:
        "img/Donut.webp",
    },
  ],
  empanadas: [
    {
      name: "Empanada de Carne",
      description:
        "Rellena de carne picada sazonada con cebolla, pimiento y especias.",
      image:
        "img/EmpanadaCarne.webp",
    },
    {
      name: "Empanada de Pollo",
      description: "Rellena de pollo desmenuzado con verduras y especias.",
      image:
        "img/EmpanadaPollo.webp",
    },
    {
      name: "Empanada de Queso",
      description:
        "Rellena de queso fundido, ideal para los amantes del queso.",
      image:
        "img/EmpanadaQueso.jpg",
    },
    {
      name: "Empanada de Atún",
      description: "Rellena de atún, tomate y un toque de pimiento.",
      image:
        "img/EmpanadaAtun.webp",
    },
  ],
};

function displayProducts(category) {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";

  products[category].forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
    productElement.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <div class="product-info">
                  <h3>${product.name}</h3>
                  <p>${product.description}</p>
              </div>
          `;
    productsContainer.appendChild(productElement);
  });
}

// Determinar qué categoría mostrar basándose en la página actual
const currentPage = window.location.pathname.split("/").pop().split(".")[0];
if (currentPage === "panaderia") {
  displayProducts("bakery");
} else if (currentPage === "pasteleria-bolleria") {
  displayProducts("pastry");
} else if (currentPage === "empanadas") {
  displayProducts("empanadas");
}
