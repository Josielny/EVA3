var clientes = []
clientes.push(new Cliente("11.111.111-1","JORGE","PEREZ","98767654","jperez@GMAIL.COM", 
                                            "RANCAGUA", "MASCULINO", "24" , "123456", "CHILENA" , "ANTIGUO" , "5 O MAS"))
clientes.push(new Cliente("22.222.222-2", "MABEL", "ORTEGA", "879695943", 
                                            "mortega@GMAIL.COM","GRANEROS", "FEMENINO", "34" ,"654321", "VENEZOLANA" , "NUEVO" , "1"))

function listarClientes(){
    var filas = "";
    for (let i = 0; i < clientes.length; i++) {
        var e = clientes[i];
        filas = filas + "<tr>";
            filas = filas + "<td>"+e.rut.toUpperCase()+"</td>";
            filas = filas + "<td>"+e.nombre.toUpperCase()+"</td>";
            filas = filas + "<td>"+e.apellido.toUpperCase()+"</td>";
            filas = filas + "<td>"+e.telefono.toUpperCase()+"</td>";
            filas = filas + "<td>"+e.email.toUpperCase()+"</td>";
            filas = filas + "<td>"+e.comuna.toUpperCase()+"</td>";
            filas = filas + "<td>"+e.sexo.toUpperCase()+"</td>";
            filas = filas + "<td>"+e.edad.toUpperCase()+"</td>";
            filas = filas + "<td>*************</td>";
            filas = filas + "<td>"+e.nacionalidad.toUpperCase()+"</td>";
            filas = filas + "<td>"+e.tipocliente.toUpperCase()+"</td>";
            filas = filas + "<td>"+e.productoscomprados.toUpperCase()+"</td>";




        filas = filas + "</tr>";
    }
    document.getElementById("tabladedatos").innerHTML = filas;
}

document.addEventListener("DOMContentLoaded", function(){ listarClientes() });

function limpiarCampos(x){
    if(x===1){
        document.getElementById("txtrut").value = "";
    }
    document.getElementById("txtnom").value = "";
    document.getElementById("txtape").value = "";
    document.getElementById("txttel").value = "";
    document.getElementById("cbocom").value = "";
    document.getElementById("opsexm").checked = true;
    document.getElementById("txteda").value = "";
    document.getElementById("txtpas").value = "";
    document.getElementById("cbonac").value = "";
    document.getElementById("optipn").checked = true;
    document.getElementById("cbopro").value = "";


}

