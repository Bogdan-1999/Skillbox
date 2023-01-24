var btn = document.querySelector('.button1');
var searchArea = document.querySelector('.input')
btn.addEventListener('click', start);

searchArea.addEventListener('keydown', event => {
    if ( event.code == 'Enter' ) {
    start();}})

function start () { 
    var searchResults = document.querySelector('.searchResults');
    searchResults.innerHTML = '';
    var api = "https://swapi.dev/api/";
    var url = api + "people/?search="; 
    var searchText = document.querySelector('input')
    url += searchText.value;
    console.log(url);
    window.fetch(url)
        .then(function (otvet) { 
            return otvet.json();
         })
         .then(function (otvet) {
            console.log(otvet.results);
            if (otvet.results.length == 0) {alert('Ничего не найдено')}
            for (let index = 0; index < otvet.results.length; index++) {
                var results = document.createElement('li');
                var searchResults = document.querySelector('.searchResults');
                results.innerHTML = otvet.results[index].name;
                searchResults.appendChild(results);
                searchArea.value = '';
            }
         }).catch((err) => {  
            alert('Fetch Error :-S', err);  
          })
}