// Faulty Calculator give 10% Wrong Answer
let random = Math.random();
console.log(random);

no1=prompt("Enter 1st Number")
no=prompt("Enter Operation")
no2=prompt("Enter 2st Number")

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

// Rigth Calculation
if (random > 0.2) {
  alert(`The Right result is: ${eval(`${no1} ${no} ${no2}`)}`);
}

// Wrong Calculation
else {
  no=obj[no];
  alert(`The Wrong result is: ${eval(`${no1} ${no} ${no2}`)}`);
}
