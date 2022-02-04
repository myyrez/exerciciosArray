let doces = ['sorvete', 'chocolate', 'tortinha']
let salgados = ['lámen', 'strogonoff', 'omelete']

function intercalar(doces, salgados) {
    var naBarriga = []
    var total = 0
    if (doces.length > salgados.length) {
        total = doces.length
    } else {
        total = salgados.length
    }
    for (cont = 0; cont < total; cont++) {
        if (doces[cont]) {
            naBarriga.push(doces[cont])
        }
        if (salgados[cont]) {
            naBarriga.push(salgados[cont])
        }
    }
    console.log(`doces: ${doces.join(', ')}`);
    console.log(`salgados: ${salgados.join(', ')}`);
    console.log(`misturinha: ${naBarriga.join(', ')}`);
}
intercalar(doces, salgados)