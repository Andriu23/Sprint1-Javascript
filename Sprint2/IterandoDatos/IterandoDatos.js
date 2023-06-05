const persona = {
    nombre: "Andres",
    apellido: "Satoba",
    edad: 32,
    peso: 97,
    altura: 182,
    phone: 305,
    curso: "Javascript",
    modulo: 2,
    cohort: 48, 
    email: "sandresk.sc@gmail.com",
}
//while//
let nombre = 0;

let mentores = ["kevin","flor","cami","lucrecia","feder","nico","sil","leila","silvana","andres"]

    while(nombre < mentores.length){
        console.log(mentores[nombre]);
    nombre++
}
//for of//
for(let mentor of mentores){
    console.log(mentor);
}
for(let llaves of Object.values(persona)){
    console.log(llaves)
}

//for in//
for(let tutor in mentores){
    console.log(mentores[5]);
}
for(objeto in persona){
    console.log(objeto)
    console.log(persona[objeto])
}

