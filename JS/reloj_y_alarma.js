export function relojAlarma(relojOn, relojOff, alarmOn, alarmOff){
    const d = document, //para no escribir document todo el rato
            
            $seccion1 = d.querySelector(".reloj")
    let stopInterval = 5
        
    d.addEventListener("click", (e) =>{
        if(e.target.matches(relojOn)){
            const $newReloj = d.createElement("div")
            if(!(d.querySelector(relojOn).hasAttribute("disabled"))) stopInterval = 0

            $seccion1.insertAdjacentElement("beforebegin", $newReloj)
            $seccion1.previousElementSibling.classList.add("relojOnline")

            d.querySelector(relojOn).setAttribute("disabled", "true")
            const intervalos = setInterval(function relojPantalla(){
                if(stopInterval === 1){clearInterval(intervalos)}                
                let reloj = new Date,
                    relojTexto = reloj.toLocaleTimeString()
                d.querySelector(".relojOnline").insertAdjacentText("afterbegin", relojTexto)
            }, 1000)
        } 

        if(e.target.matches(relojOff) && stopInterval === 0){
            d.querySelector(relojOn).removeAttribute("disabled")
            //d.querySelector(".relojOnline").insertAdjacentText("afterbegin", "")
            d.querySelector(".relojOnline").remove()
            stopInterval = 1
        }

        if(e.target.matches(alarmOn)){
            const $newAlarm = d.createElement("audio")
            $seccion1.insertAdjacentElement("beforebegin", $newAlarm)
            $seccion1.previousElementSibling.classList.add("alarma")
            d.querySelector(".alarma").setAttribute("src","/sirena-tornado.mp3")
            d.querySelector(".alarma").setAttribute("autoplay","true")
            d.querySelector(alarmOn).setAttribute("disabled", "true")
        }
        if(e.target.matches(alarmOff)){
            d.querySelector(alarmOn).removeAttribute("disabled")
            d.querySelector(".alarma").remove()
        }
    })
}