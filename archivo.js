const productos = [
{nombre: "yerba", precio: 110},
{nombre: "harina", precio: 100},
{nombre: "azucar", precio: 70},
{nombre: "cafe", precio: 150},
{nombre: "galletitas", precio:120},
];

let carrito = []

let seleccion = prompt ("quire comprar algun producto si o no")

while (seleccion != "si" && seleccion != "no"){
    alert ("por favor ingresa si o no")
    seleccion = prompt("hola desea comprar algo si o no")
}

if (seleccion == "si"){
    alert ("lista de productos")
    let todoslosProductos = productos.map((producto) => producto.nombre+ " " + producto.precio + "$");
    alert(todoslosProductos.join(" - "))
}else if (selccion =="no"){
    alert ("gracias por venir")
}

while(seleccion != "no"){
    let producto = prompt ("agregar un producto a tu carrito")
    let precio = 0

    if(producto == "yerba" || producto == "harina" || producto == "azucar" || producto == "cafe" || producto == "galletitas"){
        switch(producto){
            case "yerba":
            precio = 110;
            break;
            case "harina":
            precio = 100;
            break;
            case "azucar":
            precio = 70;
            break;
            case "cafe":
            precio = 150;
            break;
            case "galletitas":
            precio = 120;
            break;
            default:
                break;
            
        }
    let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    }else {
        alert ("producto no encontrado")
    }

    seleccion = prompt ("desea seguir comprando?")

    while (seleccion === "no"){
        alert("gracias por la compra")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break; 
    }
}

const total = carrito.reduce((ecc, el) => acc + el.precio * el.unidades, 0)
console.log(`total a pagar: ${total}`)