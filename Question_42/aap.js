"use strict";
// Question 42
let magician = ['Harry Potter', 'Criss Angle', 'Ron Weasley', 'David Blain'];
function make_great(megicianArray) {
    for (let i = 0; i < megicianArray.length; i++) {
        magician[i] = 'The Great ' + magician[i];
    }
}
function show_magician(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magician(magician);
