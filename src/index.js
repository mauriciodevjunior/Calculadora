// function insert(num){
//     var numero = document.getElementById("resultado").innerHTML;
//     document.getElementById('resultado').innerHTML = numero + num;
// }

// function clean(){
//     document.getElementById('resultado').innerHTML = "";
// }

// function back(){
//     var resultado = document.getElementById("resultado").innerHTML;
//     document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
// }

// function calcular(){
//     var resultado = document.getElementById('resultado').innerHTML;
//     if (resultado)
//         {
//             document.getElementById('resultado').innerHTML = eval(resultado);
//         } else {
//             document.getElementById("resultado").innerHTML = "Nada para calcular";
//         }
// }

// Função para inserir números e operadores na tela da calculadora
function insert(num) {
    var numero = document.getElementById("resultado").innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

// Função para limpar a tela da calculadora
function clean() {
    document.getElementById('resultado').innerHTML = "";
}

// Função para apagar o último caractere inserido
function back() {
    var resultado = document.getElementById("resultado").innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

// Função para calcular a expressão inserida e exibir o resultado
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        try {
            document.getElementById('resultado').innerHTML = eval(resultado);
        } catch (e) {
            document.getElementById("resultado").innerHTML = "Erro";
        }
    } else {
        document.getElementById("resultado").innerHTML = "Nada para calcular";
    }
}
