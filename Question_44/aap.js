"use strict";
// Question 44
function make_sandwich(...item) {
    console.log(`Making a sandwich with: ${item.join(', ')} .`);
}
make_sandwich("Ham", "cheese");
make_sandwich("lettuce", "tomato");
make_sandwich("avacado", "mayo");
