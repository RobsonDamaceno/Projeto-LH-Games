//efeito do botão voltar ao Topo
function topo() {
    window.scrollTo(
        {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
    )
}
//Validação de Login

function login() {
    const logado = 0;
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if (usuario === 'admin' && senha === '123456') {
        window.location = "index.html";
        logado = 1;
    }

    if (logado === 0) {
        alert("Acesso Negado. Dados incorretos");
    }
}
//Ativar alert no botão cadastrar
function cadastro() {
    alert("cadastrado com Susseso")
    window.location.href = "idex.html"

}