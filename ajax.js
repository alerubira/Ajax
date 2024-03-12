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
let personajes=[];
let actual;
let btnTodos=document.getElementById("btnTodos");
let divSecundario=document.getElementById("divSecundario");
let casa=document.getElementById("casa");
let tiempoExcedido = false;

// Configurar el temporizador para 10 segundos
/*setTimeout(() => {
    tiempoExcedido = true;
    console.log('La descarga ha excedido el tiempo límite de 10 segundos.');
}, 10000);*/
fetch ('https://hp-api.onrender.com/api/characters')
   .then(response=>response.json())
   .then(data=>{
       //console.log(data);
       // Si el tiempo no ha excedido, continuar con el procesamiento de los datos
       //if (!tiempoExcedido) {
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
   // }
     // console.log(personajes);
})
    .catch(error=> console.error('Error al acceder a la pagina ', error));
function todos(){
  limpiar();
  actual=personajes;
  mostrar(personajes,false);
}
 function difuntos(){
   limpiar();
    
    mostrar(actual,true);
 } 

function limpiar(){
  while(divSecundario.firstChild){
    divSecundario.firstChild.remove();
  }
}
// Función para manejar el evento del desplegable
function manejarEventoDesplegable() {
  if(personajes){
    let casas= new Set();
    for(per of personajes){
      casas.add(per.casa);
    }
    let opcion;
    casas.forEach(ca=>{
      opcion=document.createElement("option");
      opcion.value=ca;
      opcion.textContent=ca,
      casa.appendChild(opcion);
    })
    
  }else{
    alert("La Pagina de Harry NO se ha cargado");
  }
}
function capturarSeleccion(){
  
}


// Agregar un evento para capturar cuando el desplegable se abre
casa.addEventListener("mousedown", manejarEventoDesplegable);
casa.addEventListener("change",capturarSeleccion);


function mostrar(arrP,difunto){
  
  if(arrP!=undefined){
    arrP.forEach(per=>{
       let div=document.createElement("div");
       div.classList.add("carta");
      // div.style.border = "3px solid black"; // Borde negro de 3px de grosor
      // div.style.borderRadius = "3px"; // Bordes redondeados de 3px
       let divN=document.createElement("div")
       divN.textContent=`Nombre: ${per.nombre}`;
       let divF=document.createElement("div");
       let divCasa=document.createElement("div");
       if(per.casa){
        divCasa.textContent=`Casa: ${per.casa}`;
       }else{
        divCasa.textContent=`No Pertenece a ninguna Casa`;
       }
       
       var imagen = document.createElement("img");
       if(per.imagen){
          // Establecer el atributo src de la imagen
       imagen.src = per.imagen; // Reemplaza "ruta_de_la_imagen" con la URL de tu imagen
       }else{
        imagen.src="descarga.jpg";
       }
     // Agregar la imagen al divF
      divF.appendChild(imagen);
      if(difunto&&!per.vive){
        var imagenD = document.createElement("img");
    imagenD.src = "exis.jpg";
    imagenD.style.width = "20px"; // Establecer el ancho de la imagenD
    imagenD.style.height = "55px"; // Establecer la altura de la imagenD
   /* imagenD.style.position = "absolute"; // Establecer la posición absoluta
    
    // Calcular las coordenadas para posicionar imagenD sobre imagen
    var imagenPos = imagen.getBoundingClientRect();
    var divPos = divF.getBoundingClientRect();
    var imagenDX = imagenPos.left - divPos.left + (imagenPos.width - parseInt(imagenD.style.width)) / 2;
    var imagenDY = imagenPos.top - divPos.top + (imagenPos.height - parseInt(imagenD.style.height)) / 2;
    
    imagenD.style.left = imagenDX + "px"; // Establecer la posición izquierda en relación con la imagen
    imagenD.style.top = imagenDY + "px"; // Establecer la posición superior en relación con la imagen
    
    // Asegurar que imagenD se superponga sobre imagen
    imagenD.style.zIndex = "1"; // Ajustar el índice z para que esté por encima de la imagen original*/
    
    divF.appendChild(imagenD); // Asegúrate de que imagenD se agregue al divF y no al div principal
    
          
        }
        
      
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
   
