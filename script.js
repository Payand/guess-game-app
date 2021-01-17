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















const mySirName = "leo";


console.log(mySirName);


const y = 2.5;


function typingSpeed(x) {

    let z = y + x;
    return z
}


console.log(typingSpeed(10));

/*

function multiNum() {
    const firstNum = Number(prompt("please enter your numbr :"));
    const secondNum = Number(prompt("please enter your second number :"));
    const multiTwo = firstNum + secondNum;
    return multiTwo
}

console.log(multiNum());

*/

/*
const firNum = function() {
    const numOne = Number(prompt("please enter your first number :"));
    return numOne

}


const secNum = function() {
    const numtwo = Number(prompt("please enter your second number : "));
    return numtwo
}



function multiNumberTwo() {
    const thirdNum = firNum() * secNum();
    return thirdNum
}


console.log(multiNumberTwo());

*/


/*

function firstNmber() {
    const firNum = Number(prompt('please enter your first number: '));
    return firNum

}

function secNmbr() {
    const seNum = Number(prompt('please enter your second number: '));
    return seNum
}


function addNumber() {
    const thNum = firstNmber() + secNmbr();
    return thNum
}


console.log(addNumber());
*/








const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);

};

/*

const guessNum = (myChoice) => {
    return myChoice
};
const myChoice = Number(prompt('please enter your number between 10 to 30 : '));



const myGame = () => {
    if (randomNumber(10, 20) === guessNum(myChoice)) {
        return "you guess right"

    } else if (randomNumber(10, 20) > guessNum(myChoice)) {
        return `you guess high ,computer choice is ${randomNumber(10,20)}`

    } else {
        return `you guess low , computer choice is ${randomNumber(10,20)}`
    }
};
console.log(myGame());

*/


let friends = ['micheal', 'steven', 'peter'];


console.log(friends);



const years = new Array(1991, 1984, 2008, 2020);
console.log(years);


console.log(friends[0]);
console.log(friends.length);
console.log(friends.length - 1);
console.log(friends[friends.length - 1]);



friends[2] = "Joey";
console.log(friends);


const ageCal = function(birthday) {
    return 2021 - birthday;
}

const allYears = [1988, 1989, 1990, 1991];

const age1 = ageCal(allYears[0]);
const age2 = ageCal(allYears[1]);
const age3 = ageCal(allYears[allYears.length - 1]);

const age4 = [age1, age2, age3];
console.log(age4);




// methods in JS

const friend = ['Joey', 'Racheal', 'Ross', 'monica'];
// add elements
const newLength = friend.push('pheebi');
console.log(friend);
console.log(newLength);
friend.unshift('John'); // like insert method in python
console.log(friend);
// remove method

friend.pop(); // Last
friend.pop(1); // Last

console.log(friend);


friend.shift(); // First
console.log(friend);


console.log(friend.indexOf('Ross'));

friend.push(23)
console.log(friend.includes("Ross"));
console.log(friend.includes("23"));
console.log(friend)


if (friend.includes('Joey')) {
    console.log("you have a friend called Joey");
}

const clacTipTwo = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2

}

const bills = [125, 555, 44];
let tips = [];
const tipArray1 = clacTipTwo(bills[0]);
const tipArray2 = clacTipTwo(bills[1]);
const tipArray3 = clacTipTwo(bills[2]);

tips.push(tipArray1 + bills[0], tipArray2 + bills[1], tipArray3 + bills[2]);
console.log(tips);



const ali = {
    firstName: 'Ali',
    lastName: 'Shooshtari',
    age: 2020 - 1989,
    job: "Haker",
    friends: ['Joey', 'Ross', 'Chandler']
};
console.log(ali);
console.log(ali.lastName);
console.log(ali['lastName']);



const nameKey = 'Name';

console.log(ali['first' + nameKey]);
console.log(ali['last' + nameKey]);


const intrestedIN = prompt("What do you want to know about ali choose between fristName,lastName,age,job and friends :");


if (ali[intrestedIN]) {
    console.log(ali[intrestedIN]);

} else {
    console.log("Wrong request!!!choose between fristName,lastName,age,job and friends :");
}


ali.location = 'Canada';
ali['secondJob'] = 'developer';
console.log(ali);



const challeng = `${ali.firstName} has ${ali.friends.length} friends , and his best friend is ${ali.friends[0]}`
console.log(challeng)