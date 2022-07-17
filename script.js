'use strict';

// Dies soll mein Prototype sein
const Auto = {
    marke: 'Hyundai',
    modell:'i20',
    leistungKW: 62,
    farbe: 'braun',
    leasing: false
}

const Fahrrad ={
    marke: 'Ortler',
    schaltung: '3/8',
}

const fahrzeug = Object.create(Auto);

console.log(fahrzeug.marke);
console.log(fahrzeug.leistungKW);
console.log(fahrzeug.schaltung);

Object.setPrototypeOf(fahrzeug, Fahrrad);

console.log(fahrzeug.marke);
console.log(fahrzeug.leistungKW);
console.log(fahrzeug.schaltung);

// Kein guter Stil, weil kein offizieller Bestandteil von Javascript
console.log(fahrzeug.__proto__);