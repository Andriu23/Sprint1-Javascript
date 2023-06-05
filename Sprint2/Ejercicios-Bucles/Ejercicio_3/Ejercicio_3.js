let numeroAdivinar = 40;
let numero = 1;

while(numero != numeroAdivinar){
    numero = Math.ceil(Math.random()*100)
    if(numero < numeroAdivinar){
        console.log(`tu número ${numero} es Menor que el número a adivinar`)
    }else if( numero > numeroAdivinar){
        console.log(`tu número ${numero} es Mayor que el número a adivinar`)
    }
}
console.log(`Ganaste el numero es ${numeroAdivinar}`)
