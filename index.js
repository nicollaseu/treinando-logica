// FUNÇÃO - repetir um algoritmo sempre que necessário

// criando a função
// function nomeDaFunção
// Estrutura padrão: function nomeDaFunção() {}
// Função com parâmetro: function nomeDaFunção(nomeDoParametro) {}
// Parâmetro com valor padrão: function
function olaMundo (nome = "Usuario") {
    console.log('Seja Bem Vindo!' + nome);
}

// executando a função
olaMundo("Nicollas");

olaMundo("Laryssa");

olaMundo("Diana");

olaMundo();

// Exercício 8
function tabuada(num){
    console.log("aqui é pra ser uma tabuada\n")
    for(let i=1; i<=10; i++){
        console.log(i * num)
    }
}
tabuada(3);