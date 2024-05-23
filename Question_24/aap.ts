// Question 24

// Test Equality and Inequality with string
console.log("Equality test with string: ", "Apple" === "Apple");
console.log("Inequality test with string: ", ("Apple" as string) != "Orange");

// Test using the lower case function
console.log("Lower case test with string: ", "HELLO".toLowerCase() === "hello");

// Numerical test invoving Equality and Inequality 
console.log("Equality test with Number: ", 18 === 18);
console.log("Inequality test with Number: ", (18 as Number) != 16);

// Test Greater than and Less than test
console.log("Greater than test: ", 20 > 10);
console.log("Less than test: ", 10 < 20);

// Test Greater than or equal to and Less than or equal to test
console.log("Greater than or equal to test: ", 20 >= 10);
console.log("Less than or equal to test: ", 10 <= 20);

// Test using "and" and "or" operator
console.log("and operator test: ", 20===20 && 10>5);
console.log("or operator test: ", 5===5 || false);

// Test whether an item is in a array
const fruits :string[] = ['Apple', 'Orange','Strawberry'];
console.log('Test"Apple" is in a array', fruits.includes("Apple"));

// Test whether an item is not in a array
console.log('Test"Apple" is not in a array', !fruits.includes("Banana"));