// Function
function calcularAumentoPreco(precoAtual){
  let valorAumento = precoAtual * 0.15;
  
  let novoPreco = precoAtual + valorAumento;

  return `Preço Original: R$ ${precoAtual.toFixed(2)} | Valor do Aumento (15%): R$ ${valorAumento.toFixed(2)} | Novo Preço Final: R$ ${novoPreco.toFixed(2)}`;
}

console.log(calcularAumentoPreco(200));