// A bluePrint for creating objects with pre-defined properties and methods

class name {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    intro() {
        console.log(`${this.name} is ${this.age}`)
    }
}

new name('hursun', 24).intro()