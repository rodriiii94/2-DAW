let contactoAEliminar = null

document.addEventListener("DOMContentLoaded", () => {
  initDB()
    .then(() => {
      cargarContactos()
    })
    .catch((error) => {
      mostrarMensaje(error, "error")
    })

  document.getElementById("contactForm").addEventListener("submit", guardarContacto)
  document.getElementById("busqueda").addEventListener("input", buscarContactos)
  document.getElementById("sortOption").addEventListener("change", ordenarContactos)

  // Validación en tiempo real
  document.getElementById("nombre").addEventListener("input", validarCampoEnTiempoReal)
  document.getElementById("telefono").addEventListener("input", validarCampoEnTiempoReal)
  document.getElementById("email").addEventListener("input", validarCampoEnTiempoReal)

  // Configurar el diálogo de confirmación
  document.getElementById("confirmYes").addEventListener("click", () => {
    document.getElementById("confirmDialog").style.display = "none"
    if (contactoAEliminar) {
      eliminarContactoConfirmado(contactoAEliminar)
      contactoAEliminar = null
    }
  })

  document.getElementById("confirmNo").addEventListener("click", () => {
    document.getElementById("confirmDialog").style.display = "none"
    contactoAEliminar = null
  })
})

function guardarContacto(e) {
  e.preventDefault()

  const nombre = document.getElementById("nombre").value.trim()
  const telefono = document.getElementById("telefono").value.trim()
  const empresa = document.getElementById("empresa").value.trim()
  const email = document.getElementById("email").value.trim()

  if (!validarNombre(nombre) || !validarTelefono(telefono) || (email && !validarEmail(email))) {
    mostrarMensaje("Por favor, corrija los errores en el formulario", "error")
    return
  }

  const contacto = { nombre, telefono, empresa, email }

  addContact(contacto)
    .then(() => {
      mostrarMensaje("Contacto guardado exitosamente", "success")
      document.getElementById("contactForm").reset()
      cargarContactos()
    })
    .catch((error) => {
      mostrarMensaje(error, "error")
    })
}

function validarCampoEnTiempoReal(e) {
  const campo = e.target
  const valor = campo.value.trim()
  let mensaje = ""

  switch (campo.id) {
    case "nombre":
      mensaje = validarNombre(valor) ? "" : "El nombre es obligatorio"
      break
    case "telefono":
      mensaje = validarTelefono(valor) ? "" : "El teléfono no es válido"
      break
    case "email":
      mensaje = valor === "" || validarEmail(valor) ? "" : "El email no es válido"
      break
  }

  document.getElementById(`${campo.id}Error`).textContent = mensaje
}

function validarNombre(nombre) {
  return nombre.length > 0
}

function validarTelefono(telefono) {
  const telefonoRegex = /^\+?(\d{1,3})?[-.\s]?$$?\d{3}$$?[-.\s]?\d{3}[-.\s]?\d{4}$/
  return telefonoRegex.test(telefono)
}

function validarEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function mostrarMensaje(mensaje, tipo) {
  const mensajesDiv = document.getElementById("mensajes")
  mensajesDiv.textContent = mensaje
  mensajesDiv.className = tipo
  setTimeout(() => {
    mensajesDiv.textContent = ""
    mensajesDiv.className = ""
  }, 3000)
}

function cargarContactos() {
  getContacts()
    .then((contactos) => {
      mostrarContactos(contactos)
    })
    .catch((error) => {
      mostrarMensaje(error, "error")
    })
}

function mostrarContactos(contactos) {
  const listaContactos = document.getElementById("listaContactos")
  listaContactos.innerHTML = ""
  contactos.forEach((contacto) => {
    const li = crearElementoContacto(contacto)
    listaContactos.appendChild(li)
  })
}

function crearElementoContacto(contacto) {
  const li = document.createElement("li")
  li.className = "contacto"
  li.innerHTML = `
        <span class="editable" data-field="nombre" contenteditable="true">${contacto.nombre}</span> - 
        <span class="editable" data-field="telefono" contenteditable="true">${contacto.telefono}</span>
        ${contacto.empresa ? `<br>Empresa: <span class="editable" data-field="empresa" contenteditable="true">${contacto.empresa}</span>` : ""}
        ${contacto.email ? `<br>Email: <span class="editable" data-field="email" contenteditable="true">${contacto.email}</span>` : ""}
        <button onclick="eliminarContacto(${contacto.id})">Eliminar</button>
    `

  // Agregar eventos para edición en línea
  li.querySelectorAll(".editable").forEach((span) => {
    span.addEventListener("blur", () => actualizarContacto(contacto.id, span.dataset.field, span.textContent))
  })

  return li
}

function actualizarContacto(id, campo, valor) {
  getContacts()
    .then((contactos) => {
      const contacto = contactos.find((c) => c.id === id)
      if (contacto) {
        contacto[campo] = valor
        return updateContact(contacto)
      }
    })
    .then(() => {
      mostrarMensaje("Contacto actualizado exitosamente", "success")
    })
    .catch((error) => {
      mostrarMensaje(error, "error")
    })
}

function buscarContactos() {
  const busqueda = document.getElementById("busqueda").value.toLowerCase()
  getContacts()
    .then((contactos) => {
      const contactosFiltrados = contactos.filter(
        (contacto) =>
          contacto.nombre.toLowerCase().includes(busqueda) ||
          contacto.telefono.toLowerCase().includes(busqueda) ||
          contacto.empresa.toLowerCase().includes(busqueda) ||
          contacto.email.toLowerCase().includes(busqueda),
      )
      mostrarContactos(contactosFiltrados)
    })
    .catch((error) => {
      mostrarMensaje(error, "error")
    })
}

function ordenarContactos() {
  const opcion = document.getElementById("sortOption").value
  getContacts()
    .then((contactos) => {
      contactos.sort((a, b) => {
        if (a[opcion] < b[opcion]) return -1
        if (a[opcion] > b[opcion]) return 1
        return 0
      })
      mostrarContactos(contactos)
    })
    .catch((error) => {
      mostrarMensaje(error, "error")
    })
}

function eliminarContacto(id) {
  contactoAEliminar = id
  document.getElementById("confirmDialog").style.display = "block"
}

function eliminarContactoConfirmado(id) {
  deleteContact(id)
    .then(() => {
      mostrarMensaje("Contacto eliminado exitosamente", "success")
      cargarContactos()
    })
    .catch((error) => {
      mostrarMensaje(error, "error")
    })
}

