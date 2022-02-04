let adicionarFrutas = ['kiwi', 'maçã', 'banana', 'maçã', 'mamão', 'cereja',]
let salada = []

for (let cont = 0; cont < adicionarFrutas.length; cont++) {
    if (adicionarFrutas[cont] != 'cereja') {
        console.log(adicionarFrutas[cont]);
        console.log('Qual outra fruta adicionar?');
        salada.push(adicionarFrutas[cont])
    } else {
        console.log(adicionarFrutas[cont]);
        console.log('Sua salada está pronta!');
        salada.push(adicionarFrutas[cont])
    }
}
console.log(salada.sort());


