const calcularPagamento = v => ({ comissao: v * 0.05, total: v * 0.05 + 1500 });

console.log(calcularPagamento(4267));
