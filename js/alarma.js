
const d = document;

export function alarma(sound, playAlarma, stopAlarma){
	let temporizaReloj;
	const $alarm = d.createElement("audio");
	$alarm.src = sound;
	d.addEventListener("click", (e) => {
		if(e.target.matches(playAlarma)){
			$alarm.play();
			e.target.disabled = true;
		}

		if(e.target.matches(stopAlarma)){
			$alarm.pause();
			$alarm.currentTime = 0;
			d.querySelector(playAlarma).disabled = false;						
		}
	});
}



 