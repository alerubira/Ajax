/*let principal=document.getElementById("principal");
let secundario=document.getElementById("secundario");
let bBorrar=document.querySelector("#borrar");*/

/*function obtenerUsuario() {
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
       //var div1=document.createElement("div");
       console.log(persona.imagen);
       ima.src=persona.imagen;
       nombreP.textContent=`Nombre ${persona.nombre} , Apellido : ${persona.apellido} , Genero : ${persona.genero} , Pais : ${persona.pais}`;
       var botonBorrar = document.createElement("button");
           botonBorrar.textContent = "Borrar";
           botonBorrar.onclick = borrar(); // Asociar la función borrar al evento de clic

       secundario.appendChild(nombreP);
       secundario.appendChild(ima);
       secundario.appendChild(botonBorrar);
      // secundario.appendChild(div1);
        // Aquí puedes manipular los datos según tus necesidades
      })
      .catch(error => console.error('Error al obtener usuario:', error));
      function borrar(){
        // bBorrar.style.display="none";
         while (secundario.firstChild) {
           secundario.firstChild.remove();
       }
   }  
  }*/
  /*var model = "toyota";  
                                      
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/cars?limit=5&year=1995',
    headers: { 'X-Api-Key': '2D6LbTkcL9iyjDPeePB5xA==24fuMadMi8HJpxIK'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        /*while (result.firstChild) {
          
          
       }*/
      /* for (let iterator of result) {
        
        let marca=document.createElement("p") ;
        let modelo=document.createElement("p");
        let combustible=document.createElement("p"); 
        let anio=document.createElement("p");
         marca.textContent=`Marca : ${iterator.make}`;
         modelo.textContent=`Modelo : ${iterator.model}`;
         combustible.textContent=`Tipo de Combustible : ${iterator.fuel_type}`;
         anio.textContent=`Año : ${iterator.year}`;
         secundario.appendChild(marca);
         secundario.appendChild(modelo);
         secundario.appendChild(combustible);
         secundario.appendChild(anio);
       }
    
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    },
    
});*/
let divPrincipal=document.getElementById("divPrincipal");
let personajes=[{}];
let btnTodos=document.getElementById("btnTodos");
let divSecundario=document.getElementById("divSecundario");
fetch ('https://hp-api.onrender.com/api/characters')
   .then(response=>response.json())
   .then(data=>{
       //console.log(data);
      for(let p of data){
        let personaje={
          nombre:p.name,
          vive:p.alive,
          imagen:p.image,
          casa:p.house,
          especie:p.species,
          genero:p.gender
        }
        personajes.push(personaje);
      }
     // console.log(personajes);
})
    .catch(error=> console.error('Error al acceder a la pagina ', error));
function todos(){
  if(personajes){
      personajes.forEach(per=>{
         let div=document.createElement("div");
         div.style.border = "3px solid black"; // Borde negro de 3px de grosor
         div.style.borderRadius = "3px"; // Bordes redondeados de 3px
         let divN=document.createElement("div")
         divN.textContent=per.nombre;
         let divF=document.createElement("div");
         let divCasa=document.createElement("div")
         divCasa.textContent=per.casa;
         if(per.imagen){
            // Crear la etiqueta de imagen
         let imagen = document.createElement("img");

         // Establecer el atributo src de la imagen
         imagen.src = per.imagen; // Reemplaza "ruta_de_la_imagen" con la URL de tu imagen
         //console.log(per.imagen);
          // Establecer el tamaño de la imagen
        imagen.width = 90;
        imagen.height = 120;

       // Agregar la imagen al divF
        divF.appendChild(imagen);
         }
         
       
       // Agregar divN y divF al div principal
       div.appendChild(divN);
       div.appendChild(divF);
       div.appendChild(divCasa);
       divSecundario.appendChild(div);
       // Agregar el div principal al documento
       //document.body.appendChild(divSecundario); // Puedes cambiar document.body a otro elemento donde desees agregar estos divs

      })
  }else{
    alert("La pagina no se termino de cargar , intentelo mas tarde");
  }
}    
