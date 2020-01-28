function sejaBemVindo(){
    var campoNome = document.getElementById("nome")
    alert('Seja bem-vindo, ' + campoNome.value)
}

function sejaBemVindo2(){
    var campoNome = document.querySelector("#nome2")
    alert('Seja bem-vindo, ' + campoNome.value)
}

function sejaBemVindo3(){
    var campoNome = document.querySelector("#nome3")
    alert('Seja bem-vindo, ' + campoNome.value)
}

document.querySelector("#btn3").onclick = sejaBemVindo3

function sejaBemVindo4(){
    var campoNome = document.querySelector("#nome4")
    alert('Seja bem-vindo, ' + campoNome.value)
}

var btn4 = document.querySelector("#btn4")
btn4.addEventListener('click', sejaBemVindo4)