/* 
var students = ["Ah Young Cho", "Krysta Hartono", "Alexander McKenzie", "Kayla Schroter", "Spencer Seligman", "Ayushi Shah", "Michelle Stiles", "Shannon Su", "Sophie Telgheder", "extra", "Miles you shit"]


for (var counter = 0; counter < students.length; counter++) {
console.log(students[counter] + " loves HTML");
}



function myFunction() {
    console.log("Hello world");
}

function addNums(num1, num2) {
    var sum = num1 + num2;
    return sum;
    
}



var person = { 
    name: "Brendan",
    age: 33,
    location: "Brooklyn, NY"
};


var numClicks = 0;


$("h1").click(function() {
    $("body").css("background-color","blue");
    $("h1").css("color","white")
    numClicks++;
    var times;
    if (numClicks < 2) {
        times = " time."
    } else {
        times = " times."
    }
    $("h1").html(phrase);
});

*/


var students = ["Ah Young Cho", "Krysta Hartono", "Alexander McKenzie", "Kayla Schroter", "Spencer Seligman", "Ayushi Shah", "Michelle Stiles", "Shannon Su", "Sophie Telgheder"];

$("h1").html(students[Math.floor(Math.random()*students.length)]);