"use strict";
// Question 15
Object.defineProperty(exports, "__esModule", { value: true });
let guests = ['Shahid afridi', 'Fakhar Zaman', 'Babar Azam'];
let unableToAttend = 'Shahid Afridi';
console.log(`${unableToAttend} can't make it to dinner. `);
let newGuest = 'Sarfaraz';
guests[guests.indexOf(unableToAttend)] = newGuest;
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
