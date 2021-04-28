export default function menu(btnMenu, menu, menuLink){
	const d = document;

	d.addEventListener("click", (e) => {

		if(e.target.matches(btnMenu) || e.target.matches(`${btnMenu} *`)){
			d.querySelector(menu).classList.toggle("apa");
		}

		if(e.target.matches(menuLink)){
			d.querySelector(menu).classList.remove("apa");
		}
	});
}




 