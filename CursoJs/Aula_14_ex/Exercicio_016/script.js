function contar() {
    var inicio = document.getElementById('txtInicio')
    var fim = document.getElementById('txtFim')
    var passo = document.getElementById('txtPasso')
    var res = document.getElementById('result')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('Erro faltam dados')
        res.innerHTML = 'impossivel conrtar'
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p < 1) {
            alert('Passo invalido passo considerado como 1')
            p = 1;
        }
        if (i < f) {
             for (let c = i; c <= f ;c += p) {
                 res.innerHTML += `${c} \u{1F92A}`
        }
        } else {
            for (let c = i; c >= f ; c -= p) {
                res.innerHTML += `${c} \u{1F92A}`
            }
        }
        res.innerHTML += `\u{270C}`
    }
}