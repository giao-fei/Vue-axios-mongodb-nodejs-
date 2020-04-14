// class Parent {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     speakChinese() {
//         console.log(' I can speak Chinese')
//     }
// }
// class Child extends Parent {
//     speakEnglish() {
//         console.log(' I can speak English')
//     }
// }
// let Giao = new Child('giao', 12)
// Giao.speakChinese()
// Giao.speakEnglish()

class Person {
    constructor(name, age) {
         this.name = name;
         this.age = age;
    }
    eat() {
        console.log(this.age + '20' + this.name + '小王');
    }
    skill(_skill) {
        this.eat()
        console.log(this.name + 'oring' + _skill)
    }
    hobby(_hobby) {
        console.log(this.name + '猪肉' + _hobby)
    }
}
var XuShiLin = new Person('馒头', 20)
XuShiLin.skill('白痴')
XuShiLin.hobby('睡觉')
var XuShiLin = new Person('白痴', 12)
XuShiLin .skill('白痴')
XuShiLin.hobby('睡觉')