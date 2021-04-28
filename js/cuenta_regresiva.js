const d = document;

export function cuentaRegresiva(id, timeLimit, mensaje){
    const $cuentaRegresiva = d.getElementById(id);
    let tiempo = new Date(timeLimit).getTime();
    let now, days, hours, minutos, segundos, tiempoRestante;


    let tiempoContador = setInterval( () =>{
        now = new Date().getTime();
        tiempoRestante = tiempo - now;
        days = ("0" + Math.floor(tiempoRestante / (1000 * 60 * 60 * 24))).slice(-2);
        hours = ("0" + Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2);
        minutos = ("0" + Math.floor(tiempoRestante % (1000 * 60 * 60) / (1000 * 60))).slice(-2);
        segundos = ("0" + Math.floor(tiempoRestante % (1000 * 60) / (1000))).slice(-2)
        
        $cuentaRegresiva.innerHTML = `<h3>Faltan</h3><h1>${days} Dias</h1> <h3>${hours} Horas ${minutos} Minutos y ${segundos} segundos para el 11 de Abril</h3>`;

        if(tiempoRestante < 0){
            clearInterval(tiempoContador);
            $cuentaRegresiva.innerHTML = `<h3>${mensaje}</h3>`;
        }

    }, 1000);

    
}

