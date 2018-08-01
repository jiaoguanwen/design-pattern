import Person from './Person'
import Student from './Student'

let zhang = new Person('zhang', 25)
let wang = new Person('wang', 21)
let li = new Student('li', 12, 'A1')

zhang.eat()
zhang.speak()

wang.eat()
wang.speak()

li.eat()
li.speak()
li.study()