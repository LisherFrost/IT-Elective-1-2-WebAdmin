document.body.className = 'fade';
document.body.classList.add('fade');

document.addEventListener("DOMContentLoaded", () => {
window.setTimeout(function() {
    document.body.className = '';
}, 230);
});

document.addEventListener("DOMContentLoaded", () => {
window.setTimeout(function() {
    document.body.classList.remove('fade');
}, 230);
});