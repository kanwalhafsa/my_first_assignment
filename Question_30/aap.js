"use strict";
// Question 30
const userNames = ['admin', 'shahid afridi', 'babar', 'amir', 'sarfaraz'];
userNames.forEach(userName => {
    if (userName === 'admin') {
        console.log('Hello admin , would you like to see a status report?');
    }
    else {
        console.log(`Hello ${userName}, thank you for logging in again. `);
    }
});
