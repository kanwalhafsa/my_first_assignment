// Question 16

let guests :string[] = ['shahid Afridi','Babar Azam','Fakhar Zaman'];
let unableToAttend = 'shahid Afridi';
console.log(`${unableToAttend} can't make it to dinner`);
let new_Guest = 'Sarfaraz';
guests[guests.indexOf(unableToAttend)] = new_Guest
guests.unshift('Waseem Akram');
guests.splice(3 , 0 , 'Amir');
guests.push('Shoaib Malik');
guests.forEach(guests => {
    console.log(`Dear ${guests}, would you like to join me for dinner?`)
})