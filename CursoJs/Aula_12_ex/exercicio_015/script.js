function verificar() {
    var data = new Date()
    var ano = data.getFullYear
    var fAno = document.getElementById('txtAno')
    var res = document.getElementById('res')
    alert(ano)
    if (fAno.nodeValue.length == 0 || Number(fAno.value) > ano) {
        alert('verifique os dados e tente novamente')
    }
}