let numero = [9,0,3,9,3,0,9]

function checarPalindromo(numero) {
    for (let i = 0; i < numero.length; i++) {
        if (numero[i] !== numero[numero.length-1-i]) {
            console.log(`O número ${numero.join('')} não é um palíndromo :(`);
            return
        } 
    } 
    console.log(`O número ${numero.join('')} é um palíndromo! :)`);
}

checarPalindromo(numero)
