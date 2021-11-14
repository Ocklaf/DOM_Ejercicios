document.addEventListener("click", menu)

const $hamburger = document.querySelector(".hamburger"), //guardo con el selector de clases
    $classHamburger = $hamburger.classList,
    $menu = document.querySelector(".menu"),
    $classMenu = $menu.classList

    //Busco la coincidencia con la clase "hamburger", si es cierto, se ha hecho click
    //en ese elemento del documento, hago un toggle: pone la clase si no está o la quita
    //si la tenía, la clase "is-active", así varía la forma de la forma de hamburguesa del menú
function menu (e){ 
    if(e.target.matches(".hamburger")) {
        $classHamburger.toggle("is-active")
        $classMenu.toggle("menuHamburger")
    }

    //if($hamburger.className === "hamburger hamburger--spring is-active")  $classMenu.toggle("menuHamburger")
}