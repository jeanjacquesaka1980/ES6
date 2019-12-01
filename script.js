/* CLASSIC FUNCTION VS ARROW FUNCTION */

// CLASSIC FUNCTION
function calculation(number) {
    return number * 5;
}

console.log(calculation(5));
// output: 25

/* -------------------- */

// ARROW FUNCTION WITH A SINGLE ARGUMENT
const calculation2 = number => {
    return number * 5;
}

console.log(calculation2(5));
// output: 25

/* -------------------- */

// ARROW FUNCTION WITH MORE THAN ONE ARGUMENT
const calculation3 = (number, number2) => {
    return number * number2;
}

console.log(calculation3(5, 5));
// output: 25

/* -------------------- */

// TRANSFORM A METHOD FROM AN OBJECT INTO AN ARROW METHOD

// OBJECT WITH A CLASSIC METHOD
// presentFriend is the method
const me = {
    name: "Jeremy",
    presentFriend: function (friend) {
        return "Do you know " + friend + " ?";
    }
};

console.log(me.presentFriend("Aleksandar"));

/* -------------------- */

// OBJECT WITH AN ARROW METHOD AND AN ARGUMENT
// presentFriend is the method
const me2 = {
    name: "Jeremy",
    presentFriend: friend => "Do you know " + friend + " ?"
};

console.log(me2.presentFriend("Markus"));

/* -------------------- */

// OBJECT WITH AN ARROW METHOD AND WITHOUT ANY ARGUMENT
// presentMyself is the method
const me3 = {
    name: "Jeremy",
    presentMyself: () => "Hello ! My name is " + me3.name
};

console.log(me3.presentMyself());

/* -------------------- */

// OBJECT WITH AN ARROW METHOD AND MORE THAN ONE ARGUMENT
// presentThreeFriends is the method
const me4 = {
    name: "Jeremy",
    presentThreeFriends: (friend1, friend2, friend3) => "Do you know " + friend1 + ", " + friend2 + " and " + friend3 + " ?"
};

console.log(me4.presentThreeFriends("Gogi", "Balint", "Louis"));

/* -------------------- */

// OBJECT WITH AN ARROW METHOD, ONE ARGUMENT AND A BLOCK OF CODE
// presentFriend is the method
const me5 = {
    name: "Jeremy",
    presentFriend: friend => {
        const presentation = "Do you know " + friend + " ?";
        console.log(presentation);
        return presentation;
        // !! IMPORTANT !! if you need to "programm" something into the function (like the example)
        // you must use curly brackets. Check me4 et me3 to see the difference.
        // if you put curly brackets on me3 and me4 after the arrow, the output will be undefined.
        // to resume: if you return a value like me3 and me4, you don't need curly brackets. 
        // if you need to programm (so write code with let, const etc ...) you need the curly brackets
    }
};

me5.presentFriend("Vanessa");
// in resume. return a value >>> no curly brackets.
// need to programm something or code something >>> with curly brackets.

/* -------------------- */

// HOW BEHAVE "THIS" ON ARROW FUNCTION
// check your console to have a look

const classicFunction = function() {
    console.log(this);
    // "this" here will point me6
}

const arrowFunction = () => console.log(this);
    // "this" here will point the window so the global scope
    // const arrowFunction = () => {console.log(this)}; will give the same output

const classicFunctionBind = classicFunction.bind(this);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
    // "this" here will point also the window so the global scope.
    // it's kind of what does arrow function, it's binding to the window
    // this example is just to make an understanding about what does arrow function with "this"

const me6 = {
    name: "Jeremy",
    presentClassic: classicFunction,
    presentArrow: arrowFunction,
    presentClassicBind: classicFunctionBind
}

me6.presentClassic();
me6.presentArrow();
me6.presentClassicBind();

/* -------------------- */

/* DEFAULT PARMETERS */

// FUNCTION WITH CLASSIC PARAMETERS
function completeName(name, familyName){
    console.log(name + " " + familyName);
}

completeName("Jeremy", "Bertin"); // >>> Output is "Jeremy Bertin"
completeName("Jeremy"); // >>> Output is "undefined"

/* -------------------- */

// FUNCTION WITH DEFAULT PARAMETERS
function completeName2(name, familyName = "Fronteau"){
    console.log(name + " " + familyName);
}

// if you give a default parameter to your function, when you call it, you don't need to write familyName parameter
completeName2("Jeremy"); // >>> Output is "Jeremy Fronteau"

// but you can re write anyway the familyName parameter
completeName2("Jeremy", "Bertin"); // >>> Output is "Jeremy Bertin"

/* -------------------- */

// always put default parameters at the end (right) because js read from left to right. see example below
function completeName3(name = "Jeremy", familyName){
    console.log(name + " " + familyName);
}

completeName3("Bertin"); // >>> Output is "Bertin undefined"

/* -------------------- */

