import People from './People'

export default class Student extends People {
    number
    private girlfriend

    constructor(name, age, number) {
        super(name, age)
        this.number = number
        this.girlfriend = 'xiaoli'
    }

    study() {
        console.log(`${this.name} study`)
    }

    getWeight() {
        console.log(`${this.weight}`)
    }
}