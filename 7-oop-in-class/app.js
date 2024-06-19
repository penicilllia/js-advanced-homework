'use strict';

class Character {
    constructor(race, name, language) {
        this.race = race;
        this.name  = name;
        this.language = language;
    }
    speak() {
        console.log(`Моё имя ${this.name}, я использую ${this.language} язык`);
    }
}

class Orc extends Character {
    constructor(name, language, weapon) {
        super('Орк', name, language);
        this.weapon = weapon;
    }
    speak() {
        console.log(`Я есть ${this.name}, я орк!`);
    }
    hit() {
        console.log(`Орк ${this.name} наносит удар оружием ${this.weapon}!`);
    }
}

class Elf extends Character {
    constructor(name, language) {
        super('Эльф', name, language);
    }
    speak() {
        console.log(`Имя моё ${this.name}, я благородный эльф!`);
    }
    spell() {
        console.log(`Эльф ${this.name} кастует заклинание!`);
    }
    createSpell(spell, description) {
        console.log(`Эльф ${this.name} применяет заклинание ${spell}, которое ${description}`);
    }
}

const character1 = new Character('Человек', 'Боб', 'Русский');
const orc1 = new Orc('Крок', 'Орочий', 'топор');
const elf1 = new Elf('Леголас', 'Эльфийский');

console.log(character1);
console.log(orc1);
console.log(elf1);

orc1.hit();
elf1.spell();
elf1.createSpell('розовые розы', 'заставляет всех попавших под заклинание видеть падающие лепестки роз');

character1.speak();
orc1.speak();
elf1.speak();
