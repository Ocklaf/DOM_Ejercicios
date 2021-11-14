export function eventoTeclado(keyPressed){
    const d = document
   // d.querySelector(keyPressed).style.right = "100px"
    d.addEventListener("keydown", (e) =>{
        e.preventDefault()
        //d.querySelector(keyPressed).style.bottom = "100px"
/*      if(e.key === "ArrowDown") d.querySelector(keyPressed).style.backgroundColor = "red"
        if(e.key === "ArrowUp") d.querySelector(keyPressed).style.backgroundColor = "blue"
        if(e.key === "ArrowLeft") d.querySelector(keyPressed).style.backgroundColor = "green"
        if(e.key === "ArrowRight") d.querySelector(keyPressed).style.backgroundColor = "brown"
        console.log(e.key) */
        if(e.key === "ArrowDown") {
            d.querySelector(keyPressed).style.top = "100px"
            d.querySelector(keyPressed).style.position = "relative"
        }
        if(e.key === "ArrowUp") d.querySelector(keyPressed).style.bottom = "100px"
        if(e.key === "ArrowLeft") d.querySelector(keyPressed).style.left = "100px"
        if(e.key === "ArrowRight") d.querySelector(keyPressed).style.right = "100px"
    })
}