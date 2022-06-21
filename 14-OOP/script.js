'use strict';

///////////////////////////////////////
// Coding Challenge #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
GOOD LUCK 😀
*/

const Car = function (make, speed){
    this.make = make;
    this.speed = speed;
}
Car.prototype.accelerate = function (){
    this.speed += 10;
    console.log(this.speed);
    return this.speed;
}
Car.prototype.brake = function (){
    this.speed -=5;
    console.log(this.speed);
    return this.speed;
}

const car1 = new Car('BMW', 90);
car1.brake();
console.log(car1.make , ' going at', car1.speed, "km/h" );
const car2 = new Car('Mercedes', 120);
car2.accelerate()
console.log(car2.make , ' going at', car2.speed, "km/h");



///////////////////////////////////////
// Coding Challenge #2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value,
 by multiplying the input by 1.6);
4. Create a new car and experiment with to accelerate and brake methods, and with the getter and setter.
DATA CAR 1: 'Ford' going at 120 km/h
GOOD LUCK 😀
*/


class CarCl{
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    get speedUS(){
        return this.speed /1.6;
    }
    set speedUS(speed){
        this.speed = this.speed *1.6;
    }
    brake (){
        this.speed -=5;
        console.log(this.speed);
        return this.speed;
    }
    accelerate(){
        this.speed += 10;
        console.log(this.speed);
        return this.speed;
    }
}

const car = new CarCl("BMW", 120);
car.accelerate();
car.brake();
console.log(car.speedUS);

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car.
 Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%).
 Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉
DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

const EV = function (make, speed,charge ){
    Car.call(this, make, speed);
    this.charge = charge;
}
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;
EV.prototype.chargeBattery = function (chargeTo){
    this.charge = chargeTo;
}
EV.prototype.accelerate = function (){
    this.charge -= 0.1;
    this.speed += 20;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
}

const electricCar = new EV("BMW", 140,30);
electricCar.accelerate();
electricCar.brake();
electricCar.chargeBattery(90);
console.log(`${electricCar.make} going at ${electricCar.speed} km/h, with a charge of ${electricCar.charge}%`);


///////////////////////////////////////
// Coding Challenge #4

/*
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!
DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%
GOOD LUCK 😀
*/

class EVCl extends CarCl {
    #charge;
   constructor(make, speed,charge) {
       super(make, speed);
       this.#charge = charge;
   }
    accelerate (){
        this.charge -= 0.1;
        this.speed += 20;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
        return this;
    }
    chargeBattery (chargeTo){
        this.charge = chargeTo;
        return this;
    }
   brake (){
        this.speed -=5;
        console.log(this.speed);
        return this;
    }
}

const carNew = new CarCl('Rivian',100, 20);
const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
    .accelerate()
    .accelerate()
    .accelerate()
    .brake()
    .chargeBattery(50)
    .accelerate();
console.log(rivian.speedUS);