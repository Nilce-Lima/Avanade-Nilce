function buscarPokemon() {
    var xhr = XMLHttpRequest();
    var nomePokemon = document.getElementById('nome').value;
    xhr.open ('GET','https://pokeapi.co/api/v2/pokemon/${nomePokemon}');
    xhr.onload = function() {
        document.getElementById(`pokemon`).innerHTML=`<img src="${JSON.parse(xhr.response).sprites.front_default}">`
    };
    xhr.send();
}