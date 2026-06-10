// Function
function calcularMediaVendas(listaDeVendas){
    let total = listaDeVendas[0] + listaDeVendas[1] + listaDeVendas[2] + listaDeVendas[3] + listaDeVendas[4] + listaDeVendas[5] + listaDeVendas[6];
    
    let media = total / 7;

    return `Total vendido na semana: R$ ${total} | Média de vendas por dia: R$ ${media.toFixed(2)}`;
}


console.log(calcularMediaVendas([1000, 1500, 1200, 1300, 2000, 2500, 900]));