import menu from "./menu_amburguer.js";
import {reloj} from "./reloj.js";
import {alarma} from "./alarma.js";
import {atajoTeclado, moverBall} from "./teclado.js";
import {cuentaRegresiva} from "./cuenta_regresiva.js";
import {botonScroll} from "./boton-scroll.js";
import {darkTheme} from "./tema_oscuro.js";
import {responsiveMedia} from "./objeto_responsive.js";
import {responsiveTester} from "./prueba_responsive.js";
import {userDeviceInfo} from "./deteccion_dispositivo.js";


const d= document;

//en la carga del documento asigno los escripts para mas velociadad
d.addEventListener("DOMContentLoaded", (e) =>{
	menu(".menu-enlace", ".menu", ".menu a");

	reloj("#reloj", "#playReloj", "#stopReloj"); 
	alarma("../assets/alarma.mp3", "#playAlarma", "#stopAlarma");

	cuentaRegresiva("idCuentaRegresiva", "2021/06/30 7:00:00", 
	"¡ES HORA DE UN GRAN COMIENZO DANIEL. VAS A LOGRAR COSAS GRANDES, TE LO ASEGURO!");

	botonScroll(".btn-scroll");

	responsiveMedia("youtube", "(min-width: 1024px)", 
	`<a href="https://www.youtube.com/watch?v=K9lV63tyftg" target="_blank" rel="noopener">ver video</a>`, 
	`<iframe width="560" height="315" src="https://www.youtube.com/embed/K9lV63tyftg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);

	responsiveMedia("mapa", "(min-width: 1024px)", 
	`<a href="https://goo.gl/maps/sutqVUHvDCEfxMbH9" target="_blank" rel="noopener">ver mapa</a>`, 
	`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1969.0002736936704!2d-75.14861929350698!3d9.24424822567393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5937f0c3dc08f1%3A0xffaf2f74f4add507!2sParque%20Central%20Since!5e0!3m2!1ses!2sco!4v1615817527982!5m2!1ses!2sco" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`);


	responsiveTester("responsive-tester");

	userDeviceInfo("user-device");
	
});

darkTheme(".dark-theme", "dark-mode");

d.addEventListener("keydown", (e) => {
	atajoTeclado(e);
	moverBall(e, ".ball", ".stage");
});


