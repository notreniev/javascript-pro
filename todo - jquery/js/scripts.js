var toDoList = []

/**
 * Adiciona tarefas na lista
 */
function adicionarTarefa() {
    var tarefa = $('#nova-tarefa')

    if (tarefa.val() == '') return

    var novaTarefa = {
        name: tarefa.val(),
        complete: false,
        id: Number(new Date())
    }

    toDoList.push(novaTarefa)

    tarefa.val('').focus()

    exibirTarefas()
    atualizarContadores()

    localStorage.setItem('tasks', JSON.stringify(toDoList))
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
    var checkboxes = $('input[type="checkbox"]')
    var totalCompletos = 0
    for (var i = 0; i < checkboxes.length; i++){
        if (checkboxes[i].checked){
            totalCompletos++;
        }
    }
    */

    var totalCompletos = $('input[type="checkbox"]:checked').length

    $('#counter-total').text(toDoList.length)
    $('#counter-finished').text(totalCompletos)
    $('#counter-pending').text(toDoList.length - totalCompletos)
}

function exibirTarefas(listaTarefas) {
    document.querySelector('ul').innerHTML = ''

    if (!listaTarefas) {
        listaTarefas = toDoList
    }

    for (var task of listaTarefas) {
        var li = $(`<li data-id="${task.id}">
        <input type="checkbox" ${task.complete ? 'checked': ''} />
        <span>${task.name}</span>
        <button>Remover</button>
        `)

        $('ul').append(li)
    }

    $('li button').on('click', removerTarefa)
    $('li input').on('click', completarTarefas)
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
            var tarefasCompletas = toDoList.filter(function (tarefa) {
                return tarefa.complete
            })
            console.table(tarefasCompletas)
            exibirTarefas(tarefasCompletas)
            break;
        case 'pendentes':
            var tarefasPendentes = toDoList.filter(function (tarefa) {
                return !tarefa.complete
            })
            console.table(tarefasPendentes)
            exibirTarefas(tarefasPendentes)
            break;
    }

}