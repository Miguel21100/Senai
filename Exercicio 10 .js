// Function
function calcularJurosCompostos(valorInicial, meses){
    const taxa = 0.02; 
    
    let valorFinal = valorInicial * Math.pow(1 + taxa, meses);

    return `Valor Inicial: R$ ${valorInicial.toFixed(2)} | Tempo de Investimento: ${meses} meses | Valor Final Obtido: R$ ${valorFinal.toFixed(2)}`;
}

console.log(calcularJurosCompostos(1000, 12));