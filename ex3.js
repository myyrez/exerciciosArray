let numeros = [1,2,3,4,5]
let numerosImpares = []
let somaImpares

for (cont = 0; cont < 5; cont++) {
    if (numeros[cont]%2 != 0) {
        numerosImpares.push(numeros[cont])
    }
}


console.log(numerosImpares);