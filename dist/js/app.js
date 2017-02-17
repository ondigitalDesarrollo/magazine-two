var a  = document.querySelector('p');

a.addEventListener('click', uptadeName());

function uptadeName(){
	var name = prompt("Ingresa tu nombre: ");
	a.textContent = ' Jugador 1' + name;
}