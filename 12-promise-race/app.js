'use strict';

async function race(promiseArray) {
    return new Promise((resolve, reject) => {
        promiseArray.map(promise => {
            promise
                .then(result => resolve(result))
                .catch((error) => reject(error));
        })
    });
}

async function promiseRace(array) {
    const result = await race(array);
    console.log(`First promise: ${result}`);
}

const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve('Promise 4s'), 4000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve('Promise 2s'), 2000);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve('Promise 1s'), 1000);
});

console.log(promiseRace([promise1, promise2, promise3]));
