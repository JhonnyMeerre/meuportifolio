// Seleciona o modal e os elementos relacionados
const modal = document.getElementById('modal');
const modalTexto = document.getElementById('modal__texto');
const fecharModal = document.querySelector('.modal__fechar');
const botaoFechar = document.querySelector('.modal__botao_fechar');

// Função para adicionar eventos de clique aos jogos
function adicionarEventosAosJogos() {
    // Seleciona todos os elementos com a classe 'texto__jogo'
    const jogos = document.querySelectorAll('.texto__jogo');

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
}

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

// Função para carregar os jogos do JSON
async function carregarJogos() {
    try {
        // Carrega o arquivo JSON
        const response = await fetch('./data/jogos.json'); // Caminho corrigido
        const jogos = await response.json();

        // Seleciona o container onde os jogos serão inseridos
        const container = document.querySelector('#container-jogos'); // Seleciona por ID

        // Itera sobre cada jogo no JSON
        jogos.forEach(jogo => {
            // Cria a estrutura HTML para cada jogo
            const artigo = document.createElement('article');
            artigo.classList.add('texto__jogo');

            const imagem = document.createElement('img');
            imagem.src = `./assets/${jogo.imagem}`; // Caminho corrigido
            imagem.alt = `Capa do jogo ${jogo.nome} de Super FamiCom`;

            const titulo = document.createElement('h3');
            titulo.textContent = jogo.nome;

            const historia = document.createElement('p');
            historia.classList.add('historia__com__jogo');
            historia.textContent = jogo.historia;

            // Adiciona os elementos ao artigo
            artigo.appendChild(imagem);
            artigo.appendChild(titulo);
            artigo.appendChild(historia);

            // Adiciona o artigo ao container
            container.appendChild(artigo);
        });

        // Após carregar os jogos, adiciona os eventos de clique
        adicionarEventosAosJogos();
    } catch (error) {
        console.error('Erro ao carregar os jogos:', error);
    }
}

// Chama a função para carregar os jogos
carregarJogos();