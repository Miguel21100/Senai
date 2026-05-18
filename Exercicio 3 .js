//Function
function desconto(valor1){
    let preco_inicial= valor1;
    let desconto= 10;

    let resultado= valor1*desconto /100;
    let resultado_final= valor1-resultado;
    return resultado_final
}
console.log (desconto(1000));