var s="Hello World";
s=[1,'Bob','Steve',10];
// console.log(typeof(s));
// // console.log(s);

// /*    */

// s="Hello"+ 20;
// console.log(s);
var b="10";

var c=10;

// if(b !== c) // value + datatype
//     console.log("not equal");

var d =32+ 15;

// console.log(d);


function sayHello(){

    console.log("Hello World");
}

function add(a,b){

    return a+b;
}

function greatestOfThree(a,b,c)
{
    if(a>b && a>c)
        return a;
    else if(b>a && b>c)
        return b;
    else{
        return c;
    }


}
var vs;

// console.log(greatestOfThree(23,89,1000));
// console.log("10"==10);  // true


// if(typeof(vs)== "undefined")
//     console.log("it is undefined");
// // console.log("true"===true); // false

var rating=0;
switch(rating){


    case 1:
        console.log("Thanks for reviewing 1 star! How can we improve our services?");
        break;
    
    case 2:
        console.log("Thanks for reviewing 2 star! How can we improve our services?");
        break;

    case 3:
        console.log("Thanks for reviewing 3 star ! How can we improve our services?");
        break;

    case 4:
        console.log("Thanks for reviewing 4 star !");
        break;

    case 5:
        console.log("Thanks for reviewing 5 star!");
        break;

    default:
        console.log("invalid stars! :)");


}

// loops 


// do{

//     console.log(i);
//     i++;

// }while(i<=10);

// i=0;
// while(i<=10){

//     console.log(i);
//     i++;
// }
var i=0;
for(;;){
    if(i>10)
        break;
    console.log(i);
    i++;
}

//3 or 5

function isDivisbleByFiveOrThree(a){

    if(a%5==0 || a%3==0)
        return true;
    else
        return false;
}

// 3 and 5
function isDivisbleByFiveAndThree(a){

    if(a%5==0 && a%3==0)
        return true;
    else
        return false;
}


console.log(isDivisbleByFiveOrThree(5));
console.log(isDivisbleByFiveOrThree(31));
console.log(isDivisbleByFiveAndThree(15));