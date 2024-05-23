import inquirer from "inquirer";
const number = await inquirer.prompt([
    {message:"Enter first number " , type:"number", name: "firstNumber"},
    {message:"Enter second number " , type:"number", name: "secondNumber"},
    {
        message:"Select one of the operators to perform action "  ,
        type : "list",
        name: "operator",
        choices :[ "Addition","Subtraction" , "Multiplication" , "Division" ,]
    
    }
])

