let nameOfElement;

let date1 = new Date("9/11/23");
let date2 = new Date();

// To calculate the time difference of two dates
let Difference_In_Time = date2.getTime() - date1.getTime();

// To calculate the no. of days between two dates
let Difference_In_Days = 
	Math.round(Difference_In_Time / (1000 * 3600 * 24));

nameOfElement = "demo";
console.log("Books are life fr fr");

// Código en español
alert("Welcome Girlypops");

// English code
console.log("heyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");

function picChange(){
  document.getElementById("demo").innerHTML = "If you like your coffee hot...";
}

let person= {
firstName: "Nickle",
  age: 69420,
  favColor: "red",

};

let website = {
siteAge:86,
  siteName: "Jens Book Blog",
}

function assignment(){
  person.age ++;
  window.alert(website.siteName + " is " + website.siteAge + " days old as of December 5th ");
}

function assignment2(){
  console.log(person.firstName + " likes the color " + person.favColor);

}

function printToConsole(input) {
window.alert(input);

}

function printThingy(input) {
window.alert(input);

}


// To display the final no. of days (result)

function Days {
// To display the final no. of days (result)
window.alert ("It's been " +  Difference_In_Days + " days");
}

