let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let soma1 = 0
let soma2 = 0

for (let cont = 0; cont < 5; cont++) {
    soma1 = soma1 + array[cont]
}
for (let cont = 4; cont < 10; cont++) {
    soma2 = soma2 + array[cont]
}

let soma3 = soma1 - soma2


console.log(soma3);

// variável vazia é mais fácil somar
// soma1 += array[cont]