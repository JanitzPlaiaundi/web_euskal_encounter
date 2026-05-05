document.addEventListener("DOMContentLoaded", () => {
  const DIRECTUS_URL = "http://localhost:8055";
  const USUARIOS_ENDPOINT = `${DIRECTUS_URL}/items/USUARIO`;

  const adminUsers = [
    {
      nombre: "Aaron",
      email: "ikdbq@plaiaundi.net",
      password: "Aaron-070506",
      role: "admin",
    },
    {
      nombre: "Abel",
      email: "ikear@plaiaundi.net",
      password: "123456789",
      role: "admin",
    },
    {
      nombre: "Janitz",
      email: "ikdbs@plaiaundi.net",
      password: "123456789",
      role: "admin",
    },
  ];

  const loginForm = document.querySelector("#f-login");
  const registerForm = document.querySelector("#f-register");
  const alerta = document.getElementById("alerta");
  const alertaTexto = document.querySelector(".alertText");

  function mostrarAlerta(mensaje) {
    if (alertaTexto && alerta) {
      alertaTexto.textContent = mensaje;
      alerta.classList.add("activa");
    } else {
      alert(mensaje);
    }
  }

  function ocultarAlerta() {
    if (alerta) alerta.classList.remove("activa");
  }

  // --- REGISTRO CORREGIDO ---
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    ocultarAlerta();

    const nombre = document.getElementById("reg-nom-completo").value.trim();
    const apellido = document.getElementById("reg-apellido").value.trim();
    const dni = document.getElementById("reg-dni").value.trim();
    const email = document.getElementById("reg-email").value.trim();
    const pass1 = document.getElementById("reg-pass1").value;
    const pass2 = document.getElementById("reg-pass2").value;

    if (pass1 !== pass2) {
      mostrarAlerta("Las contraseñas no coinciden");
      return;
    }

    const datosUsuario = {
      NOMBRE: nombre,
      APELLIDO: apellido,
      DNI: dni,
      EMAIL: email,
      CONTRASEÑA: pass1,
      FECHA_DE_REGISTRO: new Date().toISOString().split("T")[0],
    };

    try {
      const response = await fetch(USUARIOS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosUsuario),
      });

      if (response.ok) {
        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            role: "user",
          }),
        );
        window.location.href = "../../index.html";
      } else {
        const result = await response.json();
        console.error("Error de Directus:", result);
        mostrarAlerta("Error: Revisa si el Email o DNI ya existen.");
      }
    } catch (error) {
      mostrarAlerta("No se pudo conectar con el servidor.");
    }
  });

  // --- LOGIN CON ACTUALIZACIÓN DE FECHA ---
  // Función para actualizar la fecha buscando por EMAIL
  async function actualizarFechaPorEmail(email) {
    const hoy = new Date().toISOString().split("T")[0];

    try {
      // PASO 1: Buscamos el DNI del usuario usando el correo
      const busqueda = await fetch(
        `${USUARIOS_ENDPOINT}?filter[EMAIL][_eq]=${encodeURIComponent(email)}`,
      );
      const resultado = await busqueda.json();

      if (resultado.data && resultado.data.length > 0) {
        const dni = resultado.data[0].DNI;

        // PASO 2: Actualizamos la fecha usando el DNI en la URL
        const response = await fetch(`${USUARIOS_ENDPOINT}/${dni}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ FECHA_DE_REGISTRO: hoy }),
        });

        if (response.ok) {
        } else {
          console.error(
            "❌ Error en el PATCH. Revisa permisos UPDATE en Directus.",
          );
        }
      }
    } catch (error) {
      console.error("❌ Error de conexión al actualizar:", error);
    }
  }

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    ocultarAlerta();

    const email = document.getElementById("log-email").value.trim();
    const pass = document.getElementById("log-pass").value;

    // 1. Verificación de Admins
    const admin = adminUsers.find(
      (a) => a.email === email && a.password === pass,
    );
    if (admin) {
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ nombre: admin.nombre, role: "admin" }),
      );
      window.location.href = "../Administrador/Administrador.html";
      return;
    }

    // 2. Verificación de Usuario
    try {
      const query = `${USUARIOS_ENDPOINT}?filter[EMAIL][_eq]=${encodeURIComponent(email)}&filter[CONTRASEÑA][_eq]=${encodeURIComponent(pass)}`;
      const response = await fetch(query);
      const result = await response.json();

      if (result.data && result.data.length > 0) {
        const usuario = result.data[0];

        // LLAMADA A LA ACTUALIZACIÓN
        await actualizarFechaPorEmail(email);

        // Guardar sesión y entrar
        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            nombre: usuario.NOMBRE,
            apellido: usuario.APELLIDO,
            role: "user",
          }),
        );

        window.location.href = "../../index.html";
      } else {
        mostrarAlerta("Email o contraseña incorrectos");
      }
    } catch (error) {
      mostrarAlerta("Error al conectar con el servidor");
    }
  });
});
