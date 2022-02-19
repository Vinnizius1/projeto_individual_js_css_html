const compraVenda2 = document.getElementById("tipo-select");

function validarSelect(event) {
  event.preventDefault();

  let nomeDaMercadoria2 = document.getElementById("tipo_mercadoria").value;
  let compraVendaSelect = document.getElementById("tipo-select").value;
  let valor2 = document.getElementById("tipo_valor").value;

  if (
    compraVendaSelect == undefined ||
    compraVendaSelect == null ||
    compraVendaSelect == "" ||
    nomeDaMercadoria2 == "" ||
    valor2 == ""
  ) {
    alert("Porfavor, preencha os campos!");
    return false;
  } else {
    botaoTransacao();
  }
}
