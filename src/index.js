import People from './People'
import Student from './Student'
import JQuery from './JQuery'

let zhang = new People('zhang', 25)
let wang = new People('wang', 21)
let li = new Student('li', 12, 'A1')

/*zhang.eat()
zhang.speak()

wang.eat()
wang.speak()

li.eat()
li.speak()
li.study()*/

window.$ = function (seletor) {
    // 工厂模式
    return new JQuery(seletor)
}

var $p = $('p')
console.log($p)
console.log($p.addClass)
$p.addClass('name').html('data').append('node')
