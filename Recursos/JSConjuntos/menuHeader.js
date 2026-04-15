let containerEnlaces = document.getElementById("botonMenuMovil")
let headerContainer = document.querySelector("header")
let imagenMenu = document.getElementById("fotoMenuMoviles")

let defaultMenuMovil = false
let menuMovil = document.getElementById("menuMovil")
headerContainer.appendChild(menuMovil)
menuMovil.style.transform = "translateY(-100vh)"
containerEnlaces.ariaLabel = "Boton menu movil"


function menuParaMoviles() {
    containerEnlaces.addEventListener("click", () => {
        if (window.innerWidth < 1024) {
            if (defaultMenuMovil == false) {
                menuMovil.style.transform = "translateY(0vh)"
                defaultMenuMovil = true
                imagenMenu.src = document.title == "Euskal Encounter" ? "Recursos/Imagenes/BOTON_X.png" : "../../Recursos/Imagenes/BOTON_X.png"
                imagenMenu.alt = "boton X"
                document.documentElement.style.overflow = "hidden"
            } else {
                headerContainer.style.overflow = "hidden"
                menuMovil.style.transform = "translateY(-100vh)"
                defaultMenuMovil = false
                imagenMenu.src = document.title == "Euskal Encounter" ? "Recursos/Imagenes/BOTON_info.png" : "../../Recursos/Imagenes/BOTON_info.png"
                imagenMenu.alt = "abrir menu movil"
                document.documentElement.style.overflow = ""
            }
        } else {
            defaultMenuMovil = false
        }

    })


}
menuParaMoviles()

addEventListener("resize", () => {
    defaultMenuMovil = false
    menuMovil.style.transition = "0s"
    menuMovil.style.width = `${innerWidth}`
    menuMovil.style.transform = "translateY(-100vh)"
    imagenMenu.src = document.title == "Euskal Encounter" ? "Recursos/Imagenes/BOTON_info.png" : "../../Recursos/Imagenes/BOTON_info.png"
    imagenMenu.alt = "boton menu"
    setTimeout(() => {menuMovil.style.transition = "2s"}, 1000)
    
})