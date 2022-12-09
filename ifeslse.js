// Aulas sobre If, switch, for e while s2
// if é = a "se" e else é = a "caso contrário"

var pais = "Brasil";

if(pais != "Brasil"){
    console.log("Você é estrangeiro");
}else{
    console.log("Você é Brasileiro");
}

var idade = 19;

if(idade < 16){
    console.log("Não vota")
}else if (idade < 18 || idade > 65){
    console.log("Voto opcional")
}else{
    console.log("Voto obrigatório")
}
