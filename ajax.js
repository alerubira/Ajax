let principal=document.getElementById("principal");
let secundario=document.getElementById("secundario");
let bBorrar=document.querySelector("#borrar");

function obtenerUsuario() {
 // bBorrar.style.display="block";
    // Hacer la solicitud a la API
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        // Mostrar la respuesta en la consola
        console.log(data);
        
        
        // También puedes acceder a propiedades específicas, por ejemplo, el nombre
       // const nombre = data.results[0].name.first;
       // console.log('Nombre:', nombre);
       const persona={nombre:data.results[0].name.first,
                      apellido:data.results[0].name.last,
                      genero:data.results[0].gender,
                      pais:data.results[0].location.country,
                      imagen:data.results[0].picture.medium};
       nombreP=document.createElement("p");
       var ima = document.createElement("img");
       var div1=document.createElement("div");
       console.log(persona.imagen);
       ima.src=persona.imagen;
       nombreP.textContent=`Nombre ${persona.nombre} , Apellido : ${persona.apellido} , Genero : ${persona.genero} , Pais : ${persona.pais}`;
       var botonBorrar = document.createElement("button");
           botonBorrar.textContent = "Borrar";
           botonBorrar.onclick = borrar(div1); // Asociar la función borrar al evento de clic

       div1.appendChild(nombreP);
       div1.appendChild(ima);
       div1.appendChild(botonBorrar);
       secundario.appendChild(div1);
        // Aquí puedes manipular los datos según tus necesidades
      })
      .catch(error => console.error('Error al obtener usuario:', error));
  }
function borrar(div1){
     // bBorrar.style.display="none";
      while (div1.firstChild) {
        div1.firstChild.remove();
    }
}  