//Consignas:
//Un formulario con validación personalizada (utilizando la API trabajada).
//Un juego (que utilice al menos 2 de los temas trabajados. Ej. funciones / DOM / eventos / condicionales).
//Una función asociada a un botón.



//Validar datos del formulario

window.addEventListener("load", validarDatos, false);



function iniciar(){
var nombre = document.getElementById('nombre');
var edad = document.getElementById('edad');
  nombre.addEventListener("input", validarDatos, false);
  edad.addEventListener("input", validarDatos, false);
  validarDatos();

}
function validarDatos() {


  if (nombre.value == '' || edad.value == '') {
    nombre.setCustomValidity("Todos los campos son obligatorios");
    edad.setCustomValidity("Todos los campos son obligatorios");
    nombre.style.background='#FFDDDD';
    edad.style.background='#FFDDDD';

  } else {
    nombre.setCustomValidity('');
    edad.setCustomValidity('');
    nombre.style.background='#FFFFFF';
    edad.style.background='#FFFFFF';

    alert(' ♦ ¡Bienvenid@s  al juego de la Suerte!  ♦ ');


  }


}
