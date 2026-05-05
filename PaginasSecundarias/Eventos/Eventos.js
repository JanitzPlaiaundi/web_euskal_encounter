const contenedorEventos = document.getElementById("contenedor-eventos");
const token = "3CdCEuen9f1RrVrNWGhGQ90qyayo-F_H";

async function readEvents() {
  contenedorEventos.innerHTML = "";

  try {
    const response = await fetch("http://localhost:8055/items/EVENTO", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const resJson = await response.json();
    const events = resJson.data;

    if (!events || events.length === 0) {
      contenedorEventos.innerHTML = "<p>No hay eventos disponibles.</p>";
      return;
    }

    events.forEach((evento) => {
      const tarjeta = `
    <div class="evento-row" style="
      display: flex; 
      align-items: center; 
      background: #212121; 
      color: white; 
      margin-bottom: 20px; 
      border-radius: 10px; 
      overflow: hidden; 
      box-shadow: 0 10px 20px rgba(0,0,0,0.2);
      border-left: 6px solid #f9a01b;
      width: 100%;
      max-width: 300px;
      font-family: 'Segoe UI', Roboto, sans-serif;
    ">
      <div style=" padding: 25px;">
        <h2 style="margin: 0 0 10px 0; font-size: 1.6rem; letter-spacing: -0.5px;">${evento.TITULO}</h2>
        <p style="margin: 0; color: #aaa; font-size: 0.95rem; line-height: 1.5;">${evento.DESCRIPCION || "Sin descripción disponible."}</p>
      </div>

      <div style="flex: 1.2; background: #2a2a2a; padding: 25px; display: flex; flex-direction: column; gap: 12px; border-left: 1px solid #333;">
        <div style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem;">
          <span style="font-size: 1.2rem;">📍</span>
          <span><strong>Lugar:</strong> ${evento.UBICACION}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem;">
          <span style="font-size: 1.2rem;">📅</span>
          <span>${evento.FECHA_INICIO} <br> <small style="color: #888;">al ${evento.FECHA_FIN}</small></span>
        </div>
        <div style="display: flex; align-items: center; gap: 10px; font-size: 0.9rem;">
          <span style="font-size: 1.2rem;">🕒</span>
          <span>${evento.HORARIO_INICIO} - ${evento.HORARIO_FIN}</span>
        </div>
      </div>
    </div>
  `;

      contenedorEventos.innerHTML += tarjeta;
    });
  } catch (error) {
    console.error("Error al leer eventos:", error);
    contenedorEventos.innerHTML = "<p>Error al cargar los datos.</p>";
  }
}

readEvents();
