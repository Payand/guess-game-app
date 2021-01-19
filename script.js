"use strict";

function logger() {
    console.log("my name is Ali");
}

logger();

const appleOrangeJucie = fruitProcessor(2, 4);
console.log(appleOrangeJucie);

function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
};
console.log(calcAge2(1989), calcAge1(1989));

// Arrow function
const clacAge3 = (birthYear) => 2037 - birthYear;

console.log(clacAge3(1989));

const yearUntilRetirement = (birthYear, firstname) => {
    const age = 20 - birthYear;
    const retirement = 65 - age;
    return `${firstname} retires in ${retirement}`;
};
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
    return juice;
};

console.log(fruitPro(3, 10));

const fruitproSecond = (apples, oranges) => {
    const applePieces = cutFruitPieces(apples);
    const orangepieces = cutFruitPieces(oranges);
    const juice = `Ali has ${applePieces} apple pieces and ${orangepieces} orange pices.`;
    return juice;
};

console.log(fruitproSecond(12, 11));

const calcAvarege = (player1, player2, player3) =>
    (player1 + player2 + player3) / 3;
console.log(calcAvarege(10, 20, 30));

let scorDolphines = calcAvarege(10, 20, 30);
let scorKoalas = calcAvarege(20, 40, 60);

const checkWinner = function(avgKoalas, avgDolphines) {
    if (avgDolphines > avgKoalas) {
        console.log("Dolphine wins");
    } else {
        console.log(" Koalas wins");
    }
};

checkWinner(scorKoalas, scorDolphines);

const mySirName = "leo";

console.log(mySirName);

const y = 2.5;

function typingSpeed(x) {
    let z = y + x;
    return z;
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

let friends = ["micheal", "steven", "peter"];

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
};

const allYears = [1988, 1989, 1990, 1991];

const age1 = ageCal(allYears[0]);
const age2 = ageCal(allYears[1]);
const age3 = ageCal(allYears[allYears.length - 1]);

const age4 = [age1, age2, age3];
console.log(age4);

// methods in JS

const friend = ["Joey", "Racheal", "Ross", "monica"];
// add elements
const newLength = friend.push("pheebi");
console.log(friend);
console.log(newLength);
friend.unshift("John"); // like insert method in python
console.log(friend);
// remove method

friend.pop(); // Last
friend.pop(1); // Last

console.log(friend);

friend.shift(); // First
console.log(friend);

console.log(friend.indexOf("Ross"));

friend.push(23);
console.log(friend.includes("Ross"));
console.log(friend.includes("23"));
console.log(friend);

if (friend.includes("Joey")) {
    console.log("you have a friend called Joey");
}

const clacTipTwo = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/*
const bills = [125, 555, 44];
let tips = [];
const tipArray1 = clacTipTwo(bills[0]);
const tipArray2 = clacTipTwo(bills[1]);
const tipArray3 = clacTipTwo(bills[2]);

tips.push(tipArray1 + bills[0], tipArray2 + bills[1], tipArray3 + bills[2]);
console.log(tips);
*/
const ali = {
    firstName: "Ali",
    lastName: "Shooshtari",
    age: 2020 - 1989,
    job: "Haker",
    friends: ["Joey", "Ross", "Chandler"],
};
console.log(ali);
console.log(ali.lastName);
console.log(ali["lastName"]);

const nameKey = "Name";

console.log(ali["first" + nameKey]);
console.log(ali["last" + nameKey]);
/*
const intrestedIN = prompt(
    "What do you want to know about ali choose between fristName,lastName,age,job and friends :"
);

if (ali[intrestedIN]) {
    console.log(ali[intrestedIN]);
} else {
    console.log(
        "Wrong request!!!choose between fristName,lastName,age,job and friends :"
    );
}

ali.location = "Canada";
ali["secondJob"] = "developer";
console.log(ali);

const challeng = `${ali.firstName} has ${ali.friends.length} friends , and his best friend is ${ali.friends[0]}`;
console.log(challeng);
*/
const joey = {
    firstName: "Joey",
    lastName: "tribbiani",
    birthYear: 1989,
    job: "actor",
    friends: ["Chandler", "Ross"],
    hasDriverLicense: true,
    // ageCalc: function(birthYear) {
    //     return 2037 - birthYear;

    // }
    //ageClac: function() {
    //return 2037 - this.birthYear;
    //}

    ageCalc: function() {
        this.age = 2000 - this.birthYear;
        return this.age;
    },

    licenseCheck: function() {
        if (this.age >= 18) {
            this.hasDriverLicense === true;
            return "has a";
        } else {
            this.hasDriverLicense === false;
            return "does not have";
        }
    },
};

