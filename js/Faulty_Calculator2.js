// Faulty Calculator
let random = Math.random();
console.log(random);

no1=prompt("Enter 1st Number")
no=prompt("Enter Operation")
no2=prompt("Enter 2st Number")

// no1 = 6;
// no2 = 4;
// no = "+";

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

// Rigth Calculation
if (random < 0.1) {
    alert("I am Right");
  alert(`The result is ${eval(`${no1} ${no} ${no2}`)}`);
}

// Wrong Calculation
else {
  no=obj[no];
  alert(`The result is ${eval(`${no1} ${no} ${no2}`)}`);
  alert("I am Wrong");
}
