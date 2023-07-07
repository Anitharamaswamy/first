'use strict';
/*function calcAverage(score1, score2, score3) {
    const Average = (score1 + score2 + score3) / 3;

    return Average;
}
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const DolphinAverage = calcAverage(85, 54, 41);
console.log(DolphinAverage);
const KolasAverage = calcAverage(23, 34, 27);
console.log(KolasAverage);


function checkWinner(DolphinAverage, KolasAverage) {
    if (KolasAverage > (2 * DolphinAverage)) {
        console.log(`koalas wins ${DolphinAverage}, ${KolasAverage}`);
    }

    else if (DolphinAverage > (2 * KolasAverage)) {
        console.log(`Dolphin wins ${DoliphinAverage}, ${KolasAverage}`)
    }
    else {
        console.log("no one wins");
    }
}

checkWinner(DolphinAverage, KolasAverage);

// Function declaration Vs Expression

const worldPopulation = 7900;
const chinaPopulation = Number(prompt('what is the population of chine'));
const indiaPopulation = Number(prompt('what is the population of India'));


/*function percentageOfWorld1(population) {
    const percentage = (population / worldPopulation) * 100
    console.log(`The percentage is ${percentage}`);
    return percentage;

}

const percentage1 = percentageOfWorld1(chinaPopulation);
percentageOfWorld1(indiaPopulation);
percentageOfWorld1(chinaPopulation);*/


//console.log(`the percentage of china is ${percentage1}`);
// expression
/*const percentage = function (population) {
    return (population / worldPopulation) * 100;
}
const percentageOfindia = percentage(indiaPopulation);
console.log(percentageOfindia);
const percentageOfchina = percentage(chinaPopulation);
console.log(percentageOfchina); */
// Arrow function
/*
const populationPercentage = population => (population / worldPopulation) * 100;

const percentageOfindia = populationPercentage(indiaPopulation)
console.log(`percentage of india is ${percentageOfindia}`);
const percentageOfChina = populationPercentage(chinaPopulation);
console.log(`percentage of india is ${percentageOfChina}`); */

//Introduction to arrays
// arrays initiallization

const fruits = ['apple', 'mango', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);

function fruitProcessor(apple) {
    const fruit = 2 * apple;
    return fruit;
}
const fruitMixer = [fruitProcessor(2), fruitProcessor(2)];
console.log(fruitMixer);
