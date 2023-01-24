var btn = document.querySelector('.button1');
var searchArea = document.querySelector('.input')
btn.addEventListener('click', start);

searchArea.addEventListener('keydown', event => {
    if ( event.code == 'Enter' ) {
    start();}})

function openInfoPers (pers) {
    var infoPers = document.createElement('div');
    var searchResults = document.querySelector('.searchResults');
    var persText = document.querySelector('.pers');
    console.log(pers);
    infoPers.innerHTML = 'Name: ' + pers.name + "<br>Height: " + pers.height + "<br>Hair color: " + pers.hair_color;
    searchResults.appendChild(infoPers);
    infoPers.setAttribute('hidden', 'true');
    infoPers.className = 'infoPers';
    var textClass = document.querySelector("." +infoPers.className);
    console.log(textClass);
    persText.addEventListener('click', function (pers) {
        textClass.removeAttribute('hidden');
    });
}



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
                results.className = 'pers';
                var searchResults = document.querySelector('.searchResults');
                results.innerHTML = otvet.results[index].name;
                searchResults.appendChild(results);
                openInfoPers(otvet.results[index]);
                searchArea.value = '';
            }
         }).catch((err) => {  
            console.log('Fetch Error :-S', err);  
          })
}