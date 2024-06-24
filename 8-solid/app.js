'use strict';

class Billing {
    constructor(amount) {
        this.amount = amount;
    }
    calculateTotal() {
        return this.amount;
    }
}

class FixBilling extends Billing {
}

class HourBilling extends Billing {
    constructor(amount, hours) {
        super(amount);
        this.hours = hours;
    }
    calculateTotal() {
        if (this.hours < 0) {
            return;
        }
        return super.calculateTotal() * this.hours;
    }
}

class ItemBilling extends Billing {
    constructor(amount, elementsCount) {
        super(amount);
        this.elementsCount = elementsCount;
    }
    calculateTotal() {
        if (this.elementsCount < 0) {
            return;
        }
        return super.calculateTotal() * this.elementsCount;
    }
}

const billing1 = new Billing(10);
const billing2 = new FixBilling(10);
const billing3 = new HourBilling(3, 5);
const billing4 = new ItemBilling(10, 10);

console.log(billing1.calculateTotal());
console.log(billing2.calculateTotal());
console.log(billing3.calculateTotal());
console.log(billing4.calculateTotal());
