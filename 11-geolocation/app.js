'use strict';

const page = {
    geolocation: document.querySelector('.geolocation')
}

function getUserCoordinates() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position.coords),
            (error) => reject(error)
        )
    })
}

getUserCoordinates()
    .then(coordinates => {
        page.geolocation.innerHTML = `<h1>Your current position</h1> \n
            <b>latitude:</b> ${coordinates.latitude}, <b>longitude:</b> ${coordinates.longitude}`;
    })
    .catch(error => {
        page.geolocation.innerHTML = `<h1>Error occurred</h1>
            <font color="red"><b>${error.message}</b></font>`
    });
