// let surname= "Bauddh";
// let name=`Gulshan ${surname}`;
// console.log(name);
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.slice(2));
// let newName=name.replace("Bauddh","Kumar")
// console.log(newName);
// console.log(newName[4]);

// === Practice Set -4 ===
// +++ Q-1 +++
// console.log("hae\"".length);

// +++ Q-3 +++
// let str="Gulshan Bauddh";
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// +++ Q-4 +++
// let str="Please give Rs 1000";
// let str1=(str.slice(0,6));
// let str2=(str.slice(7,11));
// let str3=(str.slice(12,14));
// let str4=(str.slice(15,19));
// console.log(str1);
// console.log(str2);
// console.log(str3);
// console.log(str4);

// +++ Q-5 +++
// Method-1
// let str="Gulshan";
// let cut=str.slice(3,4);
// str1=str.replace(cut,"B");
// console.log(str1);
// Method-2
let str="Gulshan";
str1=str.replace(str.slice(3,4),"B");
console.log(str1);