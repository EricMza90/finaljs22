const articulos = [
    {nombre:"Kaiken Estate Malbec", id:1, precio: 1250},
    {nombre:"Las Perdices Malbec", id:2, precio: 1100},
    {nombre:"Vistalba Tomero Cabernet Sauvignon", id:3, precio: 1250},
    {nombre:"AlbaFlor Cabernet Sauvignon", id:4, precio: 1300},
    {nombre:"La Flor Sauvignon Blanc", id:5, precio: 1100},
    {nombre:"Las Perdices Torrontes", id:6, precio: 1100},
    {nombre:"Santa Julia Chenin Dulce", id:7, precio: 820},
    {nombre:"Norton Cosecha Tardia", id:8, precio: 690},
    {nombre:"La Flor Rose", id:9, precio: 1150},
    {nombre:"Kaiken Estate Rose", id:10, precio: 1250}
];

const lista = [];

let entrada = 'Tienda de vinos "Wines of Mendoza"';

    alert( entrada );

    console.log(entrada);


function ingreso() {
    let edad = parseInt(prompt("Por Favor Ingresa tu edad: "));

    if (edad < 18) {
        alert("Eres Menor de edad, no puedes ingresar al sitio");
        console.log("Eres Menor de edad, no puedes ingresar al sitio");
        return;
    }
    else {
        let nombre = prompt ("Ingresa tu Nombre: ");
        alert("Bienvenido"+ " " + nombre);
        console.log("Bienvenido "+ " " + nombre); 
        let ingreso = stock();
        elegirVinos(ingreso);
        
    }
}
ingreso();

class Producto {
    constructor(vino) {
        this.nombre = vino.nombre;
        this.id = vino.id;
        this.precio = vino.precio;
    }

}

function stock (){

    let ingreso =("Esta es nuestra seleccion de vinos para vos: ")

for (const vinos of articulos) {
    ingreso += "\n" + " # " + vinos.id + " - " + vinos.nombre + ": $" + vinos.precio;
}
    console.log(ingreso);
    return (ingreso);
}

function buscarVino(id) {
    return articulos.find(varietal => varietal.id == id);
}

function elegirVinos(){
    let salida = "Ingrese el numero de vino que deseas comprar:" + "\n" + "Toca aceptar para agregarlo a tu carrito o cancelar para continuar" + "\n";

    for (let vinos of articulos) {
        salida += vinos.id + " - " + vinos.nombre + " : $" + vinos.precio + "\n";
    }

    let id_vinos= 0;

    while (id_vinos != null) {
        let id_vinos = prompt(salida);

        if (id_vinos != null) {
            id_vinos = parseInt(id_vinos);

            let tuSeleccion = buscarVino(id_vinos);

            lista.push(tuSeleccion);
        } else {
            break;
        }
    }
    console.log(lista);
}

function verLista(){

    let salida = "";

    if (lista.length > 0){

        salida = "Tu Compra:\n\n";

        let total_pagar = 0;

        for (let seleccion_lista of lista) {

            let producto = new Producto(seleccion_lista);

            total_pagar += producto.precio;

            console.log("Precio Final: $" + producto.precio);

            salida += producto.id + " - " + producto.nombre + " : $" + producto.precio + "\n";
        }

        salida += "\n\nTotal a Pagar: $" + total_pagar.toFixed(0);
    } else {
        salida = "Tu lista esta vacia!!"; 
    }
    alert (salida);
}
verLista();