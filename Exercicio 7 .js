// Function
function calcularEstoqueRestante(quantidadeVendida){
    const estoqueInicial = 120;
    
    let estoqueRestante = estoqueInicial - quantidadeVendida;

    return `Estoque Inicial: ${estoqueInicial} unidades | Quantidade Vendida: ${quantidadeVendida} unidades | Estoque Restante: ${estoqueRestante} unidades`;
}

console.log(calcularEstoqueRestante(35));