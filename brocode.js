/*

document.getElementById('submitButton').onclick = function() {
    let temp;

    if(document.getElementById('cButton').checked) {

        temp = document.getElementById('textBox').ariaValueMax;
        temp = Number(temp);

        temp = toCelsius(temp);

        document.getElementById('tempLabel').innerHTML = temp + "°C";

    } else if(document.getElementById('fButton').checked) {

        temp = document.getElementById('textBox').value;
        temp = Number(temp);

        temp = toFarenheit(temp);

        document.getElementById('tempLabel').innerHTML = temp + "°F";

    } else {
        document.getElementById('tempLabel').innerHTML = 'Select a unit';
    }

}










function toCelsius(temp) {
    return (temp - 32) * (5/9);
}

function toFarenheit(temp) {
    return temp * 9 / 5 + 32;
}

*/

/*

let grades = [100, 50, 90, 60, 80, 70]; 

grades = grades.sort(descendingSort);
grades = grades.sort(ascendingSort)

grades.forEach(print);


function descendingSort(x, y) {
    return y - x;
}

function ascendingSort(x, y) {
    return x - y;
}

function print(element) {
    console.log(element);
}


*/


// Function expression = function without a name, avoid polluting the global scope with names. 

/*
const greeting = function () {
    console.log('Hello');
}

greeting();

*/

let count = 0;

function increaseCount(){
    count += 1;
    document.getElementById('myLabel').innerHTML = count;
    
}

function decreaseCount(){
    count-=1;
    document.getElementById('myLabel').innerHTML = count;
}