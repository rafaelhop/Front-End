function tabuada() {
    let num = document.getElementById('txtN')
    let tabuada = document.getElementById('selTab')
    if (num.value.length == 0) {
        alert('favor informar um numero')
    } else {
        let n = Number(num.value)
        tabuada.innerHTML =''
        for (let i = 0 ; i<= 10; i++) {
            let item = document.createElement('option')
            item.text = `${n} X ${i} = ${n * i}`
            tabuada.appendChild(item)

        }
    }
    
}