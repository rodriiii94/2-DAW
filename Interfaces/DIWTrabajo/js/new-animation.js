document.addEventListener("DOMContentLoaded", () => {
    const timelineItems = document.querySelectorAll(".timeline-item")
    const stageDetails = document.getElementById("stage-details")
    const stageImage = document.getElementById("stage-image")
    const stageDescription = document.getElementById("stage-description")
  
    const stageInfo = {
      1: {
        image:
          "img/Mezclar.webp",
        description:
          "Seleccionamos cuidadosamente los mejores ingredientes: harina de trigo de alta calidad, agua pura, sal marina y levadura fresca. La calidad de nuestros ingredientes es la base de nuestro delicioso pan.",
      },
      2: {
        image:
          "img/Amasar.webp",
        description:
          "Mezclamos los ingredientes y amasamos la masa con precisión y cariño. Este proceso es crucial para desarrollar el gluten y crear la textura perfecta del pan.",
      },
      3: {
        image:
          "img/Fermentar.webp",
        description:
          "Dejamos que la masa fermente lentamente. Durante este tiempo, los sabores se desarrollan y la masa adquiere su característica textura y aroma.",
      },
      4: {
        image:
          "https://images.unsplash.com/photo-1586765501019-cbe3973ef8fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description:
          "Finalmente, horneamos el pan en nuestros hornos artesanales hasta que alcanza una perfecta corteza dorada y crujiente, con un interior suave y aromático.",
      },
    }
  
    function showStageDetails(step) {
      const info = stageInfo[step]
      stageImage.src = info.image
      stageImage.alt = `Etapa ${step} del proceso de elaboración del pan`
      stageDescription.textContent = info.description
      stageDetails.classList.add("active")
    }
  
    timelineItems.forEach((item) => {
      item.addEventListener("click", () => {
        const step = item.getAttribute("data-step")
        showStageDetails(step)
      })
    })
  
    // Mostrar los detalles de la primera etapa por defecto
    showStageDetails(1)
  })
  
  