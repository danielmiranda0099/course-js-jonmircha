
const d = document;

export function reloj(reloj,playReloj, stopReloj){
	let temporizaReloj;
	d.addEventListener("click", (e) => {
		if(e.target.matches(playReloj)){
			temporizaReloj = setInterval( () =>{
				let hora = new Date().toLocaleTimeString();
				d.querySelector(reloj).innerHTML = `<h3>${hora}</h3>`;
			},1000);
			
			e.target.disabled = true;
		}

		if(e.target.matches(stopReloj)){
			clearInterval(temporizaReloj);
			d.querySelector(reloj).innerHTML = null;
			d.querySelector(playReloj).disabled = false;
		}
	});
}



 