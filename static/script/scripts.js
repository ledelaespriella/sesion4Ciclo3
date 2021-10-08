function validarFormulario(){

    var name=document.formRegistro.nombre;
    var email=document.formRegistro.correo;
    var pass=document.formRegistro.contraseña;

    var name_len=name.value.length;
    if (name_len==0 || name_len<8) {
        alert("Ingresar usuario con mínimo 8 caracteres");
        name.focus();
        return false;
    }

    var formatoCorreo = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(!email.value.match(formatoCorreo)){
        alert("Debes ingresar un correo electronico válido")
        email.focus();
        return false;
    }

    var clave_len = pass.value.length;
    if(clave_len == 0 || clave_len < 8){
        alert("Ingresar contraseña con mínimo 8 caracteres");
        pass.focus();
        return false;
    }

    
}

function mostrarPassword(obj) {
    var obj = document.getElementById("contraseña");
    obj.type = "text";
  }
  function ocultarPassword(obj) {
    var obj = document.getElementById("contraseña");
    obj.type = "password";
  }

