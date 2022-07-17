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
