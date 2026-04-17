<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method="html" indent="yes" encoding="UTF-8"/>

    <xsl:template match="/">
        <html>
            <head>
                <meta charset="UTF-8"/>
                <title>Inscripciones</title>
                <style>
                    body {
                        margin-top: 25px;
                        background-color: lightblue;
                        font-family: Arial, sans-serif;
                    }

                    h1 {
                        margin-left: 7.5%;
                    }

                    table {
                        margin: 0 auto;
                        width: 85%;
                        border-collapse: collapse;
                        border-radius: 8px;
                        overflow: hidden;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
                    }

                    th {
                        background-color: blue;
                        color: white;
                        padding: 10px;
                        text-align: left;
                    }

                    td {
                        background-color: #ffffff;
                        padding: 10px;
                        border-top: 1px solid #eee;
                    }

                    tr:last-child td {
                        border-bottom: none;
                    }

                </style>
            </head>
            <body>
            
                <h1>Inscripciones</h1>

                <table border="1" cellpadding="5" cellspacing="0">
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Teléfono</th>
                        <th>Evento</th>
                        <th>Mensaje</th>
                    </tr>

                    <xsl:for-each select="inscripciones/inscripcion">
                        <xsl:sort select="evento" data-type="text" order="ascending"/>
                        <tr>
                            <td><xsl:value-of select="nombre"/></td>
                            <td><xsl:value-of select="correo"/></td>
                            <td><xsl:value-of select="telefono"/></td>
                            <td><xsl:value-of select="evento"/>
                                <xsl:choose>
                                    <xsl:when test="evento = 'ConferenciaTecnologia'">   
                                        <xsl:value-of select="evento"/>
                                    </xsl:when>
                                    <xsl:when test="evento = 'TallerMarketing'">
                                        <xsl:value-of select="evento"/>
                                    </xsl:when>
                                    <xsl:when test="evento = 'EventoSolidario'">
                                        <xsl:value-of select="evento"/>
                                    </xsl:when>
                                </xsl:choose>
                            </td>
                            <td><xsl:value-of select="mensaje"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>

</xsl:stylesheet>