let numero = 1.0;
let suma = 0;

while(numero !== 0.0){
    numero = Math.floor(Math.random()*10)
    suma = suma + numero
    console.log(numero);
}
console.log(`Termina el programa el numero es ${suma}`)