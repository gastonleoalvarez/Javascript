function guardar(){
    function Persona(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
    var nombreCapturar= document.getElementById("nombre").value;
    console.log(nombreCapturar);
    var apellidoCapturar= document.getElementById("apellido").value;

    nuevoSujeto = new Persona(nombreCapturar, apellidoCapturar);
    agregar();
}

var datos = [];
function agregar(){
    datos.push(nuevoSujeto);
    console.log(datos);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.apellido+'</td></tbody>'; 
};