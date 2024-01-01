export const hintsTouch = addEventListener('DOMContentLoaded', function() {
    const infoBtns = document.querySelectorAll('.info-dot');

    const infoHints = document.querySelectorAll('.info-hint');
    
    // Клик по кнопкам с подсказками
    for(let btn of infoBtns) {
        btn.addEventListener('click', showHint);
    };

    function showHint(e) {
        e.stopPropagation();
        this.parentNode.querySelector('.info-hint').classList.toggle('none');
    };

    // Закрываем подсказки
    document.addEventListener('click', closeHints);

    function closeHints() {
        for (let hint of infoHints) {
            hint.classList.add('none');
        }
    };

    // Запрещаем всплытие события клика при клике на подсказки
    for (let hint of infoHints) {
        hint.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    };
})