let numeros = [1,2,3,4,5,7,9,11]
let numerosImpares = []
let somaImpares = 0

for (cont = 0; cont < numeros.length; cont++) {
    if (numeros[cont]%2 != 0) {
        numerosImpares.push(numeros[cont])
        somaImpares += numeros[cont]
    }
}

console.log(numerosImpares);
console.log(somaImpares);