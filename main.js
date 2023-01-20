var btn = document.querySelector('.addtask');
var list = document.querySelector('.todolist');
function add () { 
    var task = document.querySelector('.tasktext').value;
    var newLi = document.createElement('li');
    newLi.className = 'task';
    newLi.innerHTML = '<h1>' + task + '</h1>';
    list.appendChild(newLi);
    document.querySelector('.tasktext').value = '';
 }

btn.addEventListener('click', add)
 var input = document.querySelector('.tasktext');

 input.addEventListener('keyup', event => {
    if ( event.code == 'Enter' ) {
        add();
    }
 })


 list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'H1') {
        ev.target.parentNode.remove();
    }
 })