var toDoList = []

/**
 * Adiciona tarefas na lista
 */
function adicionarTarefa() {
    var tarefa = document.querySelector('#nova-tarefa')

    if (tarefa.value == '') return

    var novaTarefa = {
        name: tarefa.value,
        complete: false,
        id: Number(new Date())
    }

    toDoList.push(novaTarefa)

    tarefa.value = null
    tarefa.focus()

    exibirTarefas()
    atualizarContadores()

    localStorage.setItem('tasks', JSON.stringify(toDoList))
}

function criarLista(task) {
    var checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.onclick = atualizarContadores

    var span = document.createElement('span')
    span.innerText = task

    var botaoRemover = document.createElement('button')
    botaoRemover.innerText = 'Remover'
    botaoRemover.onclick = removerTarefa

    var li = document.createElement('li')
    li.id = toDoList.length
    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(botaoRemover)

    document.querySelector('ul').appendChild(li)
}

/**
 * Remove tarefas da lista
 */
function removerTarefa() {
    var tarefaId = event.target.parentElement.dataset.id
    var posicao = toDoList.findIndex(function (tarefa) {
        return tarefa.id == tarefaId
    })

    toDoList.splice(posicao, 1)
    event.target.parentElement.remove()
    atualizarContadores()

    localStorage.setItem('tasks', JSON.stringify(toDoList))
}

/**
 * Adiciona tarefas no Enter
 */
function pressionarTecla() {
    if (event.keyCode == 13) {
        adicionarTarefa()
    }
}

function atualizarContadores() {
    /*
    var checkboxes = document.querySelectorAll('input[type="checkbox"]')
    var totalCompletos = 0
    for (var i = 0; i < checkboxes.length; i++){
        if (checkboxes[i].checked){
            totalCompletos++;
        }
    }
    */

    var totalCompletos = document.querySelectorAll('input[type="checkbox"]:checked').length

    document.querySelector('#counter-total').innerText = toDoList.length
    document.querySelector('#counter-finished').innerText = totalCompletos
    document.querySelector('#counter-pending').innerText = toDoList.length - totalCompletos
}

function exibirTarefas(listaTarefas) {
    document.querySelector('ul').innerHTML = ''

    if (!listaTarefas) {
        listaTarefas = toDoList
    }

    for (var task of listaTarefas) {
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        if (task.complete == true) {
            checkbox.checked = true
        }
        checkbox.onclick = completarTarefas

        var span = document.createElement('span')
        span.innerText = task.name

        var botaoRemover = document.createElement('button')
        botaoRemover.innerText = 'Remover'
        botaoRemover.onclick = removerTarefa

        var li = document.createElement('li')
        li.dataset.id = task.id
        li.appendChild(checkbox)
        li.appendChild(span)
        li.appendChild(botaoRemover)

        document.querySelector('ul').appendChild(li)
    }
}

function completarTarefas() {
    var tarefaId = event.target.parentElement.dataset.id
    var posicao = toDoList.findIndex(function (tarefa) {
        return tarefa.id == tarefaId
    })

    toDoList[posicao].complete = !toDoList[posicao].complete

    localStorage.setItem('tasks', JSON.stringify(toDoList))
    atualizarContadores()
}

function carregarTarefas() {
    toDoList = JSON.parse(localStorage.getItem('tasks')) || []

    exibirTarefas()
    atualizarContadores()
}

carregarTarefas()

function filtrarPor(filtro) {
    //console.log(filtro)
    switch (filtro) {
        case 'todos':
            exibirTarefas()
            break;
        case 'completos':
            var tarefasCompletas = toDoList.filter(function(tarefa){
                return tarefa.complete
            })
            console.table(tarefasCompletas)
            exibirTarefas(tarefasCompletas)
            break;
        case 'pendentes':
            var tarefasPendentes = toDoList.filter(function(tarefa){
                return !tarefa.complete
            })
            console.table(tarefasPendentes)
            exibirTarefas(tarefasPendentes)
            break;
    }

}