var toDoList = []

function adicionarTarefa() {
    var tarefa = document.querySelector('#nova-tarefa')

    if (tarefa.value == '') return
    
    var checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    
    var span = document.createElement('span')
    span.innerText = tarefa.value
    
    var botaoRemover = document.createElement('button')
    botaoRemover.innerText = 'Remover'
    botaoRemover.onclick = removerTarefa
    
    var li = document.createElement('li')
    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(botaoRemover)

    document.querySelector('ul').appendChild(li)
    toDoList.push(tarefa.value)

    tarefa.value = null
    tarefa.focus()
}

function removerTarefa(){
    var posicao = event.target.parentElement.id
    toDoList.splice(posicao, 1)
    event.target.parentElement.remove()
}

function pressionarTecla(){
    if (event.keyCode == 13){
        adicionarTarefa()
    }
}