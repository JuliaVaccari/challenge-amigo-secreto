let listaDeNomes = [];

function exibirListaDeNomes() {
    let listaExibida = document.getElementById('listaAmigos');
    listaExibida.innerHTML = "";

    for (let nome of listaDeNomes) {
        let item = document.createElement('li');
        item.textContent = nome; 
        listaExibida.appendChild(item); 
    }
}

function adicionarAmigo(){
    let nome = document.getElementById('amigo').value;
    if (nome == '') {
        alert('Por favor, insira um nome.');
        return;
    }
    if (listaDeNomes.includes(nome)){
        alert('Esse nome já foi adicionado na lista')
    }
    else{
        listaDeNomes.push(nome);
        exibirListaDeNomes();
    }
    console.log(listaDeNomes);
    clean()
}

function clean(){
    nome = document.getElementById('amigo');
    nome.value = '';
}

function sortearAmigo(){
    if (listaDeNomes.length == 0){
        alert('Nenhum nome foi adicionado')
    }
    else {
        let indiceAleatorio = Math.floor(Math.random() * listaDeNomes.length);
        let amigoSorteado = listaDeNomes[indiceAleatorio]
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo sorteado é: ${amigoSorteado}`
    }
}