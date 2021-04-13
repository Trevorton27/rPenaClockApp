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

//consolidate code for getting and formatting the current time
function getTime() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    const meridiem = hour > 11 ? "PM" : "AM";
    
    const secondsFormatted = seconds < 10 ? "0" + seconds : seconds;
    const minutesFormatted = minute < 10 ? "0" + minute : minute;
    const hourFormatted = hour % 12 === 0 ? "12" : hour % 12;

    return hourFormatted + ":" + minutesFormatted + ":" + secondsFormatted + " " + meridiem;

}