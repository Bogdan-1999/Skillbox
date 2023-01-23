var btn1 = document.querySelector('.button1');
var btn2 = document.querySelector('.button2');
var btn3 = document.querySelector('.button3');
var h1 = document.querySelector('h1');

h1.addEventListener('keydown', event => {
    if ( event.code == 'Enter' ) {
    var text = h1.innerHTML;
    localStorage.setItem('text', text);
    btn2.setAttribute('disabled','true');
    btn3.setAttribute('disabled','true');
    h1.removeAttribute('contenteditable');
    }
})

btn1.addEventListener('click', function () {
    btn2.removeAttribute('disabled');
    btn3.removeAttribute('disabled');
    h1.setAttribute('contenteditable', 'true');
});

btn2.addEventListener('click', function () {
    var text = h1.innerHTML;
    localStorage.setItem('text', text);
    btn2.setAttribute('disabled','true');
    btn3.setAttribute('disabled','true');
    h1.removeAttribute('contenteditable');
});

btn3.addEventListener('click', function () {
    var text = localStorage.getItem('text');
    h1.innerHTML = text;
    btn2.setAttribute('disabled','true');
    btn3.setAttribute('disabled','true');
    h1.removeAttribute('contenteditable');
});

addEventListener('DOMContentLoaded', function () {
    var text = localStorage.getItem('text');
    h1.innerHTML = text;
})