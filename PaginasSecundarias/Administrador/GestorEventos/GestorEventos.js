const userInteraction = document.getElementById("user-interaction");
const displayZone = document.getElementById("display-zone");

function colectEventData() {
  userInteraction.innerHTML = "";
  userInteraction.style.overflowY = "auto";
  userInteraction.style.maxHeight = "250px"; // Te sugiero un poco más de altura por los 9 campos

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
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.marginBottom = "15px";

    const text = document.createElement("h2");
    text.innerText = item.text;
    text.style.fontSize = "1rem";
    text.style.margin = "0 0 5px 0";
    text.style.color = "#94a3b8";

    const input = document.createElement("input");
    input.type = item.inputType;
    input.id = item.id; // Asignamos ID para poder recuperar el valor luego

    // Estilos inline
    input.style.padding = "10px";
    input.style.borderRadius = "5px";
    input.style.border = "1px solid #334155";
    input.style.backgroundColor = "#0f172a";
    input.style.color = "white";

    div.appendChild(text);
    div.appendChild(input);
    userInteraction.appendChild(div);
  });

  const resgisterEventBtn = document.createElement("button");
  resgisterEventBtn.innerText = "REGISTRAR EVENTO";
  resgisterEventBtn.style.padding = "10px 20px";
  resgisterEventBtn.style.backgroundColor = "#22c55e";
  resgisterEventBtn.style.color = "white";
  resgisterEventBtn.style.border = "none";
  resgisterEventBtn.style.borderRadius = "5px";
  resgisterEventBtn.style.cursor = "pointer";
  resgisterEventBtn.style.fontWeight = "bold";

  // CORRECCIÓN: Al hacer clic, capturamos los valores y llamamos a la función
  resgisterEventBtn.onclick = function () {
    registerEvent(
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

// Esta es la función que recibe los datos limpios
function registerEvent(
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
    displayZone.innerHTML = ""
  const successBox = document.createElement("div");
  successBox.style.display = "flex";
  successBox.style.flexDirection = "column";
  successBox.style.alignItems = "center";
  successBox.style.justifyContent = "center";
  successBox.style.padding = "40px";
  successBox.style.textAlign = "center";
  successBox.style.animation = "fadeIn 0.5s ease";

  const icon = document.createElement("div");
  icon.innerText = "✅";
  icon.style.fontSize = "3rem";
  icon.style.marginBottom = "10px";

  const message = document.createElement("h2");
  message.innerText = "¡Evento Creado!";
  message.style.color = "#22c55e";
  message.style.margin = "0";

  const detail = document.createElement("p");
  detail.innerText = `El evento ha sido registrado correctamente.`;
  detail.style.color = "#94a3b8";

  // Unir todo
  successBox.appendChild(icon);
  successBox.appendChild(message);
  successBox.appendChild(detail);

  displayZone.appendChild(successBox);

  //Falta crear el fetch con el PUT
}
