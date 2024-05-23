// Question 15

import { gunzip } from "zlib";

let guests :string[] = ['Shahid afridi','Fakhar Zaman','Babar Azam'];
let unableToAttend = 'Shahid Afridi';
console.log(`${unableToAttend} can't make it to dinner. `);
let newGuest = 'Sarfaraz';
guests[guests.indexOf(unableToAttend)] = newGuest;

guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});