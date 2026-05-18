//function
function calculodelucro(valor1, valor2){
    let quantidade_comprada= valor1;
    let quantidade_vendida= valor2;
    const preco_de_venda=40;
    const preco_de_compra=25;

    let custo= quantidade_comprada*preco_de_compra;
    let ganho= quantidade_vendida*preco_de_venda;
    let lucro= ganho-custo;
    return lucro;
}
console.log (calculodelucro(127, 125));