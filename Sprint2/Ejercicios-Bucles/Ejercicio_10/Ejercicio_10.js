let numero = 1;
let sumaPares = 0;
let sumaImpares = 0;

while(numero !== 0){
    numero = Math.floor(Math.random()*100)
    if(numero % 2 == 1){
        sumaImpares = sumaImpares + numero
    }else{
        sumaPares = sumaPares + numero
    }
}
console.log(`La suma de los numeros Impares son ${sumaImpares}`)
console.log(`La suma de los numeros Pares son ${sumaPares}`)
