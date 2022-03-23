
/* Petición HTTP con XHR */
/* const Http = new XMLHttpRequest();
const url='https://pokeapi.co/api/v2/pokemon/';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  const pokemons = Http.responseText;
  console.log(pokemons);
}
 */

/* Petición HTTP con Fetch */

/* Obtener todos los pokemons */
const getAndPrintPokemons = (url) => {
    fetch(url, {
        method: 'GET',
        redirect: 'follow'
    })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            let pokemons = result.results;
            let previous = result.previous;
            console.log(previous);
            if(previous == null) {
                $('#previous').hide();
            } else {
                $('#previous').show();
            }
            $('#previous').attr('data-url', previous);
            let next = result.next;
            $('#next').attr('data-url', next);
            /* Bucle de pokemons */
            pokemons.forEach(pokemon => {
                /* Datos de un pokemon */
                console.log(pokemon);
                /* Petición con los detalle de un pokemon */
                fetch(pokemon.url, {
                    method: 'GET',
                    redirect: 'follow'
                })
                    .then(response => response.json())
                    .then(result => {
                        const pokemon = result;
                        console.log(pokemon);
                        let urlImage = pokemon.sprites.front_shiny;
                        let IdName = pokemon.id + '-' + pokemon.name;
                        var cardContainer = $('#card-container').clone();
                       /*  console.log(cardContainer); */
                        cardContainer.find('.card-title').text(IdName);
                        cardContainer.find('.card-img-top').attr("src", urlImage);
                        $('#cards').append(cardContainer);
                        
                        /* document.getElementById('card-title').textContent = IdName;
                        document.getElementById('card-img-top').setAttribute("src", urlImage); */
                        ///*  */console.log(pokemon);
                    })
                    .catch(error => console.log('error', error));
            });
    
    
            /* for(var i = 0; i < json.length; i++) {
                var obj = json[i];
            
                console.log(obj.id);
            }
            pokemons.forEach(pokemon => {
                console.log(pokemon);
            }); */
            console.log(pokemons);
        })
        .catch(error => console.log('error', error));
}
let url = "https://pokeapi.co/api/v2/pokemon/";
getAndPrintPokemons(url);


$(document).on("click",".page-item", function () {
    var pageButton = $(this).attr('id'); // or var clickedBtnID = this.id
    let url = $(this).attr('data-url');
    $('#cards').html('');
    getAndPrintPokemons(url);
 });


/* Obtener los detalles de UN pokemon */
/* fetch("https://pokeapi.co/api/v2/pokemon/1", {
    method: 'GET',
    redirect: 'follow'
})
    .then(response => response.json())
    .then(result => {
        const pokemon = result;
        let IdName = pokemon.id + '-' + pokemon.name;
        let urlImage = pokemon.sprites.front_shiny;
        document.getElementById('card-title').textContent = IdName;
        document.getElementById('card-img-top').setAttribute("src", urlImage);
        console.log(pokemon);
    })
    .catch(error => console.log('error', error)); */


