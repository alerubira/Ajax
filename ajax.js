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
let divSecundario=document.getElementById("secundario");
let personajes=[{}];
fetch ('http://hp-api.herokuapp.com/api/characters')
.then(response=>response.json())
.then(data=>{

});
