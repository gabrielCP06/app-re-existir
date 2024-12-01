document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const searchButton = document.getElementById('search-btn');
    const knowledgeItems = document.querySelectorAll('.knowledge-item');
    const categoryButtons = document.querySelectorAll('.category-btn');

    // Filtrar por busca
    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.toLowerCase();
        knowledgeItems.forEach(item => {
            const content = item.textContent.toLowerCase();
            item.style.display = content.includes(searchTerm) ? '' : 'none';
        });
    });

    // Filtrar por categorias
    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = button.dataset.category;
            knowledgeItems.forEach(item => {
                item.style.display = item.dataset.category === category ? '' : 'none';
            });
        });
    });
});
