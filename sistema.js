let numeroDeAlunos = 10;
// exemplo for
for (let contador = 0; contador <= numeroDeAlunos; contador++) {
    // console.log(contador)
    
if(contador == 0){
    console.log("O número atual é zero")
}else if(contador % 2 == 0){
    console.log("O número " + contador + " é Par")
}else{ 
    console.log(`O numero ${contador} é Impar`)
}
}

// exemplo while
let contador = 0;

while(contador <= numeroDeAlunos) {
    
if(contador == 0){
    console.log("O número atual é zero")
}else if(contador % 2 == 0){
    console.log("O número " + contador + " é Par")
}else{ 
    console.log(`O numero ${contador} é Impar`)
}
contador++;
}

// exemplo for of
let nomeDeAluno = ["Marcel", "Franklin", "Rita", "Afrânio"]

for (let nome of nomeDeAluno)
console.log(`Esta pessoa se chama ${nome}`)