let palindromo = [2, 5, 4, 4, 3, 2]
let metade1 = []
let metade2 = []

for (let i = 2; i > palindromo.length-7; i--) {
    metade1.push(palindromo[i])
}
for (let i = 5; i > palindromo.length-4; i--) {
    metade2.push(palindromo[i])
}

let palindromo2 = metade2.concat(metade1)

if (palindromo2 === palindromo) {
    console.log('deu');
} else {
    console.log('n deu');
}

console.log(palindromo2);
console.log(palindromo);


