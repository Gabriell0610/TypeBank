function depositar () {
    // pegar o valor do saldo atual e atribuir na variável saldoAtual
    const saldoAtual = Number(document.querySelector('#saldo').innerHTML)
    console.log(saldoAtual)

    //Pegar o valor do deposito e atribuir na variavel valorDeposito
    const valorDeposito = Number(document.querySelector('#valor').value)
    console.log(valorDeposito)
    
    //Somar o valor do saldoAtual com o valorDeposito e atribuir na variável saldoFinal 
    const saldoFinal = saldoAtual + valorDeposito 
    console.log(saldoFinal)

    //Substituir saldoAtual pelo saldoFinal
    document.querySelector('#saldo').innerHTML = saldoFinal.toFixed(2)


}

function sacar () {
    const saldoAtual = Number(document.querySelector('#saldo').innerHTML)
    console.log(saldoAtual)

    const valorSaque = Number(document.querySelector('#valor').value)
    console.log(valorSaque)

    const saqueFinal = saldoAtual - valorSaque;
    console.log(saqueFinal)

    if(saldoAtual < valorSaque){
        alert("O saldo não pode ser menor que o valor de saque")
        return;
    }
    
    document.querySelector('#saldo').innerHTML = saqueFinal.toFixed(2)
    
}

function juros () {
    //A cada 5s o saldo da conta vai aumentar em 10%
    setInterval(() => {
        //Pegar o valor do deposito e atribuir na variavel saldoAtual
        const saldoAtual = Number(document.querySelector('#saldo').innerHTML)
        console.log(saldoAtual)

        //Acrescentar 10% do valor no saldoAtual e atribuir na variável saldoFinal
        const saldoFinal = saldoAtual + (saldoAtual * 0.1)
        console.log(saldoAtual)

         //Substituir saldoAtual pelo saldoFinal
        document.querySelector('#saldo').innerHTML = saldoFinal.toFixed(2)

    }, 5000)
}

juros()