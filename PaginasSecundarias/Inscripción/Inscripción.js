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
    { numero: "España +34", clase: "../../Recursos/Imagenes/Flags/espana.png" },  // España
    { numero: "Afganistán +93", clase: "../../Recursos/Imagenes/Flags/afganistan.png" },   // Afganistán
    { numero: "Albania +355", clase: "../../Recursos/Imagenes/Flags/albania.png" },  // Albania
    { numero: "Argelia +213", clase: "../../Recursos/Imagenes/Flags/argelia.png" },  // Argelia
    { numero: "Andorra +1‑684", clase: "../../Recursos/Imagenes/Flags/samoa_americana.png" },// Samoa Americana
    { numero: "Andorra +376", clase: "../../Recursos/Imagenes/Flags/andorra.png" },  // Andorra
    { numero: "Angola +244", clase: "../../Recursos/Imagenes/Flags/angola.png" },  // Angola
    { numero: "Anguilla +1‑264", clase: "../../Recursos/Imagenes/Flags/anguilla.png" },// Anguilla
    { numero: "Antártica +672", clase: "../../Recursos/Imagenes/Flags/antartica.png" },  // Antártica
    { numero: "Antigua y Barbuda +1‑268", clase: "../../Recursos/Imagenes/Flags/antigua_y_barbuda.png" },// Antigua y Barbuda
    { numero: "Argentina +54", clase: "../../Recursos/Imagenes/Flags/argentina.png" },   // Argentina
    { numero: "Armenia +374", clase: "../../Recursos/Imagenes/Flags/armenia.png" },  // Armenia
    { numero: "Aruba +297", clase: "../../Recursos/Imagenes/Flags/aruba.png" },  // Aruba
    { numero: "Australia +61", clase: "../../Recursos/Imagenes/Flags/australia.png" },   // Australia
    { numero: "Austria +43", clase: "../../Recursos/Imagenes/Flags/austria.png" },   // Austria
    { numero: "Azerbaiyán +994", clase: "../../Recursos/Imagenes/Flags/azerbaiyan.png" },  // Azerbaiyán
    { numero: "Bahamas +1‑242", clase: "../../Recursos/Imagenes/Flags/bahamas.png" },// Bahamas
    { numero: "Baréin +973", clase: "../../Recursos/Imagenes/Flags/barein.png" },  // Baréin
    { numero: "Bangladés +880", clase: "../../Recursos/Imagenes/Flags/banglades.png" },  // Bangladés
    { numero: "Barbados +1‑246", clase: "../../Recursos/Imagenes/Flags/barbados.png" },// Barbados
    { numero: "Bielorrusia +375", clase: "../../Recursos/Imagenes/Flags/bielorrusia.png" },  // Bielorrusia
    { numero: "Bélgica +32", clase: "../../Recursos/Imagenes/Flags/belgica.png" },   // Bélgica
    { numero: "Belice +501", clase: "../../Recursos/Imagenes/Flags/belice.png" },  // Belice
    { numero: "Benín +229", clase: "../../Recursos/Imagenes/Flags/benin.png" },  // Benín
    { numero: "Bermudas +1‑441", clase: "../../Recursos/Imagenes/Flags/bermudas.png" },// Bermudas
    { numero: "Bután +975", clase: "../../Recursos/Imagenes/Flags/butan.png" },  // Bután
    { numero: "Bolivia +591", clase: "../../Recursos/Imagenes/Flags/bolivia.png" },  // Bolivia
    { numero: "Bosnia y Herzegovina +387", clase: "../../Recursos/Imagenes/Flags/bosnia_y_herzegovina.png" },  // Bosnia y Herzegovina
    { numero: "Botsuana +267", clase: "../../Recursos/Imagenes/Flags/botsuana.png" },  // Botsuana
    { numero: "Brasil +55", clase: "../../Recursos/Imagenes/Flags/brasil.png" },   // Brasil
    { numero: "Océano Índico Británico +246", clase: "../../Recursos/Imagenes/Flags/territorio_britanico_del_oceano_indico.png" },  // Territorio Británico del Océano Índico
    { numero: "Brunéi +673", clase: "../../Recursos/Imagenes/Flags/brunei.png" },  // Brunéi
    { numero: "Bulgaria +359", clase: "../../Recursos/Imagenes/Flags/bulgaria.png" },  // Bulgaria
    { numero: "Burkina Faso +226", clase: "../../Recursos/Imagenes/Flags/burkina_faso.png" },  // Burkina Faso
    { numero: "Burundi +257", clase: "../../Recursos/Imagenes/Flags/burundi.png" },  // Burundi
    { numero: "Camboya +855", clase: "../../Recursos/Imagenes/Flags/camboya.png" },  // Camboya
    { numero: "Camerún +237", clase: "../../Recursos/Imagenes/Flags/camerun.png" },  // Camerún
    { numero: "Canadá+1", clase: "../../Recursos/Imagenes/Flags/canada.png" },    // Canadá
    { numero: "Cabo Verde +238", clase: "../../Recursos/Imagenes/Flags/cabo_verde.png" },  // Cabo Verde
    { numero: "Islas Caimán +345", clase: "../../Recursos/Imagenes/Flags/islas_caiman.png" }, // Islas Caimán
    { numero: "República Centroafricana+236", clase: "../../Recursos/Imagenes/Flags/republica_centroafricana.png" },  // República Centroafricana
    { numero: "Chad +235", clase: "../../Recursos/Imagenes/Flags/chad.png" },  // Chad
    { numero: "Chile +56", clase: "../../Recursos/Imagenes/Flags/chile.png" },   // Chile
    { numero: "China +86", clase: "../../Recursos/Imagenes/Flags/china.png" },   // China
    { numero: "Isla Christmas +61", clase: "../../Recursos/Imagenes/Flags/isla_christmas.png" },   // Isla Christmas
    { numero: "Islas Cocos (Keeling) +61", clase: "../../Recursos/Imagenes/Flags/islas_cocos_keeling.png" },   // Islas Cocos (Keeling)
    { numero: "Colombia +57", clase: "../../Recursos/Imagenes/Flags/colombia.png" },   // Colombia
    { numero: "Comoras +269", clase: "../../Recursos/Imagenes/Flags/comoras.png" },  // Comoras
    { numero: "Congo +242", clase: "../../Recursos/Imagenes/Flags/congo.png" },  // Congo
    { numero: "República Democrática del Congo +243", clase: "../../Recursos/Imagenes/Flags/republica_democratica_del_congo.png" },  // República Democrática del Congo
    { numero: "Islas Cook +672", clase: "../../Recursos/Imagenes/Flags/islas_cook.png" },  // Islas Cook
    { numero: "Costa Rica +506", clase: "../../Recursos/Imagenes/Flags/costa_rica.png" },  // Costa Rica
    { numero: "Costa de Marfil +225", clase: "../../Recursos/Imagenes/Flags/costa_de_marfil.png" },  // Costa de Marfil
    { numero: "Croacia +385", clase: "../../Recursos/Imagenes/Flags/croacia.png" },  // Croacia
    { numero: "Cuba +53", clase: "../../Recursos/Imagenes/Flags/cuba.png" },  // Cuba
    { numero: "Curazao +537", clase: "../../Recursos/Imagenes/Flags/curazao.png" },  // Curazao
    { numero: "Chipre +357", clase: "../../Recursos/Imagenes/Flags/chipre.png" },  // Chipre
    { numero: "República Checa +420", clase: "../../Recursos/Imagenes/Flags/republica_checa.png" },  // República Checa
    { numero: "Dinamarca +45", clase: "../../Recursos/Imagenes/Flags/dinamarca.png" },   // Dinamarca
    { numero: "Yibuti +253", clase: "../../Recursos/Imagenes/Flags/yibuti.png" },  // Yibuti
    { numero: "Dominica +1‑767", clase: "../../Recursos/Imagenes/Flags/dominica.png" },// Dominica
    { numero: "República Dominicana +1‑849", clase: "../../Recursos/Imagenes/Flags/republica_dominicana.png" },// República Dominicana
    { numero: "Ecuador +593", clase: "../../Recursos/Imagenes/Flags/ecuador.png" },  // Ecuador
    { numero: "Egipto +20", clase: "../../Recursos/Imagenes/Flags/egipto.png" },   // Egipto
    { numero: "El Salvador +503", clase: "../../Recursos/Imagenes/Flags/el_salvador.png" },  // El Salvador
    { numero: "Guinea Ecuatorial +240", clase: "../../Recursos/Imagenes/Flags/guinea_ecuatorial.png" },  // Guinea Ecuatorial
    { numero: "Eritrea +291", clase: "../../Recursos/Imagenes/Flags/eritrea.png" },  // Eritrea
    { numero: "Estonia +372", clase: "../../Recursos/Imagenes/Flags/estonia.png" },  // Estonia
    { numero: "Etiopía +251", clase: "../../Recursos/Imagenes/Flags/etiopia.png" },  // Etiopía
    { numero: "Islas Malvinas +500", clase: "../../Recursos/Imagenes/Flags/islas_malvinas.png" },  // Islas Malvinas
    { numero: "Islas Feroe +298", clase: "../../Recursos/Imagenes/Flags/islas_feroe.png" },  // Islas Feroe
    { numero: "Fiyi +679", clase: "../../Recursos/Imagenes/Flags/fiyi.png" },  // Fiyi
    { numero: "Finlandia +358", clase: "../../Recursos/Imagenes/Flags/finlandia.png" },  // Finlandia
    { numero: "Francia +33", clase: "../../Recursos/Imagenes/Flags/francia.png" },   // Francia
    { numero: "Guadalupe +590", clase: "../../Recursos/Imagenes/Flags/francia.png" },   // Guadalupe
    { numero: "Mayotte +262", clase: "../../Recursos/Imagenes/Flags/francia.png" },   // Mayotte
    { numero: "Wallis y Futuna +681", clase: "../../Recursos/Imagenes/Flags/francia.png" },   // Wallis y Futuna
    { numero: "Guayana Francesa +594", clase: "../../Recursos/Imagenes/Flags/guayana_francesa.png" },  // Guayana Francesa
    { numero: "Polinesia Francesa +689", clase: "../../Recursos/Imagenes/Flags/polinesia_francesa.png" },  // Polinesia Francesa
    { numero: "Gabón +241", clase: "../../Recursos/Imagenes/Flags/gabon.png" },  // Gabón
    { numero: "Gambia +220", clase: "../../Recursos/Imagenes/Flags/gambia.png" },  // Gambia
    { numero: "Georgia +995", clase: "../../Recursos/Imagenes/Flags/georgia.png" },  // Georgia
    { numero: "Alemania +49", clase: "../../Recursos/Imagenes/Flags/alemania.png" },   // Alemania
    { numero: "Ghana +233", clase: "../../Recursos/Imagenes/Flags/ghana.png" },  // Ghana
    { numero: "Gibraltar +350", clase: "../../Recursos/Imagenes/Flags/gibraltar.png" },  // Gibraltar
    { numero: "Grecia +30", clase: "../../Recursos/Imagenes/Flags/grecia.png" },   // Grecia
    { numero: "Groenlandia +299", clase: "../../Recursos/Imagenes/Flags/groenlandia.png" },  // Groenlandia
    { numero: "Granada +1‑473", clase: "../../Recursos/Imagenes/Flags/granada.png" },// Granada
    { numero: "Guam +1‑671", clase: "../../Recursos/Imagenes/Flags/guam.png" },// Guam
    { numero: "Guatemala +502", clase: "../../Recursos/Imagenes/Flags/guatemala.png" },  // Guatemala
    { numero: "Guernesey +44‑1481", clase: "../../Recursos/Imagenes/Flags/guernesey.png" },// Guernesey
    { numero: "Guinea +224", clase: "../../Recursos/Imagenes/Flags/guinea.png" },  // Guinea
    { numero: "Guinea-Bisáu +245", clase: "../../Recursos/Imagenes/Flags/guinea_bisau.png" },  // Guinea-Bisáu
    { numero: "Guyana +595", clase: "../../Recursos/Imagenes/Flags/guyana.png" },  // Guyana
    { numero: "Haití +509", clase: "../../Recursos/Imagenes/Flags/haiti.png" },  // Haití
    { numero: "Honduras +504", clase: "../../Recursos/Imagenes/Flags/honduras.png" },  // Honduras
    { numero: "Hong Kong +852", clase: "../../Recursos/Imagenes/Flags/hong_kong.png" },  // Hong Kong
    { numero: "Hungría +36", clase: "../../Recursos/Imagenes/Flags/hungria.png" },   // Hungría
    { numero: "Islandia +354", clase: "../../Recursos/Imagenes/Flags/islandia.png" },  // Islandia
    { numero: "India +91", clase: "../../Recursos/Imagenes/Flags/india.png" },   // India
    { numero: "Indonesia +62", clase: "../../Recursos/Imagenes/Flags/indonesia.png" },   // Indonesia
    { numero: "Irán +98", clase: "../../Recursos/Imagenes/Flags/iran.png" },   // Irán
    { numero: "Irak +964", clase: "../../Recursos/Imagenes/Flags/irak.png" },  // Irak
    { numero: "Irlanda +353", clase: "../../Recursos/Imagenes/Flags/irlanda.png" },  // Irlanda
    { numero: "Isla de Man +44", clase: "../../Recursos/Imagenes/Flags/isla_de_man.png" },  // Isla de Man
    { numero: "Italia +39", clase: "../../Recursos/Imagenes/Flags/italia.png" },  // Italia
    { numero: "Jamaica +1‑876", clase: "../../Recursos/Imagenes/Flags/jamaica.png" },// Jamaica
    { numero: "Japón +81", clase: "../../Recursos/Imagenes/Flags/japon.png" },  // Japón
    { numero: "Jersey +44‑1534", clase: "../../Recursos/Imagenes/Flags/jersey.png" },// Jersey
    { numero: "Jordania +962", clase: "../../Recursos/Imagenes/Flags/jordania.png" }, // Jordania
    { numero: "Kazajistán +7", clase: "../../Recursos/Imagenes/Flags/kazajistan.png" },   // Kazajistán
    { numero: "Kenia +254", clase: "../../Recursos/Imagenes/Flags/kenia.png" }, // Kenia
    { numero: "Kiribati +686", clase: "../../Recursos/Imagenes/Flags/kiribati.png" }, // Kiribati
    { numero: "Kosovo +383", clase: "../../Recursos/Imagenes/Flags/kosovo.png" }, // Kosovo (uso no oficial, “xk” en algunos sistemas)
    { numero: "Kuwait +965", clase: "../../Recursos/Imagenes/Flags/kuwait.png" }, // Kuwait
    { numero: "Kirguistán +996", clase: "../../Recursos/Imagenes/Flags/kirguistan.png" }, // Kirguistán
    { numero: "Laos +856", clase: "../../Recursos/Imagenes/Flags/laos.png" }, // Laos
    { numero: "Letonia +371", clase: "../../Recursos/Imagenes/Flags/letonia.png" }, // Letonia
    { numero: "Líbano +961", clase: "../../Recursos/Imagenes/Flags/libano.png" }, // Líbano
    { numero: "Lesoto +266", clase: "../../Recursos/Imagenes/Flags/lesoto.png" }, // Lesoto
    { numero: "Liberia +231", clase: "../../Recursos/Imagenes/Flags/liberia.png" }, // Liberia
    { numero: "Libia +218", clase: "../../Recursos/Imagenes/Flags/libia.png" }, // Libia
    { numero: "Liechtenstein +423", clase: "../../Recursos/Imagenes/Flags/liechtenstein.png" }, // Liechtenstein
    { numero: "Lituania +370", clase: "../../Recursos/Imagenes/Flags/lituania.png" }, // Lituania
    { numero: "Luxemburgo +352", clase: "../../Recursos/Imagenes/Flags/luxemburgo.png" }, // Luxemburgo
    { numero: "Macao +853", clase: "../../Recursos/Imagenes/Flags/macao.png" }, // Macao
    { numero: "Macedonia del Norte +389", clase: "../../Recursos/Imagenes/Flags/macedonia_del_norte.png" }, // Macedonia del Norte
    { numero: "Madagascar +261", clase: "../../Recursos/Imagenes/Flags/madagascar.png" }, // Madagascar
    { numero: "Malaui +265", clase: "../../Recursos/Imagenes/Flags/malaui.png" }, // Malaui
    { numero: "Malasia +60", clase: "../../Recursos/Imagenes/Flags/malasia.png" },  // Malasia
    { numero: "Maldivas +960", clase: "../../Recursos/Imagenes/Flags/maldivas.png" }, // Maldivas
    { numero: "Malí +223", clase: "../../Recursos/Imagenes/Flags/mali.png" }, // Malí
    { numero: "Malta +356", clase: "../../Recursos/Imagenes/Flags/malta.png" }, // Malta
    { numero: "Islas Marshall +692", clase: "../../Recursos/Imagenes/Flags/islas_marshall.png" }, // Islas Marshall
    { numero: "Martinica +596", clase: "../../Recursos/Imagenes/Flags/martinica.png" }, // Martinica
    { numero: "Mauritania +222", clase: "../../Recursos/Imagenes/Flags/mauritania.png" }, // Mauritania
    { numero: "Mauricio +230", clase: "../../Recursos/Imagenes/Flags/mauricio.png" }, // Mauricio
    { numero: "México +52", clase: "../../Recursos/Imagenes/Flags/mexico.png" },  // México
    { numero: "Estados Federados de Micronesia +691", clase: "../../Recursos/Imagenes/Flags/estados_federados_de_micronesia.png" }, // Estados Federados de Micronesia
    { numero: "Moldavia +373", clase: "../../Recursos/Imagenes/Flags/moldavia.png" }, // Moldavia
    { numero: "Mónaco +377", clase: "../../Recursos/Imagenes/Flags/monaco.png" }, // Mónaco
    { numero: "Mongolia +976", clase: "../../Recursos/Imagenes/Flags/mongolia.png" }, // Mongolia
    { numero: "Montenegro +382", clase: "../../Recursos/Imagenes/Flags/montenegro.png" }, // Montenegro
    { numero: "Montserrat +1664", clase: "../../Recursos/Imagenes/Flags/montserrat.png" },// Montserrat
    { numero: "Marruecos +212", clase: "../../Recursos/Imagenes/Flags/marruecos.png" }, // Marruecos
    { numero: "Mozambique +258", clase: "../../Recursos/Imagenes/Flags/mozambique.png" }, // Mozambique
    { numero: "Birmania (Myanmar) +95", clase: "../../Recursos/Imagenes/Flags/birmania.png" },  // Birmania (Myanmar)
    { numero: "Namibia +264", clase: "../../Recursos/Imagenes/Flags/namibia.png" }, // Namibia
    { numero: "Nauru +674", clase: "../../Recursos/Imagenes/Flags/nauru.png" }, // Nauru
    { numero: "Nepal +977", clase: "../../Recursos/Imagenes/Flags/nepal.png" }, // Nepal
    { numero: "Países Bajos +31", clase: "../../Recursos/Imagenes/Flags/paises_bajos.png" },  // Países Bajos
    { numero: "Nueva Caledonia +687", clase: "../../Recursos/Imagenes/Flags/nueva_caledonia.png" }, // Nueva Caledonia
    { numero: "Nueva Zelanda +64", clase: "../../Recursos/Imagenes/Flags/nueva_zelanda.png" },  // Nueva Zelanda
    { numero: "Nicaragua +505", clase: "../../Recursos/Imagenes/Flags/nicaragua.png" }, // Nicaragua
    { numero: "Níger +227", clase: "../../Recursos/Imagenes/Flags/niger.png" }, // Níger
    { numero: "Nigeria +234", clase: "../../Recursos/Imagenes/Flags/nigeria.png" }, // Nigeria
    { numero: "Niue +683", clase: "../../Recursos/Imagenes/Flags/niue.png" }, // Niue
    { numero: "Isla Norfolk +672", clase: "../../Recursos/Imagenes/Flags/isla_norfolk.png" }, // Isla Norfolk
    { numero: "Corea del Norte +850", clase: "../../Recursos/Imagenes/Flags/corea_del_norte.png" }, // Corea del Norte
    { numero: "Corea del sur +82", clase: "../../Recursos/Imagenes/Flags/corea_del_sur.png" }, // Corea del sur
    { numero: "Islas Marianas del Norte +1‑670", clase: "../../Recursos/Imagenes/Flags/islas_marianas_del_norte.png" },// Islas Marianas del Norte
    { numero: "Noruega +47", clase: "../../Recursos/Imagenes/Flags/noruega.png" },  // Noruega
    { numero: "Omán +968", clase: "../../Recursos/Imagenes/Flags/oman.png" }, // Omán
    { numero: "Pakistán +92", clase: "../../Recursos/Imagenes/Flags/pakistan.png" },  // Pakistán
    { numero: "Palaos +680", clase: "../../Recursos/Imagenes/Flags/palaos.png" }, // Palaos
    { numero: "Palestina +970", clase: "../../Recursos/Imagenes/Flags/palestina.png" }, // Palestina
    { numero: "Panamá +507", clase: "../../Recursos/Imagenes/Flags/panama.png" }, // Panamá
    { numero: "Papúa Nueva Guinea +675", clase: "../../Recursos/Imagenes/Flags/papua_nueva_guinea.png" }, // Papúa Nueva Guinea
    { numero: "Paraguay +595", clase: "../../Recursos/Imagenes/Flags/paraguay.png" }, // Paraguay
    { numero: "Perú +51", clase: "../../Recursos/Imagenes/Flags/peru.png" },  // Perú
    { numero: "Filipinas +63", clase: "../../Recursos/Imagenes/Flags/filipinas.png" },  // Filipinas
    { numero: "Polonia +48", clase: "../../Recursos/Imagenes/Flags/polonia.png" },  // Polonia
    { numero: "Portugal +351", clase: "../../Recursos/Imagenes/Flags/portugal.png" }, // Portugal
    { numero: "Puerto Rico +1‑787", clase: "../../Recursos/Imagenes/Flags/puerto_rico.png" },// Puerto Rico
    { numero: "Catar +974", clase: "../../Recursos/Imagenes/Flags/catar.png" }, // Catar
    { numero: "Rumanía +40", clase: "../../Recursos/Imagenes/Flags/rumania.png" },  // Rumanía
    { numero: "Rusia +7", clase: "../../Recursos/Imagenes/Flags/rusia.png" },   // Rusia
    { numero: "Ruanda +250", clase: "../../Recursos/Imagenes/Flags/ruanda.png" }, // Ruanda
    { numero: "Santa Elena +290", clase: "../../Recursos/Imagenes/Flags/santa_elena.png" }, // Santa Elena
    { numero: "San Cristóbal y Nieves +1‑869", clase: "../../Recursos/Imagenes/Flags/san_cristobal_y_nieves.png" },// San Cristóbal y Nieves
    { numero: "Santa Lucía +1‑758", clase: "../../Recursos/Imagenes/Flags/santa_lucia.png" },// Santa Lucía
    { numero: "San Vicente y Granadinas +1‑784", clase: "../../Recursos/Imagenes/Flags/san_vicente_y_granadinas.png" },// San Vicente y Granadinas
    { numero: "Samoa +685", clase: "../../Recursos/Imagenes/Flags/samoa.png" }, // Samoa
    { numero: "San Marino +378", clase: "../../Recursos/Imagenes/Flags/san_marino.png" }, // San Marino
    { numero: "Santo Tomé y Príncipe +239", clase: "../../Recursos/Imagenes/Flags/santo_tome_y_principe.png" }, // Santo Tomé y Príncipe
    { numero: "Arabia Saudí +966", clase: "../../Recursos/Imagenes/Flags/arabia_saudi.png" }, // Arabia Saudí
    { numero: "Senegal +221", clase: "../../Recursos/Imagenes/Flags/senegal.png" }, // Senegal
    { numero: "Serbia +381", clase: "../../Recursos/Imagenes/Flags/serbia.png" }, // Serbia
    { numero: "Seychelles +248", clase: "../../Recursos/Imagenes/Flags/seychelles.png" }, // Seychelles
    { numero: "Sierra Leona+232", clase: "../../Recursos/Imagenes/Flags/sierra_leona.png" }, // Sierra Leona
    { numero: "Singapur +65", clase: "../../Recursos/Imagenes/Flags/singapur.png" },  // Singapur
    { numero: "San Martín +1‑721", clase: "../../Recursos/Imagenes/Flags/san_martin.png" },// San Martín
    { numero: "Eslovaquia +421", clase: "../../Recursos/Imagenes/Flags/eslovaquia.png" }, // Eslovaquia
    { numero: "Eslovenia +386", clase: "../../Recursos/Imagenes/Flags/eslovenia.png" }, // Eslovenia
    { numero: "Islas Salomón +677", clase: "../../Recursos/Imagenes/Flags/islas_salomon.png" }, // Islas Salomón
    { numero: "Somalia +252", clase: "../../Recursos/Imagenes/Flags/somalia.png" }, // Somalia
    { numero: "Sudáfrica+27", clase: "../../Recursos/Imagenes/Flags/sudafrica.png" },  // Sudáfrica
    { numero: "Georgia e Islas Sandwich del Sur +500", clase: "../../Recursos/Imagenes/Flags/georgia_del_sur_e_islas_sandwich_del_sur.png" }, // Georgia del Sur e Islas Sandwich del Sur
    { numero: "Sudán del Sur +211", clase: "../../Recursos/Imagenes/Flags/sudan_del_sur.png" }, // Sudán del Sur
    { numero: "Sri Lanka +94", clase: "../../Recursos/Imagenes/Flags/sri_lanka.png" },  // Sri Lanka
    { numero: "Sudán +249", clase: "../../Recursos/Imagenes/Flags/sudan.png" }, // Sudán
    { numero: "Surinam +597", clase: "../../Recursos/Imagenes/Flags/surinam.png" }, // Surinam
    { numero: "Noruega +47", clase: "../../Recursos/Imagenes/Flags/noruega.png" },  // Noruega (Svalbard y Jan Mayen)
    { numero: "Suecia +46", clase: "../../Recursos/Imagenes/Flags/suecia.png" },  // Suecia
    { numero: "Suiza +41", clase: "../../Recursos/Imagenes/Flags/suiza.png" },  // Suiza
    { numero: "Siria +963", clase: "../../Recursos/Imagenes/Flags/siria.png" }, // Siria
    { numero: "Taiwán +886", clase: "../../Recursos/Imagenes/Flags/taiwan.png" }, // Taiwán
    { numero: "Tayikistán +992", clase: "../../Recursos/Imagenes/Flags/tayikistan.png" }, // Tayikistán
    { numero: "Tanzania +255", clase: "../../Recursos/Imagenes/Flags/tanzania.png" }, // Tanzania
    { numero: "Tailandia +66", clase: "../../Recursos/Imagenes/Flags/tailandia.png" },  // Tailandia
    { numero: "Timor Oriental +670", clase: "../../Recursos/Imagenes/Flags/timor_oriental.png" }, // Timor Oriental
    { numero: "Togo +228", clase: "../../Recursos/Imagenes/Flags/togo.png" }, // Togo
    { numero: "Tokelau +690", clase: "../../Recursos/Imagenes/Flags/tokelau.png" }, // Tokelau
    { numero: "Tonga +676", clase: "../../Recursos/Imagenes/Flags/tonga.png" }, // Tonga
    { numero: "Trinidad y Tobago +1‑868", clase: "../../Recursos/Imagenes/Flags/trinidad_y_tobago.png" },// Trinidad y Tobago
    { numero: "Túnez +216", clase: "../../Recursos/Imagenes/Flags/tunez.png" }, // Túnez
    { numero: "Turquía +90", clase: "../../Recursos/Imagenes/Flags/turquia.png" },  // Turquía
    { numero: "Turkmenistán +993", clase: "../../Recursos/Imagenes/Flags/turkmenistan.png" }, // Turkmenistán
    { numero: "Islas Turcas y Caicos +1‑649", clase: "../../Recursos/Imagenes/Flags/islas_turcas_y_caicos.png" },// Islas Turcas y Caicos
    { numero: "Tuvalu +688", clase: "../../Recursos/Imagenes/Flags/tuvalu.png" }, // Tuvalu
    { numero: "Islas Vírgenes (EE. UU.) +1‑340, +1‑758", clase: "../../Recursos/Imagenes/Flags/islas_virgenes_ee_uu.png" },// Islas Vírgenes (EE. UU.)
    { numero: "Uganda +256", clase: "../../Recursos/Imagenes/Flags/uganda.png" }, // Uganda
    { numero: "Ucrania +380", clase: "../../Recursos/Imagenes/Flags/ucrania.png" }, // Ucrania
    { numero: "Emiratos Árabes Unidos +971", clase: "../../Recursos/Imagenes/Flags/emiratos_arabes_unidos.png" }, // Emiratos Árabes Unidos
    { numero: "Reino Unido +44‑20", clase: "../../Recursos/Imagenes/Flags/reino_unido.png" },// Reino Unido
    { numero: "Islas Vírgenes Británicas +1‑284", clase: "../../Recursos/Imagenes/Flags/islas_virgenes_britanicas.png" },// Islas Vírgenes Británicas
    { numero: "Uruguay +598", clase: "../../Recursos/Imagenes/Flags/uruguay.png" }, // Uruguay
    { numero: "Uzbekistán +998", clase: "../../Recursos/Imagenes/Flags/uzbekistan.png" }, // Uzbekistán
    { numero: "Vanuatu +678", clase: "../../Recursos/Imagenes/Flags/vanuatu.png" }, // Vanuatu
    { numero: "Ciudad del Vaticano +379", clase: "../../Recursos/Imagenes/Flags/ciudad_del_vaticano.png" }, // Ciudad del Vaticano
    { numero: "Venezuela +58", clase: "../../Recursos/Imagenes/Flags/venezuela.png" },  // Venezuela
    { numero: "Vietnam +84", clase: "../../Recursos/Imagenes/Flags/vietnam.png" },  // Vietnam
    { numero: "Sáhara Occidental +212", clase: "../../Recursos/Imagenes/Flags/sahara_occidental.png" }, // Sáhara Occidental
    { numero: "Yemen +967", clase: "../../Recursos/Imagenes/Flags/yemen.png" }, // Yemen
    { numero: "Zambia +260", clase: "../../Recursos/Imagenes/Flags/zambia.png" }, // Zambia
    { numero: "Zimbabue +263", clase: "../../Recursos/Imagenes/Flags/zimbabue.png" }  // Zimbabue
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
