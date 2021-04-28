const d = document;
let mensaje;
let x = 0;
let y = 0;


export function atajoTeclado(e){
    mensaje = e.key;
    mensaje = mensaje.toLowerCase();
    if(mensaje == "a" && e.ctrlKey){
        alert('ALERTA');
    }

    if(mensaje == "p" && e.ctrlKey){
        prompt();
    }

    if(mensaje == "c" && e.ctrlKey){
        confirm('Te casas conmigo');
    }
}

export function moverBall(e, ball, stage){
    mensaje = e.key;
    mensaje = mensaje.toLowerCase();
    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage);
    let limitBall = $ball.getBoundingClientRect();
    let limitStage = $stage.getBoundingClientRect();

    const move = () => {
        e.preventDefault();
        $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
    }

    if(mensaje == "arrowup"){
        if(limitStage.top < limitBall.top){
            y--;
            move();
        }
    }
    if(mensaje == "arrowdown"){
        if(limitStage.bottom > limitBall.bottom){
            y++;
            move();
        }
    }
    if(mensaje == "arrowleft"){
        if(limitStage.left < limitBall.left){
            x--;
            move();
        }
    }
    if(mensaje == "arrowright"){
        if(limitStage.right > limitBall.right){
            x++;
            move();
        }
    }
}

