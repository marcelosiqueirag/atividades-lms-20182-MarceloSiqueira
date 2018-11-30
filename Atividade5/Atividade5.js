let menuSanduiche = document.querySelector(".menu-sanduiche");
let menuLateral = document.querySelector(".menu-lateral");

menuSanduiche.addEventListener("click", function () {
    menuLateral.classList.toggle("ativo");
    menuAcordeon.classList.toggle("ativo");

});


let itensAcordeon = document.querySelectorAll(".itens");
let conteudoAcordeon = document.querySelectorAll(".acordeon .conteudo");

for (let i = 0; i < itensAcordeon.length; i++) {
    itensAcordeon[i].addEventListener("click", function () {
        if (conteudoAcordeon[i].classList.contains("ativo")) {
            conteudoAcordeon[i].classList.remove("ativo");

            conteudoAcordeon[i].style.maxHeight = "0px";
        } else {
            conteudoAcordeon.forEach(function (e) {
                e.classList.remove("ativo");
                e.style.maxHeight = "0px";
            });
            conteudoAcordeon[i].classList.add("ativo");
            conteudoAcordeon[i].style.maxHeight = conteudoAcordeon[i].scrollHeight + "px";
        }

    });
}
