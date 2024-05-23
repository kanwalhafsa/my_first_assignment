// Question 45

import { features } from "process";

function storeCarInfo(manufacture:string, modleName:string, ...extraOption:{[key:string] : any} []):
Object{
    const carInfo = {
        manufacture,
        modleName,
        ...Object.assign({} , ...extraOption)
    }
    return carInfo;
};
let answer = storeCarInfo('Honda','Civic',{color:'black'},{features: ['navigation','power window']});
console.log(answer);

