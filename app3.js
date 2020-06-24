//Chapter 26-30
//1. Write a program that takes a positive integer from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number  
 
var num=prompt("Enter positive integer:");
var n=parseInt(num);
var a=Math.round(n);
var c=Math.floor(n);
var b=Math.ceil(n);

document.write("<h2>Number:"+num+"</h2>");
document.write("<h2 >Round off value:"+a+"</h2>");
document.write("<h2> floor value:"+c+"</h2>");
document.write("<h2>ceil value:"+b+"</h2>");

//2. Write a program that takes a negative floating point number from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number 

var num=prompt("Enter negative floating point number:");
var n=parseFloat(num);
var a=Math.round(n);
var c=Math.floor(n);
var b=Math.ceil(n);

document.write("<h2> Number:"+n+"</h2>");
document.write("<h2>Round off value:"+a+"</h2>");
document.write("<h2>floor value:"+c+"</h2>");
document.write("<h2>ceil value:"+b+"</h2>");

//3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5 
 
var n=-3;
var new_n=Math.abs(n);
document.write("<h2> Absolute value of "+n+" is "+new_n+"</h2>");


//4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

var number=Math.random();
var improvedNum = (number * 6) + 1;
var final = Math.floor(improvedNum);
document.write("<h2> random dice value:"+final+"</h2>");


//5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser 
 
var number=Math.random();
var improvedNum = (number * 2) + 1;
var final = Math.floor(improvedNum);
if(final===1){
    document.write("<h3>Random coin value=Head</h3>");
}
else{
    document.write("<h3>Random coin value=Tail</h3>");
}

//6. Write a program that shows a random number between 1 and 100 in your browser.

var num=Math.floor(Math.random()*100)+1;
document.write("<h3>Random value from 1 to 100 is:"+num+"</h3>");


//7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be: 

var weight=prompt("Enter your weight in kilogram");
var num = weight.match(/\d+/g)
var weight_float=parseFloat(num).toFixed(1);

document.write("<h3>The weight of the user is:"+weight_float+"</h3>");
//8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 

var num=Math.floor(Math.random()*10)+1;
var user_input=+prompt("Guess the number from 1 to 10:");

if(num===user_input){
    alert("Congratulation!You have guessed the right number!");

}
else{
    alert("Try again!");
}