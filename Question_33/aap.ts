// Question 33
let numbers :number[] = [1,2,3,4,5,6,7,8,9,];
for(let num of numbers ){
let suffix :string;
if(num === 1){
    suffix = "st"
} 
else if(num === 2){
    suffix = 'nd'
}
else if(num === 3){
    suffix = "rd"
}
else{
    suffix = "th"
}
console.log(`${num} ${suffix}`)
}