//FUNCION
function suma(a, b, c) {
    let resultado = a + b + c;
    console.log(resultado);
}
suma(5, 8, 9);
//FUNCION FLECHA
const Sumas1 = (a,b) => a+b;
console.log(Sumas1(2,97));

//FUNCION
function comparacion(a,b){
if (a>b){
    var respuesta = "el numero: "+a+" es mayor que: "+b;
console.log(respuesta);
}else if (b>a) {
    var respuesta2 = "el numero: "+b+" es mayor que: "+a;
    console.log(respuesta2);
}
}
comparacion(8,88);
//FUNCION FLECHA
const comparacion2 = (a,b)=> console.log(a>b);
comparacion2(8,11);

//OBJETO Y DESESTRUCTURACIÓN
let preferencia = {
    tipoVehiculo: 'Deportivo',
    Kilometraje: 200000
}

const carro = {
modelo: ' Nissan',
Color: 'Rojo',
quemaCocos: true,
estado: 'usado',
tipo: preferencia
}

const {estado,quemaCocos,Color} = carro;
console.log(estado,quemaCocos,Color);

//ARREGLO Y DESESTRUCTURACIÓN
let valor1 = 5;
let valor2 = 9;

let garantia = true

let funcion = (a,b) =>a+b;

const arreglo =['NISSAN',20000, garantia,2018, funcion(valor1,valor2),['Mexico',2022]];
console.log(arreglo[1]);
console.log(arreglo[3]);

const funcionarreglo =()=>{return arreglo; }
    const [marca, kilometraje, seguro ] = funcionarreglo();

    console.log(marca, kilometraje,seguro);