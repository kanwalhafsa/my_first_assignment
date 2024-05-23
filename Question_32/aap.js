"use strict";
// Question 32
let current_users = ['user1', 'user2', 'user3', 'user4', 'user5'];
let new_users = ['User6', 'user4', 'User7', 'user8', 'User5'];
new_users.forEach(newUser => {
    if (current_users.some(currentuser => currentuser.toLowerCase() === newUser.toLowerCase())) {
        console.log(` ${newUser} will need to enter a new user name`);
    }
    else {
        console.log(` ${newUser} is available`);
    }
});
