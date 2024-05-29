'use strict';

const objArray = [
    {
        id: 1,
        name: 'Вася'
    },
    {
        id: 2,
        name: 'Петя'
    },
    {
        id: 1,
        name: 'Вася'
    },
    {
        id: 1,
        name: 'Маша'
    }
];

function uniqueizeObjArray(array) {
    let uniqArray = [];
    let uniqIds = new Set(array.map(obj => obj.id));
    uniqIds.forEach(element => uniqArray.push(array.find(obj => obj.id === element)));

    return uniqArray;
}

console.log(uniqueizeObjArray(objArray));
