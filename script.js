// Função para atualizar o display
function appendValue(value) {
    document.getElementById("display").value += value;
}

// Função para limpar o display
function clearDisplay() {
    document.getElementById("display").value = "";
}

// Função para calcular a expressão
function calculate() {
    const expression = document.getElementById("display").value;
    try {
        const result = eval(expression); // Calcula a expressão
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = 'Erro';
    }
}

// Função para calcular potência (x^y)
function calculatePower() {
    const base = prompt("Digite a base (x):");
    const exponent = prompt("Digite o expoente (y):");
    if (base !== null && exponent !== null) {
        const result = Math.pow(parseFloat(base), parseFloat(exponent));
        document.getElementById("display").value = result;
    }
}

// Função para calcular a raiz quadrada
function calculateSquareRoot() {
    const number = prompt("Digite o número para calcular a raiz quadrada:");
    if (number !== null) {
        const result = Math.sqrt(parseFloat(number));
        document.getElementById("display").value = result;
    }
}

// Função para arredondar o número
function calculateRound() {
    const number = prompt("Digite o número para arredondar:");
    if (number !== null) {
        const result = Math.round(parseFloat(number));
        document.getElementById("display").value = result;
    }
}
