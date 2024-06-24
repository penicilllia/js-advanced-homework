'use strict';

function pokemonAbilityDescription(url) {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('load', function() {
        const info = JSON.parse(this.responseText);
        const abilityURL = info.abilities[0].ability.url;

        const request2 = new XMLHttpRequest();
        request2.open('GET', abilityURL);
        request2.send();

        request2.addEventListener('load', function() {
            const ability = JSON.parse(this.responseText);
            console.log(ability.effect_entries[1].effect);
        })
    });
}

pokemonAbilityDescription('https://pokeapi.co/api/v2/pokemon/ditto');
pokemonAbilityDescription('https://pokeapi.co/api/v2/pokemon/14/');
