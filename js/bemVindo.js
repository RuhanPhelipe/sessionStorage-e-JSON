let botaoVoltar = document.querySelector("#botao-voltar");

botaoVoltar.addEventListener("click", (event) => {

    sessionStorage.clear();

    window.location.href = "index.html";
});

window.onload = () => {

    let msg = document.querySelector("#mensagem");

    let usuario = JSON.parse(sessionStorage.getItem("usuario"));

    msg.innerHTML += usuario.name.trim();
}