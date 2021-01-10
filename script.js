let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Ali");
console.log("31");

let myName = "Pooneh";
console.log(myName);
console.log(myName);
console.log(myName);


let myFirstJob = "Coder";
let myCurrentJob = "Hacker";


console.log(myFirstJob);
console.log(myCurrentJob);


let country = "IRAN";
let continent = "Asia";
let population = "80/000/000 M";


console.log(country);
console.log(continent);
console.log(population);



let javascriptIsFun = true
console.log(javascriptIsFun)
javascriptIsFun = "yes!"
console.log(typeof javascriptIsFun)



let age = 31;
age = 32;


// you cannot change the const variable
const birthYear = 1989;


// basic operators
// mathematical 

const now = 2037;
const ageAli = now - 1989;
const ageMina = now - 2018;
console.log(ageAli, ageMina);



console.log(ageAli * 2, ageMina / 10, 2 ** 3);


const firstName = "Ali";
const lastName = "shooshtari";
console.log(firstName + " " + lastName);


let x = 10 + 5; //15
x += 10 // x = x + 10
x *= 4
x++
x--

console.log(x);

console.log(ageAli > ageMina);
console.log(ageMina >= 18);











const job = "Hacker";
const lifeGole = "white hat hacker";
const lifeGoleSecond = "black hat hacker";

const introLife = `I am a ${job} and going to be a ${lifeGole} and then I will be a ${lifeGoleSecond}`;


console.log(introLife);




const ageMy = 15;
const ligalAge = 19;


if (ageMy >= 19) {
    console.log("Ali can drive a car");
} else {
    const yearLeft = ligalAge - ageMy;
    console.log(`you are too young .you can get you licence in ${yearLeft} years`);
}



const weightMark = 100;
const heightMark = 1.69;

const weightJohn = 92;
const heightJohn = 1.95;


let calculateBMIMark = weightMark / heightMark ** 2
let calculateBMIJohn = weightJohn / heightMark ** 2

if (calculateBMIMark > calculateBMIJohn) {
    console.log(`Mark BMI is greater than John, Mark BMI is : ${calculateBMIMark} and John BMI is : ${calculateBMIJohn}`)


} else {
    console.log(`John BMI is greater than Mark,John BMI is : ${calculateBMIJohn} and Mark BMI is (${calculateBMIJohn})`)

}
// type conversion
const inputYear = "1989";
console.log(Number(inputYear));
console.log(inputYear + 10);



console.log(String(31));

// type coersion

console.log("I am " + 31 + " years old");
console.log('50' - '23' - 2);
console.log('100' * '12');
console.log('100' / '12');
console.log('10' ** '2');
console.log('10' % '3');
console.log('10' > '3');


let n = '1' + 1; // "11"
n = n - 1;
console.log(n);

// falsy values : 0 , undefine, null , NaN,''
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Ali"));
console.log(Boolean({}));
console.log(Boolean(''));




const money = 100;
if (money) {
    console.log("don't spend it all");


} else {
    console.log("you sholud get a job");
}

let height = 0;

if (height) {
    console.log('YaY! height is defined');

} else {
    console.log('height is undefined');
}


/*
const ageLast = "19";
if (ageLast === 19) console.log("you just became an adult");



if (ageLast === "19") console.log("you just became an adult");

const favorite = Number(prompt("what is your favorite number?"));


console.log(favorite);
console.log(typeof favorite);




if (90 >= favorite && favorite >= 0) {
    console.log(`coool ${favorite} is an amazing number!!!`);
} else if (favorite < 0) {
    console.log(`${favorite} is not an age number you can't be ${favorite}`);


} else if (favorite >= 91) {
    console.log("Dude you are really old!!!");

} else {
    console.log("you entered a string");

}

*/




const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);


const shouldDrive = hasDriverLicense && hasGoodVision

if (shouldDrive) {
    console.log("Sarah is able to drive!");

} else {
    console.log("someone else should drive.....")
}



const shouldDriveCar = hasDriverLicense || hasGoodVision

if (shouldDriveCar) {
    console.log("Sarah is able to drive!");

} else {
    console.log("someone else should drive.....")
}



const teamDolphines = (96 + 0 + 100) / 3;
const teamKoalas = (96 + 100 + 0) / 3;
console.log(teamDolphines);
console.log(teamKoalas);



if (teamDolphines >= 100 || teamKoalas >= 100) {
    if (teamDolphines === teamKoalas) {
        console.log("this is a draw")


    } else if (teamKoalas >= 100 && teamDolphines < 100 || teamKoalas >= 100 && teamDolphines >= 100) {
        if (teamKoalas > teamDolphines && teamDolphines < 100) {
            console.log(`team Koalas wins the score is ${teamKoalas} \nteam Dolphines escor is under 100 ,team dolphines is disqualified`);

        } else if (teamKoalas > teamDolphines && teamDolphines >= 100) {
            console.log(`team Koalas wins the escore is ${teamKoalas}`);
        }



    } else if (teamDolphines >= 100 && teamKoalas < 100 || teamDolphines >= 100 && teamKoalas >= 100) {
        if (teamDolphines > teamKoalas && teamKoalas < 100) {
            console.log(`team Koalas wins the score is ${teamDolphines} n/ team Koalas is disqualified their score is less than 100`)
        } else if (teamDolphines > teamKoalas && teamKoalas >= 100) {
            console.log(`team dolphines win the score is ${teamDolphines}`)

        }





    }



} else {
    console.log("both are under 100 both lost")
}



const day = "monday";


switch (day) {
    case 'monday': // day === monday
        console.log("plan my course structure");
        console.log("go to coding meetup");

        break;
    case "tuesday":
        console.log("prepare theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log('write code examples');
        break;
    case "friday":
        console.log('record videos');
        break;
    case "saturday":
    case "sunday":
        console.log('Enjoy the weekend');
        break;
    default:
        console.log("not a valid day!")
        break;
}

const rAge = 23;
rAge >= 18 ? console.log('I would like to drink wine') : console.log('so water');


const gender = "female" === "male" ? 'can shop' : 'cannot shop ';
console.log(gender);