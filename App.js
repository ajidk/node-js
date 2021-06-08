let events = require('events')
let util = require('util')

// let myEmited = new events.EventEmitter();
// myEmited.on('anEvent', (msg) => {
//     console.log(msg);
// })

// myEmited.emit('anEvent', 'bismillah oke')

let Person = function (name, color) {
    this.name = name;
    this.color = color;
}


util.inherits(Person, events.EventEmitter);

let james = new Person('james', 'green');
let jamet = new Person('jamet', 'skyblue');
let jande = new Person('jande', 'blue');

let People = [james, jamet, jande];

People.forEach((person) => {
    person.on('speak', (msg) => {
        console.log(`${person.name} said ${msg} ${person.color}`);
    })
})

james.emit('speak', 'apha kabar', 'bisa jadi')
jamet.emit('speak', 'apha kabar')
jande.emit('speak', 'apha kabar')
