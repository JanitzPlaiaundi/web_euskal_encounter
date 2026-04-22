const userInteraction = document.getElementById("user-interaction");
const displayZone = document.getElementById("display-zone");
const token = "_VBTouzy-8CeyTxxnZ1fqoal5E2tCsgs";

function colectEventData() {
  userInteraction.innerHTML = "";
  userInteraction.style.overflowY = "auto";
  userInteraction.style.maxHeight = "250px";

  const colectDataInputs = [
    { text: "Titulo", inputType: "text", id: "ev-titulo" },
    { text: "Ubicación", inputType: "text", id: "ev-ubicacion" },
    { text: "Descripcion", inputType: "text", id: "ev-desc" },
    { text: "Fecha inicio", inputType: "date", id: "ev-f-inicio" },
    { text: "Fecha fin", inputType: "date", id: "ev-f-fin" },
    { text: "Hora de inicio", inputType: "time", id: "ev-h-inicio" },
    { text: "Hora de cierre", inputType: "time", id: "ev-h-fin" },
    { text: "Imagen", inputType: "text", id: "ev-img" },
    { text: "Encuentro", inputType: "number", id: "ev-cod" },
  ];

  colectDataInputs.forEach((item) => {
    const div = document.createElement("div");
    div.className = "divInputEventos";

    const text = document.createElement("h2");
    text.innerText = item.text;
    text.className = "textoInputEventos";

    const input = document.createElement("input");
    input.type = item.inputType;
    input.id = item.id;
    input.className = "inputsEventos";

    div.appendChild(text);
    div.appendChild(input);
    userInteraction.appendChild(div);
  });

  const resgisterEventBtn = document.createElement("button");
  resgisterEventBtn.innerText = "REGISTRAR EVENTO";
  resgisterEventBtn.className = "btnRegistrarEvento";

  resgisterEventBtn.onclick = () => {
    postEvent(
      document.getElementById("ev-titulo").value,
      document.getElementById("ev-ubicacion").value,
      document.getElementById("ev-desc").value,
      document.getElementById("ev-f-inicio").value,
      document.getElementById("ev-f-fin").value,
      document.getElementById("ev-h-inicio").value,
      document.getElementById("ev-h-fin").value,
      document.getElementById("ev-img").value,
      document.getElementById("ev-cod").value,
    );
  };

  userInteraction.appendChild(resgisterEventBtn);
}

async function postEvent(
  titulo,
  ubicacion,
  descripcion,
  fechaInicio,
  fechaFin,
  horaInicio,
  horaFin,
  imagen,
  encuentro,
) {
  const url = "http://localhost:8055/items/EVENTO";
  if (new Date(fechaInicio) > new Date(fechaFin)) {
    displayZone.innerHTML = `<p class="error-msg">Error: La fecha fin es anterior al inicio.</p>`;
    return false;
  }
  if (horaInicio >= horaFin) {
    displayZone.innerHTML = `<p class="error-msg">Error: La hora de cierre debe ser posterior a la de inicio.</p>`;
    return false;
  }

  const data = {
    TITULO: titulo,
    UBICACION: ubicacion,
    DESCRIPCION: descripcion,
    FECHA_INICIO: fechaInicio,
    FECHA_FIN: fechaFin,
    HORARIO_INICIO: `${horaInicio}:00`,
    HORARIO_FIN: `${horaFin}:00`,
    IMAGEN: imagen,
    ENCUENTRO_CODIGO: parseInt(encuentro) || 1,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      userInteraction.innerHTML = "";
      readEvents();
      return true;
    } else {
      const errorData = await response.json();
      displayZone.innerHTML = `<p class="error-msg">Error: ${errorData.errors[0].message}</p>`;
      return false;
    }
  } catch (err) {
    console.error("Fallo de red:", err);
    return false;
  }
}




