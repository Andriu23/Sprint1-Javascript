/*//console.log(beers)

//beers.forEach((beer)=> console.log(beer.name,beer.abv));

console.log("------FOR EACH A MANO--------")

const fn = (beer, indice) => {
    console.log(`El nombre de la cerveza es ${beer.name} y su nivel de alcohol es de ${beer.abv} y su indice es ${indice}`);
};
 
const forEach = (beers, fn) => {
    for (let i = 0; i < beers.length; i++) {
        fn(beers[i],i)
    }
};
forEach(beers, fn)

console.log("--------FOR EACH--------")

beers.forEach((beer, indice) => 
    console.log(`El nombre de la cerveza es ${beer.name} y su nivel etilico es ${beer.abv} su indice es ${indice}`)
)

//FILTER//
const etilico = beers.filter(beer => beer.abv <= 5)
console.log(etilico)*/


// 1. 
function filtrarCerveza(cervezas, alcohol) {
    return cervezas.filter((cerveza) => cerveza.abv < alcohol)
        .map((cerveza) => (
            {
                nombre: cerveza.name,
                alcohol: cerveza.abv,
                amargor: cerveza.ibu
            }
        ))
}

    console.log(`cantidad de cervezas ${beers.length}`) // cantidad de cervezas
    const cervezasFiltradas = filtrarCerveza(beers, 5) // cantidad de cervezas que no exceden el nivel de alcohol 
    console.log(`cantidad de cervezas que no exceden el nivel etilico de alcohol a 5 son ${cervezasFiltradas.length}`) // cantidad de cervezas que no exceden el nivel 5 de alcohol
    console.table(cervezasFiltradas)

// 2.
function lasMasAlcoholicas(cervezas) {
    return cervezas.sort((cerveza1, cerveza2) => cerveza2.abv - cerveza1.abv)
        .slice(0, 10)
}

console.table(lasMasAlcoholicas(beers))
// 3.
function lasMenosAmargas(cervezas) {
    return cervezas.sort((cerveza1, cerveza2) => cerveza1.ibu - cerveza2.ibu)
        .slice(0, 10)
}
console.table(lasMenosAmargas(beers))

// 4.
function ordenarYTruncar(cervezas, propiedad, ordenarAscendentemente) {
    return cervezas.sort((cerveza1, cerveza2) => {
        let cmp = 0
        if (cerveza1[propiedad] < cerveza2[propiedad]) {
            cmp = -1
        } else if (cerveza1[propiedad] > cerveza2[propiedad]) {
            cmp = 1
        } else {
            cmp = 0
        }
        if (!ordenarAscendentemente) {
            cmp = cmp * -1
        }
        return cmp
    }).slice(0, 10)
}
console.table(ordenarYTruncar(beers, "name", true))
console.table(ordenarYTruncar(beers, "id", false))

// 5.
function renderizar(cervezas) {
    const cuerpoDeTabla = document.getElementById("contenido")
    contenido = cervezas.map((cerveza) => `<td>${cerveza.name}</td> <td>${cerveza.abv}</td> <td>${cerveza.ibu}</td>`)
        .reduce((body, fila) => body + `<tr>${fila}</tr>\n`, "")

    cuerpoDeTabla.innerHTML = contenido  
    console.log(cuerpoDeTabla.innerHTML)
}
renderizar(beers)
