// Acessibilidade
const botaoAcessibilidade = document.getElementById("botao-acessibilidade");
const opcoesAcessibilidade = document.getElementById("opcoes-acessibilidade");

botaoAcessibilidade.addEventListener("click", () => {
    const expanded = botaoAcessibilidade.getAttribute("aria-expanded") === "true" || false;
    botaoAcessibilidade.setAttribute("aria-expanded", !expanded);
    opcoesAcessibilidade.classList.toggle("apresenta-lista");
});

// Aumentar fonte
document.getElementById("aumentar-fonte").addEventListener("click", () => {
    document.body.style.fontSize = "1.2rem";
});

// Diminuir fonte
document.getElementById("diminuir-fonte").addEventListener("click", () => {
    document.body.style.fontSize = "0.9rem";
});

// Alternar contraste
document.getElementById("alterna-contraste").addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
});
