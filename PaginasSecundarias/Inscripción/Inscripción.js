const alerta = document.getElementById("alerta");
const alertaTexto = document.querySelector(".alertText");

function mostrarAlerta(mensaje) {
    alertaTexto.textContent = mensaje;
    alerta.classList.add("activa");
}

function ocultarAlerta() {
    alerta.classList.remove("activa");
}


const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    ocultarAlerta();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const evento = document.getElementById("evento").value;
    const mensaje = document.getElementById("Mensaje").value.trim();

    if (!nombre || !correo || !telefono || evento === "0" || !mensaje) {
        mostrarAlerta("Completa todos los campos obligatorios");
        return;
    }

    const nombreRegex = /^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/;
    if (!nombreRegex.test(nombre)) {
        mostrarAlerta("El nombre solo puede contener letras");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|net|es|org|edu|gov|info)$/i;
    if (!emailRegex.test(correo)) {
        mostrarAlerta("Correo electrónico inválido");
        return;
    }

    const telefonoRegex = /^[0-9]{9}$/;
    if (!telefonoRegex.test(telefono)) {
        mostrarAlerta("El teléfono debe tener 9 dígitos");
        return;
    }

    if (mensaje.length < 10) {
        mostrarAlerta("El mensaje debe tener al menos 10 caracteres");
        return;
    }

    formulario.reset();
});

