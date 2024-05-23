"use strict";
// Question 17
let guests = ['shahid Afridi', 'Babar Azam', 'Fakhar Zaman'];
let unableToAttend = 'shahid Afridi';
console.log(`${unableToAttend} can't make it to dinner`);
let new_Guest = 'Sarfaraz';
guests[guests.indexOf(unableToAttend)] = new_Guest;
guests.unshift('Waseem Akram');
guests.splice(3, 0, 'Amir');
guests.push('Shoaib Malik');
guests.forEach(guests => {
    console.log(`Dear ${guests}, would you like to join me for dinner?`);
});
console.log("Unfortunately, I can only invite two peoples for dinner.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner. `);
}
guests.forEach(guests => {
    console.log(`Dear ${guests}, you are still invited to dinner. `);
});
guests.splice(0, guests.length);
console.log(guests);
