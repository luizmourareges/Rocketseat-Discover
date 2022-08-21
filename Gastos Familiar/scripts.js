let family = {
    receitas: [1500, 2300.30, 530.75, 200],
    despesas: [340.67, 138.43, 79.99, 2900, 3000]
}

function sum(array) {
    total = 0;

    for(let value of array){
        total += value
    }

    return total
}

function calculaBalance() {
    const calculateReceitas = sum(family.receitas)
    const calculateDespesas = sum(family.despesas)

    const total = calculateReceitas - calculateDespesas

    const itsOk = total >= 0

    let balanceText = "negativo"
    
    if(itsOk){
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}R$`)
}

calculaBalance()