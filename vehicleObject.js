class Vehicle {
    constructor (make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        console.log('Beep.');
        return 'Beep.';
    }
    toString() {
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}`);
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        console.log('VROOM!!!');
        return 'VROOM!!!'
    }
}

class Garage {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(vehicle) {
        if (vehicle instanceof Vehicle) {
            if (this.vehicles.length < this.capacity) {
                console.log('vehicle added');
                this.vehicles.push(vehicle);
                return('vehicle added');
            } else {
                console.log("Sorry, we're full.");
                return("Sorry, we're full.");
            }
        } else {
            console.log('Only vehicles are allowed in here.');
            return('Only vehicles are allowed in here.');
        }
    }
}
