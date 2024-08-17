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
        document.getElementById("resultado").innerHTML = texto;
     }
})