var pessoa = {
    nome: 'Pathy',
    sobrenome: 'Lima'
};

// aqui vai buscar o nome
console.log(pessoa['nome']);

var pessoa1 = new Object();
pessoa1.nome = "Vitória"
pessoa1.sobrenome = "Oliveira"
pessoa1.falarsobrenome = function(){
    console.log("Sobrenome é: " + this.nome);
}


// aqui vai buscar o sobrenome
pessoa1.falarsobrenome();


function criarPessoa(nome, sobrenome){
    return{nome,sobrenome};
}

var p1 = criarPessoa("maju", "almeida");
var p2 = criarPessoa("ana", "luiza");

//aqui vai buscar o nome e sobrenome do 1 objeto
console.log(p1);