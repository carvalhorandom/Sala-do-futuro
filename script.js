document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
    
    // Dados de exemplo para validação
    const raValido = "123456";
    const digitValido = "7";
    const senhaValida = "minhasenha123";
    
    // Obtendo os valores inseridos no formulário
    const ra = document.getElementById('ra').value;
    const digit = document.getElementById('digit').value;
    const senha = document.getElementById('password').value;
    
    // Verificando se os dados estão corretos
    if (ra === raValido && digit === digitValido && senha === senhaValida) {
        alert("Bem-vindo ao blog!");
        // Aqui você pode redirecionar para o conteúdo do blog
        // window.location.href = "seublog.html"; // Exemplo de redirecionamento
    } else {
        // Mostra a mensagem de erro
        document.getElementById('error-message').style.display = "block";
    }
});
