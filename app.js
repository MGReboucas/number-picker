let numeroAleatorio = gerarNumeroAleatorio();

function sortear(){
     let quantidade = document.getElementById('quantidade').value;
     let de = document.getElementById('de').value;
     let ate = document.getElementById('ate').value;

     alert(`A quantidade é ${quantidade}, nos valores do numero ${de} até o numero ${ate}`)
}

function gerarNumeroAleatorio(){
     return parseInt(Math.random() * numeroMaximo + 1);
}