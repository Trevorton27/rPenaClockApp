//get todays date
const date = new Date();

//get the current month name
const monthsOfYear = ["January", "Feburary", 
                      "March", "April", 
                      "May", "June", 
                      "July", "August", 
                      "September", "October", 
                      "November", "December"];
const month = monthsOfYear[date.getMonth()];

//get day of the week + day of the month
const daysOfWeek = ["Sunday", "Monday", 
                    "Tuesday", "Wednesday", 
                    "Thursday", "Friday", 
                    "Saturday"]
const weekday = daysOfWeek[date.getDay()];
const day = date.getDate();

//get current year
const year = date.getFullYear();


//write date and time on initial load
document.getElementById("clock").innerHTML = getTime();
document.getElementById("date").innerHTML = weekday + ", " + month + " " + day + " " + year;


//update the "clock" element in the HTML file every 1000ms (1s)
setInterval(function() {
    document.getElementById("clock").innerHTML = getTime();
}, 1000)

//consolidate functionality for getting and formatting the current time
function getTime() {
    //calling a new Date object to get the most recent hour / minute / second
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();

    //hours are from 0-23, 12-23 is going to be PM
    const meridiem = hour > 11 ? "PM" : "AM";
    
    //adding '0' to front of seconds and minutes if < 10
    const secondsFormatted = seconds < 10 ? "0" + seconds : seconds;
    const minutesFormatted = minute < 10 ? "0" + minute : minute;

    //hours are from 0-23, converting to 1-12 AM/PM format at adding 0 if < 10
    const hourConverted = hour % 12 === 0 ? "12" : hour % 12;
    const hourFormatted = hourConverted < 10 ? "0" + hourConverted : hourConverted;

    return hourFormatted + ":" + minutesFormatted + ":" + secondsFormatted + " " + meridiem;

}