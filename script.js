'use strict';



function logger() {
    console.log("my name is Ali");

}

logger()



function fruitProcessor(apples, oranges) {

    const juice = `Ali has ${apples} apples and ${oranges} oranges.`;
    return juice;


}
fruitProcessor(5, 3);
console.log(fruitProcessor(5, 3));



const appleOrangeJucie = fruitProcessor(2, 4);
console.log(appleOrangeJucie);




function calcAge1(birthYear) {
    const age = 2037 - birthYear
    return age;
}
console.log(calcAge1(1989));