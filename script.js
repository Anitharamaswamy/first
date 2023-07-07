/*let js = 'anitha';
if (js === 'anitha') alert('java is fun!');
console.log(10 + 20 + 30)
let isIland = false;
let language;
language = "Tamil";
const religion = "Hindu";
console.log(religion);

console.log(language);
console.log(isIland);

//console.log(country);
//Assignment 2
//let country = "india";

const POPULATION = 40000000;
let country1 = "south";
let country2 = "north";
let continent = "Asia";
let country = " India";
country1 = POPULATION / 2;
country2 = POPULATION / 2;
country2 += country2;
country2++;
console.log(country1, country2);
console.log(country + " " + "is in" + " " + continent)


let person1 = "Mark";
let person2 = "john";
const markWeight = 78;
const markHeight = 1.69;
const johnHeight = 1.88;
const johnWeight = 95;
let markBMI, johBMI;
markBMI = markWeight / (markHeight ** 2);
johnBMI = johnWeight / (johnHeight ** 2);
let markHeigherBMI;

if (markBMI > johBMI) {
    console.log(`mark BMI is (${markBMI}) higher than johnBMI`);

}
else {
    console.log(`John BMI is (${johnBMI}) higher than Mark BMI`);
}
//Type conversion assignment
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17)
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
// Equality operator assignment
const numNeighbours = Number(prompt("How many neighbour countries does your country have?"));
console.log(numNeighbours);

if (numNeighbours === 1) {
    console.log(" only 1 border");

}
else if (numNeighbours === 2) {
    console.log(" Two borders");
}
else if (numNeighbours === 3) {
    console.log("Have 3 borders");

} else {
    console.log("No borders");
}

// coding challenge 3
const dolphinScore1 = 97;
const dolphinScore2 = 112;
const dolphinScore3 = 101;
const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 123;

//average score
const dolphinAverage = (dolphinScore1 + dolphinScore2 + dolphinScore3) / 3;
const koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
console.log(`dolphin average is (${dolphinAverage})`);
console.log(`koalas average is (${koalasAverage})`);
/*
if (koalasAverage > dolphinAverage) {
    console.log("koalas is the winner!");

}
else if (koalasAverage === dolphinAverage) {
    console.log("draw");
}
else if (dolphinAverage > koalasAverage) {
    console.log("dolphin is the winner");
}*/

//bonus 1
/*

if ((koalasAverage > dolphinAverage) && (koalasAverage >= 100)) {
    console.log("koalas is the winner");
}
else if ((dolphinAverage > koalasAverage) && (dolphinAverage >= 100)) {
    console.log("dolphin is the winner");
}
else if ((dolphinAverage === koalasAverage) && dolphinAverage >= 100 && koalasAverage >= 100) {
    console.log("match is draw");
}
// if (dolphinAverage > koalasAverage && min)

*/
//coding challenge 4 - tip calculator using ternary
var bill = 100;
var tips = 0;
/*
    tips = bill * 15 / 100;
    bill = bill + tips;
    console.log(`bill is ${bill}`);
}*/
bill >= 50 && bill <= 300 ? tips = bill * 15 / 100 : tips = tips * 20 / 100;
console.log(`bill is ${bill + tips}`);
