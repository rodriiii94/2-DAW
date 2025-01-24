$(document).ready(function () {
  const DB_NAME = "contactos";
  const DB_VERSION = 1; // Use a long long for this value (don't use a float)
  const DB_STORE_NAME = "contactos";

  var db;

  // Used to keep track of which view is displayed to avoid uselessly reloading it
  var current_view_pub_key;

  function openDb() {
    console.log("openDb ...");
    var req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onsuccess = function (evt) {
      // Better use "this" than "req" to get the result to avoid problems with
      // garbage collection.
      // db = req.result;
      db = this.result;
      console.log("openDb DONE");
      displayPubList();
    };
    req.onerror = function (evt) {
      console.error("openDb:", evt.target.errorCode);
    };

    req.onupgradeneeded = function (evt) {
      console.log("openDb.onupgradeneeded");
      var store = evt.currentTarget.result.createObjectStore(DB_STORE_NAME, {
        keyPath: "id",
        autoIncrement: true,
      });

      store.createIndex("nombre", "nombre", { unique: false });
      store.createIndex("tel", "tel", { unique: true });
      store.createIndex("email", "email", { unique: true });
      store.createIndex("empresa", "empresa", { unique: false });
    };
  }

  /**
   * @param {string} store_name
   * @param {string} mode either "readonly" or "readwrite"
   */
  function getObjectStore(store_name, mode) {
    var tx = db.transaction(store_name, mode);
    return tx.objectStore(store_name);
  }

  function clearObjectStore(store_name) {
    var store = getObjectStore(DB_STORE_NAME, "readwrite");
    var req = store.clear();
    req.onsuccess = function (evt) {
      displayActionSuccess("Agenda Borrada con éxito");
      displayPubList(store);
    };
    req.onerror = function (evt) {
      console.error("clearObjectStore:", evt.target.errorCode);
      displayActionFailure(this.error);
    };
  }

  function getBlob(key, store, success_callback) {
    var req = store.get(key);
    req.onsuccess = function (evt) {
      var value = evt.target.result;
      if (value) success_callback(value.blob);
    };
  }

  /**
   * @param {IDBObjectStore=} store
   */
  function displayPubList(store) {
    console.log("displayPubList");

    if (typeof store == "undefined")
      store = getObjectStore(DB_STORE_NAME, "readonly");

    var pub_msg = $("#pub-msg");
    pub_msg.empty();
    var pub_list = $("#pub-list");
    pub_list.empty();
    // Resetting the iframe so that it doesn't display previous content
    //newViewerFrame();

    var req;
    req = store.count();
    // Requests are executed in the order in which they were made against the
    // transaction, and their results are returned in the same order.
    // Thus the count text below will be displayed before the actual pub list
    // (not that it is algorithmically important in this case).
    req.onsuccess = function (evt) {
      pub_msg.append(
        "<strong>Tienes " + evt.target.result + "</strong>" + " contactos en total"
      );
    };
    req.onerror = function (evt) {
      console.error("add error", this.error);
      displayActionFailure(this.error);
    };

    var i = 0;
    req = store.openCursor();
    req.onsuccess = function (evt) {
      var cursor = evt.target.result;

      // If the cursor is pointing at something, ask for the data
      if (cursor) {
        console.log("displayPubList cursor:", cursor);
        req = store.get(cursor.key);
        req.onsuccess = function (evt) {
          var value = evt.target.result;

          var list_item = $(
            `<li>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <strong>Nombre:</strong> ${value.nombre}<br>
                  <strong>Teléfono:</strong> ${value.tel}<br>
                  <strong>Email:</strong> ${
                    value.email ? value.email : "No disponible"
                  }<br>
                  <strong>Empresa:</strong> ${
                    value.empresa ? value.empresa : "No disponible"
                  }
                </div>
                <div>
                  <button type="button" id="edit-button" class="btn-edit-contact" data-id="${
                    value.id
                  }">Editar</button>
                  <button type="button" class="btn-destroy-contact" data-id="${
                    value.id
                  }">Eliminar</button>
                </div>
              </div>
            </li>`
          );
          pub_list.append(list_item);
        };

        // Move on to the next object in store
        cursor.continue();

        // This counter serves only to create distinct ids
        i++;
      } else {
        console.log("No more entries");
      }
    };
  }

  /**
   * @param {string} tel
   * @param {string} nombre
   * @param {string} email
   * @param {string} empresa
   */
  function addPublication(tel, nombre, email, empresa) {
    console.log("addPublication arguments:", arguments);
    var obj = { tel: tel, nombre: nombre, email: email, empresa: empresa };

    var store = getObjectStore(DB_STORE_NAME, "readwrite");
    var req;
    try {
      req = store.add(obj);
    } catch (e) {
      if (e.name == "DataCloneError")
        displayActionFailure(
          "This engine doesn't know how to clone a Blob, use Firefox"
        );
      throw e;
    }
    req.onsuccess = function (evt) {
      console.log("Insertion in DB successful");
      displayActionSuccess();
      displayPubList(store);
    };
    req.onerror = function () {
      console.error("addPublication error", this.error);
      displayActionFailure(this.error);
    };
  }

  /**
   * @param {string} tel
   */
  function deletePublicationFromTel(tel) {
    console.log("deletePublication:", arguments);
    var store = getObjectStore(DB_STORE_NAME, "readwrite");
    var req = store.index("tel");
    req.get(tel).onsuccess = function (evt) {
      if (typeof evt.target.result == "undefined") {
        displayActionFailure("No se ha encontrado ningún registro coincidente");
        return;
      }
      deletePublication(evt.target.result.id, store);
    };
    req.onerror = function (evt) {
      console.error("deletePublicationFromTel:", evt.target.errorCode);
    };
  }

  function deletePublicationFromNom(nombre) {
    console.log("deletePublication:", arguments);
    var store = getObjectStore(DB_STORE_NAME, "readwrite");
    var req = store.index("nombre");
    req.get(nombre).onsuccess = function (evt) {
      if (typeof evt.target.result == "undefined") {
        displayActionFailure("No se ha encontrado ningún registro coincidente");
        return;
      }
      deletePublication(evt.target.result.id, store);
    };
    req.onerror = function (evt) {
      console.error("deletePublicationFromNom:", evt.target.errorCode);
    };
  }

  /**
   * @param {number} key
   * @param {IDBObjectStore=} store
   */
  function deletePublication(key, store) {
    console.log("deletePublication:", arguments);

    if (typeof store == "undefined")
      store = getObjectStore(DB_STORE_NAME, "readwrite");

    // As per spec http://www.w3.org/TR/IndexedDB/#object-store-deletion-operation
    // the result of the Object Store Deletion Operation algorithm is
    // undefined, so it's not possible to know if some records were actually
    // deleted by looking at the request result.
    var req = store.get(key);
    req.onsuccess = function (evt) {
      var record = evt.target.result;
      console.log("record:", record);
      if (typeof record == "undefined") {
        displayActionFailure("No se ha encontrado ningún registro");
        return;
      }
      // Warning: The exact same key used for creation needs to be passed for
      // the deletion. If the key was a Number for creation, then it needs to
      // be a Number for deletion.
      req = store.delete(key);
      req.onsuccess = function (evt) {
        console.log("evt:", evt);
        console.log("evt.target:", evt.target);
        console.log("evt.target.result:", evt.target.result);
        console.log("delete successful");
        displayActionSuccess("Contacto eliminado con éxito");
        displayPubList(store);
      };
      req.onerror = function (evt) {
        console.error("deletePublication:", evt.target.errorCode);
      };
    };
    req.onerror = function (evt) {
      console.error("deletePublication:", evt.target.errorCode);
    };
  }

  function displayActionSuccess(msg) {
    msg = typeof msg != "undefined" ? "Éxito: " + msg : "Exito";
    $("#msg").html('<span class="action-success">' + msg + "</span>");
  }
  function displayActionFailure(msg) {
    msg = typeof msg != "undefined" ? "Fallo: " + msg : "Fallo";
    $("#msg").html('<span class="action-failure">' + msg + "</span>");
  }
  function resetActionStatus() {
    console.log("resetActionStatus ...");
    $("#msg").empty();
    console.log("resetActionStatus DONE");
  }

  function updateContact(id, nombre, tel, email, empresa) {
    var store = getObjectStore(DB_STORE_NAME, "readwrite")
    var req = store.get(id)
    req.onsuccess = (evt) => {
      var data = evt.target.result
      data.nombre = nombre
      data.tel = tel
      data.email = email
      data.empresa = empresa

      var updateReq = store.put(data)
      updateReq.onsuccess = () => {
        displayActionSuccess("Contacto actualizado con éxito")
        displayPubList(store)
      }
      updateReq.onerror = function () {
        console.error("updateContact error", this.error)
        displayActionFailure(this.error)
      }
    }
  }

  function searchContacts(nameQuery, companyQuery) {
    var store = getObjectStore(DB_STORE_NAME, "readonly")
    var index = store.index("nombre")
    var request = index.openCursor()

    var pub_list = $("#pub-list")
    pub_list.empty()

    request.onsuccess = (event) => {
      var cursor = event.target.result
      if (cursor) {
        var contact = cursor.value
        var nameMatch = contact.nombre.includes(nameQuery)
        var companyMatch = contact.empresa.includes(companyQuery)

        if (nameMatch && companyMatch) {
          var list_item = $(
            `<li>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <strong>Nombre:</strong> ${contact.nombre}<br>
                  <strong>Teléfono:</strong> ${contact.tel}<br>
                  <strong>Email:</strong> ${contact.email ? contact.email : "No disponible"}<br>
                  <strong>Empresa:</strong> ${contact.empresa ? contact.empresa : "No disponible"}
                </div>
                <div>
                  <button type="button" class="btn-edit-contact" data-id="${contact.id}">Editar</button>
                  <button type="button" class="btn-destroy-contact" data-id="${contact.id}">Eliminar</button>
                </div>
              </div>
            </li>`,
          )
          pub_list.append(list_item)
        }
        cursor.continue()
      }
    }
  }

  function addEventListeners() {
    console.log("addEventListeners");

    $("#register-form-reset").click(function (evt) {
      resetActionStatus();
    });

    $("#add-button").click(function () {
      console.log("add ...");
      var nombre = $("#pub-nombre").val();
      var tel = $("#pub-tel").val();
      var email = $("#pub-email").val();
      var empresa = $("#pub-empresa").val();

      if (!nombre && !tel) {
        displayActionFailure("Los campos Nombre y Teléfono son obligatorios");
        $(".note").prop("hidden", false);
        $("#pub-nombre").css("border-color", "red");
        $("#pub-tel").css("border-color", "red");
        return;
      } else if (!nombre) {
        displayActionFailure("El campo Nombre es obligatorio");
        $(".note").prop("hidden", false);
        $("#pub-nombre").css("border-color", "red");
        return;
      } else if (!tel) {
        displayActionFailure("El campo Teléfono es obligatorio");
        $(".note").prop("hidden", false);
        $("#pub-tel").css("border-color", "red");
        return;
      }

      var editId = $(this).data("edit-id");
      if (editId) {
        updateContact(editId, nombre, tel, email, empresa);
        $(this).text("Agregar").removeData("edit-id");
      } else {
        // Validación de teléfono con regex
        var telRegex = /^[0-9]{9}$/;
        if (!telRegex.test(tel)) {
          displayActionFailure("Número de teléfono inválido");
          return;
        }

        // Validación de email con regex
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email !== "" && !emailRegex.test(email)) {
          displayActionFailure("Email inválido");
          return;
        }
        if (email === "") {
          email = null;
        }

        addPublication(tel, nombre, email, empresa);
      }
    });

    $("#delete-button").click(function (evt) {
      console.log("delete ...");
      var tel = $("#pub-tel-to-delete").val();
      var nombre = $("#pub-nombre-to-delete").val();

      if (nombre !== "") {
        deletePublicationFromNom(nombre);
      } else if (tel !== "") {
        deletePublicationFromTel(tel);
      }
    });

    $("#clear-store-button").click(function (evt) {
      clearObjectStore();
    });

    var search_button = $("#search-list-button");
    search_button.click(function (evt) {
      displayPubList();
    });

    $(document).on("click", ".btn-edit-contact", function () {
      var id = $(this).data("id");
      var store = getObjectStore(DB_STORE_NAME, "readonly");
      var req = store.get(id);
      req.onsuccess = function (evt) {
        var contact = evt.target.result;
        if (contact) {
          // Rellenar el formulario con los datos del contacto
          $("#pub-nombre").val(contact.nombre);
          $("#pub-tel").val(contact.tel);
          $("#pub-email").val(contact.email);
          $("#pub-empresa").val(contact.empresa);

          // Cambiar el texto del botón de agregar a actualizar
          $("#add-button").text("Actualizar").data("edit-id", id);
          // Cambiar el texto del botón de editar a editando
          $(".btn-edit-contact[data-id='" + id + "']").text("Editando").data("edit-id", evt.target.result.id);
        }
      };
      req.onerror = function (evt) {
        console.error("editContact error", evt.target.errorCode);
      };
    });

    $(document).on("click", ".btn-destroy-contact", function () {
      var id = $(this).data("id");
      deletePublication(id);
    });

    $("#pub-nombre-to-search, #pub-empresa-to-search").on("input", () => {
      var nameQuery = $("#pub-nombre-to-search").val()
      var companyQuery = $("#pub-empresa-to-search").val()
      searchContacts(nameQuery, companyQuery)
    });
  }

  openDb();
  addEventListeners();
  // Immediately-Invoked Function Expression (IIFE)
});
