const botao = document.querySelector(".btn-pele");
console.log(botao);

const opcaoPele = document.querySelector(".btn-pele .tipos");
console.log(opcaoPele);

botao.addEventListener("click", () => {
    opcaoPele.classList.toggle("ativo");
});