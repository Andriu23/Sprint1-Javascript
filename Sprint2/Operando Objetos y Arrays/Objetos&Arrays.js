//Objetos
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
console.log(persona)

//cambiar un nombre de la propiedad//
persona.email = "satokandre@outlook.com"
console.log(persona)

//agregar una propiedad mas al objeto//
persona.cusosAdicionales = ["HTML","CSS"]
console.log(persona)

//copia las propiedad de uno o mas objetos fuentes a un objeto de destina//
const persona1 = {
    apellido: "Castro",
    colorOjos: "Cafe",
    curso: "aprobado",
}
let combinandoObjetos = Object.assign(persona,persona1)
console.log(persona)

//array//

let mentores = ["kevin","flor","cami","lucrecia","feder","nico","sil","leila","silvana","andres"]
console.log(mentores)

let comentario = (mentores.length)
console.log(comentario)

//extrae el ultimo elemento del array//
console.log(mentores.pop())

//reverse// Invierte los elementos del array. 
console.log(mentores.reverse())

//sort// ordena el array alfabeticamente. 
console.log(mentores.sort())

//splice// ingresa un elemento a la arrya, sacando otros o ninguno. 
console.log(mentores.splice(1,7,))