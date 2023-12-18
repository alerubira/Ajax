let principal=document.getElementById("principal");
let secundario=document.getElementById("secundario");
let bBorrar=document.querySelector("#borrar");

function obtenerUsuario() {
    // Hacer la solicitud a la API
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        // Mostrar la respuesta en la consola
        console.log(data);
        bBorrar.style.display="block";
        // También puedes acceder a propiedades específicas, por ejemplo, el nombre
       // const nombre = data.results[0].name.first;
       // console.log('Nombre:', nombre);
       const persona={nombre:data.results[0].name.first};
       nombreP=document.createElement("p");
       nombreP.textContent=`Nombre ${persona.nombre}`;
       secundario.appendChild(nombreP);
       
        // Aquí puedes manipular los datos según tus necesidades
      })
      .catch(error => console.error('Error al obtener usuario:', error));
  }
function borrar(){
      bBorrar.style.display="none";
      while (secundario.firstChild) {
        secundario.firstChild.remove();
    }
}  