//Chapter 36 to 38:

//1. Write a function that displays current date & time in your browser. 

function tellTime() {  
    var now = new Date();  
    alert("Date:" + now); 
}
 
tellTime();

//2. Write a function that takes first & last name and then it greets the user using his full name. 
 
function greet() {
    var firstname=prompt("Enter your first name?");
    var lastname=prompt("Enter your first name?");
    var fullname=firstname+lastname
    alert(fullname+"Welcome to this page");
}

greet();

//3. Write a function that adds two numbers (input by user) and returns the sum of two numbers. 

function add(){
    var num1=prompt("Enter a number");
    var num2=prompt("Enter a number");
    var sum =(num1+num2);
    alert("Sum of the numbers you enteredis:"+sum)
}

add();

//4. Calculator:  Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser. 

var num1=+prompt("Enter a number");
var num2=+prompt("Enter a number");
var operator=prompt("Enter any one operator");






function calculator(num1,num2,operator){
    if(operator=== "+"){
      var addd=(num1+num2);
      document.write("Sum of given num is"+addd);

    }
    else if(operator ==="-"){
    
      var sub=(num1-num2);
      document.write("Subration of given num is"+sub);
    }
    else if(operator === "*"){
      var mul=(num1*num2);  
      document.write("Multipilication of given num is"+mul);
    }
    else{
      var div=(num1/num2);  
      document.write("<h1>Division of given num is</h1>"+div);
    }
}

calculator(num1,num2,operator);


//5. Write a function that squares its argument. 

function square(number) {
    return number * number;
  }

var number=prompt("Enter any number you want to get square of:")
var n=square(number);
  
document.write("<h1>Square of num is:</h1>"+n);

//6. Write a function that computes factorial of a number. 
 
function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }

var n=prompt("Enter any number you want to get factorial of:")
var f=factorial(n);
  
document.write("<h1>Factorial of num is:</h1>"+f);
//7. Write a function that take start and end number as inputs & display counting in your browser. 
 
var num1=+prompt("Enter first number");
var num2=+prompt("Enter last number"); 

function counting(num1,num2){
  document.write("<h2>Counting:</h2>");
  for(var i=num1;i<=num2;i++){
     document.write("<br>"+i);
  }
}  
counting(num1,num2);
//8. Write a nested function that computes hypotenuse of a right angle triangle.  Hypotenuse2 = Base2 + Perpendicular2 
//Take base and perpendicular as inputs. Outer function : calculateHypotenuse() Inner function: calculateSquare() 


var base=+prompt("Enter Base of the triangle");
var perpendicular=+prompt("Enter Perpendicular of the triangle"); 

function Hypotenuse(base,perpendicular){
  function Square(x){
    return x*x;}
  return Math.sqrt(Square(base)+Square(perpendicular));

   
}
function SecondFunction(){
  var result=Hypotenuse(1,3);
  document.write("<h2>Hypotenuse:"+result+"</h2>")
}
//9. Write a function that calculates the area of a rectangle.      A = width * height     Pass width and height in following manner: i. Arguments as value ii. Arguments as variables 

var width=+prompt("Enter width of rectangle");
var height=+prompt("Enter height of rectangle");

function Area(width,height){
    var area= width* height;
    return area;
}
document.write("<h2>area:</h2>"+Area(width,height));
document.write("<h2>area:</h2>"+Area(3,4));
//. 10 Write a JavaScript function that checks whether a passed string is palindrome or not?   A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

var string=prompt("Enter a string to check whether it is palindrome or not:");

function Palindrome(string){
  var backward=string.slice(string.lenght-1,);
  if(string===backward){
    document.write("<h2>The above string is palindrome!</h2>");
  }
  else{
    document.write("<h2>The above string is not apalindrome!</h2>");
  }
}
Palindrome(string);
//11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.  EXAMPLE STRING : 'the quick brown fox'  EXPECTED OUTPUT : 'The Quick Brown Fox' 
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("the quick brown fox"));
//12.  Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.  EXAMPLE STRING : 'Web Development Tutorial'  EXPECTED OUTPUT : 'Development' 

var string=prompt("Enter a string");
function find_longest_word(string)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}


document.write("<h2>the longest word is</h2>"+find_longest_word(string));


//13.Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of
 
//occurrences of the specified letter within the string.

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
document.write("</br>the occurence of 'o' in the string is:"+char_count('w3resource.com', 'o'));



//14. The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here. Create a function called calcCircumference: • Pass the radius to the function. • Calculate the circumference based on the radius, and output "The circumference is NN". Create a function called calcArea: • Pass the radius to the function. • Calculate the area based on the radius, and output "The area is NN". 
 
//Circumference of circle    =     2πr Area of circle       =     πr2 


function Circumference(radius){
  var circumference=2*3.14*radius**2;
  return circumference;
 
}
function Area(radius){
  var area=3.14*radius**2;
  return area;

}
alert("The circumference of circle is:"+Circumference(4));

alert("The area of circle is:"+Area(3));