async function readEvents() {
  displayZone.innerHTML = "";
  userInteraction.innerHTML = "";
  const events = await fetch("http://localhost:8055/items/EVENTO", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((res) => res.data);

  if (!events || events.length === 0) {
    displayZone.innerHTML = "<p>No hay eventos disponibles.</p>";
    return;
  }
  const mainContainer = document.createElement("div");
  mainContainer.className = "eventsContainer";

  events.map((event) => {
    const card = document.createElement("div");
    card.className = "cardEventos";

    const title = document.createElement("h2");
    title.className = "tituloCardEventos";
    title.innerText = event.TITULO;

    const info = document.createElement("p");
    info.style.color = "#94a3b8";
    info.innerText = `ID: ${event.ID} | 📍 ${event.UBICACION} | 📅 ${event.FECHA_INICIO}`;

    card.appendChild(title);
    card.appendChild(info);

    mainContainer.appendChild(card);
  });
  displayZone.appendChild(mainContainer);
}

function colectDeleteData() {
  userInteraction.innerHTML = "";
  readEvents();
  const div = document.createElement("div");
  div.className = "divInputEventos";

  const text = document.createElement("h2");
  text.innerText = "ID del Evento a Eliminar";
  text.className = "textoInputEventos";

  const input = document.createElement("input");
  input.type = "number";
  input.id = "ev-id-delete";
  input.placeholder = "Ej: 5";

  div.appendChild(text);
  div.appendChild(input);
  userInteraction.appendChild(div);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "ELIMINAR EVENTO";
  deleteBtn.className = "btnEliminarEvento";

  deleteBtn.onclick = () => {
    const id = document.getElementById("ev-id-delete").value;
    if (id) {
      deleteEvent(id);
    } else {
      alert("Por favor, introduce un ID válido");
    }
  };

  userInteraction.appendChild(deleteBtn);
}

async function deleteEvent(id) {
  if (!confirm(`¿Seguro que quieres eliminar el evento con ID: ${id}?`)) return;

  try {
    const response = await fetch(`http://localhost:8055/items/EVENTO/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      colectDeleteData();
    } else {
      alert("No se pudo eliminar el evento.");
    }
  } catch (error) {
    console.error("Error al borrar:", error);
  }
}



function colectUpdateData() {
  readEvents()
  userInteraction.innerHTML = "";
  userInteraction.style.overflowY = "auto";

  const fields = [
    { text: "ID del Evento a modificar", type: "number", id: "up-id" },
    { text: "Nuevo Título", type: "text", id: "up-titulo" },
    { text: "Nueva Ubicación", type: "text", id: "up-ubicacion" },
  ];

  fields.forEach((item) => {
    const div = document.createElement("div");
    div.className = "divInputEventos";

    const label = document.createElement("h2");
    label.className = "textoInputEventos";
    label.innerText = item.text;

    const input = document.createElement("input");
    input.type = item.type;
    input.id = item.id;
    input.className = "inputsEventos";

    div.appendChild(label);
    div.appendChild(input);
    userInteraction.appendChild(div);
  });

  const updateBtn = document.createElement("button");
  updateBtn.innerText = "ACTUALIZAR EVENTO";
  updateBtn.className = "btnActualizarEvento";

  updateBtn.onclick = () => {
    const id = document.getElementById("up-id").value;
    const nuevoTitulo = document.getElementById("up-titulo").value;
    const nuevaUbi = document.getElementById("up-ubicacion").value;

    if (!id) return alert("El ID es obligatorio");
    patchEvent(id, nuevoTitulo, nuevaUbi);
  };

  userInteraction.appendChild(updateBtn);
}

async function patchEvent(id, titulo, ubicacion) {
  const url = `http://localhost:8055/items/EVENTO/${id}`;

  const data = {};
  if (titulo) data.TITULO = titulo;
  if (ubicacion) data.UBICACION = ubicacion;

  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      readEvents()
    } else {
      const err = await response.json();
      displayZone.innerHTML = `<p style="color:red">Error: ${err.errors[0].message}</p>`;
    }
  } catch (error) {
    console.error("Fallo de red:", error);
  }
}
