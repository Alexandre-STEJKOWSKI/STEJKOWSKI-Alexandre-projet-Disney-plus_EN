// script.js
document.querySelectorAll('.article-FAQ').forEach(item => {
    item.addEventListener('click', () => {
        // Si l'élément est déjà actif, on le désactive
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            item.querySelector('.FAQ-basculer').textContent = '+';
            return;
        }
        // Fermer tous les autres éléments FAQ
        document.querySelectorAll('.article-FAQ').forEach(i => {
            i.classList.remove('active');
            i.querySelector('.FAQ-basculer').textContent = '+';
        });
        // Activer l'élément courant
        item.classList.add('active');
        item.querySelector('.FAQ-basculer').textContent = '-' ;
    });
});
