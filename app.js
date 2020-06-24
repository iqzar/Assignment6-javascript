//Chapter 21 to 25:
//1. Write a program that takes two user inputs for first and
//last name using prompt and merge them in a new variable
//titled fullName. Greet the user using his full name.

var firstname=prompt("Enter your first name");
var lastname=prompt("Enter your last name");

var  fullName =firstname +" "+ lastname;
alert(fullName +  " welcome to this page ");

//2. Write a program to take a user input about his favorite
//mobile phone model. Find and display the length of user
//input in your browser.

var phone=prompt("Which is your favourite mobile phone ?");
var phonelength = phone.length;

document.write("<h2>My favourite phone is:</h2>" + phone);
document.write("<br><h2>Length of string is:</h2>" + phonelength);

//3. Write a program to find the index of letter “n” in the word
//“Pakistani” and display the result in your browser .

var s="Pakistani";
var n=s.indexOf("n");

document.write("<h2>String:</h2>"+s);
document.write("<h2>Index of n is:</h2>" +n);

//4. Write a program to find the last index of letter “l” in the
//word “Hello World” and display the result in your browser.

var str= "Hello World";
var n = str.lastIndexOf("l");

document.write("<h2>String:</h2>"+str);
document.write("<h2>Last index of letter l is:</h2>" +n);

//5. Write a program to find the character at 3rd index in the
//word “Pakistani” and display the result in your browser.

var word= "Pakistani";
var letterindex =word.charAt(3);

document.write("<h2>String:</h2>"+word);
document.write("<h2>Character of index 3 is:</h2>" +letterindex);


//6. Repeat Q1 using string concat() method. 
var firstname=prompt("Enter your first name ");
var lastname=prompt("Enter your last name");

var  fullName =firstname.concat(lastname);
alert(fullName +  " welcome to this page ");

//7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser. 

var city="Hyderabad";
var newcity=city.replace("Hyder", "Islam");

document.write("<h2>City:"+city+"</h2>");
document.write("<h2>After replacement:" +newcity+"</h2>");

//8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”; 

var habit=" “Ali and Sami are best friends. They play cricket and football together.”";
var newhabit=habit.replace(/and/gi, "&");

document.write("<h2>Message:"+habit+"</h2>");
document.write("<h2>After replacement:" +newhabit+"</h2>");

//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser

var number="472";
var a = parseInt("472");

document.write("<h2>Value:</h2>"+number);
document.write("<br><h2>Type:" +typeof number+"</h2>");
document.write("<h2>Value:" +a+"</h2>");
document.write("<br><h2>Type:" +typeof a+"</h2>");


//10. Write a program that takes user input. Convert and show the input in capital letters


var str=prompt("Enter string to change in the capital letter!");
document.write("<br><h2>User Input:" +str+"</h2>");

var cap=str.toUpperCase();
document.write("<br><h2>Uppercase:" +cap+"</h2>");


//11. Write a program that takes user input. Convert and show the input in title case. 

var word=prompt("Enter string to change in the Title case!");
var a= word.charAt(0).toUpperCase();
var b=word.slice(1);
document.write("<br><h2>User Input:" +word+"</h2>");
document.write("<br><h2>User Input:" +a+b+"</h2>");



//12. Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser. 
 
var num = 35.36 ; 
document.write("<br><h2>Number:</h2>" +num);

var str=num.toString().replace(".","");
document.write("<br><h2>String:" +str+"</h2>");


//13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ . 
 

var username=prompt("Enter your username");

if (username.includes("@")||username.includes(".")||username.includes("!")||username.includes(",")){



    alert("Username is invalid!");
}
else{
    alert("Username you entered is valid!");
}
//14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example: 

var A=["cake","apple pie","cookie","chips","patties"];

var order=prompt("Welcome to ABC Bakery,What do you want to order sir/madam");
var order=order.toLowerCase();

if(A.includes(order)){
    alert(order+"  is available at index "+A.indexOf(order)+" in our bakery.");
}
else{
    alert("We are sorry."+order+"  is not  available in our bakery.");
}


//15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document. 
var password=prompt("Enter password");
var letters = /^[0-9a-zA-Z]+$/;

if(password.length!==6){
    alert("Password must contain atleast 6 characters\nPlease enter a valid Password!");
}
if (password.charCodeAt(0)<48&&password.charCodeAt(0)>57){
    alert("Password is invalid it cannot start with number!");
}

if(password.value.match(letters)){
    alert("Password you entered is valid!");
    }
else{
    alert("Password is invalid it must contain characters only!");
    }
    









//17. Write a program to display the last character of a user input. 

var userinput=prompt("Enter a string");
var a=userinput.charAt(userinput.lenght-1);
document.write("<h2>UserInput:"+userinput+"</h2>");
document.write("<h2>Last Character of input:"+a+"</h2>");
//16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; 


var university="University of Karachi";

var arr=university.split("");
for (var i=0;i>arr.lenght;i++){
    document.write("<h3>"+arr.charAt(i)+"</h3>");

}

//18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
function count(main_str, sub_str) 
    {
    main_str += '';
    sub_str += '';

    if (sub_str.length <= 0) 
    {
        return main_str.length + 1;
    }

       subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
    }
 
document.write("<h1>Number of occurance of 'the':</h1>"+(count("The quick brown fox jumps over the lazy dog", 'the')));