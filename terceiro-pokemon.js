function buscarPokemon() {
    var xhr = new XMLHttpRequest();
    var nomePokemon = document.getElementById('nomePokemon').value;
    xhr.open ('GET', `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`);
    xhr.onload = function() {
        document.getElementById('pokemon').innerHTML=`<img src="${JSON.parse(xhr.response).sprites.front_default}"/>`;
    };
    xhr.send();
}

