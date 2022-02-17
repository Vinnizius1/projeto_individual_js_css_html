const compraVenda = document.getElementById("tipo-select");
const nomeDaMercadoria = document.querySelector(".input-mercadoria input");
const botao = document.querySelector(".input_botao");
const valor = document.querySelector(".input-valor input");
const frame = document.querySelector(".frame");
const extratos = document.querySelector(".extratos");
const extrato_mercadoria = document.querySelector(".extrato-mercadoria");
const extrato_valor = document.querySelector(".extrato-valor");

let valorTotal = document.querySelector(".total-valor");
let lucroOuPrejuizo = document.querySelector(".lucro");

/* 
Variáveis GLOBAIS 
*/
// Variável do conteúdo que será passado pro DOM:
let mercadoria;

// Variável do valor final, ou seja, após a soma de cada valor passado no input "Valor" pelo usuário:
let valorFinal;

// Arrays criados para armazenarem cada "valor.value" inserido e depois ser usado numa função que somará esses valores:
let valoresAdicionados = [];
let valoresAdicionados2 = [];

// Variável que receberá os arrays para se utilizar o método Reduce() na soma dos valores:
let spread;

// Variável onde os dados serão armazenados:
let mercadorias = JSON.parse(localStorage.getItem("lista")) || [];

// Método forEach() para persistir na tela os dados cadastrados e então salvos no localStorage:
mercadorias.forEach((mercadoria) => {
  frame.insertAdjacentHTML("afterend", mercadoria);
});

/* 
FUNÇÃO onclick() no botão "Adicionar transação": 
*/
function botaoTransacao(event) {
  event.preventDefault();

  // Converte a escolha do input "Compra e Venda" para o sinal "+" ou "-":
  let maisOuMenos = compraVenda.value;
  maisOuMenos == 0 ? (maisOuMenos = "-") : (maisOuMenos = "+");

  // Condição para direcionar o "if/else":
  let existeLocalstorage = localStorage.getItem("lista");

  if (existeLocalstorage) {
    valoresAdicionados2.push(maisOuMenos + valor.value);

    spread = [...valoresAdicionados, ...valoresAdicionados2];

    valoresAdicionados = valoresAdicionados.map(Number);
    valoresAdicionados2 = valoresAdicionados2.map(Number);

    spread = [...valoresAdicionados, ...valoresAdicionados2];

    valorFinal = spread.reduce((total, individual) => total + individual);

    /* 
    Cria a variável que substituirá a do 1º valor passado no input "Valor" 
    */
    let novoTotal = document.createElement("p");
    novoTotal.className = "total-valor";
    // Muda o HTML:
    novoTotal.innerHTML = `R$ ${valorFinal}`;
    // selecionar o elemento que quero trocar
    let antigoTotal = document.querySelector(".total-valor");
    // selecionar o pai do "antigoTotal":
    let pai = antigoTotal.parentNode;
    // trocar os elementos:
    pai.replaceChild(novoTotal, antigoTotal);

    /* 
    Selecionar novamente o caminho `<p class="lucro">${lucroOuPrejuizo}</p>` 
    DÚVIDA: Por que isso aconteceu? Mudou de referência???
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
        <p class="primeiro-valor">${valor.value}</p>
    </div>

    <hr class="hr-main4" />
    `;

    // Insere o código de mercadoria 'dentro do elemento "<div>frame</div>", antes de seu primeiro filho (childNode)':
    frame.insertAdjacentHTML("afterbegin", mercadoria);

    // Zera os campos após o cadastro do produto:
    nomeDaMercadoria.value = "";
    valor.value = "";
    compraVenda.focus();
  } else {
    // Atribui o valor inserido no input "Valor" à variável "valorTotal" apenas no 1º cadastro de transação:
    valorTotal = valor;

    // Adiciona ao array o sinal de "+" ou "-" e soma com o valor passado no input "valor", que é igual à variável "valorTotal":
    valoresAdicionados.push(maisOuMenos + valorTotal.value);

    // Saber se a mensagem será "[Lucro]" ou "[Despesa]":
    maisOuMenos == "-"
      ? (lucroOuPrejuizo = "[Despesa]")
      : (lucroOuPrejuizo = "[Lucro]");

    mercadoria = `
    <div class="primeiro">
        <p class="primeiro-sinal">${maisOuMenos}</p>
        <p class="primeiro-lorem">${nomeDaMercadoria.value}</p>      
        <p class="primeiro-valor">${valor.value}</p>
    </div>

    <hr class="hr-main4" />
    <hr class="hr-main5" />

    <div class="totais">
        <p class="total">Total</p>
        <p class="total-valor">R$ ${maisOuMenos} ${valorTotal.value}</p>
    </div>

    <p class="lucro">${lucroOuPrejuizo}</p>
    `;

    // Adiciona pela 1ª vez o conteúdo de mercadoria 'dentro do elemento "<div>frame</div>", após seu último filho (childNode)':
    frame.insertAdjacentHTML("beforeend", mercadoria);

    // Zera os campos após o cadastro do produto:
    nomeDaMercadoria.value = "";
    valor.value = "";
    compraVenda.focus();
  }

  // Adição de cada "mercadoria" no array "mercadorias", que por sua vez será enviado para o localStorage via função setItem():
  mercadorias.push(mercadoria);

  // Função para salvar no localStorage:
  salvaNoLocalStorage();
}

/*
FUNÇÃO setItem() do localStorage: 
*/
function salvaNoLocalStorage() {
  localStorage.setItem("lista", JSON.stringify(mercadorias));
}

/* 
FUNÇÃO limparTela(): 
*/
function limpaTela() {
  // Salva no localStorage:
  salvaNoLocalStorage();
}

// const mensagemExtrato = document.createElement("p");
// mensagemExtrato.innerHTML = "Nenhuma transação cadastrada.";
// mensagemExtrato.style.margin = "20px";
