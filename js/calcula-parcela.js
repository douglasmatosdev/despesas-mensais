var despesas = document.querySelectorAll(".despesa");

for (var i = 0; i < despesas.length; i++) {
    var despesa = despesas[i];

    var tdNomeDespesa = despesa.querySelector(".produto-conta-servico");
    var tdDataDespesa = despesa.querySelector(".data-compra");
    var tdValorDespesa = despesa.querySelector(".valor-compra");
    var tdParcelaDespesa = despesa.querySelector(".prazo-compra");
    
    var nomeDespesa = tdNomeDespesa.textContent;
    var dataDespesa = tdDataDespesa.textContent;
    var valorDespesa = tdValorDespesa.textContent;
    var parcelaDespesa = tdParcelaDespesa.textContent;
    
    var tdValorParcelaDespesa = despesa.querySelector(".valor-parcela");
    tdValorParcelaDespesa.textContent = calculaValorDaParcela(valorDespesa, parcelaDespesa);
    var valorParcela = tdValorParcelaDespesa;

}

function calculaValorDaParcela(valor, parcelas) {
    var quantidadeDeParcelas = valor / parcelas;
    return quantidadeDeParcelas.toFixed(2);
}

