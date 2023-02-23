// Selecionando todas as células com a classe "expandable"
const expandableCells = document.querySelectorAll('.expandable');

// Adicionando um evento de clique para cada célula expansível
expandableCells.forEach(cell => {
    cell.addEventListener('click', () => {
        // Selecionando a seta na célula clicada
        const arrow = cell.querySelector('.arrow');
        // Selecionando a próxima linha depois da célula clicada
        const nextRow = cell.parentNode.nextElementSibling;

        // Verificando se a próxima linha é visível ou não
        if (nextRow.style.display === 'table-row') {
            // Se a próxima linha estiver visível, oculta a linha e gira a seta para baixo
            nextRow.style.display = 'none';
            arrow.classList.remove('arrow-up');
            arrow.classList.add('arrow-down');
        } else {
            // Se a próxima linha estiver oculta, exibe a linha e gira a seta para cima
            nextRow.style.display = 'table-row';
            arrow.classList.add('arrow-up');
        }
    });
});