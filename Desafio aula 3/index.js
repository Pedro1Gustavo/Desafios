let saldo = 1000;

function verSaldo() {
    document.getElementById('mensagem').innerText = `Seu saldo atual é: $${saldo.toFixed(2)}`;
}

function fazerSaque() {
    let valor = parseFloat(prompt("Digite o valor do saque:"));
    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido.");
    } else if (valor > saldo) {
        alert("Saldo insuficiente.");
    } else {
        saldo -= valor;
        document.getElementById('mensagem').innerText = `Saque de $${valor.toFixed(2)} realizado com sucesso. Seu novo saldo é: $${saldo.toFixed(2)}`;
    }
}

function fazerDeposito() {
    let valor = parseFloat(prompt("Digite o valor do depósito:"));
    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor válido.");
    } else {
        saldo += valor;
        document.getElementById('mensagem').innerText = `Depósito de $${valor.toFixed(2)} realizado com sucesso. Seu novo saldo é: $${saldo.toFixed(2)}`;
    }
}

function sair() {
    document.getElementById('mensagem').innerText = "Obrigado por usar o Simulador de Caixa Eletrônico.";
    setTimeout(() => {
        document.getElementById('mensagem').innerText = "Obrigado por usar o Simulador de Caixa Eletrônico.";
    }, 3000);
}
