const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos')
const projetosInativos = document.querySelectorAll(".projeto:not(.ativo)")

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover")
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add("ativo")
    })
}

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos()
    esconderBotao()
})