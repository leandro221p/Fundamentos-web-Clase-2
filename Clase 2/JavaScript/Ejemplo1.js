 function validarInformacion(){
    nombre=document.getElementById("input").value;
    correo=document.getElementById("correo").value;
    if(nombre ===""||correo===""){
        alert("Por favor digite los campos")
        return;
       
    }
        alert("!Hola " +nombre +"!Su correo es!"+correo);
    }