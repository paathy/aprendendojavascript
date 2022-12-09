var valores = [8,1,7,2,9];

console.log(valores [3]);


for (var pos = 0 ; pos < valores.length; pos++){
    console.log("Posicao: " + pos + " Valor: " + valores[pos]);
}

var carros = [];
carros[0] = "rosa";
carros[1] = "preto";
carros[2] = "vermelho";


// calcular a média de tdos os números de um array

var soma = 0;
for (var pos = 0 ; pos < valores.length; pos++){
    soma += valores[pos];
}

var media = soma/valores.length;

console.log(media);
