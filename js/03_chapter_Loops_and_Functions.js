//  Loops and Functions ( Chapter -3 )
// #1 for loop
// for(i=1; i<=5; i++){
//     console.log("Gulshan Bauddh",i)
// }

// #2 for-in loop
// for-in loop work in only Objet
// let obj = {
//   name: "Gulshan",
//   surName: "Bauddh",
//   rollno: "12",
//   class: "cse",
// };
// for (const key in obj) {
//     const element=obj[key];
//   console.log(key, "->", element);
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element);
//     }
// }
// #3 for-of loop
// for-of loop work in only Array

// #4 While loop
// let i=1;
// while(i<=3){
//     console.log("Gulshan Bauddh",i);
//     i++;
// }

// ===== Function in JavaScript =====

// console.log("Gulshan Bauddh");
// function santance(hero) {
//     console.log("hero! " +hero+ " is very wonderfull persion.");
//     console.log("hero! " +hero+ " is very smart persion.");
//     console.log(hero+ " is very good looking persion.");
//     console.log(hero+ " is very wonderfull persion.");
//     console.log(hero+ " is very powerfull persion.");
// }
// santance ("Gulshan");
// santance("Ritik");

// function add(a,b) {
//     console.log("Addition is ",a+b);
// }

// add(7,9);
// add(7,7);

// function add(a,b,c=2) {
//     return a+b+c;
// }

// prin1= add(6,8);
// prin2= add(16,28,5);
// console.log(prin1);
// console.log(prin2);

// const gul=(x)=>{
//     console.log("I am fuction",x);
// }
// gul("Gulshan");
// gul("Gulshan Bauddh");
// gul("Gulshan GB");

// const gbg=(a)=>{
//   console.log("Somtiong and Nothing", a);
// };
// gbg("hdbf");
// gbg("dified");
// gbg("iouirfdj");

// Chapter-3 ++ Practice set
// === Q-1 ==
// let obj = {
//     harry: 98,
//     gulshan: 54,
//     karan: 95,
//     rohan: 45,
//     kamlesh: 65,
// };
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, ":", element);
//     }
// }

// === Q-3 ===
// let a=7;
// if(a==7){
//     console.log("Correct number");
// } else console.log ("InCorrect Number");

console.log("Gulshan Bauddh");
//function gul(a,b,c,d,e){
  // console.log((a+b+c+d+e)/5);
//}
//gul(3,5,7,9,3);

//__________________________
//Method 2
function gul(a,b,c,d,e){
   return ((a+b+c+d+e)/5);
}
pre=gul(3,5,7,4,3);
console.log(pre);