const Select=document.getElementById("Prefijo");
const paises = [
    { numero: "España +34", clase: "../../Recursos/Imagenes/Banderas/espana.png" },
    { numero: "Afganistán +93", clase: "../../Recursos/Imagenes/Banderas/afganistan.png" },
    { numero: "Albania +355", clase: "../../Recursos/Imagenes/Banderas/albania.png" },
    { numero: "Alemania +49", clase: "../../Recursos/Imagenes/Banderas/alemania.png" },
    { numero: "Andorra +1‑684", clase: "../../Recursos/Imagenes/Banderas/samoa_americana.png" },
    { numero: "Andorra +376", clase: "../../Recursos/Imagenes/Banderas/andorra.png" },
    { numero: "Angola +244", clase: "../../Recursos/Imagenes/Banderas/angola.png" },
    { numero: "Anguilla +1‑264", clase: "../../Recursos/Imagenes/Banderas/anguilla.png" },
    { numero: "Antártica +672", clase: "../../Recursos/Imagenes/Banderas/antartica.png" },
    { numero: "Antigua y Barbuda +1‑268", clase: "../../Recursos/Imagenes/Banderas/antigua_y_barbuda.png" },
    { numero: "Arabia Saudí +966", clase: "../../Recursos/Imagenes/Banderas/arabia_saudi.png" },
    { numero: "Argelia +213", clase: "../../Recursos/Imagenes/Banderas/argelia.png" },
    { numero: "Argentina +54", clase: "../../Recursos/Imagenes/Banderas/argentina.png" },
    { numero: "Armenia +374", clase: "../../Recursos/Imagenes/Banderas/armenia.png" },
    { numero: "Aruba +297", clase: "../../Recursos/Imagenes/Banderas/aruba.png" },
    { numero: "Australia +61", clase: "../../Recursos/Imagenes/Banderas/australia.png" },
    { numero: "Austria +43", clase: "../../Recursos/Imagenes/Banderas/austria.png" },
    { numero: "Azerbaiyán +994", clase: "../../Recursos/Imagenes/Banderas/azerbaiyan.png" },
    { numero: "Bahamas +1‑242", clase: "../../Recursos/Imagenes/Banderas/bahamas.png" },
    { numero: "Bangladés +880", clase: "../../Recursos/Imagenes/Banderas/banglades.png" },
    { numero: "Barbados +1‑246", clase: "../../Recursos/Imagenes/Banderas/barbados.png" },
    { numero: "Baréin +973", clase: "../../Recursos/Imagenes/Banderas/barein.png" },
    { numero: "Bélgica +32", clase: "../../Recursos/Imagenes/Banderas/belgica.png" },
    { numero: "Belice +501", clase: "../../Recursos/Imagenes/Banderas/belice.png" },
    { numero: "Benín +229", clase: "../../Recursos/Imagenes/Banderas/benin.png" },
    { numero: "Bermudas +1‑441", clase: "../../Recursos/Imagenes/Banderas/bermudas.png" },
    { numero: "Bielorrusia +375", clase: "../../Recursos/Imagenes/Banderas/bielorrusia.png" },
    { numero: "Birmania (Myanmar) +95", clase: "../../Recursos/Imagenes/Banderas/birmania.png" },
    { numero: "Bolivia +591", clase: "../../Recursos/Imagenes/Banderas/bolivia.png" },
    { numero: "Bosnia y Herzegovina +387", clase: "../../Recursos/Imagenes/Banderas/bosnia_y_herzegovina.png" },
    { numero: "Botsuana +267", clase: "../../Recursos/Imagenes/Banderas/botsuana.png" },
    { numero: "Brasil +55", clase: "../../Recursos/Imagenes/Banderas/brasil.png" },
    { numero: "Brunéi +673", clase: "../../Recursos/Imagenes/Banderas/brunei.png" },
    { numero: "Bulgaria +359", clase: "../../Recursos/Imagenes/Banderas/bulgaria.png" },
    { numero: "Burkina Faso +226", clase: "../../Recursos/Imagenes/Banderas/burkina_faso.png" },
    { numero: "Burundi +257", clase: "../../Recursos/Imagenes/Banderas/burundi.png" },
    { numero: "Bután +975", clase: "../../Recursos/Imagenes/Banderas/butan.png" },
    { numero: "Cabo Verde +238", clase: "../../Recursos/Imagenes/Banderas/cabo_verde.png" },
    { numero: "Camboya +855", clase: "../../Recursos/Imagenes/Banderas/camboya.png" },
    { numero: "Camerún +237", clase: "../../Recursos/Imagenes/Banderas/camerun.png" },
    { numero: "Canadá+1", clase: "../../Recursos/Imagenes/Banderas/canada.png" },
    { numero: "Catar +974", clase: "../../Recursos/Imagenes/Banderas/catar.png" },
    { numero: "Chad +235", clase: "../../Recursos/Imagenes/Banderas/chad.png" },
    { numero: "Chile +56", clase: "../../Recursos/Imagenes/Banderas/chile.png" },
    { numero: "China +86", clase: "../../Recursos/Imagenes/Banderas/china.png" },
    { numero: "Chipre +357", clase: "../../Recursos/Imagenes/Banderas/chipre.png" },
    { numero: "Ciudad del Vaticano +379", clase: "../../Recursos/Imagenes/Banderas/ciudad_del_vaticano.png" },
    { numero: "Colombia +57", clase: "../../Recursos/Imagenes/Banderas/colombia.png" },
    { numero: "Comoras +269", clase: "../../Recursos/Imagenes/Banderas/comoras.png" },
    { numero: "Congo +242", clase: "../../Recursos/Imagenes/Banderas/congo.png" },
    { numero: "Corea del Norte +850", clase: "../../Recursos/Imagenes/Banderas/corea_del_norte.png" },
    { numero: "Corea del sur +82", clase: "../../Recursos/Imagenes/Banderas/corea_del_sur.png" },
    { numero: "Costa de Marfil +225", clase: "../../Recursos/Imagenes/Banderas/costa_de_marfil.png" },
    { numero: "Costa Rica +506", clase: "../../Recursos/Imagenes/Banderas/costa_rica.png" },
    { numero: "Croacia +385", clase: "../../Recursos/Imagenes/Banderas/croacia.png" },
    { numero: "Cuba +53", clase: "../../Recursos/Imagenes/Banderas/cuba.png" },
    { numero: "Curazao +537", clase: "../../Recursos/Imagenes/Banderas/curazao.png" },
    { numero: "Dinamarca +45", clase: "../../Recursos/Imagenes/Banderas/dinamarca.png" },
    { numero: "Dominica +1‑767", clase: "../../Recursos/Imagenes/Banderas/dominica.png" },
    { numero: "Ecuador +593", clase: "../../Recursos/Imagenes/Banderas/ecuador.png" },
    { numero: "Egipto +20", clase: "../../Recursos/Imagenes/Banderas/egipto.png" },
    { numero: "El Salvador +503", clase: "../../Recursos/Imagenes/Banderas/el_salvador.png" },
    { numero: "Emiratos Árabes Unidos +971", clase: "../../Recursos/Imagenes/Banderas/emiratos_arabes_unidos.png" },
    { numero: "Eritrea +291", clase: "../../Recursos/Imagenes/Banderas/eritrea.png" },
    { numero: "Eslovaquia +421", clase: "../../Recursos/Imagenes/Banderas/eslovaquia.png" },
    { numero: "Eslovenia +386", clase: "../../Recursos/Imagenes/Banderas/eslovenia.png" },
    { numero: "Estados Federados de Micronesia +691", clase: "../../Recursos/Imagenes/Banderas/estados_federados_de_micronesia.png" },
    { numero: "Estonia +372", clase: "../../Recursos/Imagenes/Banderas/estonia.png" },
    { numero: "Etiopía +251", clase: "../../Recursos/Imagenes/Banderas/etiopia.png" },
    { numero: "Filipinas +63", clase: "../../Recursos/Imagenes/Banderas/filipinas.png" },
    { numero: "Finlandia +358", clase: "../../Recursos/Imagenes/Banderas/finlandia.png" },
    { numero: "Fiyi +679", clase: "../../Recursos/Imagenes/Banderas/fiyi.png" },
    { numero: "Francia +33", clase: "../../Recursos/Imagenes/Banderas/francia.png" },
    { numero: "Gabón +241", clase: "../../Recursos/Imagenes/Banderas/gabon.png" },
    { numero: "Gambia +220", clase: "../../Recursos/Imagenes/Banderas/gambia.png" },
    { numero: "Georgia +995", clase: "../../Recursos/Imagenes/Banderas/georgia.png" },
    { numero: "Georgia e Islas Sandwich del Sur +500", clase: "../../Recursos/Imagenes/Banderas/georgia_del_sur_e_islas_sandwich_del_sur.png" },
    { numero: "Ghana +233", clase: "../../Recursos/Imagenes/Banderas/ghana.png" },
    { numero: "Gibraltar +350", clase: "../../Recursos/Imagenes/Banderas/gibraltar.png" },
    { numero: "Granada +1‑473", clase: "../../Recursos/Imagenes/Banderas/granada.png" },
    { numero: "Grecia +30", clase: "../../Recursos/Imagenes/Banderas/grecia.png" },
    { numero: "Groenlandia +299", clase: "../../Recursos/Imagenes/Banderas/groenlandia.png" },
    { numero: "Guadalupe +590", clase: "../../Recursos/Imagenes/Banderas/francia.png" },
    { numero: "Guam +1‑671", clase: "../../Recursos/Imagenes/Banderas/guam.png" },
    { numero: "Guatemala +502", clase: "../../Recursos/Imagenes/Banderas/guatemala.png" },
    { numero: "Guayana Francesa +594", clase: "../../Recursos/Imagenes/Banderas/guayana_francesa.png" },
    { numero: "Guernesey +44‑1481", clase: "../../Recursos/Imagenes/Banderas/guernesey.png" },
    { numero: "Guinea +224", clase: "../../Recursos/Imagenes/Banderas/guinea.png" },
    { numero: "Guinea Ecuatorial +240", clase: "../../Recursos/Imagenes/Banderas/guinea_ecuatorial.png" },
    { numero: "Guinea-Bisáu +245", clase: "../../Recursos/Imagenes/Banderas/guinea_bisau.png" },
    { numero: "Guyana +595", clase: "../../Recursos/Imagenes/Banderas/guyana.png" },
    { numero: "Haití +509", clase: "../../Recursos/Imagenes/Banderas/haiti.png" },
    { numero: "Honduras +504", clase: "../../Recursos/Imagenes/Banderas/honduras.png" },
    { numero: "Hong Kong +852", clase: "../../Recursos/Imagenes/Banderas/hong_kong.png" },
    { numero: "Hungría +36", clase: "../../Recursos/Imagenes/Banderas/hungria.png" },
    { numero: "India +91", clase: "../../Recursos/Imagenes/Banderas/india.png" },
    { numero: "Indonesia +62", clase: "../../Recursos/Imagenes/Banderas/indonesia.png" },
    { numero: "Irak +964", clase: "../../Recursos/Imagenes/Banderas/irak.png" },
    { numero: "Irán +98", clase: "../../Recursos/Imagenes/Banderas/iran.png" },
    { numero: "Irlanda +353", clase: "../../Recursos/Imagenes/Banderas/irlanda.png" },
    { numero: "Isla Christmas +61", clase: "../../Recursos/Imagenes/Banderas/isla_christmas.png" },
    { numero: "Isla de Man +44", clase: "../../Recursos/Imagenes/Banderas/isla_de_man.png" },
    { numero: "Isla Norfolk +672", clase: "../../Recursos/Imagenes/Banderas/isla_norfolk.png" },
    { numero: "Islandia +354", clase: "../../Recursos/Imagenes/Banderas/islandia.png" },
    { numero: "Islas Caimán +345", clase: "../../Recursos/Imagenes/Banderas/islas_caiman.png" },
    { numero: "Islas Cocos (Keeling) +61", clase: "../../Recursos/Imagenes/Banderas/islas_cocos_keeling.png" },
    { numero: "Islas Cook +672", clase: "../../Recursos/Imagenes/Banderas/islas_cook.png" },
    { numero: "Islas Feroe +298", clase: "../../Recursos/Imagenes/Banderas/islas_feroe.png" },
    { numero: "Islas Malvinas +500", clase: "../../Recursos/Imagenes/Banderas/islas_malvinas.png" },
    { numero: "Islas Marianas del Norte +1‑670", clase: "../../Recursos/Imagenes/Banderas/islas_marianas_del_norte.png" },
    { numero: "Islas Marshall +692", clase: "../../Recursos/Imagenes/Banderas/islas_marshall.png" },
    { numero: "Islas Salomón +677", clase: "../../Recursos/Imagenes/Banderas/islas_salomon.png" },
    { numero: "Islas Turcas y Caicos +1‑649", clase: "../../Recursos/Imagenes/Banderas/islas_turcas_y_caicos.png" },
    { numero: "Islas Vírgenes (EE. UU.) +1‑340, +1‑758", clase: "../../Recursos/Imagenes/Banderas/islas_virgenes_ee_uu.png" },
    { numero: "Islas Vírgenes Británicas +1‑284", clase: "../../Recursos/Imagenes/Banderas/islas_virgenes_britanicas.png" },
    { numero: "Italia +39", clase: "../../Recursos/Imagenes/Banderas/italia.png" },
    { numero: "Jamaica +1‑876", clase: "../../Recursos/Imagenes/Banderas/jamaica.png" },
    { numero: "Japón +81", clase: "../../Recursos/Imagenes/Banderas/japon.png" },
    { numero: "Jersey +44‑1534", clase: "../../Recursos/Imagenes/Banderas/jersey.png" },
    { numero: "Jordania +962", clase: "../../Recursos/Imagenes/Banderas/jordania.png" },
    { numero: "Kazajistán +7", clase: "../../Recursos/Imagenes/Banderas/kazajistan.png" },
    { numero: "Kenia +254", clase: "../../Recursos/Imagenes/Banderas/kenia.png" },
    { numero: "Kirguistán +996", clase: "../../Recursos/Imagenes/Banderas/kirguistan.png" },
    { numero: "Kiribati +686", clase: "../../Recursos/Imagenes/Banderas/kiribati.png" },
    { numero: "Kosovo +383", clase: "../../Recursos/Imagenes/Banderas/kosovo.png" },
    { numero: "Kuwait +965", clase: "../../Recursos/Imagenes/Banderas/kuwait.png" },
    { numero: "Laos +856", clase: "../../Recursos/Imagenes/Banderas/laos.png" },
    { numero: "Lesoto +266", clase: "../../Recursos/Imagenes/Banderas/lesoto.png" },
    { numero: "Letonia +371", clase: "../../Recursos/Imagenes/Banderas/letonia.png" },
    { numero: "Líbano +961", clase: "../../Recursos/Imagenes/Banderas/libano.png" },
    { numero: "Liberia +231", clase: "../../Recursos/Imagenes/Banderas/liberia.png" },
    { numero: "Libia +218", clase: "../../Recursos/Imagenes/Banderas/libia.png" },
    { numero: "Liechtenstein +423", clase: "../../Recursos/Imagenes/Banderas/liechtenstein.png" },
    { numero: "Lituania +370", clase: "../../Recursos/Imagenes/Banderas/lituania.png" },
    { numero: "Luxemburgo +352", clase: "../../Recursos/Imagenes/Banderas/luxemburgo.png" },
    { numero: "Macao +853", clase: "../../Recursos/Imagenes/Banderas/macao.png" },
    { numero: "Macedonia del Norte +389", clase: "../../Recursos/Imagenes/Banderas/macedonia_del_norte.png" },
    { numero: "Madagascar +261", clase: "../../Recursos/Imagenes/Banderas/madagascar.png" },
    { numero: "Malasia +60", clase: "../../Recursos/Imagenes/Banderas/malasia.png" },
    { numero: "Malaui +265", clase: "../../Recursos/Imagenes/Banderas/malaui.png" },
    { numero: "Maldivas +960", clase: "../../Recursos/Imagenes/Banderas/maldivas.png" },
    { numero: "Malí +223", clase: "../../Recursos/Imagenes/Banderas/mali.png" },
    { numero: "Malta +356", clase: "../../Recursos/Imagenes/Banderas/malta.png" },
    { numero: "Marruecos +212", clase: "../../Recursos/Imagenes/Banderas/marruecos.png" },
    { numero: "Martinica +596", clase: "../../Recursos/Imagenes/Banderas/martinica.png" },
    { numero: "Mauricio +230", clase: "../../Recursos/Imagenes/Banderas/mauricio.png" },
    { numero: "Mauritania +222", clase: "../../Recursos/Imagenes/Banderas/mauritania.png" },
    { numero: "Mayotte +262", clase: "../../Recursos/Imagenes/Banderas/francia.png" },
    { numero: "México +52", clase: "../../Recursos/Imagenes/Banderas/mexico.png" },
    { numero: "Moldavia +373", clase: "../../Recursos/Imagenes/Banderas/moldavia.png" },
    { numero: "Mónaco +377", clase: "../../Recursos/Imagenes/Banderas/monaco.png" },
    { numero: "Mongolia +976", clase: "../../Recursos/Imagenes/Banderas/mongolia.png" },
    { numero: "Montenegro +382", clase: "../../Recursos/Imagenes/Banderas/montenegro.png" },
    { numero: "Montserrat +1664", clase: "../../Recursos/Imagenes/Banderas/montserrat.png" },
    { numero: "Mozambique +258", clase: "../../Recursos/Imagenes/Banderas/mozambique.png" },
    { numero: "Namibia +264", clase: "../../Recursos/Imagenes/Banderas/namibia.png" },
    { numero: "Nauru +674", clase: "../../Recursos/Imagenes/Banderas/nauru.png" },
    { numero: "Nepal +977", clase: "../../Recursos/Imagenes/Banderas/nepal.png" },
    { numero: "Nicaragua +505", clase: "../../Recursos/Imagenes/Banderas/nicaragua.png" },
    { numero: "Níger +227", clase: "../../Recursos/Imagenes/Banderas/niger.png" },
    { numero: "Nigeria +234", clase: "../../Recursos/Imagenes/Banderas/nigeria.png" },
    { numero: "Niue +683", clase: "../../Recursos/Imagenes/Banderas/niue.png" },
    { numero: "Noruega +47", clase: "../../Recursos/Imagenes/Banderas/noruega.png" },
    { numero: "Nueva Caledonia +687", clase: "../../Recursos/Imagenes/Banderas/nueva_caledonia.png" },
    { numero: "Nueva Zelanda +64", clase: "../../Recursos/Imagenes/Banderas/nueva_zelanda.png" },
    { numero: "Océano Índico Británico +246", clase: "../../Recursos/Imagenes/Banderas/territorio_britanico_del_oceano_indico.png" },
    { numero: "Omán +968", clase: "../../Recursos/Imagenes/Banderas/oman.png" },
    { numero: "Países Bajos +31", clase: "../../Recursos/Imagenes/Banderas/paises_bajos.png" },
    { numero: "Pakistán +92", clase: "../../Recursos/Imagenes/Banderas/pakistan.png" },
    { numero: "Palaos +680", clase: "../../Recursos/Imagenes/Banderas/palaos.png" },
    { numero: "Palestina +970", clase: "../../Recursos/Imagenes/Banderas/palestina.png" },
    { numero: "Panamá +507", clase: "../../Recursos/Imagenes/Banderas/panama.png" },
    { numero: "Papúa Nueva Guinea +675", clase: "../../Recursos/Imagenes/Banderas/papua_nueva_guinea.png" },
    { numero: "Paraguay +595", clase: "../../Recursos/Imagenes/Banderas/paraguay.png" },
    { numero: "Perú +51", clase: "../../Recursos/Imagenes/Banderas/peru.png" },
    { numero: "Polinesia Francesa +689", clase: "../../Recursos/Imagenes/Banderas/polinesia_francesa.png" },
    { numero: "Polonia +48", clase: "../../Recursos/Imagenes/Banderas/polonia.png" },
    { numero: "Portugal +351", clase: "../../Recursos/Imagenes/Banderas/portugal.png" },
    { numero: "Puerto Rico +1‑787", clase: "../../Recursos/Imagenes/Banderas/puerto_rico.png" },
    { numero: "Reino Unido +44‑20", clase: "../../Recursos/Imagenes/Banderas/reino_unido.png" },
    { numero: "República Centroafricana+236", clase: "../../Recursos/Imagenes/Banderas/republica_centroafricana.png" },
    { numero: "República Checa +420", clase: "../../Recursos/Imagenes/Banderas/republica_checa.png" },
    { numero: "República Democrática del Congo +243", clase: "../../Recursos/Imagenes/Banderas/republica_democratica_del_congo.png" },
    { numero: "República Dominicana +1‑849", clase: "../../Recursos/Imagenes/Banderas/republica_dominicana.png" },
    { numero: "Rumanía +40", clase: "../../Recursos/Imagenes/Banderas/rumania.png" },
    { numero: "Rusia +7", clase: "../../Recursos/Imagenes/Banderas/rusia.png" },
    { numero: "Ruanda +250", clase: "../../Recursos/Imagenes/Banderas/ruanda.png" },
    { numero: "Sáhara Occidental +212", clase: "../../Recursos/Imagenes/Banderas/sahara_occidental.png" },
    { numero: "Samoa +685", clase: "../../Recursos/Imagenes/Banderas/samoa.png" },
    { numero: "San Cristóbal y Nieves +1‑869", clase: "../../Recursos/Imagenes/Banderas/san_cristobal_y_nieves.png" },
    { numero: "San Marino +378", clase: "../../Recursos/Imagenes/Banderas/san_marino.png" },
    { numero: "San Martín +1‑721", clase: "../../Recursos/Imagenes/Banderas/san_martin.png" },
    { numero: "San Vicente y Granadinas +1‑784", clase: "../../Recursos/Imagenes/Banderas/san_vicente_y_granadinas.png" },
    { numero: "Santa Elena +290", clase: "../../Recursos/Imagenes/Banderas/santa_elena.png" },
    { numero: "Santa Lucía +1‑758", clase: "../../Recursos/Imagenes/Banderas/santa_lucia.png" },
    { numero: "Santo Tomé y Príncipe +239", clase: "../../Recursos/Imagenes/Banderas/santo_tome_y_principe.png" },
    { numero: "Senegal +221", clase: "../../Recursos/Imagenes/Banderas/senegal.png" },
    { numero: "Serbia +381", clase: "../../Recursos/Imagenes/Banderas/serbia.png" },
    { numero: "Seychelles +248", clase: "../../Recursos/Imagenes/Banderas/seychelles.png" },
    { numero: "Sierra Leona+232", clase: "../../Recursos/Imagenes/Banderas/sierra_leona.png" },
    { numero: "Singapur +65", clase: "../../Recursos/Imagenes/Banderas/singapur.png" },
    { numero: "Siria +963", clase: "../../Recursos/Imagenes/Banderas/siria.png" },
    { numero: "Somalia +252", clase: "../../Recursos/Imagenes/Banderas/somalia.png" },
    { numero: "Sri Lanka +94", clase: "../../Recursos/Imagenes/Banderas/sri_lanka.png" },
    { numero: "Sudáfrica+27", clase: "../../Recursos/Imagenes/Banderas/sudafrica.png" },
    { numero: "Sudán +249", clase: "../../Recursos/Imagenes/Banderas/sudan.png" },
    { numero: "Sudán del Sur +211", clase: "../../Recursos/Imagenes/Banderas/sudan_del_sur.png" },
    { numero: "Suecia +46", clase: "../../Recursos/Imagenes/Banderas/suecia.png" },
    { numero: "Suiza +41", clase: "../../Recursos/Imagenes/Banderas/suiza.png" },
    { numero: "Surinam +597", clase: "../../Recursos/Imagenes/Banderas/surinam.png" },
    { numero: "Tailandia +66", clase: "../../Recursos/Imagenes/Banderas/tailandia.png" },
    { numero: "Taiwán +886", clase: "../../Recursos/Imagenes/Banderas/taiwan.png" },
    { numero: "Tanzania +255", clase: "../../Recursos/Imagenes/Banderas/tanzania.png" },
    { numero: "Tayikistán +992", clase: "../../Recursos/Imagenes/Banderas/tayikistan.png" },
    { numero: "Timor Oriental +670", clase: "../../Recursos/Imagenes/Banderas/timor_oriental.png" },
    { numero: "Togo +228", clase: "../../Recursos/Imagenes/Banderas/togo.png" },
    { numero: "Tokelau +690", clase: "../../Recursos/Imagenes/Banderas/tokelau.png" },
    { numero: "Tonga +676", clase: "../../Recursos/Imagenes/Banderas/tonga.png" },
    { numero: "Trinidad y Tobago +1‑868", clase: "../../Recursos/Imagenes/Banderas/trinidad_y_tobago.png" },
    { numero: "Turkmenistán +993", clase: "../../Recursos/Imagenes/Banderas/turkmenistan.png" },
    { numero: "Turquía +90", clase: "../../Recursos/Imagenes/Banderas/turquia.png" },
    { numero: "Túnez +216", clase: "../../Recursos/Imagenes/Banderas/tunez.png" },
    { numero: "Tuvalu +688", clase: "../../Recursos/Imagenes/Banderas/tuvalu.png" },
    { numero: "Ucrania +380", clase: "../../Recursos/Imagenes/Banderas/ucrania.png" },
    { numero: "Uganda +256", clase: "../../Recursos/Imagenes/Banderas/uganda.png" },
    { numero: "Uruguay +598", clase: "../../Recursos/Imagenes/Banderas/uruguay.png" },
    { numero: "Uzbekistán +998", clase: "../../Recursos/Imagenes/Banderas/uzbekistan.png" },
    { numero: "Vanuatu +678", clase: "../../Recursos/Imagenes/Banderas/vanuatu.png" },
    { numero: "Venezuela +58", clase: "../../Recursos/Imagenes/Banderas/venezuela.png" },
    { numero: "Vietnam +84", clase: "../../Recursos/Imagenes/Banderas/vietnam.png" },
    { numero: "Yemen +967", clase: "../../Recursos/Imagenes/Banderas/yemen.png" },
    { numero: "Yibuti +253", clase: "../../Recursos/Imagenes/Banderas/yibuti.png" },
    { numero: "Zambia +260", clase: "../../Recursos/Imagenes/Banderas/zambia.png" },
    { numero: "Zimbabue +263", clase: "../../Recursos/Imagenes/Banderas/zimbabue.png" }
];

let pais = paises.map(pref => {
    
    let Option= document.createElement("option")
    let span = document.createElement("span")

    Option.innerText = `${pref.numero}`
    span.className = `${pref.clase}`
    Option.appendChild(span)
    Select.appendChild(Option)
})
let imagenPais = document.getElementById("ImagenPais");
function actualizarBandera() {
    imagenPais.src = paises.find(p =>
        p.numero === Select.value
    ).clase;
}

actualizarBandera();
