// Aula de Switch avalia uma expressão, combinando o valor da expressão, combinando o valor da expressão 
// para um cláusula case e executa as intruções associadas ao case. Exemplos a seguir:

var diaSem = 1 ;

switch(diaSem){
    case 1:
    console.log("Domingo.");
    break;

    case 2:
    console.log("Segunda.");
    break;

    case 3:
    console.log("Terça.");
    break;
    default:
        console.log("Desculpe não encontramos este dia disponível");
}

console.log("Gostaria de verificar mais algum dia?");