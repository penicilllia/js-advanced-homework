'use strict';

const Character = function(race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Character.prototype.speak = function() {
    console.log(`Моё имя ${this.name}, я использую ${this.language} язык`);
}

const Orc = function(name, language, weapon) {
    Character.call(this, 'Орк', name, language);
    this.weapon = weapon;
}

Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.hit = function() {
    console.log(`Орк ${this.name} наносит удар оружием ${this.weapon}!`);
}

const Elf = function(name, language) {
    Character.call(this, 'Эльф', name, language);
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.spell = function() {
    console.log(`Эльф ${this.name} кастует заклинание!`);
}

Elf.prototype.createSpell = function(spell, description) {
    console.log(`Эльф ${this.name} применяет заклинание ${spell}, которое ${description}`);
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
