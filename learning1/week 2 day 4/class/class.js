const zelda = {
    name : 'Zelda',
    dob : 180721,
    owner : null,
    getAdoptionStatus: function(){
        this.owner ? console.log(`${this.name} has been adopted by ${this.owner}`): console.log(`${this.name} is still searching for a forever home`);
    },

    adopt: function(newOwner){
        this.owner = newOwner;
    },
}
//////////////////////////////////////////////////////

function Animal(name, dob, owner = null){
    this.name = name,
    this.dob = dob,
    this.owner = owner;
    this.type = type
};

Animal.prototype.speak = function(){
    console.log(`${this.name} says hello`)
}

Animal.prototype.adopt = function(newOwner) {
    this.owner = newOwner;
}

Object.defineProperty(Animal.prototype, `adoptionStatus`,{
    get(){
        return this.owner ? console.log(`${this.name} has been adopted by ${this.owner}`): console.log(`${this.name} is still searching for a forever home`);
    }
})

// created two instances of animal class call- apply - and BIND
let ziggy = new Animal('Ziggay', 180721, 'penguin');
let pingu = new Animal('Pingu', 220809, 'penguin');


///////////////////////// EES6 syntax
class Animal {
    constructor(name, dob, type, owner = null) {
        this.name = name,
        this.dob = dob,
        this.type = type,
        this.owner = owner;
    }
    speak(){
        console.log(`$this.name} says hello`)
    }
    adopt(newOwner){
        this.owner = newOwner;
    }
    getAdoptionStatus(){
        return this.owner ? console.log(`${this.name} has been adopted by ${this.owner}`) : console.log(`${this.name} is still searching for a home`);
    }
}
let pipi = new Animal('Pipi', 030102, 'Hamster');
let fufu = new Animal('Fufu', 110921, 'Cat')

////////////////////////////inheritence ES5syntax 

function Cat(name,dob,iwn){
    Animal.call(this, name, dob, owner)
}

Object.setPrototypeOf(cat.prototype, Animal.prototype)
 //cloning it instead of class based isntance - as every clone gets created evolution and that
fluffy instanceof Animal;
fluffy instanceof Cat;

// create dog breed array 

const dogBreeds = ['shih-poo', 'labrador', 'greyhound']
// you can extend it - add a module and that increase functionality - take a piece of software and extend it to have your own customisations 

function Dog(breedIdx, name, dob, owner){
    Animal.call(this, name , dob, owner);
    this.breed = dogBreeds[breedIdx]
}

Dog.prototype.speak = function(){
    console.log(`${this.name} says Woof!`);
};

Object.setPrototypeOf(Dob.prototype, Animal.prototype);

// can never extend base class - if you need extention done - always do it to the divide classes - never change base one - 

/////////////////////////// inheritance ES6 syntax

class Cat extends Animal{}

let froggy = new Cat('Froggy', 190721)

const dogTypes = ['bulldog', 'dalmation', 'pointer'];

class Dog extends Animal{
    constructor(breedIdx, name, dob, owner){
        super(name, dob, owner);
        this.breed = dogTypes[breedIdx];
    }
    speak(){
        console.log("Woof!");
    }
};