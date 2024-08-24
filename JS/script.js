import descifrado_cifrado from "./cifrado.js";
const mensaje = document.getElementById("mensaje");
const desplazamiento = document.getElementById("desplazamiento");
const boton_cifrar = document.getElementById("cifrar")
const boton_descifrar = document.getElementById("descifrar")

boton_cifrar.addEventListener("click",()=>{
     if(mensaje.value == ""){
        alert("ingresa tu mensaje")
     }else if(desplazamiento.value == ""){
        alert("ingresa tu clave secreta")
     }else{
        let texto ="";
        let textoCifrado = descifrado_cifrado(mensaje.value,desplazamiento.value,1);
        texto += "El mensaje cifrado es: "
        texto += textoCifrado;
        document.getElementsByClassName("mensajeContenido")[0].innerHTML += texto;
        document.getElementById("myModal").style.display = "block";
       /* document.getElementById("resultado").innerHTML = texto;*/
     }
})
boton_descifrar.addEventListener("click",()=>{
   if(mensaje.value == ""){
      alert("ingresa tu mensaje ")
   }else if(desplazamiento.value == ""){
      alert("ingresa tu clave secreta")
   }else{
      let texto ="";
      let textoCifrado = descifrado_cifrado(mensaje.value,desplazamiento.value,0);
      texto += "El mensaje cifrado es: "
      texto += textoCifrado;
      document.getElementsByClassName("mensajeContenido")[0].innerHTML += texto;
      document.getElementById("myModal").style.display = "block";
      /*document.getElementById("resultado").innerHTML = texto;*/
   }
})

document.getElementsByClassName("close")[0].onclick = function(){
   document.getElementById("myModal").style.display = "none";
   document.getElementsByClassName("mensajeContenido")[0].innerHTML = "";
}

window.onclick = function(event){
   if(event.target == document.getElementById("myModal")){
      document.getElementById("myModal").style.display = "none";
      document.getElementsByClassName("mensajeContenido")[0].innerHTML = "";
   }
}