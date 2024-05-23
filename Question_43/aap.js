"use strict";
// Question 43
let magician = ['Harry Potter', 'Criss Angle', 'Ron Weasley', 'David Blain'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = 'The Great ' + magicianArray[i];
    }
}
function show_magician(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagiciansArray = copyArray(magician);
make_great(copyMagiciansArray);
console.log('\n\nThis is my original array ');
show_magician(magician);
console.log('\n\nThis is my modified copy of the array ');
show_magician(copyMagiciansArray);
