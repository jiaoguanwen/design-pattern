import People from './People'

export default class Student extends People {
    constructor(name, age, number) {
        super(name, age)
        this.number = number
    }

    study() {
        alert(`${this.name} study`)
    }
}