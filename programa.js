function calcularTotal(precoUnitario, quantidade) {
    return precoUnitario * quantidade;
}

function aplicarDesconto(valorTotal) {
    if (valorTotal > 100) {
        return valorTotal * 0.9; // aplica 10% de desconto
    } else {
        return valorTotal; // sem desconto
    }
}

function exibirResumo(precoUnitario, quantidade) {
    let valorTotal = calcularTotal(precoUnitario, quantidade);
    let valorComDesconto = aplicarDesconto(valorTotal);

    console.log("Resumo da Compra:");
    console.log("Quantidade: " + quantidade);
    console.log("Preço unitário: R$ " + precoUnitario.toFixed(2));
    console.log("Valor total (sem desconto): R$ " + valorTotal.toFixed(2));
    console.log("Valor final (com desconto): R$ " + valorComDesconto.toFixed(2));
}

// --- Programa principal ---
let preco = parseFloat(prompt("Digite o preço unitário do produto:"));
let qtd = parseInt(prompt("Digite a quantidade comprada:"));

exibirResumo(preco, qtd);

