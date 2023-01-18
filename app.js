// get input.value on eventlistener
// convert input.value for length, volume and mass and return output
// render ouput for each

let input = document.getElementById('number-input').value;
const convertBtn = document.getElementById('convert-btn');

const paragraphList = document.querySelectorAll('p');

let feet = 300;
let meters = 22;

paragraphList.forEach(paragraph => {
    paragraph.innerHTML = `${input} meter = ${feet} feet | ${input} feet = ${meters}`;
});

// converter logic
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function converter(inputValue) {
    let feetToMeters = (inputValue / 3.281).toFixed(3);
    let metersToFeet = (inputValue * 3.281).toFixed(3);

    console.log(feetToMeters);
    console.log(metersToFeet);
    
    let gallonsToLiters = (inputValue / 0.264).toFixed(3);
    let litersToGallons = (inputValue * 0.264).toFixed(3);
    console.log(gallonsToLiters);
    console.log(litersToGallons);

    let poundToKilos = (inputValue / 2.204).toFixed(3);
    let kilosToPounds = (inputValue * 2.204).toFixed(3);
    console.log(poundToKilos);
    console.log(kilosToPounds);

}

converter(20);

function convertLength(input) {
    let outputMeter = (inputValue / 3.281).toFixed(3);
    let outputFeet = (inputValue * 3.281).toFixed(3);


    document.getElementById('length-paragraph').innerHTML = `${input} meter = ${outputFeet} feet | ${input} feet = ${outputMeter}`;
}