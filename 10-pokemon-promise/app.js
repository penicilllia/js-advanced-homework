'use strict';

function getData(url, errorMessage, method = 'GET') {
    return fetch(url, { method })
        .then(response => {
            if (!response.ok) {
                throw new Error(`${errorMessage}. Status: ${response.status}`);
            }
            return response.json();
        })
}

getData('https://pokeapi.co/api/v2/pokemon/ditto', 'Pokemon not found')
    .then(pokenonInfo => {
        const abilityURL = pokenonInfo.abilities[0].ability.url;
        return getData(`${abilityURL}`, 'Pokemon ability is not found');
    })
    .then(abilities => console.log(abilities.effect_entries[1].effect))
    .catch(error => console.error(`Error! ${error.message}`));
