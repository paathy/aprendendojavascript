// utilizando filter para filtrar valores ou itens do array

var numeros = [1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.filter(item => item % 2 == 0);
console.log(resultado);

var numerosFiltrados = numeros.filter(
    function(valor){
        return valor > 5;
    }

);

console.log(numerosFiltrados);

function buscarvalores(valor){
    return valor < 5;
}

var numerosEncontrados = numeros.filter(buscarvalores);
console.log(numerosEncontrados);

var r1 = numeros.filter((valor) =>{
    return valor > 5;
});

console.log(r1);


var r2 = numeros.filter( valor => valor > 8);

console.log(r2);

var funcionarios = [
    {nome: "Luiz", idade: 22},
    {nome: "Luiza", idade: 23},
    {nome: "Luana", idade: 24},
    {nome: "Lucia", idade: 25},
] 

var pessoasListagem = funcionarios.filter(
    function(valor){
        return valor.nome.length < 5
        
})

console.log(pessoasListagem);