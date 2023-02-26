// To create a class

class Animal{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    getinfo(){
        return (`the Person name is ${this.name} and age is ${this.age}`)
    }
}

// create object from the class Animal
const man=new Animal('Maries',22)
console.log(man.getinfo())

// Inheritance
// enables the class(Dog) to inherit or use the properties and methods of parentclass(Animal)

class Human extends Animal{
    constructor(name,age,breed)
    {
        super(name,age),
        this.breed=breed


    }
    sense(){
        return 'six'
    }
}
const person=new Human('venkat',22,'human')
console.log(person)
console.log(person.getinfo())
console.log(person.sense())


// Encapsulation
//It enable retriction mechanism where data cannot be accesssed unless there is a special method dedicated for this.
// getter and setter to access the private property.

class Dog extends Animal{
 breeds;
    constructor(name,age,breed){
        super(name,age),
        this.breeds=breed
    }
    getbreed(){
        return this.breeds
    }
    setbreed(breed){
        this.breeds=breed
    }

}
var dog=new Dog('Jack',6,'german')
console.log(dog.getbreed())
dog.setbreed('labrador')
console.log(dog)