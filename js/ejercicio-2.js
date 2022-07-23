/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.


*/
let ciudades = [];
do{
    let ciudad = prompt("Ingrese una ciudad");
        
        ciudades.push(ciudad);
    
}while(confirm("Esta seguro que quiere seguir?"));
document.write(ciudades);

document.write(`<br> La longitud del arreglo es ${ciudades.length} <br>`);
document.write(`${ciudades[0]} ${ciudades[1]} ${ciudades[ciudades.length-1]} <br>`);
ciudades.push("Paris");
document.write(`El elemento que ocupa la segunda posición es ${ciudades[1]}`);
document.write(`<br> Agregamos en la última posición a ${ciudades.push("Paris")}`);
document.write(ciudades.splice(2,1, "Barcelona"));// me paro en la posicion 2 y reemplazo 1 valor por Barcelona


