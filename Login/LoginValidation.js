const usuario = document.getElementById("usuario")
const senha = document.getElementById("senha")
const para = document.getElementById("para")
const botao = document.getElementById("botao")

botao.addEventListener("click", () =>{
    if (usuario.value == "admin" && senha.value == '1234'){
        para.innerText = "Login Feito!"
    } else{
        para.innerText = "Usuário ou senha incorretos!"
    }
})