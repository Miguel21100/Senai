// Function
function calcularParcelas(valorTotal){
    const numeroParcelas = 5;

    let valorParcela = valorTotal / numeroParcelas;

    return `Valor Total da Compra: R$ ${valorTotal.toFixed(2)} | Número de Parcelas: ${numeroParcelas}x | Valor de Cada Parcela: R$ ${valorParcela.toFixed(2)}`;
}

console.log(calcularParcelas(1500));