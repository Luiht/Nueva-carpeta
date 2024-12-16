

const Producto1 = {
    Nombre: "Pantalones"
}

const Producto2 = {
    Nombre: "Camisa"
}


const Producto3 = {}


let Tienda = [Producto1, Producto2]


function mostrarProductos(tienda){
    for  (const producto of Tienda) {
    console.log(producto.Nombre)
    }
}




let productoAgregado = prompt("Agrega un producto")
Producto3.key(Nombre)
Producto3.value(productoAgregado)


Tienda.push(Producto3)
mostrarProductos(Tienda)