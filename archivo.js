function guardar(){
    function Persona(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }
    var nombreCapturar= document.getElementById("nombre").value;
    console.log(nombreCapturar);
    var edadCapturar= document.getElementById("edad").value;

    nuevoSujeto = new Persona(nombreCapturar, edadCapturar);
    agregar();
}

var datos = [];
function agregar(){
    datos.push(nuevoSujeto);
    console.log(datos);
    document.getElementById("tabla").innerHTML +=
}