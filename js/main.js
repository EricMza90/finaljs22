const articulos = [
    {nombre:"Kaiken Estate", id:1, precio: 1250, imagen:"Kaiken-Malbec.png",varietal: "MALBEC"},
    {nombre:"Killka", id:2, precio: 1100, imagen:"Killka-Malbec.png",varietal: "MALBEC"},
    {nombre:"Cordero con Piel de Lobo ", id:3, precio: 990, imagen:"Cordero-Lobo.png",varietal: "MALBEC"},
    {nombre:"Mil Piedras ", id:4, precio: 1250, imagen:"Mil-Piedras.png",varietal: "CABERNET SAUVIGNON"},
    {nombre:"AlbaFlor", id:5, precio: 1300, imagen:"Albaflor-Cabernet.png",varietal: "CABERNET SAUVIGNON"},
    {nombre:"Trivento Reserve", id:6, precio: 1300, imagen:"Trivento-Reserve.png",varietal: "CABERNET SAUVIGNON"},
    {nombre:"La Flor Sauvignon Blanc", id:7, precio: 1100, imagen:"La-Flor-Blanc.png",varietal: "BLANCO"},
    {nombre:"Crios Torrontes", id:8, precio: 1100, imagen:"crios.png",varietal: "BLANCO"},
    {nombre:"Santa Julia Chenin Dulce", id:9, precio: 820, imagen:"Santa-Julia-Chenin-Dulce.png",varietal: "BLANCO"},
    {nombre:"Norton Cosecha Tardia", id:10, precio: 690, imagen:"Norton-Tardio.png",varietal: "BLANCO"},
    {nombre:"La Flor", id:11, precio: 1150, imagen:"La-Flor-Rose.png",varietal: "ROSE"},
    {nombre:"Kaiken Malbec", id:12, precio: 1250, imagen:"Kaiken-Rose.png",varietal: "ROSE"}
];

const pago = [
    {denominacion:"Debito", id:1},
    {denominacion:"Credito", id:2},
    {denominacion:"Mercado Pago", id:3},
];

const lista = [];

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

function buscarVino(id) {
    return articulos.find(varietal => varietal.id == id);
}

function buscarPago(id) {
    return pago.find(cash => cash.id == id);
}

function stock() {
    
    let contenido = "";

    for(vino of articulos){
        contenido +=`<div id="${vino.id}" class= "col-md-3 container-tarjeta">
        <div class="card text-center text-white bg-secondary mb-3">
        <img src="image/${vino.imagen}" class="card-img-top" alt="${vino.nombre}">
        <div class="card-body">
          <h6 class="card-title">${vino.varietal}</h6>
          <p class="card-text">${vino.nombre}</p>
          <p class="card-text">$ ${vino.precio}</p>
          <button type="button" class="btn btn-success btn-agregar">Agregar al Carrito</button>
        </div>
      </div>
      </div>`;

    };
    document.getElementById("stock").innerHTML = contenido;
}

function agregarAlCarrito () {

    const botones = document.querySelectorAll(".btn-agregar");

    botones.forEach((boton)=> {
        boton.addEventListener("click", (e) =>{
        let itemId = parseInt(e.target.closest(".container-tarjeta").id);

        let item = articulos.find((vino) => vino.id === itemId);

        lista.push(item);
        verCarrito ();
        console.log(lista);
    })
    
    })

}
 function verCarrito (){

    let contenido= "";

    for(item of lista){
            contenido +=`
            <table class="table bg-secondary text-center">
            <h5 class = "bg-secondary text-center text-white">RESUMEN DE COMPRA</h5>
            <thead>
              <tr>
                <th class="text-white">PRODUCTO</th>
                <th class="text-white">VARIETAL</th>
                <th class="text-white">PRECIO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${item.nombre}</td>
                <td>${item.varietal}</td>
                <td>$ ${item.precio}</td>
                <button type="button" class="btn btn-success">FINALIZAR COMPRA</button>
              </tr> 
            </tbody>
          </table>`;
        };
        document.getElementById("extras").innerHTML = contenido;
    }
 

stock();
agregarAlCarrito();
