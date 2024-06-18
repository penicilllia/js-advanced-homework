'use strict';

class Car {
    #brand;
    #model;
    #mileage;

    constructor(brand, model, mileage) {
        this.#brand = brand;
        this.#model = model;
        this.#mileage = mileage;
    }

    get mileage() {
        return this.#mileage;
    }

    set mileage(mileages) {
        if (mileages < 0) {
            return;
        }
        this.#mileage = mileages;
    }

    info() {
        console.log(`Марка: ${this.#brand} \nМодель: ${this.#model} \nПробег: ${this.#mileage}км`);
    }
}

const car1 = new Car('BMW', 'X5', 100000);

console.log(car1.mileage);
car1.mileage = 130000;
car1.mileage = -200;
console.log(car1.mileage);

car1.info();
