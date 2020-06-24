




//9. Write a function that calculates the area of a rectangle.      A = width * height     Pass width and height in following manner: i. Arguments as value ii. Arguments as variables 

var width=+prompt("Enter width of rectangle");
var height=+prompt("Enter height of rectangle");

function Area(width,height){
    var area= width* height;
    return area;
}
document.write("<h2>area:</h2>"+Area(width,height));
document.write("<h2>area:</h2>"+Area(3,4));


//11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.  EXAMPLE STRING : 'the quick brown fox'  EXPECTED OUTPUT : 'The Quick Brown Fox' 

var string=prompt("Enter a string");

function Capitalize(string){
  var breaks=string.toLowerCase().split(" ");
  for(var i=0;i<breaks.lenght;i++){
    string[i] = string[i][0].toUpperCase() + string[i].slice(1);
  }
  
  document.write(string.join(" "));
  return string;
  

}
Capitalize(string);




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

var a=char_count('w3resource.com', 'o');
document.write("ally"+a);



