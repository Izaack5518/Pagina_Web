let edad = 18;

if (edad >= 18) {
    console.log('VALIDO');
} else {
    console.log('NO VALIDO');
}
let celulares = [
    { marca: 'Samusung', precio: '23000', modelo: 'Note 20' },
    { marca: 'Huawei', precio: '24000', modelo: 'Mate 40 Pro' },
    { marca: '!Phone', precio: '28000', modelo: '13 Pro Max' },
    { marca: 'Motorola', precio: '20000', modelo: 'Edege 30' }

];

for (i = 0; i < celulares.length; i++) {
    console.log('El nombre de los celulares es: ' + celulares[i].marca);
    console.log('El precio de los celulares es: ' + celulares[i].precio + '$');
    console.log('El modelo de los celulares es: ' + celulares[i].modelo);
}

let edad1 = 17;

switch (true) {
    case edad1 >= 60:
        console.log('Obtiene un 50% de descuento en su boleto de cine ');
        break;
    case edad1 >= 18 && edad1 <= 59:
        console.log('Obtiene un 10% de descuento en su boleto de cine ');
        break;
    case edad1 >= 6 && edad1 <= 17:
        console.log('Obtiene un 30% de descuento en su boleto de cine ');
        break;
    default:
        console.log('No hay promociones disponibles para usted en este momento');
        break;
}