// on the example below, we put the default parameter at the end (does not matter the order they have to be displayed)
// then in the console.log() you order them as you wish they appear
function completeName4(familyName, name = "Jeremy"){
    console.log(name + " " + familyName);
}

completeName4("Bertin"); // >>> Output is "Jeremy Bertin"

/* -------------------- */

// you can declare a variable in the global and use it also for your default parameters
const STUDIES = "Web Development";

function completeName5(name, familyName = STUDIES){
    console.log(name + " " + familyName);
}

completeName5("Jeremy"); // >>> Output is "Jeremy Web Development"
// you could also make like familyName = name, the output will be "Jeremy Jeremy"
//  you could add some strings also to familyName like so familyName = "My family name is " + name

/* -------------------- */

/* PARAMETER REST */

// FUNCTION WITHOUT REST
const myNumbers = [5, 8, 21, 46, 17];

function sumMyNumbers(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i ++){
        sum += numbers[i];
    }
    return sum;
}

console.log(sumMyNumbers(myNumbers)); // outpust is 97

// SAME FUNCTION WITH REST

function sumMyNumbers2(...numbers){
    // the rest parameter take free values and store them into an array "... = rest"
    console.log(numbers); //output [5, 8, 21, 46, 17]
    let sum = 0;
    for (let i = 0; i < numbers.length; i ++){
        sum += numbers[i];
    }
    return sum;
}

let x = 5;
let y = 8;
let z = x + y;
// i think that the parameter rest is useful when you need to pick up different value from some datas and
// store them quickly and easily in one array to then re use the datas or the array, what ever.

console.log(sumMyNumbers2(x, y, z, 21, 46, 17)); // outpust is 110
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

/* -------------------- */

/* PARAMETER SPREAD */ 

//  SPREAD is the opposite of REST. 
// REST is taking free values to put them in one single array
// SPREAD will take an array and transform into free values

const someNumbers = [5, 8, 21];

function makeTheSumByThree(num1, num2, num3){
    return num1 + num2 + num3;
}

console.log(makeTheSumByThree(...someNumbers)); //output is 34 (5 + 8+ 21 = 34)
console.log(makeTheSumByThree(someNumbers, someNumbers, someNumbers)); // output is 5,8,215,8,215,8,21
// you could not before sum like magic an array. at the code below, console.log() throw the array three times
//  with SPREAD it convert the three numbers into the array as free values and can then sum them.
//  like this you can pick up data infos from different object for example, store them in one array to 
// finally display them as a STRINg onto your browser easily and fast

/* -------------------- */

/* ANOTHER EXAMPLE */

const redFruits = ["strawberries", "raspberries"];
const greenFruits = ["apples", "pears"];

const fruits = [...redFruits, ...greenFruits];
// it took the two arrays, SPREAD them in free values to then put them in one array.
// because we gave two square brackets to the const fruits.

console.log(fruits); // output is ["strawberries", "raspberries", "apples", "pears"]

const fruits2 = [...redFruits, "bananas", ...greenFruits];
// we add BANANAS to the array
console.log(fruits2);

/* -------------------- */

/* SPECIAL CASE */

const redFruits2 = ["strawberries", "raspberries"];
const allRedFruits = redFruits2;
console.log(redFruits2); // output is ["strawberries", "raspberries"]

allRedFruits.push("cherries");

console.log(redFruits2); // output is ["strawberries", "raspberries", "cherries"]
console.log(allRedFruits); // output is ["strawberries", "raspberries", "cherries"]
// in this case js will add cherries to allRedFruits and redFruits2
// check code below to see how to add cherries only to allRedFruits

/* -------------------- */

const redFruits3 = ["strawberries", "raspberries"];
const allRedFruits3 = [...redFruits3];

allRedFruits3.push("cherries");

console.log(redFruits3); // output is ["strawberries", "raspberries"]
console.log(allRedFruits3); // output is ["strawberries", "raspberries", "cherries"]
// now only allRedFruits3 get "cherries"

// !! IMPORTANT !! you write REST and SPREAD the excatly same way but the behavior depends on the context.
// JS recognize it, nothing more to think.

/* -------------------- */

/* FOR OF LOOP */

// CLASSIC FOR LOOP ITERATE THRU AN ARRAY
const redFruits4 = ["strawberries", "raspberries", "cherries"];

for (let i = 0; i < redFruits4.length; i ++){
    console.log(redFruits4[i] + " are good !");
}
// output is strawberries are good !
// raspberries are good !
// cherries are good !

// FOR OF LOOP ITERATE THRU AN ARRAY
for (let fruit of redFruits4){
    console.log(fruit + " are good !");
}
// output is same as the function on top
// you could use any words instead of "fruit" it will work.
// fruit is equal at redFruits4[i]
// like the code below

for (let i = 0; i < redFruits4.length; i ++){
    let fruit = redFruits4[i];
    console.log(fruit + " are good !");
}
// output is same as the function on top
// this function does the same thing as the function on top but the one on top is more clear and elegant