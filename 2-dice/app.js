'use strict';

const availableDice = [4, 6, 8, 10, 12, 16, 20];

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function throwDice(dice) {
    let diceNum;

    if (Number.isFinite(dice) && dice > 0) {
        diceNum = dice;
    } else if (Number.parseInt(dice)) {
        diceNum = Number.parseInt(dice);
    } else if (dice && dice[0] === 'd') {
        diceNum = Number(dice.slice(1));
    }

    console.log(`dice: ${dice}, diceNum: ${diceNum}`);

    return availableDice.indexOf(diceNum) !== -1 ? randomNum(1, diceNum) : false;
}

console.log(throwDice(4));
console.log(throwDice('4'));
console.log(throwDice('d4'));
console.log(throwDice('8d'));
console.log(throwDice('d9'));
console.log(throwDice(21));
console.log(throwDice('string'));
console.log(throwDice(-1));
console.log(throwDice());
