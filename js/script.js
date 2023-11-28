//efeito do botão voltar ao Topo

function Topo (){
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior: "smooth"
        }
    )
}
//Validação de Login
function Login (){
    var logado = 0;
    var usuario =document.getElementsByName("usuario").value;
    usuario = usuario.tolowerCase();
    var senha = document.getElementById("senha").value;
    senha = senha.tolowerCase();
    if(usuario == "admin" && senha == "123456"){
        window.location = "index.html";
        logado = 1;
    }
    if (logado == 0){
        alert ("Acesso Negado. Dados incorretos");
    }
}

//Ativar alert no botão cadastrar
