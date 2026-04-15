<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="html" indent="yes" encoding="UTF-8" />
    <xsl:template match="/">
        <html>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Eventos</title>
                <link rel="icon" type="image/jpg" href="../../Recursos/Imagenes/Logo.jpg" />
                <link rel="stylesheet" href="Eventos.css" />
                <script src="../../Recursos/JSConjuntos/menuHeader.js" defer=""></script>
                <script src="../../Recursos/JSConjuntos/userHeader.js" defer=""></script>

                <link rel="stylesheet" href="../../Recursos/CssConjuntos/footer.css" />
                <link rel="stylesheet" href="../../Recursos/CssConjuntos/header.css" />

            </head>
            <body>
                <header>
                    <nav id="menuMovil">
                        <a href="../../index.html">Inicio</a>
                        <a href="../Eventos/Eventos.php">Eventos</a>
                        <a href="../Participantes/participantes.html">Participantes</a>
                        <a href="../Calendario/Calendario.html">Calendario</a>
                        <a href="../Inscripción/Inscripción.html">Inscripción</a>
                        <a href="../Contacto/Contacto.html">Contacto</a>
                    </nav>
                    <section class="sectionLogoHeader">
                        <a href="#">
                            <img src="/Recursos/Imagenes/logoHeader.png" alt="logoHeader"
                                class="logoHeader" />
                        </a>
                    </section>
                    <nav class="headerEnlaces">
                        <a class="enlacesHeader" href="../../index.html">Inicio</a>
                        <a class="enlacesHeader" href="#">Eventos</a>
                        <a class="enlacesHeader" href="../Participantes/participantes.html">
        Participantes</a>
                        <a class="enlacesHeader" href="../Calendario/Calendario.html">Calendario</a>
                        <a class="enlacesHeader" href="../Inscripción/Inscripción.html">Inscripción</a>
                        <a class="enlacesHeader" href="../Contacto/Contacto.html">Contacto</a>
                    </nav>
                    <section class="headerBotones" id="headerUser">
                        <a class="botonInicioDeSesion botonesRegistro" id="btnLogin"
                            href="../InicioSesion/InicioSesionRegistrarse.html">Iniciar sesión</a>
                        <a class="botonRegistro botonesRegistro" id="btnRegister"
                            href="../InicioSesion/InicioSesionRegistrarse.html#register">Registrarse</a>
                        <button id="botonMenuMovil">
                            <img id="fotoMenuMoviles" src="../../Recursos/Imagenes/BOTON_info.png" />
                        </button>
                    </section>
                </header>
                <main class="eventosMain">
                    <section id="zonaTarjetas">
                        <main class="mainTarjetas">
                            <xsl:for-each select="eventos/evento">
                                <article class="tarjeta">
                                    <div class="divImagen" style="background-image: url('Imagenes/{Imagen}')">
                                        

                                        <h2 class="nombreEvento">
                                            <xsl:value-of select="Título" />
                                        </h2>
                                        <h2 class="fechaEvento">
                                            <xsl:value-of select="FechaIni" />
                                        </h2>
                                    </div>

                                    <div class="divTarjetas">
                                        <a href="#" class="textoTarjetas">Ver mas</a>
                                        <button class="btnTarjetas">Inscríbete</button>
                                    </div>
                                </article>
                            </xsl:for-each>
                        </main>
                    </section>
                </main>
                <footer>
                    <div class="textoFooter">
                        <h3>Sobre nosotros</h3>
                        <p>Euskal Encounter reúne cada año a miles de aficionados a la tecnología y
        los videojuegos para compartir experiencias, competir y disfrutar de la cultura digital.</p>
                    </div>
                    <div class="divRedes">
                        <a class="enlacesFooter" href="https://www.facebook.com/euskalencounter">
                            <img class="logosFooter"
                                src="../../Recursos/Imagenes/LogosRedes/logoFacebook.svg"
                                alt="logo de facebook" />
                        </a>
                        <a class="enlacesFooter" href="https://www.youtube.com/user/ekcounter">
                            <img class="logosFooter"
                                src="../../Recursos/Imagenes/LogosRedes/logoyoutube.svg"
                                alt="logo de facebook" />
                        </a>
                        <a class="enlacesFooter" href="https://www.instagram.com/euskalencounter/">
                            <img class="logosFooter"
                                src="../../Recursos/Imagenes/LogosRedes/logoInstagram.svg"
                                alt="logo de facebook" />
                        </a>
                        <a class="enlacesFooter" href="https://www.twitch.tv/euskalencounter">
                            <img class="logosFooter"
                                src="../../Recursos/Imagenes/LogosRedes/logoTwitch.svg"
                                alt="logo de facebook" />
                        </a>
                    </div>
                    <img class="imagenFooter" src="../../Recursos/Imagenes/logoHeader.png"
                        alt="imagen footer" />
                </footer>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>