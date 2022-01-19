//Juego Coincidencia de cartas



//Creacion texto
var subtitulo = document.createElement("h2");
var contenido = document.createTextNode("¡Exitos!");
subtitulo.appendChild(contenido);
document.body.appendChild(subtitulo);
subtitulo.style.fontSize = '60px';



//Ejecucion del juego

var moneda = prompt('Elige un lado de la moneda: ¿Cara o Cruz?').toLocaleLowerCase();
var monedaUsuario = moneda("prompt").value;


document.write('Elegiste: ' + moneda);



function lanzarMoneda() {

  var lanzar = Math.floor(Math.random() * 2);
  var resultadoMoneda = lanzar;



  while (resultadoMoneda) {

    if (resultadoMoneda == monedaUsuario) {

        alert(' ♣ ¡Ganaste! ¡La suerte te acompaña! ♥  ');

        return true;
      }else {
    alert('Ups, vuelve a intentarlo');
    return false;

  }

  }



return resultadoMoneda;

}




function reinicioJuego() {
  var reinicio = document.getElementById('boton');
  reinicio = window.setTimeout(lanzarMoneda(), 1000);
}


//Oriana, muy bien! Pero siempre sale "ganaste", eso es porque esto: if (resultado == cara || resultado == cruz) { deberia ser if(resultado == monedaQueEleigioUsuario) Gran trabajo! Felicitaciones