console.log(joey.ageCalc());
console.log(joey.age);

//console.log(joey.ageCalc(1991));
//console.log(joey['ageCalc'](1991));

const pragraph = `joey is ${
  joey.age
} old  actor , and he ${joey.licenseCheck()} a drivers license`;
console.log(pragraph);

const mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    },
};

const john = {
    firstName: "John",
    lastName: "Smith",
    mass: 150,
    height: 1.95,

    calcBMI: function() {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    },
};

const summery = function() {
    if (john.calcBMI() > mark.calcBMI()) {
        return `john's BMI (${john.calcBMI()}) is higher than mark's BMI (${mark.calcBMI()})`;
    } else
        return `john's BMI (${john.calcBMI()}) is lower than mark's BMI (${mark.calcBMI()})`;
};

console.log(summery());

for (let rep = 1; rep <= 10; rep++) {
    console.log(`LIfting weights repetition ${rep} times`);
}

const joeyArray = ["joey", "tribbiani", 23, "actor", ["Ross", "Chandler"]];
const types = [];
for (let i = 0; i < joeyArray.length; i++) {
    console.log(joeyArray[i]);

    types.push(typeof joeyArray[i]);
}

console.log(types);

const year = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < year.length; i++) {
    ages.push(2037 - year[i]);
}

console.log(ages);

console.log("___ONLY STRINGS___");
for (let i = 0; i < joeyArray.length; i++) {
    if (typeof joeyArray[i] !== "string") continue;

    console.log(joeyArray[i], typeof joeyArray[i]);
}

for (let i = 0; i < joeyArray.length; i++) {
    if (typeof joeyArray[i] === "number") break;

    console.log(joeyArray[i], typeof joeyArray[i]);
}

for (let i = joeyArray.length - 1; i >= 0; i--) {
    console.log(i, joeyArray[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`________Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifrung weight repetition ${rep}`);
    }
}

let rep = 1;
while (rep <= 5) {
    console.log(`WHILE: LIFTING ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log("you rolled 6");
}
/*
const calcPeopleBills = function(peopleBills) {
    return peopleBills >= 50 && peopleBills <= 30 ?
        peopleBills * 0.15 :
        peopleBills * 0.2;
};

const peopleBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const total = [];
const peopleTip = [];

for (let b = 0; b < peopleBills.length; b++) {
    const tip = calcPeopleBills(peopleBills[b]);
    peopleTip.push(Number(tip));
    total.push(Number(tip) + Number(peopleTip));
}

console.log(peopleBills, total, peopleTip);
*/
const peopleBillsTwo = [30, 35, 44, 55, 15, 60, 999, 1000, 500, 45, 68];
const tipPeople = [];
const totalTipAndBills = [];
/*
const resturant = function() {
    for (let b = 0; b < peopleBillsTwo.length; b++) {
        const tipps =
            peopleBillsTwo[b] >= 50 && peopleBillsTwo[b] <= 300 ?
            peopleBillsTwo[b] * 0.15 :
            peopleBillsTwo[b] * 0.2;
        tipPeople.push(tipps);
        totalTipAndBills.push(tipps + peopleBillsTwo[b]);
    }
    console.log(` tips [${tipPeople}]`);
    console.log(`sum up of tips and bills [${totalTipAndBills}]`);
};
resturant();
console.log(`actual bills [${peopleBillsTwo}]`);
*/

const resturant = function() {
    for (let b = 0; b < peopleBillsTwo.length; b++) {
        if (peopleBillsTwo[b] >= 300) {
            const tips = peopleBillsTwo[b] * 0.2;
            tipPeople.push(tips);
            totalTipAndBills.push(tips + peopleBillsTwo[b]);
        } else if (peopleBillsTwo[b] < 50) {
            const tips = peopleBillsTwo[b] * 0.15;
            tipPeople.push(tips);
            totalTipAndBills.push(tips + peopleBillsTwo[b]);
        }
    }

    console.log(tipPeople, totalTipAndBills);
};
resturant();

const resturant1 = {
    bills: [10, 45, 67, 88, 450, 500, 862],
    tips: [],
    total: [],

    calculation: function() {
        for (let b = 0; b < this.bills.length; b++) {
            if (this.bills[b] <= 300 && this.bills[b] <= 50) {
                const tip = this.bills[b] * 0.15;
                this.tips.push(tip);
                this.total.push(tip + this.bills[b]);
            } else {
                const tip = this.bills[b] * 0.2;
                this.tips.push(tip);
                this.total.push(tip + this.bills[b]);
            }
        }
        console.log(this.tips, this.total);
    },
};

resturant1.calculation();