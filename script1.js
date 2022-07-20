'use strict';

const myArray = [21, 54, 87, 98, 65, 32];
const yourArray = [1, 2, 3, 4, 5];

// prototype kann behandelt werden wie ein Objekt und um neue Methoden erweitert werden
Array.prototype.average = function () {
    // Klassische Funktion, weil hier mit "this" gearbeitet werden muss
    let sum = this.reduce((sum, val) => sum + val);
    return sum / this.length;
}

console.log(myArray);

console.log(myArray.average());
console.log(yourArray.average());



const Auto = {
    marke: 'Heundi',
    modell:'i20',
    leistungKW: 62,
    farbe: 'braun',
    leasing: false
}

const Fahrrad ={
    marke: 'Bw',
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
