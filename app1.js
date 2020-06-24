//Chapters 31 to 34

//1. Write a program that displays current date and time in your browser.

var d = new Date();
document.write("<h3>"+d+"</h3>");

//2. Write a program that alerts the current month in words. For example December. 

var monthNames =["Janury", "Februry", "March", "April" ,"May", "June", "July", "August", "September" ,"October", "November" , "December"]
var d = new Date(); 
var currentMonth = d.getMonth();
var nameofmonth = monthNames[currentMonth];

document.write("<h1>Current Month</h1>");
document.write("<h3>"+nameofmonth+"</h3>");


//3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
var now = new Date(); 
var theDay = now.getDay(); 
var nameOfToday = dayNames[theDay];

document.write("<h1>Today is: </h1>");
document.write("<h3>"+nameOfToday+"</h3>");

//4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. 

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
var now = new Date(); 
var theDay = now.getDay(); 
var nameOfToday = dayNames[theDay];

if(nameOfToday==="Sun" || nameOfToday==="Sat"){
    alert("It's Fun day");
}

//5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”. 
 
var now = new Date(); 
var theDay = now.getDate(); 

if (theDay <= 15) {
    alert("First fifteen days of the month");
} else {
    alert("Last fifteen days of the month");
}

//6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object. 

var d = new Date(); 
var millsSince = d.getTime();
var minutes=millsSince/60
 
document.write("<h1>"+d+"</h1>");
document.write("<h1>Elapsed milisecondes since midnight:</h1><h3>"+millsSince+"</h3>");
document.write("<h1>Elapsed minutes since midnight:</h1><h3>"+minutes+"</h3>");

//7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 

var d = new Date();
var hours = d.getHours();

if (hours ===0 || hours <= 12){
    alert("Its PM");
} else {
    alert("Its AM");
}

//8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate. 

var d= new Date();

var laterDate = new Date(d.getFullYear(),12,0)
document.write("<h1>LaterDate:</h1><h3>"+laterDate+"</h3>");


//9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015 

var today= new Date();
var ramzanday=new Date("June 18, 2015");
 var msToday = today.getTime(); 
var msramzanday = ramzanday.getTime();

var msDiff = msToday-msramzanday;

var dDiff = msDiff / (1000 * 60 * 60 * 24);
 dDiff = Math.floor(dDiff)
 document.write("<h3>"+dDiff+" days has passed since first ramzan,2015</h3>");

 //10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015. 
 
 var today= new Date("Dec 05,2015");
 var day2=new Date("Jan 1, 2015");
 var msToday = today.getTime(); 
var msday2 =day2.getTime();

var msDiff = msToday-msday2;

var dDiff = msDiff / (1000 * 60 );
 dDiff = Math.floor(dDiff)
 document.write("<h3>On refrence date "+today+"</h3>");
 document.write("<h3>"+dDiff+" Seconds has passed since the beginning of 2015</h3>");

//11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

var current= new Date();
var d = new Date();
d.setHours(d.getHours() - 1);

document.write("<h2>Current date: "+current+"</h2>");
document.write("<h2>1 hour ago it was: "+d+"</h2>");

//12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back? 

var date = new Date();
date.setFullYear( date.getFullYear() - 100 );
alert((date.getMonth() ) + '/' + (date.getDate()) + '/' + (date.getFullYear()));

document.write("<h2>Current date: "+current+"</h2>");
document.write("<h2>100 years back, it was: "+date+"</h2>");

//13. Write a program to ask the user about his age. Calculate and show his birth year in your browser. 

var date=new Date();
var age=+prompt("Enter your age ?");
var currentyear=date.getFullYear();
var birthyear=currentyear-age
document.write("<h3>Age:"+age+"</h3>");
document.write("<h3>Birth Year:"+birthyear+"</h3>");
 
//14. Write a program to generate your K-Electric bill in your browser

var name=prompt("Enter customer name:")
var mon="June"
var no_units=+prompt("No of units used:")
var charge_perunit=16;
var Amount_Payable  = no_units*charge_perunit;
var amount=Math.round(Amount_Payable,2)
var surcharges=350;
var gross=Amount_Payable+surcharges;
var gross_amount=Math.round(gross,2)
document.write("<h2>K-electric Bill</h2>");
document.write("<h3>Customer Name:"+name+"</h3>");
document.write("<h3>Month:"+mon+"</h3>");
document.write("<h3>No of Units:"+no_units+"</h3>");
document.write("<h3>Charges per unit:"+charge_perunit+"</h3>");
document.write("<h3>Net Amount Payable:"+gross_amount+"</h3>");
document.write("<h3>Late Payment Surcharges:"+surcharges+"</h3>");
document.write("<h3>Gross Amount Payable:"+gross+"</h3>");




