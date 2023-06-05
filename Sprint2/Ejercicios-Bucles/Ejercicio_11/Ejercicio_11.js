let numeros = [2,5,7,12,19,31,40,71,111,182]

let mayor = numeros[0];

for(let num of numeros){
    console.log(mayor,num)
    if(num > mayor){
        mayor = num
    }
}
console.log(mayor)