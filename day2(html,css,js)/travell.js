
const buttons = document.querySelectorAll('.product button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = 'places.html';
    });
});
