const botao = document.getElementById("buscar");
const imagem = document.getElementById("cachorro");

async function buscarCachorro() {
  const resposta = await fetch(
    "https://dog.ceo/api/breed/hound/images/random"
);

  const dados = await resposta.json();

  imagem.src = dados.message;
}

botao.addEventListener("click", buscarCachorro);
