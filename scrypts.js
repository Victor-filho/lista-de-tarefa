/*
lista de tarefas
[x] saber quado o botao foi clicado
[x] pegar o texto dentro do input
[x] colocar esse texto na tela
[ ] deletar a terefa da tela
*/

function adicionarTarefa() {
    let valorDoinput = document.querySelector('input').value

    let li = document.createElement('li')
    li.innerHTML = valorDoinput + '<span onclick="deletarTarefa(this)">❌</span>'

    document.querySelector('ul').appendChild(li)

    document.querySelector('input').value =''
}

function deletarTarefa(li){
     li.parentElement.remove()
}