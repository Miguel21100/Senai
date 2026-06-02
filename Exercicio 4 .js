g// Function
function calcularemprestimo(meses){
    let juros= 50*meses; 
    const emprestimo= 1000;

    let total=emprestimo+juros
    return total;
}

console.log (calcularemprestimo(8));