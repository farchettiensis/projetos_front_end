function revelarResposta() {
  //Document irá buscar algo no html para trazer para o JS
  //O querySelector irá selecionar um pedaço do HTML e retorná-lo, para salvá-lo dentro de uma var., a partir da id
  var resposta = document.querySelector("#resposta");
  //Manipulação da classe "blur", daí o "classList"
  resposta.classList.toggle("blur");
}

function proximaPergunta(proximaPergunta) {
  var pergunta = document.querySelector("#cardContainer");
  pergunta.innerHTML = "";

  var cardDiv = document.createElement("div");

  cardDiv.classList.add("card", "animate__animated", "animate__backInRight");

  console.log(proximaPergunta);

  //proximaPergunta, abaixo no template, se refere ao parâmetro, não à função
  cardDiv.innerHTML = `
  <div class="card-cabecalho centralizar">
  <h1 class="card-titulo">${proximaPergunta.title}</h1>
</div>
<div id="resposta" class="card-conteudo blur">
  <p>
    ${proximaPergunta.description}
  </p>
</div>`;
  pergunta.appendChild(cardDiv);
}

function buscarInfo() {
  fetch("https://flash.quickstaart.com/random")
    .then(function (resultado) {
      return resultado.json();
    })
    .then(function (resultadoJson) {
      proximaPergunta(resultadoJson);
    });
}

window.addEventListener("load", buscarInfo);
