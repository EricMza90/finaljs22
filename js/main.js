const articulos = [
    {nombre:"Kaiken Estate Malbec", id:1, precio: 1250,imagen:"Kaiken Malbec.jpg"},
    {nombre:"Killka Malbec", id:2, precio: 1100,imagen:"Killka-Malbec.png"},
    {nombre:"Vistalba Tomero Cabernet Sauvignon", id:3, precio: 1250,imagen:"Tomero Cabernet.jpg"},
    {nombre:"AlbaFlor Cabernet Sauvignon", id:4, precio: 1300,imagen:"AlbaFlor Cabernet.jpg"},
    {nombre:"La Flor Sauvignon Blanc", id:5, precio: 1100,imagen:"La Flor Sauvignon Blanc.png"},
    {nombre:"Las Perdices Torrontes", id:6, precio: 1100,imagen:"Las Perdices Dulce Torrontes.jpg"},
    {nombre:"Santa Julia Chenin Dulce", id:7, precio: 820,imagen:"Chenin Dulce.png"},
    {nombre:"Norton Cosecha Tardia", id:8, precio: 690,imagen:"Norton Cosecha Tardia.png"},
    {nombre:"La Flor Rose", id:9, precio: 1150,imagen:"La Flor Rose.png"},
    {nombre:"Kaiken Estate Rose", id:10, precio: 1250,imagen:"Kaiken Rose.jpg"}
];
const pago = [
    {denominacion:"Debito", id:1},
    {denominacion:"Credito", id:2},
    {denominacion:"Mercado Pago", id:3},
];

const lista = [];

let entrada = 'Tienda de vinos "Wines of Mendoza"';

    alert(entrada);

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
        this.precio1 = vino.precio;
        this.precio2 = vino.precio;
        this.descuento1= 15;
    }

        calcularDescuento() {

            if(lista.length >=4 ){
                this.precio1 =  (this.precio1 * this.descuento1)/100
            }
        }
    }
class Pagar {
    constructor (cash){
        this.denominacion = cash.denominacion;
        this.id = cash.id
    }
}

function stock(){

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
function buscarPago(id) {
    return pago.find(cash => cash.id == id);
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

            if (isNaN(id_vinos) || id_vinos<1 || id_vinos > articulos.length){
                alert("No ingresaste un valor valido, debes seleccionar entre 1 y " + articulos.length) ;
            } else{
                let tuSeleccion = buscarVino(id_vinos);

                lista.push(tuSeleccion);
            }
        } else {
            break;
        }
    }

        console.log(lista);
}
function verLista(){

    let salida = "";

    if (lista.length > 0, lista.length < 4){

        salida = "Tu Compra:\n\n";

        let total_pagar = 0;

        for (let seleccion_lista of lista) {

            let producto = new Producto(seleccion_lista);

            total_pagar += producto.precio2;

            console.log("Precio Final: $" + producto.precio2);

            salida += producto.id + " - " + producto.nombre + " : $" + producto.precio2 + "\n";
        }

        salida += "\n\nTotal a Pagar: $ " + total_pagar.toFixed(0);
    }
    else if (lista.length >= 4){

        salida = "Tu Compra:\n\n";

        let total_pagar = 0;
        let dto_total = 0;

        for (let seleccion_lista of lista) {

            let producto = new Producto(seleccion_lista);
            
            producto.calcularDescuento();

            total_pagar += (producto.precio2 - producto.precio1);

            dto_total = (producto.precio1 * lista.length);

            console.log("El descuento obtenido es: $" + producto.precio1);

            console.log("Precio Final: $" + (producto.precio2 - producto.precio1));

            salida += producto.id + " - " + producto.nombre + " : $" + (producto.precio2 - producto.precio1) + "\n";
        }

        salida += "\n\nTotal a Pagar: $ " + total_pagar.toFixed(2) + "\n" + "Descuentos obtenidos: $ " + dto_total.toFixed(2);
    }  else {
        salida = "Tu lista esta vacia!!"; 
    }
    alert (salida);

   let finalizar =("Selecciona el medio de pago con el que deseas abonar " + "\n")

   for (let medioPago of pago) {
    finalizar += "\n" + medioPago.id + " - " + medioPago.denominacion + "\n";
    }

    console.log(finalizar);

    let resumen = prompt (finalizar);

    let tuPago = pago[resumen-1].denominacion;

    alert ("\n" + salida + "\n" + "Abonas con: " + tuPago + "\n\n" + "Pulsa Aceptar para confirmar");

    alert ("Estamos procesando tu compra, en breve recibiras la de confirmacion de tu pedido!!!"+ "\n\n" + "Muchas Gracias por elegirnos!!!");
}
verLista();



