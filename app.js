
const convertBtn = document.getElementById('convert-btn');

convertBtn.addEventListener('click', function() {
    let input = document.getElementById('number-input').value;
    
    convertLength(input);
    convertVolume(input);
    convertMass(input);
    
})

// converter logic
/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function convertLength(inputValue) {
    let outputMeter = (inputValue / 3.281).toFixed(3);
    let outputFeet = (inputValue * 3.281).toFixed(3);

    document.getElementById('length-paragraph').innerHTML = `${inputValue} meters = ${outputFeet} feet | ${inputValue} feet = ${outputMeter} meters`;
}

function convertVolume(inputValue) {
    let outputLiters = (inputValue / 0.264).toFixed(3);
    let outputGallons = (inputValue * 0.264).toFixed(3);

    document.getElementById('volume-paragraph').innerHTML = `${inputValue} liters = ${outputGallons} gallons | ${inputValue} gallons = ${outputLiters} liters`;
}   

function convertMass(inputValue) {
    let outputKilos = (inputValue / 2.204).toFixed(3);
    let outputPounds = (inputValue * 2.204).toFixed(3);

    document.getElementById('mass-paragraph').innerHTML = `${inputValue} kilograms = ${outputKilos} pounds | ${inputValue} kilograms = ${outputPounds} pounds`;
}   