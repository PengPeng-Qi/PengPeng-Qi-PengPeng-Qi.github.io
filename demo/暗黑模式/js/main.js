const h1 = document.querySelector('h1');
const body = document.body;

h1.onmousemove = function () {
    body.className = 'dark-mode'
}
h1.onmouseleave = function () {
    body.className = ''
}