alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = Number.parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute
let tentativas = 1;

//Enquanto o chute não for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);
    //se o chute for igual ao numero secreto
 
            if (chute > numeroSecreto) {
                alert(`O numero é menor que ${chute}`);
            } else {
                alert(`O número secreto é maior que ${chute}`);
            }
           
                tentativas++;
        }
    


//Se o numero de tentativas for maior que 1 exibe tentativas : (Senao) exibe tentativa 
let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);







