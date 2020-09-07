// funcion para animar elementos
function animarElementos(elementos) {
	window.addEventListener('scroll', function () {
		elementos.forEach((element) => {
			// obtenemos la posicion del elemento con referencia a la parte superios el TOP
			let posicion = element.getBoundingClientRect().top
			// obtenemos el tamaño de la pantalla y la dividimos entre un numero --> este numero nos sirve para que la animacion se haga antes o despues dependiendo de como lo quieres
			let tamañoPantalla = window.innerHeight / 1.3
			// traemon el nombre de la animacion, es una forma de hacerlo, tambien se puede hacer con la misma clase o crear otra
			let nameAnimation = element.getAttribute('name-style')

			//
			if (posicion < tamañoPantalla) {
				element.style.animation = `${nameAnimation} 1.5s linear forwards`
			} else {
				element.style.animation = ''
			}
		})
	})
}

// seleccionamos a los elementos del html a animar
const elementos = document.querySelectorAll('.animado')
// ejecutamos la funcion
animarElementos(elementos)
