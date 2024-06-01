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
    return [...new Set(array.map(obj1 => array.find(obj2 => obj2.id === obj1.id)))];
}

console.log(uniqueizeObjArray(objArray));
