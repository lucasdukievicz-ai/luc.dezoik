// Aguarda o HTML da página carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleciona os elementos da página (ex: um botão e um título)
    const meuBotao = document.getElementById('meuBotao');
    const meuTitulo = document.getElementById('meuTitulo');

    // Verifica se os elementos existem na página para evitar erros
    if (meuBotao && meuTitulo) {
        
        // Adiciona um evento de clique ao botão
        meuBotao.addEventListener('click', () => {
            // Altera o texto do título
            meuTitulo.textContent = 'O script funcionou com sucesso!';
            
            // Altera a cor do texto para dar um feedback visual
            meuTitulo.style.color = '#007BFF';
            
            console.log('O botão foi clicado e o texto foi alterado.');
        });
        
    }
});
