export default class People {
    name
    age
    protected weight

    constructor(name, age) {
        this.name = name
        this.age = age
        this.weight = 120
    }

    eat() {
        console.log(`${this.name} eat something`)
    }

    speak() {
        console.log(`My name is ${this.name}, age ${this.age}`)
    }
}