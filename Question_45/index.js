"use strict";
// Question 45
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacture, modleName, ...extraOption) {
    const carInfo = Object.assign({ manufacture,
        modleName }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
let answer = storeCarInfo('Honda', 'Civic', { color: 'black' }, { features: ['navigation', 'power window'] });
console.log(answer);
