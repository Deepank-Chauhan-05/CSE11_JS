//LECTURE 1
console.log("hello world");
document.write("hellow world2 <br>");



//LECTURE 2
//this is a comment

var num = 10;
console.log(num);
console.log(typeof(num));

num = false;
console.log(num);
console.log(typeof(num));

num = "hello";
console.log(num);
console.log(typeof(num));

//Reference type -> funcion, array, object
// function
var SayHello = function () {
    console.log("hello world");
}
SayHello();

// array
var numarray = [1, 2, 3, 4, 5];
var animals = ["dog", "cat", "rat"];

// object
var person = {
    name: "arun",
    age: 12,
    title: "software engineer"
}

// symbol type
const sym1 = Symbol("u");
console.log(sym1);
const sym2 = Symbol("q");
console.log(sym1 == sym2); //false, each symbol is unique


//LECTURE 3

// = -> assignment
// == -> comparison
// === -> strict type checking
// operators -> arithmatic, relational, assignment, logical, ternary

//arithmetic
let x=10;
let y=5;
console.log(x+y);

//relational
console.log(x>y);
console.log(x<y);

//assignment
x=x+10;
console.log(x);
y=y/2;
console.log(y);

//logical

//ternary

//find the max out of 3 numbers using ternary operators

//loops
var count;
document.write("starting loops <br>");
for(count=0;count<10;count++){
    document.write("count: ",count,"<br>");
}
document.write("Loops stopped <br>");


//LECTURE 4

//while loop
var count =0;
document.write("starting loop");

while(count<10){
    document.write("current loop",count,"<br>")
    count++;
}

//conditionals
let age=20;
if(age<=18){
    console.log("you are an adult");
}
else{
    console.log("you are not an adult");
}

//switch case

var grade='B';
document.write("entereing switch case <br>");
switch(grade){
    case 'A':
        document.write("good job");
        break;

    case 'B':
        document.write("pretty good job");
        break;

    case 'C':
        document.write("decent job");
        break;

    case 'D':
        document.write("bad job");
        break;

    default:
        document.write("invalid");
}

//functions
function myfun() {
    alert("hello world");
}

object.onclick = function () {
    myfun();
};