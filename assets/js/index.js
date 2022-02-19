const compraVenda = document.getElementById("tipo-select");
const nomeDaMercadoria = document.querySelector(".input-mercadoria input");
const botao = document.querySelector(".input_botao");
const valor = document.querySelector(".input-valor input");
const extratos = document.querySelector(".extratos");
const extrato_mercadoria = document.querySelector(".extrato-mercadoria");
const extrato_valor = document.querySelector(".extrato-valor");

// "frame" é a div no index.html que recebe a string dos dados/cadastros:
let frame = document.querySelector(".frame");

// Recebe o valor dinamicamente e depois diz se teve lucro ou despesa?
let valorTotal = document.querySelector(".total-valor");
let lucroOuPrejuizo = document.querySelector(".lucro");

// "account" é a div pai de "frame":
const account = document.querySelector(".account");
const accountUltimoFilhoFrame = account.lastElementChild;

/* Variáveis GLOBAIS */
// Receberá o conteúdo que será passado pro DOM:
let mercadoria;

// Soma cada valor passado no input "Valor" pelo usuário:
let valorFinal;

// Arrays criados para armazenarem cada "valor.value" inserido e depois usados numa função que somará os valores:
let valoresAdicionados = [];
let valoresAdicionados2 = [];

// Receberá os arrays e depois utilizará o método Reduce() pra somar valores:
let spread;

// Onde os dados serão armazenados já parseados:
let mercadorias = JSON.parse(localStorage.getItem("lista")) || [];

// Método TOP forEach() para persistir na tela os dados cadastrados:
mercadorias.forEach((mercadoria) => {
  frame.insertAdjacentHTML("afterend", mercadoria);
});

/* FUNÇÃO onclick() no botão "Adicionar transação" */
function botaoTransacao() {
  // Converte a escolha do input "Compra e Venda" para o sinal "+" ou "-":
  let maisOuMenos = compraVenda.value;
  maisOuMenos == 0 ? (maisOuMenos = "-") : (maisOuMenos = "+");

  // Condição para direcionar o seguinte "if/else":
  let existeLocalstorage = localStorage.getItem("lista");

  if (existeLocalstorage) {
    valoresAdicionados2.push(maisOuMenos + valor.value);

    spread = [...valoresAdicionados, ...valoresAdicionados2];

    valoresAdicionados = valoresAdicionados.map(Number);
    valoresAdicionados2 = valoresAdicionados2.map(Number);

    spread = [...valoresAdicionados, ...valoresAdicionados2];

    valorFinal = spread.reduce((total, individual) => total + individual);

    // Cria a variável que substituirá a do 1º valor passado no input "Valor":
    let novoTotal = document.createElement("p");
    novoTotal.className = "total-valor";
    // Muda o HTML:
    novoTotal.innerHTML = `R$ ${valorFinal}`;
    // seleciona o elemento que quero trocar:
    let antigoTotal = document.querySelector(".total-valor");
    // Seleciona o pai do "antigoTotal":
    let pai = antigoTotal.parentNode;
    // Troca os elementos:
    pai.replaceChild(novoTotal, antigoTotal);

    /* 
    Precisei selecionar novamente o caminho `<p class="lucro">${lucroOuPrejuizo}</p>` uai!
    DÚVIDA: Por que isso aconteceu? Mudou a REFERÊNCIA???
    */
    let lucroOuPrejuizo2 = document.querySelector(".frame .lucro");
    // Muda o HTML de acordo com esta condição ternária:
    Math.sign(valorFinal) == -1
      ? (lucroOuPrejuizo2.textContent = "[Despesa]")
      : (lucroOuPrejuizo2.textContent = "[Lucro]");

    mercadoria = `
    <div class="primeiro">
        <p class="primeiro-sinal">${maisOuMenos}</p>
        <p class="primeiro-lorem">${nomeDaMercadoria.value}</p>      
        <p class="primeiro-valor">R$ ${valor.value}</p>
    </div>

    <hr class="hr-main4" />
    `;

    // Insere o código de mercadoria dentro do elemento "<div>frame</div>", antes de seu primeiro filho (childNode):
    frame.insertAdjacentHTML("afterbegin", mercadoria);

    // Zera os campos após o cadastro do produto:
    nomeDaMercadoria.value = "";
    valor.value = "";
    compraVenda.focus();
  } else {
    // Atribui o valor inserido no input "Valor" à variável "valorTotal" apenas no 1º cadastro de transação:
    valorTotal = valor;

    // Adiciona ao array o sinal de "+" ou "-" e soma com o valor passado no input "valor":
    valoresAdicionados.push(maisOuMenos + valorTotal.value);

    // Saber se a mensagem será "[Lucro]" ou "[Despesa]":
    maisOuMenos == "-"
      ? (lucroOuPrejuizo = "[Despesa]")
      : (lucroOuPrejuizo = "[Lucro]");

    mercadoria = `
    <div class="primeiro">
        <p class="primeiro-sinal">${maisOuMenos}</p>
        <p class="primeiro-lorem">${nomeDaMercadoria.value}</p>      
        <p class="primeiro-valor">R$ ${valor.value}</p>
    </div>

    <hr class="hr-main4" />
    <hr class="hr-main5" />

    <div class="totais">
        <p class="total">Total</p>
        <p class="total-valor">R$ ${maisOuMenos} ${valorTotal.value}</p>
    </div>

    <p class="lucro">${lucroOuPrejuizo}</p>
    `;

    // Adiciona pela 1ª vez o conteúdo de mercadoria dentro do elemento "<div>frame</div>", após seu último filho (childNode):
    frame.insertAdjacentHTML("beforeend", mercadoria);

    // Zera os campos após o cadastro do produto:
    nomeDaMercadoria.value = "";
    valor.value = "";
    compraVenda.focus();
  }
  // Adição de cada "mercadoria" no array "mercadorias", que por sua vez será enviado para o localStorage via função setItem():
  mercadorias.push(mercadoria);

  salvaNoLocalStorage();
  limpaLocalStorage();
}

function salvaNoLocalStorage() {
  localStorage.setItem("lista", JSON.stringify(mercadorias));
}

function limpaLocalStorage() {
  const limparDados = document.querySelector(".limpar-dados");
  // limpa o localStorage e a DOM:
  limparDados.addEventListener("click", function () {
    localStorage.clear();
    accountUltimoFilhoFrame.remove();
    location.reload();
  });
  // Zera o campo após a função limpaLocalStorage() e volta o focus:
  compraVenda.value = "";
}

// const mensagemExtrato = document.createElement("p");
// mensagemExtrato.innerHTML = "Nenhuma transação cadastrada.";
// mensagemExtrato.style.margin = "20px";