function consultar(){
    var rut = document.getElementById("txtrut").value;
    if(rut.trim().length<11 || rut.trim().length>12){
        alert("Debe digitar un rut para buscar!");
        document.getElementById("txtrut").value = "";
        document.getElementById("txtrut").focus();
    }else{
        let sw = 0;
        for (let i = 0; i < clientes.length; i++) {
            var e = clientes[i];
            if(rut === e.rut){
                sw = 1;
                document.getElementById("txtnom").value = e.nombre;
                document.getElementById("txtape").value = e.apellido;
                document.getElementById("txttel").value = e.telefono;
                document.getElementById("txtema").value = e.email;
                document.getElementById("cbocom").value = e.comuna;
                if(e.sexo === "MASCULINO"){
                    document.getElementById("opsexm").checked = true;
                }else{
                    document.getElementById("opsexf").checked = true;
                }
                document.getElementById("txteda").value = e.edad;
                document.getElementById("txtpas").value = e.password;
                document.getElementById("cbonac").value = e.nacionalidad;
                if(e.tipocliente === "NUEVO"){
                    document.getElementById("optipn").checked = true;
                }else{
                    document.getElementById("optipa").checked = true;
                }
                document.getElementById("cbopro").value = e.productoscomprados;


            }   
        }
        var msg = "";
        if(sw === 0){
            msg = msg + "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>Cliente no encontrado!</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        }else if(sw === 1){
            msg = msg + "<div class='alert alert-success alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>Cliente encontrado!</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        }
        document.getElementById("mensajes").innerHTML = msg;
    }
}

function registrar(){
    var rut = document.getElementById("txtrut").value.toUpperCase();
    var nom = document.getElementById("txtnom").value.toUpperCase();
    var ape = document.getElementById("txtape").value.toUpperCase();
    var tel = document.getElementById("txttel").value.toUpperCase();
    var ema = document.getElementById("txtema").value.toUpperCase();
    var com = document.getElementById("cbocom").value.toUpperCase();

    var sex = "";
    if(document.getElementById("opsexm").checked === true){
        sex = "MASCULINO";
    }else{
        sex = "FEMENINO";
    }

    var eda = document.getElementById("txteda").value.toUpperCase();
    var pas = document.getElementById("txtpas").value.toUpperCase();
    var nac = document.getElementById("cbonac").value.toUpperCase();

    var tip = "";
    if(document.getElementById("optipn").checked === true){
        tip = "NUEVO";
    }else{
        tip = "ANTIGUO";
    }

    var pro = document.getElementById("cbopro").value.toUpperCase();

     



    var errores = "";
    if(rut.trim().length<11 || rut.trim().length>12){
        errores = errores + "El rut debe contener entre 11 y 12 caracteres! \n";
    }else{
        for (let i = 0; i < clientes.length; i++) {
            var e = clientes[i];
            if(rut === e.rut){
                errores = errores + "El rut ya se encuentra registrado!\n";
                break;
            }
        }
    }

    if(nom.trim().length<5 || nom.trim().length>30){
        errores = errores + "El nombre debe contener entre 5 y 30 caracteres! \n";
    }

    if(ape.trim().length<5 || ape.trim().length>30){
        errores = errores + "El apellido debe contener entre 5 y 30 caracteres! \n";
    }

    if(tel.trim().length !== 11){
        errores = errores + "El telefono debe contener 11 digitos!";
    }

    if(ema.trim().length === 0){
        errores = errores + "Debe ingresar el email! \n";
    }else if(!ema.endsWith("@GMAIL.COM")){
        errores = errores + "El email debe ser de GMAIL.COM";
    }

    if(com.trim().length === 0){
        errores = errores + "Debe ingresar la comuna! \n";
    }

    if(eda.trim().length === 0){
        errores = errores + "Debe ingresar la edad! \n";
    }

    if(pas.trim().length === 0){
        errores = errores + "Debe ingresar el password! \n";
    }else if(pas.trim().length<8 || pas.trim.length>20){
        errores = errores + "el password debe contener entre 8 y 20 caracteres! \n";
    }

    if(nac.trim().length === 0){
        errores = errores + "Debe ingresar la nacionalidad! \n";
    }

    if(tip.trim().length === 0){
        errores = errores + "Debe ingresar el tipo de cliente! \n";
    }

    if(pro.trim().length === 0){
        errores = errores + "Debe ingresar la cantidad de productos! \n";
    }


    if(errores !== ""){
        alert(errores)
    }else{
        var e = new Cliente(rut, nom, ape, tel, ema, com, sex, eda, pas,nac,tip,pro);
        clientes.push(e);

        var msg = "";
        msg = msg + "<div class='alert alert-success alert-dismissible fade show' role='alert'>"
        msg = msg + "<strong>Cliente registrado correctamente!</strong>"
        msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
        msg = msg + "</div>"
        document.getElementById("mensajes").innerHTML = msg;
        listarClientes();
        limpiarCampos();
    }
}

function modificar(){
    var rut = document.getElementById("txtrut").value.toUpperCase();
    var nom = document.getElementById("txtnom").value.toUpperCase();
    var ape = document.getElementById("txtape").value.toUpperCase();
    var tel = document.getElementById("txttel").value.toUpperCase();
    var ema = document.getElementById("txtema").value.toUpperCase();
    var com = document.getElementById("cbocom").value.toUpperCase();

    var sex = "";
    if(document.getElementById("opsexm").checked === true){
        sex = "MASCULINO";
    }else{
        sex = "FEMENINO";
    }

    var eda = document.getElementById("txteda").value.toUpperCase();
    var pas = document.getElementById("txtpas").value.toUpperCase();
    var nac = document.getElementById("cbonac").value.toUpperCase();

    var tip = "";
    if(document.getElementById("optipn").checked === true){
        tip = "NUEVO";
    }else{
        tip = "ANTIGUO";
    }

    var pro = document.getElementById("cbopro").value.toUpperCase();


    var errores = "";
    if(rut.trim().length<11 || rut.trim().length>12){
        errores = errores + "El rut debe contener entre 11 y 12 caracteres! \n";
    }else{
        let x = 0;
        for (let i = 0; i < clientes.length; i++) {
            var e = clientes[i];
            if(rut === e.rut){
                x = 1;
                break;
            }
        }
        if(x === 0){
            errores = errores + "El rut no se encuentra registrado!\n";
        }
    }

    if(nom.trim().length<5 || nom.trim().length>30){
        errores = errores + "El nombre debe contener entre 5 y 30 caracteres! \n";
    }

    if(ape.trim().length<5 || ape.trim().length>30){
        errores = errores + "El apellido debe contener entre 5 y 30 caracteres! \n";
    }

    if(tel.trim().length !== 11){
        errores = errores + "El telefono debe contener 11 digitos!";
    }

    if(ema.trim().length === 0){
        errores = errores + "Debe ingresar el email! \n";
    }else if(!ema.endsWith("@GMAIL.COM")){
        errores = errores + "El email debe ser de GMAIL.COM";
    }

    if(com.trim().length === 0){
        errores = errores + "Debe ingresar la comuna! \n";
    }

    if(eda.trim().length === 0){
        errores = errores + "Debe ingresar la edad! \n";
    }

    if(pas.trim().length === 0){
        errores = errores + "Debe ingresar el password! \n";
    }else if(pas.trim().length<8 || pas.trim.length>20){
        errores = errores + "el password debe contener entre 8 y 20 caracteres! \n";
    }

    if(nac.trim().length === 0){
        errores = errores + "Debe ingresar la nacionalidad! \n";
    }

    if(tip.trim().length === 0){
        errores = errores + "Debe ingresar el tipo de cliente! \n";
    }

    if(pro.trim().length === 0){
        errores = errores + "Debe ingresar la cantidad de productos! \n";
    }


    if(errores !== ""){
        alert(errores)
    }else{
        var sw = 0;
        for (let i = 0; i < clientes.length; i++) {
            var e = clientes[i];
            if(rut === e.rut){
                var x = confirm("Desea modificar el registro?");
                if(x === true){
                    sw=1;
                    clientes[i].nombre = nom;
                    clientes[i].apellido = ape;
                    clientes[i].telefono = tel;
                    clientes[i].email = ema;
                    clientes[i].comuna = com;
                    clientes[i].sexo = sex;
                    clientes[i].edad = eda;
                    clientes[i].password = pas;
                    clientes[i].nacionalidad = nac;
                    clientes[i].tipocliente = tip;
                    clientes[i].productoscomprados = pro;


                    break;
                }else{
                    sw = 2;
                }
            }
        }

        var msg = "";
        if(sw === 0){
            msg = msg + "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>Cliente no encontrado!</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        }else if(sw === 1){
            msg = msg + "<div class='alert alert-success alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>Cliente modificado correctamente!</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        }else if(sw === 2){
            msg = msg + "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>El Cliente no fue modificado!</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        }
        document.getElementById("mensajes").innerHTML = msg;
        listarClientes();
        limpiarCampos();
    }
}

function eliminar(){
    var rut = document.getElementById("txtrut").value.toUpperCase();

    var errores = "";
    if(rut.trim().length<11 || rut.trim().length>12){
        errores = errores + "El rut debe contener entre 11 y 12 caracteres! \n";
    }else{
        let x = 0;
        for (let i = 0; i < clientes.length; i++) {
            var e = clientes[i];
            if(rut === e.rut){
                x = 1;
                break;
            }
        }
        if(x === 0){
            errores = errores + "El rut no se encuentra registrado!\n";
        }
    }

    
    if(errores !== ""){
        alert(errores)
    }else{
        var sw = 0;
        for (let i = 0; i < clientes.length; i++) {
            var e = clientes[i];
            if(rut === e.rut){
                var x = confirm("Desea eliminar el registro?");
                if(x === true){
                    sw=1;
                    clientes.splice(i, 1)
                    break;
                }else{
                    sw = 2;
                }
            }
        }

        var msg = "";
        if(sw === 0){
            msg = msg + "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>Cliente no encontrado!</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        }else if(sw === 1){
            msg = msg + "<div class='alert alert-success alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>Cliente eliminado correctamente!</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        }else if(sw === 2){
            msg = msg + "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"
            msg = msg + "<strong>El Cliente no fue eliminado!</strong>"
            msg = msg + "<button type='button' class='btn-close' data-bs-dismiss='alert' aria-label='Close'></button>"
            msg = msg + "</div>"
        }
        document.getElementById("mensajes").innerHTML = msg;
        listarClientes();
        limpiarCampos();
    }
}





// -----------------------------------------------
// --- FUNCIONES PARA VALIDAR EL CAMPO DEL RUT --- 
// -----------------------------------------------

// Capturando el DIV alerta y mensaje
var alerta = document.getElementById("alerta");
var mensaje = document.getElementById("mensaje");

// Permitir sólo números en el imput
function isNumber(evt) {
  var charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode === 75) return false;
  return true;
}


function checkRut(rut) {
  // Obtiene el valor ingresado quitando puntos y guión.
  var valor = clean(rut.value);

  // Divide el valor ingresado en dígito verificador y resto del RUT.
  cuerpo = valor.slice(0, -1);
  dv = valor.slice(-1).toUpperCase();

  // Separa con un Guión el cuerpo del dígito verificador.
  rut.value = format(rut.value);

  // Calcular Dígito Verificador "Método del Módulo 11"
  suma = 0;
  multiplo = 2;

  // Para cada dígito del Cuerpo
  for (i = 1; i <= cuerpo.length; i++) {
    // Obtener su Producto con el Múltiplo Correspondiente
    index = multiplo * valor.charAt(cuerpo.length - i);

    // Sumar al Contador General
    suma = suma + index;

    // Consolidar Múltiplo dentro del rango [2,7]
    if (multiplo < 7) {
      multiplo = multiplo + 1;
    } else {
      multiplo = 2;
    }
  }

  // Calcular Dígito Verificador en base al Módulo 11
  dvEsperado = 11 - (suma % 11);

  // Casos Especiales (0 y K)
  dv = dv == "K" ? 10 : dv;
  dv = dv == 0 ? 11 : dv;

}


function format (rut) {
  rut = clean(rut)

  var result = rut.slice(-4, -1) + '-' + rut.substr(rut.length - 1)
  for (var i = 4; i < rut.length; i += 3) {
    result = rut.slice(-3 - i, -i) + '.' + result
  }

  return result
}


function clean (rut) {
  return typeof rut === 'string'
    ? rut.replace(/^0+|[^0-9kK]+/g, '').toUpperCase()
    : ''
}
