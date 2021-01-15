'use strict';



function logger() {
    console.log("my name is Ali");

}

logger()








const appleOrangeJucie = fruitProcessor(2, 4);
console.log(appleOrangeJucie);




function calcAge1(birthYear) {
    const age = 2037 - birthYear
    return age;
}





const calcAge2 = function(birthYear) {
    return 2037 - birthYear;

}
console.log(calcAge2(1989), calcAge1(1989))



// Arrow function
const clacAge3 = birthYear => 2037 - birthYear;

console.log(clacAge3(1989))











const yearUntilRetirement = (birthYear, firstname) => {
    const age = 20 - birthYear;
    const retirement = 65 - age;
    return `${firstname} retires in ${retirement}`
}
console.log(yearUntilRetirement(1989, "Ali"));




function cutFruitPieces(fruit) {

    return fruit * 4;
}




function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangepieces = cutFruitPieces(oranges);
    const juice = `Ali has ${applePieces} apples and ${orangepieces} oranges.`;
    return juice;


}

console.log(fruitProcessor(2, 3));





const fruitPro = function(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangepieces = cutFruitPieces(oranges);
    const juice = `Ali has ${applePieces} apple pieces and ${orangepieces} orange pieces.`;
    return juice



}



console.log(fruitPro(3, 10))




const fruitproSecond = (apples, oranges) => {
    const applePieces = cutFruitPieces(apples);
    const orangepieces = cutFruitPieces(oranges);
    const juice = `Ali has ${applePieces} apple pieces and ${orangepieces} orange pices.`;
    return juice
}

console.log(fruitproSecond(12, 11));




const calcAvarege = (player1, player2, player3) => (player1 + player2 + player3) / 3;
console.log(calcAvarege(10, 20, 30, ))





let scorDolphines = calcAvarege(10, 20, 30);
let scorKoalas = calcAvarege(20, 40, 60);

const checkWinner = function(avgKoalas, avgDolphines) {

    if (avgDolphines > avgKoalas) {
        console.log("Dolphine wins");

    } else {
        console.log(" Koalas wins");
    }





}


checkWinner(scorKoalas, scorDolphines);


// Array
const friends = ['Micheal', 'Steven', 'Peter'];
console.log(friends);

console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

console.log(friends[2]);

friends[2] = 'Jay';
console.log(friends);


const Ali = ['Ali', 'Leo', 2037 - 2019];
console.log(Ali);







const years = new Array(1991, 1989, 1990, 2020);

console.log(years)






const mySirName = "leo";


console.log(mySirName);


const y = 2.5;


function typingSpeed(x) {

    let z = y + x;
    return z
}


console.log(typingSpeed(10));