// Seleciona todos os elementos com a classe 'texto__jogo'
const jogos = document.querySelectorAll('.texto__jogo');

// Seleciona o modal e os elementos relacionados
const modal = document.getElementById('modal');
const modalTexto = document.getElementById('modal__texto');
const fecharModal = document.querySelector('.modal__fechar');
const botaoFechar = document.querySelector('.modal__botao_fechar');

// Adiciona um evento de clique a cada jogo
jogos.forEach(jogo => {
    jogo.addEventListener('click', () => {
        // Obtém o parágrafo da história do jogo
        const historia = jogo.querySelector('p');

        // Verifica se o parágrafo existe
        if (historia) {
            // Define o texto no modal
            modalTexto.textContent = historia.textContent;
            // Exibe o modal
            modal.style.display = 'block';
        } else {
            console.warn('Nenhuma história encontrada para este jogo.');
        }
    });
});

// Fecha o modal quando o botão de fechar é clicado
fecharModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Fecha o modal quando o botão "Fechar" no rodapé é clicado
if (botaoFechar) {
    botaoFechar.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// Fecha o modal quando o usuário clica fora dele
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Fecha o modal quando a tecla "Esc" é pressionada
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
    }
});