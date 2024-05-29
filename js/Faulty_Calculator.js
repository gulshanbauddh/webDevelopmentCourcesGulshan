//Random Number.
let a = Math.floor(Math.random() * 10);
// console.log("Randan Number is:", a);

let no = 4;     // 1:for=>Addition, 2:for=>Substraction, 3:for=>Multipli, 4:for=>Divid. 
let no1 = 10;   // 1st number;
let no2 = 20;   // 2nd number;

if (a != 0) {
  console.log("Right Calculator"); // This line Only for Testing purpase
  calculat(no, no1, no2);
} else if (no != 4) {
  no = no + 1;
  console.log("Faulty Calculatir"); // This line Only for Testing purpase
  calculat(no, no1, no2);
} else {
  no = 1;
  console.log("Faulty Calculatir"); // This line Only for Testing purpase
  calculat(no, no1, no2);
}

function calculat(no, x, y) {
  switch (no) {
    case 1:
      console.log(x + y);
      break;
    case 2:
      console.log(x - y);
      break;
    case 3:
      console.log(x * y);
      break;
    case 4:
      console.log(x / y);
      break;
    default:
      console.log("Invalid Choise");
      break;
  }
}
