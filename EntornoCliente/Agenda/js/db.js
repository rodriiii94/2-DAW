let db

const dbName = "AgendaDB"
const storeName = "contactos"

function initDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 1)

    request.onerror = (event) => reject("Error al abrir la base de datos")

    request.onsuccess = (event) => {
      db = event.target.result
      resolve(db)
    }

    request.onupgradeneeded = (event) => {
      db = event.target.result
      const objectStore = db.createObjectStore(storeName, { keyPath: "id", autoIncrement: true })
      objectStore.createIndex("nombre", "nombre", { unique: false })
      objectStore.createIndex("telefono", "telefono", { unique: false })
      objectStore.createIndex("empresa", "empresa", { unique: false })
      objectStore.createIndex("email", "email", { unique: false })
    }
  })
}

function addContact(contact) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], "readwrite")
    const objectStore = transaction.objectStore(storeName)
    const request = objectStore.add(contact)

    request.onerror = (event) => reject("Error al agregar el contacto")
    request.onsuccess = (event) => resolve(event.target.result)
  })
}

function getContacts() {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], "readonly")
    const objectStore = transaction.objectStore(storeName)
    const request = objectStore.getAll()

    request.onerror = (event) => reject("Error al obtener los contactos")
    request.onsuccess = (event) => resolve(event.target.result)
  })
}

function updateContact(contact) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], "readwrite")
    const objectStore = transaction.objectStore(storeName)
    const request = objectStore.put(contact)

    request.onerror = (event) => reject("Error al actualizar el contacto")
    request.onsuccess = (event) => resolve(event.target.result)
  })
}

function deleteContact(id) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], "readwrite")
    const objectStore = transaction.objectStore(storeName)
    const request = objectStore.delete(id)

    request.onerror = (event) => reject("Error al eliminar el contacto")
    request.onsuccess = (event) => resolve()
  })
}

